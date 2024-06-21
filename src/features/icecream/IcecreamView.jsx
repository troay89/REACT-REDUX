import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const numOfCakes = useSelector((state) => state.acecream.numOfAcescrean)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of ice cream - { numOfCakes } </h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock ice cream</button>
    </div>
  )
}