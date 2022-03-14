import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
  $("#wd-explore").append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar("Explore")}
        </div>
        <div class="col-xl-6 col-lg-7 col-10 d-flex flex-column gap-1">
            ${ExploreComponent()}
        </div>
        <div class="col-xxl-3 col-lg-4 d-none d-lg-block">
            ${WhoToFollowList()}
        </div>
    `);
})($);
