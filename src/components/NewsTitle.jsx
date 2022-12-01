/**
 * Компонент категорий новостей
 */
const NewsTitle = ({ now, country, recommendation }) => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let dayOfWeek = date.getDay() + 1;
  let hour = date.getHours()
  let minutes = date.getMinutes()

  return (
    <div className="news__title">
      <div className="now_in_SMI">{now}</div>
      <div className="in_country">{country}</div>
      <div className="recommendation">{recommendation}</div>
      <div className="date">{day}.{month}, {dayOfWeek} {hour}:{minutes}</div>
    </div>
  )
}

export default NewsTitle;