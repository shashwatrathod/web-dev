const initialState = {
  active: "Home",
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "change-active":
      const { active } = action;
      return { ...state, active };
    default:
      return state;
  }
};

export default navigationReducer;
