import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <section 
      id="contact"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-10 mdl:px-10 xl:px-4 items-center"
    >
      <SectionTitle title={t('contact')} titleNo="03" />
      
          <div className="w-full flex flex-col items-center justify-center gap-28">
          <div className="text-balance text-center w-full text-base text-textGray flex flex-col gap-4 font-semilight">
          <p className="text-center text-textGray">{t('contact1')}</p>
          <p className="text-center text-textGray">{t('contact2')}</p>
          <a href="mailto:jesuizmail@gmail.com">
            <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
              {t('contact3')}
              </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
