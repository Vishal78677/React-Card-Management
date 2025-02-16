import hdfcBankIcon from "../../../public/assets/images/hdfc_bank.png";
import masterCardIcon from "../../../public/assets/images/master_card.png";
import {
  ADD_GPAY,
  ARCHIVE,
  fontSize,
  fontWeight,
  LOCK_CARD,
  SET_DEFAULT,
} from "../../constants/constant";
import { CardType } from "../../types/types";
import lockIcon from "../../../public/assets/icons/lock.png";
import archiveIcon from "../../../public/assets/icons/archive.png";
import successIcon from "../../../public/assets/icons/success.png";
import gPayIcon from "../../../public/assets/images/g_pay2.png";

interface CardProps {
  data: CardType;
  isNumberShow: boolean;
}

const Card = ({ data, isNumberShow }: CardProps) => {
  const actionIcon = () => {
    switch (data.action) {
      case LOCK_CARD:
        return lockIcon;

      case ARCHIVE:
        return archiveIcon;

      case SET_DEFAULT:
        return successIcon;

      case ADD_GPAY:
        return gPayIcon;

      default:
        return "";
    }
  };

  const bgColorOfAction = () => {
    switch (data.action) {
      case LOCK_CARD:
        return "card_bg_lock";

      case ARCHIVE:
        return "card_bg_archive";

      case SET_DEFAULT:
        return "card_bg_default";

      case ADD_GPAY:
        return "card_bg_gPay";

      default:
        return "card_bg_normal";
    }
  };

  return (
    <div
      className={`${bgColorOfAction()} w-full max-w-lg text-white p-6 rounded-xl shadow-lg relative`}
    >
      {/* action icon */}

      {actionIcon() && (
        <div className="absolute top-4">
          <img
            src={actionIcon()}
            className={` ${data.action === ADD_GPAY ? "h-4 w-6" : "h-4 w-4"}`}
          />
        </div>
      )}

      {/* Bank Logo */}
      <div className="absolute top-4 right-4 flex items-center">
        <img src={hdfcBankIcon} alt="HDFC Bank" className="h-4 w-24" />
      </div>

      {/* Cardholder Name */}
      <div className={`mt-6 ${fontSize.xl} font-semibold`}>{data.name}</div>

      {/* Card Number */}

      {!isNumberShow ? (
        <div className={`mt-2  ${fontSize.lg} w-3/4`}>
          <span
            className={`flex w-full items-center justify-between tracking-[0.3em]  ${fontWeight.bold}`}
          >
            <span>••••</span> <span>••••</span> <span>••••</span>
            <span className={`${fontWeight.normal} ${fontSize.lg}`}>
              {data.cardNumber.slice(-4)}
            </span>{" "}
          </span>
        </div>
      ) : (
        <div className={`mt-2 w-3/4`}>
          <span
            className={`flex w-full justify-between items-center tracking-[0.3em] ${fontWeight.normal} ${fontSize.lg}`}
          >
            {data.cardNumber.split(" ").map((ele, index) => {
              return (
                <span className={`${fontWeight.normal}`} key={index}>
                  {ele}
                </span>
              );
            })}
          </span>
        </div>
      )}

      {/* Card Details */}
      <div className="mt-4 w-3/4  flex justify-between items-center text-sm">
        <div>
          <span className={`${fontWeight.bold} tracking-wider`}>
            Valid Till :
          </span>{" "}
          <span className={`ml-1 ${fontWeight.normal} tracking-[0.2em]`}>
            {data.expiration.replace(/\/\d{2}(\d{2})$/, "/$1")}
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <span className="font-semibold">CVV :</span>
          <span className={`${fontWeight.bold} ${fontSize.xl} tracking-widest`}>
            •••
          </span>
        </div>
      </div>

      {/* Mastercard Logo */}
      <div className="absolute bottom-7 right-4">
        <img src={masterCardIcon} alt="Mastercard" className="h-10 w-16" />
      </div>
    </div>
  );
};

export default Card;
