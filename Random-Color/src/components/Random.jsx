// import React, { useState } from 'react';

// function Random() {
//   const [bgColor, setBgColor] = useState('#ffffff');

//   const getRandomHex = () => {
//     const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
//     setBgColor(hex);
//   };

//   const getRandomRGB = () => {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     setBgColor(`rgb(${r}, ${g}, ${b})`);
//   };

//   const getRandomColor = () => {
//     const colorType = Math.random() > 0.5 ? 'hex' : 'rgb';
//     if (colorType === 'hex') getRandomHex();
//     else getRandomRGB();
//   };

//   return (
//     <div style={{ backgroundColor: bgColor }}>
//       <p>Current Color: {bgColor}</p>
//       <button onClick={getRandomHex}>Create HEX Color</button>
//       <button onClick={getRandomRGB}>Create RGB Color</button>
//       <button onClick={getRandomColor}>Create Random Color</button>
//     </div>
//   );
// }

// export default Random;

import React, { useState } from "react";

function Random() {
  const [bgColor, setBgColor] = useState("#ffffff");

  const getRandomHex = () => {
    const hex =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    setBgColor(hex.toUpperCase());
    console.log(hex);
  };

  const getRandomRGB = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    setBgColor(`rgb(${r} ${g} ${b})`)
    console.log(`rgb(${r} ${g} ${b})`);
  }

  const getRandomColor = () => {
    const colorChange = Math.random() > 0.5 ? getRandomHex : getRandomRGB
    colorChange()
  }

  return (
    <div
      style={{backgroundColor: bgColor}}
      className="h-screen flex flex-col items-center justify-center space-y-4 transition-all duration-300">
      <p className="text-black font-medium">Current Color: {bgColor}</p>

      <button
        onClick={getRandomHex}
        className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition">
        Create HEX Color
      </button>
      <button
        onClick={getRandomRGB}
        className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
        Create RGB Color
      </button>
      <button
        onClick={getRandomColor}
        className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
        Create Random Color
      </button>
    </div>
  );
}

export default Random;
