import { fontSize } from "../constants/constant";
import { ActionCardData1 } from "../types/types";

interface ActionCard1Props {
  data: ActionCardData1;
}

const ActionCard1 = ({ data }: ActionCard1Props) => {
  return (
    <div className="flex flex-col gap-1  w-24 items-center">
      <div className="action_card_icon flex items-center justify-center h-9 w-9 rounded-full">
        {data.id === 1 ? (
          <svg
            className="action_card_icon_svg w-[25px] h-[25px] hover:cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
            />
          </svg>
        ) : (
          <svg
            className="action_card_icon_svg w-[25px] h-[25px] hover:cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
            />
          </svg>
        )}
      </div>

      <span className={`${fontSize.default}`}>{data.title}</span>
    </div>
  );
};

export default ActionCard1;
