import React from "react";
import { useSelector } from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
  return (
    <>
      <div class="list-group">
        <div class="list-group-item fw-bold">Who to follow</div>
        {who.map((profile) => (
          <WhoToFollowListItem who={profile} />
        ))}
      </div>
    </>
  );
};

export default WhoToFollowList;
