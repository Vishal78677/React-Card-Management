import React, { useState } from "react";
import arrowDownIcon from "../../../public/assets/icons/arrow_down.png";
import { fontSize, fontWeight } from "../../constants/constant";
import { DropDownCardItem } from "../../types/types";
import TransactionItem from "../transactionItem/TransactionDropDown";

interface DropDownCardProps {
  item: DropDownCardItem;
}

const DropDownCard = ({ item }: DropDownCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <div
        className={`transaction_dp_con p-4 ${
          item.id === 1 && "mt-3  mb-4"
        } rounded`}
        key={item.id}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center text-blue-600 font-semibold">
          <div className="flex items-center space-x-2">
            <img src={item.icon} alt="cardColl" className="h-4 w-4" />
            <span
              className={`dropdown_title ${fontSize.md} ${fontWeight.medium}`}
            >
              {item.title}
            </span>
          </div>
          <span
            className="arrowDown rounded-full flex justify-center items-center"
            style={{ width: "18px", height: "18px" }}
          >
            <img
              src={arrowDownIcon}
              alt="arrow_down"
              style={{ width: "10px" }}
              className="h-1"
            />
          </span>
        </div>
      </div>

      {isOpen &&
        item.id !== 1 &&
        (item.data.length
          ? item.data.map((trans) => {
              return (
                <div className="transaction_list_wrapper space-y-4">
                  <TransactionItem data={trans} />
                </div>
              );
            })
          : "")}
    </React.Fragment>
  );
};

export default DropDownCard;
