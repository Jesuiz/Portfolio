import {
  SlSocialLinkedin,
  SlSocialBehance,
  SlSocialGithub,
} from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a
          href="https://github.com/Jesuiz" target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-bodyColor border-2 border-textPrimary hover:text-textLight rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialGithub />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/jesuiz/" target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-bodyColor border-2 border-textPrimary rounded-full inline-flex items-center justify-center hover:text-textLight cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>

        <a
          href="https://www.behance.net/jesuiz" target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-bodyColor border-2 border-textPrimary rounded-full inline-flex items-center justify-center hover:text-textLight cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialBehance />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
