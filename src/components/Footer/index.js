import "./footer.css";
import footerLogo from "../../assets/images/footer/footerLogo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo-text">
        <img src={footerLogo} alt="Loading..." />
        <div>
          LOSANGELES
          <br />
          MOUNTAINS
        </div>
      </div>
      <div className="navbar-copyright" >
      COPYRIGHT 2016. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;
