import "./App.css";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <>
      <h2 className="text-2xl font-extrabold tracking tracking-widest">
        Image-Slider
      </h2>
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  );
}

export default App;
