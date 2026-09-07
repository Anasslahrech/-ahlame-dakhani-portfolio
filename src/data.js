export const profile = {
  name: 'Ahlame Dakhani',
  role: "Ingénieure d'État en Développement Informatique",
  pitch:
    "Spécialisée en développement web Full Stack — back-end avec PHP/Laravel, front-end avec React. Rigoureuse et adaptable, je conçois des solutions performantes pour des équipes qui avancent vite.",
  email: 'dakhaniahlam3@gmail.com',
  phone: '07-61-78-38-62',
  location: 'Témara, Maroc',
  photo: '/src/assets/ahlame.jpg',
  gmailCompose:
    'https://mail.google.com/mail/?view=cm&fs=1&to=dakhaniahlam3@gmail.com&su=Opportunit%C3%A9%20professionnelle',
}

export const about = {
  text: [
    "Ingénieure d'État en Génie Informatique, je me suis construite sur le terrain : cinq expériences en entreprise avant même la fin de mon cycle d'ingénieur, sur des projets aussi différents qu'une gestion de parc d'engins, un stock d'urgence pour la Protection Civile ou un système d'achats multi-profils.",
    "Ce que je préfère : prendre un besoin métier flou et le transformer en outil que les équipes utilisent vraiment — rôles et permissions clairs, données fiables, tableaux de bord lisibles.",
  ],
  facts: [
    { label: 'Basée à', value: 'Témara, Maroc' },
    { label: 'Diplôme', value: "Ingénieure d'État, ISMAGI (2026)" },
    { label: 'Cœur de stack', value: 'Laravel · React.js' },
    { label: 'Disponibilité', value: 'À partir de juin 2026' },
  ],
}

export const experience = [
  {
    date: '08/2025 — 05/2026',
    role: 'Développeuse Web & Support de Gestion',
    org: 'Société de Travaux Routiers',
    items: [
      "Développement d'une application web interne pour la gestion du parc d'engins.",
      "Suivi des engins : affectation, contrôle de l'état opérationnel, pannes et maintenance.",
      'Gestion des devis, bons de commande et rapports financiers.',
      "Mise en place d'un système de planification et de suivi des présences.",
      "Structuration des données opérationnelles et assistance des équipes sur les outils numériques internes.",
    ],
  },
  {
    date: '05/2025 — 07/2025',
    role: 'Stagiaire Développeuse Web',
    org: 'Direction Générale de la Protection Civile',
    items: [
      "Développement d'une application de gestion des stocks d'urgence (Laravel, HTML, CSS, JavaScript).",
      "Implémentation de l'authentification, de la traçabilité, des alertes critiques et de la génération de rapports.",
    ],
  },
  {
    date: '06/2024 — 07/2024',
    role: 'Stagiaire Développeuse Web',
    org: 'WEBODROP',
    items: [
      'Développement de sites web sous Drupal : création et personnalisation de types de contenu.',
      'Suivi des tâches techniques du projet.',
    ],
  },
  {
    date: '03/2023 — 04/2023',
    role: 'Stagiaire Développeuse Full Stack',
    org: 'CHU Ibn Sina',
    items: [
      "Développement d'un site web interne avec React (front-end) et Laravel (back-end).",
      "Gestion des routes, de la base de données et de l'authentification.",
    ],
  },
]

export const project = {
  title: "SGDA — Système de Gestion des Demandes d'Achat",
  sub: "Projet de fin d'études · Application Web & Mobile",
  tag: 'PFE 2026',
  items: [
    'Application web multi-profils (React.js) et application mobile (React Native / Expo), connectées à un backend Laravel 11 via une API REST sécurisée.',
    "Gestion des demandes d'achat, commandes et approvisionnements de bout en bout.",
    'Rôles et permissions dédiés : administrateur, chef de chantier, magasinier, comptable, livreur.',
    'Suivi des livraisons, des paiements fournisseurs et des stocks.',
    'Géolocalisation GPS, notifications et signature numérique.',
    'Tableaux de bord et indicateurs de pilotage pour la direction.',
  ],
  stack: ['Laravel 11', 'React.js', 'React Native / Expo', 'API REST', 'MySQL', 'UML'],
}

export const videoProjects = [
  {
    title: 'SGDA — Démo application web',
    sub: "Gestion des demandes d'achat, rôles et tableaux de bord",
    video: '/videos/sgda-web.mp4',
    poster: '/videos/sgda-web-poster.jpg',
    stack: ['Laravel 11', 'React.js', 'MySQL'],
  },
  {
    title: 'SGDA — Démo application mobile',
    sub: 'Suivi des livraisons, notifications et signature numérique',
    video: '/videos/sgda-mobile.mp4',
    poster: '/videos/sgda-mobile-poster.jpg',
    stack: ['React Native', 'Expo', 'API REST'],
  },
  {
  title: "Stock d'urgence — Protection Civile",
  sub: 'Authentification, traçabilité, alertes critiques et rapports',
  video: '/videos/stock-urgence.mp4',
  poster: '/videos/stock-urgence-poster.jpg',
  stack: ['Laravel', 'React', 'JavaScript'],
},
]

export const skills = [
  {
    group: 'Langages & Frameworks',
    tags: [
      { name: 'PHP (Laravel)', icon: 'devicon-laravel-plain colored' },
      { name: 'JavaScript (React.js)', icon: 'devicon-react-original colored' },
      { name: 'Java (Spring Boot)', icon: 'devicon-spring-plain colored' },
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3 (Bootstrap)', icon: 'devicon-bootstrap-plain colored' },
    ],
  },
  {
    group: 'Données & CMS',
    tags: [
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'Modélisation UML', icon: null },
      { name: 'Drupal', icon: 'devicon-drupal-plain colored' },
    ],
  },
  {
    group: 'Outils & Méthodes',
    tags: [
      { name: 'Git / GitHub', icon: 'devicon-git-plain colored' },
      { name: 'Trello', icon: 'devicon-trello-plain colored' },
      { name: 'Agile / Scrum', icon: null },
    ],
  },
  {
    group: 'Langues',
    tags: [
      { name: 'Français', icon: null },
      { name: 'Arabe', icon: null },
      { name: 'Anglais', icon: null },
    ],
  },
]


export const education = [
  {
    year: '2023 — 2026',
    title: "Cycle d'ingénieur — Développement Informatique",
    org: "ISMAGI, reconnu par l'État — Diplôme d'Ingénieur d'État en Génie Informatique",
  },
  {
    year: '2021 — 2023',
    title: 'Technicien Spécialisé en Développement Digital — Option Web Full Stack',
    org: 'Institut Spécialisé de Technologies Appliquées (NTIC), Rabat - Hay Riad',
  },
]
