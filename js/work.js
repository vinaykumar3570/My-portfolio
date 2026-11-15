       const projects = [
      {
        id: 1, title: "TechNova Website", category: "frontend", categoryLabel: "Frontend Development",
        description: "A modern, responsive website for a technology brand with a bold hero, clean sections and smooth interactions.",
        image: "images/projects/project1.png",
        gallery: [], tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        live: "https://example.com", github: "https://github.com/", year: "2026"
      },
      {
        id: 2, title: "Education Landing Page", category: "frontend", categoryLabel: "Frontend Development",
        description: "A clean education landing page designed to make courses, learning paths and key calls-to-action easy to explore.",
        image: "images/projects/project2.png",
        gallery: [], tags: ["HTML", "CSS", "Bootstrap", "Responsive UI"],
        live: "https://example.com", github: "https://github.com/", year: "2026"
      },
      {
        id: 3, title: "Travel Explorer Landing Page", category: "frontend", categoryLabel: "Frontend Development",
        description: "A travel discovery interface with immersive imagery, destination cards and a responsive layout.",
        image: "images/projects/project3.png",
        gallery: [], tags: ["HTML", "CSS", "JavaScript"],
        live: "https://example.com", github: "https://github.com/", year: "2026"
      },
      {
        id: 4, title: "Gym Website", category: "frontend", categoryLabel: "Frontend Development",
        description: "A travel discovery interface with immersive imagery, destination cards and a responsive layout.",
        image: "images/projects/project4.jpg",
        gallery: [], tags: ["HTML", "CSS", "JavaScript"],
        live: "https://example.com", github: "https://github.com/", year: "2026"
      },
      {
        id: 5, title: "Magazine Covers", category: "graphic", categoryLabel: "Graphic Design",
        description: "A minimal visual identity concept for a contemporary fashion and lifestyle label. Explore the logo and supporting brand applications.",
        image: "images/projects/magazine3.jpg",
        gallery: [
          "images/projects/magazine2.jpg",
          "images/projects/magazine4.jpg",
          "images/projects/magazine6.jpg",
          "images/projects/magazine7.jpg",
          "images/projects/magazine.jpg "
        ], tags: ["Photoshop", "Fashion", "Cover Page"], year: "2026"
      },
      {
        id: 6, title: "Social Media Posts", category: "graphic", categoryLabel: "Graphic Design",
        description: "A collection of campaign graphics and poster explorations built around bold typography, color and strong visual hierarchy.",
        image: "images/projects/airpods.jpg",
        gallery: [
          "images/projects/olay-cream.jpg",
          "images/projects/burger-king.jpg",
          "images/projects/villain-perfume.jpg",
          "images/projects/digital-marketing.jpg",
          "images/projects/gaming-headphone.jpg",
          "images/projects/nike-shoes.jpg",
          "images/projects/web-design.jpg",
          "images/projects/olay-cream.jpg",
        ], tags: ["Poster", "Social Media", "Photoshop", "Illustrator"], year: "2026"
      },
      {
        id: 7, title: "Laddu Packaging", category: "graphic", categoryLabel: "Product & Ad Design",
        description: "A product advertising art direction concept focused on dramatic lighting, a premium mood and clear product storytelling.",
        image: "images/projects/laddu-pack-3d.jpg",
        gallery: [
          "images/projects/laddu-packaging.jpg",
          "images/projects/laddu.jpg"
        ], tags: ["Product Ad", "Photoshop", "Art Direction"], year: "2026"
      },
      {
        id: 8, title: "Face Wash Packaging", category: "graphic", categoryLabel: "Product & Ad Design",
        description: "A product advertising art direction concept focused on dramatic lighting, a premium mood and clear product storytelling.",
        image: "images/projects/face-wash-3d.jpg",
        gallery: [
          "images/projects/face-wash-label.jpg",
          "images/projects/face-wash.png",
          "images/projects/face-wash-packaging.png",
          "images/projects/face-wash-poster.jpg",
        ], tags: ["Product Ad", "Design", "Photoshop"], year: "2026"
      },
      {
        id: 9, title: "Earbuds Packaging", category: "graphic", categoryLabel: "Product & Ad Design",
        description: "A product advertising art direction concept focused on dramatic lighting, a premium mood and clear product storytelling.",
        image: "images/projects/earbuds-packaging-3d.jpg",
        gallery: ["images/projects/earbuds-packaging.jpg"], 
        tags: ["Product Ad", "Design", "Photoshop"], year: "2026"
      },
      // {
      //   id: 10, title: "Event Promo Edit", category: "video", categoryLabel: "Video Editing",
      //   description: "An energetic promotional edit concept for events, launches and social platforms.",
      //   image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
      //   gallery: [], tags: ["Video Editing", "Motion Graphics", "Short-form"],
      //   video: "https://www.youtube.com/embed/ScMzIvxBSi4", year: "2026"
      // }
    ];

    const grid = document.getElementById("projectGrid");
    const emptyState = document.getElementById("emptyState");
    const modalElement = document.getElementById("projectModal");
    const projectModal = new bootstrap.Modal(modalElement);
    let activeProject = null;

    function escapeHTML(value = "") {
      return String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
    }
    function renderProjects(filter = "all") {
      const filtered = projects.filter(p => filter === "all" || p.category === filter);
      grid.innerHTML = filtered.map(p => `
      <div class="col-md-6 col-lg-4 project-item">
        <article class="project-card" tabindex="0" role="button" aria-label="Preview ${escapeHTML(p.title)}" data-project-id="${p.id}">
          <div class="project-image-wrap">
            <img class="project-image" src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)} preview" loading="lazy">
            <div class="image-overlay"></div>
            <span class="preview-hint"><i class="bi bi-arrows-angle-expand me-1"></i>Preview work</span>
          </div>
          <div class="project-body">
            <div class="project-category"><i class="bi bi-circle-fill" style="font-size:.42rem"></i>${escapeHTML(p.categoryLabel)}</div>
            <h3 class="project-title">${escapeHTML(p.title)}</h3>
            <p class="project-desc">${escapeHTML(p.description)}</p>
            <div class="tech-list">${p.tags.slice(0, 4).map(tag => `<span class="tech-chip">${escapeHTML(tag)}</span>`).join("")}</div>
            <div class="card-footer-row">
              <span class="small text-white-50">${p.gallery && p.gallery.length ? `<i class="bi bi-images me-1"></i>${p.gallery.length} gallery images` : p.video ? `<i class="bi bi-play-circle me-1"></i>Video preview` : `<i class="bi bi-window me-1"></i>Website preview`}</span>
              <button class="open-project" type="button" data-project-id="${p.id}">View project <i class="bi bi-arrow-right ms-1"></i></button>
            </div>
          </div>
        </article>
      </div>`).join("");
      emptyState.style.display = filtered.length ? "none" : "block";
      document.getElementById("count-all").textContent = `(${projects.length})`;
    }
    function openProject(id) {
      const p = projects.find(item => item.id === Number(id));
      if (!p) return;
      activeProject = p;
      document.getElementById("modalCategory").textContent = p.categoryLabel;
      document.getElementById("modalTitle").textContent = p.title;
      document.getElementById("modalDescription").textContent = p.description;
      document.getElementById("modalTags").innerHTML = p.tags.map(tag => `<span class="tech-chip">${escapeHTML(tag)}</span>`).join("");
      document.getElementById("modalMeta").textContent = `Project showcase · ${p.year || "2026"}`;
      const modalImage = document.getElementById("modalImage");
      const galleryStrip = document.getElementById("galleryStrip");
      modalImage.src = p.image;
      modalImage.alt = p.title + " preview";
      modalImage.hidden = false;
      galleryStrip.innerHTML = "";
      const images = p.gallery && p.gallery.length ? [p.image, ...p.gallery.filter(src => src !== p.image)] : [];
      galleryStrip.hidden = images.length === 0;
      if (images.length) {
        images.forEach((src, index) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "gallery-thumb" + (index === 0 ? " active" : "");
          button.setAttribute("aria-label", `Show image ${index + 1}`);
          const img = document.createElement("img");
          img.src = src; img.alt = `${p.title} image ${index + 1}`;
          button.appendChild(img);
          button.addEventListener("click", () => {
            modalImage.src = src;
            galleryStrip.querySelectorAll(".gallery-thumb").forEach(el => el.classList.remove("active"));
            button.classList.add("active");
          });
          galleryStrip.appendChild(button);
        });
      }
      const actions = document.getElementById("modalActions");
      actions.innerHTML = "";
      if (p.video) {
        const videoBtn = document.createElement("button");
        videoBtn.className = "btn-blue";
        videoBtn.innerHTML = '<i class="bi bi-play-fill me-2"></i>Play video';
        videoBtn.type = "button";
        videoBtn.addEventListener("click", () => showVideo(p));
        actions.appendChild(videoBtn);
      } else if (p.category === "frontend") {
        if (p.live) actions.appendChild(makeLink(p.live, "Live Preview", "bi-box-arrow-up-right", "btn-blue"));
        if (p.github) actions.appendChild(makeLink(p.github, "GitHub", "bi-github", "btn-outline-blue"));
      } else {
        const galleryNote = document.createElement("span");
        galleryNote.className = "small text-white-50 align-self-center";
        galleryNote.innerHTML = '<i class="bi bi-images me-1"></i>Click a thumbnail to explore the gallery';
        actions.appendChild(galleryNote);
      }
      projectModal.show();
    }
    function makeLink(href, label, icon, className) {
      const a = document.createElement("a");
      a.className = "btn " + className;
      a.href = href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = `<i class="bi ${icon} me-2"></i>${label}`;
      return a;
    }
    function showVideo(p) {
      const modalImage = document.getElementById("modalImage");
      modalImage.hidden = true;
      const oldFrame = document.getElementById("videoFrame");
      if (oldFrame) oldFrame.remove();
      const frame = document.createElement("iframe");
      frame.id = "videoFrame";
      frame.src = p.video + "?autoplay=1";
      frame.title = p.title + " video";
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      frame.allowFullscreen = true;
      frame.style.cssText = "width:100%;aspect-ratio:16/9;border:0;display:block;background:#000";
      modalImage.parentElement.insertBefore(frame, modalImage);
    }
    modalElement.addEventListener("hidden.bs.modal", () => {
      const frame = document.getElementById("videoFrame");
      if (frame) frame.remove();
      document.getElementById("modalImage").hidden = false;
    });
    document.querySelector(".filter-bar").addEventListener("click", event => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;
      document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.toggle("active", btn === button));
      renderProjects(button.dataset.filter);
    });
    grid.addEventListener("click", event => {
      const trigger = event.target.closest("[data-project-id]");
      if (trigger) openProject(trigger.dataset.projectId);
    });
    grid.addEventListener("keydown", event => {
      if ((event.key === "Enter" || event.key === " ") && event.target.matches(".project-card")) {
        event.preventDefault(); openProject(event.target.dataset.projectId);
      }
    });
    renderProjects();