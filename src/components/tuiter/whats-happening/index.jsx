import React, { useState } from "react";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");

  const dispatch = useDispatch();

  const tuitClickHandler = () => {
    dispatch({
      type: "create-tuit",
      tuit: whatsHappening,
    });

    setWhatsHappening("");
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
        <div className="align-self-start">
          <img
            src="../../images/react.png"
            alt=""
            className="rounded-circle align-self-start wd-avatar"
          />
        </div>
        <div className="d-flex flex-column gap-1 w-100">
          <textarea
            value={whatsHappening}
            onChange={(event) => setWhatsHappening(event.target.value)}
            placeholder="What's happening?"
            className="form-control"
          ></textarea>
          <div className="d-flex justify-content-between px-1">
            <div className="d-flex gap-3 align-self-center">
              <i class="fa-regular fa-image text-primary"></i>
              <i class="fa-solid fa-chart-line text-primary"></i>
              <i class="fa-regular fa-face-grin text-primary"></i>
              <i class="fa-regular fa-calendar text-primary"></i>
            </div>
            <button
              onClick={tuitClickHandler}
              className="btn btn-primary rounded-pill"
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhatsHappening;
