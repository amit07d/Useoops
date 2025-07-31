import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { GeminiContext } from "../../context/GeminiContext";
import DOMPurify from "dompurify";

function Main() {
  const {
    onSet,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(GeminiContext);

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <img
              src={assets.gemini_icon}
              alt="Gemini"
              className="h-6 w-6 invert"
            />
          </div>
          <p className="text-xl font-bold text-gray-800">Omnify</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
          <img
            src={assets.user_icon}
            alt="User"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-6 overflow-y-auto pb-6">
        {!showResult ? (
          <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
            <div className="mb-8">
              <div className="h-32 w-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                <img
                  src={assets.gemini_icon}
                  alt="Gemini"
                  className="h-16 w-16"
                />
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-3">
                Hello! I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Omnify
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Ask me anything, from creative ideas to technical help.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex gap-4 animate-slide-up">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={assets.user_icon}
                  alt="User"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm max-w-3xl">
                <p className="text-gray-800">{recentPrompt}</p>
              </div>
            </div>

            <div className="flex gap-4 animate-slide-up">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <img
                  src={assets.gemini_icon}
                  alt="Gemini"
                  className="h-6 w-6 invert"
                />
              </div>
              {loading ? (
                <div className="bg-blue-50 p-4 rounded-2xl shadow-sm max-w-3xl w-full">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="h-3 w-3 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                    <div className="h-3 w-3 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              ) : (
                <div className="bg-blue-50 p-4 rounded-2xl shadow-sm max-w-3xl">
                  <p
                    className="text-gray-800 prose"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(resultData),
                    }}
                  ></p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent pt-6 pb-4">
        <div className="relative max-w-3xl mx-auto">
          <div className="relative bg-white rounded-full shadow-lg border border-gray-200 p-2 pl-6 pr-4 transition-all duration-300 hover:shadow-xl">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="🔒 Enter a prompt for Omnify"
              className="w-full py-3 outline-none bg-transparent text-gray-700 placeholder-gray-400"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onSet();
                }
              }}
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Attach file"
              >
                <img src={assets.gallery_icon} alt="" className="h-5 w-5" />
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Use microphone"
              >
                <img src={assets.mic_icon} alt="" className="h-5 w-5" />
              </button>
              <button
                onClick={onSet}
                disabled={!input.trim()}
                className={`p-2 rounded-full transition-colors ${
                  input.trim()
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    : "bg-gray-200 cursor-not-allowed"
                }`}
                aria-label="Send message"
              >
                <img
                  src={assets.send_icon}
                  alt=""
                  className="h-5 w-5 invert"
                />
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-3">
            Omnify may display inaccurate info. Double-check important details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;