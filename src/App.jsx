import { Routes, Route } from 'react-router-dom';
import CategoryListingPage from './pages/CategoryListingPage';
import PhotographerProfilePage from './pages/PhotographerProfilePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CategoryListingPage />} />
      <Route path="/photographer/:id" element={<PhotographerProfilePage />} />
    </Routes>
  );
}

export default App;
