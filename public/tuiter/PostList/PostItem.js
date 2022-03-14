const PostItem = (post) =>
  `
    <li
  class="list-group-item d-flex justify-content-between align-items-center"
    >
  <div class="wd-bookmark wd-bottom-border">
    <img src="${post.avatarImage}" alt="" class="rounded-circle avatar" />
    <div class="wd-bookmark-content">
      <div class="d-flex flex-row justify-content-between w-100">
        <div class="fw-bold d-flex align-items-center">
          ${post.userName}
          ${
            post.verified
              ? `
          <i class="fa-solid fa-circle-check"></i>`
              : ``
          }
          <div class="text-muted ms-1">@${post.userName}</div>
          <div class="text-muted ms-1">${post.time}</div>
        </div>
        <div>
          <i class="fas fa-ellipsis-h text-muted"></i>
        </div>
      </div>
      <div class="pt-1">
        ${post.content}
      </div>
      ${
        post.preview &&
        `
        <a href="${post.preview.link ? post.preview.link : "#"}">
          <div class="card my-3">
            <img class="card-img-top img-fluid ${
              !(post.preview.title || post.preview.description) &&
              `bottom-rounded`
            }" src="${post.preview.image}" alt="${post.preview.title}">
            ${
              post.preview.title || post.preview.description
                ? `
            <div class="card-body">
              <h6 class="card-title">${post.preview.title}</h6>
              <p class="card-text mb-1">${post.preview.description}</p>
              <p class="card-text d-flex align-items-center">
              <i class="fa fa-link"></i> <span class="ms-2">${post.preview.link}</span></p>
            </div>
            `
                : ``
            }
          </div>
      </a>
      `
      }
      <div class="mt-2 d-flex justify-content-between mx-0 mx-md-2">

      </div>
    </div>
  </div>
</li>`;
export default PostItem;
