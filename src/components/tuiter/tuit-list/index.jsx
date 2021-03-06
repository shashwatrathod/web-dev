import React from "react";
import { useSelector } from "react-redux";
import TuitListItem from "./tuit-list-item";

const TuitList = () => {
  const tuits = useSelector((state) => state.tuits);

  return (
    <ul class="list-group wd-tuits">
      {tuits.map ? (
        tuits.map((tuit) => (
          <>
            <TuitListItem key={tuit._id} tuit={tuit} />
          </>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
};

export default TuitList;
