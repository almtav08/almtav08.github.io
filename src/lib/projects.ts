import { TAGS } from "./tags";

export const PROJECTS = [
  {
    title: "Tale Create",
    subtitle: "Create your own stories",
    align: "top",
    description:
      "MVP de una plataforma para <strong>crear cuentos usando Inteligencia Artificial</strong> tanto la parte artística como la parte escrita. Esto es solo una demo por lo que la generación de historias está desactivada. Si deseas saber más no dudes en contactarme. <br><div class='mt-2'> © Todos los derechos están reservados.</div>",
    content: "",
    link: "https://talecreate-qud4.vercel.app/",
    image: "/projects/tale.webp",
    tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TAILWIND],
  },
  {
    title: "Emotion Music",
    subtitle: "Music Generation",
    align: "center",
    description:
      "MVP de una plataforma para <strong>generar música usando Inteligencia Artificial basado en como te sientes</strong>. Esto es solo una demo por lo que la generación de canciones está desactivada. Si deseas saber más no dudes en contactarme. <br><div class='mt-2'> © Todos los derechos están reservados.</div>",
    content: "",
    link: "https://emotion-music.vercel.app/",
    image: "/projects/emotion.webp",
    tags: [TAGS.NEXT, TAGS.REACT, TAGS.TAILWIND],
  },
];
