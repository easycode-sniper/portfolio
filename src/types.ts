export type Lang = "fr" | "en";

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
  slug: string;
  tag: string;
  accent: string;
  context: string;
  description: string;
  story: string[];
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

export type Content = {
  meta: { title: string; description: string };
  a11y: { skipToContent: string };
  header: { name: string; role: string };
  nav: {
    langLabel: string;
    themeLabel: string;
  };
  panels: {
    aboutBtn: string;
    contactBtn: string;
    close: string;
  };
  about: { title: string; paragraphs: string[] };
  experience: { title: string; items: ExperienceItem[] };
  skills: { title: string; intro: string; groups: SkillGroup[] };
  projects: {
    title: string;
    intro: string;
    nextLabel: string;
    backLabel: string;
    techLabel: string;
    items: ProjectItem[];
  };
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
  footer: { rights: string; themeLight: string; themeDark: string };
};
