import DataList from './DataList.jsx'

function TreeView({data = []}) {
  return (
      <div>
          <DataList list={data}/>
    </div>
  )
}

export default TreeView