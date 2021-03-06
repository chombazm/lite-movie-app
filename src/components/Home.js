import React, { useState, useEffect } from 'react';

import axios from 'axios';
import TabSection from './TabSection';
import MovieList from './MovieList';
import HeroSec from './HeroSec';

function Home() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const url = "https://api.themoviedb.org/3/discover/movie?api_key=c9947f7e0c9c203b2363269663122d16&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free";
        axios.get(url).then((res) => {
            const moviesData = res.data;
            const movies = moviesData.results;
            setMovies(movies);
            console.log('daemons')
        })
        // console.log(resource);

  },[]);

    return (
        <main>
            <HeroSec />
            <TabSection activeTab={'home'} />
             <MovieList movies={movies}/>
        </main>
    )
}

export default Home;
