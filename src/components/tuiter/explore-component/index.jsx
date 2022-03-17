import React from "react";
import PostSummaryList from "../post-summary-list";
import "./explore-component.css";
import navItems from "./navItems.json";

const ExploreComponent = () => {
  return (
    <>
      <div className="row d-flex align-items-center">
        <div className="col-11 search-parent">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            type="text"
            className="form-control rounded-pill search-bar"
            placeholder="Search Tuiter"
            aria-label="search"
          />
        </div>
        <div className="col-1">
          <i className="fa-solid fa-gear fs-4"></i>
        </div>
      </div>
      <ul className="nav nav-tabs">
        {navItems.map((item) => (
          <>
            <li className="nav-item">
              <a
                href={item.link}
                className={`nav-link ${item.active ? `active` : ``}`}
              >
                {item.title}
              </a>
            </li>
          </>
        ))}
      </ul>
      <div>
        <div className="explore-banner-container">
          <img
            src="../../images/spacex.jpg"
            alt="SpaceX"
            className="img-fluid"
          />
          <div className="explore-banner-title fs-2 fw-bold">
            SpaceX's Starship
          </div>
        </div>
        <PostSummaryList />
      </div>
    </>
  );
};
export default ExploreComponent;
