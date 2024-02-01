import { motion } from "framer-motion";
import { profileImg } from "@/public/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 lg:py-32 flex flex-col gap-4 lgl:gap-8 md:flex-row lg:items-center"
    >
      <div className="md:w-2/3">
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="lgl:text-3xl text-lg font-titleFont tracking-wide text-textGreen mb-4 lgl:mb-5"
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
        <span className="text-2xl lgl:text-3xl text-textGray mt-2 lgl:mt-5 font-semibold mb-4 lgl:mb-5">
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
      <a href="/assets/jesuiz_cv.pdf" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="px-4 py-2 rounded-md text-textGreen lgl:mt-5 text-[13px] border border-textGreen hover:bg-hoverColor duration-300 mb-4 lgl:mb-5"
        >
          Descargar CV
        </motion.button>
      </a>
      </div>

      <div className="md:w-1/3 md:pl-8">
        <div className="w- h-80 relative group">
          <div className="absolute w-full h-full bg-white rounded-lg"></div>
          <div className="w-full h-full relative z-20 flex justify-center items-center">
            <Image
              className="rounded-lg max-w-full max-h-full"
              src={profileImg}
              alt="profileImg"
            />
            </div>
          </div>
        </div>
    </section>
  );
};

export default Banner;
