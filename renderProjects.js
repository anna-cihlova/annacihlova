import { projects } from "./projects.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");

  projects.forEach((project) => {
    const projectHTML = `
        <${
          !project.href ? "div" : `a href="${project.href}" target="_blank"`
        } class="project mdc-layout-grid__cell mdc-layout-grid__cell--span-12"
          data-aos="fade-left"
          data-aos-offset="120"
          data-aos-duration="1200"
        >
         <picture class="project-poster mdc-layout-grid__cell">
          ${
            project.video
              ? `
                <video width="180" autoplay loop muted playsinline preload="metadata" poster="assets/case-study/placeholder.webp">
                  <source src="assets/case-study/${project.video}" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              `
              : project.image
              ? `
                  <img
                    src="assets/case-study/${project.image}"
                    alt="${project.alt || "Project preview"}"
                    width="180"
                    decoding="async"
                    loading="lazy"
                    sizes="(max-width: 200px) 100vw, 180px"
                  />
                `
              : `
                  <img
                    src="assets/case-study/placeholder.webp"
                    alt="${project.alt || "Placeholder preview"}"
                    width="180"
                    decoding="async"
                    loading="lazy"
                    sizes="(max-width: 200px) 100vw, 180px"
                  />
                `
          }
        </picture>

         <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">
            <h3>${project?.title}</h3>
             ${
               !project.in_production
                 ? `<h4>[⊘ No longer in production]</h4>`
                 : ""
             }
            <p>${project?.description}</p>
            <ul class="project-skills">
            ${project?.tools
              .map((tool) => `<li class="skill-box">${tool}</li>`)
              .join("")}
              </ul>
          </div>
        </${!project.href ? "div" : "a"}>
    `;
    container.insertAdjacentHTML("beforeend", projectHTML);
  });
});
