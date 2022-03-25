import React, { useCallback, useState } from "react";
import "./profile-screen.css";
import EditProfile from "./edit-profile";
import Profile from "./profile";

const ProfileScreen = () => {
  const [showEditWindow, setShowEditWindow] = useState(false);

  const closeEditWindow = useCallback(() => {
    setShowEditWindow(false);
  }, []);

  const openEditWindow = useCallback(() => {
    setShowEditWindow(true);
  }, []);

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
