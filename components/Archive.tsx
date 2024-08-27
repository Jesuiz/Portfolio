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
              title="API REST con PHP y MYSQL"
              des="Aprende a crear una API REST con PHP para compartir información desde la DB usando el motor de base de datos MySQL."
              listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
              company="Udemy"
              date="2023"
              link="https://www.udemy.com/certificate/UC-31d0507c-7fd7-4378-b191-451e5ba13819/"
            />
            <ArchiveCard
              title="Pensamiento Lógico: Algoritmos y Diagramas"
              des="Aprende conceptos fundamentales de la programación como el sistema binario, tablas de verdad y operadores lógicos."
              listItem={["Pensamiento Lógico", "Diagramas de Flujo", "Algoritmos"]}
              company="Platzi"
              date="2023"
              link="https://platzi.com/p/JesuizDesign/curso/3221-pensamiento-logico/diploma/detalle/"
            />
            <ArchiveCard
              title="PHP con Laravel"
              des="Aprende a desarrollar aplicaciones web a la medida de tus necesidades con todas las bondades y ventajas de Laravel."
              listItem={["Pensamiento Lógico", "Diagramas de Flujo", "Algoritmos"]}
              company="Platzi"
              date="2023"
              link="https://platzi.com/p/JesuizDesign/curso/1467-curso-php-laravel/diploma/detalle/"
            />

            {showMore && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <ArchiveCard
                    title="Introducción a Frameworks de PHP"
                    des="Descubre Los frameworks de desarrollo backend y aprende la estructura, patrones y buenas prácticas que nos otorgan."
                    listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                    company="Platzi"
                    date="2023"
                    link="https://platzi.com/p/JesuizDesign/curso/2033-php-frameworks/diploma/detalle/"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <ArchiveCard
                    title="API REST con PHP"
                    des="Aprende a configurar tus entornos de desarrollo para implementar servicios de API RESTful incluyendo autenticación y manejo de errores."
                    listItem={["Reactjs", "Tailwind CSS", "redux-toolkit"]}
                    company="Platzi"
                    date="2023"
                    link="https://platzi.com/p/JesuizDesign/curso/1638-api-rest/diploma/detalle/"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <ArchiveCard
                    title="Instalación, Fundamentos y Operadores de PHP"
                    des="Conoce PHP, su instalación, sintaxis, tipos de datos, operadores y lo básico para empezar a programar."
                    listItem={["Nextjs", "Tailwind CSS", "next-auth", "firebase"]}
                    company="Platzi"
                    date="2023"
                    link="https://platzi.com/p/JesuizDesign/curso/2646-php/diploma/detalle/"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <ArchiveCard
                    title="Computadores e Informática"
                    des="Aprende todo lo básico de computadoras: hardware, software, puertos, sistemas operativos y más."
                    listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                    company="Platzi"
                    date="2023"
                    link="https://platzi.com/p/JesuizDesign/curso/2793-computacion-basica/diploma/detalle/"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <ArchiveCard
                    title="EF Standard English Test"
                    des="B2 Upper Intermediate (Score: 59/100)"
                    listItem={["English"]}
                    company="EF SET"
                    date="2023"
                    link="https://cert.efset.org/iawRk2"
                  />
                </motion.div>
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
