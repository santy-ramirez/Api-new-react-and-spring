import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Author from './pages/Author';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Author />} />
      </Routes>
    </div >
  )
}

export default App;
