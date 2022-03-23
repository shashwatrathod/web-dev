import React from "react";
import { useDispatch } from "react-redux";
import "./tuit-stats.css";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  const tuitLikeHandler = () => {
    dispatch({
      type: "like-tuit",
      tuit,
    });
  };
  return (
    <>
      <div className="d-flex justify-content-between px-2 wd-text-muted">
        <div className="wd-cursor-pointer">
          <i className="far fa-comment"></i>
          <span className="ms-2">{tuit.stats.comments}</span>
        </div>
        <div className="wd-cursor-pointer">
          <i class="fas fa-retweet"></i>
          <span className="ms-2">{tuit.stats.retuits}</span>
        </div>
        <div className="wd-cursor-pointer" onClick={() => tuitLikeHandler()}>
          {tuit.liked ? (
            <i className="fas fa-heart wd-tuit-liked"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
          <span className="ms-2">{tuit.stats.likes}</span>
        </div>
        <div className="wd-cursor-pointer">
          <i className="fas fa-external-link-alt"></i>
        </div>
      </div>
    </>
  );
};

export default TuitStats;
