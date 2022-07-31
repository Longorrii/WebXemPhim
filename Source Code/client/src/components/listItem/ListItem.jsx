

import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 380 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={{
          pathname: "/detail",
        }}
        state={{ movieData: movie }}
      >
        <img src={movie?.imgSm} alt="" />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <h4>{movie.title}</h4>

            <div className="icons">
              <Link
                to={{
                  pathname: "/watch",
                }}
                state={{ movieData: movie }}
              >
                <PlayArrow className="icon" />
              </Link>

              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            {/* <div className="desc">{movie.desc}</div> */}
            <div className="genre">{movie.genre}</div>
            {console.log(movie)}
          </div>

        </>
      )}
                </Link>
    </div>
  );
}
