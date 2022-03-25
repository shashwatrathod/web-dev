const profileData = {
  firstName: "Jose",
  lastName: "Annunziato",
  handle: "jannunzi",
  profilePicture: "../../images/react.png",
  bannerPicture: "../../images/spacex.jpg",
  bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
  website: "youtube.com/webdevtv",
  location: "Boston, MA",
  dateOfBirth: "7/7/1968",
  dateJoined: "4/2009",
  followingCount: 312,
  followersCount: 180,
};

const profileReducer = (state = profileData, action) => {
  switch (action.type) {
    case "edit-profile":
      const { firstName, lastName, bio } = action;
      return { ...state, firstName, lastName, bio };
    default:
      return state;
  }
};

export default profileReducer;
