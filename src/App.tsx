
import { Transition } from "./semi-animation-react/index";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <Transition
        state={visible ? "enter" : "leave"}
        from={{ opacity: 0, scale: 0}}
        enter={{ opacity: 1, scale: 1 }}
        leave={{ opacity: 0, scale: 0 }}
      >
        {({scale, opacity}: any) => (
          <h2 style={{transform: `scale(${scale})`, opacity}}>
            Toggle to see some animation happen!
          </h2>
        )}
      </Transition>

      <button onClick={() => {
        setVisible((state) => !state)
      }}>toggle</button>
    </div>
  );
}
