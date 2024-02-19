import { motion } from "framer-motion";
import { profileImg } from "@/public/assets";
import Image from "next/image";
import React from 'react';
import Scroll from './Scroll';

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-8 lg:py-32 flex flex-col gap-4 lgl:gap-8 md:flex-row lg:items-center"
    >
      <div className="md:w-2/3">
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="lgl:text-2xl text-lg font-titleFont tracking-wide text-textGreen mb-4 lgl:mb-5"
        >
        ¡Hola!, soy
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-5xl lgl:text-7xl lgl:mt-5 font-titleFont font-bold flex flex-col mb-4 lgl:mb-5"
        >
          Jesús Ruiz
          <span className="text-2xl lgl:text-3xl text-textBlue mt-2 lgl:mt-5 font-semibold mb-4 lgl:mb-5">
            Me gusta Diseñar y Desarrollar
          </span>
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-balance text-base lgl:mt-5 md:max-w-[650px] text-textGray font-semilight mb-4 lgl:mb-5 text-pretty"
        >
          Soy Diseñador Gráfico con más de 6 años de experiencia en <span className="text-textGreen">Diseño de Identidad Visual</span> para marcas. Tengo 1 año de experiencia trabajando <span className="text-textGreen"> Aplicaciones Web con PHP y Laravel. </span> También tengo sólidos conocimientos y 2 años de experiencia construyendo <span className="text-textGreen">Páginas Web con Wordpress.</span>{" "}
        </motion.p>

        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Scroll />
        </motion.h3>
      </div>
      
      <div className="w-full md:w-1/3 md:pl-8 flex flex-col items-center justify-center">
        <div className="relative group flex flex-col items-center md:items-stretch">
          <div className="w-full relative z-20 flex justify-center items-center mb-4">
            <motion.h3
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Image
                className="rounded-lg max-w-full"
                src={profileImg}
                alt="profileImg"
              />
            </motion.h3>
          </div>

          <div className="w-full h-full relative z-20 flex justify-center items-center md:items-start mt-4 md:items-stretch">
            <a href="/assets/jesuiz_cv.pdf" target="_blank">
              <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="px-8 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                style={{ minWidth: '100px' }} // Añadimos un ancho mínimo al botón
              >
                Descargar CV
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
