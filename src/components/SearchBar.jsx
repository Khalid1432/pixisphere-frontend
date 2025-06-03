import { useCallback } from 'react';
import debounce from 'lodash.debounce';

const SearchBar = ({ setSearchQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const debouncedChange = useCallback(debounce(handleChange, 300), []);

  return (
    <input
      type="text"
      placeholder="Search by name, location, or tag..."
      onChange={debouncedChange}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
    />
  );
};

export default SearchBar;
