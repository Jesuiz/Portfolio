import { motion } from "framer-motion";
import Scroll from './Scroll';
import { profileImg } from "@/public/assets";
import Image from "next/image";
import React from 'react';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t, i18n } = useTranslation();

  const cvUrl = i18n.language === 'en' ? "/assets/cv_en_jesus_ruiz.pdf" : "/assets/cv_es_jesus_ruiz.pdf";

  return (
    <section id="home" className="max-w-contentContainer mx-auto py-10 md:py-20 lgl:py-5 flex flex-col gap-4 lgl:gap-8 md:flex-row lg:items-center">
      <div className="w-full md:w-2/3 flex flex-col items-center md:items-start md:text-left">
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="lgl:text-1xl text-lg font-titleFont tracking-wide text-textGreen mb-5 lgl:mb-1 text-center md:text-left"
        >
          {t('hello')}
        </motion.h3>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-5xl lgl:text-5xl lgl:mt-5 font-titleFont font-bold flex flex-col mb-4 lgl:mb-5 text-center md:text-left"
        >
          {t('name')}
          <span className="text-2xl md:text-3xl lgl:text-5xl/[50px] text-textBlue mt-2 lgl:mt-5 font-semibold">
            {t('description1')}
          </span>
          <span className="text-2xl md:text-3xl lgl:text-5xl/[50px] text-textBlue font-semibold">
            {t('description2')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-balance text-sm lgl:text-base lgl:mt-5 text-textGray font-semilight mb-4 lgl:mb-5 text-pretty text-center md:text-left md:max-w-[400px] lgl:max-w-[700px]"
          dangerouslySetInnerHTML={{ __html: t('bio') }}
        />
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Scroll />
        </motion.h3>
      </div>
      
      <div className="w-full md:w-1/3 flex flex-col items-center justify-start lg:items-end">
        <div className="relative group flex flex-col items-center md:items-stretch">
          <div className="w-full relative z-20 flex justify-center items-center lgl:mb-4">
            <motion.h3
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Image
                className="rounded-lg max-w-full max-w-[200px] lgl:max-w-[500px]"
                src={profileImg}
                alt="Jesús Ruiz Portfolio"
              />
            </motion.h3>
          </div>
          <div className="w-full h-full relative z-20 flex justify-center items-center md:items-start mt-4 md:items-stretch">
            <a href={cvUrl} target="_blank">
              <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="px-8 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
              >
                {t('download_cv')}
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
