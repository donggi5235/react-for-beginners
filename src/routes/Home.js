import { useState, useEffect } from "react";
import Movie from "../Components/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div className="contents">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="movieList">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              img={movie.medium_cover_image}
              summary={movie.summary}
              tit={movie.title_long}
              date={movie.date_uploaded}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
