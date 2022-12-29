import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      state.auth = {
        name: action.payload.nickname,
        email: action.payload.email,
      };
      //state.name = action.payload.name;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
