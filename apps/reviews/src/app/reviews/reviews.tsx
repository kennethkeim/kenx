import styles from './reviews.module.scss';

/* eslint-disable-next-line */
export interface ReviewsProps {}

export function Reviews(props: ReviewsProps) {
  return (
    <article className={styles['container']}>
      <h2>Article heading</h2>
      <p>Article body</p>
    </article>
  );
}

export default Reviews;
