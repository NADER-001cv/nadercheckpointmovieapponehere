import MovieCard from './MovieCard'

function MovieList(props) {
    const movies = props.movies;
    const movie = movies.map((x) => {
        return (
                <>
                    <MovieCard title={x.title} description={x.description} posterUrl={x.posterUrl} rate={x.rate} />
                </>
        );
    })
    return (
        <>
            {movie}
        </>
    );
  }
export default MovieList;