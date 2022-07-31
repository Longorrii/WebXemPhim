import React from "react";
import "./contact.scss";
import Facebook from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
const Contact = () => {
  return (
    <div className="contact">
      <div className="imgLg">
        <img src="https://i.pinimg.com/236x/f4/d4/96/f4d49666f15ba0e314466897572cacad.jpg" alt="" />
      </div>
      <div className="icon">
        <a target='_blank' href="">
          <Facebook />
        </a>
        <a href="#">
        <GitHubIcon />
        </a>
      </div>
      <div className ="info">
        <a href="" target="_blank">Nguồn</a>
        <a href="" target='_blank' >Kênh tham khảo</a>
        <a href="#">Thông tin</a>
      </div>
    </div>
  );
};
export default Contact;
