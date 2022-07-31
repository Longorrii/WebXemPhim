import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, Logout} from "@mui/icons-material";
import { logout } from "../../context/authContext/AuthActions";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ADMIN</span>
        </div>
        <div className="topRight">
          
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.2mOnyDDiSOsxkH1OUQl4agHaHa?pid=ImgDet&rs=1"
            alt=""
            className="topAvatar"
          />
          <span onClick={ () => { dispatch(logout())&& console.log("Xóa thành công")  }}>
            <Logout />
          </span>
        </div>
      </div>
    </div>
  );
}
