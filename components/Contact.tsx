import SectionTitle from "./SectionTitle";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="contact"
      className="max-w-contentContainer  flex flex-col gap-10 py-20 mx-auto mdl:px-10 xl:px-4 items-center"
    >
      <SectionTitle title={t('contact')} titleNo="03" />

      <div className="w-full flex flex-col items-center justify-center gap-28">
        <div className="text-balance text-center w-full text-base text-textGray flex flex-col font-semilight gap-2">
          <p className="text-center text-textGray font-bold">{t('contact1')}</p>
          <p className="text-center text-textGray">{t('contact2')}</p>

          <div className="flex flex-row items-center justify-center gap-10">
            <a href="mailto:jesuizmail@gmail.com">

              <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('contact3')}
              </button>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=51935035069"
              target="_blank" rel="noopener noreferrer">

              <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
                {t('contact4')}
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
