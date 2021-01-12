import { useEffect } from 'react';
import './App.css';

import Tmdb  from './Tmdb';

function App() {


  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log(list);
    }
    loadAll();

  }, [])


  return (
    <div>test</div>
    

  );
}

export default App;
