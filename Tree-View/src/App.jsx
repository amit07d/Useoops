import data from "../components/data";
import TreeView from "../components/TreeView";
import "./App.css";

function App() {
  return (
    <>
      <h2 className="text-2xl font-extrabold tracking tracking-widest">
        Recursive Navigation Menu
      </h2>
      <TreeView  data={data}/>
    </>
  );
}

export default App;
