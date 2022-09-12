
function List(props) {
  console.log(props.selected.name)
  return(
    <div className="List">
      {props.list.map(e => 
      <div 
        onClick = {() => props.select({name : e.name, id :  e.id})} 
        className = {props.selected.name === e.name ? "List__selected-element" : "List__element"}
        key = {e.id}>{e.name}</div>
      )}
    </div>
  )
}

export default List