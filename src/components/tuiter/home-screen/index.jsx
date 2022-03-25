import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavigationActive } from "../actions/navigation-actions";
import TuitList from "../tuit-list";
import WhatsHappening from "../whats-happening";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavigationActive("Home"));
  }, [dispatch]);

  return (
    <>
      <WhatsHappening />
      <TuitList />
    </>
  );
};

export default HomeScreen;
