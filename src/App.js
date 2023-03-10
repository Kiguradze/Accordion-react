import { useState } from "react";
import "./App.css";
import DATA from "./data";
import Accordion from "./components/Accordion";

function App() {
  const [active, setActive] = useState(DATA?.[0].title);

  return (
    <div className="App">
      {DATA.map((item) => {
        return (
          <Accordion
            key={item.id}
            title={item.title}
            text={item.text}
            active={active}
            setActive={setActive}
          />
        );
      })}
    </div>
  );
}

export default App;
