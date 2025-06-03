import { useNavigate } from 'react-router-dom';

const PhotographerCard = ({ photographer }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg hover:scale-[1.05] transition-all duration-200">
      <img
        src={photographer.profilePic}
        alt={photographer.name}
        className="w-full h-48 object-cover rounded-xl mb-3"
      />
      <h3 className="text-xl font-semibold">{photographer.name}</h3>
      <p className="text-gray-600">{photographer.location}</p>
      <p className="mt-1 text-sm text-gray-500">Starting from ₹{photographer.price}</p>
      <p className="mt-1 text-yellow-500">⭐ {photographer.rating}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {photographer.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-gray-200 text-sm px-2 py-1 rounded-full text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <button
        onClick={() => navigate(`/photographer/${photographer.id}`)}
        className="mt-4 w-full bg-indigo-600 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
      >
        View Profile
      </button>
    </div>
  );
};

export default PhotographerCard;
