/**
 * Компонент выводит баннер
 */
const Banner = ({ image }) => {
  return (
    <div className="banner">
      <img src={image} alt={image} />
    </div>
  )
}

export default Banner;