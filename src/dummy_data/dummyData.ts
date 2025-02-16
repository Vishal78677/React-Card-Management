import filterIcon from "../../public/assets/icons/filter.png";
import uploadUpIcon from "../../public/assets/icons/uploadUp.png";
import uploadDownIcon from "../../public/assets/icons/uploadDown.png";
import cardCollIcon from "../../public/assets/icons/card_coll.png";
import successIcon from "../../public/assets/icons/success.png";
import gpayIcon from "../../public/assets/images/g_pay.png";
import { ADD_GPAY, ARCHIVE, LOCK_CARD, SET_DEFAULT } from "../constants/constant";

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

export const actionCardData1 = [
  {
    id: 1,
    title: "Lock Card",
    type: LOCK_CARD
  },
  {
    id: 2,
    title: "Archive",
    type: ARCHIVE
  },
];

export const actionCardData2 = [
  {
    id: 1,
    title: "Set As Default",
    icon: successIcon,
    type: SET_DEFAULT
  },
  {
    id: 2,
    title: "Add to GPay",
    icon: gpayIcon,
    type: ADD_GPAY
  },
];

export const cardsData = [
  {
    id: 1,
    name: "Vishal Dantani",
    bankName: "SBI",
    cardNumber: "4111 1111 1111 1111",
    expiration: "12/2025",
    cvv: "123",
    addToGPay: false,
    cardType: "Credit",
    setAsDefault: true,
    action: SET_DEFAULT,
  },
  {
    id: 2,
    name: "Sara Volkova",
    bankName: "HDFC",
    cardNumber: "5122 1111 1111 3595",
    expiration: "11/2027",
    cvv: "555",
    addToGPay: false,
    cardType: "Debit",
    setAsDefault: false,
    action: "",
  },
  {
    id: 3,
    name: "John doe",
    bankName: "SBI",
    cardNumber: "4111 1111 1111 9340",
    expiration: "12/2026",
    cvv: "123",
    addToGPay: false,
    cardType: "Credit",
    setAsDefault: false,
    action: "",
  },
  {
    id: 4,
    name: "Natalia Romanova",
    bankName: "BOB",
    cardNumber: "4894 1111 1111 9999",
    expiration: "11/2030",
    cvv: "555",
    addToGPay: false,
    cardType: "Debit",
    setAsDefault: false,
    action: "",
  },
  {
    id: 5,
    name: "Ravi Singh",
    bankName: "Axis",
    cardNumber: "5684 1111 1111 7864",
    expiration: "10/2035",
    cvv: "555",
    addToGPay: false,
    cardType: "Debit",
    setAsDefault: false,
    action: "",
  },
];
