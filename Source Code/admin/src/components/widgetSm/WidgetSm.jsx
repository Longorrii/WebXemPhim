import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Thành viên mới</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                // user.profilePic ||
                "https://obvptrucks.com/wp-content/uploads/2021/03/persona-1.png"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Hiển thị
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}