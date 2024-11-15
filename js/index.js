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
  let pictureSet = "Month"; // Default picture set

  const tulipContainer = document.getElementById("tulip-container");
  if (tulipContainer) {
    console.log("Tulip container found");
    const reasons = [
      "You are my best friend and lover, my everything and more.",
      "You care for me with such tenderness, your every word or touch is healing.",
      "You are incredibly hard working and resiliant, it makes me so proud.",
      "You are intelligent and though-provoking, it helps me grow.",
      "You are passionate about things you love and I love listening to them.",
      "You are a nerd just like me. We both can just be nerds together",
      "You have many interests and hobbies I love to get to know and support.",
      "You have a beautiful soul that needs to write to breath sometimes.",
      "You have such a beautiful smile.",
      "You truly make me a better person.",
      "You are introverted like me, but you are also extroverted when you need to be.",
      "You are a real partner, a teammate in life.",
      "You gave me my smile that I now love.",
      "You are my biggest cheerleader, you motivate me to live life to the fullest.",
      "You give me confidence in myself",
      "Your contagious smile, beautiful when you are happy.",
      "Your big pretty eyes, that I could stare into all day.",
      "The shape of you, perfect in my eyes.",
      "Your compliments and adorations with my pictures.",
      "Your creativity and ingenuity, I'm always amazed.",
      "Sharing everything with you always felt right.",
      "Your sniffing attacks, baby voice, squishes that make me laugh so much",
      "Your morning cuddles that are so warm and comforting.",
      "You crochet the cutest, lovely things.",
      "You trust me fully, and I trust you fully.",
      "We have nothing to be embarrassed about, we are just us.",
      "Your squishy cute cute nose, boop.",
      "Your morning messy hair, it's perfect.",
      "You spoil me, in more ways than you might realize.",
      "You somehow like chores I don't like, and vice versa.",
      "You love all my cooking, and you're always so excited for it.",
      "You have wonderful friends, making an awesome social life and plenty days to share.",
      "You share everything with me. I'm never left out.",
      "You have wonderful style. I love to try and match with you.",
      "You have grown so much on this journey with me, as well as I with you",
      "Hanging out with you is the best part of my day",
      "You stayed, even when it was hardest. You remained persistent and patient.",
    ];

    for (let i = 0; i < 37; i++) {
      const tulipIcon = document.createElement("div");
      tulipIcon.className = "tulip-icon";
      tulipIcon.setAttribute("data-bs-toggle", "modal");
      tulipIcon.setAttribute("data-bs-target", "#tulipModal");
      tulipIcon.setAttribute("data-title", `Tulip Reason ${i + 1}`);
      tulipIcon.setAttribute(
        "data-bg-portrait",
        `url('public/assets/img/Portrait/Modal/${pictureSet}/Modal-${
          i + 1
        }.png')`
      );
      tulipIcon.setAttribute(
        "data-bg-landscape",
        `url('public/assets/img/Landscape/Modal/${pictureSet}/Modal-${
          i + 1
        }.png')`
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
      const tulipIcon = event.target.closest(".tulip-icon");
      if (tulipIcon) {
        const title = tulipIcon.getAttribute("data-title");
        const text = tulipIcon.getAttribute("data-text");
        document.getElementById("tulipModalLabel").textContent = title;
        const modalBody = document.querySelector(".modal-body");
        modalBody.innerHTML = `<div class="modal-text fs-6 fs-sm-5 fs-md-4 fs-lg-3">${text}</div>`;
        updateModalBackground(tulipIcon);
        tulipIcon.classList.add("active"); // Mark the clicked tulip icon as active
      }
    });

    // Update modal background on orientation change or resize
    const handleResize = () => {
      const modal = document.getElementById("tulipModal");
      if (modal.classList.contains("show")) {
        const activeTulipIcon = document.querySelector(".tulip-icon.active");
        if (activeTulipIcon) {
          updateModalBackground(activeTulipIcon);
        }
      }
    };

    window.addEventListener("orientationchange", handleResize);
    window.addEventListener("resize", handleResize);

    // Remove active class when modal is hidden
    $("#tulipModal").on("hidden.bs.modal", function () {
      const activeTulipIcon = document.querySelector(".tulip-icon.active");
      if (activeTulipIcon) {
        activeTulipIcon.classList.remove("active");
      }
    });

    // Remove or comment out the old dropdown event listeners
    /*
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    dropdownItems.forEach((item) => {
      item.addEventListener("click", async function () {
        // ... old code ...
      });
    });
    */
  } else {
    console.error("Tulip container not found");
  }
});

/* Call Functions
-------------------------------------------------- */
