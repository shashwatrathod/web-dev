const data = [
  {
    _id: "123",
    do: "Accelerate the world's transition to sustainable energy",
    done: false,
  },
  {
    _id: "234",
    do: "Reduce space transportation costs to become a spacefaring civilization",
    done: false,
  },
];

const todosReducer = (state = data, action) => {
  switch (action.type) {
    case "create-todo":
      return [...state, action.todo];
    default:
      return state;
  }
};

export default todosReducer;
