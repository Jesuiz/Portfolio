import { pinaculoEducation, maestroSupply, jesuizDesign, elValleDorado, crmCoiintawa, pythonScraper, sassCondoforce, webCoiintawa, quiroAxis, shinePeru, rvBuilders, dadosMedic } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { SlSocialBehance, SlStar, } from "react-icons/sl";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import Scroll from './Scroll';

const Projects = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="project" className="max-w-contentContainer mx-auto py-6 md:py-20 flex flex-col gap-10 items-center">
      <SectionTitle title={t('projects')} titleNo="01" />

      <div className="w-full flex flex-col items-center justify-center gap-12">

        {/* START PROJECTS 1 AND 2 */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-6">
          {/* ============ Web App for Coiintawa ================ */}
          <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textGray text-sm tracking-wide pb-1">
                {t('project1_1')}</p>
              <h3 className="text-2xl font-bold text-textPrimary">
                {t('project1_2')}</h3>
            </div>
            <ul className="w-[100%] text-[11px] font-titleFont tracking-wide flex flex-wrap justify-center text-textLight gap-1.5 pb-1">
              <li>PHP</li><li>Laravel</li><li>MySQL</li><li>Axios</li><li>Bootstrap</li><li>AWS S3</li><li>Cloudflare</li><li>Zoom SDK</li>
            </ul>
            <p className="w-[100%] bg-[#2f2f2f] text-sm p-4 pb-8 rounded-md">
              {t('project1_3')}</p>
            <a className="w-[85%] h-auto relative group" href="https://sistema.coiintawa.pe/" target="_blank">
              <div><Image
                  className="w-full h-full object-contain rounded-md -mt-6 z-10" src={crmCoiintawa} alt="Web App de Coiintawa" />
              </div>
            </a>
          </div>
          
          {/* ============ Web App for Condoforce ================ */}
          <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textGray text-sm tracking-wide pb-1">
                {t('project2_1')}</p>
              <h3 className="text-2xl font-bold text-textPrimary">
                {t('project2_2')}</h3>
            </div>
            <ul className="w-[100%] text-[11px] font-titleFont tracking-wide flex flex-wrap justify-center text-textLight gap-1.5 pb-1">
              <li>PHP</li><li>Laravel</li><li>Filament</li><li>MySQL</li><li>Tailwind</li><li>Cloudflare</li>
            </ul>
            <p className="w-[100%] bg-[#2f2f2f] text-sm p-4 pb-8 rounded-md">
              {t('project2_3')}</p>
            <a className="w-[85%] h-auto relative group" href="https://github.com/Jesuiz/Condoforce" target="_blank">
              <div><Image
                  className="w-full h-full object-contain rounded-md -mt-6 z-10" src={sassCondoforce} alt="Web App de Condoforce" />
              </div>
            </a>
          </div>
        </div>
        {/* END PROJECTS 1 AND 2 */}

        {/* START PROJECTS 3 AND 4 */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-6">
          {/* ============ Scraper Web with Python ================ */}
          <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textGray text-sm tracking-wide pb-1">
                {t('project3_1')}</p>
              <h3 className="text-2xl font-bold text-textPrimary">
                {t('project3_2')}</h3>
            </div>
            <ul className="w-[100%] text-[11px] font-titleFont tracking-wide flex flex-wrap justify-center text-textLight gap-1.5 pb-1">
              <li>Python</li><li>Pyppeteer</li><li>Asyncio</li><li>Webdriver</li>
            </ul>
            <p className="w-[100%] bg-[#2f2f2f] text-sm p-4 pb-8 rounded-md">
              {t('project3_3')}</p>
            <a className="w-[85%] h-auto relative group" href="https://github.com/Jesuiz/ScraperPyPrecision" target="_blank">
              <div><Image
                  className="w-full h-full object-contain rounded-md -mt-6 z-10" src={pythonScraper} alt="Scraper de Python para Precision LMS" />
              </div>
            </a>
          </div>
          
          {/* ============ Website with Wordpress for Jesuiz Design ================ */}
          <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textGray text-sm tracking-wide pb-1">
                {t('project4_1')}</p>
              <h3 className="text-2xl font-bold text-textPrimary">
                {t('project4_2')}</h3>
            </div>
            <ul className="w-[100%] text-[11px] font-titleFont tracking-wide flex flex-wrap justify-center text-textLight gap-1.5 pb-1">
              <li>Wordpress</li><li>Elementor</li><li>PHP</li><li>JavaScript</li><li>MySQL</li><li>Cloudflare</li><li>SEO</li><li>Polylang</li>
            </ul>
            <p className="w-[100%] bg-[#2f2f2f] text-sm p-4 pb-8 rounded-md">
              {t('project4_3')}</p>
            <a className="w-[85%] h-auto relative group" href="https://jesuizdesign.com/" target="_blank">
              <div><Image
                  className="w-full h-full object-contain rounded-md -mt-6 z-10" src={jesuizDesign} alt="Página Web de Jesuiz Design" />
              </div>
            </a>
          </div>
        </div>
        {/* END PROJECTS 3 AND 4 */}
        
        {/* START PROJECTS 5 AND 6 */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-6">
          {/* ============ Ecommerce para Maestro Supply Line ================ */}
          <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textGray text-sm tracking-wide pb-1">
                {t('project5_1')}</p>
              <h3 className="text-2xl font-bold text-textPrimary">
                {t('project5_2')}</h3>
            </div>
            <ul className="w-[100%] text-[11px] font-titleFont tracking-wide flex flex-wrap justify-center text-textLight gap-1.5 pb-1">
              <li>Wordpress</li><li>Elementor</li><li>PHP</li><li>JavaScript</li><li>MySQL</li><li>WooCommerce</li><li>SEO</li>
            </ul>
            <p className="w-[100%] bg-[#2f2f2f] text-sm p-4 pb-8 rounded-md">
              {t('project5_3')}</p>
            <a className="w-[85%] h-auto relative group" href="https://maestrosupplyline.com/" target="_blank">
              <div><Image
                  className="w-full h-full object-contain rounded-md -mt-6 z-10" src={maestroSupply} alt="Ecommerce de Maestro Supply Line" />
              </div>
            </a>
          </div>
          
          {/* ============ Website for Coiintawa ================ */}
          <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textGray text-sm tracking-wide pb-1">
                {t('project6_1')}</p>
              <h3 className="text-2xl font-bold text-textPrimary">
                {t('project6_2')}</h3>
            </div>
            <ul className="w-[100%] text-[11px] font-titleFont tracking-wide flex flex-wrap justify-center text-textLight gap-1.5 pb-1">
              <li>Wordpress</li><li>Elementor</li><li>PHP</li><li>JavaScript</li><li>MySQL</li><li>Cloudflare</li><li>SEO</li>
            </ul>
            <p className="w-[100%] bg-[#2f2f2f] text-sm p-4 pb-8 rounded-md">
              {t('project6_3')}</p>
            <a className="w-[85%] h-auto relative group" href="https://coiintawa.pe/" target="_blank">
              <div><Image
                  className="w-full h-full object-contain rounded-md -mt-6 z-10" src={webCoiintawa} alt="Página Web de Coiintawa" />
              </div>
            </a>
          </div>
        </div>
        {/* END PROJECTS 5 AND 6 */}

        {/* START PROJECTS 7 AND 8 */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-6">
          {/* ============ Website for Quiro Axis ================ */}
          <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textGray text-sm tracking-wide pb-1">
                {t('project7_1')}</p>
              <h3 className="text-2xl font-bold text-textPrimary">
                {t('project7_2')}</h3>
            </div>
            <ul className="w-[100%] text-[11px] font-titleFont tracking-wide flex flex-wrap justify-center text-textLight gap-1.5 pb-1">
            <li>Wordpress</li><li>Elementor</li><li>PHP</li><li>JavaScript</li><li>MySQL</li><li>Cloudflare</li><li>SEO</li>
            </ul>
            <p className="w-[100%] bg-[#2f2f2f] text-sm p-4 pb-8 rounded-md">
              {t('project7_3')}</p>
            <a className="w-[85%] h-auto relative group" href="https://quiroaxis.com/" target="_blank">
              <div><Image
                  className="w-full h-full object-contain rounded-md -mt-6 z-10" src={quiroAxis} alt="Website de Quiro Axis" />
              </div>
            </a>
          </div>
          
          {/* ============ Ecommerce for Shine Peru ================ */}
          <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textGray text-sm tracking-wide pb-1">
                {t('project8_1')}</p>
              <h3 className="text-2xl font-bold text-textPrimary">
                {t('project8_2')}</h3>
            </div>
            <ul className="w-[100%] text-[11px] font-titleFont tracking-wide flex flex-wrap justify-center text-textLight gap-1.5 pb-1">
            <li>Wordpress</li><li>Elementor</li><li>PHP</li><li>JavaScript</li><li>MySQL</li><li>WooCommerce</li><li>SEO</li>
            </ul>
            <p className="w-[100%] bg-[#2f2f2f] text-sm p-4 pb-8 rounded-md">
              {t('project8_3')}</p>
            <a className="w-[85%] h-auto relative group" href="https://shineperu.com/" target="_blank">
              <div><Image
                  className="w-full h-full object-contain rounded-md -mt-6 z-10" src={shinePeru} alt="Ecommerce de Shine Peru" />
              </div>
            </a>
          </div>
        </div>
        {/* END PROJECTS 7 AND 8 */}

        {/* START PROJECTS 9 AND 10 */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-6">
          {/* ============ Website for RV Builderss ================ */}
          <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textGray text-sm tracking-wide pb-1">
                {t('project9_1')}</p>
              <h3 className="text-2xl font-bold text-textPrimary">
                {t('project9_2')}</h3>
            </div>
            <ul className="w-[100%] text-[11px] font-titleFont tracking-wide flex flex-wrap justify-center text-textLight gap-1.5 pb-1">
            <li>Wordpress</li><li>Elementor</li><li>PHP</li><li>JavaScript</li><li>MySQL</li><li>Cloudflare</li><li>SEO</li>
            </ul>
            <p className="w-[100%] bg-[#2f2f2f] text-sm p-4 pb-8 rounded-md">
              {t('project9_3')}</p>
            <a className="w-[85%] h-auto relative group" href="https://rvbuilderspr.com/" target="_blank">
              <div><Image
                  className="w-full h-full object-contain rounded-md -mt-6 z-10" src={rvBuilders} alt="Website de RV Builders" />
              </div>
            </a>
          </div>
          
          {/* ============ Ecommerce for Dados Medic ================ */}
          <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textGray text-sm tracking-wide pb-1">
                {t('project10_1')}</p>
              <h3 className="text-2xl font-bold text-textPrimary">
                {t('project10_2')}</h3>
            </div>
            <ul className="w-[100%] text-[11px] font-titleFont tracking-wide flex flex-wrap justify-center text-textLight gap-1.5 pb-1">
            <li>Wordpress</li><li>Elementor</li><li>PHP</li><li>JavaScript</li><li>MySQL</li><li>WooCommerce</li><li>SEO</li>
            </ul>
            <p className="w-[100%] bg-[#2f2f2f] text-sm p-4 pb-8 rounded-md">
              {t('project10_3')}</p>
            <a className="w-[85%] h-auto relative group" href="https://dadosmedic.com/" target="_blank">
              <div><Image
                  className="w-full h-full object-contain rounded-md -mt-6 z-10" src={dadosMedic} alt="Ecommerce de Dados Medic" />
              </div>
            </a>
          </div>
        </div>
        {/* END PROJECTS 9 AND 10 */}

        {/* START PROJECTS 11 AND 12 */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-6">
          {/* ============ Branding for Pináculo Education ================ */}
          <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textGray text-sm tracking-wide pb-1">
                {t('project11_1')}</p>
              <h3 className="text-2xl font-bold text-textPrimary">
                {t('project11_2')}</h3>
            </div>
            <ul className="w-[100%] text-[11px] font-titleFont tracking-wide flex flex-wrap justify-center text-textLight gap-1.5 pb-1">
              <li>Illustrator</li><li>Photoshop</li><li>Figma</li><li>Branding</li>
            </ul>
            <p className="w-[100%] bg-[#2f2f2f] text-sm p-4 pb-8 rounded-md">
              {t('project11_3')}</p>
            <a className="w-[85%] h-auto relative group" href="https://www.behance.net/gallery/189966229/Manual-de-Identidad-Corporativa-para-Pinaculo-Education" target="_blank">
              <div><Image
                  className="w-full h-full object-contain rounded-md -mt-6 z-10" src={pinaculoEducation} alt="Logo de Pináculo Education" />
              </div>
            </a>
          </div>
          
          {/* ============ Branding for El Valle Dorado ================ */}
          <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center items-center text-center xlg:items-start xlg:text-left z-1">
            <div>
              <p className="font-titleFont text-textGray text-sm tracking-wide pb-1">
                {t('project12_1')}</p>
              <h3 className="text-2xl font-bold text-textPrimary">
                {t('project12_2')}</h3>
            </div>
            <ul className="w-[100%] text-[11px] font-titleFont tracking-wide flex flex-wrap justify-center text-textLight gap-1.5 pb-1">
              <li>Illustrator</li><li>Photoshop</li><li>Figma</li><li>Branding</li>
            </ul>
            <p className="w-[100%] bg-[#2f2f2f] text-sm p-4 pb-8 rounded-md">
              {t('project12_3')}</p>
            <a className="w-[85%] h-auto relative group" href="https://www.behance.net/gallery/189443481/Manual-de-Identidad-Corporativa-para-El-Valle-Dorado" target="_blank">
              <div><Image
                  className="w-full h-full object-contain rounded-md -mt-6 z-10" src={elValleDorado} alt="Logo de El Valle Dorado" />
              </div>
            </a>
          </div>
        </div>
        {/* END PROJECTS 11 AND 12 */}

      </div>
    </section>
  );
};

export default Projects;
