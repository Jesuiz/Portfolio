interface Props {
  title: string;
  titleNo: string;
}

const SectionTitle = ({ title, titleNo }: Props) => {
  return (
    <h2 className="font-titleFont text-2xl font-semibold flex items-center">
      <span className="inline-flex w-28 md:w-48 h-[.5px] bg-gray-700 mr-6"></span>

      <span className="text-base md:text-lg text-textGreen mr-2">
        {titleNo}.</span>{title}

      <span className="inline-flex w-28 md:w-48 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
};

export default SectionTitle;