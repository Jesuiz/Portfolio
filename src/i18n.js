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

      "hello": "Hola, soy",
      "name": "Jesús Ruiz",
      "description": "Me gusta Diseñar y Desarrollar Webs",
      "bio": "Soy Diseñador Gráfico con más de 6 años de experiencia en <span class='text-textGreen'>Diseño de Identidad Visual</span> para marcas. Tengo 2 años de experiencia trabajando <span class='text-textGreen'> Aplicaciones Web con PHP y Laravel. </span> También tengo sólidos conocimientos y 3 años de experiencia construyendo <span class='text-textGreen'>Páginas Web con Wordpress.</span>",
      "download_cv": "Descargar CV",

      "projects": "Proyectos",
      "project1_1": "Proyecto de Branding",
      "project1_2": "Branding para Pináculo Education",
      "project1_3": "Desarrollo de Identidad Visual para Pináculo Education. Empresa que lidera la revolución del aprendizaje experiencial con la integración de tecnología educativa.",

      "project2_1": "Aplicación Web con Laravel",
      "project2_2": "CRM para Coiintawa",
      "project2_3": "Esta Aplicación Web es un CRM con esteroides para una Inmobiliaria Peruana. Desarrollé funcionalidades para facilitar la Gestión de Lotes y el Cobro Automático de Cuotas.",

      "project3_1": "Página Web con Wordpress",
      "project3_2": "Web Bilingüe para Jesuiz Design",
      "project3_3": "La Web de mi negocio, Jesuiz Design, desarrollada con Wordpress. Está muy optimizada, por lo que sobrepasa los 95 en cada métrica, además que está en Inglés y Español.",

      "project4_1": "Proyecto de Branding",
      "project4_2": "Branding para El Valle Dorado",
      "project4_3": "Desarrollo de Identidad Visual para El Valle Dorado. Negocio campestre ubicado en Perú, su identidad busca representar la frescura de la comida hecha en casa y la tranquilidad campestre.",

      "project5_1": "Ecommerce con Wordpress",
      "project5_2": "Ecommerce para Maestro Supply Line",
      "project5_3": "Tienda online en Inglés, realizada con funciones que permiten reflejar costos y disponibilidad de envío condicionales según la ubicación del cliente, considerando peso y volumen.",

      "project6_1": "Scraper con Python",
      "project6_2": "Scraper Web para Descargar Contenido",
      "project6_3": "Scraper Web desarrollado con Python como solución para automatizar la descarga masiva de contenido en una Aplicación Web (LMS) hecha con Angular a través de logins y contenido dinámico.",

      "about": "Sobre Mi",
      "about1": "Tengo profunda conexión y experiencia con Branding y Diseño de Identidad Visual. En 2017 dejé inconclusos mis estudios universitarios de Diseño Gráfico, aunque he trabajado en ello durante más de 6 años.",
      "about2": "Recientemente, en el 2022, me interesé en el Desarrollo de Aplicaciones Web y desde entonces he estado aprendiendo sin parar. Tengo conocimientos básicos en PHP, Laravel y otras tecnologías, esto me permite modificar y desplegar Aplicaciones Web en base al reconocido modelo MVC. Hasta ahora, he implementado una solución CRM para una inmobiliaria de Lima, Perú.",
      "about3": "Adicionalmente, tengo mucha experiencia ofreciendo Páginas Web con Wordpress, por lo que tengo sólidos conocimientos para implementarlas muy rapidamente, modificando el código para obtener funciones personalizadas y optimizaciones de velocidad.",
      "about4": "Estas son todas las tecnologías y habilidades que manejo, tanto para Diseño como para Desarrollo:",

      "contact1": "Contáctame",
      "contact2": "Estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Si tienes alguna pregunta o simplemente comentarme sobre algún proyecto, ¡te responderé en breve!",
      "contact3": "Enviar Correo",

    }
  },
  en: {
    translation: {
      "home": "Home",
      "about": "About",
      "projects": "Projects",
      "contact": "Contact",

      "hello": "Hello, I'm",
      "name": "Jesús Ruiz",
      "description": "I love Designing and Developing Websites",
      "bio": "I am a Graphic Designer with over 6 years of experience in <span class='text-textGreen'>Visual Identity Design</span> for brands. I have 2 years of experience working on <span class='text-textGreen'> Web Applications with PHP and Laravel. </span> I also have solid knowledge and 3 years of experience building <span class='text-textGreen'>Websites with Wordpress.</span>",
      "download_cv": "Download CV",

      "projects": "Projects",
      "project1_1": "Branding Project",
      "project1_2": "Branding for Pináculo Education",
      "project1_3": "Visual Identity Development for Pináculo Education. Company leading the experiential learning revolution with the integration of educational technology.",

      "project2_1": "Web App with Laravel",
      "project2_2": "CRM for Coiintawa",
      "project2_3": "This Web Application is a steroid-infused CRM for a Peruvian Real Estate Company. I developed features to facilitate Lot Management and Automatic Instalment Collection.",

      "project3_1": "Website with Wordpress",
      "project3_2": "Bilingual Website for Jesuiz Design",
      "project3_3": "The website of my business, Jesuiz Design, developed with Wordpress. It's highly optimized, scoring over 95 in every metric, and it's available in both English and Spanish.",

      "project4_1": "Branding Project",
      "project4_2": "Branding for El Valle Dorado",
      "project4_3": "Visual Identity Development for El Valle Dorado. Country business located in Peru, its identity seeks to represent the freshness of homemade food and country tranquility.",

      "project5_1": "Ecommerce with Wordpress",
      "project5_2": "Ecommerce for Maestro Supply Line",
      "project5_3": "Online store in English, made with functions that allow you to reflect conditional shipping costs and availability according to the customer's location, considering weight and volume.",

      "project6_1": "Scraper with Python",
      "project6_2": "Web Scraper for Content Download",
      "project6_3": "Web Scraper developed with Python as a solution to automate the massive download of content in a Web Application (LMS) made with Angular through logins and dynamic content.",
      
      "about": "About Me",
      "about1": "I have deep connection and experience with Branding and Visual Identity Design. In 2017 I left my university studies in Graphic Design unfinished, although I have worked on it for more than 6 years.",
      "about2": "Recently, in 2022, I became interested in Web Application Development and since then I have been learning non-stop. I have basic knowledge in PHP, Laravel and other technologies, this allows me to modify and deploy Web Applications based on the recognized MVC model. So far, I have implemented a CRM solution for a real estate company in Lima, Peru.",
      "about3": "Additionally, I have a lot of experience offering Websites with Wordpress, so I have solid knowledge to implement them very quickly, modifying the code to obtain custom functions and speed optimizations.",
      "about4": "These are all the technologies and skills that I use, both for Design and Development:",

      "contact1": "Contact Me",
      "contact2": "I'm looking for new opportunities, my inbox is always open. If you have any questions or just tell me about a project, I will respond shortly!",
      "contact3": "Send Mail",

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
