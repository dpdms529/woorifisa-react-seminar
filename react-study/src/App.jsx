import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App({ root }) {
  console.log("App rendered");
  console.log(root);

  const [btn, setBtn] = useState("App");

  useEffect(() => {
    console.log("App mounted");
  }, [btn]);

  const clickHandler = () => {
    setBtn(btn === "App" ? "Hello" : "App");
  };

  return (
    <>
      <button onClick={clickHandler}>{btn}</button>
      <Counter root={root} />
    </>
  );
}

export default App;
