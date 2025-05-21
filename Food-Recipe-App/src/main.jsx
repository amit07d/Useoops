import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import FoodContextProvider from "./context/FoodContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <FoodContextProvider>
        <App />
      </FoodContextProvider>
    </StrictMode>
  </BrowserRouter>
);
