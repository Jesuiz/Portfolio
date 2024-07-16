import { pinaculoEducation, maestroSupply, jesuizDesign, elValleDorado, crmCoiintawa, pythonScraper, sassCondoforce } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { SlSocialBehance, SlStar, } from "react-icons/sl";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import Scroll from './Scroll';

const Projects = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="project" className="max-w-contentContainer mx-auto py-5 md:py-20 flex flex-col gap-10 items-center">
      <SectionTitle title={t('projects')} titleNo="01" />

      <div className="w-full flex flex-col items-center justify-center gap-20">

        {/* ============ CRM para Coiintawa ================ */}
        <div className="flex flex-col xl:flex-row gap-3">
          <div className="w-full xl:w-1/2 flex flex-col gap-2 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide pb-2">{t('project1_1')}</p>
              <h3 className="text-2xl font-bold">{t('project1_2')}</h3>
            </div>
            <ul className="w-[90%] text-[11px] md:text-xs font-titleFont tracking-wide flex flex-wrap gap-2 justify-center text-textGray pb-2">
              <li className="w-1/2 sm:w-auto">PHP</li>
              <li className="w-1/2 sm:w-auto">Laravel</li>
              <li className="w-1/2 sm:w-auto">MySQL</li>
              <li className="w-1/2 sm:w-auto">Axios</li>
              <li className="w-1/2 sm:w-auto">Bootstrap</li>
              <li className="w-1/2 sm:w-auto">AWS S3</li>
              <li className="w-1/2 sm:w-auto">Cloudflare</li>
              <li className="w-1/2 sm:w-auto">Zoom SDK</li>
            </ul>
            <p className="md:w-[100%] lg:w-[100%] bg-[#2f2f2f] text-sm md:text-base p-5 pb-10 xl:p-5 rounded-md">
              {t('project1_3')}</p>
          </div>
          <div className="w-full xl:w-1/2 flex justify-center items-center xl:justify-start -mt-8 xl:-mt-0">
            <a className="w-[90%] md:w-[70%] xl:w-[100%] xl:w-full h-auto relative group"
              href="https://sistema.coiintawa.pe/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md z-10"
                  src={crmCoiintawa}
                  alt="Web App de Coiintawa" />
              </div>
            </a>
          </div>
        </div>
        {/* ============ CRM para Coiintawa ================ */}

        {/* ============ Web App for Condoforce ================ */}
        <div className="flex flex-col xl:flex-row gap-3">
          <div className="w-full xl:w-1/2 flex justify-center items-center xl:justify-start -mt-8 xl:-mt-0 order-2 xl:order-1">
            <a className="w-[90%] md:w-[70%] xl:w-[100%] xl:w-full h-auto relative group"
              href="https://github.com/Jesuiz/Condoforce"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md z-10"
                  src={sassCondoforce}
                  alt="Página Web de Jesuiz Design" />
              </div>
            </a>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-2 justify-center items-center text-center xlg:items-start xlg:text-left z-1 order-1 xl:order-2">
            <div className="flex flex-wrap justify-center">
              <p className="font-titleFont text-textBlue text-sm tracking-wide pr-2">{t('project2_1')}</p>
              <p className="font-titleFont text-textGreen text-sm tracking-wide pb-2">{t('project2_1_2')}</p>
            </div>
            <div className="flex flex-wrap justify-center -mt-2">
              <h3 className="text-2xl font-bold">{t('project2_2')}</h3>
            </div>
            <ul className="w-[90%] text-[11px] md:text-xs font-titleFont tracking-wide flex flex-wrap gap-2 justify-center text-textGray pb-2">
              <li className="w-1/2 sm:w-auto">PHP</li>
              <li className="w-1/2 sm:w-auto">Laravel</li>
              <li className="w-1/2 sm:w-auto">Filament</li>
              <li className="w-1/2 sm:w-auto">MySQL</li>
              <li className="w-1/2 sm:w-auto">Tailwind</li>
            </ul>
            <p className="md:w-[100%] lg:w-[100%] bg-[#2f2f2f] text-sm md:text-base p-5 pb-10 xl:p-5 rounded-md">
              {t('project2_3')}
            </p>
          </div>
        </div>
        {/* ============ Web App for Condoforce ================ */}

        {/* ============ Scraper Web Python ================ */}
        <div className="flex flex-col xl:flex-row gap-3">
          <div className="w-full xl:w-1/2 flex flex-col gap-2 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide pb-2">{t('project3_1')}</p>
              <h3 className="text-2xl font-bold">{t('project3_2')}</h3>
            </div>
            <ul className="w-[90%] text-[11px] md:text-xs font-titleFont tracking-wide flex flex-wrap gap-2 justify-center text-textGray pb-2">
              <li className="w-1/2 sm:w-auto">Python</li>
              <li className="w-1/2 sm:w-auto">Pyppeteer</li>
              <li className="w-1/2 sm:w-auto">Asyncio</li>
              <li className="w-1/2 sm:w-auto">Webdriver</li>
            </ul>
            <p className="md:w-[100%] lg:w-[100%] bg-[#2f2f2f] text-sm md:text-base p-5 pb-10 xl:p-5 rounded-md">
              {t('project3_3')}</p>
          </div>
          <div className="w-full xl:w-1/2 flex justify-center items-center xl:justify-start -mt-8 xl:-mt-0">
            <a className="w-[90%] md:w-[70%] xl:w-[100%] xl:w-full h-auto relative group"
              href="https://github.com/Jesuiz/ScraperPyPrecision"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md z-10"
                  src={pythonScraper}
                  alt="Scraper desarrollado con Python" />
              </div>
            </a>
          </div>
        </div>
        {/* ============ Scraper Web Python ================ */}

        {/* ============ Web Bilingüe para Jesuiz Design ================ */}
        <div className="flex flex-col xl:flex-row gap-3">
          <div className="w-full xl:w-1/2 flex justify-center items-center xl:justify-start -mt-8 xl:-mt-0 order-2 xl:order-1">
            <a className="w-[90%] md:w-[70%] xl:w-[100%] xl:w-full h-auto relative group"
              href="https://sistema.coiintawa.pe/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md z-10"
                  src={jesuizDesign}
                  alt="Página Web de Jesuiz Design" />
              </div>
            </a>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-2 justify-center items-center text-center xlg:items-start xlg:text-left z-1 order-1 xl:order-2">
            <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide pb-2">{t('project4_1')}</p>
              <h3 className="text-2xl font-bold">{t('project4_2')}</h3>
            </div>
            <ul className="w-[90%] text-[11px] md:text-xs font-titleFont tracking-wide flex flex-wrap gap-2 justify-center text-textGray pb-2">
              <li className="w-1/2 sm:w-auto">Wordpress</li>
              <li className="w-1/2 sm:w-auto">PHP</li>
              <li className="w-1/2 sm:w-auto">JavaScript</li>
              <li className="w-1/2 sm:w-auto">MySQL</li>
              <li className="w-1/2 sm:w-auto">jQuery</li>
              <li className="w-1/2 sm:w-auto">Elementor</li>
              <li className="w-1/2 sm:w-auto">Cloudflare</li>
              <li className="w-1/2 sm:w-auto">SEO</li>
            </ul>
            <p className="md:w-[100%] lg:w-[100%] bg-[#2f2f2f] text-sm md:text-base p-5 pb-10 xl:p-5 rounded-md">
              {t('project4_3')}
            </p>
          </div>
        </div>
        {/* ============ Web Bilingüe para Jesuiz Design ================ */}

        {/* ============ Ecommerce para Maestro Supply Line ================ */}
        <div className="flex flex-col xl:flex-row gap-3">
          <div className="w-full xl:w-1/2 flex flex-col gap-2 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide pb-2">{t('project5_1')}</p>
              <h3 className="text-2xl font-bold">{t('project5_2')}</h3>
            </div>
            <ul className="w-[90%] text-[11px] md:text-xs font-titleFont tracking-wide flex flex-wrap gap-2 justify-center text-textGray pb-2">
              <li className="w-1/2 sm:w-auto">Wordpress</li>
              <li className="w-1/2 sm:w-auto">PHP</li>
              <li className="w-1/2 sm:w-auto">JavaScript</li>
              <li className="w-1/2 sm:w-auto">MySQL</li>
              <li className="w-1/2 sm:w-auto">jQuery</li>
              <li className="w-1/2 sm:w-auto">Elementor</li>
              <li className="w-1/2 sm:w-auto">WooCommerce</li>
              <li className="w-1/2 sm:w-auto">SEO</li>
            </ul>
            <p className="md:w-[100%] lg:w-[100%] bg-[#2f2f2f] text-sm md:text-base p-5 pb-10 xl:p-5 rounded-md">
              {t('project5_3')}</p>
          </div>
          <div className="w-full xl:w-1/2 flex justify-center items-center xl:justify-start -mt-8 xl:-mt-0">
            <a className="w-[90%] md:w-[70%] xl:w-[100%] xl:w-full h-auto relative group"
              href="https://maestrosupplyline.com//"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md z-10"
                  src={maestroSupply}
                  alt="Ecommerce de Maestro Supply Line" />
              </div>
            </a>
          </div>
        </div>
        {/* ============ Ecommerce para Maestro Supply Line ================ */}

        {/* ============ Branding para Pináculo Education ================ */}
        <div className="flex flex-col xl:flex-row gap-3">
          <div className="w-full xl:w-1/2 flex justify-center items-center xl:justify-start -mt-8 xl:-mt-0 order-2 xl:order-1">
            <a className="w-[90%] md:w-[70%] xl:w-[100%] xl:w-full h-auto relative group"
              href="https://www.behance.net/gallery/189966229/Manual-de-Identidad-Corporativa-para-Pinaculo-Education"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md z-10"
                  src={pinaculoEducation}
                  alt="Logo de Pináculo Education" />
              </div>
            </a>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-2 justify-center items-center text-center xlg:items-start xlg:text-left z-1 order-1 xl:order-2">
            <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide pb-2">{t('project6_1')}</p>
              <h3 className="text-2xl font-bold">{t('project6_2')}</h3>
            </div>
            <ul className="w-[90%] text-[11px] md:text-xs font-titleFont tracking-wide flex flex-wrap gap-2 justify-center text-textGray pb-2">
              <li className="w-1/2 sm:w-auto">Illustrator</li>
              <li className="w-1/2 sm:w-auto">Photoshop</li>
              <li className="w-1/2 sm:w-auto">Branding</li>
            </ul>
            <p className="md:w-[100%] lg:w-[100%] bg-[#2f2f2f] text-sm md:text-base p-5 pb-10 xl:p-5 rounded-md">
              {t('project6_3')}
            </p>
          </div>
        </div>
        {/* ============ Branding para Pináculo Education ================ */}

        {/* ============ Branding para El Valle Dorado ================ */}
        <div className="flex flex-col xl:flex-row gap-3">
          <div className="w-full xl:w-1/2 flex flex-col gap-2 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide pb-2">{t('project7_1')}</p>
              <h3 className="text-2xl font-bold">{t('project7_2')}</h3>
            </div>
            <ul className="w-[90%] text-[11px] md:text-xs font-titleFont tracking-wide flex flex-wrap gap-2 justify-center text-textGray pb-2">
              <li className="w-1/2 sm:w-auto">Illustrator</li>
              <li className="w-1/2 sm:w-auto">Photoshop</li>
              <li className="w-1/2 sm:w-auto">Branding</li>
            </ul>
            <p className="md:w-[100%] lg:w-[100%] bg-[#2f2f2f] text-sm md:text-base p-5 pb-10 xl:p-5 rounded-md">
              {t('project7_3')}</p>
          </div>
          <div className="w-full xl:w-1/2 flex justify-center items-center xl:justify-start -mt-8 xl:-mt-0">
            <a className="w-[90%] md:w-[70%] xl:w-[100%] xl:w-full h-auto relative group"
              href="https://www.behance.net/gallery/189443481/Manual-de-Identidad-Corporativa-para-El-Valle-Dorado"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md z-10"
                  src={elValleDorado}
                  alt="Logo de El Valle Dorado" />
              </div>
            </a>
          </div>
        </div>
        {/* ============ Branding para El Valle Dorado ================ */}

      </div>
    </section>
  );
};

export default Projects;
