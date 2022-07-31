import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
            "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken
          },
        });
        const statsList = res.data.sort((a, b) => a._id - b._id);
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
        console.log(statsList)
        console.log(userStats);
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      {/* <FeaturedInfo /> */}
      {/* <Sidebar /> */}
      {/* <div className="container"></div> */}
      <Chart data={userStats} title="Thông kê người dùng" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        {/* <WidgetLg /> */}
      </div>
    </div>
  );
}
