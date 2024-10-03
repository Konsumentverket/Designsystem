/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useEffect, useRef } from 'react';
import { Loading } from '@konsumentverket-sverige/designsystem.loading';
import {MonoDelete} from '@konsumentverket-sverige/designsystem.utils';
import {
  containerStyle,
  containerHasSuggestionsStyle,
  labelStyle,
  inputStyle,
  inputHeaderSearchStyle,
  inputHasSuggestionsStyle,
  inputHeaderSearchHasSuggestionsStyle,
  dropdownWrapperStyle,
  dropdownItemStyle,
  dropdownItemActiveStyle,
  dropdownButtonStyle,
  loadingWrapperStyle,
  dropdownPositionRelativeStyle,
  inputWrapper,
  clearInput,
} from './input-autocomplete.css.js';

const defaultFormatResult = (data) =>
  data.predictions.map((item) => ({
    ...item,
    description: item.description.replace(', Sverige', ''),
  }));

export const InputAutocomplete = ({
  fetchUrl,
  callbackOnClick = () => { },
  placeholder,
  dropdownPositionRelative = false,
  ariaLabelClearInput = 'Rensa sökfältet',
  formatResult = defaultFormatResult,
  suggestionKey = 'description',
  useHeaderSearchStyle = false,
  focusOnOpen = false,
}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [skipSearch, setSkipSearch] = useState(false);
  const autocompleteRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (skipSearch) {
      setSkipSearch(false);
      return;
    }
    const timer = setTimeout(() => {

      if (query) {
        fetchSuggestions(query);
      } else {
        setSuggestions([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    focusOnOpen ? focusOnInputRef() : inputRef.current?.blur();
    return () => inputRef.current?.blur();
  }, [focusOnOpen]);

  const fetchSuggestions = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await fetch(`${fetchUrl}${searchTerm}`);
      const data = await response.json();

      const result = formatResult(data);

      setSuggestions(result);
      setIsDropdownOpen(true);
    } catch (error) {
      console.error(error);
      setSuggestions([]);
      setIsDropdownOpen(false);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setActiveIndex(-1);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion[suggestionKey]);
    setSkipSearch(true);
    setSuggestions([]);
    setIsDropdownOpen(false);
  };

  const focusOnInputRef = () =>  inputRef.current.focus();

  const handleClearInput = () => {
    setQuery('');
    focusOnInputRef();
  }

  const handleInputKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsDropdownOpen(false);
      return;
    }

    if (event.key === 'ArrowDown') {
      setActiveIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (event.key === 'ArrowUp') {
      setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    } else if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault();
      handleSuggestionClick(suggestions[activeIndex]);
      callbackOnClick(event, suggestions[activeIndex]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [autocompleteRef]);

  const showingResult = isDropdownOpen && suggestions.length > 0 && !loading;

  return (
    <div
      ref={autocompleteRef}
      css={[containerStyle, (showingResult ? containerHasSuggestionsStyle : null)]}
    >
      <div css={inputWrapper}>
        <label
          css={[labelStyle]}
          htmlFor="autocomplete-input"
        >
          {placeholder}
        </label>
        <input
          role="combobox"
          ref={inputRef}
          placeholder={placeholder}
          autoComplete="off"
          css={[
            inputStyle,
            useHeaderSearchStyle ? inputHeaderSearchStyle : null,
            (showingResult && !useHeaderSearchStyle ? inputHasSuggestionsStyle : null),
            (showingResult && useHeaderSearchStyle ? inputHeaderSearchHasSuggestionsStyle : null),
          ]}
          type="text"
          id="autocomplete-input"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          aria-autocomplete="list"
          aria-controls={"input-autocomplete-suggestions"}
          aria-expanded={isDropdownOpen}
          aria-activedescendant={activeIndex >= 0 ? `autocomplete-option-${activeIndex}` : undefined}
          aria-describedby={loading ? "loading-indicator" : undefined}
        />
        {query && (
          <button
            css={clearInput}
            onClick={handleClearInput}
            aria-label={ariaLabelClearInput}
          >
            <MonoDelete />
          </button>
        )}
      </div>
      {loading && (
        <div css={loadingWrapperStyle} id="loading-indicator" aria-live="polite">
          <Loading />
        </div>
      )}
      {isDropdownOpen && suggestions.length > 0 && !loading && (
        <ul
          css={[dropdownWrapperStyle, dropdownPositionRelative && dropdownPositionRelativeStyle]}
          id={"input-autocomplete-suggestions"}
          role="listbox"
        >
          {suggestions.map((suggestion, index) => (
            <li
              css={[dropdownItemStyle, index === activeIndex ? dropdownItemActiveStyle : null]}
              key={index}
              role="option"
              id={`autocomplete-option-${index}`}
              aria-selected={index === activeIndex}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <button
                className={"noStyle"}
                css={dropdownButtonStyle}
                onClick={(e) => callbackOnClick(e, suggestion)}
                tabIndex="-1"
              >
                {suggestion[suggestionKey]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
