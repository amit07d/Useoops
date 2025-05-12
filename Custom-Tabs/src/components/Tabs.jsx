import React, { useState } from "react";

function Tabs({ tabsContent }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex border-b mb-4">
        {tabsContent.map((tabItem, index) => (
          <button
            key={tabItem.label}
            className={`px-4 py-2 text-sm border-b-2 ${
              activeTab === index ? "border-blue-500 text-blue-600 font-semibold" : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tabItem.label}
          </button>
        ))}
      </div>
      <div className="p-4 border rounded bg-gray-50">
        {tabsContent[activeTab] && tabsContent[activeTab].content}
      </div>
    </div>
  );
}

export default Tabs;
