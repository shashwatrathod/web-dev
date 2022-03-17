import React from "react";
import ExploreComponent from "./explore-component";
import NavigationSidebar from "./navigation-sidebar";
import PostSummaryList from "./post-summary-list";
import WhoToFollowList from "./who-to-follow-list";

const Tuiter = () => {
  return (
    <>
      <div className="container row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="Home" />
        </div>
        <div class="col-xl-6 col-lg-7 col-10 d-flex flex-column gap-1">
          <ExploreComponent />
        </div>
        <div class="col-xxl-4 col-lg-4 d-none d-lg-block">
          <WhoToFollowList />
        </div>
      </div>
    </>
  );
};

export default Tuiter;
