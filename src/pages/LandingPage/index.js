import Image1 from "../../assets/images/landing/Image1.png";
import "./landingPage.css";
import Mountain1 from "./miniComponent/Mountain1";
import Mountain2 from "./miniComponent/Mountain2";

const LandingPage = () => {
  return (
    <div>
      <img src={Image1} className="landing-page-image" alt="" />
      <Mountain1 />
      <Mountain2 />
    </div>
  );
};

export default LandingPage;
