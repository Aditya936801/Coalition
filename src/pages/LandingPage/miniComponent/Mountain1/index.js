import bg1 from "../../../../assets/images/landing/bg1.png";
import "./mountain1.css";
import Carousel from "../../../../components/Carousel";
const Mountain1 = () => {
  return (
    <div className="mountain1-container">
      <img src={bg1} className="mountain1-image" alt="Loading.." />
      <div className="mount-container">
        <div className="mount-heading-container">
          <div className="mount-text-num">01</div>
          <div>
            <div className="mount-text-name">history</div>
            <div className="mount-dot" />
          </div>
        </div>
        <div className="mount-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit. Quae maiores eum recusandae corporis culpa consequuntur officia
          aperiam! Animi debitis perspiciatis tempora praesentium molestias quis voluptate odio, doloremque quam cum numquam magni i  excepturi nostrum, aut possimus quibusdam, repellendus accusantium, consequatur
          alias.  iure velit minus rerum, excepturi, culpa illo reiciendis maxime saepe itaque sint expedita, ipsam assumenda!
         
        </div>
      </div>
      <div className="mount1-carousel-conatiner">
        <Carousel />
      </div>
    </div>
  );
};

export default Mountain1;
