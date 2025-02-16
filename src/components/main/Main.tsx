import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import addIcon from "../../../public/assets/icons/add_icon.png";
import eyeIcon from "../../../public/assets/icons/eye.png";
import { bodyPaddingX, fontSize, fontWeight } from "../../constants/constant";
import {
  actionCardData1,
  actionCardData2,
  dropdownCardData,
} from "../../dummy_data/dummyData";
import { setIsModalOpen } from "../../store/slices/formModalSlice";
import { AppDispatch, RootState } from "../../store/store";
import ActionCard1 from "../ActionCard1";
import ActionCard2 from "../ActionCard2";
import Card from "../card/Card";
import Container from "../Container";
import DropDownCard from "../dropDownCard/DropDownCard";
import Footer from "../footer/Footer";
import FormModal from "../modals/FormModal";
import SideBar from "../sidebar/SideBar";
import "./style.scss";
import {
  setCurrentCreditCard,
  setCurrentDebitCard,
} from "../../store/slices/cardSlice";
import { CardType } from "../../types/types";

interface MainProps {
  isOpenSidebar: boolean;
  handleCloseSidebar: () => void;
}

const Main = ({ isOpenSidebar, handleCloseSidebar }: MainProps) => {
  const [isCreditNumberShow, setIsCreditNumberShow] = useState(false);
  const [isDebitNumberShow, setIsDebitNumberShow] = useState(false);

  const { isModalOpen } = useSelector((state: RootState) => state.form);
  const { cards } = useSelector((state: RootState) => state.card);
  const dispatch = useDispatch<AppDispatch>();

  const toggleCreditNumber = () => {
    setIsCreditNumberShow(!isCreditNumberShow);
  };
  const toggleDebitNumber = () => {
    setIsDebitNumberShow(!isDebitNumberShow);
  };

  useEffect(() => {
    if (cards?.length) {
      const firstCreditCard = cards.find(
        (ele) => ele.cardType === "Credit"
      ) as CardType;

      dispatch(
        setCurrentCreditCard({
          id: firstCreditCard?.id,
          action: firstCreditCard?.action,
          cardType: firstCreditCard?.cardType,
        })
      );

      const firstDebitCard = cards.find(
        (ele) => ele.cardType === "Debit"
      ) as CardType;

      dispatch(
        setCurrentDebitCard({
          id: firstDebitCard?.id,
          action: firstDebitCard?.action,
          cardType: firstDebitCard?.cardType,
        })
      );
    }
  }, []);

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
                onClick={() => dispatch(setIsModalOpen(true))}
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
                  <button
                    onClick={toggleCreditNumber}
                    className="card_hide_show_btn flex p-1 items-center gap-2 justify-center"
                  >
                    <img src={eyeIcon} className="w-3 h-2" alt="eye_icon" />
                    <span
                      className={`card_hide_show_btn_text ${fontSize.default}`}
                    >
                      {!isCreditNumberShow
                        ? "Show Card Number"
                        : "Hide Card Number"}
                    </span>
                  </button>
                </div>
                <div>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{ clickable: false }}
                    onTouchMove={() => {
                      setIsCreditNumberShow(false);
                    }}
                    onSlideChange={(swiper) => {
                      const newIndex = swiper.activeIndex;
                      const findCard = cards.filter(
                        (ele) => ele.cardType === "Credit"
                      )[newIndex];
                      dispatch(
                        setCurrentCreditCard({
                          id: findCard?.id,
                          cardType: findCard?.cardType,
                          action: findCard?.action,
                        })
                      );
                      setIsCreditNumberShow(false);
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {cards.length
                      ? cards
                          .filter((ele) => ele.cardType === "Credit")
                          .map((card) => {
                            return (
                              <SwiperSlide key={card.id}>
                                <Card
                                  data={card}
                                  isNumberShow={isCreditNumberShow}
                                />
                              </SwiperSlide>
                            );
                          })
                      : ""}
                  </Swiper>

                  <div className="flex flex-col gap-3 rounded card_features_btn_wrapper p-6">
                    <div className="flex justify-between">
                      {actionCardData1.map((item) => {
                        return (
                          <ActionCard1
                            data={item}
                            key={item.id}
                            from="credit"
                          />
                        );
                      })}
                    </div>

                    <div className="flex  justify-between">
                      {actionCardData2.map((item) => {
                        return (
                          <ActionCard2
                            data={item}
                            key={item.id}
                            from="credit"
                          />
                        );
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
                  <button
                    onClick={toggleDebitNumber}
                    className="card_hide_show_btn flex p-1 items-center gap-2 justify-center"
                  >
                    <img src={eyeIcon} className="w-3 h-2" alt="eye_icon" />
                    <span
                      className={`card_hide_show_btn_text ${fontSize.default}`}
                    >
                      {!isDebitNumberShow
                        ? "Show Card Number"
                        : "Hide Card Number"}
                    </span>
                  </button>
                </div>
                <div>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{ clickable: false }}
                    onSlideChange={(swiper) => {
                      const newIndex = swiper.activeIndex;
                      const findCard = cards.filter(
                        (ele) => ele.cardType === "Debit"
                      )[newIndex];
                      dispatch(
                        setCurrentDebitCard({
                          id: findCard?.id,
                          cardType: findCard?.cardType,
                          action: findCard?.action,
                        })
                      );
                      setIsDebitNumberShow(false);
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {cards.length
                      ? cards
                          .filter((ele) => ele.cardType === "Debit")
                          .map((card) => {
                            return (
                              <SwiperSlide key={card.id}>
                                <Card
                                  data={card}
                                  isNumberShow={isDebitNumberShow}
                                />
                              </SwiperSlide>
                            );
                          })
                      : ""}

                    <div className="flex flex-col gap-3 rounded card_features_btn_wrapper p-6">
                      <div className="flex justify-between">
                        {actionCardData1.map((item) => {
                          return (
                            <ActionCard1
                              data={item}
                              key={item.id}
                              from="debit"
                            />
                          );
                        })}
                      </div>

                      <div className="flex  justify-between">
                        {actionCardData2.map((item) => {
                          return (
                            <ActionCard2
                              data={item}
                              key={item.id}
                              from="debit"
                            />
                          );
                        })}
                      </div>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* modal */}

        {isModalOpen && <FormModal />}

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Main;
