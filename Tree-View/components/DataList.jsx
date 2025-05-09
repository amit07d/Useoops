import DataItem from "./DataItem";

function DataList({ list = [] }) {
  return (
    <ul>
      {list && list.length ? (
        list.map((listItem) => <DataItem key={listItem.label} item={listItem} />)
      ) : (
       <li>No menu present</li> 
      )}
    </ul>
  );
}
export default DataList;
