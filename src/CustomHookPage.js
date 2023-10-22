import React from "react";
import useCounter from "./useCounter";

const CustomHookPage = () => {
  const { count, increment, decrement, reset, setValue } = useCounter(0);

  return (
    <div className="counter-app">
      <div className="counterContent">
        <p>Count</p>
        <h1>{count}</h1>
        <button className="increment-button" onClick={increment}>
          Increment
        </button>
        <button className="decrement-button" onClick={decrement}>
          Decrement
        </button>
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
        <input
          type="number"
          className="count-input"
          value={count}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};
export default CustomHookPage;
