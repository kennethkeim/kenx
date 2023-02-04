import styles from './reviews.module.scss';

/* eslint-disable-next-line */
export interface ReviewsProps {}

export function Reviews(props: ReviewsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Reviews!</h1>
    </div>
  );
}

export default Reviews;
