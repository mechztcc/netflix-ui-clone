import { useEffect, useState } from 'react';
import './App.css';

import Tmdb  from './Tmdb';
import MovieRow from './components/MovieRow/index';
import FeaturedMovie from './components/FeaturedMovie/index';


function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);



  useEffect(() => {
    const loadAll = async () => {
      //get total list
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //move this to another archive
      // get featured
      let originals = list.filter(item => item.slug === 'originals')
      let randomChose = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChose];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }
    loadAll();

  }, [])


  return (
   
    <div className="page">
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }


      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} alt={item.original_title}/>
        ))}
      </section>
    </div>

  );
}

export default App;
