
import { useEffect, useState } from 'react';

import Card from './components/Card/Card.js';
import api from './service/api';
import Select from './components/Select/Select.js';

import './App.css';


function App() {
  
  const [casos, setCasos] = useState([])
  const [select, setSelect] = useState("World")

  
  useEffect(()=>{
    api.get(select).then(({data})=>{
      setCasos(data);
    })
  }, [select]);

 
 
  return (
    <div className="App">
      <Select setValue={setSelect} />
      <div className='card'>
      <Card casos={casos}/>
      </div>
    </div>
  )
}

export default App;
