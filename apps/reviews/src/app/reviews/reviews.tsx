import { Review } from '../data/reviews';
import ReviewCard from '../review-card/review-card';

/* eslint-disable-next-line */
export interface ReviewsProps {
  reviews: Review[];
}

export function Reviews({ reviews }: ReviewsProps) {
  return (
    <>
      <h1 className="text-xl font-bold text-gray-600 mb-5 text-center">
        {reviews.length || 'No'} Reviews
      </h1>

      <ul className="w-screen max-w-xl">
        {reviews.map((review) => {
          return <ReviewCard key={review.id} review={review} />;
        })}
      </ul>
    </>
  );
}

export default Reviews;
