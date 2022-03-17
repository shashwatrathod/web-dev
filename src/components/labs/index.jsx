import React from "react";
import { Link } from "react-router-dom";
import Styles from "./styles";
import Classes from "./classes";
import ConditionalOutput from "./conditional-output";
import Todo from "./todo";

const Labs = () => {
  return (
    <>
      <h1>Labs</h1>
      <Todo />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <Link to="/hello">Hello</Link> | <Link to="/tuiter">Tuiter</Link>
    </>
  );
};

export default Labs;
