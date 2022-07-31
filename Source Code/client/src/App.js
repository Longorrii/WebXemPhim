import Home from "./pages/home/Home";
import "./app.scss";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { useContext } from "react";
import React from "react";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import { AuthContext } from "./authContext/AuthContext";
import Detail from "./components/detail/Detail";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />

        {/* {user ?? ( */}
          {/* <Routes> */}
            <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/watch" element={<Watch />} />
          {/* </Routes> */}
         {/* )} */}
      </Routes>
    </div>
  );
};

export default App;
