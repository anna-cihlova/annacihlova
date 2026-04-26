import { aiBlogs } from "./aiBlogs.js";

const INITIAL_VISIBLE_COUNT = 6;
const DESCRIPTION_LIMIT = 200;

const truncateText = (text, maxLength) => {
  if (!text || text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trimEnd()}...`;
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("ai-blog-container");
  const loadMoreButton = document.getElementById("ai-blog-load-more");

  if (!container || !loadMoreButton) {
    return;
  }

  let visibleCount = Math.min(INITIAL_VISIBLE_COUNT, aiBlogs.length);

  const renderCards = () => {
    container.innerHTML = aiBlogs
      .slice(0, visibleCount)
      .map(
        (blog) => `
          <a
            href="${blog.href}"
            class="ai-blog-card"
            data-aos="fade-up"
            data-aos-offset="120"
            data-aos-duration="1000"
          >
            <img
              src="${blog.image}"
              alt="${blog.alt || blog.title}"
              class="ai-blog-card__image"
              width="720"
              height="420"
              loading="lazy"
              decoding="async"
            />
            <div class="ai-blog-card__body">
              <h3>${blog.title}</h3>
              <p>${truncateText(blog.description, DESCRIPTION_LIMIT)}</p>
              <ul class="project-skills">
                ${blog.tools
                  .map((tool) => `<li class="skill-box">${tool}</li>`)
                  .join("")}
              </ul>
            </div>
          </a>
        `
      )
      .join("");

    loadMoreButton.hidden = visibleCount >= aiBlogs.length;

    if (window.AOS && typeof window.AOS.refresh === "function") {
      window.AOS.refresh();
    }
  };

  loadMoreButton.addEventListener("click", () => {
    visibleCount = Math.min(visibleCount + INITIAL_VISIBLE_COUNT, aiBlogs.length);
    renderCards();
  });

  renderCards();
});
