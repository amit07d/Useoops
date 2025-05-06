import React, { useState } from "react";
import { PiStarBold } from "react-icons/pi";

function StarRating() {
  const [rating, setRating] = useState(0);
  return (
    <div className="flex flex-row space-x-4 text-2xl cursor-pointer justify-center items-center mt-4">
      {[...Array(7)].map((_, index) => (
        <PiStarBold
          key={index}
          onClick={() => setRating(index + 1)}
          className={index < rating ? "text-amber-500" : "text-gray-700"}
        ></PiStarBold>
      ))}
    </div>
  );
}

export default StarRating;
