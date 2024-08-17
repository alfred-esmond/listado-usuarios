import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {
  axios
    .get("https://reqres.in/api/users?per_page=12")
    .then((Response) => {
      dispatch(setUserList(Response.data.data));
    })
    .catch((error) => console.log(error));
};
