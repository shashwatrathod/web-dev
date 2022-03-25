export const editProfile = (firstName, lastName, bio) => {
  return {
    type: "edit-profile",
    firstName,
    lastName,
    bio,
  };
};
