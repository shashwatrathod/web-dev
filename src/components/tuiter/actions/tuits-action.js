export const createTuit = (tuit) => ({
  type: "create-tuit",
  tuit,
});

export const deleteTuit = (tuit) => ({
  type: "delete-tuit",
  tuit,
});

export const likeTuit = (tuit) => ({
  type: "like-tuit",
  tuit,
});
