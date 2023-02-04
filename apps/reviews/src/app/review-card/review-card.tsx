import { Reply, Review } from '../data/reviews';

export interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <li key={review.id} className="bg-white mb-7 p-6 rounded-2xl shadow">
      <div className="flex justify-between mb-1">
        <h2 className="text-gray-600 font-medium">{review.guest}</h2>
        <p className="text-gray-400 text-sm">{review.date}</p>
      </div>
      <p className="text-gray-600 mb-3 whitespace-pre-line">{review.message}</p>
      {review.reply ? <ReplyCard reply={review.reply} /> : ''}
    </li>
  );
}

export interface ReplyCardProps {
  reply: Reply;
}

export function ReplyCard({ reply }: ReplyCardProps) {
  return (
    <article className="bg-gray-100 p-3 rounded-lg">
      <h3 className="mb-1 text-gray-400 text-sm">Reply on {reply.date}</h3>
      <p className="text-gray-600 text-sm whitespace-pre-line">
        {reply.message}
      </p>
    </article>
  );
}

export default ReviewCard;
