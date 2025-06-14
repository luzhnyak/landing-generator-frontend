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
  image: string;
};

export type FeatureItem = {
  title: string;
  content: string;
  image: string;
};

export type FeaturesSection = BaseSection & {
  type: "features";
  featureItems: FeatureItem[];
};

export type GalleryItem = {
  title: string;
  image: string;
};

export type GallerySection = BaseSection & {
  type: "gallery";
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
  faqItems: FAQItem[];
};

export type SectionType =
  | HeroSection
  | AboutSection
  | GallerySection
  | ReviewsSection
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
  content: string;
  links: LinkItem[];
  social_link: boolean;
};

// Повна форма
export type FormData = {
  name: string;
  description: string;
  fonts: string;
  base_font_family: string;
  color_vars: string;
  header: HeaderType;
  footer: FooterType;
  sections: SectionType[];
};

// Доступні типи секцій
export const sectionTypes: SectionType["type"][] = [
  "hero",
  "about",
  "features",
  "gallery",
  "reviews",
  "faq",
];

export const defaultMain = {
  type: "main",
  name: "My Landing Page",
  description: "This is a sample landing page for your business or product",
  base_font_family: '"Inter", sans-serif',
  fonts: `<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"  rel="stylesheet" />`,
  color_vars: `--color-background-primary: #190e0c;
--color-background-secondary: #0f0000;
--color-text-primary: #ffffff;
--color-text-secondary: #be8d31;
--color-text-accent: #be8d31;`,
};

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
    image: "",
  },
  features: {
    id: "features",
    type: "features",
    title: "Features Title",
    subtitle: "Features Subtitle",
    featureItems: [
      {
        title: "Feature 1",
        content: "Feature 1 content",
        image: "",
      },
    ],
  },
  gallery: {
    id: "gallery",
    type: "gallery",
    title: "Gallery Title",
    subtitle: "Gallery Subtitle",
    galleryItems: [],
  },
  reviews: {
    id: "reviews",
    type: "reviews",
    title: "Reviews Title",
    subtitle: "Reviews Subtitle",
    reviewItems: [],
  },
  faq: {
    id: "faq",
    type: "faq",
    title: "FAQ Title",
    subtitle: "FAQ Subtitle",
    faqItems: [
      {
        question: "Question 1",
        answer: "Answer 1",
      },
      {
        question: "Question 2",
        answer: "Answer 2",
      },
    ],
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
  content: "© 2025 Your Company. All rights reserved",
  links: [
    { href: "./privacy-policy.html", label: "Privacy Policy" },
    { href: "./terms-conditions.html", label: "Terms & Conditions" },
    { href: "./cookie-policy.html", label: "Cookies Policy" },
  ],
  social_link: false,
};
