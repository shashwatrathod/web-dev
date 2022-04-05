import * as service from "../services/tuit-service";

export const CREATE_TUIT = "CREATE_TUIT";
export const FIND_ALL_TUITS = "FIND_ALL_TUITS";
export const UPDATE_TUIT = "UPDATE_TUIT";
export const DELETE_TUIT = "DELETE_TUIT";

export const createTuit = async (dispatch, tuit) => {
  let newTuit = {
    tuit,
    postedBy: {
      username: "ReactJS",
    },
    stats: {
      retuits: 111,
      likes: 222,
      comments: 333,
    },
    handle: "ReactJS",
    time: "Now",
    "logo-image": "../../../images/react.png",
    "avatar-image": "../../../images/react.png",
  };
  let createdTuit = await service.createTuit(newTuit);
  dispatch({
    type: CREATE_TUIT,
    tuit: createdTuit,
  });
};

export const findAllTuits = async (dispatch) => {
  const tuits = await service.findAllTuits();
  dispatch({
    type: FIND_ALL_TUITS,
    tuits,
  });
};

export const deleteTuit = async (dispatch, tuit) => {
  await service.deleteTuit(tuit);
  dispatch({
    type: DELETE_TUIT,
    tuit,
  });
};

export const likeTuit = (tuit) => ({
  type: "like-tuit",
  tuit,
});

export const updateTuit = async (dispatch, tuit) => {
  const status = await service.updateTuit(tuit);
  dispatch({
    type: UPDATE_TUIT,
    tuit,
  });
};
