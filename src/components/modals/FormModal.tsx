import { useEffect, useRef, useState } from "react";
import { fontSize, fontWeight } from "../../constants/constant";
import Container from "../Container";
import "./style.scss";
import calendarIcon from "../../../public/assets/icons/calander.png";
import arrowDownIcon from "../../../public/assets/icons/arrow_down.png";

// import InputMask from "react-input-mask-next";

const FormModal = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Card Type");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = ["Visa", "Mastercard"];

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length > 16) value = value.slice(0, 16); // Max 16 digits

    // Formatting
    if (value.length > 4) value = value.replace(/(\d{4})/g, "$1 ").trim(); // Insert spaces every 4 digits

    setCardNumber(value);
  };

  // Expiry Date Masking (MM/YYYY)
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length > 6) value = value.slice(0, 6); // Max 6 digits (MMYYYY)

    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`; // Insert "/"
    }

    setExpiry(value);
  };

  // CVV Masking (Supports 3 or 4 digits)
  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length > 4) value = value.slice(0, 4); // Max 4 digits for Amex

    setCvv(value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <Container>
        <div className="bg-white rounded shadow-lg w-full  relative">
          {/* Modal Header */}
          <div className="form_modal_header flex justify-between items-center p-4">
            <h2
              className={`form_modal_header_title ${fontSize.xl} ${fontWeight.medium}`}
            >
              New Card
            </h2>
            <button onClick={() => console.log("object")} className="">
              <svg
                className="form_modal_header_title w-[27px] h-[27px]  dark:text-white"
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
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </button>
          </div>

          {/* Modal Body */}
          <Container className="mt-4 mb-4 space-y-4">
            <div>
              <label
                className={`form_modal_label block ${fontSize.md}  ${fontWeight.medium}`}
              >
                Name:
              </label>
              <input
                type="text"
                placeholder="i.e. James Carlon"
                className="form_modal_input w-full px-3 py-2 border rounded outline-none focus:ring focus:ring-blue-100"
              />
              <p className="text-red-500 text-xs mt-1">Name is required</p>
            </div>

            <div>
              <label
                className={`form_modal_label block ${fontSize.md}  ${fontWeight.medium}`}
              >
                Bank Name:
              </label>
              <input
                type="text"
                placeholder="i.e. HDFC BANK"
                className="form_modal_input w-full px-3 py-2 border rounded  outline-none focus:ring focus:ring-blue-100"
              />
            </div>

            <div className="relative" ref={dropdownRef}>
              <label className="block text-sm font-medium mb-1">
                Card Type:
              </label>

              {/* Dropdown Box */}
              <div
                className={`form_modal_input w-full px-3 py-2 rounded  outline-none  focus:ring focus:ring-blue-100 bg-white cursor-pointer flex justify-between items-center ${
                  selected ? "text-black" : "text-gray-400"
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {selected || "Select Card Type"}{" "}
                {/* Placeholder if not selected */}
                <span className="ml-2">
                  <img src={arrowDownIcon} alt="arrow_down" className="h-2" />
                </span>
              </div>

              {/* Dropdown Options */}
              {isOpen && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 z-50">
                  <li className="px-3 py-2 text-gray-400 cursor-not-allowed">
                    Select Card Type
                  </li>
                  {options.map((option, index) => (
                    <li
                      key={index}
                      className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <label
                className={`form_modal_label block ${fontSize.md}  ${fontWeight.medium}`}
              >
                Card Number:
              </label>
              <input
                type="text"
                placeholder="i.e. 7754 1542 6584 4875"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className="form_modal_input w-full px-3 py-2 border rounded  outline-none focus:ring focus:ring-blue-100"
                maxLength={19}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className={`form_modal_label block ${fontSize.md}  ${fontWeight.medium}`}
                >
                  Valid Till:
                </label>
                <div className="flex items-center w-full h-9 relative">
                  {/* Calendar Icon */}
                  <span className="absolute left-6 top-3 text-gray-500">
                    <img
                      src={calendarIcon}
                      alt="calendar"
                      className="h-4 w-4"
                    />
                  </span>
                  <input
                    type="text"
                    value={expiry}
                    onChange={handleExpiryChange}
                    placeholder="--/----"
                    maxLength={7}
                    className="form_modal_input placeholder:text-lg border w-full h-full pl-4 rounded  text-center  outline-none  focus:ring focus:ring-blue-100 tracking-widest placeholder-gray-400 font-mono"
                  />
                </div>
              </div>

              <div className="h-9">
                <label
                  className={`form_modal_label block ${fontSize.md}  ${fontWeight.medium}`}
                >
                  CVV:
                </label>
                <input
                  type="password"
                  value={cvv}
                  onChange={handleCVVChange}
                  placeholder="---"
                  maxLength={3}
                  className="form_modal_input border h-full w-16 placeholder:text-lg rounded  text-center  outline-none  focus:ring focus:ring-blue-100 tracking-widest placeholder-gray-400 font-mono"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="default"
                className="form_modal_checkbox"
              />
              <label
                htmlFor="default"
                className={`form_modal_label block ${fontSize.md}  ${fontWeight.normal}`}
              >
                Set this card as Default
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="gpay"
                className="form_modal_checkbox"
              />
              <label
                htmlFor="gpay"
                className={`form_modal_label block ${fontSize.md}  ${fontWeight.normal}`}
              >
                Add this card to GPay?
              </label>
            </div>
          </Container>

          {/* Modal Footer */}
          <div className="form_modal_footer border-t-2">
            <Container className="flex justify-end space-x-2">
              <button
                onClick={() => console.log("object")}
                className={`footer_btn_cancel ${fontSize.sm} ${fontWeight.medium} px-4 py-2 border rounded`}
              >
                Cancel
              </button>
              <button
                className={`footer_btn_submit px-4 py-2 ${fontWeight.medium} ${fontSize.sm} text-white rounded `}
              >
                Submit
              </button>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FormModal;
