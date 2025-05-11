import React, { useEffect, useState } from "react";

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const jsonValue = localStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : defaultValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
