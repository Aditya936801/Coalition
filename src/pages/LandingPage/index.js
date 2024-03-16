import Image1 from "../../assets/images/landing/Image1.png"
import "./landingPage.css"
import Mountain1 from "./miniComponent/Mountain1"

const LandingPage = () => {
  return (
    <div>
    <img src={Image1} className="landing-page-image" alt="" />
    <Mountain1/>
        
    </div>
  )
}

export default LandingPage