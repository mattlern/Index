/* =============================================
   PROJECTS DATA — shared across all pages
   ============================================= */
const PROJECTS = [

  /* ── PHOTO ── */
  {
    id: 'ph-soiree-gala',
    title: 'Soirée Gala 2024',
    services: ['photo'],
    tags: ['Événement', 'Portrait'],
    desc: 'Couverture complète d\'une soirée de gala parisienne. Portraits spontanés, ambiance feutrée, moments forts immortalisés avec discrétion.',
    icon: '🎉',
    images: [], videos: []
  },
  {
    id: 'ph-mariage-thomas-lea',
    title: 'Mariage — Thomas & Léa',
    services: ['photo'],
    tags: ['Mariage', 'Reportage'],
    desc: 'Reportage photo complet du jour J, de la préparation matinale à la soirée. Un regard sincère sur une journée unique.',
    icon: '💍',
    images: [], videos: []
  },
  {
    id: 'ph-portrait-corporate',
    title: 'Portraits Corporate — Studio',
    services: ['photo'],
    tags: ['Portrait', 'Corporate'],
    desc: 'Séance portrait corporate pour une équipe de 15 personnes. Studio, lumières naturelles, ambiance professionnelle et authentique.',
    icon: '👤',
    images: [], videos: []
  },
  {
    id: 'ph-alpes-golden',
    title: 'Alpes — Golden Hour',
    services: ['photo'],
    tags: ['Paysage', 'Nature'],
    desc: 'Randonnée et photographie dans les Alpes françaises. Lumières d\'aurore, longues expositions, sommets enneigés.',
    icon: '🏔️',
    images: [], videos: []
  },

  /* ── VIDÉO ── */
  {
    id: 'vi-reels-lifestyle',
    title: 'Réels — Marque Lifestyle',
    services: ['video'],
    tags: ['Réels', 'Instagram'],
    desc: 'Série de 12 réels pour une marque lifestyle parisienne. Direction artistique complète, musique licensiée, +200K vues cumulées.',
    icon: '📱',
    images: [], videos: []
  },
  {
    id: 'vi-doc-artisan',
    title: 'Mini-doc — Artisan du bois',
    services: ['video'],
    tags: ['Documentaire', 'Portrait'],
    desc: 'Portrait filmé d\'un ébéniste normand. 8 minutes de narration pure, sans commentaire, juste les gestes et les sons de l\'atelier.',
    icon: '🎞️',
    images: [], videos: []
  },
  {
    id: 'vi-clip-artiste',
    title: 'Clip — Artiste Indépendant',
    services: ['video', 'photo'],
    tags: ['Clip', 'Direction artistique'],
    desc: 'Clip musical pour un artiste indépendant. 2 jours de tournage, 1 semaine de montage. Direction artistique et réalisation.',
    icon: '🎵',
    images: [], videos: []
  },

  /* ── COMMUNITY MANAGER ── */
  {
    id: 'cm-insta-mode',
    title: 'Instagram — Marque Mode',
    services: ['cm'],
    tags: ['Instagram', 'Mode'],
    desc: 'Gestion complète d\'un compte mode. Stratégie éditoriale, création de contenu, modération. +8 000 abonnés en 6 mois.',
    icon: '📸',
    images: [], videos: []
  },
  {
    id: 'cm-linkedin-ceo',
    title: 'Personal Brand — CEO',
    services: ['cm', 'writing'],
    tags: ['LinkedIn', 'B2B'],
    desc: 'Stratégie de contenu LinkedIn pour un dirigeant du secteur tech. 200 000 impressions/mois en 4 mois.',
    icon: '💼',
    images: [], videos: []
  },
  {
    id: 'cm-campagne-app',
    title: 'Lancement — Application Mobile',
    services: ['cm', 'content'],
    tags: ['Lancement', 'Multi-plateforme'],
    desc: 'Campagne de lancement pour une application mobile B2C. 3 plateformes, 6 semaines de campagne, 15 000 téléchargements.',
    icon: '📣',
    images: [], videos: []
  },

  /* ── DÉVELOPPEMENT WEB ── */
  {
    id: 'web-restaurant',
    title: 'Site — Restaurant Gastronomique',
    services: ['webdev'],
    tags: ['Site vitrine', 'Gastronomie'],
    desc: 'Site vitrine pour un restaurant étoilé. Réservations en ligne, menus interactifs, galerie photo. 100% sur mesure.',
    icon: '🌐',
    images: [], videos: []
  },
  {
    id: 'web-portfolio-photo',
    title: 'Portfolio — Photographe Mode',
    services: ['webdev'],
    tags: ['Portfolio', 'Créatif'],
    desc: 'Portfolio sur mesure pour une photographe de mode. Animations fluides, galerie plein écran, optimisé mobile.',
    icon: '📁',
    images: [], videos: []
  },
  {
    id: 'web-landing-saas',
    title: 'Landing Page — SaaS B2B',
    services: ['webdev'],
    tags: ['Landing page', 'Conversion'],
    desc: 'Page de conversion pour un SaaS B2B. Tests A/B, copywriting, optimisation. +34% de taux de conversion en 3 mois.',
    icon: '🚀',
    images: [], videos: []
  },

  /* ── VOYAGE ── */
  {
    id: 'vo-ecosse',
    title: 'Road Trip — Écosse',
    services: ['voyage', 'photo'],
    tags: ['Road trip', 'Europe'],
    desc: '14 jours à travers les Highlands écossais en van. Pluie, pubs, lochs et lumières nordiques. Un voyage hors du temps.',
    icon: '🏔️',
    images: [], videos: []
  },
  {
    id: 'vo-nepal-trek',
    title: 'Trek — Circuit Annapurna',
    services: ['voyage', 'photo', 'video'],
    tags: ['Trek', 'Asie'],
    desc: 'Circumnavigation du massif des Annapurnas. 21 jours, 4500m d\'altitude max. Photos, vidéos et carnet de route.',
    icon: '🌿',
    images: [], videos: []
  },
  {
    id: 'vo-surf-portugal',
    title: 'Surf Trip — Portugal',
    services: ['voyage', 'photo'],
    tags: ['Surf', 'Outdoor'],
    desc: 'Road trip surf sur les spots de la côte ouest portugaise. Vagues, lumières d\'automne, liberté.',
    icon: '🏄',
    images: [], videos: []
  },

  /* ── CRÉATION DE CONTENU ── */
  {
    id: 'co-ugc-beaute',
    title: 'UGC — Marque Beauté',
    services: ['content'],
    tags: ['UGC', 'Beauté'],
    desc: '12 vidéos UGC pour une marque de cosmétiques naturels. Unboxing, reviews, démos produit. Tons chaleureux et authentiques.',
    icon: '✨',
    images: [], videos: []
  },
  {
    id: 'co-brand-coach',
    title: 'Personal Brand — Coach Sportif',
    services: ['content', 'writing'],
    tags: ['Personal brand', 'Coaching'],
    desc: 'Construction complète d\'une identité de contenu pour un coach sportif. Ligne éditoriale, templates, 3 mois de contenu planifié.',
    icon: '🏷️',
    images: [], videos: []
  },
  {
    id: 'co-serie-youtube',
    title: 'Série YouTube — No-code Tools',
    services: ['content', 'video'],
    tags: ['Série', 'YouTube'],
    desc: 'Série de 10 épisodes sur les outils no-code. Écriture, tournage, montage, miniatures. 15 000 vues par épisode.',
    icon: '🎬',
    images: [], videos: []
  },

  /* ── ÉCRITURE ── */
  {
    id: 'wr-articles-voyage',
    title: 'Articles — Revue de Voyage',
    services: ['writing'],
    tags: ['Article', 'Voyage'],
    desc: 'Série de 8 articles pour une revue de voyage indépendante. Récits d\'immersion, portraits de destinations, conseils pratiques.',
    icon: '📰',
    images: [], videos: []
  },
  {
    id: 'wr-scripts-youtube',
    title: 'Scripts — Chaîne YouTube Lifestyle',
    services: ['writing', 'video'],
    tags: ['Script', 'YouTube'],
    desc: '20 scripts pour une chaîne YouTube lifestyle. Format 10-15 min, ton conversationnel. 50 000 vues/vidéo en moyenne.',
    icon: '✍️',
    images: [], videos: []
  },
  {
    id: 'wr-copy-ecommerce',
    title: 'Copywriting — E-commerce Mode',
    services: ['writing'],
    tags: ['Copywriting', 'E-commerce'],
    desc: 'Refonte des textes d\'un site e-commerce mode. Fiches produits, pages catégories, emails marketing. +22% de conversion.',
    icon: '💼',
    images: [], videos: []
  },

];

/* Map service id → label */
const SERVICE_LABELS = {
  photo:   'Photo',
  video:   'Vidéo',
  cm:      'Community Manager',
  webdev:  'Web',
  voyage:  'Voyage',
  content: 'Contenu',
  writing: 'Écriture',
};
