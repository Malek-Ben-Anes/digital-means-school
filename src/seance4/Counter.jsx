import { useEffect, useState } from "react";
import { InputText } from "../seance3/components/InputText";
import { CheckBox } from "../seance3/components/CheckBox";

export function Counter() {
  const [displayInterval, setDisplayInterval] = useState(true);

  return (
    <div>
      <CheckBox
        value={displayInterval}
        onChange={setDisplayInterval}
        text="afficher interval"
      />
      {displayInterval && <CounterInterval />}
    </div>
  );
}

function CounterInterval() {
  const [counter, setCounter] = useState(60);
  const [downCounter, setDownCounter] = useState(60);

  const handlerIntervalChange = () => {
    setDownCounter((counter) => {
      console.log("handlerIntervalChange");
      if (counter > 0) {
        return counter - 1;
      } else {
        clearInterval(timer);
        return 0;
      }
    });
  };

  useEffect(() => {
    // On mount
    setDownCounter(counter);
    const timer = setInterval(handlerIntervalChange, 1000);

    // On Destroy
    return () => {
      console.log("destory");
      clearInterval(timer);
    };
  }, [counter]);

  return (
    <div>
      <InputText text="Compteur" value={counter} onChange={setCounter} />
      <br />
      down counter: {downCounter}
    </div>
  );
}
