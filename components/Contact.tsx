import Link from "next/link";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="contact" className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 mdl:px-10 xl:px-4 items-center">
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">03.</p>
      <h2 className="font-titleFont text-3xl font-semibold">{t('contact1')}</h2>
      <p className="max-w-[680px] text-center text-textGray">{t('contact2')}</p>
      <a href="mailto:jesuiz.design@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          {t('contact3')}
          </button>
      </a>
    </section>
  );
};

export default Contact;
