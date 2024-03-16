import bg1 from "../../../../assets/images/landing/bg1.png";
import "./mountain1.css";
import Carousel from "../../../../components/Carousel";
import { MOUNT_DETAIL } from "../../../../common/constant";
const Mountain1 = () => {
  return (
    <div className="mountain1-container" id="history">
      <img src={bg1} className="mountain1-image" alt="Loading.." />
      <div className="mount-container">
        <div className="mount-heading-container">
          <div className="mount-text-num">01</div>
          <div>
            <div className="mount-text-name">{MOUNT_DETAIL?.mount1?.name}</div>
            <div className="mount-dot" />
          </div>
        </div>
        <div className="mount-content">{MOUNT_DETAIL?.mount1?.content}</div>
      </div>
      <div className="mount1-carousel-conatiner">
        <Carousel />
      </div>
    </div>
  );
};

export default Mountain1;
