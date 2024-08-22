interface Props {
  title: string;
  titleNo: string;
}

const SectionTitle = ({ title, titleNo }: Props) => {
  return (
    <h2 className="font-titleFont text-2xl font-semibold flex items-center">
      <span className="inline-flex w-14 md:w-28 xl:w-48 h-[.5px] bg-gray-700 mr-4"></span>

      <span className="text-base md:text-lg text-textPrimary mr-2">
        {titleNo}.</span>{title}

      <span className="inline-flex w-14 md:w-28 xl:w-48 h-[.5px] bg-gray-700 ml-4"></span>
    </h2>
  );
};

export default SectionTitle;