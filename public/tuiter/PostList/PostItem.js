import PostItemPreview from "./PostItemPreview.js";

const PostItem = (post) =>
  `
  <li class="list-group-item d-flex justify-content-between align-items-center gap-2">
        <div class="align-self-start">
          <img
            src=${post.avatarImage}
            alt=""
            class="rounded-circle align-self-start wd-avatar"
          />
        </div>
        <div class="d-flex flex-column gap-1 w-100">
          <div class="d-flex justify-content-between">
            <div class="d-flex gap-1">
              <span class="fw-bold">${post.name}</span>
              ${
                post.verified
                  ? `
                  <span>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>
                `
                  : ``
              }
              <div class="text-muted ms-1">@${post.userName}</div>
              <div class="text-muted ms-1">- ${post.time}</div>
            </div>
            <div>
              <i class="fas fa-ellipsis-h text-muted"></i>
            </div>
          </div>
          <div>${post.content}</div>
          <div>
            ${PostItemPreview(post.preview)}
          </div>
          <div class="d-flex justify-content-between px-2 wd-text-muted">
            <div>
              <i class="far fa-comment"></i>
              <span class="ms-2">${post.comments}</span>
            </div>
            <div>
              <i class="fas fa-retweet"></i>
              <span class="ms-2">${post.retuits}</span>
            </div>
            <div>
              <i class="far fa-heart"></i>
              <span class="ms-2">${post.likes}</span>
            </div>
            <div>
              <i class="fas fa-upload pe-3"></i>
            </div>
          </div>
        </div>
      </li>
  `;
export default PostItem;
