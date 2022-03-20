import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import who from "./who.json";

const WhoToFollowList = () => {
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
