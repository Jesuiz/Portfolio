import { pinaculoEducation, maestroSupply, jesuizDesign, elValleDorado, crmCoiintawa, pythonScraper, sassCondoforce, webCoiintawa, quiroAxis, rvBuilders, shinePeru, dadosMedic, ahistawa, macartur } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="project" className="max-w-contentContainer mx-auto py-20 flex flex-col gap-10 items-center">
      <SectionTitle title={t('projects')} titleNo="01" />

      <div className="w-full flex flex-col items-center justify-center gap-12">

        {/* START PROJECTS 1 AND 3 */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-6">

          {/* ============ Web App for Coiintawa ================ */}
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-1 justify-between items-center text-center xlg:items-start xlg:text-left z-1 hover:-translate-y-2 transition-transform duration-300 group ">
            <div>
              <button className="h-6 px-2 border border-textPrimary font-titleFont text-[10px] text-textPrimary tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('project1_1')}</button>
              <h3 className="text-xl font-bold text-textLight py-2">
                {t('project1_2')}</h3>
              <h4 className="text-xs text-textGray pb-1.5">
                {t('project1_2_1')}</h4>
            </div>

            <div className="w-[100%] bg-[#2f2f2f] text-sm p-2 pb-10 rounded-md text-balance">
              <ul className="w-[100%] py-1 px-2 text-[10px] text-textPrimary font-titleFont tracking-wide flex flex-wrap justify-center gap-1.5 leading-none">
                <li>PHP</li><li>Laravel</li><li>MySQL</li><li>Bootstrap</li><li>AWS S3</li><li>Cloudflare</li>
              </ul>
              <p className="w-[100%] py-1 px-2 text-xs">
                {t('project1_3')}</p>
            </div>
            <a className="w-[85%] h-auto relative group" href="https://sistema.coiintawa.pe/" target="_blank">
              <div><Image
                className="w-full h-full object-contain rounded-md -mt-8 z-10 shadow-lg shadow-black/40"
                src={crmCoiintawa}
                width={1920}
                height={1030}
                alt="Web App de Coiintawa" />
              </div>
            </a>
          </div>

          {/* ============ Web App for Condoforce ================ */}
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-1 justify-between items-center text-center xlg:items-start xlg:text-left z-1 hover:-translate-y-2 transition-transform duration-300 group">
            <div>
              <button className="h-6 px-2 border border-textPrimary font-titleFont text-[11px] text-textPrimary tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('project2_1')}</button>
              <h3 className="text-xl font-bold text-textLight py-2">
                {t('project2_2')}</h3>
              <h4 className="text-xs text-textGray pb-1.5">
                {t('project2_2_1')}</h4>
            </div>

            <div className="w-[100%] bg-[#2f2f2f] text-sm p-2 pb-10 rounded-md text-balance">
              <ul className="w-[100%] py-1 px-2 text-[10px] text-textPrimary font-titleFont tracking-wide flex flex-wrap justify-center gap-1.5 leading-none">
                <li>PHP</li><li>Laravel</li><li>Filament</li><li>MySQL</li><li>Tailwind</li><li>Cloudflare</li>
              </ul>
              <p className="w-[100%] py-1 px-2 text-xs">
                {t('project2_3')}</p>
            </div>
            <a className="w-[85%] h-auto relative group" href="https://github.com/Jesuiz/Condoforce" target="_blank">
              <div><Image
                className="w-full h-full object-contain rounded-md -mt-8 z-10 shadow-lg shadow-black/40"
                src={sassCondoforce}
                width={1920}
                height={1030}
                alt="Web App de Condoforce" />
              </div>
            </a>
          </div>


          {/* ============ Scraper Web with Python ================ */}
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-1 justify-between items-center text-center xlg:items-start xlg:text-left z-1 hover:-translate-y-2 transition-transform duration-300 group">
            <div>
              <button className="h-6 px-2 border border-textPrimary font-titleFont text-[11px] text-textPrimary tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('project3_1')}</button>
              <h3 className="text-xl font-bold text-textLight py-2">
                {t('project3_2')}</h3>
              <h4 className="text-xs text-textGray pb-1.5">
                {t('project3_2_1')}</h4>
            </div>

            <div className="w-[100%] bg-[#2f2f2f] text-sm p-2 pb-10 rounded-md text-balance">
              <ul className="w-[100%] py-1 px-2 text-[10px] text-textPrimary font-titleFont tracking-wide flex flex-wrap justify-center gap-1.5 leading-none">
                <li>Python</li><li>Pyppeteer</li><li>Asyncio</li><li>Webdriver</li>
              </ul>
              <p className="w-[100%] py-1 px-2 text-xs">
                {t('project3_3')}</p>
            </div>
            <a className="w-[85%] h-auto relative group" href="https://github.com/Jesuiz/ScraperPyPrecision" target="_blank">
              <div><Image
                className="w-full h-full object-contain rounded-md -mt-8 z-10 shadow-lg shadow-black/40"
                src={pythonScraper}
                width={1920}
                height={1030}
                alt="Scraper de Python para Precision LMS" />
              </div>
            </a>
          </div>

        </div>
        {/* END PROJECTS 1 AND 3 */}

        {/* START PROJECTS 4 AND 6 */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-6">

          {/* ============ Website with Wordpress for Jesuiz Design ================ */}
          <div className="w-full md:w-1/3 flex flex-col gap-1 justify-between items-center text-center xlg:items-start xlg:text-left z-1 hover:-translate-y-2 transition-transform duration-300 group">
            <div>
              <button className="h-6 px-2 border border-textPrimary font-titleFont text-[11px] text-textPrimary tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('project4_1')}</button>
              <h3 className="text-xl font-bold text-textLight py-2">
                {t('project4_2')}</h3>
              <h4 className="text-xs text-textGray pb-1.5">
                {t('project4_2_1')}</h4>
            </div>

            <div className="w-[100%] bg-[#2f2f2f] text-sm p-2 pb-10 rounded-md text-balance">
              <ul className="w-[100%] py-1 px-2 text-[10px] text-textPrimary font-titleFont tracking-wide flex flex-wrap justify-center gap-1.5 leading-none">
                <li>Wordpress</li><li>Polylang</li><li>PHP</li><li>JavaScript</li><li>Cloudflare</li><li>SEO</li>
              </ul>
              <p className="w-[100%] py-1 px-2 text-xs">
                {t('project4_3')}</p>
            </div>
            <a className="w-[85%] h-auto relative group" href="https://jesuizdesign.com/" target="_blank">
              <div><Image
                className="w-full h-full object-contain rounded-md -mt-8 z-10 shadow-lg shadow-black/40"
                src={jesuizDesign}
                width={1920}
                height={1030}
                alt="Página Web de Jesuiz Design" />
              </div>
            </a>
          </div>

          {/* ============ Ecommerce para Maestro Supply Line ================ */}
          <div className="w-full md:w-1/3 flex flex-col gap-1 justify-between items-center text-center xlg:items-start xlg:text-left z-1 hover:-translate-y-2 transition-transform duration-300 group">
            <div>
              <button className="h-6 px-2 border border-textPrimary font-titleFont text-[11px] text-textPrimary tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('project5_1')}</button>
              <h3 className="text-xl font-bold text-textLight py-2">
                {t('project5_2')}</h3>
              <h4 className="text-xs text-textGray pb-1.5">
                {t('project5_2_1')}</h4>
            </div>

            <div className="w-[100%] bg-[#2f2f2f] text-sm p-2 pb-10 rounded-md text-balance">
              <ul className="w-[100%] py-1 px-2 text-[10px] text-textPrimary font-titleFont tracking-wide flex flex-wrap justify-center gap-1.5 leading-none">
                <li>Wordpress</li><li>WooCommerce</li><li>PHP</li><li>JavaScript</li><li>SEO</li>
              </ul>
              <p className="w-[100%] py-1 px-2 text-xs">
                {t('project5_3')}</p>
            </div>
            <a className="w-[85%] h-auto relative group" href="https://maestrosupplyline.com/" target="_blank">
              <div><Image
                className="w-full h-full object-contain rounded-md -mt-8 z-10 shadow-lg shadow-black/40"
                src={maestroSupply}
                width={1920}
                height={1030}
                alt="Ecommerce de Maestro Supply Line" />
              </div>
            </a>
          </div>

          {/* ============ Website for Coiintawa ================ */}
          <div className="w-full md:w-1/3 flex flex-col gap-1 justify-between items-center text-center xlg:items-start xlg:text-left z-1 hover:-translate-y-2 transition-transform duration-300 group">
            <div>
              <button className="h-6 px-2 border border-textPrimary font-titleFont text-[11px] text-textPrimary tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('project6_1')}</button>
              <h3 className="text-xl font-bold text-textLight py-2">
                {t('project6_2')}</h3>
              <h4 className="text-xs text-textGray pb-1.5">
                {t('project6_2_1')}</h4>
            </div>

            <div className="w-[100%] bg-[#2f2f2f] text-sm p-2 pb-10 rounded-md text-balance">
              <ul className="w-[100%] py-1 px-2 text-[10px] text-textPrimary font-titleFont tracking-wide flex flex-wrap justify-center gap-1.5 leading-none">
                <li>Wordpress</li><li>PHP</li><li>JavaScript</li><li>Cloudflare</li><li>SEO</li>
              </ul>
              <p className="w-[100%] py-1 px-2 text-xs">
                {t('project6_3')}</p>
            </div>
            <a className="w-[85%] h-auto relative group" href="https://coiintawa.pe/" target="_blank">
              <div><Image
                className="w-full h-full object-contain rounded-md -mt-8 z-10 shadow-lg shadow-black/40"
                src={webCoiintawa}
                width={1920}
                height={1030}
                alt="Página Web de Coiintawa" />
              </div>
            </a>
          </div>

        </div>
        {/* END PROJECTS 4 AND 6 */}

        {/* START PROJECTS 7 AND 9 */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-6">
          {/* ============ Website for Quiro Axis ================ */}
          <div className="w-full md:w-1/3 flex flex-col gap-1 justify-between items-center text-center xlg:items-start xlg:text-left z-1 hover:-translate-y-2 transition-transform duration-300 group">
            <div>
              <button className="h-6 px-2 border border-textPrimary font-titleFont text-[11px] text-textPrimary tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('project7_1')}</button>
              <h3 className="text-xl font-bold text-textLight py-2">
                {t('project7_2')}</h3>
              <h4 className="text-xs text-textGray pb-1.5">
                {t('project7_2_1')}</h4>
            </div>

            <div className="w-[100%] bg-[#2f2f2f] text-sm p-2 pb-10 rounded-md text-balance">
              <ul className="w-[100%] py-1 px-2 text-[10px] text-textPrimary font-titleFont tracking-wide flex flex-wrap justify-center gap-1.5 leading-none">
                <li>Wordpress</li><li>PHP</li><li>JavaScript</li><li>SEO</li>
              </ul>
              <p className="w-[100%] py-1 px-2 text-xs">
                {t('project7_3')}</p>
            </div>
            <a className="w-[85%] h-auto relative group" href="https://quiroaxis.com/" target="_blank">
              <div><Image
                className="w-full h-full object-contain rounded-md -mt-8 z-10 shadow-lg shadow-black/40"
                src={quiroAxis}
                width={1920}
                height={1030}
                alt="Website de Quiro Axis" />
              </div>
            </a>
          </div>

          {/* ============ Website for RV Builderss ================ */}
          <div className="w-full md:w-1/3 flex flex-col gap-1 justify-between items-center text-center xlg:items-start xlg:text-left z-1 hover:-translate-y-2 transition-transform duration-300 group">
            <div>
              <button className="h-6 px-2 border border-textPrimary font-titleFont text-[11px] text-textPrimary tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('project9_1')}</button>
              <h3 className="text-xl font-bold text-textLight py-2">
                {t('project9_2')}</h3>
              <h4 className="text-xs text-textGray pb-1.5">
                {t('project9_2_1')}</h4>
            </div>

            <div className="w-[100%] bg-[#2f2f2f] text-sm p-2 pb-10 rounded-md text-balance">
              <ul className="w-[100%] py-1 px-2 text-[10px] text-textPrimary font-titleFont tracking-wide flex flex-wrap justify-center gap-1.5 leading-none">
                <li>Wordpress</li><li>PHP</li><li>JavaScript</li><li>SEO</li>
              </ul>
              <p className="w-[100%] py-1 px-2 text-xs">
                {t('project9_3')}</p>
            </div>
            <a className="w-[85%] h-auto relative group" href="https://rvbuilderspr.com/" target="_blank">
              <div><Image
                className="w-full h-full object-contain rounded-md -mt-8 z-10 shadow-lg shadow-black/40"
                src={rvBuilders}
                width={1920}
                height={1030}
                alt="Website de RV Builders" />
              </div>
            </a>
          </div>

          {/* ============ Ecommerce for Shine Peru ================ */}
          <div className="w-full md:w-1/3 flex flex-col gap-1 justify-between items-center text-center xlg:items-start xlg:text-left z-1 hover:-translate-y-2 transition-transform duration-300 group">
            <div>
              <button className="h-6 px-2 border border-textPrimary font-titleFont text-[11px] text-textPrimary tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('project8_1')}</button>
              <h3 className="text-xl font-bold text-textLight py-2">
                {t('project8_2')}</h3>
              <h4 className="text-xs text-textGray pb-1.5">
                {t('project8_2_1')}</h4>
            </div>

            <div className="w-[100%] bg-[#2f2f2f] text-sm p-2 pb-10 rounded-md text-balance">
              <ul className="w-[100%] py-1 px-2 text-[10px] text-textPrimary font-titleFont tracking-wide flex flex-wrap justify-center gap-1.5 leading-none">
                <li>Wordpress</li><li>WooCommerce</li><li>PHP</li><li>JavaScript</li><li>SEO</li>
              </ul>
              <p className="w-[100%] py-1 px-2 text-xs">
                {t('project9_3')}</p>
            </div>
            <a className="w-[85%] h-auto relative group" href="https://shineperu.com/" target="_blank">
              <div><Image
                className="w-full h-full object-contain rounded-md -mt-8 z-10 shadow-lg shadow-black/40"
                src={shinePeru}
                width={1920}
                height={1030}
                alt="Ecommerce de Shine Peru" />
              </div>
            </a>
          </div>

        </div>
        {/* END PROJECTS 7 AND 9 */}

        {/* START PROJECTS 10 AND 12 */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-6">
          {/* ============ Branding for Pináculo Education ================ */}
          <div className="w-full md:w-1/3 flex flex-col gap-1 justify-between items-center text-center xlg:items-start xlg:text-left z-1 hover:-translate-y-2 transition-transform duration-300 group">
            <div>
              <button className="h-6 px-2 border border-textPrimary font-titleFont text-[11px] text-textPrimary tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('project11_1')}</button>
              <h3 className="text-xl font-bold text-textLight py-2">
                {t('project11_2')}</h3>
              <h4 className="text-xs text-textGray pb-1.5">
                {t('project11_2_1')}</h4>
            </div>

            <div className="w-[100%] bg-[#2f2f2f] text-sm p-2 pb-10 rounded-md text-balance">
              <ul className="w-[100%] py-1 px-2 text-[10px] text-textPrimary font-titleFont tracking-wide flex flex-wrap justify-center gap-1.5 leading-none">
                <li>Illustrator</li><li>Photoshop</li><li>Figma</li>
              </ul>
              <p className="w-[100%] py-1 px-2 text-xs">
                {t('project11_3')}</p>
            </div>
            <a className="w-[85%] h-auto relative group" href="https://www.behance.net/gallery/189966229/Manual-de-Identidad-Corporativa-para-Pinaculo-Education" target="_blank">
              <div><Image
                className="w-full h-full object-contain rounded-md -mt-8 z-10 shadow-lg shadow-black/40"
                src={pinaculoEducation}
                width={1920}
                height={1030}
                alt="Logo de Pináculo Education" />
              </div>
            </a>
          </div>

          {/* ============ Branding for El Valle Dorado ================ */}
          <div className="w-full md:w-1/3 flex flex-col gap-1 justify-between items-center text-center xlg:items-start xlg:text-left z-1 hover:-translate-y-2 transition-transform duration-300 group">
            <div>
              <button className="h-6 px-2 border border-textPrimary font-titleFont text-[11px] text-textPrimary tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('project12_1')}</button>
              <h3 className="text-xl font-bold text-textLight py-2">
                {t('project12_2')}</h3>
              <h4 className="text-xs text-textGray pb-1.5">
                {t('project12_2_1')}</h4>
            </div>

            <div className="w-[100%] bg-[#2f2f2f] text-sm p-2 pb-10 rounded-md text-balance">
              <ul className="w-[100%] py-1 px-2 text-[10px] text-textPrimary font-titleFont tracking-wide flex flex-wrap justify-center gap-1.5 leading-none">
                <li>Illustrator</li><li>Photoshop</li><li>Figma</li>
              </ul>
              <p className="w-[100%] py-1 px-2 text-xs">
                {t('project12_3')}</p>
            </div>
            <a className="w-[85%] h-auto relative group" href="https://www.behance.net/gallery/189443481/Manual-de-Identidad-Corporativa-para-El-Valle-Dorado" target="_blank">
              <div><Image
                className="w-full h-full object-contain rounded-md -mt-8 z-10 shadow-lg shadow-black/40"
                src={elValleDorado}
                width={1920}
                height={1030}
                alt="Logo de El Valle Dorado" />
              </div>
            </a>
          </div>

          {/* ============ Branding for Ahistawa ================ */}
          <div className="w-full md:w-1/3 flex flex-col gap-1 justify-between items-center text-center xlg:items-start xlg:text-left z-1 hover:-translate-y-2 transition-transform duration-300 group">
            <div>
              <button className="h-6 px-2 border border-textPrimary font-titleFont text-[11px] text-textPrimary tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('project13_1')}</button>
              <h3 className="text-xl font-bold text-textLight py-2">
                {t('project13_2')}</h3>
              <h4 className="text-xs text-textGray pb-1.5">
                {t('project13_2_1')}</h4>
            </div>

            <div className="w-[100%] bg-[#2f2f2f] text-sm p-2 pb-10 rounded-md text-balance">
              <ul className="w-[100%] py-1 px-2 text-[10px] text-textPrimary font-titleFont tracking-wide flex flex-wrap justify-center gap-1.5 leading-none">
                <li>Illustrator</li><li>Photoshop</li><li>Figma</li>
              </ul>
              <p className="w-[100%] py-1 px-2 text-xs">
                {t('project13_3')}</p>
            </div>
            <a className="w-[85%] h-auto relative group" href="https://www.behance.net/gallery/192498113/Logo-Proposal-for-Ahistawa" target="_blank">
              <div><Image
                className="w-full h-full object-contain rounded-md -mt-8 z-10 shadow-lg shadow-black/40"
                src={ahistawa}
                width={1920}
                height={1030}
                alt="Logo de Ahistawa" />
              </div>
            </a>
          </div>

        </div>
        {/* END PROJECTS 11 AND 12 */}

        {/* ============ Branding for Macartur ================ */}
        {/* <div className="w-full md:w-1/3 flex flex-col gap-1 justify-between items-center text-center xlg:items-start xlg:text-left z-1 hover:-translate-y-2 transition-transform duration-300 group">
            <div>
              <button className="h-6 px-2 border border-textPrimary font-titleFont text-[11px] text-textPrimary tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('project14_1')}</button>
              <h3 className="text-xl font-bold text-textLight py-2">
                {t('project14_2')}</h3>
              <h4 className="text-xs text-textGray pb-1.5">
                {t('project14_2_1')}</h4>
            </div>

            <div className="w-[100%] bg-[#2f2f2f] text-sm p-2 pb-10 rounded-md text-balance">
              <ul className="w-[100%] py-1 px-2 text-[10px] text-textPrimary font-titleFont tracking-wide flex flex-wrap justify-center gap-1.5 leading-none">
                <li>Illustrator</li><li>Photoshop</li><li>Figma</li>
              </ul>
              <p className="w-[100%] py-1 px-2 text-xs">
                {t('project14_3')}</p>
            </div>
            <a className="w-[85%] h-auto relative group" href="https://www.instagram.com/p/C6zUJ96vvKl/" target="_blank">
              <div><Image
                className="w-full h-full object-contain rounded-md -mt-8 z-10 shadow-lg shadow-black/40"
                src={macartur}
                width={1920}
                height={1030}
                alt="Logo de Ahistawa" />
              </div>
            </a>
          </div> */}

      </div>
    </section>
  );
};

export default Projects;
