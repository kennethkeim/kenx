import { Reply, Review } from '../data/reviews';
import styles from './review-card.module.scss';

export interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <li className={styles['review-card']} key={review.id}>
      <h2>
        {review.guest} - {review.date}
      </h2>
      <p>{review.message}</p>
      {review.reply ? <ReplyCard reply={review.reply} /> : ''}
    </li>
  );
}

export interface ReplyCardProps {
  reply: Reply;
}

export function ReplyCard({ reply }: ReplyCardProps) {
  return (
    <article>
      <h3>Reply - {reply.date}</h3>
      <p>{reply.message}</p>
    </article>
  );
}

export default ReviewCard;
