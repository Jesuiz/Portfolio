import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SlSocialLinkedin,
  SlSocialBehance,
  SlSocialGithub,
} from "react-icons/sl";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const viewCvUrl = i18n.language === 'en' ? "https://jesus-cv.vercel.app/index-en" : "https://jesus-cv.vercel.app";
  const downloadCvUrl = i18n.language === 'en' ? "/assets/jesus_ruiz_cv_en.pdf" : "/assets/jesus_ruiz_cv_es.pdf";

  const ref = useRef<string | any>("");
  const [show, setShow] = useState(false);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShow(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  }

  return (
    <div className="w-full shadow-navbarShadow h-14 md:h-20 lgl:h-20 sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">

        {/* ============ ListItem Start here ======== */}
        <div className="max-w-container h-full mx-auto hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
          
            <Link className="flex items-center gap-1 font-medium text-textGray hover:text-textPrimary cursor-pointer duration-300 nav-link"
              href="#home" onClick={handleScroll}>
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.1 }}>
                {t('home')}</motion.li>
            </Link>

            <Link className="flex items-center gap-1 font-medium text-textGray hover:text-textPrimary cursor-pointer duration-300 nav-link"
              href="#project" onClick={handleScroll}>
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.2 }}>
                <span className="text-textPrimary">01. </span>
                {t('projects')}</motion.li>
            </Link>

            <Link
              className="flex items-center gap-1 font-medium text-textGray hover:text-textPrimary cursor-pointer duration-300 nav-link"
              href="#about"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className="text-textPrimary">02. </span>
                {t('about')}
              </motion.li>
            </Link>
            
            <Link
              className="flex items-center gap-1 font-medium text-textGray hover:text-textPrimary cursor-pointer duration-300 nav-link"
              href="#contact"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className="text-textPrimary">03. </span>
                {t('contact')}
              </motion.li>
            </Link>
          </ul>
    

          {/* Language Switcher */}
          <div className="flex items-center gap-4 mt-1 2xl:mt-2">
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button onClick={() => changeLanguage('en')} style={{ width: 32, height: 32 }}>
                <Image src="/assets/img/uk-flag.webp" alt="English" width={24} height={24} />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button onClick={() => changeLanguage('es')} style={{ width: 32, height: 32 }}>
                <Image src="/assets/img/spain-flag.webp" alt="Spanish" width={24} height={24} />
              </button>
            </motion.div>
          </div>



        </div>

        {/* ============== Small Icon Start here =========== */}
        <div
          onClick={() => setShow(true)}
          className="max-w-container mx-auto gap-6 flex flex-grid justify-between items-center mdl:hidden text-textPrimary cursor-pointer overflow-hidden group"
        >
          <p className="text-1x1">Menu</p>
        </div>


        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-70 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[70%] h-full overflow-y-scroll scrollbarHide bg-bodyColor flex flex-col items-center justify-between px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-textPrimary cursor-pointer hover:text-red-500 absolute top-6 right-6"
              />

              {/* Language Switcher */}
              <div id="switch2" className="flex flex-col items-center gap-6 mb-10">
                <div className="flex gap-6">
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                  >
                    <button onClick={() => changeLanguage('en')} style={{ width: 32, height: 32 }}>
                      <Image src="/assets/img/uk-flag.webp" alt="English" width={32} height={32} />
                    </button>
                  </motion.div>
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                  >
                    <button onClick={() => changeLanguage('es')} style={{ width: 32, height: 32 }}>
                      <Image src="/assets/img/spain-flag.webp" alt="Spanish" width={32} height={32} />
                    </button>
                  </motion.div>
                </div>

                <ul className="flex flex-col text-base gap-6 items-center w-full">
                  <Link
                    className="flex items-center gap-1 font-medium text-textLight hover:text-textPrimary cursor-pointer duration-300 nav-link"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      {t('home')}
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textLight hover:text-textPrimary cursor-pointer duration-300 nav-link"
                    href="#project"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className="text-textPrimary">01. </span>
                      {t('projects')}
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textLight hover:text-textPrimary cursor-pointer duration-300 nav-link"
                    href="#about"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      <span className="text-textPrimary">02. </span>
                      {t('about')}
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textLight hover:text-textPrimary cursor-pointer duration-300 nav-link"
                    href="#courses"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.6, ease: "easeIn" }}
                    >
                      <span className="text-textPrimary">03. </span>
                      {t('courses')}
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textLight hover:text-textPrimary cursor-pointer duration-300 nav-link"
                    href="#contact"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.6, ease: "easeIn" }}
                    >
                      <span className="text-textPrimary">04. </span>
                      {t('contact')}
                    </motion.li>
                  </Link>
                </ul>

                <div className="flex flex-col gap-3">
                  <a href={viewCvUrl} target="_blank" className="w-full">
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.7, ease: "easeIn" }}
                      className="w-full px-4 py-2 rounded-md text-white lgl:mt-5 text-[13px] border border-white hover:bg-hoverColor duration-300 mt-5"
                    >
                      {t('view_resume')}
                    </motion.button>
                  </a>
                  <a href={downloadCvUrl} download className="w-full">
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.7, ease: "easeIn" }}
                      className="w-full px-4 py-2 rounded-md text-white lgl:mt-5 text-[13px] border border-white hover:bg-hoverColor duration-300 mb-4 lgl:mb-5"
                    >
                      {t('download_cv')}
                    </motion.button>
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6">
                <div className="flex gap-6">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.8, ease: "easeIn" }}
                    href="https://github.com/Jesuiz" target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-2 border-textPrimary hover:text-textLight rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.8, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/jesuiz" target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-2 border-textPrimary hover:text-textLight rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.8, ease: "easeIn" }}
                    href="https://www.behance.net/jesuiz" target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-2 border-textPrimary hover:text-textLight rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialBehance />
                    </span>
                  </motion.a>
                </div>

                <div className="">
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.9, ease: "easeIn" }}
                    className="text-sm w-72 tracking-widest text-textLight text-center mt-10"
                  >
                    <p>{t('mail-me')}</p>
                    <p><b>jesuizmail@gmail.com</b></p>
                  </motion.a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
        {/* ============== Small Icon End here ============= */}

        {/* ============ ListItem End here ========== */}
      </div>
    </div>
  );
};

export default Navbar;
