/**
 * Компонент популярных ссылок
 */
const Visited = ({ items }) => {
  return (
    <div className="visited">
      <div className="visited__title">Посещаемое</div>
      <ul className="visited__list">
        {items.map((item) => {
          return (
            <li key={item.id.toString()} className="visited__item">
              <div className="visited__title">{item.title}</div>
              <div className="visited__dash">-</div>
              <div className="visited__text">{item.text}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Visited;