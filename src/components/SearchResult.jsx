import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Results</h2>
      {query ? (
        <p>Showing results for: <strong>{query}</strong></p>
      ) : (
        <p>No search query provided.</p>
      )}

      {/* Future: Add actual search results here */}
    </div>
  );
};

export default SearchResults;
