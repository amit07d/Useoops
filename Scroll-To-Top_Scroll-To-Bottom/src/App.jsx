import "./App.css";
import ScrollToTopAndScrollToBottom from "./components/ScrollToTopAndScrollToBottom.jsx";

function App() {
  return (
    <>
      <ScrollToTopAndScrollToBottom url={"https://dummyjson.com/products?limit=100"} />
    </>
  );
}

export default App;
