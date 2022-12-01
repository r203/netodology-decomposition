/**
 * Компонент телепрограммы
 */
const Tv = ({ items }) => {
  return (
    <div className="tv">
      <div className="tv__title">Телепрограмма</div>
      <div className="tv__link">SHOW</div>
      <ul className="tv__list">
        {items.map((item) => {
          return (
            <li key={item.id.toString()} className="tv__item">
              <div className="tv__title">{item.title}</div>
              <div className="tv__text">{item.text}</div>
              <div className="tv__additional">{item.additional}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Tv;