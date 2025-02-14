import { fontSize, fontWeight } from "../../constants/constant";
import { DropDownCardTransaction } from "../../types/types";
import "./style.scss";

interface TransactionItemProps {
  data: DropDownCardTransaction;
}

function TransactionItem({ data }: TransactionItemProps) {
  return (
    <div className="transaction_wrapper flex items-center space-x-4 p-2 border-b last:border-b-0">
      <span className="transaction_img flex items-center justify-center rounded-full w-10 h-10">
        <img
          src={data.icon}
          alt="image"
          style={{ height: "14px", width: "14px" }}
        />
      </span>
      <div className="flex-1">
        <div className={` ${fontWeight.medium}  ${fontSize.sm}`}>
          {data.title}
        </div>
        <div className={`transaction_date ${fontSize.default}`}>
          {data.date}
        </div>
        {data.description && (
          <div className={`transaction_desc ${fontSize.default} `}>
            {data.description}
          </div>
        )}
      </div>
      <div
        className={` ${
          data.status === "debited"
            ? "transaction_col_debited"
            : "transaction_col_credited"
        } ${data.status} ${data.color} ${fontSize.default}`}
      >
        {data.amount}
      </div>
    </div>
  );
}

export default TransactionItem;
