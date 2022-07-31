import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import ListList from "./pages/listList/ListList";
import MovieList from "./pages/movieList/MovieList";
import NewMovie from "./pages/newMovie/NewMovie";
import Movie from "./pages/movie/Movie";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import NewUser from "./pages/newUser/NewUser";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Login from "./pages/login/Login";
import User from "./pages/user/User";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Topbar />
      <div className="contain">
        <Sidebar/>
        <div className="sideBar">
        </div>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
        <Routes>
          <Route path="/user/:userId" element={<User />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/newMovie" element={<NewMovie />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/lists" element={<ListList />} />
          <Route path="/list/:id" element={<List />} />
          <Route path="/newList" element={<NewList />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
