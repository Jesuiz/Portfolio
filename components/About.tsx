import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <section 
      id="about"
      className="max-w-contentContainer mx-auto py-20 flex flex-col gap-10 mdl:px-10 xl:px-4 items-center"
    >
      <SectionTitle title={t('about')} titleNo="02" />
      
      <div className="w-full flex flex-col items-center justify-center gap-28">
        <div className=" text-center w-full text-base text-textGray flex flex-col gap-4 font-semilight">
          <p>{t('about1')}</p>
          <p>{t('about2')}</p>
          <p>{t('about3')}</p>
          
          <div className="w-full flex flex-col items-center justify-center gap-4 mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4 lg:gap-6">

              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/html.svg" alt="HTML" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                HTML</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/css.svg" alt="CSS" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                CSS</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/wordpress.svg" alt="Wordpress" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                Wordpress</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/php.svg" alt="PHP" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                PHP</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/laravel.svg" alt="Laravel" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                Laravel</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/livewire.svg" alt="Livewire" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                Livewire</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/alpine.svg" alt="AlpineJS" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                AlpineJS</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/javascript.svg" alt="JavaScript" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                JavaScript</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/python.svg" alt="Python" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                Python</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/selenium.svg" alt="Selenium" className="w-5 md:h-5 lg:w-7 lg:h-7"/>
                </span>
                Selenium</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/tailwind.svg" alt="Tailwind" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                Tailwind</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/bootstrap.svg" alt="Bootstrap" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                Bootstrap</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/jquery.svg" alt="jQuery" className="w-5 md:h-5 lg:w-7 lg:h-7"/>
                </span>
                jQuery</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/mysql.svg" alt="MySQL" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                MySQL</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/api.svg" alt="API REST" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                API REST</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/aws.svg" alt="AWS S3" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                AWS S3</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/cloudflare.svg" alt="Cloudflare" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                Cloudflare</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/github.svg" alt="GitHub" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                GitHub</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/postman.svg" alt="Postman" className="w-5 md:h-5 lg:w-7 lg:h-7"/>
                </span>
                Postman</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/seo.svg" alt="SEO" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                SEO</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/illustrator.svg" alt="Illustrator" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                Illustrator</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/photoshop.svg" alt="Photoshop" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                Photoshop</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/figma.svg" alt="Figma" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                Figma</div>
              <div className="flex justify-center items-center text-left gap-1">
                <span className="text-textPrimary">
                  <img src="/assets/icons/branding.svg" alt="Branding" className="w-6 md:h-6 lg:w-8 lg:h-8"/>
                </span>
                Branding</div>

            </div>
          
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
