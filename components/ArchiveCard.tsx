interface Props {
  title: string;
  des: string;
  hours: string;
  company: string;
  date: string;
  link: string;
}

const ArchiveCard = ({ title, des, hours, company, date, link }: Props) => {
  const logoImage = company === 'Platzi'
    ? "bg-[url('/assets/img/logo-platzi.webp')] grayscale"
    : company === 'Udemy'
    ? "bg-[url('/assets/img/logo-udemy.webp')] grayscale"
    : company === 'EF SET'
    ? "bg-[url('/assets/img/logo-efset.webp')] grayscale"
    : "";
  const backgroundImage = company === 'Platzi'
    ? "bg-[url('/assets/img/background-platzi.webp')] grayscale"
    : company === 'Udemy'
    ? "bg-[url('/assets/img/background-udemy.webp')] grayscale"
    : company === 'EF SET'
    ? "bg-[url('/assets/img/background-efset.webp')] grayscale"
    : "";

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-full md:h-full p-4 md:p-4 lg:p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden rounded-lg bg-[#011017] border border-textPrimary">
        <div>
          <div className="grid grid-cols-10 justify-between items-start">

            <div className="col-span-9 pr-16">
              <h3 className="text-sm font-titleFont font-bold tracking-wide group-hover:text-textPrimary relative z-10">{title}</h3>
            </div>
            <div className={`col-span-1 justify-self-end w-10 h-4 md:w-16 md:h-8 bg-contain bg-center bg-no-repeat ${logoImage}`} />

          </div>
          <p className="text-xs text-textGray mt-1 relative z-10">{hours}</p>
          <p className="text-xs text-textGray mt-1 relative z-10">{date}</p>
        </div>

        <div>
          <p className="text-sm md:text-xs relative z-10">{des}</p>
        </div>

        <div
          className={`absolute -left-28 md:-left-28 lg:-left-34 w-full h-40 bg-contain bg-center bg-no-repeat z-0 ${backgroundImage}`}
        />
      </div>
    </a>
  );
};

export default ArchiveCard;