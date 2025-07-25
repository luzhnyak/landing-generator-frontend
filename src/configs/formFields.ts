export type BaseSection = {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  background: boolean;
};

export type HeroSection = BaseSection & {
  type: "hero";
  image: string;
};

export type AboutSection = BaseSection & {
  type: "about";
  text: string;
  ul: string;
  image: string;
};

export type FeatureItem = {
  title: string;
  text: string;
  image: string;
};

export type FeaturesSection = BaseSection & {
  type: "features";
  text: string;
  featureItems: FeatureItem[];
};

export type GalleryItem = {
  title: string;
  text: string;
  image: string;
};

export type GallerySection = BaseSection & {
  type: "swiper";
  text: string;
  navigation: boolean;
  pagination: boolean;
  effectCoverflow: boolean;
  hideOnDesktop: boolean;
  galleryItems: GalleryItem[];
};

export type ReviewItem = {
  user: string;
  message: string;
  avatar: string;
};

export type ReviewsSection = BaseSection & {
  type: "reviews";
  reviewItems: ReviewItem[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQSection = BaseSection & {
  type: "faq";
  text: string;
  faqItems: FAQItem[];
};

export type SectionType =
  | HeroSection
  | AboutSection
  | GallerySection
  | FeaturesSection
  | FAQSection;

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
  type: "footer";
  text: string;
  links: LinkItem[];
  social_link: boolean;
};

// Повна форма
export type FormData = {
  name: string;
  title: string;
  description: string;
  keywords: string;
  domain: string;
  author: string;
  email: string;
  base_font_family: string;
  color_vars: string;
  fonts_link: string;
  header: HeaderType;
  footer: FooterType;
  sections: SectionType[];
};

// Доступні типи секцій
export const sectionTypes: SectionType["type"][] = [
  "hero",
  "about",
  "features",
  "swiper",
  "faq",
];

export const defaultMain = {
  type: "main",
  name: "MySite",
  title: "My Landing Page",
  description: "This is a sample landing page for your business or product",
  keywords: "landing page, business, product",
  domain: "www.example.com",
  author: "Your Name",
  email: "your@email.com",
  base_font_family: '"Inter", sans-serif',
  fonts_link: `<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"  rel="stylesheet" />`,
  color_vars: `--color-background-primary: #f7f8f9;
--color-background-secondary: #c4d9dd;
--color-text-primary:#1f2327;
--color-text-secondary:#1a1308;
--color-text-accent: #a8c3a0;`,
};

export const defaultSectionValues: Record<SectionType["type"], SectionType> = {
  hero: {
    id: "hero",
    type: "hero",
    title: "",
    subtitle: "",
    background: false,
    image: "",
  },
  about: {
    id: "about",
    type: "about",
    title: "About Title",
    subtitle: "",
    background: false,
    text: "",
    ul: "",
    image: "",
  },
  features: {
    id: "features",
    type: "features",
    title: "Features Title",
    subtitle: "",
    background: false,
    text: "",
    featureItems: [],
  },
  swiper: {
    id: "gallery",
    type: "swiper",
    title: "Gallery",
    subtitle: "",
    background: false,
    text: "",
    pagination: false,
    navigation: false,
    effectCoverflow: false,
    hideOnDesktop: false,
    galleryItems: [],
  },
  faq: {
    id: "faq",
    type: "faq",
    title: "FAQ",
    subtitle: "",
    background: false,
    text: "",
    faqItems: [],
  },
};

export const defaultHeader = {
  type: "header",
  logoUrl: "",
  links: [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#features", label: "Features" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#reviews", label: "Reviews" },
    { href: "/#faq", label: "FAQ" },
  ],
};

export const defaultFooter = {
  type: "footer",
  text: "© 2025 Your Company. All rights reserved",
  links: [
    { href: "./privacy-policy.html", label: "Privacy Policy" },
    { href: "./terms-conditions.html", label: "Terms & Conditions" },
    { href: "./cookie-policy.html", label: "Cookies Policy" },
  ],
  social_link: false,
};
