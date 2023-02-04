import { SearchTerm, SearchTermToggleHandler } from '../shared/filter.model';

/* eslint-disable-next-line */
export interface ToggleBtnProps {
  searchTerm: SearchTerm;
  handleToggle: SearchTermToggleHandler;
}

export function ToggleBtn({ searchTerm, handleToggle }: ToggleBtnProps) {
  return (
    <li>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={(e) => handleToggle(searchTerm, e.target.checked)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-rose-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-500"></div>
        <span className="ml-3 text-sm font-medium text-gray-900">
          {searchTerm}
        </span>
      </label>
    </li>
  );
}

export default ToggleBtn;
