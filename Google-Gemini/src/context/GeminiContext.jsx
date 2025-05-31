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

  const typingEffect = (index, nextword) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextword);
    }, 75 * index);
  };
  
  const newChat = () => {
    setLoading(false)
    setShowResult(false)
  }

  const onSet = async (prompt) => {
    setResultData("");
    setLoading(true);
    setError("");
    setShowResult(true);

    const query = prompt ?? input;

    setPrevPrompts((prev) => [...prev, query]);
    setRecentPrompt(query);

    try {
      const response = await main(query);

      const responseText = response.split("**");
      let newResponse = "";

      for (let i = 0; i < responseText.length; i++) {
        newResponse += i % 2 === 0
          ? responseText[i]
          : `<b>${responseText[i]}</b>`;
      }

      const formattedResponse = newResponse.split("*").join("</br>");
      const typingResponse = formattedResponse.split(" ");

      for (let i = 0; i < typingResponse.length; i++) {
        typingEffect(i, typingResponse[i] + " ");
      }
    } catch (err) {
      setError("Failed to fetch response");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const contextvalue = {
    onSet,
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
    newChat
  };

  return (
    <GeminiContext.Provider value={contextvalue}>
      {children}
    </GeminiContext.Provider>
  );
}
