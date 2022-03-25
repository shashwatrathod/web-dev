import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../actions/profile-actions";

const EditProfile = ({ closeEditWindow }) => {
  const profile = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [bio, setBio] = useState(profile.bio);

  const onProfileSaveHandler = () => {
    dispatch(editProfile(firstName, lastName, bio));
    closeEditWindow();
  };
  return (
    <>
      <>
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-4">
            <i
              className="fa-solid fa-xmark align-self-center wd-cursor-pointer wd-cursor-pointer"
              onClick={() => closeEditWindow()}
            ></i>
            <div className="align-self-center">
              <h5 className="mb-0">Edit Profile</h5>
            </div>
          </div>
          <button
            className="btn btn-dark rounded-pill"
            onClick={() => onProfileSaveHandler()}
          >
            Save
          </button>
        </div>
        <img
          src={profile.bannerPicture}
          alt={profile.handle}
          className="wd-profile-banner mt-2"
        />
        <div className="px-3">
          <div className="d-flex justify-content-between">
            <div className="wd-profile-picture-container">
              <img
                src={profile.profilePicture}
                alt={profile.handle}
                className="wd-profile-picture"
              />
            </div>
          </div>
          <div className="mt-2 form-floating">
            <input
              type="text"
              className="form-control bg-light text-dark"
              id="wd-edit-profile-first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="wd-edit-profile-first-name ">First Name</label>
          </div>
          <div className="mt-2 form-floating">
            <input
              type="text"
              className="form-control bg-light text-dark"
              id="wd-edit-profile-last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="wd-edit-profile-last-name">Last Name</label>
          </div>
          <div className="mt-2 form-floating">
            <textarea
              className="form-control bg-light text-dark"
              id="wd-edit-profile-bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <label htmlFor="wd-edit-profile-bio">Bio</label>
          </div>
        </div>
      </>
    </>
  );
};

export default EditProfile;
