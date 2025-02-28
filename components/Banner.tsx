import { motion } from "framer-motion";
import { profileImg } from "@/public/assets";
import Image from "next/image";
import React from 'react';
import { useTranslation } from 'react-i18next';


const Banner = () => {
  const { t, i18n } = useTranslation();
  const background = "bg-[url('/assets/img/background_hero.webp')]";

  const viewCvUrl = i18n.language === 'en' ? "https://curriculum.jesuizdesign.com/index-en" : "https://curriculum.jesuizdesign.com/";
  const downloadCvUrl = i18n.language === 'en' ? "/assets/cv_jesus_ruiz_en.pdf" : "/assets/cv_jesus_ruiz_es.pdf";
    
  return (
    <section id="home" className="max-w-contentContainer mx-auto py-6 md:py-20 xl:py-10 flex flex-col gap-4 lgl:gap-8 md:flex-row lg:items-center z-99">
      
      <div className="w-full md:w-2/3 flex flex-col items-center md:items-start md:text-left z-10">
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="lgl:text-1xl text-lg font-semilight tracking-wide text-textPrimary text-center md:text-left"
        >
          {t('hello')}
        </motion.h3>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-5xl mt-2 font-titleFont font-extrabold flex flex-col text-center md:text-left
          max-w md:max-w-[80%]"
        >
          {t('name')}

          <span className="text-pretty text-2xl xl:text-4xl text-textPrimary mt-2 lgl:mt-5 font-bold xl:max-w-[90%]">
            <p>{t('description1')} {t('description2')}</p>
          </span>

        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-pretty text-sm xl:text-base text-textGray font-semilight text-center md:text-left
          max-w md:max-w-[80%] xl:max-w-[70%] py-6"
          dangerouslySetInnerHTML={{ __html: t('bio') }}
        />
      </div>

      <div className="w-full md:w-1/3 flex flex-col items-center md:items-end z-10">
        <div className="">
          <div className="">
            <motion.h3
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Image
                className="w-full md:w-[260px] rounded-md"
                src={profileImg}
                width={330} 
                height={331}
                alt="Jesús Ruiz Portfolio"
              />
            </motion.h3>
          </div>

          <div className="w-full md:w-[260px] flex flex-row items-center justify-center mt-4 gap-2 z-20">
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

      <div className={`absolute w-[120%] h-80 bottom-80 sm:bottom-80 md:bottom-32 lg:bottom-12 xl:bottom-8
                  opacity-20 bg-center bg-no-repeat left-1/2 -translate-x-1/2 z-1 ${background}`}/>
                  
    </section >
  );
};

export default Banner;