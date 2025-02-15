import hdfcBankIcon from "../../../public/assets/images/hdfc_bank.png";
import masterCardIcon from "../../../public/assets/images/master_card.png";
import { fontSize, fontWeight } from "../../constants/constant";
import { CardType } from "../../types/types";

interface CardProps {
  data: CardType;
  isNumberShow: boolean;
}

const Card = ({ data, isNumberShow }: CardProps) => {
  return (
    <div className="main_card_wrapper w-full max-w-lg bg-blue-900 text-white p-6 rounded-xl shadow-lg relative">
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
