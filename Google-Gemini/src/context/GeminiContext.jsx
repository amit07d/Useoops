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
        setResultData((prev) => prev+nextword)
      }, 75*index);
  }

  const onSet = async () => {
    setResultData("");
    setLoading("true");
    setRecentPrompt(input)
    setShowResult(true);
    const response = await main(input);
    
    const responseText = response.split("**");
    let newResponse;
    newResponse = "";
    for (let i = 0; i < responseText.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseText[i];
      } else {
        newResponse += "<b>" + responseText[i] + "</b>";
      }
    }

    let recentResponse = newResponse.split("*").join("</br>")

    let typingResponse = recentResponse.split(" ")
    for (let i = 0; i < typingResponse.length; i++)
    {
      const nextLine = typingResponse[i];
      typingEffect(i,nextLine + " ")
    }
    setLoading(false)
    setInput("")
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
  };
  return (
    <GeminiContext.Provider value={contextvalue}>
      {children}
    </GeminiContext.Provider>
  );
}
