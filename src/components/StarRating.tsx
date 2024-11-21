import emptyStar from "../assets/empty-star.png";
import filledStar from "../assets/filled-star.png";

type StarProps = {
  filled: boolean;
};

type RatingProps = {
  rating: number;
};

const Star = ({ filled }: StarProps) => {
  const starSrc = filled ? filledStar : emptyStar;
  return (
    <img
      src={starSrc}
      alt={filled ? "filled star" : "empty star"}
      width={26}
      height={26}
    />
  );
};

const StarRating = ({ rating }: RatingProps) => {
  const totalStars = 5;
  return (
    <div className="flex gap-1">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
};

export default StarRating;
