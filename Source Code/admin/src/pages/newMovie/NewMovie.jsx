import { useContext, useState } from "react";
import "./newMovie.css";
import storage from "../../firebase";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";

export default function NewMovie() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const history = useNavigate();

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      // const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/items/${item.file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            snapshot.bytesTransferred / snapshot.totalBytes;
          console.log("Upload is " + progress + "% done");
          setUploaded(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovie((prev) => {
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
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      // { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };
  // console.log(img);
  // console.log(imgTitle);
  // console.log(imgSm);
  // console.log(movie);
  // console.log(trailer);
  // console.log(video);

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
    // history("/movies")
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Thêm phim mới</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Hình ảnh chính</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Ảnh tiêu đề phim</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Ảnh Thumbnail</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Tiêu đề</label>
          <input
            type="text"
            placeholder="John Wick"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Mô tả</label>
          <input
            type="text"
            placeholder="Description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Năm</label>
          <input
            type="text"
            placeholder="1970"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Thể loại</label>
          <input
            type="text"
            placeholder="Thể loại"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Độ dài phim</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Giới hạn tuổi</label>
          <input
            type="text"
            placeholder="limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Phim có nhiều tập?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">Không</option>
            <option value="true">Có</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Link Trailer</label>
          <input
            type="text"
            placeholder="trailer"
            name="trailer"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input
            type="file"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        {/* {uploaded === 2 ? ( */}
          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
         {/* ) : ( */}
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        {/* )}  */}
         {  console.log(uploaded)}
      </form>
    </div>
  );
}
