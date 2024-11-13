/* Media Queries
-------------------------------------------------- */

/* Animations
-------------------------------------------------- */
let icon = document.querySelector("ion-icon");
if (icon) {
  icon.onclick = function () {
    icon.classList.toggle("active");
  };
} else {
  console.warn("Icon element not found");
}

// Generate 37 tulip icons dynamically
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  const tulipContainer = document.getElementById("tulip-container");
  if (tulipContainer) {
    console.log("Tulip container found");
    const reasons = [
      "You always know how to make me smile. You gave me this smile that nobody else could. I smile that I could love myself more. Thank you so much <3",
      "Your kindness and generosity inspire me.",
      "You are my best friend and confidant.",
      "You have a heart of gold.",
      "You support me in everything I do.",
      "You make every moment special.",
      "You are incredibly thoughtful and caring.",
      "You have a beautiful soul.",
      "You are my rock and my safe haven.",
      "You make me a better person.",
      "You are always there for me.",
      "You have an amazing sense of humor.",
      "You are my partner in crime.",
      "You are my biggest cheerleader.",
      "You are my soulmate.",
      "You are my everything.",
      "You make me feel loved and cherished.",
      "You are my sunshine on a cloudy day.",
      "You are my adventure buddy.",
      "You are my home.",
      "You are my dream come true.",
      "You are my forever love.",
      "You are my heart and soul.",
      "You are my reason for everything.",
      "You are my greatest blessing.",
      "You are my one and only.",
      "You are my happily ever after.",
      "You are my love and my life.",
      "You are my everything and more.",
      "You are my heart's desire.",
      "You are my perfect match.",
      "You are my better half.",
      "You are my true love.",
      "You are my best friend and lover.",
      "You are my world.",
      "You are my heart's delight.",
      "You are my one true love.",
    ];

    for (let i = 0; i < 37; i++) {
      const tulipIcon = document.createElement("div");
      tulipIcon.className = "tulip-icon";
      tulipIcon.setAttribute("data-toggle", "modal");
      tulipIcon.setAttribute("data-target", "#tulipModal");
      tulipIcon.setAttribute("data-title", `Tulip Reason ${i + 1}`);
      tulipIcon.setAttribute(
        "data-bg-portrait",
        `url('public/assets/img/Portrait/Modal/Modal-${i + 1}.png')`
      );
      tulipIcon.setAttribute(
        "data-bg-landscape",
        `url('public/assets/img/Landscape/Modal/Modal-${i + 1}.png')`
      );
      tulipIcon.setAttribute("data-text", reasons[i]);
      tulipIcon.innerHTML = `
        <svg
          id="heart-svg"
          viewBox="467 392 58 57"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Group"
            fill="none"
            fill-rule="evenodd"
            transform="translate(467 392)"
          >
            <path
              d="M29.5 29.5c-.189-.39-12.681-26.01-34.32-7.77C-35.043 53.566 28.887 96.949 29.496 97.363c.612-.414 64.539-43.8 34.32-75.639-21.642-18.24-34.131 7.38-34.32 7.77z"
              id="heart"
              stroke="#fff" /* White outline */
              fill="none"
              stroke-width="4" /* Thicker outline */
            />
            <circle
              id="main-circ"
              fill="#E2264D"
              opacity="0"
              cx="29"
              cy="29.65"
              r="3"
            />
            <g id="heartgroup7" opacity="0" transform="translate(-10 120)">
              <circle id="heart1" fill="#9CD8C3" cx="2" cy="6" r="6" />
              <circle id="heart2" fill="#8CE8C3" cx="5" cy="2" r="6" />
            </g>
            <g id="heartgroup6" opacity="0" transform="translate(-40 50)">
              <circle id="heart1" fill="#CC8EF5" cx="2" cy="7" r="6" />
              <circle id="heart2" fill="#91D2FA" cx="3" cy="2" r="6" />
            </g>
            <g id="heartgroup3" opacity="0" transform="translate(-50 0)">
              <circle id="heart2" fill="#9CD8C3" cx="2" cy="7" r="6" />
              <circle id="heart1" fill="#8CE8C3" cx="4" cy="2" r="6" />
            </g>
            <g id="heartgroup2" opacity="0" transform="translate(80 0)">
              <circle id="heart2" fill="#CC8EF5" cx="5" cy="6" r="6" />
              <circle id="heart1" fill="#CC8EF5" cx="2" cy="2" r="6" />
            </g>
            <g id="heartgroup5" opacity="0" transform="translate(115 50)">
              <circle id="heart1" fill="#91D2FA" cx="6" cy="5" r="6" />
              <circle id="heart2" fill="#91D2FA" cx="2" cy="2" r="6" />
            </g>
            <g id="heartgroup4" opacity="0" transform="translate(60 110)">
              <circle id="heart1" fill="#F48EA7" cx="6" cy="5" r="6" />
              <circle id="heart2" fill="#F48EA7" cx="2" cy="2" r="6" />
            </g>
            <g id="heartgroup1" opacity="0" transform="translate(24 -20)">
              <circle id="heart1" fill="#9FC7FA" cx="2.5" cy="3" r="8" />
              <circle id="heart2" fill="#9FC7FA" cx="7.5" cy="2" r="8" />
            </g>
          </g>
        </svg>
      `;
      tulipContainer.appendChild(tulipIcon);
      console.log(`Tulip icon ${i + 1} added`);
    }

    // Show scroll hint if scrollbar is necessary
    const scrollHint = document.querySelector(".scroll-hint");
    const checkScrollHint = () => {
      if (tulipContainer.scrollHeight > tulipContainer.clientHeight) {
        scrollHint.style.display = "block";
      } else {
        scrollHint.style.display = "none";
      }
    };

    // Check scroll hint on load and on window resize
    checkScrollHint();
    window.addEventListener("resize", checkScrollHint);

    // Function to update modal background and aspect ratio
    const updateModalBackground = (tulipIcon) => {
      const modalContent = document.querySelector(".modal-content");
      const bgPortrait = tulipIcon.getAttribute("data-bg-portrait");
      const bgLandscape = tulipIcon.getAttribute("data-bg-landscape");
      const isLandscape = window.innerWidth > window.innerHeight;
      modalContent.style.backgroundImage = isLandscape
        ? bgLandscape
        : bgPortrait;
      modalContent.style.aspectRatio = isLandscape ? "4 / 3" : "3 / 4";
    };

    // Add event listener to update modal title and background
    tulipContainer.addEventListener("click", function (event) {
      if (event.target.classList.contains("tulip-icon")) {
        const tulipIcon = event.target;
        const title = tulipIcon.getAttribute("data-title");
        const text = tulipIcon.getAttribute("data-text");
        document.getElementById("tulipModalLabel").textContent = title;
        const modalBody = document.querySelector(".modal-body");
        modalBody.innerHTML = `<div class="modal-text fs-6 fs-sm-5 fs-md-4 fs-lg-3">${text}</div>`;
        updateModalBackground(tulipIcon);
      }
    });

    // Update modal background on orientation change or resize
    const handleResize = () => {
      const modal = document.getElementById("tulipModal");
      if (modal.classList.contains("show")) {
        const activeTulipIcon = document.querySelector(
          ".tulip-icon[data-toggle='modal'].active"
        );
        if (activeTulipIcon) {
          updateModalBackground(activeTulipIcon);
        }
      }
    };

    window.addEventListener("orientationchange", handleResize);
    window.addEventListener("resize", handleResize);
  } else {
    console.error("Tulip container not found");
  }
});

/* Call Functions
-------------------------------------------------- */
