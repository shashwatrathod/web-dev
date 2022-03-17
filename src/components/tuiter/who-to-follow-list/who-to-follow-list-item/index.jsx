import React from "react";
import "./who-to-follow-list-item.css";

const WhoToFollowListItem = ({
  who = {
    avatarIcon: "../../images/relativityspace.jpg",
    userName: "Relativity Space",
    handle: "relativityspace",
  },
}) => {
  return (
    <>
      <div className="list-group-item d-flex justify-content-between align-items-center">
        <div className="d-flex flex-row align-items-center gap-1">
          <img
            src={who.avatarIcon}
            alt={who.userName}
            className="rounded-circle follow-avatar"
          />
          <div>
            <div className="fw-bold text-wrap">
              {who.userName}
              <i className="fa-solid fa-circle-check"></i>
            </div>
            @{who.handle}
          </div>
        </div>
        <button className="btn btn-primary btn-sm rounded-pill">Follow</button>
      </div>
    </>
  );
};

export default WhoToFollowListItem;
