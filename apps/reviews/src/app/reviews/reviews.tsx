import { Review } from '../data/reviews';
import ReviewCard from '../review-card/review-card';

/* eslint-disable-next-line */
export interface ReviewsProps {
  reviews: Review[];
}

export function Reviews({ reviews }: ReviewsProps) {
  return (
    <ul className="w-screen max-w-xl">
      {reviews.map((review) => {
        return <ReviewCard key={review.id} review={review} />;
      })}

      {!reviews.length && (
        <h2 className="text-xl mt-10 font-medium text-gray-400 text-center">
          No Reviews Match This Search
        </h2>
      )}
    </ul>
  );
}

export default Reviews;
