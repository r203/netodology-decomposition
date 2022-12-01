/**
 * Компонент поисковых ссылок
 */
const SearchLinks = ({ links }) => {
  return (
    <ul className="search__title">
      {links.map((link) => {
        return (
          <li key={link.id.toString()} className="search__link">{link.link}</li>
        )
      })}
    </ul>
  )
}

export default SearchLinks;