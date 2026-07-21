import TelegramIcon from "~/components/icons/TelegramIcon.vue";
import InstagramIcon from "~/components/icons/InstagramIcon.vue";
import LinkedinIcon from "~/components/icons/LinkedinIcon.vue";
import TwitterIcon from "~/components/icons/TwitterIcon.vue";
import YoutubeIcon from "~/components/icons/YoutubeIcon.vue";

export const SOCIAL_LINKS = [
  {
    title: "تلگرام",
    href: "#",
    icon: TelegramIcon,
  },
  {
    title: "اینستاگرام",
    href: "#",
    icon: InstagramIcon,
  },
  {
    title: "لینکدین",
    href: "#",
    icon: LinkedinIcon,
  },
];

export const FOOTER_LINKS = [
  {
    title: "دسترسی سریع",
    items: [
      { label: "درباره ما", href: "/about" },
      { label: "بلاگ", href: "/blog" },
      { label: "تماس با ما", href: "/contact" },
      { label: "خدمات پس از فروش", href: "/support" },
    ],
  },
  {
    title: "راهنمای سایت",
    items: [
      { label: "قوانین و مقررات", href: "/rules" },
      { label: "دریافت مشاوره", href: "/consultation" },
      { label: "انتقادات و پیشنهادات", href: "/feedback" },
    ],
  },
];

export const SOCIAL_ICONS = [
  {
    href: "#",
    icon: LinkedinIcon,
  },

  {
    href: "#",
    icon: YoutubeIcon,
  },
  {
    href: "#",
    icon: TwitterIcon,
  },
  {
    href: "#",
    icon: InstagramIcon,
  },
  {
    href: "#",
    icon: TelegramIcon,
  },
];
