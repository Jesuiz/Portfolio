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
      "description1": "Desarrollador Frontend",
      "description2": "con más de 2 años de experiencia",
      "bio": "creando interfaces atractivas y funcionales con <span class='text-textPrimary'>React, Next.js, CSS y Tailwind.</span>  También he trabajado con <span class='text-textPrimary'>PHP y Laravel,</span> y acumulado más de 4 años de experiencia con <span class='text-textPrimary'>Wordpress.<span>",

      "view_resume": "Ver CV",
      "download_cv": "Descargar CV",

      "projects": "Proyectos",

      "project1_1": "Web App CRM",
      "project1_2": "Coiintawa",
      "project1_2_1": "Aplicación Gestora de Clientes",
      "project1_3": "Esta aplicación es un CRM con esteroides desarrollado para una inmobiliaria, con funciones para automatizar el cobro de cuotas.",

      "project2_1": "Web App SaaS",
      "project2_1_2": "(En desarrollo)",
      "project2_2": "Condoforce",
      "project2_2_1": "Aplicación Gestora de Condominios",
      "project2_3": "Aplicación administrativa con todas las funciones esenciales para la gestión de condominios, empleados, inventario, actividades y más.",

      "project3_1": "Web Scraper",
      "project3_2": "PTC University",
      "project3_2_1": "Scraper de Aplicación Web Educativa LMS",
      "project3_3": "Scraper de plataforma educativa que automatiza el aprendizaje a través de cursos interactivos y contenido dinámico adaptado al usuario.",

      "project4_1": "Sitio web",
      "project4_2": "Jesuiz Design",
      "project4_2_1": "Diseñador y Desarrollador Freelancer",
      "project4_3": "Desarrollé este sitio web con Wordpress para ofrecer servicios de freelancer. Está bien optimizado, disponible en inglés y español.",

      "project5_1": "Ecommerce",
      "project5_2": "Maestro Supply Line",
      "project5_2_1": "Insumos para el Calzado",
      "project5_3": "Esta Tienda refleja costos de envío condicionales y disponibilidad según variables del producto y ubicación del usuario.",

      "project6_1": "Sitio web",
      "project6_2": "Coiintawa",
      "project6_2_1": "Inmobiliaria Peruana",
      "project6_3": "Página estándar que cumple con informar los detalles de la empresa y sus proyectos inmobiliarios, además se conecta al CRM.",

      "project7_1": "Sitio web",
      "project7_2": "Quiro Axis",
      "project7_2_1": "Quiropráctico Profesional",
      "project7_3": "Este sitio fue desarrollado para un Quiropráctico Profesional ubicado en Puerto Rico.",

      "project8_1": "Ecommerce",
      "project8_2": "Shine Perú",
      "project8_2_1": "Joyería Artesanal y Accesorios",
      "project8_3": "Ecommerce desarrollado para una joven emprendedora peruana que vende piezas de joyería hechas a mano y velas artesanales.",

      "project9_1": "Sitio web",
      "project9_2": "RV Builders",
      "project9_2_1": "Constructura Residencial y Comercial",
      "project9_3": "Constructora de Puertorriqueña que ofrece soluciones para proyectos ambiciosos.",

      "project10_1": "Ecommerce",
      "project10_2": "Dados Medic",
      "project10_2_1": "Insumos Médicos Importados",
      "project10_3": "Empresa autorizada por DIGEMID para la importación y distribución de productos médicos, insumos hospitalarios e insumos industriales.",

      "project11_1": "Branding",
      "project11_2": "Pináculo Education",
      "project11_2_1": "Instituto Educativo Digital",
      "project11_3": "Empresa que lidera la revolución del aprendizaje experiencial mediante la integración de tecnología educativa y soluciones de vanguardia.",

      "project12_1": "Branding",
      "project12_2": "El Valle Dorado",
      "project12_2_1": "Fundo Campestre",
      "project12_3": "Este Fundo está ubicado en Perú y su identidad representa la frescura de la comida casera hecha en casa desde la tranquilidad campestre.",

      "project13_1": "Branding",
      "project13_2": "Ahistawa",
      "project13_2_1": "Inmobiliaria con Propósito Social",
      "project13_3": "Ahistawa es un movimiento solidario ligado a los principios de la filosofía Ayni y busca facilitar el acceso a la vivienda a la comunidad peruana.",

      "project14_1": "Branding",
      "project14_2": "Macartur",
      "project14_2_1": "Sanguchería Tradicional desde 1999",
      "project14_3": "Desarrollado con fines demostrativos. Se buscó mejorar el Branding de la sanguchería Macartur. No tengo relación comercial con la marca.",

      "about": "Sobre Mi",
      "about1": "Soy un Desarrollador Frontend con más de 2 años de experiencia creando interfaces atractivas y funcionales con React, Next.js, CSS y Tailwind. Lo que me diferencia es mi ojo de diseñador, gracias a mi formación técnica y más de 6 años de experiencia como Diseñador Gráfico, lo que me permite desarrollar productos con una estética pulida, alineada con principios de UX/UI y coherencia visual.",
      "about2": "Además, tengo experiencia en automatización de procesos con herramientas como Make, Zapier y n8n, lo que me permite optimizar flujos de trabajo y mejorar la eficiencia en la integración entre frontend, backend y APIs. Aunque mi enfoque principal es el desarrollo frontend, también he trabajado con PHP y Laravel, lo que me ha permitido comprender mejor la lógica del servidor y colaborar en proyectos que requieren una integración más profunda.",
      "about3": "También cuento con experiencia en marketing digital y WordPress, lo que me permite desarrollar MVPs de manera rápida para campañas publicitarias y validación de productos. Gracias a mi combinación de diseño, desarrollo y automatización, puedo abordar proyectos desde una perspectiva integral, creando soluciones eficientes, escalables y visualmente impactantes.",
      "about4": "Éstas son las principales tecnologías y habilidades que domino:",


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
      "description1": "Frontend Developer",
      "description2": "with more than 2 years of experience",
      "bio": "creating beautiful and functional interfaces with <span class='text-textPrimary'>React, Next.js, CSS and Tailwind.</span> I have also worked with <span class='text-textPrimary'>PHP and Laravel,</span> and have accumulated more than 4 years of experience with <span class='text-textPrimary'>Wordpress.</span>",

      "view_resume": "View CV",
      "download_cv": "Download CV",

      "projects": "Projects",

      "project1_1": "Web App CRM",
      "project1_2": "Coiintawa",
      "project1_2_1": "Customer Management Application",
      "project1_3": "This Web Application is a steroid-infused CRM for a Peruvian Real Estate Company. I developed features for Automate Instalment Collection.",

      "project2_1": "Web App SaaS",
      "project2_1_2": "(Developing)",
      "project2_2": "Condoforce",
      "project2_2_1": "Condominium Management Application",
      "project2_3": "Administrative app with all essential features for management of condominiums, employees, inventory, activities, reports, and more.",

      "project3_1": "Web Scraper",
      "project3_2": "PTC University",
      "project3_2_1": "LMS Educational Web Application Scraper",
      "project3_3": "Scraper Web is an educational platform that automates software learning through interactive courses and dynamic content tailored to the user.",

      "project4_1": "Website",
      "project4_2": "Jesuiz Design",
      "project4_2_1": "Freelancer Designer and Developer",
      "project4_3": "I developed this website with Wordpress to offer freelancer services. Made it highly optimized and is available in English and Spanish.",

      "project5_1": "Ecommerce",
      "project5_2": "Maestro Supply Line - Shoe Products",
      "project5_2_1": "Inputs for Footwear",
      "project5_3": "This Ecommerce have functions that reflect conditional shipping costs and availability according to product variables and user location.",

      "project6_1": "Website",
      "project6_2": "Coiintawa",
      "project6_2_1": "Peruvian Real Estate",
      "project6_3": "It is a standard website that complies with inform the details of the company and its real estate projects, also connects to the CRM.",

      "project7_1": "Website",
      "project7_2": "Quiro Axis",
      "project7_2_1": "Professional Chiropractor",
      "project7_3": "This site was developed for a Professional Chiropractor located in Puerto Rico (This project was executed on behalf of a agency).",

      "project8_1": "Ecommerce",
      "project8_2": "Shine Perú",
      "project8_3": "Ecommerce developed for a Peruvian entrepreneur girl who sells handmade jewelry pieces and artisanal candles.",

      "project9_1": "Website",
      "project9_2": "RV Builders",
      "project8_2_1": "Handmade Jewelry and Accessories",
      "project9_2_1": "Constructura Residencial y Comercial",
      "project9_3": "Puerto Rican construction company that offers solutions for ambitious projects (This project was executed on behalf of a agency).",

      "project10_1": "Ecommerce",
      "project10_2": "Dados Medic",
      "project10_2_1": "Imported Medical Supplies",
      "project10_3": "Company authorized by DIGEMID for the import and distribution of medical products, hospital supplies, disposables and industrial supplies.",

      "project11_1": "Branding",
      "project11_2": "Pináculo Education",
      "project11_2_1": "Digital Educational Institute",
      "project11_3": "Company leading the experiential learning revolution by integrating educational technology and cutting-edge solutions.",

      "project12_1": "Branding",
      "project12_2": "El Valle Dorado",
      "project12_2_1": "Countryside Fund",
      "project12_3": "This Rustic Estate business is located in Peru and his identity represent the freshness of homemade food and country peace.",

      "project13_1": "Branding",
      "project13_2": "Ahistawa",
      "project13_2_1": "Real Estate with Social Purpose",
      "project13_3": "Ahistawa is a solidarity movement strongly linked to the principles of Ayni philosophy and seeks to facilitate access to housing for the Peruvian community.",

      "project14_1": "Branding",
      "project14_2": "Macartur",
      "project14_2_1": "Traditional Sandwich Shop since 1999",
      "project14_3": "This project was designed for demonstration purposes. The goal was to improve the branding of the Macartur sandwich shop. I have no commercial relationship with the official brand.",


      "about": "About Me",
      "about1": "I am a Frontend Developer with over 2 years of experience creating visually appealing and functional interfaces using React, Next.js, CSS, and Tailwind. What sets me apart is my designer's eye, backed by my technical training and over 6 years of experience as a Graphic Designer, allowing me to develop products with a polished aesthetic, aligned with UX/UI principles and visual consistency.",
      "about2": "Additionally, I have experience in process automation using tools like Make, Zapier, and n8n, which enables me to streamline workflows and improve efficiency in frontend, backend, and API integration. While my main focus is frontend development, I have also worked with PHP and Laravel, which has given me a better understanding of server-side logic and the ability to collaborate on projects requiring deeper integration.",
      "about3": "I also have experience in digital marketing and WordPress, allowing me to quickly develop MVPs for advertising campaigns and product validation. Thanks to my combination of design, development, and automation, I can approach projects from a comprehensive perspective, creating efficient, scalable, and visually impactful solutions.",
      "about4": "These are the main technologies and skills that i master:",


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
    lng: 'es', // Idioma por defecto
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
