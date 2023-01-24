import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
      value: []
    },
    reducers: {
      addItem: (state, action) => {
        state.value= action.payload;
      }
    },
  });
  
  export const { addItem } = userSlice.actions;
  
  export default userSlice.reducer;
  