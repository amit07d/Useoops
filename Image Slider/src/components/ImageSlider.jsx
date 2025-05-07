import React, { useEffect, useState } from "react";
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";

function ImageSlider({ url, page = "1", limit = "10" }) {
  const [image, setImage] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();
        setImage(data);
      } catch (error) {
        console.error("Image fetch error:", error);
      }
    }
    fetchImages();
  }, [url, page, limit]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? image.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === image.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center">
      {image && image.length > 0 ? (
        <img
          src={image[current].download_url}
          alt={image[current].author}
          className="w-full h-[400px] object-cover rounded-lg"
        />
      ) : (
        <div>No Image found</div>
      )}

      <div className="flex justify-between w-full mt-2 px-4">
        <IoArrowBackCircle onClick={handlePrev} size={40} />
        <IoArrowForwardCircle onClick={handleNext} size={40} />
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {image.map((_, index) => (
          <FaRegCircle
            key={index}
            onClick={() => setCurrent(index)}
            className={index === current ? "text-blue-900" : "text-amber-700"}
            size={20}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
