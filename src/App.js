import React from 'react'
import './App.css'
import Home from './Component/Home';
import Add from './Component/Add';
import Edit from './Component/Edit'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}  ></Route>
            <Route path='/create' element={<Add/>} ></Route>
            <Route path='/Edit' element={<Edit/>} ></Route>
          </Routes>
        </Router>
      </div>
    )
  }
  
  export default App;