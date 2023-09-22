import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, img, summary, tit, date, genres }) => {
  return (
    <div key={id} className="movieItem">
      <Link to={`/Detail/${id}`}>
        <div className="img">
          <img src={img} alt={tit} />
        </div>
        <div className="txt">
          <p className="tit">{tit}</p>
          <p className="desc">
            {summary.length > 235 ? `${summary.slice(0, 100)}` : summary}
          </p>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p className="date">{date}</p>
        </div>
      </Link>
    </div>
  );
};

Movie.propTypes = {
  img: PropTypes.string.isRequired,
  tit: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
