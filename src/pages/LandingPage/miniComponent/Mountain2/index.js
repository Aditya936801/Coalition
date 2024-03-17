import "./mountain2.css";
import bg2 from "../../../../assets/images/landing/bg2.png";
import { MOUNT_DETAIL } from "../../../../common/constant";
import { useState } from "react";
import Accordian from "./minicomponent/Accordian";
const Mountain2 = () => {
  const [selected, setSelected] = useState("mount1");

  const handleClick = (sel) => () => {
    setSelected(sel);
  };
  return (
    <div className="mountain2-container" id="team">
      <div className="mount2-container">
        <div className="mount2-heading-container">
          <div className="mount2-text-wrapper">
            <div className="mount2-text-num">02</div>
            <div>
              <div className="mount2-text-name">{MOUNT_DETAIL?.mount2?.name}</div>
              <div className="mount2-dot" />
            </div>
          </div>
          <div className="mount2-content">{MOUNT_DETAIL?.mount2?.content}</div>
        </div>
      </div>
      <div className="mount2-image-container">
        <div className="accordian-container">
          <Accordian title="mountain1" data={MOUNT_DETAIL?.mount1} />
          <Accordian title="mountain2" data={MOUNT_DETAIL?.mount2} />
        </div>
        <img src={bg2} alt="Loading.." className="mount2-image" />
        <div className="mount2-nav">
          <div className={`${selected === "mount1" ? "tab-selected" : ""}`} onClick={handleClick("mount1")}>
            Mountain1
          </div>
          <div className={`${selected === "mount2" ? "tab-selected" : ""}`} onClick={handleClick("mount2")}>
            Mountain2
          </div>
        </div>
        <div className="mount-schedule">
          <div className="mount-schedule-heading">Schedule</div>
          <div className="">
            {MOUNT_DETAIL?.[selected]?.schedule?.map((data, idx) => {
              return (
                <div className="schedule-section" key={idx}>
                  {data?.detail?.map((el, idx) => {
                    return (
                      <div className="schedule-text" key={idx}>
                        <div>{el?.date}</div>
                        <div>{el?.content}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mountain2;
