import React, { useState } from "react";
import "./accordian.css";

const Accordian = (props) => {
  const { title, data } = props;
  const [open, setOpen] = useState(false);

  const handleToogle = () => {
    setOpen((pre) => !pre);
  };
  return (
    <div>
      <div className="accordian-heading" onClick={handleToogle}>
        <div>{title}</div>
        <div className="accordian-drop-icon">
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="#ffffff"
                d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="#ffffff"
                d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              />
            </svg>
          )}
        </div>
      </div>
      {open && (
        <div className="mount-accordian">
          <div className="mount-schedule-accordian">Schedule</div>
          <div className="">
            {data?.schedule?.map((data, idx) => {
              return (
                <div className="accordian-schedule-section" key={idx}>
                  {data?.detail?.map((el, idx) => {
                    return (
                      <div className="accordian-schedule-text" key={idx}>
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
      )}
    </div>
  );
};

export default Accordian;
