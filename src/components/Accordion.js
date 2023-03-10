import "./accordion.css";
import sound from "../assets/sound.mp3";

const Accordion = ({ title, text, active, setActive }) => {
  const playSound = () => {
    new Audio(sound).play();
  };

  return (
    <div className="accordion">
      <div className="accordion-heading">
        <div
          className="container"
          onClick={() => {
            playSound();
            setActive(title);
          }}>
          <p>{title}</p>
          <span>{active === title ? "👇" : "☝️"}</span>
        </div>
      </div>

      <div className={(active === title ? "show" : "") + " accordion-content"}>
        <div className="container">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
