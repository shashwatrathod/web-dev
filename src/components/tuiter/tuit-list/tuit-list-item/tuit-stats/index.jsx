import React from "react";
import { useDispatch } from "react-redux";
import { updateTuit } from "../../../actions/tuits-action";
import "./tuit-stats.css";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  const tuitLikeHandler = () => {
    let updatedTuit = {};

    // Tried to preserve the previous implementation of "like tuits".
    if (tuit?.liked) {
      updatedTuit = {
        ...tuit,
        liked: false,
        stats: {
          ...tuit.stats,
          likes: tuit.stats.likes - 1,
        },
      };
    } else {
      updatedTuit = {
        ...tuit,
        liked: true,
        stats: {
          ...tuit.stats,
          likes: tuit.stats.likes + 1,
        },
      };
    }
    updateTuit(dispatch, updatedTuit);
  };

  const tuitDislikeHandler = () => {
    let updatedTuit = {
      ...tuit,
      dislikes: (tuit.dislikes || 0) + 1,
    };
    updateTuit(dispatch, updatedTuit);
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
        <div className="wd-cursor-pointer" onClick={() => tuitDislikeHandler()}>
          <i class="fa-regular fa-thumbs-down"></i>
          <span className="ms-2">{tuit?.dislikes || 0}</span>
        </div>
        <div className="wd-cursor-pointer">
          <i className="fas fa-external-link-alt"></i>
        </div>
      </div>
    </>
  );
};

export default TuitStats;
