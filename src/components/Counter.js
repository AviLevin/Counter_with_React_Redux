import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../state/slices/counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>
        Counter with <span className="title"> React Redux</span>
      </h1>{" "}
      <h2>
        You clicked <span className="title">{count}</span> times!
      </h2>
      <button className="btn btn-primary" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  );
}
