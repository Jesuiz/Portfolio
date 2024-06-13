import { pinaculoEducation, maestroSupply, jesuizDesign, elValleDorado, crmCoiintawa, pythonScraper} from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { SlSocialBehance, SlStar, } from "react-icons/sl";
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="project" className="max-w-contentContainer mx-auto py-10 mdl:py-36 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <SectionTitle title={t('projects')} titleNo="01" />
      
      <div className="w-full flex flex-col items-center justify-center gap-20">

          {/* ============ Proyecto 1 Branding para Pináculo Education ================ */}
          <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.behance.net/gallery/189966229/Manual-de-Identidad-Corporativa-para-Pinaculo-Education"
            target="_blank">
            <div><Image
                className="w-full h-full object-contain"
                src={pinaculoEducation}
                alt="Logo de Pináculo Education"/>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-2 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide">{t('project1_1')}</p>
              <h3 className="text-2xl font-bold">{t('project1_2')}</h3>
            </div>
            <p className="bg-[#2f2f2f] text-sm md:text-base p-2 md:p-6 rounded-md">{t('project1_3')}</p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray">
              <li>Illustrator</li><li>Photoshop</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="w-full xl:w-1/2 h-auto relative group0"
                href="https://www.behance.net/gallery/189966229/Manual-de-Identidad-Corporativa-para-Pinaculo-Education"
                target="_blank">
                <SlSocialBehance />
              </a>
            </div>
          </div>
        </div>
        {/* ============ Proyecto 1 Branding para Pináculo Education ================== */}

        {/* ============ Proyecto 2 CRM para Coiintawa ================ */}
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="w-full xl:w-1/2 flex flex-col gap-2 lgl:justify-between items-start text-left xl:-mr-16 z-10">
            <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide">{t('project2_1')}</p>
              <h3 className="text-2xl font-bold">{t('project2_2')}</h3>
            </div>
            <p className="bg-[#2f2f2f] text-sm md:text-base p-2 md:p-6 rounded-md">{t('project2_3')}</p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray">
              <li>PHP</li><li>Laravel</li><li>MySQL</li><li>AWS S3</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href="https://sistema.coiintawa.pe/"
                target="_blank"
              >
              <SlStar />
              </a>
            </div>
          </div>
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://sistema.coiintawa.pe/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={crmCoiintawa}
                alt="Logo de Pinaculo Education"
              />
            </div>
          </a>
        </div>
        {/* ============ Proyecto 2 CRM para Coiintawa ================== */}

        {/* ============ Proyecto 3 Web Bilingüe para Jesuiz Design ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://jesuizdesign.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={jesuizDesign}
                alt="Página Web de Jesuiz Design"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-2 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide">{t('project3_1')}</p>
              <h3 className="text-2xl font-bold">{t('project3_2')}</h3>
            </div>
            <p className="text-sm md:text-base bg-[#2f2f2f] p-2 md:p-6 rounded-md ">{t('project3_3')}</p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray">
              <li>PHP</li><li>Wordpress</li><li>SEO</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://jesuizdesign.com/"
                target="_blank"
              >
              <SlStar />
              </a>
            </div>
          </div>
        </div>
        {/* ============ Proyecto 3 Web Bilingüe para Jesuiz Design ================== */}

        {/* ============ Projecto 4 Branding para El Valle Dorado ================ */}
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="w-full xl:w-1/2 flex flex-col gap-2 lgl:justify-between items-start text-left xl:-mr-16 z-10">
            <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide">{t('project4_1')}</p>
              <h3 className="text-2xl font-bold">{t('project4_2')}</h3>
            </div>
            <p className="bg-[#2f2f2f] text-sm md:text-base p-2 md:p-6 rounded-md">{t('project4_3')}</p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray">
              <li>Illustrator</li><li>Photoshop</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href="https://www.behance.net/gallery/189443481/Manual-de-Identidad-Corporativa-para-El-Valle-Dorado"
                target="_blank">
                <SlSocialBehance />
              </a>
            </div>
          </div>
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.behance.net/gallery/189443481/Manual-de-Identidad-Corporativa-para-El-Valle-Dorado"
            target="_blank">
            <div>
              <Image
                className="w-full h-full object-contain"
                src={elValleDorado}
                alt="Logo de El Valle Dorado"/>
            </div>
          </a>
        </div>
        {/* ============ Project 4 Branding para El Valle Dorado ================ */}

        {/* ============ Project 5 Ecommerce para Maestro Supply Line ============== */}
                <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://maestrosupplyline.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={maestroSupply}
                alt="Ecommerce de Maestro Supply Line"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-2 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textBlue text-sm tracking-wide">{t('project5_1')}</p>
              <h3 className="text-2xl font-bold">{t('project5_2')}</h3>
            </div>
            <p className="text-sm md:text-base bg-[#2f2f2f] p-2 md:p-6 rounded-md ">{t('project5_3')}</p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray">
              <li>PHP</li>
              <li>Wordpress</li>
              <li>SEO</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://maestrosupplyline.com/"
                target="_blank"
              >
                <SlStar />
              </a>
            </div>
          </div>
        </div>
        {/* ============ Project 5 Ecommerce para Maestro Supply Line ================== */}

        {/* ============ Project 6 Scraper Web Automático ================ */}
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="w-full xl:w-1/2 flex flex-col gap-2 lgl:justify-between items-start text-left xl:-mr-16 z-10">
            <div>
            <p className="font-titleFont text-textBlue text-sm tracking-wide">{t('project6_1')}</p>
              <h3 className="text-2xl font-bold">{t('project6_2')}</h3>
            </div>
            <p className="text-sm md:text-base bg-[#2f2f2f] p-2 md:p-6 rounded-md ">{t('project6_3')}</p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray">
            <li>Python</li><li>Angular</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href="https://g.co/kgs/NxKXLnW"
                target="_blank">
                <SlStar />
              </a>
            </div>
          </div>
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://g.co/kgs/NxKXLnW"
            target="_blank">
            <div>
              <Image
                className="w-full h-full object-contain"
                src={pythonScraper}
                alt="Scraper desarrollado con Python"/>
            </div>
          </a>
        </div>
        {/* ============ Project 6 Scraper Web Automático ================ */}

      </div>
    </section>
  );
};

export default Projects;
