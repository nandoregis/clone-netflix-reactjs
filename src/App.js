import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovies from './components/FeaturedMovies';
import Header from './components/Header';
import './App.css';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect( ()=> {
    const loadAll = async () => {
        // Pegando a lista Total
        let list = await Tmdb.getHomeList();
        
        setMovieList(list);

        // Pegar a featured

        let originals = list.filter(i => i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1) );
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
        
        setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect( ()=> {

    const scrollListener = () => {
        if(window.scrollY > 10) {
          setBlackHeader(true)
        }else {
          setBlackHeader(false)
        }
    }

    window.addEventListener('scroll', scrollListener);

    return ()=> {
      window.removeEventListener('scroll', scrollListener);
    }

  }, []);

  return (
    <div className='page'>

      <Header black={blackHeader}/>
      {featuredData &&
        <FeaturedMovies item={featuredData}/>
      }
      <section className='list'>
        {movieList.map( (item, key)=> (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        Feito por Luís Fernando, <strong>Estrutor: </strong>
        Bonieky Lacerda <br/>
        Dados pegos do Themoviedb.org <br/>
        Direitos de Imagens da Netflix
      </footer>

      {movieList.length <= 0 &&
        <div className='loading'>
            <img src='https://pa1.narvii.com/6720/5e4615b2ab62db9d6112bbd6605906d444968efc_hq.gif' alt='carregando'/>
        </div>
      }
    </div>
  );
}

export default App;
