import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
  return (
    <>
      <div className="list-group">
        {posts.map((post) => (
          <PostSummaryItem post={post} />
        ))}
      </div>
    </>
  );
};

export default PostSummaryList;
