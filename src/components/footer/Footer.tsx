import { footerHeight, footerText } from "../../constants/constant";
import "./footer.scss";

const Footer = () => {
  return (
    <div
      className={`footer_main flex items-center justify-center ${footerHeight.default} ${footerHeight.sm} ${footerHeight.md} ${footerHeight.lg} ${footerHeight.xl}`}
    >
      <p className={`footer_text ${footerText.default}`}>
        &#169; GIRIRAJ DIGITAL All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
