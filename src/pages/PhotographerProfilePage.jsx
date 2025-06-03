import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PhotographerGallery from '../components/PhotographerGallery';
import ReviewsSection from '../components/ReviewsSection';
import InquiryModal from '../components/InquiryModal';

const PhotographerProfilePage = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  const photographer = useSelector((state) =>
    state.photographers.data.find((p) => p.id === parseInt(id))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!photographer) {
    return <p className="p-6 text-center">Photographer not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-6">
        <img
          src={photographer.profilePic}
          alt={photographer.name}
          className="w-full sm:w-64 h-64 object-cover rounded-xl"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold">{photographer.name}</h1>
          <p className="text-gray-600 mt-1">{photographer.location}</p>
          <p className="mt-2 text-gray-800">{photographer.bio}</p>

          <p className="mt-3">
            <span className="font-semibold">Styles:</span>{' '}
            {photographer.styles.join(', ')}
          </p>
          <p>
            <span className="font-semibold">Tags:</span>{' '}
            {photographer.tags.join(', ')}
          </p>
          <p className="mt-2 font-semibold">Starting Price: ₹{photographer.price}</p>
          <p className="text-yellow-500 mt-1">⭐ {photographer.rating}</p>

          <button
            onClick={() => setShowModal(true)}
            className="mt-4 bg-indigo-600 text-white py-2 px-4 cursor-pointer rounded-lg hover:bg-indigo-700"
          >
            Send Inquiry
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Gallery</h2>
      <PhotographerGallery images={photographer.portfolio} />

      <h2 className="text-2xl font-bold mt-10 mb-4">Reviews</h2>
      <ReviewsSection reviews={photographer.reviews} />

      {showModal && <InquiryModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default PhotographerProfilePage;
