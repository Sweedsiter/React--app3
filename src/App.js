import React, { useState } from 'react';
import { Routes, Route} from "react-router-dom"
import './App.css'
import Home from './components/Home';
import Emb from './components/Emb';
import Ai from './components/Ai';
import Navbar from './components/Navbar';
import Data from './Datas/Data';

function App() { 
  const [settt,setSettt]=useState(null)
  console.log(settt)

  return (
    <div className='contener'>
      <Navbar settat={(even)=>{setSettt(even)}}/>
   
      <Routes>
        <Route path="/" exec element={ <Home Data={Data} settt={settt}/> } />
        <Route path="Emb" element={ <Emb Data={Data} settt={settt}/> } />
        <Route path="Ai" element={ <Ai/> } />
      </Routes>

    </div>
  );
}

export default App;


