import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  PlayCircleOutline,
  List,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  AddToQueue,
  QueuePlayNext,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {


  const handleClick = () =>{
      document.querySelector("li").classList.add('active');
      console.log("remove successfull")
      }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList" >
            <Link to="/" className="link ">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Trang chủ
              </li>
            </Link >
            {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Thông kê
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link ">
              <li className="sidebarListItem" onClick={handleClick}>
                <PermIdentity className="sidebarIcon" />
                Người đăng kí
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li className="sidebarListItem">
                <PlayCircleOutline className="sidebarIcon" />
                 Phim
              </li>
            </Link>
            <Link to="/lists" className="link">
              <li className="sidebarListItem">
                <List className="sidebarIcon" />
                Danh sách thể loại phim
              </li>
            </Link>
            <Link to="/newMovie" className="link">
              <li className="sidebarListItem">
                <AddToQueue className="sidebarIcon" />
                Thêm phim
              </li>
            </Link>
            <Link to="/newList" className="link">
              <li className="sidebarListItem">
                <QueuePlayNext className="sidebarIcon" />
                Thêm danh sách
              </li>
            </Link>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}