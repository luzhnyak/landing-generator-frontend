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
  items2: FeatureItem[];
};

export type GalleryItem = {
  title: string;
  image: string;
};

export type GallerySection = BaseSection & {
  type: "gallery";
  items: GalleryItem[];
};

export type ReviewItem = {
  user: string;
  message: string;
  avatar: string;
};

export type ReviewsSection = BaseSection & {
  type: "reviews";
  items: ReviewItem[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQSection = BaseSection & {
  type: "faq";
  items: FAQItem[];
};

export type SectionType =
  | HeroSection
  | AboutSection
  | FeaturesSection
  | GallerySection
  | ReviewsSection
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
  content: string;
  links: LinkItem[];
  social_link: boolean;
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
  "gallery",
  "reviews",
  "faq",
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
    image: "",
  },
  features: {
    id: "features",
    type: "features",
    title: "Features Title",
    subtitle: "Features Subtitle",
    items2: [
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
    items: [],
  },
  reviews: {
    id: "reviews",
    type: "reviews",
    title: "Reviews Title",
    subtitle: "Reviews Subtitle",
    items: [],
  },
  faq: {
    id: "faq",
    type: "faq",
    title: "FAQ Title",
    subtitle: "FAQ Subtitle",
    items: [
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
  content: "© 2025 Your Company. All rights reserved",
  links: [
    { href: "./privacy-policy.html", label: "Privacy Policy" },
    { href: "./terms-conditions.html", label: "Terms & Conditions" },
    { href: "./cookie-policy.html", label: "Cookies Policy" },
  ],
  social_link: false,
};
