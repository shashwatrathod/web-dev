import React from "react";
import PostItem from "./post-item";
import posts from "./posts.json";

const PostList = () => {
  return (
    <>
      <ul class="list-group posts">
        {posts.map((post) => (
          <PostItem post={post} />
        ))}
      </ul>
    </>
  );
};

export default PostList;
