import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { MovieContextProvider } from "./context/movieContext/MovieContext";
import { ListContextProvider } from "./context/listContext/ListContext";
import { UserContextProvider } from "./context/userContext/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <MovieContextProvider>
          <ListContextProvider>
            <UserContextProvider>
              <App />
            </UserContextProvider>
          </ListContextProvider>
        </MovieContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
