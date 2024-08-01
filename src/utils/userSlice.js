import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = null;

const addUser = createAction("addUser");

const removeUser = createAction("removeUser");

 const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addUser, (state, action) => {
      console.log("add user reducer called" , action.payload);
      return action.payload;
    })

    .addCase(removeUser, (state, action) => {
      console.log("remove user reducer called");
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
export default userReducer;
