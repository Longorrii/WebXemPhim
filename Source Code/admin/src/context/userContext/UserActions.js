//GET
export const getUsersStart = () => ({
  type: "GET_USERS_START",
});

export const getUsersSuccess = (users) => ({
  type: "GET_USERS_SUCCESS",
  payload: users,
});

export const getUsersFailure = () => ({
  type: "GET_USERS_FAILURE",
});

//POST
export const createUserStart = () => ({
  type: "CREATE_USER_START",
});

export const createUserSuccess = (user) => ({
  type: "CREATE_USER_SUCCESS",
  payload: user,
});

export const createUserFailure = () => ({
  type: "CREATE_USER_FAILURE",
});

// PUT
export const updateUserStart = () => ({
  type: "UPDATE_USER_START",
});

export const updateUserSuccess = (user) => ({
  type: "UPDATE_USER_SUCCESS",
  payload: user,
});

export const updateUserFailure = () => ({
  type: "UPDATE_USER_FAILURE",
});

// export const deleteMovieStart = () => ({
//   type: "DELETE_MOVIE_START",
// });

// export const deleteMovieSuccess = (id) => ({
//   type: "DELETE_MOVIE_SUCCESS",
//   payload: id,
// });

// export const deleteMovieFailure = () => ({
//   type: "DELETE_MOVIE_FAILURE",
// });
