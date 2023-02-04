import { reviews } from '../data/reviews';
import ReviewCard from '../review-card/review-card';
import styles from './reviews.module.scss';

/* eslint-disable-next-line */
export interface ReviewsProps {}

export function Reviews(props: ReviewsProps) {
  return (
    <ul className={styles['list']}>
      {reviews.map((review) => {
        return <ReviewCard review={review} />;
      })}
    </ul>
  );
}

export default Reviews;
