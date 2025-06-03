const PhotographerGallery = ({ images }) => {
  if (!images || images.length === 0) return <p>No gallery images available.</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Portfolio ${i + 1}`}
          className="w-full h-48 object-cover rounded-lg hover:scale-[1.04] transition-all duration-200 cursor-pointer"
        />
      ))}
    </div>
  );
};

export default PhotographerGallery;
