import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Author from './pages/Author';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Search from './component/Article/Search';
import TableComponent from './component/Author/TableComponent';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author" element={<Author />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/search" element={<Search />} />


      </Routes>
    </div >
  )
}

export default App;
