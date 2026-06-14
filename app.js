/* ==========================================================================
   NayePankh Foundation - Cosmic Space Pinterest JS
   ========================================================================== */

// 1. Data Store for NayePankh Initiatives, Certificates, and Press Clippings
const INITIATIVES = [
  // --- HOME BOARD (Campaigns) ---
  {
    id: "about-us",
    title: "UP Government Registered, 80G & 12A Student-Led NGO",
    category: "info",
    tab: "home",
    tag: "Who We Are",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-01-31-at-9.40.45-pm-dWxpDb2pNbCaxERZ.jpeg",
    description: "NayePankh Foundation is a UP government-registered NGO and one of the biggest student organizations in India. We aim to support, empower, and uplift the underprivileged. By providing core essentials like education, winter clothes, sanitary pads, and nutritious food, we believe in bringing concrete local change.",
    author: "Prashant Shukla",
    avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=180,h=180,fit=crop,f=png/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png",
    likes: 342,
    saves: 189,
    date: "Established 2020",
    ratioClass: "vertical-tall"
  },
  {
    id: "food-drive",
    title: "Fighting Hunger: Daily Food Distribution Campaigns",
    category: "hygiene",
    tab: "home",
    tag: "Food Drive",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=515,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-15-at-9.17.30-pm-AVLPXr08jETq2nyv.jpeg",
    description: "Our volunteers organize consistent food distribution drives, delivering fresh, nutritious, warm meals directly to daily-wage workers, homeless families, and children on the streets of Kanpur and Ghaziabad. We believe that access to clean, healthy food is a primary human right.",
    author: "NayePankh Team",
    avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=180,h=180,fit=crop,f=png/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png",
    likes: 852,
    saves: 423,
    date: "Ongoing Initiative",
    ratioClass: "horizontal"
  },
  {
    id: "hygiene-pads",
    title: "Menstrual Hygiene: Sanitary Pad Distribution & Awareness",
    category: "hygiene",
    tab: "home",
    tag: "Hygiene",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1411,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.03-am-YBgL64ZLPPI03WXe.jpeg",
    description: "Breaking taboos and safeguarding health! NayePankh Foundation conducts menstrual health workshops for underprivileged women and distributes biodegradable, hygienic sanitary pads in slums and rural areas, ensuring dignity and safety for every daughter.",
    author: "Empowerment Wing",
    avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=180,h=180,fit=crop,f=png/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png",
    likes: 1205,
    saves: 618,
    date: "Monthly Campaign",
    ratioClass: "vertical-tall"
  },
  {
    id: "clothing-drive",
    title: "Warmth for All: Winter Warm Clothes Collection & Handouts",
    category: "interactive",
    tab: "home",
    tag: "Winter Drive",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1302,fit=crop/YKbL494Mv8Ip3qgy/1-YD0yJ4erqEIN3ZWV.jpeg",
    description: "Winters in Northern India can be harsh. Our team collects clean, warm sweaters, blankets, and jackets from donors and distributes them directly to homeless families and shelterless citizens before cold waves set in, protecting thousands of vulnerable lives.",
    author: "Logistics Team",
    avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=180,h=180,fit=crop,f=png/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png",
    likes: 643,
    saves: 301,
    date: "Winter Seasonal",
    ratioClass: "vertical"
  },
  {
    id: "education-supplies",
    title: "Supporting Young Minds: Sponsoring School Material & Classes",
    category: "education",
    tab: "home",
    tag: "Education",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.05-am-AzGEo7LOeZi2gn9v.jpeg",
    description: "Education is the ultimate ticket out of poverty. NayePankh distributes notebooks, bags, pens, and pencils to students in community classes. Our student volunteers also run weekend mentoring programs to teach coding basics, communication, and elementary academics.",
    author: "Youth Mentors",
    avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=180,h=180,fit=crop,f=png/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png",
    likes: 954,
    saves: 529,
    date: "Weekend Programs",
    ratioClass: "vertical"
  },
  {
    id: "founder-quote",
    title: "\"If we all do something, then together there is no problem that we cannot solve!\"",
    category: "info",
    tab: "home",
    tag: "Vision",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png",
    description: "A quote from Prashant Shukla, Founder & President of NayePankh Foundation. The foundation is built upon the philosophy that student micro-actions, when unified across the nation, can create massive waves of humanitarian support, solving critical local crises systematically.",
    author: "Prashant Shukla",
    avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=180,h=180,fit=crop,f=png/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png",
    likes: 1530,
    saves: 984,
    date: "Core Values",
    ratioClass: "square"
  },

  // --- CERTIFICATES TAB ---
  {
    id: "cert-govt",
    title: "UP Government NGO Registration Certificate scan",
    category: "media",
    tab: "certificates",
    tag: "Compliance",
    image: "assets/cert_ngo.png",
    description: "Official registration document copy issued by the UP state registry panel, certifying NayePankh Foundation as an institutional social trust working on educational and sanitary distributions.",
    author: "Compliance Dept",
    avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=180,h=180,fit=crop,f=png/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png",
    likes: 245,
    saves: 112,
    date: "Government Verified",
    ratioClass: "horizontal"
  },
  {
    id: "cert-80g",
    title: "80G Income Tax Exemption Compliance Registration Document",
    category: "media",
    tab: "certificates",
    tag: "Compliance",
    image: "assets/cert_80g.png",
    description: "Scanned copy of the official income tax exemption order (Section 80G) issued to NayePankh Foundation, enabling donors to claim deductions on financial contributions.",
    author: "Finance Division",
    avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=180,h=180,fit=crop,f=png/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png",
    likes: 512,
    saves: 304,
    date: "Income Tax Approved",
    ratioClass: "vertical"
  },
  {
    id: "cert-12a",
    title: "12A Trust Registration Compliance Form scan",
    category: "media",
    tab: "certificates",
    tag: "Compliance",
    image: "assets/cert_12a.png",
    description: "Official Section 12A trust registration document, certifying our compliance with standard charitable trust mandates in the Indian corporate registry system.",
    author: "Compliance Dept",
    avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=180,h=180,fit=crop,f=png/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png",
    likes: 310,
    saves: 182,
    date: "Compliance Verified",
    ratioClass: "vertical-tall"
  },

  // --- NEWS CLIPPINGS (Press) TAB ---
  {
    id: "news-dainik",
    title: "Dainik Jagran Front Page: NayePankh Relief Operations Highlighted",
    category: "media",
    tab: "press",
    tag: "Press Coverage",
    image: "assets/news_dainik.png",
    description: " Dainik Jagran print column highlighting our student group distributing sanitary pads and organizing winter warm clothing drives for families residing in regional slums.",
    author: "Press Release",
    avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=180,h=180,fit=crop,f=png/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png",
    likes: 412,
    saves: 211,
    date: "Dainik Jagran 2023",
    ratioClass: "vertical"
  },
  {
    id: "news-amar",
    title: "Amar Ujala Feature: Student Volunteers Sponsoring Slum Education",
    category: "media",
    tab: "press",
    tag: "Press Coverage",
    image: "assets/news_amar.png",
    description: "Scan of the Amar Ujala coverage detailing NayePankh's weekend mentoring drives and distributing elementary schooling notebooks to street children in Kanpur.",
    author: "Amar Ujala Press",
    avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=180,h=180,fit=crop,f=png/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png",
    likes: 312,
    saves: 154,
    date: "Amar Ujala 2023",
    ratioClass: "horizontal"
  },
  {
    id: "news-banner",
    title: "NayePankh Foundation Annual Relief Press Conference Banner",
    category: "media",
    tab: "press",
    tag: "Press Coverage",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YKbL494Mv8Ip3qgy/nyomtatott-184780375-mP4wg2o0j3Uv1ggM.jpg",
    description: "Official print poster design used during our annual public press meetings, documenting active relief campaigns, food numbers, and future state expansions.",
    author: "Media Desk",
    avatar: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=180,h=180,fit=crop,f=png/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png",
    likes: 673,
    saves: 312,
    date: "Press Release",
    ratioClass: "horizontal"
  }
];

// 2. Global State variables
let currentTab = "home";
let activeFilter = "all";
let savedPins = JSON.parse(localStorage.getItem("nayepankh_saved_pins")) || [];
let totalDonated = parseInt(localStorage.getItem("nayepankh_total_donated")) || 135450;
const DONATION_GOAL = 200000;

// Sound effects state
let soundEnabled = false;
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, type, duration) {
  if (!soundEnabled) return;
  try {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.type = type || "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.08, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
    osc.start();
    osc.stop(audioContext.currentTime + duration);
  } catch (e) {
    console.log("Audio contextual block", e);
  }
}

// Sound presets
const playHoverSound = () => playTone(600, "sine", 0.08);
const playClickSound = () => playTone(800, "triangle", 0.12);
const playSuccessSound = () => {
  playTone(523.25, "sine", 0.1); // C5
  setTimeout(() => playTone(659.25, "sine", 0.15), 100); // E5
};

// 3. Starfield Particle Canvas Engine
class CosmicStarfield {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.stars = [];
    this.numStars = 80;
    this.mouseX = 0;
    this.mouseY = 0;
    
    this.init();
    this.bindEvents();
    this.animate();
  }

  init() {
    this.resizeCanvas();
    this.stars = [];
    for (let i = 0; i < this.numStars; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2,
        speed: 0.02 + Math.random() * 0.05,
        twinkleSpeed: 0.01 + Math.random() * 0.02,
        alpha: Math.random(),
        twinkleFactor: 1
      });
    }
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  bindEvents() {
    window.addEventListener("resize", () => this.init());
    window.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw and update stars
    this.stars.forEach(star => {
      // Star twinkle animation
      star.alpha += star.twinkleSpeed * star.twinkleFactor;
      if (star.alpha >= 1) {
        star.alpha = 1;
        star.twinkleFactor = -1;
      } else if (star.alpha <= 0.2) {
        star.alpha = 0.2;
        star.twinkleFactor = 1;
      }

      // Drift physics (slowly float upwards)
      star.y -= star.speed;
      if (star.y < 0) {
        star.y = this.canvas.height;
        star.x = Math.random() * this.canvas.width;
      }

      // Draw Star with light mode adaptation
      const isLightMode = document.documentElement.getAttribute("data-theme") === "light";
      this.ctx.fillStyle = isLightMode 
        ? `rgba(0, 84, 28, ${star.alpha * 0.4})` 
        : `rgba(0, 240, 255, ${star.alpha})`;
        
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      this.ctx.fill();

      // Mouse interactive links
      const dx = this.mouseX - star.x;
      const dy = this.mouseY - star.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 100) {
        // Draw soft glowing connections to cursor
        this.ctx.strokeStyle = isLightMode
          ? `rgba(255, 84, 28, ${(1 - dist/100) * 0.15})`
          : `rgba(0, 240, 255, ${(1 - dist/100) * 0.25})`;
        this.ctx.lineWidth = 0.5;
        this.ctx.beginPath();
        this.ctx.moveTo(star.x, star.y);
        this.ctx.lineTo(this.mouseX, this.mouseY);
        this.ctx.stroke();
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  setupEventListeners();
  new CosmicStarfield("starfieldCanvas");
  renderBoard();
  updateSavedBadgeCount();
  updateGlobalDonationProgress();

  // Draw and adjust connecting neon shader lines during scroll and resize
  window.addEventListener("resize", updateConnectionLines);
  window.addEventListener("scroll", updateConnectionLines);
});

// Theme setup
function setupTheme() {
  const savedTheme = localStorage.getItem("nayepankh_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

function toggleTheme() {
  playClickSound();
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("nayepankh_theme", next);
  showToast(`Theme switched to ${next.toUpperCase()} mode`, "info");
}

// 4. Pinterest Board Masonry Grid Builder
// 4. Pinterest Board Masonry Grid Builder with Card Shuffle and Connection Lines
function renderBoard() {
  const grid = document.getElementById("masonryGrid");
  if (!grid) return;
  
  grid.innerHTML = "";
  let dataset = [];

  // Reorganizing dataset based on Nav Tabs
  if (currentTab === "saved") {
    dataset = INITIATIVES.filter(item => savedPins.includes(item.id));
  } else {
    // Standard tabs ('home', 'certificates', 'press')
    dataset = INITIATIVES.filter(item => item.tab === currentTab);
    
    // Apply nested filters inside Home Board
    if (currentTab === "home" && activeFilter !== "all") {
      dataset = dataset.filter(item => item.category === activeFilter);
    }
  }

  if (dataset.length === 0) {
    renderEmptyState(grid);
    return;
  }

  // Create SVG connection canvas dynamically inside the grid container
  const svgNS = "http://www.w3.org/2000/svg";
  const connSvg = document.createElementNS(svgNS, "svg");
  connSvg.id = "connectionCanvas";
  grid.appendChild(connSvg);

  dataset.forEach((item, index) => {
    const isSaved = savedPins.includes(item.id);
    const card = document.createElement("div");
    card.className = `card shuffling ${item.ratioClass || ""}`; // Start in shuffled state
    card.dataset.id = item.id;

    card.innerHTML = `
      <div class="card-media">
        <img class="card-img" src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="card-overlay">
          <div class="overlay-top">
            <span class="overlay-tag">${item.tag}</span>
            <button class="pin-btn ${isSaved ? 'saved' : ''}" onclick="event.stopPropagation(); handlePinToggle('${item.id}', this)" aria-label="Save card">
              <svg viewBox="0 0 24 24">
                <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
              </svg>
              <span>Save</span>
            </button>
          </div>
          <div class="overlay-bottom">
            <a href="https://nayepankh.com" target="_blank" class="overlay-link-badge" onclick="event.stopPropagation();">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
              <span>nayepankh.com</span>
            </a>
            <button class="overlay-btn-open" onclick="event.stopPropagation(); openDetailModal('${item.id}')" aria-label="Open details">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-description">${item.description}</p>
        <div class="card-footer-info">
          <div class="card-author">
            <img src="${item.avatar}" alt="${item.author}">
            <span>${item.author}</span>
          </div>
          <div class="card-actions-stats">
            <span class="stat-item">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <span>${item.likes}</span>
            </span>
          </div>
        </div>
      </div>
    `;

    // Audio triggers on Mouse Enter only to avoid continuous sound loop
    card.addEventListener("mouseenter", () => {
      if (window.innerWidth > 768) {
        playHoverSound();
      }
    });

    // 3D Card Tilt Dynamic Transform (Disabled on mobile)
    card.addEventListener("mousemove", (e) => {
      if (window.innerWidth <= 768) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((centerY - y) / centerY) * 8;
      const rotateY = ((x - centerX) / centerX) * 8;
      
      card.style.setProperty("--rx", `${rotateX}deg`);
      card.style.setProperty("--ry", `${rotateY}deg`);
      card.classList.add("tilt-active");
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--rx", `0deg`);
      card.style.setProperty("--ry", `0deg`);
      card.classList.remove("tilt-active");
    });

    card.addEventListener("click", () => {
      openDetailModal(item.id);
    });

    grid.appendChild(card);
  });

  // Setup Scroll Reveal Intersection Observer (Bidirectional side-in/side-out)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -60px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    let stateChanged = false;
    entries.forEach((entry) => {
      const card = entry.target;
      // Skip scroll reveal logic for cards currently in the shuffle animation
      if (card.classList.contains("shuffling")) return;

      if (entry.isIntersecting) {
        if (!card.classList.contains("reveal-active")) {
          card.classList.add("reveal-active");
          stateChanged = true;
        }
      } else {
        if (card.classList.contains("reveal-active")) {
          card.classList.remove("reveal-active");
          stateChanged = true;
        }
      }
    });

    if (stateChanged) {
      // Small delay to allow element transitions to update coordinates before redrawing lines
      setTimeout(updateConnectionLines, 60);
    }
  }, observerOptions);

  // Trigger card shuffle pile offsets calculation once DOM finishes layout flow
  setTimeout(() => {
    const cards = Array.from(grid.querySelectorAll(".card"));
    if (cards.length === 0) return;

    const gridWidth = grid.offsetWidth;
    const targetX = gridWidth / 2;
    const targetY = 30; // height offset for stacking deck

    cards.forEach((card, idx) => {
      const cardX = card.offsetLeft;
      const cardY = card.offsetTop;
      const cardWidth = card.offsetWidth;
      const cardHeight = card.offsetHeight;

      // Distance to stack center
      const dx = targetX - (cardX + cardWidth / 2);
      const dy = targetY - cardY;

      // Stagger rotation degrees like a deck of cards
      const rot = (idx - (cards.length - 1) / 2) * 5 + (Math.random() - 0.5) * 3;

      card.style.setProperty("--shuffle-dx", `${dx}px`);
      card.style.setProperty("--shuffle-dy", `${dy}px`);
      card.style.setProperty("--shuffle-rot", `${rot}deg`);
      
      // Bind IntersectionObserver to check reveal states on viewport entry/exit
      observer.observe(card);
    });

    // Staggered dealer sequence - deal cards out of the stack one-by-one
    setTimeout(() => {
      cards.forEach((card, idx) => {
        setTimeout(() => {
          card.classList.remove("shuffling");
          // Play ascending deck deal sounds if UI audio is unmuted
          if (soundEnabled) {
            playTone(380 + idx * 45, "sine", 0.07);
          }
          // Update neon connecting paths
          updateConnectionLines();
        }, idx * 110);
      });
    }, 80);
  }, 40);
}

// Draw beautiful curved constellation shader paths linking adjacent cards
function updateConnectionLines() {
  const grid = document.getElementById("masonryGrid");
  const svg = document.getElementById("connectionCanvas");
  if (!grid || !svg) return;

  svg.innerHTML = "";

  const cards = Array.from(grid.querySelectorAll(".card"));
  if (cards.length < 2) return;

  const gridRect = grid.getBoundingClientRect();
  const svgNS = "http://www.w3.org/2000/svg";

  for (let i = 0; i < cards.length - 1; i++) {
    const cardI = cards[i];
    const cardIplus1 = cards[i + 1];

    // Skip drawing paths for cards currently being shuffled in
    if (cardI.classList.contains("shuffling") || cardIplus1.classList.contains("shuffling")) continue;

    const mediaI = cardI.querySelector(".card-media");
    const mediaIplus1 = cardIplus1.querySelector(".card-media");

    if (!mediaI || !mediaIplus1) continue;

    const rectI = mediaI.getBoundingClientRect();
    const rectIplus1 = mediaIplus1.getBoundingClientRect();

    // Start coordinate relative to parent grid container
    const x1 = rectI.left - gridRect.left + rectI.width / 2;
    const y1 = rectI.top - gridRect.top + rectI.height / 2;

    // End coordinate relative to parent grid container
    const x2 = rectIplus1.left - gridRect.left + rectIplus1.width / 2;
    const y2 = rectIplus1.top - gridRect.top + rectIplus1.height / 2;

    // S-curve handle coordinates
    const dy = Math.abs(y2 - y1);
    const cpY1 = y1 + dy * 0.45;
    const cpY2 = y2 - dy * 0.45;

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", `M ${x1} ${y1} C ${x1} ${cpY1}, ${x2} ${cpY2}, ${x2} ${y2}`);
    path.setAttribute("class", "connection-path");

    svg.appendChild(path);

    // Dynamic dash-array animations based on card reveal visibility status
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;

    const bothRevealed = cardI.classList.contains("reveal-active") && cardIplus1.classList.contains("reveal-active");
    if (bothRevealed) {
      path.style.strokeDashoffset = "0";
      path.style.opacity = "0.8";
    } else {
      path.style.strokeDashoffset = pathLength;
      path.style.opacity = "0";
    }
  }
}

function renderEmptyState(container) {
  container.innerHTML = `
    <div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M17.5 19.5L22 24m-2-12a8 8 0 11-16 0 8 8 0 0116 0z" stroke-linecap="round"/>
      </svg>
      <h3>No cards available</h3>
      <p>There are no pins listed under this board category.</p>
      <button class="btn btn-primary" style="margin-top: 1rem" onclick="switchTab('home')">Browse Home Board</button>
    </div>
  `;
}

// 5. Navigation Tab Router
function switchTab(tabId) {
  if (currentTab === tabId && tabId !== 'home') return;
  
  playClickSound();
  currentTab = tabId;
  
  // Highlight tab in navbar
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
    if (link.dataset.tab === tabId) {
      link.classList.add("active");
    }
  });

  // Toggle internal category filter bar visibility
  const filterBar = document.getElementById("filterBar");
  if (currentTab === "home") {
    filterBar.style.display = "flex";
  } else {
    filterBar.style.display = "none";
  }

  renderBoard();
}

function handleFilter(category, button) {
  playClickSound();
  activeFilter = category;
  
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
  
  renderBoard();
}

// 6. Pin Saving & Local Storage Bookmark management
function handlePinToggle(id, button) {
  playClickSound();
  const index = savedPins.indexOf(id);
  const isSavedBtn = button.classList.contains("saved");
  
  if (index > -1) {
    savedPins.splice(index, 1);
    button.classList.remove("saved");
    button.innerHTML = `
      <svg viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
      <span>Save</span>
    `;
    showToast("Removed from Saved Board", "info");
  } else {
    savedPins.push(id);
    button.classList.add("saved");
    button.innerHTML = `
      <svg viewBox="0 0 24 24" style="fill: white;"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
      <span>Saved</span>
    `;
    showToast("Pin saved to your board!", "success");
  }
  
  localStorage.setItem("nayepankh_saved_pins", JSON.stringify(savedPins));
  updateSavedBadgeCount();
  
  // Rerender home cards or save boards
  const cardInGrid = document.querySelector(`.card[data-id="${id}"] .pin-btn`);
  if (cardInGrid) {
    if (index > -1) {
      cardInGrid.classList.remove("saved");
    } else {
      cardInGrid.classList.add("saved");
    }
  }

  if (currentTab === "saved") {
    renderBoard();
  }
}

function updateSavedBadgeCount() {
  const badge = document.getElementById("savedCountBadge");
  if (!badge) return;
  
  if (savedPins.length > 0) {
    badge.innerText = savedPins.length;
    badge.style.display = "inline-flex";
  } else {
    badge.style.display = "none";
  }
}

// 7. Pinterest Modal Lightbox Engine
function openDetailModal(id) {
  playClickSound();
  const item = INITIATIVES.find(init => init.id === id);
  if (!item) return;

  const overlay = document.getElementById("detailModalOverlay");
  const modalMedia = document.getElementById("modalMedia");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalAuthorName = document.getElementById("modalAuthorName");
  const modalAuthorAvatar = document.getElementById("modalAuthorAvatar");
  const modalDate = document.getElementById("modalDate");
  const modalDescription = document.getElementById("modalDescription");
  const commentForm = document.getElementById("commentForm");
  const bookmarkBtn = document.getElementById("modalBookmarkBtn");
  const shareBtn = document.getElementById("modalShareBtn");

  // Load Content details
  modalMedia.innerHTML = `<img src="${item.image}" alt="${item.title}">`;
  modalCategory.innerText = item.tag;
  modalTitle.innerText = item.title;
  modalAuthorName.innerText = item.author;
  modalAuthorAvatar.src = item.avatar;
  modalDate.innerText = item.date;
  modalDescription.innerText = item.description;

  // Sync Save/Bookmark button states
  const isPinned = savedPins.includes(id);
  if (isPinned) {
    bookmarkBtn.innerHTML = `
      <svg viewBox="0 0 24 24" style="fill: white; width: 14px; height: 14px;"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
      <span>Saved</span>
    `;
    bookmarkBtn.className = "btn btn-primary pin-btn saved";
  } else {
    bookmarkBtn.innerHTML = `
      <svg viewBox="0 0 24 24" style="width: 14px; height: 14px;"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
      <span>Save</span>
    `;
    bookmarkBtn.className = "btn pin-btn";
  }
  
  bookmarkBtn.onclick = () => {
    handlePinToggle(id, bookmarkBtn);
  };

  // Share functionality
  shareBtn.onclick = () => {
    const shareUrl = `${window.location.origin}/#pin=${id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      showToast("Link copied to clipboard!", "success");
    }).catch(() => {
      showToast("Failed to copy link", "info");
    });
  };

  // Donation widget check
  const donationBox = document.getElementById("modalDonationWidget");
  if (item.category === "hygiene" || item.category === "education" || item.category === "interactive" || item.id === "clothing-drive") {
    donationBox.style.display = "flex";
  } else {
    donationBox.style.display = "none";
  }

  loadComments(id);

  commentForm.onsubmit = (e) => {
    e.preventDefault();
    submitComment(id);
  };

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDetailModal() {
  playClickSound();
  const overlay = document.getElementById("detailModalOverlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

// 8. Comments engine
function loadComments(pinId) {
  const commentList = document.getElementById("commentList");
  commentList.innerHTML = "";
  const storageKey = `nayepankh_comments_${pinId}`;
  let comments = JSON.parse(localStorage.getItem(storageKey)) || [];

  if (comments.length === 0) {
    comments = [
      { author: "Karan Johar", text: "Amazing student organization! Truly inspiring.", avatarLetter: "K" },
      { author: "Aanya Patel", text: "Proud to support this local movement. Best wishes!", avatarLetter: "A" }
    ];
    localStorage.setItem(storageKey, JSON.stringify(comments));
  }

  comments.forEach(c => {
    const item = document.createElement("div");
    item.className = "comment-item";
    item.innerHTML = `
      <div class="comment-avatar">${c.avatarLetter || c.author.charAt(0).toUpperCase()}</div>
      <div class="comment-content">
        <div class="comment-author">${c.author}</div>
        <div class="comment-text">${c.text}</div>
      </div>
    `;
    commentList.appendChild(item);
  });
  
  commentList.scrollTop = commentList.scrollHeight;
}

function submitComment(pinId) {
  const input = document.getElementById("commentInput");
  const text = input.value.trim();
  if (!text) return;

  const storageKey = `nayepankh_comments_${pinId}`;
  const comments = JSON.parse(localStorage.getItem(storageKey)) || [];

  const newComment = {
    author: "Guest Supporter",
    text: text,
    avatarLetter: "G"
  };

  comments.push(newComment);
  localStorage.setItem(storageKey, JSON.stringify(comments));
  input.value = "";
  loadComments(pinId);
  showToast("Comment added!", "success");
}

// 9. Payment simulated actions
function updateGlobalDonationProgress() {
  const fill = document.getElementById("progressBarFill");
  const stats = document.getElementById("progressBarStats");
  if (fill && stats) {
    const percentage = Math.min((totalDonated / DONATION_GOAL) * 100, 100);
    fill.style.width = `${percentage}%`;
    stats.innerText = `₹${totalDonated.toLocaleString()} raised of ₹${DONATION_GOAL.toLocaleString()} goal`;
  }
}

function openCheckout() {
  closeDetailModal();
  const checkout = document.getElementById("checkoutOverlay");
  const successGraphic = document.getElementById("successCheckmark");
  const checkoutForm = document.getElementById("checkoutForm");
  const loader = document.getElementById("checkoutLoader");
  const checkoutSubmitBtn = document.getElementById("checkoutSubmitBtn");

  checkoutForm.style.display = "flex";
  successGraphic.style.display = "none";
  loader.style.display = "none";
  checkoutSubmitBtn.disabled = false;
  checkoutSubmitBtn.innerText = "Complete Donation";

  checkout.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCheckout() {
  playClickSound();
  const checkout = document.getElementById("checkoutOverlay");
  checkout.classList.remove("open");
  document.body.style.overflow = "";
}

function selectDonationAmount(amount, button) {
  playClickSound();
  document.querySelectorAll(".amount-btn").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
  document.getElementById("checkoutAmountInput").value = amount;
}

function processPayment(event) {
  event.preventDefault();
  playClickSound();

  const val = parseInt(document.getElementById("checkoutAmountInput").value) || 0;
  if (val <= 0) {
    showToast("Please input a donation amount", "info");
    return;
  }

  const loader = document.getElementById("checkoutLoader");
  const checkoutForm = document.getElementById("checkoutForm");
  const successGraphic = document.getElementById("successCheckmark");
  const submitBtn = document.getElementById("checkoutSubmitBtn");

  submitBtn.disabled = true;
  submitBtn.innerText = "Processing Transaction...";
  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";
    checkoutForm.style.display = "none";
    successGraphic.style.display = "block";
    playSuccessSound();

    totalDonated += val;
    localStorage.setItem("nayepankh_total_donated", totalDonated);
    updateGlobalDonationProgress();

    showToast(`Donated ₹${val} successfully! Thank you.`, "success");

    setTimeout(() => {
      closeCheckout();
    }, 2200);

  }, 1800);
}

// Visual Card formatting bindings
function formatCardNumber(input) {
  let val = input.value.replace(/\D/g, "").substring(0, 16);
  const formatted = val.replace(/(\d{4})(?=\d)/g, "$1 ");
  input.value = formatted;
  document.getElementById("cardVisualNumber").innerText = formatted || "•••• •••• •••• ••••";
}

function updateCardHolder(input) {
  document.getElementById("cardVisualName").innerText = input.value.toUpperCase() || "CARDHOLDER NAME";
}

function formatCardExpiry(input) {
  let val = input.value.replace(/\D/g, "").substring(0, 4);
  if (val.length >= 2) {
    val = val.substring(0, 2) + "/" + val.substring(2);
  }
  input.value = val;
  document.getElementById("cardVisualExpiry").innerText = val || "MM/YY";
}

// 10. Toast messages
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon">
      ${type === 'success' 
        ? '<svg viewBox="0 0 24 24" style="width:12px; height:12px; fill:white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>' 
        : '<svg viewBox="0 0 24 24" style="width:12px; height:12px; fill:white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>'
      }
    </div>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 50);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// 11. Floating Menu Actions
function toggleFloatingMenu() {
  playClickSound();
  document.getElementById("floatingMenu").classList.toggle("open");
}

function toggleSoundMode() {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    if (audioContext.state === "suspended") audioContext.resume();
    showToast("UI sound effects activated", "success");
    playSuccessSound();
  } else {
    showToast("UI sound effects muted", "info");
  }
}

function triggerVolunteerSignup() {
  playClickSound();
  document.getElementById("floatingMenu").classList.remove("open");
  closeDetailModal();

  const overlay = document.getElementById("volunteerOverlay");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeVolunteerModal() {
  playClickSound();
  const overlay = document.getElementById("volunteerOverlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function processVolunteerSignup(event) {
  event.preventDefault();
  playClickSound();
  const submitBtn = document.getElementById("volunteerSubmitBtn");
  submitBtn.disabled = true;
  submitBtn.innerText = "Submitting application...";

  setTimeout(() => {
    submitBtn.innerText = "Application Sent!";
    playSuccessSound();
    showToast("Application submitted successfully!", "success");
    document.getElementById("volunteerForm").reset();

    setTimeout(() => {
      closeVolunteerModal();
    }, 1200);

  }, 1500);
}

// 12. Modal backdrop bindings
function setupEventListeners() {
  document.getElementById("detailModalOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("detailModalOverlay")) closeDetailModal();
  });
  document.getElementById("checkoutOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("checkoutOverlay")) closeCheckout();
  });
  document.getElementById("volunteerOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("volunteerOverlay")) closeVolunteerModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDetailModal();
      closeCheckout();
      closeVolunteerModal();
    }
  });
}

// 13. Intro Hero Scrolling Navigation and Parallax Scroll Engine
let lastMouseX = 0;
let lastMouseY = 0;

function scrollToBoard(category) {
  playClickSound();
  const target = document.getElementById("filterBar") || document.getElementById("masonryGrid");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }

  if (category) {
    // Stagger slightly to allow smooth scroll coordinate adjustments
    setTimeout(() => {
      if (category === 'info' || category === 'hygiene' || category === 'education' || category === 'interactive') {
        switchTab('home');
        const filterBtns = Array.from(document.querySelectorAll(".filter-btn"));
        const targetBtn = filterBtns.find(btn => btn.getAttribute("onclick").includes(category));
        if (targetBtn) {
          targetBtn.click();
        }
      } else {
        switchTab(category);
      }
    }, 300);
  }
}

// Integrated 3D mouse parallax and scroll-driven circular morph mask
function updateHeroParallax() {
  const hero = document.getElementById("introHero");
  if (!hero) return;

  const scrollTop = window.scrollY;
  const heroHeight = hero.offsetHeight;

  if (scrollTop <= heroHeight) {
    const bgImg = hero.querySelector(".hero-bg-img");
    const content = hero.querySelector(".hero-content");
    const header = hero.querySelector(".hero-header");
    
    const pct = scrollTop / heroHeight;
    
    // Parallax vertical translation components
    const translateValY = pct * 90; // translate image slightly downwards
    
    // Mouse track subtle offsets (disabled on mobile)
    const isMobile = window.innerWidth <= 768;
    const mouseShiftX = isMobile ? 0 : lastMouseX * 0.05;
    const mouseShiftY = isMobile ? 0 : lastMouseY * 0.05;

    if (bgImg) {
      const scaleVal = 1.02 + pct * 0.12;
      bgImg.style.transform = `scale(${scaleVal}) translate3d(${mouseShiftX}px, ${translateValY + mouseShiftY}px, 0)`;
      bgImg.style.clipPath = "";
      bgImg.style.webkitClipPath = "";
    }
    
    if (content) {
      const fadeVal = Math.max(0, 1 - pct * 1.6); // fade out text
      const contentY = scrollTop * 0.35 + (isMobile ? 0 : lastMouseY * 0.08);
      const contentX = isMobile ? 0 : lastMouseX * 0.08;
      
      // 3D perspective tilt relative to mouse
      const rotX = isMobile ? 0 : -(lastMouseY / heroHeight) * 12;
      const rotY = isMobile ? 0 : (lastMouseX / hero.offsetWidth) * 12;

      content.style.opacity = fadeVal;
      content.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(${contentX}px, ${contentY}px, 20px)`;
    }

    if (header) {
      const headerFade = Math.max(0, 1 - pct * 2.2);
      header.style.opacity = headerFade;
      header.style.transform = `translate3d(0, ${-scrollTop * 0.15}px, 0)`;
    }
  }
}

// mousemove tracks cursor coordinates and updates UI on next frame
window.addEventListener("mousemove", (e) => {
  const hero = document.getElementById("introHero");
  if (!hero || window.scrollY > hero.offsetHeight || window.innerWidth <= 768) return;

  lastMouseX = e.clientX - hero.offsetWidth / 2;
  lastMouseY = e.clientY - hero.offsetHeight / 2;

  requestAnimationFrame(updateHeroParallax);
});

window.addEventListener("scroll", () => {
  requestAnimationFrame(updateHeroParallax);
});
