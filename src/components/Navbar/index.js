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
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar-container ${isOnTop?"navbar-transparent":""}`}>
      <img src={logo} alt="Loading..." />
      <div className={`navbar-links ${isOnTop?"":"navbar-link-black"}`}>
        <div>01. history</div>
        <div>02. team</div>
      </div>
    </div>
  );
};

export default Navbar;
