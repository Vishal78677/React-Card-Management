import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

const formModalSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setIsModalOpen: (state, action: { payload: boolean }) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setIsModalOpen } = formModalSlice.actions;
export default formModalSlice.reducer;
