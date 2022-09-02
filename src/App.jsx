import { useEffect, useState } from 'react'
import AuthorService from './service/AuthorService';

import './App.css'
import ListAuthors from './component/ListAuthors';
import FormAuthor from './component/FormAuthor';


function App() {
  const list = [];
  const [count, setCount] = useState(0)
  const [author, setauthor] = useState(list);
  const [data, setData] = useState(list);

  const retrieveAuthors = async () => {
    try {
      let res = await AuthorService.getAll()
      let datas = res.data.content;
      console.log(datas);
      setauthor(datas)

    } catch (error) {
      console.error(error)
    }

  }

  useEffect(
    () => {
      retrieveAuthors();

    }, []);


  return (
    <div className="App">
      <h2>List the authors</h2>
      <ListAuthors data={author} />
      <h2>Create a Authors</h2>
      <FormAuthor />
    </div>
  )
}

export default App;
