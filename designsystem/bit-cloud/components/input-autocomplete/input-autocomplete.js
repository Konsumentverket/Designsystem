/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { useState, useEffect, useRef } from 'react';
import { Loading } from '@konsumentverket-sverige/designsystem.loading';
import {MonoDelete} from '@konsumentverket-sverige/designsystem.utils';
import { Icon } from '@konsumentverket-sverige/designsystem.icon';
import {
  containerStyle,
  dropdownHasSuggestionsStyle,
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
  inputAndDropdownWrapper,
  inputAndSubmitWrapper,
  clearInput,
  searchButtonStyle,
  searchButtonTextStyle,
} from './input-autocomplete.css.js';

const defaultFormatSuggestionsResult = (data) =>
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
  suggestionText = 'description',
  formatSuggestionsResult = defaultFormatSuggestionsResult,
  useHeaderSearchStyle = false,
  focusOnOpen = false,
  allowFreeTextSearch = false,
  searchButton = false,
  searchButtonText = 'Sök',
}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [skipSearch, setSkipSearch] = useState(false);
  const autocompleteRef = useRef(null);
  const inputRef = useRef(null);
  const [searchButtonHeight, setSearchButtonHeight] = useState(null);

  useEffect(() => {
    if (!inputRef.current) return;

    focusOnOpen ? focusOnInputRef() : blurInputRef();
    return () => blurInputRef();
  }, [focusOnOpen]);

  useEffect(() => {
    if(!searchButton) return;
    if (!inputRef?.current) return;
    setSearchButtonHeight(inputRef.current.offsetHeight);

    return () => setSearchButtonHeight(null);
  }, [searchButton]);

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
      const result = formatSuggestionsResult(data);

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
    setQuery(suggestion[suggestionText])
    setSkipSearch(true);
    setSuggestions([]);
    setIsDropdownOpen(false);
  };

  const focusOnInputRef = () =>  inputRef.current.focus();
  const blurInputRef = () => inputRef.current.blur();

  const handleClearInput = () => {
    setQuery('');
    focusOnInputRef();
  }

  const handleFreeTextSearch = (event) => {
    const formattedQuery = formatFreeTextInputToSuggestion(query);
    handleSuggestionClick(formattedQuery);
    callbackOnClick(event, formattedQuery);
    blurInputRef();
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
    } else if (event.key === 'Enter') {
      event.preventDefault();

      // Handle when a suggestion is selected
      if (activeIndex >= 0) {
        handleSuggestionClick(suggestions[activeIndex]);
        callbackOnClick(event, suggestions[activeIndex]);
      }
      // Handle free text search if allowed
      else if (allowFreeTextSearch) {
        handleFreeTextSearch(event);
      }
      blurInputRef();
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

  const formatFreeTextInputToSuggestion = (query) => ({[suggestionText]: query})

  return (
    <div
      ref={autocompleteRef}
      css={[containerStyle]}
    >

      <div css={inputAndSubmitWrapper}>
        <div css={inputAndDropdownWrapper}>
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

          {loading && (
            <div css={loadingWrapperStyle} id="loading-indicator" aria-live="polite">
              <Loading/>
            </div>
          )}

          {query && (
            <button
              css={clearInput}
              onClick={handleClearInput}
              aria-label={ariaLabelClearInput}
            >
              <MonoDelete/>
            </button>
          )}

          {isDropdownOpen && suggestions.length > 0 && !loading && (
            <ul
              css={[
                dropdownWrapperStyle,
                dropdownPositionRelative && dropdownPositionRelativeStyle,
                showingResult && dropdownHasSuggestionsStyle,
              ]}
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
                >
                  <button
                    className={"noStyle"}
                    css={dropdownButtonStyle}
                    onClick={(e) => {
                      handleSuggestionClick(suggestion)
                      callbackOnClick(e, suggestion)
                      blurInputRef();
                    }}
                    tabIndex="-1"
                  >
                    {suggestion[suggestionText]}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {searchButton && (
          <button
            css={[searchButtonStyle, css`height: ${searchButtonHeight}px`]}
            onClick={(event) => handleFreeTextSearch(event)}
          >
            <span css={[searchButtonTextStyle]}>
              {searchButtonText}
            </span>

            <Icon
              aria-hidden="true"
              icon="MonoSearch"
            />
          </button>
        )}

      </div>
    </div>
  );
};
