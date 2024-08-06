import React, { useState, useEffect } from "react";

const Counter = ({ root }) => {
  console.log("Counter rendered");
  console.log(root);

  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
    console.log(root);
  };

  useEffect(() => {
    console.log("Counter mounted");
    console.log(root);
  }, [count]);

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={clickHandler}>click</button>
    </div>
  );
};
export default Counter;
