import { rawReviews } from './raw-reviews';

export interface Review {
  id: string;
  guest: string;
  reply?: Reply;
  message: string;
  date: string;
}

export type Reply = Pick<Review, 'message' | 'date' | 'id'>;

const replyRegex = /^Response from Elam/;
const dateRegex =
  /(?:January|February|March|April|May|June|July|August|September|October|November|December) 20(?:18|19|20|21|22|23)/;

export const reviews = rawReviews.reduce<Review[]>((acc, curr, index) => {
  let existingReview: Review = { ...acc[acc.length - 1] };
  let newReview: Review | null = null;

  const isReply = curr.match(replyRegex);
  const isAuthorString = !isReply && curr.match(dateRegex);
  const isMessage = isAuthorString === null && isReply === null;

  if ((isMessage || isReply) && !existingReview.id) {
    throw new Error('Found message or reply but no author');
  }

  if (isReply) {
    // replies have the author string and message payload all in one
    const dateMatch = curr.match(dateRegex);
    if (!dateMatch) {
      console.log(index, curr);
      throw new Error("can't find date of reply");
    }

    const message = curr.slice(18 + dateMatch[0].length);

    existingReview = {
      ...existingReview,
      reply: { id: `${index}-reply`, message, date: dateMatch[0] },
    };
  } else if (isAuthorString) {
    const guest = curr.slice(0, curr.length - isAuthorString[0].length);
    newReview = {
      id: String(index),
      date: isAuthorString[0],
      guest,
      message: 'placeholder',
    };
  } else if (isMessage) {
    existingReview = {
      ...existingReview,
      message: curr,
    };
  }

  if (newReview) {
    return [...acc, newReview];
  } else if (existingReview) {
    return [...acc.slice(0, -1), existingReview];
  } else {
    return acc;
  }
}, []);
