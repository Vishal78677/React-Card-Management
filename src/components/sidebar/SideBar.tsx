import React from "react";
import "./style.scss";
import Container from "../Container";
import companyLogo from "../../../public/assets/images/comapny_logo.png";
import homeIcon from "../../../public/assets/icons/Home-Icon.png";
import cardIcon from "../../../public/assets/icons/Cards-Icons.png";
import transactionIcon from "../../../public/assets/icons/Transactions-Icon.png";
import logoutIcon from "../../../public/assets/icons/logout.png";
import rightIcon from "../../../public/assets/icons/rightArrow.png";
import settingsIcon from "../../../public/assets/icons/Settings.png";
import { fontSize, fontWeight } from "../../constants/constant";

interface SideBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SideBar = ({ isOpen, toggleSidebar }: SideBarProps) => {
  return (
    <React.Fragment>
      <div
        className={`fixed z-20 inset-0 bg-gray-800 bg-opacity-50 lg:hidden transition-all duration-200 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`main_sidebar fixed left-0 top-0 z-50 w-8/12 h-full text-white  transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:block lg:w-64`}
      >
        <Container className="flex flex-col p-4">
          <button
            className="flex w-full justify-self-end  lg:hidden text-white mb-4 justify-end"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
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
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          </button>

          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-7">
              <div>
                <img src={companyLogo} alt="company-logo" />
              </div>

              <h3 className={`${fontSize.sm} ${fontWeight.semiBold}`}>
                Software & Web Development Company - Umbraco Gold Partner
              </h3>
            </div>

            <ul className="flex flex-col gap-3">
              <li className="flex justify-between border-b border-white py-3">
                <div className="flex items-center gap-3">
                  <img src={homeIcon} alt="home-icon" />
                  <p>Home</p>
                </div>
              </li>
              <li className="flex justify-between border-b border-white py-3">
                <div className="flex items-center gap-3">
                  <img src={cardIcon} alt="cards-icon" />
                  <p className="sidebar_cards_icon">Cards</p>
                </div>

                <img
                  src={rightIcon}
                  alt="right-arrow-icon"
                  className="h-3 w-3"
                />
              </li>
              <li className="flex justify-between border-b border-white py-3">
                <div className="flex items-center gap-3">
                  <img src={transactionIcon} alt="home-icon" />
                  <p>Transactions</p>
                </div>
              </li>
              <li className="flex justify-between border-b border-white py-3">
                <div className="flex items-center gap-3">
                  <img src={settingsIcon} alt="settings-icon" />
                  <p>Settings</p>
                </div>
              </li>
              <li className="flex justify-between  py-3">
                <div className="flex items-center gap-3">
                  <img src={logoutIcon} alt="door-icon" />
                  <p>Logout</p>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
