/**
 * Компонент карты
 */
const Map = ({ map }) => {
  return (
    <div className="map">
      <div className="map__title">{map.title}</div>
      <div className="map__additional">{map.additional}</div>
    </div>
  )
}

export default Map;