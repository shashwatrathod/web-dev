import axios from "axios";
const TUITS_API = `${process.env.REACT_APP_MONGO_API_BASE}/api/tuits`;

console.log(TUITS_API);

export const findAllTuits = async () => {
  const response = await axios.get(TUITS_API);
  const tuits = response.data;
  return tuits;
};

export const deleteTuit = async (tuit) => {
  const response = await axios.delete(`${TUITS_API}/${tuit._id}`);
  return response.data;
};

export const createTuit = async (tuit) => {
  const response = await axios.post(TUITS_API, tuit);
  return response.data;
};

export const updateTuit = async (tuit) => {
  const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
  return response.data;
};