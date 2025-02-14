import filterIcon from "../../public/assets/icons/filter.png";
import uploadUpIcon from "../../public/assets/icons/uploadUp.png";
import uploadDownIcon from "../../public/assets/icons/uploadDown.png";
import cardCollIcon from "../../public/assets/icons/card_coll.png";

export const dropdownCardData = [
  {
    id: 1,
    title: "Card Details",
    icon: cardCollIcon,
    data: [],
  },
  {
    id: 2,
    title: "Today's Transactions",
    icon: filterIcon,
    data: [
      {
        id: 0,
        icon: uploadUpIcon,
        title: "Ordered Food",
        date: "20th May 2022",
        amount: "- $150.50",
        color: "text-red-500",
        description: "Charges applied on credit card",
        status: "debited",
      },
      {
        id: 1,
        icon: uploadDownIcon,
        title: "Ticket Refund",
        date: "20th May 2022",
        amount: "+ $50.50",
        color: "text-green-500",
        description: "Amount credited on debit card",
        status: "credited",
      },
      {
        id: 2,
        icon: uploadDownIcon,
        title: "Interest credited",
        date: "20th May 2022",
        amount: "+ $5.50",
        color: "text-green-500",
        description: "Charges applied on credit card",
        status: "credited",
      },
      {
        id: 3,
        icon: uploadUpIcon,
        title: "Electricity bill paid",
        date: "20th May 2022",
        amount: "- $1050.50",
        color: "text-red-500",
        description: "Charges applied on credit card",
        status: "debited",
      },
      {
        id: 4,
        icon: uploadUpIcon,
        title: "Interest credited",
        date: "20th May 2022",
        amount: "+ $50.50",
        color: "text-green-500",
        description: "Charges applied on credit card",
        status: "credited",
      },
    ],
  },
];
