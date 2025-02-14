import { fontWeight, headerHeight } from "../../constants/constant";
import Container from "../Container";
import "./style.scss";

interface HeaderProps {
  handleOpenSideBar: () => void;
}

const Header = ({ handleOpenSideBar }: HeaderProps) => {
  return (
    <header
      className={`main_header flex items-center ${headerHeight.default} ${headerHeight.sm} ${headerHeight.md} ${headerHeight.lg} ${headerHeight.xl}`}
    >
      <Container className="flex gap-2 items-center">
        <svg
          onClick={handleOpenSideBar}
          className="header_menubar w-7 h-7"
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
            d="M18 6H6m12 4H6m12 4H6m12 4H6"
          />
        </svg>

        <h3 className={`header_title ${fontWeight.bold} `}>Cards</h3>
      </Container>
    </header>
  );
};

export default Header;
