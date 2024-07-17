import {
  SlSocialLinkedin,
  SlSocialBehance,
  SlSocialGithub,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a
        href="https://github.com/Jesuiz" target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] hover:border-textGreen rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialGithub />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/jesuiz/" target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] hover:border-textGreen rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialLinkedin />
        </span>
      </a>

      <a href="https://www.behance.net/jesuiz" target="_blank">
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] hover:border-textGreen rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialBehance />
        </span>
      </a>
    </div>
  );
};

export default Footer;