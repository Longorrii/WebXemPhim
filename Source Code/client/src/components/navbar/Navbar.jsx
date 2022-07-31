import {
  ArrowDropDown,
  Notifications,
  Search,
  Home,
  Settings,
  Logout,
} from "@mui/icons-material";
import { useState, useContext } from "react";
import "./navbar.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const [isScroller, setIsScroller] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const history = useNavigate();
  const location = useLocation();
  // const user = location.state.user;

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history("/login");
  };

  window.onscroll = () => {
    setIsScroller(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // console.log(isScroller);

  return (
    <div className={isScroller ? "navbar scroller" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </Link>
          <Link to="/">
            <span className=" homeIcon">
              <Home />
            </span>
          </Link>
          {/* <Link to="/" className="link">
            <div className="buttonTitle">
              <span>Trang chủ</span>
            </div>
          </Link> */}
          <Link to="/series" className="link">
            <div className="buttonTitle">
              <span className="navbarmainLink">Phim bộ</span>
            </div>
          </Link>
          <Link to="/movies" className="link">
            <div className="buttonTitle">
              <span className="navbarmainLink">Phim lẻ</span>
            </div>
          </Link>
          <div className="buttonTitle">
            <span>Phổ biến</span>
          </div>
          <div className="buttonTitle">
            <span>Danh sách của bạn</span>
          </div>
        </div>
        <div className="right">
          <div className="infoAdd">
            <Search className="icon" />
            {/* <span>KID</span> */}
            {/* <input type="text" placeholder="Search" /> */}
            <div className="notify">
              <Notifications className="icon ring" />
              <div className="notifyModel">
                <p className="notifyTitle">Thông báo</p>
                <ul>
                  <li className="NotifyItem"></li>
                </ul>
              </div>
            </div>
          </div>
          <img
            src="https://th.bing.com/th/id/R.bae6bcb0ad0f24599de18d99f2970e6e?rik=UGYQrOyaBTUd4A&pid=ImgRaw&r=0"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>
                <Settings />
                <span>Cài đặt</span>
              </span>
              <span onClick={handleLogout}>
                <Logout />
                <span>Đăng xuất</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
