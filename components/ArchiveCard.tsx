import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  title: string;
  des: string;
  company: string;
  date: string;
  listItem: string[];
  link: string;
}

const ArchiveCard = ({ title, des, listItem, company, date, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-full rounded-lg bg-[#2f2f2f] p-5 md:p-5 lg:p-7 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 group">
        <div>
{/*           <div className="flex justify-between items-center">
            <FaRegFolder className="text-4xl text-textPrimary" />
            <RxOpenInNewWindow className="text-2xl hover:text-textPrimary" />
          </div> */}
          <div className="grid grid-cols-10 justify-between items-center">
            <div className="col-span-9 pr-2">
              <h3 className="text-sm font-titleFont font-bold tracking-wide group-hover:text-textPrimary ">
                {title}</h3>
            </div>

            <div className="col-span-1 justify-self-end self-start">
              <RxOpenInNewWindow className="text-2xl group-hover:text-textPrimary" />
            </div>
          </div>
          <p className="text-xs text-textGray mt-1">{company} - {date}</p>
        </div>

        <div>
          <p className="text-sm md:text-xs py-3">{des}</p>
        </div>
{/*         <div className="items-end justify-left">
          <ul className="text-[11px] font-titleFont tracking-wide flex flex-wrap gap-4">
            {listItem.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </a>
  );
};

export default ArchiveCard;
