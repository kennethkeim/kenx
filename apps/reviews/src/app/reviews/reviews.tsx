import { Review } from '../data/reviews';
import ReviewCard from '../review-card/review-card';

/* eslint-disable-next-line */
export interface ReviewsProps {
  reviews: Review[];
}

export function Reviews({ reviews }: ReviewsProps) {
  return (
    <ul className="max-w-xl">
      {reviews.map((review) => {
        return <ReviewCard key={review.id} review={review} />;
      })}
    </ul>
  );
}

export default Reviews;
