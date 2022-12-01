/**
 * Компонент слоган поиска
 */
const SearchSlogan = ({ recommendation }) => {
  return (
    <>
      <div className="search__slogan">Найдется всё, например,</div>
      <div className="search__recommendation">{recommendation}</div>
    </>
  )
}

export default SearchSlogan;