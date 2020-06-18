import React from 'react';

import Movie from './Movie';
import movies from '../data/movies';

const App = () => (
    <main>
        <h1>Time Travel Movies</h1>
        <ul>
            {movies.map((listMovie) => (
                <Movie
                    cover={listMovie.cover}
                    name={listMovie.name}
                    score={listMovie.score}
                    description={listMovie.description}
                    year={listMovie.year}
                />
            ))}
        </ul>
    </main>
);

export default App;
