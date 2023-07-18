import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../counterSlice";

const Counter = () => {
  const counter = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <div>Counter</div>
      <p>{counter}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </>
  );
};

export default Counter;
