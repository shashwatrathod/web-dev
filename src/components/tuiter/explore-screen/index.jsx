import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavigationActive } from "../actions/navigation-actions";
import ExploreComponent from "./explore-component";

const ExploreScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavigationActive("Explore"));
  }, [dispatch]);

  return (
    <>
      <ExploreComponent />
    </>
  );
};

export default ExploreScreen;
