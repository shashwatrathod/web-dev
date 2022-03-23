import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileTopBar = () => {
  const profile = useSelector((state) => state.profile);

  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex gap-4">
        <i
          class="fa-solid fa-arrow-left align-self-center wd-cursor-pointer"
          onClick={() => navigate(-1)}
        ></i>
        <div className="d-flex flex-column">
          <h5 className="mb-0">
            {profile.firstName} {profile.lastName}
          </h5>
          <span>123k Tuits</span>
        </div>
      </div>
    </>
  );
};

export default ProfileTopBar;
