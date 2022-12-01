/**
 * Компонент отображает информацию о телепрограммах в эфире
 */
const Air = ({ title, items }) => {
  return (
    <div className="air">
      <div className="air__title">{title}</div>
      <ul className="air__list">

        {items.map((item) => {
          return (
            <li key={item.id.toString()} className="air__item">
              <div className="air__icon">{item.icon}</div>
              <div className="air__text">{item.text}</div>
              <div className="air__additional">{item.additional}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Air;