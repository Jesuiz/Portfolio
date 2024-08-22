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
      className="max-w-contentContainer mx-auto py-10 md:py-20 flex flex-col gap-10 mdl:px-10 xl:px-4 items-center"
    >
      <SectionTitle title={t('about')} titleNo="02" />
      
      <div className="w-full flex flex-col items-center justify-center gap-28">
      <div className="text-balance text-center w-full text-base text-textGray flex flex-col gap-4 font-semilight">
          <p>{t('about1')}</p>
          <p>{t('about2')}</p>
          <p>{t('about3')}</p>
          
          <ul className="w-full text-center text-sm font-titleFont grid grid-cols-3 gap-1 mt-6">
            
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              PHP
            </li>
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              Laravel
            </li>            
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              Filament
            </li>            
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              JavaScript
            </li>            
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              MySQL
            </li>
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              Wordpress
            </li>
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              Shopify
            </li>
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              Tailwind
            </li>
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              BootStrap
            </li>
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              AWS S3
            </li>
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              Cloudflare
            </li>
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              SEO
            </li>
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              Branding
            </li>
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              Figma
            </li>
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              Photoshop
            </li>
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              Illustrator
            </li>
            <li className="flex justify-center items-center text-left gap-2">
              <span className="text-textPrimary">
                <AiFillThunderbolt />
              </span>
              CorelDraw
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
