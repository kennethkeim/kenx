import { searchTerms, SearchTermToggleHandler } from '../shared/filter.model';
import ToggleBtn from '../toggle-btn/toggle-btn';

/* eslint-disable-next-line */
export interface FiltersProps {
  handleToggle: SearchTermToggleHandler;
}

export function Filters({ handleToggle }: FiltersProps) {
  return (
    <aside className="max-w-xs">
      <article className="mb-5 text-gray-600 text-sm">
        <h2 className="text-xl font-bold text-gray-600 mb-3">&#x2605; 4.75</h2>
        <p>&#x2605; 4.8 Cleanliness</p>
        <p>&#x2605; 4.9 Accuracy</p>
        <p>&#x2605; 4.9 Communication</p>
        <p>&#x2605; 4.5 Location</p>
        <p>&#x2605; 4.9 Check-in</p>
        <p>&#x2605; 4.8 Value</p>
      </article>

      <article>
        <h2 className="text-xl font-bold text-gray-600 mb-3">Mentions</h2>
        <ul>
          {searchTerms.map((searchTerm) => (
            <ToggleBtn
              key={searchTerm}
              searchTerm={searchTerm}
              handleToggle={handleToggle}
            />
          ))}
        </ul>
      </article>
    </aside>
  );
}

export default Filters;
