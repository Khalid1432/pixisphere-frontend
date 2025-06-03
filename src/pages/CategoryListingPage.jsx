import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotographers } from '../redux/photographersSlice';
import PhotographerCard from '../components/PhotographerCard';
import Filters from '../components/Filters';
import SearchBar from '../components/SearchBar';
import Spinner from '../components/Spinner'

const CategoryListingPage = () => {
  const dispatch = useDispatch();
  const { data: photographers, loading, error } = useSelector((state) => state.photographers);

  const [filters, setFilters] = useState({
    price: 20000,
    rating: 0,
    styles: [],
    city: '',
    sort: '',
  });

  const [searchQuery, setSearchQuery] = useState('');
  // pagination limit
  const [visibleCount, setVisibleCount] = useState(6); 

  useEffect(() => {
    dispatch(fetchPhotographers());
  }, [dispatch]);

  // Reset visible count when filters/search changes
  useEffect(() => {
    setVisibleCount(6);
  }, [filters, searchQuery]);

  const filteredPhotographers = useMemo(() => {
    let filtered = [...photographers];

    // Apply filters
    filtered = filtered.filter((p) => p.price <= filters.price);
    if (filters.rating > 0) {
      filtered = filtered.filter((p) => p.rating >= filters.rating);
    }
    if (filters.styles.length > 0) {
      filtered = filtered.filter((p) =>
        filters.styles.every((style) => p.styles.includes(style))
      );
    }
    if (filters.city) {
      filtered = filtered.filter((p) => p.location === filters.city);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sorting
    if (filters.sort === 'priceLowHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'ratingHighLow') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (filters.sort === 'recent') {
      filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [photographers, filters, searchQuery]);

  const visiblePhotographers = filteredPhotographers.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Maternity Photographers in Bengaluru</h1>

      <SearchBar setSearchQuery={setSearchQuery} />

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters */}
        <div className="md:w-1/4">
          <Filters filters={filters} setFilters={setFilters} />
        </div>

        {/* Photographer Grid */}
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading && <Spinner/>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && visiblePhotographers.length === 0 && (
              <p>No photographers match your filters.</p>
            )}
            {visiblePhotographers.map((photographer) => (
              <PhotographerCard key={photographer.id} photographer={photographer} />
            ))}
          </div>

          {/* Load More Button */}
          {!loading && visiblePhotographers.length < filteredPhotographers.length && (
            <div className="mt-6 text-center">
              <button
                onClick={handleLoadMore}
                className="bg-indigo-600 text-white py-2 px-4 cursor-pointer rounded-lg hover:bg-indigo-700"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryListingPage;
