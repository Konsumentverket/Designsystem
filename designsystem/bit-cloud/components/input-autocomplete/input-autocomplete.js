/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useEffect, useRef } from 'react';
import { Loading } from '@konsumentverket-sverige/designsystem.loading';
import {
  containerStyle,
  containerHasSuggestionsStyle,
  labelStyle,
  inputStyle,
  inputHasSuggestionsStyle,
  dropdownWrapperStyle,
  dropdownItemStyle,
  dropdownItemActiveStyle,
  dropdownButtonStyle,
  loadingWrapperStyle,
} from './input-autocomplete.css.js';

export const InputAutocomplete = ({
  fetchUrl,
  callbackOnClick = () => { },
  placeholder,
}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [skipSearch, setSkipSearch] = useState(false);
  const autocompleteRef = useRef(null);

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

  const fetchSuggestions = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await fetch(`${fetchUrl}${searchTerm}`);
      const data = await response.json();

      const result = data.predictions.map((item) => ({
        ...item, description: item.description.replace(', Sverige', ''),
      }));

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
    setQuery(suggestion.description);
    setSkipSearch(true);
    setSuggestions([]);
    setIsDropdownOpen(false);
  };

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
      handleSuggestionClick(suggestions[activeIndex]);
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
      <label
        css={[labelStyle]}
        htmlFor="autocomplete-input"
      >
        {placeholder}
      </label>
      <input
        placeholder={placeholder}
        autoComplete="off"
        css={[inputStyle, (showingResult ? inputHasSuggestionsStyle : null)]}
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
      {loading && (
        <div css={loadingWrapperStyle} id="loading-indicator" aria-live="polite">
          <Loading />
        </div>
      )}
      {isDropdownOpen && suggestions.length > 0 && !loading && (
        <ul
          css={dropdownWrapperStyle}
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
              >
                {suggestion.description}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
