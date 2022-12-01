/**
 * Компонент различных виджетов
 */
const Widget = ({ widget }) => {
  return (
    <div className="header__right">
      <div className="widget">
        <div className="widget__logo">{widget.logo}</div>
        <div className="widget__title">{widget.title}</div>
        <div className="widget__text">{widget.text}</div>
      </div>
    </div>
  )
}

export default Widget;