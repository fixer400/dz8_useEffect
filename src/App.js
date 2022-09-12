import { useEffect, useState } from 'react';
import './App.css';
import Details from './Components/Details';
import List from './Components/List';

function App() {
  const [list, setList] = useState([])
  const [selectedListElement, setSelected] = useState('')

  useEffect(() => {
      fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then((response) => response.json())
      .then((data) => ((setList(data))))
  }, [])

  return (
    <div className="App">
     <List select = {(data) => setSelected(data)} list = {list} selected = {selectedListElement}/>
     {selectedListElement !== '' && <Details info = {selectedListElement}/>}
    </div>
  );
}

export default App;
