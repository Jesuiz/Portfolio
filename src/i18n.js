// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      "home": "Inicio",
      "about": "Sobre Mí",
      "projects": "Proyectos",
      "contact": "Contacto",
      "mail-me": "Envíame un correo a:",

      "hello": "Hola, soy",
      "name": "Jesús Ruiz",
      "description1": "Desarrollador Full Stack Junior",
      "description2": "y Diseñador Gráfico Senior",
      "bio": "Con más de 6 años como Diseñador Gráfico, me especializo en <span class='text-textGreen'>Diseño de Identidad Visual</span> para marcas. En los últimos 2 años, he trabajado en el desarrollo de <span class='text-textGreen'>Aplicaciones Web con PHP y Laravel.</span> También tengo una sólida experiencia de 3 años desarrollando <span class='text-textGreen'>Páginas Web con WordPress.</span>",

      "view_resume": "Ver CV",
      "download_cv": "Descargar CV",

      "projects": "Proyectos",

      "projects": "Proyectos",
      "project1_1": "CRM con Laravel",
      "project1_2": "Aplicación Web para Coiintawa",
      "project1_3": "Esta Aplicación Web es un CRM con esteroides para una Inmobiliaria Peruana. Desarrollé funcionalidades para facilitar la Gestión de Lotes y el Cobro Automático de Cuotas.",

      "project2_1": "SaaS con Laravel y Filament",
      "project2_1_2": "(En desarrollo)",
      "project2_2": "Aplicación Web para Condoforce",
      "project2_3": "Aplicación administrativa con todas las características esenciales para la gestión profesional de condominios, empleados, inventario, actividades, informes y más.",

      "project3_1": "Scraper con Python",
      "project3_2": "Scraper Web de Precision LMS",
      "project3_3": "Scraper Web desarrollado con Python como solución para automatizar la descarga masiva (legalmente) de contenido en una Aplicación Web (LMS) hecha con Angular a través de logins y contenido dinámico.",

      "project4_1": "Página Web con Wordpress",
      "project4_2": "Web Bilingüe para Jesuiz Design",
      "project4_3": "La Web de mi negocio, Jesuiz Design, desarrollada con Wordpress. Está muy optimizada, por lo que sobrepasa los 95 en cada métrica, además que está en Inglés y Español.",

      "project5_1": "Ecommerce con Wordpress",
      "project5_2": "Ecommerce para Maestro Supply Line",
      "project5_3": "Tienda online en Inglés, realizada con funciones que permiten reflejar costos y disponibilidad de envío condicionales según la ubicación del cliente, considerando peso y volumen.",

      "project6_1": "Proyecto de Branding",
      "project6_2": "Branding para Pináculo Education",
      "project6_3": "Desarrollo de Identidad Visual para Pináculo Education. Empresa que lidera la revolución del aprendizaje experiencial con la integración de tecnología educativa.",

      "project7_1": "Proyecto de Branding",
      "project7_2": "Branding para El Valle Dorado",
      "project7_3": "Desarrollo de Identidad Visual para El Valle Dorado. Negocio campestre ubicado en Perú, su identidad busca representar la frescura de la comida hecha en casa y la tranquilidad campestre.",

      "about": "Sobre Mi",
      "about1": "Soy Desarrollador Full Stack Junior con 2 años de experiencia en PHP y Laravel, y conocimientos básicos en tecnologías frontend como JavaScript, React, Astro y NextJS. Tengo experiencia en el despliegue de aplicaciones en diversas plataformas, lo que me permite manejar proyectos de manera integral.",
      "about2": "Además, cuento con 6 años de experiencia como Diseñador Gráfico Senior, especializado en Identidad Visual. Esta combinación de habilidades me permite contribuir en todas las fases del proyecto: desde el diseño de prototipos visuales, pasando por el desarrollo backend y frontend, hasta el despliegue y mantenimiento.",
      "about3": "Éstas son las principales tecnologías y habilidades que domino en las áreas de Diseño y Desarrollo:",

      "contact": "Contáctame",
      "contact1": "Estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta.",
      "contact2": "Si tienes alguna pregunta o simplemente comentarme sobre algún proyecto, ¡te responderé en breve!",
      "contact3": "Enviar Correo",
      "contact4": "Whatsapp",


    }
  },
  en: {
    translation: {
      "home": "Home",
      "about": "About",
      "projects": "Projects",
      "contact": "Contact",
      "mail-me": "Send me an email to:",

      "hello": "Hello, I'm",
      "name": "Jesús Ruiz",
      "description1": "Junior Full Stack Developer",
      "description2": "and Senior Graphic Designer",
      "bio": "With over 6 years as a Graphic Designer, I specialize in <span class='text-textGreen'>Visual Identity Design</span> for brands. In the past 2 years, I have worked on developing <span class='text-textGreen'>Web Applications with PHP and Laravel.</span> I also have a solid 3 years of experience developing <span class='text-textGreen'>Websites with WordPress.</span>",
      
      "view_resume": "View CV",
      "download_cv": "Download CV",

      "projects": "Projects",

      "project1_1": "CRM with Laravel",
      "project1_2": "Web App for Coiintawa",
      "project1_3": "This Web Application is a steroid-infused CRM for a Peruvian Real Estate Company. I developed features to facilitate Lot Management and Automatic Instalment Collection.",

      "project2_1": "SaaS with Laravel & Filament",
      "project2_1_2": "(Developing)",
      "project2_2": "Web App for Condoforce",
      "project2_3": "Administrative app with all essential features for professional management of condominiums, employees, inventory, activities, reports, and more.",

      "project3_1": "Scraper with Python",
      "project3_2": "Web Scraper of Precision LMS",
      "project3_3": "Web Scraper developed with Python as a solution to automate the massive download (legally) of content in a Web Application (LMS) made with Angular through logins and dynamic content.",

      "project4_1": "Website with Wordpress",
      "project4_2": "Bilingual Website for Jesuiz Design",
      "project4_3": "The website of my business, Jesuiz Design, developed with Wordpress. It's highly optimized, scoring over 95 in every metric, and it's available in both English and Spanish.",

      "project5_1": "Ecommerce with Wordpress",
      "project5_2": "Ecommerce for Maestro Supply Line",
      "project5_3": "Online store in English, made with functions that allow you to reflect conditional shipping costs and availability according to the customer's location, considering weight and volume.",

      "project6_1": "Branding Project",
      "project6_2": "Branding for Pináculo Education",
      "project6_3": "Visual Identity Development for Pináculo Education. Company leading the experiential learning revolution with the integration of educational technology.",

      "project7_1": "Branding Project",
      "project7_2": "Branding for El Valle Dorado",
      "project7_3": "Visual Identity Development for El Valle Dorado. Country business located in Peru, its identity seeks to represent the freshness of homemade food and country tranquility.",


      "about": "About Me",
      "about1": "I am a Junior Full Stack Developer with 2 years of experience in PHP and Laravel, and basic knowledge of frontend technologies such as JavaScript, React, Astro and NextJS. I have experience in deploying applications on various platforms, which allows me to manage projects comprehensively.",
      "about2": "In addition, I have 6 years of experience as a Senior Graphic Designer, specialized in Visual Identity. This combination of skills allows me to contribute in all phases of the project: from the design of visual prototypes, through backend and frontend development, to deployment and maintenance.",
      "about3": "These are the main technologies and skills that I master in the areas of Design and Development:",

      "contact": "Contact Me",
      "contact1": "I'm looking for new opportunities, my inbox is always open.",
      "contact2": "If you have any questions or just tell me about a project, I will respond shortly!",
      "contact3": "Send Mail",
      "contact4": "Whatsapp",

    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Idioma por defecto
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
