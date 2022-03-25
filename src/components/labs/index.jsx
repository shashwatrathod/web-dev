import React from "react";
import { Link } from "react-router-dom";
import Styles from "./styles";
import Classes from "./classes";
import ConditionalOutput from "./conditional-output";
import Todo from "./todo";
import ReduxExamples from "./redux-examples";

const Labs = () => {
  return (
    <>
      <h1>Labs</h1>
      <ReduxExamples />
      <Todo />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <Link to="/hello">Hello</Link> | <Link to="/tuiter/home">Tuiter</Link>
    </>
  );
};

export default Labs;
