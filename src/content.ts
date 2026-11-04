import type { Content, Lang } from "@/types";

const linkedin = "https://www.linkedin.com/in/souhaib-ferdjallah-ba1b40278";
const email = "souhaibfr07@gmail.com";

const fr: Content = {
  meta: {
    title: "Souhaib Ferdjallah — Logistique, flotte & outils métier",
    description:
      "Spécialiste du suivi de flotte et de la logistique. Analyse de données, contrôle des opérations de transport et développement d'outils métier.",
  },
  a11y: {
    skipToContent: "Aller au contenu",
  },
  header: {
    name: "Souhaib",
    role: "Suivi de flotte & carburant",
  },
  nav: {
    langLabel: "Changer de langue",
    themeLabel: "Changer de thème",
  },
  panels: {
    aboutBtn: "À propos",
    contactBtn: "Contact",
    close: "Fermer",
  },
  about: {
    title: "À propos",
    paragraphs: [
      "Professionnel de la logistique titulaire d'un Master en Finance et Commerce International et d'une Licence en Commerce International et Logistique. Mon expérience opérationnelle couvre le suivi de flotte, l'analyse des données de consommation de carburant et le contrôle des opérations de transport.",
      "Développeur autodidacte, je m'appuie sur les outils d'intelligence artificielle pour concevoir des applications métier qui répondent à des besoins concrets. J'ai créé Prism, une plateforme de suivi de flotte et de vérification des itinéraires intégrant la détection des anomalies de consommation et des suspicions de vol de carburant.",
    ],
  },
  experience: {
    title: "Expérience",
    items: [
      {
        role: "Spécialiste du suivi de flotte et de la logistique",
        org: "OMD Transports & Logistics",
        context: "Opérations de transport Ciment",
        location: "Boumerdès, Algérie",
        period: "Septembre 2025 – Présent",
        bullets: [
          "Suivi des opérations de flotte et exploitation des données télématiques des véhicules.",
          "Contrôle des transactions de carburant, des relevés kilométriques et des données de consommation.",
          "Analyse des écarts et identification des anomalies nécessitant une vérification opérationnelle.",
          "Développement de solutions numériques pour améliorer le suivi, l'analyse et l'automatisation des processus métier.",
        ],
      },
      {
        role: "Opérateur",
        org: "Monopipe",
        location: "Ouled Moussa, Boumerdès",
        period: "Février – Septembre 2025",
        bullets: [],
      },
      {
        role: "Enseignant en école primaire",
        org: "Ministère de l'Éducation",
        context: "Contrat temporaire",
        location: "Khemis El Khechna, Algérie",
        period: "Janvier – Juillet 2024",
        bullets: [
          "Planification et enseignement des matières clés à plus de 30 élèves, avec une adaptation constante aux besoins pédagogiques individuels.",
          "Création d'activités interactives ayant amélioré la participation en classe de 40 %.",
          "Développement des compétences en communication, organisation et gestion des priorités.",
        ],
      },
      {
        role: "Analyste de la fraude commerciale",
        org: "Ministère du Commerce et de la Promotion des Exportations",
        location: "Boumerdès, Algérie",
        period: "Septembre 2022 – Juillet 2023",
        bullets: [
          "Participation active à des enquêtes de fraude commerciale.",
          "Analyse de plus de 200 dossiers, contribuant à une meilleure surveillance du marché local.",
          "Observation des mécanismes de contrôle et d'application de la réglementation commerciale.",
        ],
      },
      {
        role: "Spécialiste du département logistique",
        org: "SARL BPI-ENH DOUDAH (Import/Export)",
        location: "Alger, Algérie",
        period: "Septembre 2021 – Mai 2022",
        bullets: [
          "Préparation et vérification des documents d'import-export.",
          "Assistance aux opérations logistiques et aux procédures douanières.",
          "Coordination avec l'équipe pour le suivi des expéditions.",
        ],
      },
    ],
  },
  skills: {
    title: "Compétences",
    intro:
      "Trois axes complémentaires : les opérations, la donnée, et les outils qui les relient.",
    groups: [
      {
        name: "Logistique et opérations",
        items: [
          "Suivi de flotte et données télématiques",
          "Analyse de la consommation de carburant",
          "Contrôle des données opérationnelles",
          "Analyse de la fraude commerciale",
          "Documentation import-export et procédures douanières",
        ],
      },
      {
        name: "Données et automatisation",
        items: [
          "Excel et Google Sheets",
          "Looker",
          "Nettoyage et structuration de données",
          "Tableaux de bord et reporting opérationnel",
          "Automatisation de processus métier",
        ],
      },
      {
        name: "Développement assisté par IA",
        items: [
          "Applications web avec outils d'IA",
          "Next.js, TypeScript et React",
          "PostgreSQL et Supabase",
          "Intégration d'API et de services externes",
          "Conception fonctionnelle, tests et itération",
        ],
      },
    ],
  },
  projects: {
    title: "Projets",
    intro:
      "Des outils construits pour résoudre des problèmes rencontrés sur le terrain.",
    nextLabel: "Projet suivant",
    backLabel: "Retour à l'index",
    techLabel: "Techniquement",
    items: [
      {
        name: "Prism",
        slug: "prism",
        tag: "Projet phare",
        accent: "#1e3a8a",
        context: "[Suivi de flotte, consommation et anomalies]",
        description:
          "Plateforme de suivi et d'intelligence de flotte conçue pour remplacer l'application télématique existante : suivi GPS, vérification des itinéraires, surveillance opérationnelle et détection des anomalies de consommation et des suspicions de vol de carburant.",
        story: [
          "Prism est né d'un problème récurrent : le carburant déclaré ne correspondait pas aux tournées réelles. Les relevés arrivaient dans des fichiers séparés, les écarts ne se voyaient que des semaines plus tard, trop tard pour poser la bonne question.",
          "La plateforme réunit aujourd'hui le suivi live sur des couches cartographiques PostGIS, la vérification des itinéraires, les tableaux de bord de consommation et la détection d'anomalies qui traite une chute soudaine de carburant comme une question, pas comme un accident. Elle remplace l'outil télématique précédent, géré de bout en bout en interne.",
        ],
        tech: [
          "Next.js",
          "TypeScript",
          "Supabase",
          "PostgreSQL/PostGIS",
          "Leaflet",
          "Chart.js",
          "Wialon",
        ],
        image: "/projects/prism.png",
        imageAlt: "Aperçu de la plateforme Prism",
      },
      {
        name: "Naftal Fleet",
        slug: "naftal-fleet",
        tag: "Outil métier",
        accent: "#9a3412",
        context: "[Cartes carburant et échéances]",
        description:
          "Outil de gestion et de suivi des cartes carburant : structuration des données des cartes, des véhicules et des échéances, avec suivi des dates d'expiration et des renouvellements.",
        story: [
          "Les cartes carburant génèrent des plafonds, des dates limites et des renouvellements faciles à perdre entre plusieurs fichiers. Une échéance oubliée peut bloquer un véhicule tout un mois.",
          "L'outil structure cartes, véhicules et échéances en un seul endroit : dates d'expiration visibles d'un coup d'œil, rappels simples et historique propre. Moins de papier, moins de trous.",
        ],
        tech: ["Python", "HTML / JS", "Gestion de données"],
        image: "/projects/naftal-fleet.svg",
        imageAlt: "Aperçu de l'outil Naftal Fleet",
      },
      {
        name: "Tafweej",
        slug: "tafweej",
        tag: "Application",
        accent: "#166534",
        context: "[Paiements, dépenses et commissions]",
        description:
          "Application de gestion de centre éducatif : élèves, paiements, dépenses et commissions des enseignants, avec une interface multilingue arabe et un affichage RTL.",
        story: [
          "Gérer un centre éducatif, c'est suivre les élèves, les paiements, les dépenses et les commissions des enseignants sans se noyer dans les cahiers.",
          "Tafweej rassemble tout : suivi des paiements et des commissions, calculs automatiques, interface multilingue arabe avec support RTL, pensée pour un usage quotidien.",
        ],
        tech: ["Next.js", "TypeScript", "Supabase", "Prisma", "Tailwind CSS"],
        image: "/projects/tafweej.svg",
        imageAlt: "Aperçu de l'application Tafweej",
      },
    ],
  },
  education: {
    title: "Formation",
    items: [
      {
        degree: "Master en Finance et Commerce International",
        school: "Université M'Hamed Bougara de Boumerdès",
        period: "Septembre 2021 – Mai 2023",
      },
      {
        degree: "Licence en Commerce International et Logistique",
        school: "Université M'Hamed Bougara de Boumerdès",
        period: "Septembre 2018 – Juin 2021",
      },
      {
        degree: "Baccalauréat en Économie et Gestion",
        school: "Lycée Djanati Ali",
        period: "Septembre 2015 – Juillet 2018",
      },
    ],
    languagesTitle: "Langues",
    languages: [
      { name: "Arabe", level: "Langue maternelle" },
      { name: "Anglais", level: "Courant" },
      {
        name: "Français",
        level: "Lecture et écriture avancées ; expression orale intermédiaire",
      },
    ],
  },
  contact: {
    title: "Discutons",
    text: "Une question, une opportunité ou un projet à discuter ? Écrivez-moi ou retrouvez-moi sur LinkedIn.",
    email,
    linkedin,
    location: "Boumerdès, Algérie",
  },
  footer: {
    rights: "Tous droits réservés.",
    themeLight: "Clair",
    themeDark: "Sombre",
  },
};

const en: Content = {
  meta: {
    title: "Souhaib Ferdjallah — Fleet & Logistics Monitoring Specialist",
    description:
      "Fleet and logistics monitoring specialist. Data analysis, transport operations control and custom business tooling.",
  },
  a11y: {
    skipToContent: "Skip to content",
  },
  header: {
    name: "Souhaib",
    role: "Fleet & fuel monitoring",
  },
  nav: {
    langLabel: "Switch language",
    themeLabel: "Switch theme",
  },
  panels: {
    aboutBtn: "About",
    contactBtn: "Contact",
    close: "Close",
  },
  about: {
    title: "About",
    paragraphs: [
      "Logistics professional with a Master's in Finance and International Trade and a Bachelor's in International Trade and Logistics. My operational experience spans fleet monitoring, fuel consumption analysis and transport operations control.",
      "A self-taught developer, I use AI tooling to build business applications that solve concrete operational needs. I created Prism, a fleet monitoring and route verification platform with built-in detection of consumption anomalies and suspected fuel theft.",
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Fleet & Logistics Monitoring Specialist",
        org: "OMD Transports & Logistics",
        context: "Cement transport operations",
        location: "Boumerdès, Algeria",
        period: "September 2025 – Present",
        bullets: [
          "Monitored fleet operations and worked with vehicle telematics data.",
          "Controlled fuel transactions, mileage readings and consumption data.",
          "Analysed variances and identified anomalies requiring operational verification.",
          "Built digital solutions to improve monitoring, analysis and business process automation.",
        ],
      },
      {
        role: "Operator",
        org: "Monopipe",
        location: "Ouled Moussa, Algeria",
        period: "February – September 2025",
        bullets: [],
      },
      {
        role: "Primary School Teacher",
        org: "Ministry of Education",
        context: "Temporary contract",
        location: "Khemis El Khechna, Algeria",
        period: "January – July 2024",
        bullets: [
          "Planned and taught core subjects to 30+ students, adapting continuously to individual learning needs.",
          "Created interactive activities that improved classroom participation by 40%.",
          "Developed communication, organisation and prioritisation skills.",
        ],
      },
      {
        role: "Commercial Fraud Analyst",
        org: "Ministry of Trade and Export Promotion",
        location: "Boumerdès, Algeria",
        period: "September 2022 – July 2023",
        bullets: [
          "Contributed actively to commercial fraud investigations.",
          "Analysed 200+ case files, supporting better monitoring of the local market.",
          "Observed regulatory control and enforcement mechanisms.",
        ],
      },
      {
        role: "Logistics Department Specialist",
        org: "SARL BPI-ENH DOUDAH (Import/Export)",
        location: "Algiers, Algeria",
        period: "September 2021 – May 2022",
        bullets: [
          "Prepared and verified import-export documents.",
          "Assisted with logistics operations and customs procedures.",
          "Coordinated with the team to track shipments.",
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    intro:
      "Three complementary areas: operations, data, and the tools that connect them.",
    groups: [
      {
        name: "Logistics & operations",
        items: [
          "Fleet monitoring and telematics data",
          "Fuel consumption analysis",
          "Operational data control",
          "Commercial fraud analysis",
          "Import-export documentation and customs procedures",
        ],
      },
      {
        name: "Data & automation",
        items: [
          "Excel and Google Sheets",
          "Looker",
          "Data cleaning and structuring",
          "Dashboards and operational reporting",
          "Business process automation",
        ],
      },
      {
        name: "AI-assisted development",
        items: [
          "Web applications with AI tooling",
          "Next.js, TypeScript and React",
          "PostgreSQL and Supabase",
          "API and third-party service integration",
          "Functional design, testing and iteration",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    intro: "Tools built to solve problems I ran into in the field.",
    nextLabel: "Next project",
    backLabel: "Back to index",
    techLabel: "Stack",
    items: [
      {
        name: "Prism",
        slug: "prism",
        tag: "Flagship project",
        accent: "#1e3a8a",
        context: "[Fleet tracking, consumption and anomalies]",
        description:
          "Fleet monitoring and intelligence platform designed to replace the existing telematics application: GPS tracking, route verification, operational monitoring and detection of consumption anomalies and suspected fuel theft.",
        story: [
          "Prism started from a recurring problem: the fuel declared never matched the routes actually driven. Readings arrived in separate files, variances surfaced weeks later, far too late to ask the right question.",
          "The platform now brings together live tracking on PostGIS map layers, route verification, consumption dashboards and anomaly detection that treats a sudden fuel drop as a question, not an accident. It replaces the previous telematics tool, managed end to end internally.",
        ],
        tech: [
          "Next.js",
          "TypeScript",
          "Supabase",
          "PostgreSQL/PostGIS",
          "Leaflet",
          "Chart.js",
          "Wialon",
        ],
        image: "/projects/prism.png",
        imageAlt: "Prism platform preview",
      },
      {
        name: "Naftal Fleet",
        slug: "naftal-fleet",
        tag: "Business tool",
        accent: "#9a3412",
        context: "[Fuel cards and deadlines]",
        description:
          "Fuel card management and tracking tool: structured card, vehicle and deadline data, with visibility on expiry dates and renewals.",
        story: [
          "Fuel cards generate limits, deadlines and renewals that are easy to lose between files. One missed renewal can ground a vehicle for a month.",
          "The tool structures cards, vehicles and deadlines in one place: expiry dates visible at a glance, simple reminders, clean history. Less paper, fewer gaps.",
        ],
        tech: ["Python", "HTML / JS", "Data management"],
        image: "/projects/naftal-fleet.svg",
        imageAlt: "Naftal Fleet tool preview",
      },
      {
        name: "Tafweej",
        slug: "tafweej",
        tag: "Application",
        accent: "#166534",
        context: "[Payments, expenses and commissions]",
        description:
          "Educational centre management application: students, payments, expenses and teacher commissions, with a multilingual Arabic interface and RTL support.",
        story: [
          "Running an educational centre means tracking students, payments, expenses and teacher commissions without drowning in notebooks.",
          "Tafweej brings it all together: payment and commission tracking, automatic calculations, a multilingual Arabic interface with RTL support, built for daily use.",
        ],
        tech: ["Next.js", "TypeScript", "Supabase", "Prisma", "Tailwind CSS"],
        image: "/projects/tafweej.svg",
        imageAlt: "Tafweej application preview",
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        degree: "Master's in Finance and International Trade",
        school: "M'Hamed Bougara University of Boumerdès",
        period: "September 2021 – May 2023",
      },
      {
        degree: "Bachelor's in International Trade and Logistics",
        school: "M'Hamed Bougara University of Boumerdès",
        period: "September 2018 – June 2021",
      },
      {
        degree: "Baccalaureate in Economics and Management",
        school: "Djanati Ali High School",
        period: "September 2015 – July 2018",
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Fluent" },
      {
        name: "French",
        level: "Advanced reading and writing; intermediate speaking",
      },
    ],
  },
  contact: {
    title: "Let's talk",
    text: "A question, an opportunity or a project to discuss? Send me an email or find me on LinkedIn.",
    email,
    linkedin,
    location: "Boumerdès, Algeria",
  },
  footer: {
    rights: "All rights reserved.",
    themeLight: "Light",
    themeDark: "Dark",
  },
};

export const content: Record<Lang, Content> = { fr, en };
