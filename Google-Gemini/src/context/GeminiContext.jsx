import { createContext, useState } from "react";
import main from "../config/gemini.js";

export const GeminiContext = createContext(null);

export default function GeminiContextProvider({ children }) {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
    const [error, setError] = useState("");
    
    const onset = async (prompt) => {
        await main(prompt)
    }

    const contextvalue = {
    onset,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    loading,
    resultData,
    error,
  };
  return (
    <GeminiContext.Provider value={contextvalue}>
      {children}
    </GeminiContext.Provider>
  );
}
