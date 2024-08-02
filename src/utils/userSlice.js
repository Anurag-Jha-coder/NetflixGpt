import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = null;

const addUser = createAction("addUser");

const removeUser = createAction("removeUser");

 const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addUser, (state, action) => {
      return action.payload;
    })

    .addCase(removeUser, (state, action) => {
      return null;
    });
});


export { addUser, removeUser };
export default userReducer;
