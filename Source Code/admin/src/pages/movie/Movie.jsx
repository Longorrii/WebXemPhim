import { Link, useLocation } from "react-router-dom";
import "./movie.css";
import { Publish } from "@mui/icons-material";
import { useState, useContext } from "react";
import storage from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { MovieContext } from "../../context/movieContext/MovieContext";
import { updateMovie } from "../../context/movieContext/apiCalls";

export default function Movie() {
  const location = useLocation();
  const movie = location.state.movie;

  // const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const [movieInfo, setMovieInfo] = useState({});

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovieInfo({ ...movieInfo, [e.target.name]: value });
  };

  console.log(movieInfo)
  // console.log(storage);

  const upload = (items) => {
    items.forEach((item) => {
      const storageRef = ref(storage, `/items/${item.file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = snapshot.bytesTransferred / snapshot.totalBytes;
          console.log("Upload is " + progress + "% done");
          setUploaded(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovieInfo((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: video, label: "video" },
    ]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(movieInfo, dispatch);
    // history("/movies")
  };
  const removeSelectedImage = () => {
    setImg();
};
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImg(e.target.files[0]);
    }
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input
              type="text"
              placeholder={movie.title}
              name="title"
              onChange={handleChange}
            />
            <label>Year</label>
            <input
              type="text"
              placeholder={movie.year}
              name="year"
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder={movie.genre}
              name="genre"
              onChange={handleChange}
            />
            <label>Limit</label>
            <input
              type="text"
              placeholder={movie.limit}
              name="limit"
              onChange={handleChange}
            />
            <label>Trailer</label>
            <input
              type="text"
              placeholder={movie.trailer}
              name="trailer"
              onChange={handleChange}
            />
            <label>Video</label>
            <input
              type="file"
              placeholder={movie.video}
              name="video"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              {img ? (
                <div>
                  <img
                    src={URL.createObjectURL(img)}
                    alt=""
                    className="productUploadImg"
                  />
                </div>
              ) : (
                <img src={movie.img} alt="" className="productUploadImg" />
              )}
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={imageChange}
              />
            </div>
            {uploaded === 2 ? (
              <button onClick={handleSubmit} className="productButton">
                Create
              </button>
            ) : (
              <button onClick={handleUpload} className="productButton">
                Update
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
