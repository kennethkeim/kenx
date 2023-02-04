import { reviews } from '../data/reviews';
import ReviewCard from '../review-card/review-card';

/* eslint-disable-next-line */
export interface ReviewsProps {}

export function Reviews(props: ReviewsProps) {
  return (
    <ul className="max-w-xl mx-auto">
      {reviews.map((review) => {
        return <ReviewCard review={review} />;
      })}
    </ul>
  );
}

export default Reviews;
