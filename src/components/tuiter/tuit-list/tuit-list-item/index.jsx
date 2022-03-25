import React from "react";
import TuitListItemAttachment from "./tuit-list-item-attachment";
import TuitStats from "./tuit-stats";
import "./tuit-list-item.css";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../../actions/tuits-action";

const TuitListItem = ({ tuit }) => {
  const dispatch = useDispatch();

  const deleteTuitHandler = (tuit) => {
    dispatch(deleteTuit(tuit));
  };

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center gap-2">
        <div className="align-self-start">
          <img
            src={tuit["logo-image"]}
            alt=""
            className="rounded-circle align-self-start wd-avatar"
          />
        </div>
        <div className="d-flex flex-column gap-1 w-100">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-1">
              <span className="fw-bold">{tuit?.postedBy?.username || ""}</span>
              {tuit.verified ? (
                <>
                  <span>
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                </>
              ) : (
                <></>
              )}
              <div className="text-muted ms-1">@{tuit.handle}</div>
              <div className="text-muted ms-1">- {tuit.time}</div>
            </div>
            <div>
              <i
                className="fa fa-remove fa-pull-right wd-cursor-pointer"
                onClick={() => deleteTuitHandler(tuit)}
              ></i>
            </div>
          </div>
          <div>{tuit.tuit}</div>
          <div>
            <TuitListItemAttachment tuit={tuit} />
          </div>
          <TuitStats tuit={tuit} />
        </div>
      </li>
    </>
  );
};

export default TuitListItem;
