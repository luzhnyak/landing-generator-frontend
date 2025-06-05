export type BaseSection = {
  id: string;
  type: string;
  title: string;
  subtitle: string;
};

export type HeroSection = BaseSection & {
  type: "hero";
};

export type AboutSection = BaseSection & {
  type: "about";
  content: string;
};

export type FeatureItem = {
  title: string;
  content: string;
  image: string;
};

export type FeaturesSection = BaseSection & {
  type: "features";
  features: FeatureItem[];
};

export type SectionType = HeroSection | AboutSection | FeaturesSection;

// Тип посилання
export type LinkItem = {
  href: string;
  label: string;
};

// Типи header/footer
export type HeaderType = {
  type: "header";
  id: string;
  logoUrl: string;
  links: LinkItem[];
};

export type FooterType = {
  content: string;
  links: LinkItem[];
};

// Повна форма
export type FormData = {
  name: string;
  description: string;
  header: HeaderType;
  footer: FooterType;
  sections: SectionType[];
};

// Доступні типи секцій
export const sectionTypes: SectionType["type"][] = [
  "hero",
  "about",
  "features",
];

// Початкові значення для секцій
export const defaultSectionValues: Record<SectionType["type"], SectionType> = {
  hero: {
    id: "hero",
    type: "hero",
    title: "Hero Title",
    subtitle: "Hero Subtitle",
  },
  about: {
    id: "about",
    type: "about",
    title: "About Title",
    subtitle: "About Subtitle",
    content: "About content",
  },
  features: {
    id: "features",
    type: "features",
    title: "Features Title",
    subtitle: "Features Subtitle",
    features: [
      {
        title: "Feature 1",
        content: "Feature 1 content",
        image: "",
      },
    ],
  },
};

export const defaultHeader = {
  type: "header",
  id: "header",
  logoUrl: "",
  links: [
    { href: "/", label: "Головна" },
    { href: "/about", label: "Про нас" },
    { href: "/contact", label: "Контакти" },
  ],
};

export const defaultFooter = {
  content: "",
  links: [
    { href: "/", label: "Головна" },
    { href: "/about", label: "Про нас" },
    { href: "/contact", label: "Контакти" },
  ],
};
