import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = null;

const addUser = createAction("addUser");

const removeUser = createAction("removeUser");

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addUser, (state, action) => {
      return action.payload;
    })

    .addCase(removeUser, (state, action) => {
      return null;
    });
});

const userSlice = {
  name: "user",
  reducer: userReducer,
  action: {
    addUser,
    removeUser,
  },
};

export { addUser, removeUser };
export default userSlice.reducer;
