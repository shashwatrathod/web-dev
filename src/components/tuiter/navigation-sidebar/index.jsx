import React from "react";
import navItems from "./navItems.json";
import "./nav-sidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const { active } = useSelector((state) => state.navigation);

  return (
    <>
      <div className="list-group">
        <Link to="#" className="list-group-item list-group-item-action">
          <span>
            <i className="fa-brands fa-twitter"></i>
          </span>
        </Link>
        {navItems.map((item) => (
          <>
            <Link
              to={item.link}
              className={`list-group-item list-group-item-action ${
                item.title === active ? "active" : ""
              }`}
            >
              <span className={item.icons.length > 1 ? "fa-stack" : ""}>
                {item.icons.map((icon) => (
                  <i className={icon}></i>
                ))}
              </span>
              <span className="d-none d-xl-inline">{item.title}</span>
            </Link>
          </>
        ))}
        <Link
          to="#"
          className={`list-group-item list-group-item-action ${
            "More" === active ? "active" : ""
          }`}
        >
          <span className="fa-stack">
            <i className="fa-solid fa-stack-1x fa-inverse fa-circle"></i>
            <i className="fa-solid fa-stack-1x fa-ellipsis"></i>
          </span>
          <span className="d-none d-xl-inline">More</span>
        </Link>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">
          Tweet
        </a>
      </div>
    </>
  );
};
export default NavigationSidebar;
