import React from "react";
import "./tuit-list-item-attachment.css";

const TuitListItemAttachment = ({ tuit }) => {
  return (
    <>
      {tuit.attachments && tuit.attachments.image && (
        <img
          src={tuit.attachments.image}
          className="mt-2 wd-border-radius-20px"
          style={{ width: "100%" }}
          alt={tuit.title}
        />
      )}
      {tuit.attachments && tuit.attachments.video && (
        <iframe
          width="100%"
          height="350px"
          className="mt-2 wd-border-radius-20px"
          style={{ width: "100%" }}
          src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
};

export default TuitListItemAttachment;
