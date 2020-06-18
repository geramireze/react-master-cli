import React, { Component } from 'react';

import Movie from './Movie';
import movies from '../data/movies';
import like from '../img/like.svg';
import dislike from '../img/dislike.svg';
import reset from '../img/reset.svg';

class App extends Component {
    state = {
        movies: [...movies],
    };

    // Recibimos a que estado queremos cambiar la pelicula (like || dilike)
    // y movieName para identificar que pelicula recibio el cambio
    changeMovieStatus = (likeStatus, movieName) => {
        // Aquí le podemos dar like/dislike a una pelicula
        this.setState(
            // Usamos la funcion para pasar por todos los elementos del estado actual
            // porque puede haber elementos eliminados
            (prevState) => {
                // Usamos findIndex para saber que elemento
                // queremos editar, queremos el indice, un número,
                // debido a que movies es un Array
                const movieIndex = prevState.movies.findIndex(
                    (movie) => movie.name === movieName
                );
                const moviesCopy = [...prevState.movies];

                // Editamos de movies el elemento que encontramos.
                moviesCopy[movieIndex] = {
                    ...moviesCopy[movieIndex],
                    status: likeStatus,
                };

                // Devolvemos uun objeto con la propiedad "movies"
                // que es lo que queremos editar
                return {
                    movies: moviesCopy,
                };
            }
        );
    };

    changeAllMovieStatuses = (likeStatus) => {
        // Podemos poner todas las peliculas en like/dislike
        this.setState(
            // Usamos la funcion para pasar por todos los elementos del estado actual
            // porque puede haber elementos eliminados
            (prevState) =>
                // Devolvemos un objeto con la propiedead "movies"
                // que es la que queremos editar
                ({
                    // Creamos la propiedad movies
                    // iterando sobre las movies actuales
                    movies: prevState.movies.map((movie) =>
                        // Usamos el spread operator para
                        // mantener todas las propiedades de cada pelicula
                        // debido a que son objetos
                        ({
                            ...movie,
                            // Cambiamos la propiedad que queremos
                            // por el valor que recibimos como parametro
                            status: likeStatus,
                        })
                    ),
                })
        );
    };

    resetMovies = () => {
        this.setState({
            // Devolvemos las peliculas al estado inicial,
            // que es la data que viene del archivo.
            movies: [...movies],
        });
    };

    deleteMovie = (movieName) => {
        this.setState(
            // Usamos la funcion para pasar por todos los elementos del estado actual
            // porque puede haber elementos eliminados
            (prevState) => {
                // Usamos filter para eliminar del array el elemento que tenga el mismo name
                // del elemento que recibimos por parametros
                const newMovies = prevState.movies.filter(
                    (movie) => movie.name !== movieName
                );

                // Devolvemos un objeto con la propiedead "movies"
                // que es la que queremos editar
                return {
                    movies: newMovies,
                };
            }
        );
    };

    render() {
        // Usamos filter para crear un array único por cada status ""|"like"|"dislike"
        const likedMovies = this.state.movies.filter(
            (movie) => movie.status === 'like'
        );
        const dislikedMovies = this.state.movies.filter(
            (movie) => movie.status === 'dislike'
        );
        const neutralMovies = this.state.movies.filter(
            (movie) => movie.status === ''
        );

        return (
            <main>
                <header>
                    <h1>Time Travel Movies</h1>
                    <button
                        type="button"
                        onClick={() => this.changeAllMovieStatuses('like')}
                    >
                        <img src={like} alt="Vote up all" />
                    </button>
                    <button type="button" onClick={this.resetMovies}>
                        <img src={reset} alt="Reset score" />
                    </button>
                    <button
                        type="button"
                        onClick={() => this.changeAllMovieStatuses('dislike')}
                    >
                        <img src={dislike} alt="Vote down all" />
                    </button>
                </header>

                {/* Solo renderizamos si hay algún elemento en el array */}
                {likedMovies.length > 0 && (
                    <>
                        <h2>
                            <span>Liked</span>
                        </h2>

                        <ul>
                            {likedMovies.map((movie) => (
                                <Movie
                                    key={movie.name}
                                    // Usamos el spread operator
                                    // para pasar todas las propiedades
                                    // de movie como props
                                    {...movie}
                                    changeMovieStatus={this.changeMovieStatus}
                                    deleteMovie={this.deleteMovie}
                                />
                            ))}
                        </ul>
                        <hr />
                    </>
                )}

                {neutralMovies.length > 0 && (
                    <>
                        <ul>
                            {neutralMovies.map((movie) => (
                                <Movie
                                    key={movie.name}
                                    {...movie}
                                    changeMovieStatus={this.changeMovieStatus}
                                    deleteMovie={this.deleteMovie}
                                />
                            ))}
                        </ul>
                        <hr />
                    </>
                )}

                {dislikedMovies.length > 0 && (
                    <>
                        <h2>
                            <span>Disliked</span>
                        </h2>
                        <ul>
                            {dislikedMovies.map((movie) => (
                                <Movie
                                    key={movie.name}
                                    {...movie}
                                    changeMovieStatus={this.changeMovieStatus}
                                    deleteMovie={this.deleteMovie}
                                />
                            ))}
                        </ul>
                        <hr />
                    </>
                )}
            </main>
        );
    }
}

export default App;
