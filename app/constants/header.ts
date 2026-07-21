import CategoryIcon from "~/components/icons/CategoryIcon.vue";
import BookIcon from "~/components/icons/BookIcon.vue";
import PhoneIcon from "~/components/icons/PhoneIcon.vue";
import QuestionIcon from "~/components/icons/QuestionIcon.vue";

export const MENU_ITEMS = [
  {
    title: "لیست محصولات",
    icon: CategoryIcon,
    to: "/products",
  },
  {
    title: "دریافت مشاوره",
    icon: BookIcon,
    to: "/",
  },
  {
    title: "سوالات متداول",
    icon: QuestionIcon,
    to: "/",
  },
  {
    title: "تماس با ما",
    icon: PhoneIcon,
    to: "/",
  },
];
