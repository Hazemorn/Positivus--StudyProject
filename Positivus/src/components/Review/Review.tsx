import s from "./Review.module.scss";

interface ReviewProps {
  name: string;
  position: string;
  text: string;
}

const Review:React.FC<ReviewProps> = ({ name, position, text }) => {
  return (
    <div className={s.review}>
      <div className={s.review__wrapper}>
          <p>
            {text}
          </p>

      </div>
      <div className={s.review__author}>
            <span>{name}</span>
            <p>{position}</p>
      </div>
    </div>
  );
};

export default Review;
