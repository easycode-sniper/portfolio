export type Lang = "fr" | "en";

export type NavItem = { label: string; href: string };

export type ExperienceItem = {
  role: string;
  org: string;
  context?: string;
  location: string;
  period: string;
  bullets: string[];
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type ProjectItem = {
  name: string;
  tag: string;
  description: string;
  tech: string[];
  image: string;
  imageAlt: string;
  link?: string;
  linkLabel?: string;
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export type LanguageItem = {
  name: string;
  level: string;
};

export type CertItem = {
  name: string;
  authority: string;
  period: string;
  url: string;
};

export type Content = {
  meta: { title: string; description: string };
  a11y: { skipToContent: string };
  nav: {
    items: NavItem[];
    langLabel: string;
    themeLabel: string;
  };
  hero: {
    name: string;
    role: string;
    headline: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    location: string;
  };
  about: { title: string; paragraphs: string[] };
  experience: { title: string; items: ExperienceItem[] };
  skills: { title: string; intro: string; groups: SkillGroup[] };
  projects: { title: string; intro: string; items: ProjectItem[] };
  education: {
    title: string;
    items: EducationItem[];
    languagesTitle: string;
    languages: LanguageItem[];
  };
  contact: {
    title: string;
    text: string;
    email: string;
    linkedin: string;
    location: string;
  };
  certifications: {
    title: string;
    verifyLabel: string;
    items: CertItem[];
  };
  footer: { rights: string };
};
