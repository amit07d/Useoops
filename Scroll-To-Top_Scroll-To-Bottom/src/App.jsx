import "./App.css";
import ScrollToTopAndScrollToBottom from "./components/ScrollToTopAndScrollToBottom.jsx";
import ScrollToSection from "./components/ScrollToSection.jsx"

function App() {
  return (
    <>
      {/* <ScrollToTopAndScrollToBottom url={"https://dummyjson.com/products?limit=100"} /> */}
      <ScrollToSection />
    </>
  );
}

export default App;
