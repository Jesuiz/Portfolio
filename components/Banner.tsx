import { motion } from "framer-motion";
import { profileImg } from "@/public/assets";
import Image from "next/image";
import React from 'react';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t, i18n } = useTranslation();

  const viewCvUrl = i18n.language === 'en' ? "https://jesus-cv.vercel.app/index-en" : "https://jesus-cv.vercel.app";
  const downloadCvUrl = i18n.language === 'en' ? "/assets/jesus_ruiz_cv_en.pdf" : "/assets/jesus_ruiz_cv_es.pdf";
    
  return (
    <section id="home" className="max-w-contentContainer mx-auto py-6 md:py-20 xl:py-10 flex flex-col gap-4 lgl:gap-8 md:flex-row lg:items-center">
      <div className="w-full md:w-2/3 flex flex-col items-center md:items-start md:text-left">
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="lgl:text-1xl text-lg font-titleFont tracking-wide text-textPrimary text-center md:text-left"
        >
          {t('hello')}
        </motion.h3>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-5xl mt-2 font-titleFont font-bold flex flex-col text-center md:text-left
          max-w md:max-w-[80%]"
        >
          {t('name')}

          <span className="text-2xl xl:text-4xl text-textPrimary mt-2 lgl:mt-5 font-semibold">
            <p>{t('description1')} {t('description2')}</p>
          </span>

        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-pretty text-sm xl:text-base text-textGray font-semilight text-pretty text-center md:text-left
          max-w md:max-w-[80%] xl:max-w-[85%] py-6"
          dangerouslySetInnerHTML={{ __html: t('bio') }}
        />
      </div>

      <div className="w-full md:w-1/3 flex flex-col items-center md:items-end">
        <div className="">
          <div className="">
            <motion.h3
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Image
                className="w-full w-[220px] md:w-[260px] rounded-md"
                src={profileImg}
                alt="Jesús Ruiz Portfolio"
              />
            </motion.h3>
          </div>

          <div className="w-full w-[220px] md:w-[260px] flex flex-row items-center justify-center mt-4 gap-2 z-20">
            <div className="w-1/2 flex flex-col items-center">
              <a href={viewCvUrl} target="_blank">
                <motion.button
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="w-32 py-2 rounded-md text-textPrimary text-[13px] border border-textPrimary hover:bg-hoverColor duration-300"
                >
                  {t('view_resume')}
                </motion.button>
              </a>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <a href={downloadCvUrl} target="_blank">
                <motion.button
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="w-32 py-2 rounded-md text-textPrimary text-[13px] border border-textPrimary hover:bg-hoverColor duration-300"
                >
                  {t('download_cv')}
                </motion.button>
              </a>
            </div>
          </div>



        </div>
      </div>
    </section >
  );
};

export default Banner;