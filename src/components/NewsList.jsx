/**
 * Компонент списка новостей
 */
const NewsList = ({ items }) => {
  return (
    <ul className="news__list">
      {items.map((item) => {
        return (
          <li key={item.id.toString()} className="news__item">
            <div className="icon">{item.icon}</div>
            <div className="title">{item.title}</div>
          </li>
        )
      })}
    </ul>
  )
}

export default NewsList;