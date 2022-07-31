import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email, username, password });
      history("/login");
    } catch (err) {}
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link className="btnLogin" to="/login">
            <button className="loginButton">Đăng nhập</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.</h1>
        <h2>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</h2>
        <p>
        Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Địa chỉ Email" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Bắt đầu <ArrowForwardIos/>
            </button>
          </div>
        ) : (
          <form className="input loginAfter">
            <input type="username" placeholder="Tên đăng nhập" ref={usernameRef} />
            <input type="password" placeholder="Mật khẩu" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Bắt đầu <ArrowForwardIos/>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
