import { createSlice } from "@reduxjs/toolkit";
import { cardsData } from "../../dummy_data/dummyData";
import { CardType } from "../../types/types";
import { SET_DEFAULT } from "../../constants/constant";

interface CurrentCardType {
  id: number | null | string;
  action?: string;
  cardType: string;
}

interface InitialStateType {
  cards: CardType[];
  selectedCreditAction: string;
  selectedDebitAction: string;
  currentCreditCard: CurrentCardType;
  currentDebitCard: CurrentCardType;
}

const initialState: InitialStateType = {
  cards: [...cardsData],
  selectedCreditAction: "",
  selectedDebitAction: "",
  currentCreditCard: {
    id: null,
    action: "",
    cardType: "",
  },
  currentDebitCard: {
    id: null,
    action: "",
    cardType: "",
  },
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCards: (state, action: { payload: CardType[] }) => {
      state.cards = [...action.payload, ...state.cards];
    },

    setSelectedCreditAction: (state, action: { payload: string }) => {
      if (action.payload === SET_DEFAULT) {
        const findDefaultUser = state.cards.find(
          (ele) => ele.cardType === "Credit" && ele.action === SET_DEFAULT
        );

        if (findDefaultUser) {
          const modifyUser = state.cards.map((ele) => {
            if (findDefaultUser.id === ele.id) {
              return {
                ...ele,
                action: "",
                setAsDefault: false,
              };
            } else {
              if (ele.id === state.currentCreditCard.id) {
                return {
                  ...ele,
                  action: action.payload,
                  setAsDefault: true,
                };
              } else {
                return ele;
              }
            }
          });

          state.cards = modifyUser;

          state.selectedCreditAction = action.payload;
        } else {
          const modifyUser = state.cards.map((ele) => {
            if (ele.id.toString() === state.currentCreditCard.id?.toString()) {
              return {
                ...ele,
                action: action.payload,
                setAsDefault: true,
              };
            } else {
              return ele;
            }
          });

          state.cards = modifyUser;

          state.selectedCreditAction = action.payload;
        }
      } else {
        const modifyUser = state.cards.map((ele) => {
          if (ele.id.toString() === state.currentCreditCard.id?.toString()) {
            return {
              ...ele,
              action: action.payload,
              setAsDefault: false,
            };
          } else {
            return ele;
          }
        });

        state.cards = modifyUser;

        state.selectedCreditAction = action.payload;
      }
    },

    setSelectedDebitAction: (state, action: { payload: string }) => {
      if (action.payload === SET_DEFAULT) {
        const findDefaultUser = state.cards.find(
          (ele) => ele.cardType === "Debit" && ele.action === SET_DEFAULT
        );

        if (findDefaultUser) {
          const modifyUser = state.cards.map((ele) => {
            if (findDefaultUser.id === ele.id) {
              return {
                ...ele,
                action: "",
                setAsDefault: false,
              };
            } else {
              if (ele.id === state.currentDebitCard.id) {
                return {
                  ...ele,
                  action: action.payload,
                  setAsDefault: true,
                };
              } else {
                return ele;
              }
            }
          });

          state.cards = modifyUser;

          state.selectedDebitAction = action.payload;
        } else {
          const modifyUser = state.cards.map((ele) => {
            if (ele.id.toString() === state.currentDebitCard.id?.toString()) {
              return {
                ...ele,
                action: action.payload,
                setAsDefault: true,
              };
            } else {
              return ele;
            }
          });

          state.cards = modifyUser;

          state.selectedDebitAction = action.payload;
        }
      } else {
        const modifyUser = state.cards.map((ele) => {
          if (ele.id.toString() === state.currentDebitCard.id?.toString()) {
            return {
              ...ele,
              action: action.payload,
              setAsDefault: false,
            };
          } else {
            return ele;
          }
        });

        state.cards = modifyUser;

        state.selectedDebitAction = action.payload;
      }
    },
    setCurrentCreditCard: (state, action: { payload: CurrentCardType }) => {
      state.currentCreditCard = action.payload;
    },
    setCurrentDebitCard: (state, action: { payload: CurrentCardType }) => {
      state.currentDebitCard = action.payload;
    },
  },
});

export const {
  setCards,
  setSelectedCreditAction,
  setSelectedDebitAction,
  setCurrentCreditCard,
  setCurrentDebitCard,
} = cardSlice.actions;
export default cardSlice.reducer;
