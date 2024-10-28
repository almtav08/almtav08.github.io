import AstroIcon from "@/components/icons/AstroIcon.astro";
import NextIcon from "@/components/icons/NextIcon.astro";
import ReactIcon from "@/components/icons/ReactIcon.astro";
import TailwindIcon from "@/components/icons/TailwindIcon.astro";

export const TAGS = {
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-gray-900 text-white",
    icon: TailwindIcon,
  },
  ASTRO: {
    name: "Astro",
    class: "bg-gray-900 text-white",
    icon: AstroIcon,
  },
  REACT: {
    name: "React",
    class: "bg-gray-900 text-white",
    icon: ReactIcon,
  },
  NEXT: {
    name: "Next.js",
    class: "bg-gray-900 text-white",
    icon: NextIcon,
  },
};
