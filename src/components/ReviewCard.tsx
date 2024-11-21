import StarRating from "./StarRating";

type ReviewCardProps = {
  rating: number;
  title: string;
  descp: string;
};

const ReviewCard = ({ rating, title, descp }: ReviewCardProps) => {
  return (
    <div className="flex flex-col gap-[18px]">
      <StarRating rating={rating} />
      <h4 className="text-lg text-[#191A15] leading-[22px] font-bold">
        {title}
      </h4>
      <p className="text-lg text-[#A6A6A6] leading-[22px] font-bold">{descp}</p>
    </div>
  );
};

export default ReviewCard;
