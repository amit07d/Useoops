import React from "react";
import { assets } from "../../assets/assets.js";

function Main() {
  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-4 flex flex-col">

      <div className="flex items-center justify-between mb-8">
        <p className="text-lg font-medium text-gray-800">Gemini</p>
        <img
          src={assets.user_icon}
          alt="User"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>

<div className="flex-1 flex flex-col items-center justify-center text-center mb-8">
  <h1 className="text-4xl font-bold text-gray-800 mb-4">
    Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Gemini,</span>
  </h1>
  <p className="text-xl text-gray-600">
    your personal AI assistant
  </p>
</div>

      <div className="sticky bottom-8 w-full max-w-2xl mx-auto">
        <div className="relative bg-white rounded-full shadow-lg p-2 pl-6 pr-4">
          <input 
            type="text" 
            placeholder="Ask Gemini..." 
            className="w-full py-3 outline-none bg-transparent text-gray-700"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <img src={assets.gallery_icon} alt="Attach" className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <img src={assets.mic_icon} alt="Microphone" className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <img src={assets.send_icon} alt="Send" className="h-5 w-5" />
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center mt-3">
          Google Terms and the Google Privacy Policy apply. Gemini can make mistakes, so double-check it.
        </p>
      </div>
    </div>
  );
}

export default Main;