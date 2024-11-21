type FeatureCardProps = {
  img: string;
  imgAlt: string;
  title: string;
  descp: string;
};

const FeatureCard = ({ img, imgAlt, title, descp }: FeatureCardProps) => {
  return (
    <div className="max-w-[364px]">
      <img src={img} alt={imgAlt} />
      <h3 className="text-[#191A15] text-[30px] leading-none font-semibold mb-5 mt-[30px]">
        {title}
      </h3>
      <p className="text-[#A6A6A6] text-lg leading-[30px] font-medium">
        {descp}
      </p>
    </div>
  );
};

export default FeatureCard;
