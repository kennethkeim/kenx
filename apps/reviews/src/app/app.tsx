// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { useState } from 'react';
import { reviews as allReviews } from './data/reviews';
import Filters from './filters/filters';
import Reviews from './reviews/reviews';
import { getEnabledSearchExp } from './shared/filter-utils';
import {
  SearchTerm,
  searchTermValues as searchTermValuesSource,
  SearchTermToggleHandler,
} from './shared/filter.model';

export function App() {
  const [searchTermValues, setSearchTermValues] = useState(
    searchTermValuesSource
  );

  // handle search term toggle
  const handleToggle: SearchTermToggleHandler = function (
    searchTerm: SearchTerm,
    checked: boolean
  ) {
    setSearchTermValues({ ...searchTermValues, [searchTerm]: checked });
  };

  // filter reviews
  const enabledSearchExp = getEnabledSearchExp(searchTermValues);
  const filteredReviews = allReviews.filter((review) => {
    return enabledSearchExp.every((regexp) => {
      return review.message.match(regexp);
    });
  });

  // render
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center">
      {/* <header><h1>Header</h1></header> */}
      {/* <nav>main navigation in here</nav> */}

      <div className="flex">
        <Filters handleToggle={handleToggle} />

        <main className="ml-20">
          <Reviews reviews={filteredReviews} />
        </main>
      </div>

      {/* And here is our main footer that is used across all the pages of our website */}
      {/* <footer>footer content in here</footer> */}
    </div>
  );
}

export default App;
