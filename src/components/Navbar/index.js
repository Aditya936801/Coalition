import "./navbar.css";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsOnTop(false);
    } else {
      setIsOnTop(true);
    }
  };

  const scrollToDiv = (ref) => () => {
    if (ref) {
      const sectionElement = document.getElementById(ref);
      const stickyHeaderHeight = 60;
      const extraOffset = 0;
      const scrollPosition = sectionElement.offsetTop - stickyHeaderHeight + extraOffset;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar-container ${isOnTop ? "navbar-transparent" : ""}`}>
      <div className="nav-title-container">
        <img src={logo} alt="Loading..." />
        {!isOnTop && (
          <div className="nav-title">
            <div>LosAngeles</div>
            <span>MOuntains</span>
          </div>
        )}
      </div>
      <div className={`navbar-links ${isOnTop ? "" : "navbar-link-black"}`}>
        <div onClick={scrollToDiv("history")}>01. history</div>
        <div onClick={scrollToDiv("team")}>02. team</div>
      </div>
    </div>
  );
};

export default Navbar;
