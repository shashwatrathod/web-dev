const NavigationSidebar = () => {
  return `
            <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
              <span><i class="fa-brands fa-twitter"></i></span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <span><i class="fa-solid fa-house-chimney"></i></span>
              <span class="d-none d-xl-inline">Home</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action active">
              <span><i class="fa-solid fa-hashtag"></i></span>
              <span class="d-none d-xl-inline">Explore</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <span><i class="fa-solid fa-bell"></i></span>
              <span class="d-none d-xl-inline">Notifications</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <span><i class="fa-solid fa-envelope"></i></span>
              <span class="d-none d-xl-inline">Messages</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <span><i class="fa-solid fa-bookmark"></i></span>
              <span class="d-none d-xl-inline">Bookmarks</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <span><i class="fa-solid fa-list"></i></span>
              <span class="d-none d-xl-inline">Lists</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <span><i class="fa-solid fa-user"></i></span>
              <span class="d-none d-xl-inline">Profile</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action more-btn">
              <span class="fa-stack"
                ><i class="fa-solid fa-stack-1x fa-inverse fa-circle"></i>
                <i class="fa-solid fa-stack-1x fa-ellipsis"></i
              ></span>
              <span class="d-none d-xl-inline">More</span>
            </a>
          </div>
          <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
          </div>
    `;
};
export default NavigationSidebar;
