import addIcon from "../../../public/assets/icons/add_icon.png";
import { bodyPaddingX, fontSize, fontWeight } from "../../constants/constant";
import Container from "../Container";
import Footer from "../footer/Footer";
import SideBar from "../sidebar/SideBar";
import "./style.scss";

import { dropdownCardData } from "../../dummy_data/dummyData";
import DropDownCard from "../dropDownCard/DropDownCard";

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

      <div className="flex flex-col justify-between h-screen">
        <div>
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
                className={`add_card_btn flex items-center gap-4 w-24 h-6 px-2 ${fontSize.default} ${fontSize.sm} `}
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

          <Container className={`main_body_con py-2 ${bodyPaddingX.default}`}>
            {dropdownCardData.map((item) => {
              return <DropDownCard item={item} />;
            })}
          </Container>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Main;
