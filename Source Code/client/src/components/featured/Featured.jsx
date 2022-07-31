import { PlayArrow, InfoOutlined } from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./featured.scss";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [type]);
  console.log(type);
  console.log(content);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Phim lẻ" : "Phim bộ"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Thể loại</option>
            <option value="adventure">Phiêu lưu</option>
            <option value="comedy">Hài kịch</option>
            <option value="crime">Tội ác</option>
            <option value="fantasy">Giả tưởng</option>
            <option value="historical">Lịch sử</option>
            <option value="horror">Kinh dị</option>
            <option value="romance">Lãng mạn</option>
            <option value="sci-fi">Khoa học viễn tưởng</option>
            <option value="thriller">Bị kịch</option>
            <option value="western">Vùng Tây</option>
            <option value="animation">Hoạt hình</option>
            <option value="drama">Drama</option>
            <option value="documentary">Tài liệu</option>
          </select>
        </div>
      )}

      <img src={content.img} alt="" />

      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <Link
            to={{
              pathname: "/watch",
            }}
            state={{ movieData: content }}
          >
            <button className="play">
              <PlayArrow />
              <span>Phát</span>
            </button>
          </Link>
          <Link
            to={{
              pathname: "/detail",
            }}
            state={{ movieData: content }}
          >
            <button className="more">
              <InfoOutlined />
              <span>Mô tả</span>
            </button>
          </Link>
        </div>
      </div>
      {console.log(content)}
    </div>
  );
}
