
import { useState } from 'react';
import './App.css';

function App() {

  const [lastID, setLastID] = useState(1);
  const [sortData, setSortData] = useState([{id:0, value: ''},{id:1, value: ''}]);
  const [sortedResult, setSortedResult] = useState('');

  function ChangeSortData(index, key, value) {
    const tempArray = sortData.map(item => 
        item.id === index ? {...item, [key]: value } : item
    );
    setSortData(tempArray);
  }

  function AddItem() {
    const newLine = {id: lastID + 1, value: ''};
    const tempArray = sortData.map(item => item);
    tempArray.push(newLine);
    setSortData(tempArray);
    setLastID(lastID + 1);
  }

  function RemoveItem(index) {
    const tempArray = sortData.filter(item => item.id !== index);
    setSortData(tempArray);
}

  function SortResult() {
    const result = sortData[Math.floor(Math.random() * sortData.length)].value;
    setSortedResult(result);
  }

  return (
    <div className="App">
      {sortData.map(item => (
        <div className="input_group" key={item.id}>
          <input type="text" value={item.value} onChange={event => (ChangeSortData(item.id,"value", event.currentTarget.value))} />          
          <button onClick={() => RemoveItem(item.id)} disabled={item.id < 2} >-</button>
          <button onClick={AddItem} >+</button>
        </div> 
      ))}
      <button onClick={SortResult} >Sortear</button>

      <p> {sortedResult} </p>


    </div>
  );
}

export default App;