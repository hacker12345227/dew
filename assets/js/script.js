const pathLower = window.location.pathname.toLowerCase();

// 🔧 Normaliseer pad (verwijder trailing slash behalve root)
const path = pathLower !== "/" ? pathLower.replace(/\/$/, "") : "/";

// ── Page detection (GEFIXT) ──
const isHomePage =
  path === "/" ||
  path.endsWith("/index.html");

const isRulesPage =
  path === "/apv" ||
  path.endsWith("/apv") ||
  path.includes("regels.html");

const isShopPage =
  path === "/pakketten" ||
  path.startsWith("/pakketten");

const isSolliciterenPage =
  path === "/solliciteren" ||
  path.startsWith("/solliciteren") ||
  path.includes("solliciteren.html") ||
  path.includes("staff-sollicitatie.html");

// ── Subpage detectie ──
const isSubPage =
  path.includes("/pages/") ||
  isRulesPage ||
  isShopPage ||
  isSolliciterenPage;

// ── Paths ──
const basePath = isSubPage ? "../" : "";

// 🔥 FIX: correcte links overal
const homeAnchor = isSubPage ? "../" : "/";
const regelsHref = basePath + "apv";
const applyAnchor = basePath + "solliciteren";
const donateAnchor = "https://Titan.tebex.io/";
const logoSrc = basePath + "assets/images/ehlogo.png";

// ── Navbar ──
const navbarMarkup = `
  <section class="promo-bar">
    <div class="promo-track">
<div class="promo-items">
  <span class="promo-item">🚀 TITAN ROLEPLAY IS NU OPEN!</span>
  <span class="promo-item">🔥 NIEUWE SERVER • NIEUWE START</span>
  <span class="promo-item">🎁 GRATIS START BONUSSEN</span>
  <span class="promo-item">💎 PREMIUM RP ERVARING</span>
  <span class="promo-item">👑 WORD EEN VAN DE EERSTE SPELERS</span>
</div>
<div class="promo-items">
  <span class="promo-item">🚀 TITAN ROLEPLAY IS NU OPEN!</span>
  <span class="promo-item">🔥 NIEUWE SERVER • NIEUWE START</span>
  <span class="promo-item">🎁 GRATIS START BONUSSEN</span>
  <span class="promo-item">💎 PREMIUM RP ERVARING</span>
  <span class="promo-item">👑 WORD EEN VAN DE EERSTE SPELERS</span>
</div>
    </div>
  </section>

  <header class="site-header">
    <nav class="navbar">
      <a class="logo" href="${homeAnchor}">
        <img src="${logoSrc}" alt="Titan Roleplay">
        <span>Titan Roleplay</span>
      </a>

      <div class="nav-links">
        <a class="${isHomePage ? "active" : ""}" href="${homeAnchor}">Home</a>
        <a class="${isRulesPage ? "active" : ""}" href="${regelsHref}">APV</a>
        <a class="${isShopPage ? "active" : ""}" href="${basePath}pakketten">Auto's &amp; Pakketten</a>
        <a class="${isSolliciterenPage ? "active" : ""}" href="${applyAnchor}">Solliciteren</a>
        <a href="https://discord.gg/uMDE3fhtAe" target="_blank">Discord</a>
      </div>

      <button class="nav-toggle" aria-label="Menu" aria-expanded="false">☰</button>
    </nav>
  </header>
`;

document.body.insertAdjacentHTML("afterbegin", navbarMarkup);

// ── Mobile menu ──
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Sluit bij klik op link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Sluit bij klik buiten menu
  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("open") &&
      !navLinks.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Sluit met ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

// ── Video autoplay fix ──
(function () {
  const video = document.querySelector(".hero-video");
  if (!video) return;

  video.play().catch(() => {
    document.addEventListener("click", () => video.play(), {
      once: true,
      passive: true,
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      video.play().catch(() => {});
    }
  });
})();

// ── Pause animaties bij tab switch ──
(function () {
  const promoTrack = document.querySelector(".promo-track");
  if (!promoTrack) return;

  document.addEventListener("visibilitychange", () => {
    promoTrack.style.animationPlayState =
      document.hidden ? "paused" : "running";
  });
})();

// ── Collapsible sections ──
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".article-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      if (!content) return;

      toggle.classList.toggle("collapsed");
      content.classList.toggle("collapsed");
    });
  });
});

// ── Prefetch links ──
(function () {
  const prefetched = new Set();

  document.addEventListener("pointerover", (e) => {
    const link = e.target.closest("a[href]");
    if (!link) return;

    const href = link.getAttribute("href");
    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("http") ||
      prefetched.has(href)
    )
      return;

    prefetched.add(href);

    const l = document.createElement("link");
    l.rel = "prefetch";
    l.href = href;
    document.head.appendChild(l);
  });
})();

// ── Player count ──
(function () {
  const API_URL =
    "https://servers-frontend.fivem.net/api/servers/single/6mym45j";

  async function update() {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error();

      const data = await res.json();
      const online = data?.Data?.clients ?? 0;
      const max = data?.Data?.sv_maxclients ?? 512;

      document.querySelectorAll(".online-count").forEach((el) => {
        el.textContent = `${online}/${max}`;
      });
    } catch {
      console.warn("Player count ophalen mislukt");
    }
  }

  update();
  setInterval(update, 60000);
})();


// ── Titan oranje upgrade: header-effect, scroll-animaties en vonken ──
(function () {
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll-reveal
  const targets = document.querySelectorAll(
    ".apply-left-card, .apply-process, .apply-requirements, .sol-card, .sol-route, .sol-req-bar, .sol-process-header, .shop-section, .footer-col, .footer-brand, .rules-section-header"
  );
  if (!reduce && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.setProperty("--d", (i % 4) * 0.08 + "s");
      io.observe(el);
    });
  }

  // Vonken in de hero
  const hero = document.querySelector(".hero");
  if (!hero || reduce) return;
  const canvas = document.createElement("canvas");
  canvas.className = "hero-embers";
  const overlay = hero.querySelector(".hero-overlay");
  if (overlay && overlay.nextSibling) hero.insertBefore(canvas, overlay.nextSibling);
  else hero.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  let w = 0, h = 0, running = true;
  const dots = [];
  const resize = () => {
    const r = hero.getBoundingClientRect();
    w = canvas.width = r.width;
    h = canvas.height = r.height;
  };
  resize();
  window.addEventListener("resize", resize);
  const make = (initial) => ({
    x: Math.random() * w,
    y: initial ? Math.random() * h : h + 10,
    r: Math.random() * 2 + 0.6,
    vy: Math.random() * 0.7 + 0.25,
    vx: (Math.random() - 0.5) * 0.35,
    a: Math.random() * 0.6 + 0.25,
    p: Math.random() * Math.PI * 2,
  });
  const count = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 20000));
  for (let i = 0; i < count; i++) dots.push(make(true));
  const loop = () => {
    if (running) {
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d, i) => {
        d.y -= d.vy;
        d.p += 0.03;
        d.x += d.vx + Math.sin(d.p) * 0.25;
        if (d.y < -10) dots[i] = make(false);
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 5);
        g.addColorStop(0, "rgba(255,170,80," + d.a + ")");
        g.addColorStop(0.4, "rgba(255,100,10," + d.a * 0.45 + ")");
        g.addColorStop(1, "rgba(255,80,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 5, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    requestAnimationFrame(loop);
  };
  document.addEventListener("visibilitychange", () => (running = !document.hidden));
  loop();
})();
