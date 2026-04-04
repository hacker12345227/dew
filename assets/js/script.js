const pathLower = window.location.pathname.toLowerCase();
const isSubPage = pathLower.includes("/pages/") || pathLower === "/apv" || pathLower === "/solliciteren" || pathLower.startsWith("/solliciteren/");
const isRulesPage = pathLower.includes("regels.html") || pathLower === "/apv";
const isSolliciterenPage = pathLower.includes("solliciteren.html") || pathLower.includes("staff-sollicitatie.html") || pathLower === "/solliciteren" || pathLower.startsWith("/solliciteren/");
const isHomePage = !isRulesPage && !isSolliciterenPage;
const basePath = isSubPage ? "../" : "";
const homeAnchor = "/";
const donateAnchor = "https://eindhoven.tebex.io/";
const applyAnchor = "/solliciteren";
const logoSrc = basePath + "assets/images/ehlogo.png";
const regelsHref = "/apv";

const navbarMarkup = `
  <section class="promo-bar" aria-label="Promoties">
    <div class="promo-track" aria-hidden="true">
      <div class="promo-items">
        <span class="promo-item">🌙 Ramadan Mubarak!</span>
        <span class="promo-item">⭐ Exclusieve Ramadan Pakketten</span>
        <span class="promo-item">🎁 Speciale Ramadan Rewards</span>
        <span class="promo-item">💫 Community Iftar Events</span>
        <span class="promo-item">🕌 Ramadan Thema Actief</span>
      </div>
      <div class="promo-items" aria-hidden="true">
        <span class="promo-item">🌙 Ramadan Mubarak!</span>
        <span class="promo-item">⭐ Exclusieve Ramadan Pakketten</span>
        <span class="promo-item">🎁 Speciale Ramadan Rewards</span>
        <span class="promo-item">💫 Community Iftar Events</span>
        <span class="promo-item">🕌 Ramadan Thema Actief</span>
      </div>
      <div class="promo-items" aria-hidden="true">
        <span class="promo-item">🌙 Ramadan Mubarak!</span>
        <span class="promo-item">⭐ Exclusieve Ramadan Pakketten</span>
        <span class="promo-item">🎁 Speciale Ramadan Rewards</span>
        <span class="promo-item">💫 Community Iftar Events</span>
        <span class="promo-item">🕌 Ramadan Thema Actief</span>
      </div>
      <div class="promo-items" aria-hidden="true">
        <span class="promo-comeback">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          EINDHOVEN IS TERUG!
        </span>
        <span class="promo-sale">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            <path d="M6 6h15l-1.5 7.5H8"/>
          </svg>
          OPENINGSKORTING!
        </span>
        <span class="promo-rewards">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="8" width="18" height="13" rx="2"/>
            <path d="M12 8V4"/>
            <path d="M3 11h18"/>
            <path d="M12 8c-2.5 0-4-2-4-4h8c0 2-1.5 4-4 4z"/>
          </svg>
          REWARDS VOOR DONATEURS!
        </span>
        <span class="promo-code">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
            <path d="M7 15h.01"/>
            <path d="M11 15h2"/>
          </svg>
          GEBRUIK CODE: OPENING25
        </span>
      </div>
    </div>
  </section>
  <header class="site-header">
    <nav class="navbar">
      <a class="logo" href="${homeAnchor}">
        <span class="logo-mark">
          <img src="${logoSrc}" alt="Eindhoven Roleplay" loading="eager" decoding="async" />
        </span>
        <span class="logo-text">Eindhoven Roleplay</span>
      </a>
      <div class="nav-links">
        <a class="${isHomePage ? "active" : ""}" href="${homeAnchor}">Home</a>
        <a class="${isRulesPage ? "active" : ""}" href="${regelsHref}">APV</a>
        <a href="https://eindhoven.tebex.io/" target="_blank" rel="noreferrer">Doneren</a>
        <a class="${isSolliciterenPage ? "active" : ""}" href="${applyAnchor}">Solliciteren</a>
        <a class="nav-link-discord" href="https://discord.gg/eindhovenrp" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.73 4.87A18.7 18.7 0 0 0 15.1 3.5a13 13 0 0 0-.64 1.3 17.5 17.5 0 0 0-4.92 0c-.19-.45-.41-.88-.64-1.3A18.6 18.6 0 0 0 4.27 4.87C1.6 8.9.88 12.83 1.23 16.7a18.6 18.6 0 0 0 5.53 2.8c.45-.62.85-1.27 1.2-1.95a12 12 0 0 1-1.9-.93c.16-.12.32-.24.47-.36a13.7 13.7 0 0 0 11 0c.16.12.32.24.47.36-.62.37-1.26.69-1.9.93.35.68.75 1.33 1.2 1.95a18.6 18.6 0 0 0 5.53-2.8c.48-4.48-.7-8.38-3.13-11.83ZM8.7 14.6c-1.04 0-1.9-.96-1.9-2.12 0-1.16.83-2.12 1.9-2.12 1.06 0 1.91.96 1.9 2.12 0 1.16-.84 2.12-1.9 2.12Zm6.6 0c-1.04 0-1.9-.96-1.9-2.12 0-1.16.83-2.12 1.9-2.12 1.06 0 1.91.96 1.9 2.12 0 1.16-.84 2.12-1.9 2.12Z"/></svg>
          <span>Join Discord</span>
        </a>
      </div>
      <div class="nav-actions">
        <a
          class="nav-discord"
          href="https://discord.gg/eindhovenrp"
          target="_blank"
          rel="noreferrer"
          aria-label="Join onze Discord"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M19.73 4.87A18.7 18.7 0 0 0 15.1 3.5a13 13 0 0 0-.64 1.3 17.5 17.5 0 0 0-4.92 0c-.19-.45-.41-.88-.64-1.3A18.6 18.6 0 0 0 4.27 4.87C1.6 8.9.88 12.83 1.23 16.7a18.6 18.6 0 0 0 5.53 2.8c.45-.62.85-1.27 1.2-1.95a12 12 0 0 1-1.9-.93c.16-.12.32-.24.47-.36a13.7 13.7 0 0 0 11 0c.16.12.32.24.47.36-.62.37-1.26.69-1.9.93.35.68.75 1.33 1.2 1.95a18.6 18.6 0 0 0 5.53-2.8c.48-4.48-.7-8.38-3.13-11.83ZM8.7 14.6c-1.04 0-1.9-.96-1.9-2.12 0-1.16.83-2.12 1.9-2.12 1.06 0 1.91.96 1.9 2.12 0 1.16-.84 2.12-1.9 2.12Zm6.6 0c-1.04 0-1.9-.96-1.9-2.12 0-1.16.83-2.12 1.9-2.12 1.06 0 1.91.96 1.9 2.12 0 1.16-.84 2.12-1.9 2.12Z"
            />
          </svg>
          <span>Discord</span>
        </a>
        <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </header>
`;

document.body.insertAdjacentHTML("afterbegin", navbarMarkup);

const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("mobile-menu-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("mobile-menu-open", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu when clicking outside (passive for performance)
  document.addEventListener("click", (e) => {
    if (navLinks.classList.contains("open") &&
        !navLinks.contains(e.target) &&
        !toggle.contains(e.target)) {
      closeMenu();
    }
  }, { passive: true });

  // Close menu on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
      closeMenu();
    }
  });
}

// ── Hero Video ──
// Always visible; just ensure autoplay works and resume on tab focus
(function initVideoPerformance() {
  const heroVideo = document.querySelector(".hero-video");
  if (!heroVideo) return;

  // Try to play; if autoplay is blocked, retry on first user interaction
  const tryPlay = () => {
    const p = heroVideo.play();
    if (p) {
      p.catch(() => {
        document.addEventListener("click", () => heroVideo.play().catch(() => {}), { once: true, passive: true });
      });
    }
  };

  tryPlay();

  // Resume when the user comes back to the tab
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) heroVideo.play().catch(() => {});
  });
})();

// ── Pause CSS animations when tab is hidden ──
(function initAnimationPauseOnHidden() {
  const promoTrack = document.querySelector(".promo-track");
  if (!promoTrack) return;

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      promoTrack.style.animationPlayState = "paused";
    } else {
      promoTrack.style.animationPlayState = "running";
    }
  });
})();

// Collapsible article sections
document.addEventListener("DOMContentLoaded", () => {
  const articleToggles = document.querySelectorAll(".article-toggle");
  
  articleToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      
      if (content && content.classList.contains("article-content")) {
        // Toggle collapsed class
        toggle.classList.toggle("collapsed");
        content.classList.toggle("collapsed");
      }
    });
  });
});

// ── Prefetch pages on hover for instant navigation ──
(function initLinkPrefetch() {
  const prefetched = new Set();
  document.addEventListener("pointerover", (e) => {
    const link = e.target.closest("a[href]");
    if (!link) return;
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http") || prefetched.has(href)) return;
    prefetched.add(href);
    const prefetchLink = document.createElement("link");
    prefetchLink.rel = "prefetch";
    prefetchLink.href = href;
    document.head.appendChild(prefetchLink);
  }, { passive: true });
})();

// Online player count update
(function initPlayerCount() {
  const SERVER_CODE = "eq8a8d";
  const API_URL = `https://servers-frontend.fivem.net/api/servers/single/${SERVER_CODE}`;
  const UPDATE_INTERVAL = 60_000; // update every 60 seconds

  function updateCount(online, max) {
    document.querySelectorAll(".online-count").forEach((el) => {
      el.textContent = `${online}/${max}`;
    });
  }

  async function fetchPlayerCount() {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const online = data?.Data?.clients ?? 0;
      const max    = data?.Data?.sv_maxclients ?? 128;
      updateCount(online, max);
    } catch (err) {
      // Server offline or fetch failed – keep current value
      console.warn("[PlayerCount] Could not fetch server data:", err);
    }
  }

  // Fetch immediately on load, then on an interval
  fetchPlayerCount();
  setInterval(fetchPlayerCount, UPDATE_INTERVAL);
})();
