/* =============================================
   NAV — mobile burger
   ============================================= */
function initNav() {
  const burger = document.querySelector('.nav-burger');
  const links  = document.querySelector('.nav-links');
  if (!burger) return;
  burger.addEventListener('click', () => {
    links.classList.toggle('open');
    const s = burger.querySelectorAll('span');
    const open = links.classList.contains('open');
    s[0].style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
    s[1].style.opacity   = open ? '0' : '1';
    s[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

/* =============================================
   SERVICES DATA
   ============================================= */
const SERVICES = [
  { id:'photo',   title:'Photographie',      desc:'Du portrait intime au grand paysage, je photographie avec l\'œil et le cœur.',              link:'photo.html',            color:'#d4a853' },
  { id:'video',   title:'Vidéo',             desc:'Réels, documentaires, corporate — je maîtrise tout le processus de production vidéo.',       link:'video.html',            color:'#5ab4d4' },
  { id:'cm',      title:'Community Manager', desc:'Stratégie éditoriale, gestion de communautés, croissance organique sur tous les réseaux.',   link:'community-manager.html',color:'#b87fc4' },
  { id:'webdev',  title:'Développement Web', desc:'Sites vitrines, portfolios, landing pages — du design au déploiement, clé en main.',         link:'web-dev.html',          color:'#5abdb5' },
  { id:'voyage',  title:'Voyage & Aventure', desc:'Road trips, treks, destinations hors des sentiers battus, documentés avec honnêteté.',       link:'voyage.html',           color:'#72b87a' },
  { id:'content', title:'Création de Contenu','desc':'UGC, personal branding, stratégie de contenu multiformat pour construire une audience.',  link:'creation-contenu.html', color:'#d47a5a' },
  { id:'writing', title:'Écriture',          desc:'Articles, scripts, copywriting, storytelling — les mots au service de votre message.',       link:'ecriture.html',         color:'#c47a8f' },
];

/* SVG silhouette — standing casual pose */
function silSVG() {
  return `<svg class="fig-svg" viewBox="0 0 60 160" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="12" rx="11" ry="11"/>
    <rect x="25" y="22" width="10" height="7" rx="3"/>
    <path d="M11 29 Q30 35 49 29 L53 90 Q30 96 7 90 Z"/>
    <path d="M11 31 L3 78 Q3 85 13 83 L19 37 Z"/>
    <path d="M49 31 L57 78 Q57 85 47 83 L41 37 Z"/>
    <path d="M13 88 L9 150 Q9 157 21 157 L25 97 Z"/>
    <path d="M47 88 L51 150 Q51 157 39 157 L35 97 Z"/>
  </svg>`;
}

/* =============================================
   SILHOUETTE CAROUSEL
   ============================================= */
class SilCarousel {
  constructor() {
    this.wrap  = document.querySelector('.sil-carousel-wrap');
    if (!this.wrap) return;

    this.total   = SERVICES.length;
    this.current = 0;
    this.items   = [];

    this.titleEl = document.getElementById('sil-title');
    this.descEl  = document.getElementById('sil-desc');
    this.ctaEl   = document.getElementById('sil-cta');
    this.dotsEl  = document.querySelector('.sil-dots');

    this._build();
    this._buildDots();
    this._bind();
    this._render(false);
  }

  _build() {
    SERVICES.forEach((s, i) => {
      const el = document.createElement('div');
      el.className = 'sil-item';
      el.dataset.index = i;
      el.innerHTML = silSVG();
      el.addEventListener('click', () => {
        if (i === this.current) window.location.href = s.link;
        else this.goTo(i);
      });
      this.wrap.appendChild(el);
      this.items.push(el);
    });
  }

  _buildDots() {
    if (!this.dotsEl) return;
    this.dots = SERVICES.map((_, i) => {
      const d = document.createElement('div');
      d.className = 'sil-dot';
      d.addEventListener('click', () => this.goTo(i));
      this.dotsEl.appendChild(d);
      return d;
    });
  }

  _bind() {
    document.querySelector('.sil-btn.prev')?.addEventListener('click', () => this.prev());
    document.querySelector('.sil-btn.next')?.addEventListener('click', () => this.next());

    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft')  this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    let sx = 0;
    this.wrap.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
    this.wrap.addEventListener('touchend',   e => {
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 40) dx > 0 ? this.prev() : this.next();
    }, { passive: true });
  }

  goTo(i) { this.current = ((i % this.total) + this.total) % this.total; this._render(true); }
  prev()   { this.goTo(this.current - 1); }
  next()   { this.goTo(this.current + 1); }

  _render(animate) {
    const n = this.total, cur = this.current;

    // Rail config per distance from center
    const STEP = 150; // px between item centres
    const CFG = [
      { h: 280, w: 118, op: 1.00 },  // 0  — active
      { h: 210, w: 88,  op: 0.55 },  // ±1
      { h: 158, w: 66,  op: 0.28 },  // ±2
      { h: 118, w: 48,  op: 0.12 },  // ±3
    ];
    const T = animate
      ? 'transform 0.52s cubic-bezier(0.4,0,0.2,1), opacity 0.45s ease, height 0.45s ease, width 0.45s ease, color 0.45s ease'
      : 'none';

    this.items.forEach((el, i) => {
      let raw = i - cur;
      if (raw >  Math.floor(n / 2)) raw -= n;
      if (raw < -Math.floor(n / 2)) raw += n;

      const abs = Math.abs(raw);

      el.style.transition = T;

      if (abs > 3) {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        return;
      }

      const c = CFG[abs];
      el.style.height        = `${c.h}px`;
      el.style.width         = `${c.w}px`;
      el.style.opacity       = c.op;
      el.style.zIndex        = 10 - abs;
      el.style.pointerEvents = abs <= 2 ? 'auto' : 'none';
      el.style.transform     = `translateX(calc(-50% + ${raw * STEP}px))`;
      el.style.color         = abs === 0 ? SERVICES[i].color : 'rgba(240,237,232,0.75)';
    });

    this._updateInfo();
    this._updateDots();
  }

  _updateInfo() {
    const s = SERVICES[this.current];
    if (!this.titleEl) return;
    this.titleEl.style.opacity = '0';
    this.descEl.style.opacity  = '0';
    setTimeout(() => {
      this.titleEl.textContent = s.title;
      this.titleEl.style.color = s.color;
      this.descEl.textContent  = s.desc;
      this.ctaEl.href          = s.link;
      this.titleEl.style.opacity = '1';
      this.descEl.style.opacity  = '1';
    }, 200);
  }

  _updateDots() {
    if (!this.dots) return;
    this.dots.forEach((d, i) => d.classList.toggle('active', i === this.current));
  }
}

/* =============================================
   SCROLL REVEAL
   ============================================= */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  if (document.querySelector('.sil-carousel-wrap')) new SilCarousel();
});
