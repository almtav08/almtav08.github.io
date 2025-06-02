import { TAGS } from "./tags";

export const PROJECTS = [
  {
    title: "Tracerec",
    subtitle: {
      en: "Python Package",
      es: "Paquete de Python",
    },
    align: "top",
    description: {
      en: "A Python package for <strong>recommender systems</strong> that allows you to create, train, and evaluate models with ease. It supports collaborative filtering, knowledge-based filtering, and hybrid approaches.",
      es: "Un paquete de Python para <strong>sistemas de recomendación</strong> que te permite crear, entrenar y evaluar modelos con facilidad. Soporta filtrado colaborativo, filtrado basado en conocimiento y enfoques híbridos.",
    },
    link: "https://pypi.org/project/tracerec/",
    image: "",
    tags: [TAGS.PYTHON],
  },
  {
    title: "Moodle Rec",
    subtitle: {
      en: "Moodle Plugin",
      es: "Plugin de Moodle",
    },
    align: "center",
    description: {
      en: "Python Server and Moodle Plugin for <strong>recommender systems</strong> that allows you to include yo your Moodle Platform a recommender in the courses main page.",
      es: "Servidor en Python y Plugin de Moodle para <strong>sistemas de recomendación</strong> que te permite incluir un recomendador en la página principal de tus cursos en Moodle.",
    },
    link: "https://github.com/almtav08/moodle_recom",
    image: "",
    tags: [TAGS.PYTHON, TAGS.HTML, TAGS.PHP],
  },
];
