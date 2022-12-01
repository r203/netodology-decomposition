import Weather from "./Weather";
import Visited from "./Visited";
import Map from "./Map";
import Tv from "./Tv";
import Air from "./Air";

/**
 * Компонент выводит информация о погоде, "Посещаемое", Карта, Телепрограмма и в Эфире
 */
const AdditionalBlock = () => {
  let weather = { icon: 'O', degrees: '+17', morning_degrees: '+17', day_degrees: '+20' };
  let visited = [
    { id: 1, title: 'Недвижимость', text: 'о сталинках' },
    { id: 2, title: 'Недвижимость', text: 'о сталинках' }
  ];
  let map = { title: 'Карта Германии', additional: 'Расписание поездов' };
  let tv = [
    { id: 1, title: '02:00', text: 'Голос', additional: 'ОРТ' },
    { id: 2, title: '03:00', text: 'НеГолос', additional: 'НТВ' },
    { id: 3, title: '04:00', text: 'ГолосСел', additional: 'Россия' }
  ];
  let air = [
    { id: 1, icon: 'O', text: 'Управление как искусство', additional: 'Успех' },
    { id: 2, icon: 'O', text: 'Управление искусство', additional: 'НеУспех' },
    { id: 3, icon: 'O', text: 'Управление как ', additional: 'УспешныйУспех' }
  ];

  return (
    <div className="additional">
      <div className="col">
        <Weather weather={weather} />
        <Visited items={visited} />
      </div>

      <div className="col">
        <Map map={map} />
        <Tv items={tv}/>
      </div>

      <div className="col">
        <Air items={air}/>
      </div>
    </div>
  )
}

export default AdditionalBlock;