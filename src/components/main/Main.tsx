import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import addIcon from "../../../public/assets/icons/add_icon.png";
import eyeIcon from "../../../public/assets/icons/eye.png";
import successIcon from "../../../public/assets/icons/success.png";
import gpayIcon from "../../../public/assets/images/g_pay.png";
import hdfcBankIcon from "../../../public/assets/images/hdfc_bank.png";
import masterCardIcon from "../../../public/assets/images/master_card.png";
import { bodyPaddingX, fontSize, fontWeight } from "../../constants/constant";
import {
  actionCardData1,
  actionCardData2,
  dropdownCardData,
} from "../../dummy_data/dummyData";
import Container from "../Container";
import DropDownCard from "../dropDownCard/DropDownCard";
import Footer from "../footer/Footer";
import SideBar from "../sidebar/SideBar";
import "./style.scss";
import ActionCard1 from "../ActionCard1";
import ActionCard2 from "../ActionCard2";

interface MainProps {
  isOpenSidebar: boolean;
  handleCloseSidebar: () => void;
}

const Main = ({ isOpenSidebar, handleCloseSidebar }: MainProps) => {
  return (
    <div>
      <SideBar isOpen={isOpenSidebar} toggleSidebar={handleCloseSidebar} />

      <Container className={`my-4`}>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="breadcrumbs_text inline-flex items-center text-sm"
              >
                Home
              </a>
            </li>

            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className={`rtl:rotate-180 w-3 h-3 text-gray-400 `}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="breadcrumbs_text ms-1 text-sm">Cards</span>
              </div>
            </li>
          </ol>
        </nav>
      </Container>

      <div className="flex flex-col justify-between">
        <div className="mb-5">
          <div>
            <Container
              className={`main_body_con flex justify-between items-center py-3 border-[#6A94A5] border-b-0 ${bodyPaddingX.default}`}
            >
              <div className="flex gap-2">
                <button
                  className={`active_saved_card_btn ${fontWeight.medium} ${fontSize.default} ${fontSize.md}`}
                >
                  Saved Cards
                </button>
                <button
                  className={`gd_card_btn ${fontWeight.light}  ${fontSize.default} ${fontSize.md}`}
                >
                  GD Cards
                </button>
              </div>
              <button
                className={`add_card_btn flex items-center gap-3 w-24 h-6 px-2 ${fontSize.default} ${fontSize.sm} `}
              >
                <img
                  src={addIcon}
                  alt="add_icon"
                  height={"10px"}
                  width={"10px"}
                />
                <span className={`add_card_span`}>Add Card</span>
              </button>
            </Container>
          </div>

          {/* dropdown cards */}

          <Container className={`main_body_con py-5 ${bodyPaddingX.default}`}>
            {dropdownCardData.map((item) => {
              return <DropDownCard item={item} />;
            })}

            {/* cards */}

            <div className="flex flex-col gap-3 mt-6">
              {/* credit cards */}
              <div className="flex flex-col gap-3">
                <div className="card_header_wrapper flex items-center justify-between">
                  <h3
                    className={`card_header_title relative ${fontWeight.semiBold} ${fontSize.lg}`}
                  >
                    Credit cards
                    <span className="card_header_title_border block w-20 mt-1"></span>
                  </h3>
                  <button className="card_hide_show_btn flex p-1 items-center gap-2 justify-center">
                    <img src={eyeIcon} className="w-3 h-2" alt="eye_icon" />
                    <span
                      className={`card_hide_show_btn_text ${fontSize.default}`}
                    >
                      Show Card Number
                    </span>
                  </button>
                </div>
                <div>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{ clickable: false }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="main_card_wrapper w-full max-w-lg bg-blue-900 text-white p-6 rounded-xl shadow-lg relative">
                        {/* Bank Logo */}
                        <div className="absolute top-4 right-4 flex items-center">
                          <img
                            src={hdfcBankIcon}
                            alt="HDFC Bank"
                            className="h-4 w-24"
                          />
                        </div>

                        {/* Cardholder Name */}
                        <div className={`mt-6 ${fontSize.lg} font-semibold`}>
                          John Watson
                        </div>

                        {/* Card Number */}
                        <div
                          className={`mt-2 flex justify-between items-center ${fontSize.xl} w-3/4 tracking-widest`}
                        >
                          <span className={`${fontWeight.bold}`}>••••</span>{" "}
                          <span className={`${fontWeight.bold}`}>••••</span>{" "}
                          <span className={`${fontWeight.bold}`}>••••</span>{" "}
                          <span
                            className={`${fontWeight.normal} ${fontSize.md}`}
                          >
                            9340
                          </span>
                        </div>

                        {/* Card Details */}
                        <div className="mt-4 w-3/4  flex justify-between items-center text-sm">
                          <div>
                            <span className={`${fontWeight.bold}`}>
                              Valid Till :
                            </span>{" "}
                            <span className={`ml-1 ${fontWeight.normal}`}>
                              12/24
                            </span>
                          </div>
                          <div className="flex gap-3 items-center">
                            <span className="font-semibold">CVV :</span>
                            <span
                              className={`${fontWeight.bold} ${fontSize.xl} tracking-widest`}
                            >
                              •••
                            </span>
                          </div>
                        </div>

                        {/* Mastercard Logo */}
                        <div className="absolute bottom-7 right-4">
                          <img
                            src={masterCardIcon}
                            alt="Mastercard"
                            className="h-10 w-16"
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="main_card_wrapper w-full max-w-lg bg-blue-900 text-white p-6 rounded-xl shadow-lg relative">
                        {/* Bank Logo */}
                        <div className="absolute top-4 right-4 flex items-center">
                          <img
                            src={hdfcBankIcon}
                            alt="HDFC Bank"
                            className="h-4 w-24"
                          />
                        </div>

                        {/* Cardholder Name */}
                        <div className={`mt-6 ${fontSize.lg} font-semibold`}>
                          John Watson
                        </div>

                        {/* Card Number */}
                        <div
                          className={`mt-2 flex justify-between items-center ${fontSize.xl} w-3/4 tracking-widest`}
                        >
                          <span className={`${fontWeight.bold}`}>••••</span>{" "}
                          <span className={`${fontWeight.bold}`}>••••</span>{" "}
                          <span className={`${fontWeight.bold}`}>••••</span>{" "}
                          <span
                            className={`${fontWeight.normal} ${fontSize.md}`}
                          >
                            9340
                          </span>
                        </div>

                        {/* Card Details */}
                        <div className="mt-4 w-3/4  flex justify-between items-center text-sm">
                          <div>
                            <span className={`${fontWeight.bold}`}>
                              Valid Till :
                            </span>{" "}
                            <span className={`ml-1 ${fontWeight.normal}`}>
                              12/24
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-semibold">CVV :</span>
                            <span
                              className={`${fontWeight.bold} ${fontSize.xl} tracking-widest`}
                            >
                              •••
                            </span>
                          </div>
                        </div>

                        {/* Mastercard Logo */}
                        <div className="absolute bottom-7 right-4">
                          <img
                            src={masterCardIcon}
                            alt="Mastercard"
                            className="h-10 w-16"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="flex flex-col gap-3 rounded card_features_btn_wrapper p-6">
                    <div className="flex justify-between">
                      {actionCardData1.map((item) => {
                        return <ActionCard1 data={item} key={item.id} />;
                      })}
                    </div>

                    <div className="flex  justify-between">
                      {actionCardData2.map((item) => {
                        return <ActionCard2 data={item} key={item.id} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* debit cards */}
              <div className="flex flex-col gap-3">
                <div className="card_header_wrapper flex items-center justify-between">
                  <h3
                    className={`card_header_title relative ${fontWeight.semiBold} ${fontSize.lg}`}
                  >
                    Debit cards
                    <span className="card_header_title_border block w-20 mt-1"></span>
                  </h3>
                  <button className="card_hide_show_btn flex p-1 items-center gap-2 justify-center">
                    <img src={eyeIcon} className="w-3 h-2" alt="eye_icon" />
                    <span
                      className={`card_hide_show_btn_text ${fontSize.default}`}
                    >
                      Show Card Number
                    </span>
                  </button>
                </div>
                <div>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{ clickable: false }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="main_card_wrapper w-full max-w-lg bg-blue-900 text-white p-6 rounded-xl shadow-lg relative">
                        {/* Bank Logo */}
                        <div className="absolute top-4 right-4 flex items-center">
                          <img
                            src={hdfcBankIcon}
                            alt="HDFC Bank"
                            className="h-4 w-24"
                          />
                        </div>

                        {/* Cardholder Name */}
                        <div className={`mt-6 ${fontSize.lg} font-semibold`}>
                          John Watson
                        </div>

                        {/* Card Number */}
                        <div
                          className={`mt-2 flex justify-between items-center ${fontSize.xl} w-3/4 tracking-widest`}
                        >
                          <span className={`${fontWeight.bold}`}>••••</span>{" "}
                          <span className={`${fontWeight.bold}`}>••••</span>{" "}
                          <span className={`${fontWeight.bold}`}>••••</span>{" "}
                          <span
                            className={`${fontWeight.normal} ${fontSize.md}`}
                          >
                            9340
                          </span>
                        </div>

                        {/* Card Details */}
                        <div className="mt-4 w-3/4  flex justify-between items-center text-sm">
                          <div>
                            <span className={`${fontWeight.bold}`}>
                              Valid Till :
                            </span>{" "}
                            <span className={`ml-1 ${fontWeight.normal}`}>
                              12/24
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-semibold">CVV :</span>
                            <span
                              className={`${fontWeight.bold} ${fontSize.xl} tracking-widest`}
                            >
                              •••
                            </span>
                          </div>
                        </div>

                        {/* Mastercard Logo */}
                        <div className="absolute bottom-7 right-4">
                          <img
                            src={masterCardIcon}
                            alt="Mastercard"
                            className="h-10 w-16"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="main_card_wrapper w-full max-w-lg bg-blue-900 text-white p-6 rounded-xl shadow-lg relative">
                        {/* Bank Logo */}
                        <div className="absolute top-4 right-4 flex items-center">
                          <img
                            src={hdfcBankIcon}
                            alt="HDFC Bank"
                            className="h-4 w-24"
                          />
                        </div>

                        {/* Cardholder Name */}
                        <div className={`mt-6 ${fontSize.lg} font-semibold`}>
                          John Watson
                        </div>

                        {/* Card Number */}
                        <div
                          className={`mt-2 flex justify-between items-center ${fontSize.xl} w-3/4 tracking-widest`}
                        >
                          <span className={`${fontWeight.bold}`}>••••</span>{" "}
                          <span className={`${fontWeight.bold}`}>••••</span>{" "}
                          <span className={`${fontWeight.bold}`}>••••</span>{" "}
                          <span
                            className={`${fontWeight.normal} ${fontSize.md}`}
                          >
                            9340
                          </span>
                        </div>

                        {/* Card Details */}
                        <div className="mt-4 w-3/4  flex justify-between items-center text-sm">
                          <div>
                            <span className={`${fontWeight.bold}`}>
                              Valid Till :
                            </span>{" "}
                            <span className={`ml-1 ${fontWeight.normal}`}>
                              12/24
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-semibold">CVV :</span>
                            <span
                              className={`${fontWeight.bold} ${fontSize.xl} tracking-widest`}
                            >
                              •••
                            </span>
                          </div>
                        </div>

                        {/* Mastercard Logo */}
                        <div className="absolute bottom-7 right-4">
                          <img
                            src={masterCardIcon}
                            alt="Mastercard"
                            className="h-10 w-16"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="main_card_wrapper w-full max-w-lg bg-blue-900 text-white p-6 rounded-xl shadow-lg relative">
                        {/* Bank Logo */}
                        <div className="absolute top-4 right-4 flex items-center">
                          <img
                            src={hdfcBankIcon}
                            alt="HDFC Bank"
                            className="h-4 w-24"
                          />
                        </div>

                        {/* Cardholder Name */}
                        <div className={`mt-6 ${fontSize.lg} font-semibold`}>
                          John Watson
                        </div>

                        {/* Card Number */}
                        <div
                          className={`mt-2 flex justify-between items-center ${fontSize.xl} w-3/4 tracking-widest`}
                        >
                          <span className={`${fontWeight.bold}`}>••••</span>{" "}
                          <span className={`${fontWeight.bold}`}>••••</span>{" "}
                          <span className={`${fontWeight.bold}`}>••••</span>{" "}
                          <span
                            className={`${fontWeight.normal} ${fontSize.md}`}
                          >
                            9340
                          </span>
                        </div>

                        {/* Card Details */}
                        <div className="mt-4 w-3/4  flex justify-between items-center text-sm">
                          <div>
                            <span className={`${fontWeight.bold}`}>
                              Valid Till :
                            </span>{" "}
                            <span className={`ml-1 ${fontWeight.normal}`}>
                              12/24
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-semibold">CVV :</span>
                            <span
                              className={`${fontWeight.bold} ${fontSize.xl} tracking-widest`}
                            >
                              •••
                            </span>
                          </div>
                        </div>

                        {/* Mastercard Logo */}
                        <div className="absolute bottom-7 right-4">
                          <img
                            src={masterCardIcon}
                            alt="Mastercard"
                            className="h-10 w-16"
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    <div className="flex flex-col gap-3 rounded card_features_btn_wrapper p-6">
                      <div className="flex justify-between">
                        {actionCardData1.map((item) => {
                          return <ActionCard1 data={item} key={item.id} />;
                        })}
                      </div>

                      <div className="flex  justify-between">
                        {actionCardData2.map((item) => {
                          return <ActionCard2 data={item} key={item.id} />;
                        })}
                      </div>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Main;
