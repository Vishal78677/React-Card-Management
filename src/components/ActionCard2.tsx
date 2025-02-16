import { useDispatch, useSelector } from "react-redux";
import { ADD_GPAY, fontSize, SET_DEFAULT } from "../constants/constant";
import { ActionCardData2 } from "../types/types";
import { AppDispatch, RootState } from "../store/store";
import successIcon from "../../public/assets/icons/success.png";

import {
  setCurrentCreditCard,
  setCurrentDebitCard,
  setSelectedCreditAction,
  setSelectedDebitAction,
} from "../store/slices/cardSlice";
import toast from "react-hot-toast";

interface ActionCard2Props {
  data: ActionCardData2;
  from: string;
}

const ActionCard2 = ({ data, from }: ActionCard2Props) => {
  const { currentCreditCard, currentDebitCard } = useSelector(
    (state: RootState) => state.card
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleAction = (action: string) => {
    if (from === "credit") {
      dispatch(setSelectedCreditAction(action));
      dispatch(setCurrentCreditCard({ ...currentCreditCard, action }));

      switch (action) {
        case SET_DEFAULT:
          toast.success("Card set default successfully");
          break;
        case ADD_GPAY:
          toast.success("Card gpay added successfully ");
      }
    } else {
      dispatch(setSelectedDebitAction(action));
      dispatch(setCurrentDebitCard({ ...currentDebitCard, action }));
      switch (action) {
        case SET_DEFAULT:
          toast.success("Card set default successfully");
          break;
        case ADD_GPAY:
          toast.success("Card gpay added successfully ");
      }
    }
  };

  const handleActionBtnBgColor = () => {
    if (from === "credit") {
      if (currentCreditCard.action === SET_DEFAULT && data.id === 1) {
        return "active_action_btn";
      } else {
        return "action_card_icon";
      }
    } else {
      if (currentDebitCard.action === SET_DEFAULT && data.id === 1) {
        return "active_action_btn";
      } else {
        return "action_card_icon";
      }
    }
  };

  return (
    <div className="flex flex-col w-24 gap-1  items-center">
      <div className="relative" onClick={() => handleAction(data.type)}>
        {data.type === ADD_GPAY &&
          currentCreditCard.action === ADD_GPAY &&
          from === "credit" && (
            <div className="absolute inset-0 bg-black/40 rounded-full"></div>
          )}

        {data.type === ADD_GPAY &&
          currentDebitCard.action === ADD_GPAY &&
          from === "debit" && (
            <div className="absolute inset-0 bg-black/40 rounded-full"></div>
          )}

        {data.type === ADD_GPAY &&
          currentCreditCard.action === ADD_GPAY &&
          from === "credit" && (
            <img
              src={successIcon}
              alt="success-icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 z-10"
            />
          )}

        {data.type === ADD_GPAY &&
          currentDebitCard.action === ADD_GPAY &&
          from === "debit" && (
            <img
              src={successIcon}
              alt="success-icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 z-10"
            />
          )}

        <img
          src={data.icon}
          alt="right-icon"
          className={` ${handleActionBtnBgColor()}  rounded-full hover:cursor-pointer`}
          style={{
            height: "35px",
            width: "35px",
            padding: data.id === 1 ? "9px" : "",
          }}
        />
      </div>

      <span className={`${fontSize.default}`}>{data.title}</span>
    </div>
  );
};

export default ActionCard2;
