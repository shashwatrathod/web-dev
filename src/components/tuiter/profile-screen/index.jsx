import React, { useCallback, useEffect, useState } from "react";
import "./profile-screen.css";
import EditProfile from "./edit-profile";
import Profile from "./profile";
import { useDispatch } from "react-redux";
import { setNavigationActive } from "../actions/navigation-actions";

const ProfileScreen = () => {
  const [showEditWindow, setShowEditWindow] = useState(false);

  const closeEditWindow = useCallback(() => {
    setShowEditWindow(false);
  }, []);

  const openEditWindow = useCallback(() => {
    setShowEditWindow(true);
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavigationActive("Profile"));
  }, [dispatch]);

  return (
    <>
      {showEditWindow ? (
        <EditProfile closeEditWindow={closeEditWindow} />
      ) : (
        <Profile openEditWindow={openEditWindow} />
      )}
    </>
  );
};

export default ProfileScreen;
