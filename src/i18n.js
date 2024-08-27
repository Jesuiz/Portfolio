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
      "bio": "Con más de 6 años como Diseñador Gráfico, me especializo en <span class='text-textPrimary'>Diseño de Identidad Visual</span> para marcas. En los últimos 2 años, he trabajado en el desarrollo de <span class='text-textPrimary'>Aplicaciones Web con PHP y Laravel.</span> También tengo una sólida experiencia de 3 años desarrollando <span class='text-textPrimary'>Páginas Web con WordPress</span>",

      "view_resume": "Ver CV",
      "download_cv": "Descargar CV",

      "projects": "Proyectos",

      "project1_1": "Web App CRM",
      "project1_2": "Coiintawa - Inmobiliaria",
      "project1_3": "Esta aplicación es un CRM con esteroides desarrollado para una inmobiliaria, con funciones para automatizar el cobro de cuotas.",

      "project2_1": "Web App SaaS",
      "project2_1_2": "(En desarrollo)",
      "project2_2": "Condoforce - Admin. de Condominios",
      "project2_3": "Aplicación administrativa con todas las funciones esenciales para la gestión de condominios, empleados, inventario, actividades y más.",

      "project3_1": "Web Scraper",
      "project3_2": "PTC University - Web App LMS",
      "project3_3": "Scraper Web  de plataforma educativa que automatiza el aprendizaje de software a través de cursos interactivos y contenido dinámico adaptado al usuario.",

      "project4_1": "Sitio web",
      "project4_2": "Jesuiz Design - Freelancer",
      "project4_3": "Desarrollé este sitio web con Wordpress para ofrecer servicios de freelancer. Está bien optimizado, disponible en inglés y español.",

      "project5_1": "Ecommerce",
      "project5_2": "Maestro Supply Line - Productos de Calzado",
      "project5_3": "Esta Tienda refleja costos de envío condicionales y disponibilidad según variables del producto y ubicación del usuario.",

      "project6_1": "Sitio web",
      "project6_2": "Coiintawa - Inmobiliaria",
      "project6_3": "Página estándar que cumple con informar los detalles de la empresa y sus proyectos inmobiliarios, además se conecta al CRM.",

      "project7_1": "Sitio web",
      "project7_2": "Quiro Axis - Quiropráctico",
      "project7_3": "Este sitio fue desarrollado para un Quiropráctico Profesional ubicado en Puerto Rico (proyecto ejecutado por encargo de una agencia).",

      "project8_1": "Ecommerce",
      "project8_2": "Shine Perú - Joyería Artesanal",
      "project8_3": "Ecommerce desarrollado para una joven emprendedora peruana que vende piezas de joyería hechas a mano y velas artesanales.",

      "project9_1": "Sitio web",
      "project9_2": "RV Builders - Construcción",
      "project9_3": "Constructora de Puerto Rico que ofrece soluciones para proyectos ambiciosos (proyecto ejecutado por encargo de una agencia).",

      "project10_1": "Ecommerce",
      "project10_2": "Dados Medic - Insumos Médicos",
      "project10_3": "Empresa autorizada por DIGEMID para la importación y distribución de productos médicos, insumos hospitalarios e insumos industriales.",

      "project11_1": "Branding",
      "project11_2": "Pináculo Education - Instituto",
      "project11_3": "Empresa que lidera la revolución del aprendizaje experiencial mediante la integración de tecnología educativa y soluciones de vanguardia.",

      "project12_1": "Branding",
      "project12_2": "El Valle Dorado - Fundo Campestre",
      "project12_3": "Este Fundo Campestre está ubicado en Perú y su identidad representa la frescura de la comida casera y la paz del campo.",

      "project13_1": "Branding",
      "project13_2": "Ahistawa - Inmobiliaria",
      "project13_3": "Ahistawa es un movimiento solidario fuertemente ligado a los principios de la filosofía Ayni y busca facilitar el acceso a la vivienda a la comunidad peruana.",

      "project14_1": "Branding",
      "project14_2": "Macartur - Sanguchería",
      "project14_3": "Este proyecto se desarrolló con fines demostrativos. Se buscó mejorar el Branding de la sanguchería Macartur. No tengo relación comercial con la marca oficial.",

      "about": "Sobre Mi",
      "about1": "Soy Desarrollador Full Stack Junior con 2 años de experiencia en PHP y Laravel, y conocimientos básicos en tecnologías frontend como JavaScript, React, Astro y NextJS. Tengo experiencia en el despliegue de aplicaciones en diversas plataformas, lo que me permite manejar proyectos de manera integral.",
      "about2": "Además, cuento con 6 años de experiencia como Diseñador Gráfico Senior, especializado en Identidad Visual. Esta combinación de habilidades me permite contribuir en todas las fases del proyecto: desde el diseño de prototipos visuales, pasando por el desarrollo backend y frontend, hasta el despliegue y mantenimiento.",
      "about3": "Éstas son las principales tecnologías y habilidades que domino en las áreas de Diseño y Desarrollo:",


      "courses": "Cursos",
      "courses_less": "Ver Menos",
      "courses_more": "Ver Más",


      "contact": "Contacto",
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
      "bio": "With over 6 years as a Graphic Designer, I specialize in <span class='text-textPrimary'>Visual Identity Design</span> for brands. In the past 2 years, I have worked on developing <span class='text-textPrimary'>Web Applications with PHP and Laravel.</span> I also have a solid 3 years of experience developing <span class='text-textPrimary'>Websites with WordPress</span>",
      
      "view_resume": "View CV",
      "download_cv": "Download CV",

      "projects": "Projects",

      "project1_1": "Web App CRM",
      "project1_2": "Coiintawa - Real State",
      "project1_3": "This Web Application is a steroid-infused CRM for a Peruvian Real Estate Company. I developed features for Automate Instalment Collection.",

      "project2_1": "Web App SaaS",
      "project2_1_2": "(Developing)",
      "project2_2": "Condoforce - Condominiums",
      "project2_3": "Administrative app with all essential features for management of condominiums, employees, inventory, activities, reports, and more.",

      "project3_1": "Web Scraper",
      "project3_2": "PTC University - Web App LMS",
      "project3_3": "Scraper Web is an educational platform that automates software learning through interactive courses and dynamic content tailored to the user.",

      "project4_1": "Website",
      "project4_2": "Jesuiz Design - Freelancer",
      "project4_3": "I developed this website with Wordpress to offer freelancer services. Made it highly optimized and is available in English and Spanish.",

      "project5_1": "Ecommerce",
      "project5_2": "Maestro Supply Line - Shoe Products",
      "project5_3": "This Ecommerce have functions that reflect conditional shipping costs and availability according to product variables and user location.",
      
      "project6_1": "Website",
      "project6_2": "Coiintawa - Real State",
      "project6_3": "It is a standard website that complies with inform the details of the company and its real estate projects, also connects to the CRM.",

      "project7_1": "Website",
      "project7_2": "Quiro Axis - Chiropractor",
      "project7_3": "This site was developed for a Professional Chiropractor located in Puerto Rico (This project was executed on behalf of a agency).",

      "project8_1": "Ecommerce",
      "project8_2": "Shine Perú - Handmade Jewerly",
      "project8_3": "Ecommerce developed for a Peruvian entrepreneur girl who sells handmade jewelry pieces and artisanal candles.",
      
      "project9_1": "Website",
      "project9_2": "RV Builders - Construction",
      "project9_3": "Puerto Rican construction company that offers solutions for ambitious projects (This project was executed on behalf of a agency).",

      "project10_1": "Ecommerce",
      "project10_2": "Dados Medic - Medical Supplies",
      "project10_3": "Company authorized by DIGEMID for the import and distribution of medical products, hospital supplies, disposables and industrial supplies.",

      "project11_1": "Branding",
      "project11_2": "Pináculo Education - Institute",
      "project11_3": "Company leading the experiential learning revolution by integrating educational technology and cutting-edge solutions.",

      "project12_1": "Branding",
      "project12_2": "El Valle Dorado - Rustic Estate",
      "project12_3": "This Rustic Estate business is located in Peru and his identity represent the freshness of homemade food and country peace.",

      "project13_1": "Branding",
      "project13_2": "Ahistawa - Real State",
      "project13_3": "Ahistawa is a solidarity movement strongly linked to the principles of Ayni philosophy and seeks to facilitate access to housing for the Peruvian community.",

      "project14_1": "Branding",
      "project14_2": "Macartur - Sandwich Shop",
      "project14_3": "This project was designed for demonstration purposes. The goal was to improve the branding of the Macartur sandwich shop. I have no commercial relationship with the official brand.",


      "about": "About Me",
      "about1": "I am a Junior Full Stack Developer with 2 years of experience in PHP and Laravel, and basic knowledge of frontend technologies such as JavaScript, React, Astro and NextJS. I have experience in deploying applications on various platforms, which allows me to manage projects comprehensively.",
      "about2": "In addition, I have 6 years of experience as a Senior Graphic Designer, specialized in Visual Identity. This combination of skills allows me to contribute in all phases of the project: from the design of visual prototypes, through backend and frontend development, to deployment and maintenance.",
      "about3": "These are the main technologies and skills that I master in the areas of Design and Development:",


      "courses": "Courses",
      "courses_less": "View Less",
      "courses_more": "View More",


      "contact": "Contact",
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
