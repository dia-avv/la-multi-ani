import m1 from "../assets/m1.jpeg";
import m2 from "../assets/m2.jpeg";
import m3 from "../assets/m3.jpeg";
import "./Message.css";

const Message: React.FC = () => {
  return (
    <div className="content">
      <div className="title">
        <h1 style={{ fontSize: "64px", fontStyle: "italic" }}>A MESSAGE</h1>
        <h1 style={{ fontSize: "122px" }}>FOR U</h1>
      </div>
      <h2>Cadou 3/4</h2>
      <div className="image-container">
        <img src={m1} alt="Message" />
        <img src={m2} alt="Message" />
        <img src={m3} alt="Message" />
      </div>
    </div>
  );
};

export default Message;
