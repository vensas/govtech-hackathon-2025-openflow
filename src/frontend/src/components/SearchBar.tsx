import React, { useState, useEffect, useCallback } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';

interface SearchBarProps {
  onSearch: (query: string) => void;
  loading?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading = false }) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce logic: update debouncedQuery after 400ms of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  // Trigger search when debouncedQuery changes
  useEffect(() => {
    onSearch(debouncedQuery.trim());
  }, [debouncedQuery, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Immediately trigger search on submit (bypass debounce)
    setDebouncedQuery(query);
    onSearch(query.trim());
  };

  const handleClear = () => {
    setQuery('');
    setDebouncedQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-inputgroup" style={{ width: '100%' }}>
        <InputText
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about business processes... (e.g., 'How is procurement over 10k EUR handled?')"
          disabled={loading}
          autoFocus
          style={{
            fontSize: '1.1rem',
            padding: '0.75rem 1rem',
            width: '100%',
          }}
        />
        {loading ? (
          <span className="p-inputgroup-addon" style={{ backgroundColor: 'white', border: '1px solid #ced4da', borderLeft: 'none' }}>
            <ProgressSpinner style={{ width: '24px', height: '24px' }} strokeWidth="4" />
          </span>
        ) : query ? (
          <Button
            icon="pi pi-times"
            onClick={handleClear}
            type="button"
            text
            severity="secondary"
          />
        ) : null}
        <Button
          icon="pi pi-search"
          onClick={handleSubmit}
          disabled={loading || !query.trim()}
          type="submit"
        />
      </div>
    </form>
  );
};