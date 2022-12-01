import News from "./News";
import Currencys from "./Currencys";
import Widget from "./Widget";

/**
 * Компонент шапки сайта
 */
const Header = () => {
  let currencys = [
    { id: 1, title: 'USD', value: "63", change: '+0.63' },
    { id: 2, title: 'EUR', value: "65", change: '+0.03' },
  ]
  let widget = {
    logo: 'O',
    title: 'Работа над ошибками',
    text: 'Смотрите Яндекс и запоминайте'
  }

  return (
    <>
      <div className="left">
        <News />
        <Currencys
          items={currencys} />
      </div>
      <div className="right">
        <Widget 
          widget={widget}/>
      </div>
    </>
  )
}

export default Header;