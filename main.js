/* =============================================
   NAVIGATION — mobile burger
   ============================================= */
function initNav() {
  const burger = document.querySelector('.nav-burger');
  const links  = document.querySelector('.nav-links');
  if (!burger) return;

  burger.addEventListener('click', () => {
    links.classList.toggle('open');
    const spans = burger.querySelectorAll('span');
    const isOpen = links.classList.contains('open');
    spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity   = isOpen ? '0' : '1';
    spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
  }));
}

/* =============================================
   FIGURINE CAROUSEL
   ============================================= */
const SERVICES = [
  {
    id:      'photo',
    title:   'Photographie',
    tag:     'Capturer l\'instant',
    desc:    'De la photo de portrait à la photo de paysage, chaque cliché raconte une histoire. Je travaille avec un œil pour la lumière, la composition et l\'émotion.',
    icon:    '📷',
    color:   '#f5a623',
    link:    'photo.html',
    bg:      'linear-gradient(160deg, rgba(245,166,35,0.25) 0%, rgba(245,166,35,0.05) 100%)',
  },
  {
    id:      'video',
    title:   'Vidéo',
    tag:     'Motion & Cinéma',
    desc:    'Tournage, montage, motion design — je crée des vidéos qui captivent, de la courte vidéo sociale au mini-documentaire.',
    icon:    '🎬',
    color:   '#4fc3f7',
    link:    'video.html',
    bg:      'linear-gradient(160deg, rgba(79,195,247,0.25) 0%, rgba(79,195,247,0.05) 100%)',
  },
  {
    id:      'cm',
    title:   'Community Manager',
    tag:     'Social & Stratégie',
    desc:    'Gestion de communautés, stratégie éditoriale, croissance organique. Je fais vivre vos réseaux sociaux avec authenticité et régularité.',
    icon:    '📱',
    color:   '#ce93d8',
    link:    'community-manager.html',
    bg:      'linear-gradient(160deg, rgba(206,147,216,0.25) 0%, rgba(206,147,216,0.05) 100%)',
  },
  {
    id:      'webdev',
    title:   'Développement Web',
    tag:     'Code & Design',
    desc:    'Sites vitrines, portfolios, landing pages — je conçois des interfaces propres, rapides et efficaces, du design à la mise en ligne.',
    icon:    '💻',
    color:   '#80cbc4',
    link:    'web-dev.html',
    bg:      'linear-gradient(160deg, rgba(128,203,196,0.25) 0%, rgba(128,203,196,0.05) 100%)',
  },
  {
    id:      'voyage',
    title:   'Voyage & Aventure',
    tag:     'Explorer le monde',
    desc:    'Road trips, treks, destinations hors des sentiers battus. Je documente chaque aventure avec honnêteté et passion.',
    icon:    '✈️',
    color:   '#a5d6a7',
    link:    'voyage.html',
    bg:      'linear-gradient(160deg, rgba(165,214,167,0.25) 0%, rgba(165,214,167,0.05) 100%)',
  },
  {
    id:      'content',
    title:   'Création de Contenu',
    tag:     'Créer & Inspirer',
    desc:    'Stratégie de contenu, UGC, personal branding — je crée des contenus qui génèrent de l\'engagement et construisent une audience.',
    icon:    '🎨',
    color:   '#ff8a65',
    link:    'creation-contenu.html',
    bg:      'linear-gradient(160deg, rgba(255,138,101,0.25) 0%, rgba(255,138,101,0.05) 100%)',
  },
  {
    id:      'writing',
    title:   'Écriture',
    tag:     'Mots & Sens',
    desc:    'Articles, scripts, copywriting, storytelling — je mets les mots au service de votre message avec clarté et style.',
    icon:    '✍️',
    color:   '#f48fb1',
    link:    'ecriture.html',
    bg:      'linear-gradient(160deg, rgba(244,143,177,0.25) 0%, rgba(244,143,177,0.05) 100%)',
  },
];

class FigurineCarousel {
  constructor(containerEl) {
    this.container = containerEl;
    this.current   = 0;
    this.total     = SERVICES.length;
    this.isAnimating = false;

    this.track = containerEl.querySelector('.carousel-track');
    this.dotsContainer = document.querySelector('.carousel-dots');
    this.titleEl = document.getElementById('active-title');
    this.descEl  = document.getElementById('active-desc');
    this.ctaEl   = document.getElementById('active-cta');

    this._buildCards();
    this._buildDots();
    this._bindEvents();
    this.goTo(0, false);
  }

  _buildCards() {
    this.cards = SERVICES.map((s, i) => {
      const card = document.createElement('div');
      card.className  = 'figurine-card';
      card.dataset.index = i;
      card.innerHTML = `
        <div class="card-top" style="background: ${s.bg}">
          <div class="placeholder-silhouette">
            <div class="figurine-icon">${s.icon}</div>
            <div class="silhouette-shape" style="border-color: ${s.color}44">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${s.color}" stroke-width="1.5" opacity="0.6">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="card-title">${s.title}</div>
          <div class="card-tag">${s.tag}</div>
        </div>
      `;
      card.style.setProperty('--card-color', s.color);

      card.addEventListener('click', () => {
        if (i === this.current) {
          window.location.href = s.link;
        } else {
          this.goTo(i);
        }
      });

      this.track.appendChild(card);
      return card;
    });
  }

  _buildDots() {
    if (!this.dotsContainer) return;
    this.dots = SERVICES.map((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'carousel-dot';
      dot.addEventListener('click', () => this.goTo(i));
      this.dotsContainer.appendChild(dot);
      return dot;
    });
  }

  _bindEvents() {
    document.querySelector('.carousel-btn.prev')?.addEventListener('click', () => this.prev());
    document.querySelector('.carousel-btn.next')?.addEventListener('click', () => this.next());

    // Keyboard navigation
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft')  this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    // Touch / swipe
    let startX = 0;
    this.container.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    this.container.addEventListener('touchend',   e => {
      const delta = e.changedTouches[0].clientX - startX;
      if (Math.abs(delta) > 40) delta > 0 ? this.prev() : this.next();
    }, { passive: true });
  }

  goTo(index, animate = true) {
    this.current = ((index % this.total) + this.total) % this.total;
    this._updatePositions(animate);
    this._updateInfo();
    this._updateDots();
  }

  prev() { this.goTo(this.current - 1); }
  next() { this.goTo(this.current + 1); }

  _updatePositions(animate) {
    const total    = this.total;
    const current  = this.current;
    // Layout config: how far each offset position sits
    const positions = {
      0:  { x:    0, z:  0,    scale: 1,    opacity: 1,    blur: 0 },
      1:  { x:  220, z: -80,   scale: 0.82, opacity: 0.75, blur: 0 },
      2:  { x:  410, z: -160,  scale: 0.65, opacity: 0.45, blur: 2 },
      3:  { x:  560, z: -240,  scale: 0.5,  opacity: 0.2,  blur: 4 },
    };

    this.cards.forEach((card, i) => {
      const raw    = i - current;
      const offset = ((raw + total) % total);
      // Map offset: 0=center, 1=right1, 2=right2, total-1=left1, total-2=left2...
      let absOff, sign;
      if (offset === 0) {
        absOff = 0; sign = 1;
      } else if (offset <= Math.floor(total / 2)) {
        absOff = offset; sign = 1;
      } else {
        absOff = total - offset; sign = -1;
      }

      const pos = positions[Math.min(absOff, 3)];
      const x   = pos.x * sign;

      card.style.transition = animate ? 'transform 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.6s ease, filter 0.6s ease' : 'none';
      card.style.transform  = `translateX(${x}px) translateZ(${pos.z}px) scale(${pos.scale})`;
      card.style.opacity    = pos.opacity;
      card.style.filter     = pos.blur ? `blur(${pos.blur}px)` : '';
      card.style.zIndex     = 10 - absOff;
      card.style.pointerEvents = absOff > 2 ? 'none' : 'auto';
      card.classList.toggle('is-active', i === current);
    });
  }

  _updateInfo() {
    const s = SERVICES[this.current];
    if (!this.titleEl || !this.descEl || !this.ctaEl) return;

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
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity    = '1';
        e.target.style.transform  = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollReveal();

  const stage = document.querySelector('.carousel-stage');
  if (stage) {
    window._carousel = new FigurineCarousel(stage);
  }
});
