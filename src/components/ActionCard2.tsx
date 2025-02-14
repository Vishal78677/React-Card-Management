import React from "react";
import { fontSize } from "../constants/constant";
import { ActionCardData2 } from "../types/types";

interface ActionCard2Props {
  data: ActionCardData2;
}

const ActionCard2 = ({ data }: ActionCard2Props) => {
  return (
    <div className="flex flex-col w-24 gap-1  items-center">
      <img
        src={data.icon}
        alt="right-icon"
        className="action_card_icon rounded-full hover:cursor-pointer"
        style={{
          height: "35px",
          width: "35px",
          padding: data.id === 1 ? "9px" : "",
        }}
      />
      <span className={`${fontSize.default}`}>{data.title}</span>
    </div>
  );
};

export default ActionCard2;
