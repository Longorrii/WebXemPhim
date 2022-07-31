import axios from "axios";
import {
  getUsersFailure,getUsersStart,getUsersSuccess
  ,createUserStart,createUserSuccess,createUserFailure
} from "./UserActions";

//get
export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("/users", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

//create
export const createUser = async (user, dispatch) => {
  dispatch(createUserStart());
  try {
    const res = await axios.post("/users", user, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createUserSuccess(res.data));
  } catch (err) {
    dispatch(createUserFailure());
  }
};

// //delete
// export const deleteMovie = async (id, dispatch) => {
//   dispatch(deleteMovieStart());
//   try {
//     await axios.delete("/movies/" + id, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(deleteMovieSuccess(id));
//   } catch (err) {
//     dispatch(deleteMovieFailure());
//   }
// };