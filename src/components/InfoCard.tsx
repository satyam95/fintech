type InfoCardProps = {
  img: string;
  imgAlt: string;
  title: string;
  desp: string;
};

const InfoCard = ({ img, imgAlt, title, desp }: InfoCardProps) => {
  return (
    <div className="flex gap-[21px]">
      <div className="min-w-[60px] h-[60px] bg-[#FFFFFF] flex justify-center items-center">
        <img src={img} alt={imgAlt} width={30} height={30} />
      </div>
      <div className="flex flex-col gap-2.5 max-w-[428px]">
        <h3 className="text-[#191A15] text-2xl leading-[34px] font-bold">
          {title}
        </h3>
        <p className="text-[#A6A6A6] text-lg leading-[30px] font-medium">
          {desp}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
