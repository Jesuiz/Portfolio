import { pinaculoEducation, maestroSupply, jesuizDesign, elValleDorado, crmCoiintawa, pythonScraper} from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { SlSocialBehance, SlStar, } from "react-icons/sl";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import Scroll from './Scroll';

const Projects = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="project" className="max-w-contentContainer mx-auto py-20 md:py-20 flex flex-col gap-10 items-center">
      <SectionTitle title={t('projects')} titleNo="01" />
      
      <div className="w-full flex flex-col items-center justify-center gap-20">

        {/* ============ CRM para Coiintawa ================ */}
        <div className="flex flex-col xl:flex-row gap-3">
          <div className="w-full xl:w-1/2 flex flex-col gap-2 justify-center items-center text-center lgl:items-start lgl:text-left z-10">
            <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide pb-2">{t('project2_1')}</p>
              <h3 className="text-2xl font-bold">{t('project2_2')}</h3>
            </div>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray pb-2">
              <li>PHP</li><li>Laravel</li><li>MySQL</li><li>AWS S3</li>
            </ul>
            <p className="bg-[#2f2f2f] text-sm md:text-base p-2 sm:p-3 pb-10 sm:pb-10 md:pb-10 lg:pb-5 md:p-5 lg:-mr-24 rounded-md">
              {t('project2_3')}</p>
          </div>
          <div className="w-full xl:w-1/2 flex justify-center items-center xl:justify-start -mt-8 lg:-mt-0 z-10 lg:z-0">
            <a className="w-[80%] xl:w-full h-auto relative group"
              href="https://sistema.coiintawa.pe/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md"
                  src={crmCoiintawa}
                  alt="Web App de Coiintawa" />
              </div>
            </a>
          </div>
        </div>
        {/* ============ CRM para Coiintawa ================== */}


        {/* ============ Web Bilingüe para Jesuiz Design ================ */}
        <div className="flex flex-col xl:flex-row gap-3 xl:flex-row-reverse">
        <div className="w-full xl:w-1/2 flex flex-col gap-2 justify-center items-center text-center lgl:items-end lgl:text-right z-10">
        <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide pb-2">{t('project3_1')}</p>
              <h3 className="text-2xl font-bold">{t('project3_2')}</h3>
            </div>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray pb-2">
              <li>PHP</li><li>Wordpress</li><li>SEO</li>
            </ul>
            <p className="bg-[#2f2f2f] text-sm md:text-base p-2 sm:p-3 pb-10 sm:pb-10 md:pb-10 lg:pb-5 md:p-5 lg:-ml-24 rounded-md">
              {t('project3_3')}</p>
          </div>
          <div className="w-full xl:w-1/2 flex justify-center items-center xl:justify-start -mt-8 lg:-mt-0 z-10 lg:z-0">
            <a className="w-[80%] xl:w-full h-auto relative group"
            href="https://jesuizdesign.com/"
            target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md"
                src={jesuizDesign}
                alt="Página Web de Jesuiz Design" />
              </div>
            </a>
          </div>
        </div>
        {/* ============ Web Bilingüe para Jesuiz Design ================== */}

        {/* ============ Scraper Web Automático ================ */}
        <div className="flex flex-col xl:flex-row gap-3">
        <div className="w-full xl:w-1/2 flex flex-col gap-2 justify-center items-center text-center lgl:items-start lgl:text-left z-10">
        <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide pb-2">{t('project6_1')}</p>
              <h3 className="text-2xl font-bold">{t('project6_2')}</h3>
            </div>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray pb-2">
            <li>Python</li><li>Angular</li>
            </ul>
            <p className="bg-[#2f2f2f] text-sm md:text-base p-2 sm:p-3 pb-10 sm:pb-10 md:pb-10 lg:pb-5 md:p-5 lg:-mr-24 rounded-md">
            {t('project6_3')}</p>
            </div>
          <div className="w-full xl:w-1/2 flex justify-center items-center xl:justify-start -mt-8 lg:-mt-0 z-10 lg:z-0">
            <a className="w-[80%] xl:w-full h-auto relative group"
            href="https://g.co/kgs/NxKXLnW"
            target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md"
                src={pythonScraper}
                alt="Scraper desarrollado con Python"/>
              </div>
            </a>
          </div>
        </div>
        {/* ============ Scraper Web Automático ================== */}

        {/* ============ Ecommerce para Maestro Supply Line ================ */}
        <div className="flex flex-col xl:flex-row gap-3 xl:flex-row-reverse">
        <div className="w-full xl:w-1/2 flex flex-col gap-2 justify-center items-center text-center lgl:items-end lgl:text-right z-10">
            <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide pb-2">{t('project5_1')}</p>
              <h3 className="text-2xl font-bold">{t('project5_2')}</h3>
            </div>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray pb-2">
              <li>PHP</li><li>Wordpress</li><li>Woocommerce</li><li>SEO</li>
            </ul>
            <p className="bg-[#2f2f2f] text-sm md:text-base p-2 sm:p-3 pb-10 sm:pb-10 md:pb-10 lg:pb-5 md:p-5 lg:-ml-24 rounded-md">
              {t('project5_3')}</p>
            </div>
          <div className="w-full xl:w-1/2 flex justify-center items-center xl:justify-start -mt-8 lg:-mt-0 z-10 lg:z-0">
            <a className="w-[80%] xl:w-full h-auto relative group"
            href="https://maestrosupplyline.com//"
            target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md"
                src={maestroSupply}
                alt="Ecommerce de Maestro Supply Line" />
              </div>
            </a>
          </div>
        </div>
        {/* ============ Ecommerce para Maestro Supply Line ================== */}

        {/* ============ Branding para El Valle Dorado ================ */}
        <div className="flex flex-col xl:flex-row gap-3">
        <div className="w-full xl:w-1/2 flex flex-col gap-2 justify-center items-center text-center lgl:items-start lgl:text-left z-10">
            <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide pb-2">{t('project4_1')}</p>
              <h3 className="text-2xl font-bold">{t('project4_2')}</h3>
            </div>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray pb-2">
            <li>Illustrator</li><li>Photoshop</li>
            </ul>
            <p className="bg-[#2f2f2f] text-sm md:text-base p-2 sm:p-3 pb-10 sm:pb-10 md:pb-10 lg:pb-5 md:p-5 lg:-mr-24 rounded-md">
            {t('project4_3')}</p>
            </div>
          <div className="w-full xl:w-1/2 flex justify-center items-center xl:justify-start -mt-8 lg:-mt-0 z-10 lg:z-0">
            <a className="w-[80%] xl:w-full h-auto relative group"
            href="https://www.behance.net/gallery/189443481/Manual-de-Identidad-Corporativa-para-El-Valle-Dorado"
            target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md"
                src={elValleDorado}
                alt="Logo de El Valle Dorado"/>
              </div>
            </a>
          </div>
        </div>
        {/* ============ Branding para El Valle Dorado ================== */}

        {/* ============ Branding para Pináculo Education ================ */}
        <div className="flex flex-col xl:flex-row gap-3 xl:flex-row-reverse">
        <div className="w-full xl:w-1/2 flex flex-col gap-2 justify-center items-center text-center lgl:items-end lgl:text-right z-10">
            <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide pb-2">{t('project1_1')}</p>
              <h3 className="text-2xl font-bold">{t('project1_2')}</h3>
            </div>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray pb-2">
            <li>Illustrator</li><li>Photoshop</li>
            </ul>
            <p className="bg-[#2f2f2f] text-sm md:text-base p-2 sm:p-3 pb-10 sm:pb-10 md:pb-10 lg:pb-5 md:p-5 lg:-ml-24 rounded-md">
            {t('project1_3')}</p>
            </div>
          <div className="w-full xl:w-1/2 flex justify-center items-center xl:justify-start -mt-8 lg:-mt-0 z-10 lg:z-0">
            <a className="w-[80%] xl:w-full h-auto relative group"
            href="https://www.behance.net/gallery/189966229/Manual-de-Identidad-Corporativa-para-Pinaculo-Education"
            target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md"
                src={pinaculoEducation}
                alt="Logo de Pináculo Education"/>
              </div>
            </a>
          </div>
        </div>
        {/* ============ Branding para Pináculo Education ================ */}

      </div>
    </section>
  );
};

export default Projects;
