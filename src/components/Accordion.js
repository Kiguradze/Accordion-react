import "./accordion.css";

const Accordion = ({ title, text, active, setActive }) => {
  return (
    <div className="accordion">
      <div className="accordion-heading">
        <div className="container" onClick={() => setActive(title)}>
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
