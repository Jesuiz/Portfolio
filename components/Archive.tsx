import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useTranslation } from 'react-i18next';

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <section id="courses" className="max-w-contentContainer mx-auto py-20 flex flex-col gap-10 items-center">
      <SectionTitle title={t('courses')} titleNo="03" />

      <div className="w-full flex flex-col items-center justify-center gap-12">

        {/* START COURSES */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            
            <ArchiveCard
              title="Definitivo de HTML y CSS"
              des="Aprende HTML y CSS desde cero, sin conocimientos previos."
              company="Platzi"
              hours="Contenido: 7 Horas - Práctica: 16 Horas"
              date="2024"
              link="https://platzi.com/p/JesuizDesign/curso/2008-html-css/diploma/detalle/"
            />

            <ArchiveCard
              title="Práctico de HTML y CSS"
              des="Pon en práctica todo lo que sabes de HTML y CSS."
              company="Platzi"
              hours="Contenido: 2 Horas - Práctica: 14 Horas"
              date="2024"
              link="https://platzi.com/p/JesuizDesign/curso/1758-html-practico/diploma/detalle/"
            />

            <ArchiveCard
              title="Básico de Tailwind 2 y 3"
              des="Aprenderás Tailwind CSS para agilizar el desarrollo de tus proyectos."
              company="Platzi"
              hours="Contenido: 4 Horas - Práctica: 16 Horas"
              date="2024"
              link="https://platzi.com/p/JesuizDesign/curso/2702-tailwind/diploma/detalle/"
            />

            <ArchiveCard
              title="Optimización Web"
              des="Técnicas y herramientas para mejorar el perfomance de tus aplicaciones web."
              company="Platzi"
              hours="Contenido: 7 Horas - Práctica: 20 Horas"
              date="2024"
              link="https://platzi.com/p/JesuizDesign/curso/1973-web-performance/diploma/detalle/"
            />

            <ArchiveCard
              title="Profesional de Git y Github"
              des="Aprende a trabajar con Git para gestionar tus proyectos en local y Github."
              company="Platzi"
              hours="Contenido: 6 Horas - Práctica: 16 Horas"
              date="2024"
              link="https://platzi.com/p/JesuizDesign/curso/1557-git-github/diploma/detalle/"
            />
          
            <ArchiveCard
              title="Entornos de Desarrollo y Deployment en Wordpress"
              des="Entornos y despliegues con Wordpress."
              company="Platzi"
              hours="Contenido: 2 Horas - Práctica: 8 Horas"
              date="2024"
              link="https://platzi.com/p/JesuizDesign/curso/2602-course/diploma/detalle/"
            />

            {showMore && (
              <>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  <ArchiveCard
                    title="Profesional de Wordpress"
                    des="Profundiza Wordpress y su uso desde una visión mas amplia como framework."
                    company="Platzi"
                    hours="Contenido: 4 Horas - Práctica: 14 Horas"
                    date="2024"
                    link="https://platzi.com/p/JesuizDesign/curso/1779-wordpress-profesional/diploma/detalle/"
                  /></motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  <ArchiveCard
                    title="EF Standard English Test"
                    des="El nivel alcanzado es 59/100, lo que corresponde a B2 Upper Intermediate."
                    company="EF SET"
                    hours=""
                    date="2023"
                    link="https://cert.efset.org/iawRk2"
                  /></motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  <ArchiveCard
                    title="API REST con PHP y MYSQL"
                    des="Crea una API Rest con PHP y MySQL."
                    company="Udemy"
                    hours="Contenido: 1.5 Horas - Práctica: 6 Horas"
                    date="2023"
                    link="https://www.udemy.com/certificate/UC-31d0507c-7fd7-4378-b191-451e5ba13819/"
                  /></motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                  <ArchiveCard
                    title="Pensamiento Lógico: Algoritmos y Diagramas"
                    des="Conceptos fundamentales: sistema binario, diagramas de flujo y más."
                    company="Platzi"
                    hours="Contenido: 2 Horas - Práctica: 10 Horas"
                    date="2023"
                    link="https://platzi.com/p/JesuizDesign/curso/3221-pensamiento-logico/diploma/detalle/"
                  /></motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                  <ArchiveCard
                    title="PHP con Laravel"
                    des="Desarrolla aplicaciones web a la medida con PHP y el framework para los artesanos de la web: Laravel."
                    company="Platzi"
                    hours="Contenido: 3 Horas - Práctica: 16 Horas"
                    date="2023"
                    link="https://platzi.com/p/JesuizDesign/curso/1467-curso-php-laravel/diploma/detalle/"
                  /></motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                  <ArchiveCard
                    title="Introducción a Frameworks de PHP"
                    des="Estructura, patrones y buenas prácticas de frameworks de desarrollo backend."
                    company="Platzi"
                    hours="Contenido: 1 Horas - Práctica: 2 Horas"
                    date="2023"
                    link="https://platzi.com/p/JesuizDesign/curso/2033-php-frameworks/diploma/detalle/"
                  /></motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  <ArchiveCard
                    title="API REST con PHP"
                    des="Aprende a configurar e implementar servicios REST, incluyendo autenticación y manejo de errores."
                    company="Platzi"
                    hours="Contenido: 2 Horas - Práctica: 16 Horas"
                    date="2023"
                    link="https://platzi.com/p/JesuizDesign/curso/1638-api-rest/diploma/detalle/"
                  /></motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  <ArchiveCard
                    title="Instalación, Fundamentos y Operadores de PHP"
                    des="Aprende PHP, el lenguaje para backend presente en el 80% de sitios web."
                    company="Platzi"
                    hours="Contenido: 4 Horas - Práctica: 14 Horas"
                    date="2023"
                    link="https://platzi.com/p/JesuizDesign/curso/2646-php/diploma/detalle/"
                  /></motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  <ArchiveCard
                    title="Computadores e Informática"
                    des="Aprende lo esencial de tu computadora: sistemas, archivos, programas, y más."
                    company="Platzi"
                    hours="Contenido: 4 Horas - Práctica: 10 Horas"
                    date="2023"
                    link="https://platzi.com/p/JesuizDesign/curso/2793-computacion-basica/diploma/detalle/"
                  /></motion.div>
              </>
            )}
          </div>

          <div className="flex flex-row items-center justify-center gap-4">
            {showMore ? (
              <button
                onClick={() => setShowMore(false)}
                className="w-32 h-12 border border-textPrimary mt-6 font-titleFont text-sm text-textPrimary tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('courses_less')}
              </button>
            ) : (
              <button
                onClick={() => setShowMore(true)}
                className="w-32 h-12 border border-textPrimary mt-6 font-titleFont text-sm text-textPrimary tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('courses_more')}
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Archive;
