const PostItemPreview = (preview) => {
  if (!preview) {
    return "";
  }

  return `
        <a
        href="${preview.linkHref || preview.link || "#"}"
        class="wd-post-preview"
      >
        <div class="card wd-post-item-preview-card">
          <img
            class="${`card-img-top img-fluid ${
              (preview.title || preview.description) &&
              `wd-post-item-preview-bottom-flat`
            }`}"
            src=${preview.image}
            alt=${preview.title}
          ></img>
          ${
            preview.title || preview.description
              ? `
              <div class="card-body">
                <h6 class="card-title">${preview.title}</h6>
                <p class="card-text mb-1 wd-text-muted">
                  ${preview.description}
                </p>
                <p class="card-text d-flex align-items-center">
                  <i class="fa fa-link wd-text-muted"></i>${" "}
                  <span class="ms-2 wd-text-muted">
                    ${preview.link || preview.linkHref}
                  </span>
                </p>
              </div>
            `
              : ""
          }
        </div>
      </a>
    `;
};

export default PostItemPreview;
