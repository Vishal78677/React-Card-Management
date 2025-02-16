import { useEffect, useRef, useState } from "react";
import { fontSize, fontWeight, SET_DEFAULT } from "../../constants/constant";
import Container from "../Container";
import "./style.scss";
import calendarIcon from "../../../public/assets/icons/calander.png";
import arrowDownIcon from "../../../public/assets/icons/arrow_down.png";
import { Formik } from "formik";
import { formValidationSchema } from "../../schema/formValidationSchema";
import { FormInitialValues } from "../../types/types";
import {
  maskCardNumber,
  maskCVV,
  maskExpiry,
} from "../../utility/maskFunctions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setIsModalOpen } from "../../store/slices/formModalSlice";
import {
  setCards,
  setCurrentCreditCard,
  setCurrentDebitCard,
} from "../../store/slices/cardSlice";
import toast from "react-hot-toast";

const FormModal = () => {
  const [isOpenCardType, setIsOpenCardType] = useState(false);
  const { cards } = useSelector((state: RootState) => state.card);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: FormInitialValues = {
    name: "",
    bankName: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
    cardType: "",
    setAsDefault: false,
    addToGPay: false,
  };

  const options = ["Credit", "Debit"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpenCardType(false);
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
            <button
              onClick={() => dispatch(setIsModalOpen(false))}
              className=""
            >
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
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={formValidationSchema}
            onSubmit={(values) => {
              if (values.cardType === "Credit") {
                if (values.setAsDefault) {
                  const findDefaultCard = cards.find(
                    (ele) =>
                      ele.cardType === "Credit" && ele.setAsDefault === true
                  );

                  if (findDefaultCard) {
                    toast.error(
                      "The selected card type already have a default card.",
                      { duration: 2000 }
                    );
                  } else {
                    const id = Date.now();

                    dispatch(
                      setCurrentCreditCard({
                        id,
                        action: SET_DEFAULT,
                        cardType: values.cardType,
                      })
                    );

                    dispatch(
                      setCards([
                        {
                          id,
                          ...values,
                          setAsDefault: true,
                          action: SET_DEFAULT,
                        },
                      ])
                    );
                    dispatch(setIsModalOpen(false));
                    toast.success("Card added successfully", {
                      duration: 2000,
                    });
                  }
                } else {
                  const id = Date.now();

                  dispatch(
                    setCurrentCreditCard({
                      id,
                      action: "",
                      cardType: values.cardType,
                    })
                  );
                  dispatch(setCards([{ id, action: "", ...values }]));
                  dispatch(setIsModalOpen(false));
                  toast.success("Card added successfully", { duration: 2000 });
                }
              } else {
                if (values.setAsDefault) {
                  const findDefaultCard = cards.find(
                    (ele) =>
                      ele.cardType === "Debit" && ele.setAsDefault === true
                  );

                  if (findDefaultCard) {
                    toast.error(
                      "The selected card type already have a default card.",
                      { duration: 2000 }
                    );
                  } else {
                    const id = Date.now();

                    dispatch(
                      setCurrentDebitCard({
                        id,
                        action: SET_DEFAULT,
                        cardType: values.cardType,
                      })
                    );
                    dispatch(
                      setCards([
                        {
                          id,
                          ...values,
                          action: SET_DEFAULT,
                          setAsDefault: true,
                        },
                      ])
                    );
                    dispatch(setIsModalOpen(false));
                    toast.success("Card added successfully", {
                      duration: 2000,
                    });
                  }
                } else {
                  const id = Date.now();
                  dispatch(
                    setCurrentDebitCard({
                      id,
                      action: "",
                      cardType: values.cardType,
                    })
                  );
                  dispatch(setCards([{ id, action: "", ...values }]));
                  dispatch(setIsModalOpen(false));
                  toast.success("Card added successfully", { duration: 2000 });
                }
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
              setTouched,
            }) => (
              <form onSubmit={handleSubmit}>
                <Container className="mt-4 mb-4 space-y-4">
                  <div>
                    <label
                      className={`form_modal_label block ${fontSize.md}  ${fontWeight.medium}`}
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="i.e. James Carlon"
                      className="form_modal_input w-full px-3 py-2 border rounded outline-none focus:ring focus:ring-blue-100"
                    />
                    {touched.name && errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
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
                      name="bankName"
                      value={values.bankName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form_modal_input w-full px-3 py-2 border rounded  outline-none focus:ring focus:ring-blue-100"
                    />
                    {touched.bankName && errors.bankName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.bankName}
                      </p>
                    )}
                  </div>

                  <div className="relative" ref={dropdownRef}>
                    <label className="block text-sm font-medium mb-1">
                      Card Type:
                    </label>

                    {/* Dropdown Box */}
                    <div
                      className={`form_modal_input w-full px-3 py-2 rounded  outline-none  focus:ring focus:ring-blue-100 bg-white cursor-pointer flex justify-between items-center ${
                        values.cardType ? "text-black" : "text-gray-400"
                      }`}
                      onClick={() => setIsOpenCardType(!isOpenCardType)}
                    >
                      {values.cardType || "Select Card Type"}
                      <span className="ml-2">
                        <img
                          src={arrowDownIcon}
                          alt="arrow_down"
                          className="h-2"
                        />
                      </span>
                    </div>

                    {/* Dropdown Options */}
                    {isOpenCardType && (
                      <div>
                        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 z-50">
                          <li className="px-3 py-2 text-gray-400 cursor-not-allowed">
                            Select Card Type
                          </li>
                          {options.map((option, index) => (
                            <li
                              key={index}
                              className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                              onClick={() => {
                                setTouched({ ...touched, cardType: true });
                                setFieldValue("cardType", option);
                                setIsOpenCardType(false);
                              }}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {touched.cardType && errors.cardType && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.cardType}
                      </p>
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
                      name="cardNumber"
                      value={values.cardNumber}
                      onChange={(e) =>
                        setFieldValue(
                          "cardNumber",
                          maskCardNumber(e.target.value)
                        )
                      }
                      onBlur={handleBlur}
                      className="form_modal_input w-full px-3 py-2 border rounded  outline-none focus:ring focus:ring-blue-100"
                      maxLength={19}
                    />
                    {touched.cardNumber && errors.cardNumber && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.cardNumber}
                      </p>
                    )}
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
                          name="expiration"
                          value={values.expiration}
                          onChange={(e) =>
                            setFieldValue(
                              "expiration",
                              maskExpiry(e.target.value)
                            )
                          }
                          onBlur={handleBlur}
                          placeholder="--/----"
                          maxLength={7}
                          className="form_modal_input placeholder:text-lg border w-full h-full pl-4 rounded  text-center  outline-none  focus:ring focus:ring-blue-100 tracking-widest placeholder-gray-400 font-mono"
                        />
                      </div>
                      {touched.expiration && errors.expiration && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.expiration}
                        </p>
                      )}
                    </div>

                    <div className="h-9">
                      <label
                        className={`form_modal_label block ${fontSize.md}  ${fontWeight.medium}`}
                      >
                        CVV:
                      </label>
                      <input
                        type="password"
                        name="cvv"
                        value={values.cvv}
                        onChange={(e) =>
                          setFieldValue("cvv", maskCVV(e.target.value))
                        }
                        onBlur={handleBlur}
                        placeholder="---"
                        maxLength={3}
                        className="form_modal_input border h-full w-16 placeholder:text-lg rounded  text-center  outline-none  focus:ring focus:ring-blue-100 tracking-widest placeholder-gray-400 font-mono"
                      />
                      {touched.cvv && errors.cvv && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.cvv}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="defaultC"
                      name="setAsDefault"
                      checked={values.setAsDefault}
                      onChange={handleChange}
                      className="form_modal_checkbox"
                    />
                    <label
                      htmlFor="defaultC"
                      className={`form_modal_label block ${fontSize.md}  ${fontWeight.normal}`}
                    >
                      Set this card as Default
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="gpay"
                      name="addToGPay"
                      checked={values.addToGPay}
                      onChange={handleChange}
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
                <div className="form_modal_footer border-t-2 p-3">
                  <Container className="flex justify-end space-x-2">
                    <button
                      onClick={() => dispatch(setIsModalOpen(false))}
                      className={`footer_btn_cancel ${fontSize.sm} ${fontWeight.medium} px-4 py-2 border rounded`}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={`footer_btn_submit px-4 py-2 ${fontWeight.medium} ${fontSize.sm} text-white rounded `}
                    >
                      Submit
                    </button>
                  </Container>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  );
};

export default FormModal;
