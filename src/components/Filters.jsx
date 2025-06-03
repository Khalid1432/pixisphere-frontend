import { useState, useEffect } from 'react';

const allStyles = ['Traditional', 'Candid', 'Studio', 'Outdoor'];
const allCities = ['Bengaluru', 'Delhi', 'Mumbai', 'Hyderabad'];

const Filters = ({ filters, setFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleCheckboxChange = (key, value) => {
    const values = localFilters[key];
    if (values.includes(value)) {
      updateFilter(key, values.filter((v) => v !== value));
    } else {
      updateFilter(key, [...values, value]);
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-sm space-y-6 sticky top-6">
      <h2 className="text-lg font-semibold">Filters</h2>

      {/* Price Range */}
      <div>
        <label className="block font-medium">Max Price: ₹{filters.price}</label>
        <input
          type="range"
          min="5000"
          max="20000"
          step="1000"
          value={filters.price}
          onChange={(e) => updateFilter('price', Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      {/* Ratings */}
      <div>
        <label className="block font-medium mb-1">Ratings</label>
        {[4, 3].map((rating) => (
          <label key={rating} className="block cursor-pointer">
            <input
              type="radio"
              name="rating"
              checked={filters.rating === rating}
              onChange={() => updateFilter('rating', rating)}
              className="mr-2 cursor-pointer"
            />
            {rating}+
          </label>
        ))}
      </div>

      {/* Styles */}
      <div>
        <label className="block font-medium mb-1">Styles</label>
        {allStyles.map((style) => (
          <label key={style} className="block cursor-pointer">
            <input
              type="checkbox"
              checked={filters.styles.includes(style)}
              onChange={() => handleCheckboxChange('styles', style)}
              className="mr-2 cursor-pointer"
            />
            {style}
          </label>
        ))}
      </div>

      {/* City */}
      <div>
        <label className="block font-medium mb-1">City</label>
        <select
          value={filters.city}
          onChange={(e) => updateFilter('city', e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-1 cursor-pointer"
        >
          <option value="">All Cities</option>
          {allCities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {/* Sorting */}
      <div>
        <label className="block font-medium mb-1">Sort By</label>
        <select
          value={filters.sort}
          onChange={(e) => updateFilter('sort', e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-1 cursor-pointer"
        >
          <option value="">None</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="ratingHighLow">Rating: High to Low</option>
          <option value="recent">Recently Added</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
