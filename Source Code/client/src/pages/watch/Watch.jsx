import { ArrowBackOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  console.log(location);
  const movie = location.state.movieData;
  return (
    <div className="watch">
      <Navbar />
      {/* <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link> */}
      <video
        className="video"
        autoPlay
        progress="true"
        controls
        src={movie.video}
      />
      <div className="watchInfo">
        <h1> {movie.title}</h1>
        <p>{movie.desc}</p>
        <h4>Năm phát hành: {movie.year}</h4>
      </div>
    </div>
  );
}
