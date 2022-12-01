import Logo from './Logo'

/**
 * Компонент поисковой формы
 */
const SearchInput = () => {
  return (
    <>
      <div className="search__log">
        <Logo />
      </div>

      <div className="search__block">
        <input type="text" />
        <button>Найти</button>
      </div>
    </>
  )
}

export default SearchInput;