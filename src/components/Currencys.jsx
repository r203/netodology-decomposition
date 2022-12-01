/**
 * Компонент выводит информацию о ценах на валюту
 */
const Currencys = ({ items }) => {
  return (
    <ul className="currencys">
      {items.map((item) => {
        return (
          <li key={item.id.toString()} className="currencys__item">
            <div className="currencys__title">{item.title}</div>
            <div className="currencys__value">{item.value}</div>
            <div className="currencys__change">{item.change}</div>
          </li>
        )
      })}

      <li className="currencys__item">
        <div className="currencys__etc">...</div>
      </li>
    </ul>
  )
}

export default Currencys;