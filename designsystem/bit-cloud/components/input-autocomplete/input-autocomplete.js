/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useEffect, useRef } from 'react';
import { Loading } from '@konsumentverket-sverige/designsystem.loading';
import {
  containerStyle,
  containerHasSuggestionsStyle,
  inputStyle,
  inputHasSuggestionsStyle,
  dropdownWrapperStyle,
  dropdownItemStyle,
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
  const inputRef = useRef(null);

  useEffect(() => {
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
        ...item,
        description: item.description.replace(", Sverige", ""),
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
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.text);
    setSuggestions([]);
    setIsDropdownOpen(false);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div css={[containerStyle, (isDropdownOpen ? containerHasSuggestionsStyle : null)]}>
      <input
        css={[inputStyle, (isDropdownOpen ? inputHasSuggestionsStyle : null)]}
        type="text"
        id="autocomplete-input"
        ref={inputRef}
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder={placeholder}
        aria-autocomplete="list"
        aria-controls={"input-autocomplete-suggestions"}
        aria-expanded={isDropdownOpen}
        aria-activedescendant={isDropdownOpen ? "input-autocomplete-suggestions" : undefined}
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
              css={dropdownItemStyle}
              key={index}
              role="option"
              id={`autocomplete-option-${index}`}
              onClick={() => handleSuggestionClick(suggestion)}
              tabIndex="-1"
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
