import { createSlice } from "@reduxjs/toolkit";
import { cardsData } from "../../dummy_data/dummyData";
import { CardType } from "../../types/types";

interface InitialStateType {
  cards: CardType[];
}

const initialState: InitialStateType = {
  cards: [...cardsData],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCards: (state, action: { payload: CardType[] }) => {
      state.cards = [...action.payload, ...state.cards];
    },
  },
});

export const { setCards } = cardSlice.actions;
export default cardSlice.reducer;
