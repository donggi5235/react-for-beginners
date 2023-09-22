import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovies(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="contents">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="movieDetail">
          <div className="movieDetailWrap">
            <div className="img">
              <img src={movies.medium_cover_image} alt={movies.title} />
            </div>
            <div className="txt">
              <p className="tit">{movies.title_long}</p>
              <p className="desc">{movies.description_full}</p>
              <p className="date">{movies.date_uploaded}</p>
              <ul>
                {movies.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
              <p className="like">❤{movies.like_count}</p>
              <Link to={movies.url} className="listBtn" target="_blank">
                Homepage
              </Link>
            </div>
          </div>
          <Link to="/" className="listBtn">
            LIST
          </Link>
        </div>
      )}
    </div>
  );
};

export default Detail;
