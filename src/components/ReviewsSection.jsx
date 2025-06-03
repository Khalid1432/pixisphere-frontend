
const ReviewsSection = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p className="text-3xl font-semibold mt-20">No reviews available.</p>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-lg">{review.name}</h4>
            <span className="text-yellow-500 font-medium">⭐ {review.rating}</span>
          </div>
          <p className="text-gray-700 mt-2">{review.comment}</p>
          <p className="text-sm text-gray-500 mt-1">{new Date(review.date).toDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsSection;
