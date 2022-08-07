import { useEffect, useState } from 'react'

import './App.css'


function App() {
  const list = [];
  const [count, setCount] = useState(0)
  const [articulos, setArticulos] = useState(list);

  useEffect(
    () => {

      fetch('http://localhost:8080/api/v1/article')
        .then(response => response.json())
        .then(resaponse => setArticulos(resaponse.content))



    }, []);

  return (
    <div className="App">
      <h2>todos Los Articles</h2>

      {
        articulos.map(a => <p> {a.title} </p>)
      }

    </div>
  )
}

export default App;
