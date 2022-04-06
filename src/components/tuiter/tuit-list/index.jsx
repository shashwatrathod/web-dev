import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllTuits } from "../actions/tuits-action";
import TuitListItem from "./tuit-list-item";

const TuitList = () => {
  const tuits = useSelector((state) => state.tuits);

  const dispatch = useDispatch();

  useEffect(() => {
    findAllTuits(dispatch);
  }, [dispatch]);

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
