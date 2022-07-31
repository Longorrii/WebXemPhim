import { useState, useEffect } from "react";
import "./detail.scss";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Navbar from "../navbar/Navbar";
import Contact from "../contact/Contact";
import axios from "axios";
import { useLocation,Link } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const movie = location.state.movieData;

  //   useEffect(() => {
  //       const getRandomContent = async () => {
  //         try {
  //           const res = await axios.get("/movies/find" +id, {
  //             headers: {
  //               token:
  //                "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
  //             },
  //           });
  //           setMovie(res.data);
  //         } catch (err) {
  //           console.log(err);
  //         }
  //       };
  //       getRandomContent();
  //     }, [type]);

  return (
    <div className="detail">
      <Navbar />
      <div className="coverImage">
        <img src={movie.img} alt="" />
      </div>
      {/* <div className="detailContainer">
      </div> */}

      <div className="detailContainer">
        <div className="InfoFilm">
          <img src={movie.imgSm} alt="" />
          <div className="InfoFilmDetail">
            <div className="icon">
              <Link
                to={{
                  pathname: "/watch",
                }}
                state={{ movieData: movie }}
              >
                <button>
                  <PlayCircleOutlineIcon />
                  <span>Xem ngay</span>
                </button>
              </Link>
            </div>
            <h1 className="title">{movie.title}</h1>
            <span className="genre">{movie.genre}</span>
            <p> {movie.desc}</p>
            <div className="detailInfoMore">
                <p><span>Độ tuổi:</span> {movie.limit}</p>
                <p><span>Năm phát hành:</span> {movie.year}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="detailTrailer">
        <h1>{movie.title}</h1>
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${movie.trailer}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullScreen
        ></iframe>
      </div>
      <Contact />
    </div>
  );
}
