import SearchLinks from "./SearchLinks";
import SearchInput from "./SearchInput";
import SearchSlogan from "./SearchSlogan";

/**
 * Компонент содержит структуру поиска
 */
const Search = () => {
  let links = [
    { id: 1, link: '/' },
    { id: 2, link: '/' },
  ];
  let recommendation = 'фаза луны сегодня';

  return (
    <div className="search">
      <div className="search__top">
        <SearchLinks links={links} />
      </div>
      <div className="search__body">
        <SearchInput />
      </div>
      <div className="search__footer">
        <SearchSlogan recommendation={recommendation} />
      </div>
    </div>
  )
}

export default Search;