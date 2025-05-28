import React, { useState } from "react";
import { assets } from "../../assets/assets.js";

function Sidebar() {
  const [isPinned, setIsPinned] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    if (!isPinned) {
      setIsHovered(false);
    }
  };
  
  const togglePin = () => {
    setIsPinned(prev => !prev);
    if (!isPinned) {
      setIsHovered(true);
    }
  };

  const isExpanded = isPinned || isHovered;

  return (
    <div
      className={`h-screen ${isExpanded ? "w-64" : "w-20"
        } bg-gray-900 text-white flex flex-col justify-between p-4 transition-all duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div className="mb-6 cursor-pointer">
          <img
            onClick={togglePin}
            src={assets.menu_icon} 
            alt="Menu" 
            className="h-6 w-6" 
          />
        </div>

        <div className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg cursor-pointer hover:bg-gray-600 mb-4">
          <img src={assets.plus_icon} alt="New Chat" className="h-5 w-5" />
          {isExpanded && <p>New Chat</p>}
        </div>

        {isExpanded && (
          <p className="text-gray-400 uppercase text-xs mb-2">Recent</p>
        )}

        <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
          <img
            src={assets.message_icon}
            alt="Message Icon"
            className="h-5 w-5"
          />
          {isExpanded && <p>What is React...</p>}  
          {/* This is sample tag i will add later history*/}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
          <img src={assets.question_icon} alt="Help" className="h-5 w-5" />
          {isExpanded && <p>Help</p>}
        </div>

        <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
          <img src={assets.history_icon} alt="Activity" className="h-5 w-5" />
          {isExpanded && <p>Activity</p>}
        </div>

        <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
          <img src={assets.setting_icon} alt="Settings" className="h-5 w-5" />
          {isExpanded && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;