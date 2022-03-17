import React from "react";
import NavigationSidebar from "./navigation-sidebar";

const Tuiter = () => {
  return (
    <>
      <div className="container mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="Home" />
        </div>
      </div>
    </>
  );
};

export default Tuiter;
