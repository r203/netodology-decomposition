/**
 * Компонент логотипа
 */
const Logo = () => {
  let url = "data:image/svg+xml;charset=utf8,%3Csvg width='44' height='44' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 43a21 21 0 1 0 0-42 21 21 0 0 0 0 42Z' fill='%23FC3F1D'/%3E%3Cpath d='M25.3 35.13h4.57V8.86h-6.66c-6.7 0-10.22 3.44-10.22 8.5 0 4.02 1.93 6.43 5.37 8.88l-5.99 8.88h4.97L24 25.18l-2.32-1.54c-2.8-1.9-4.17-3.36-4.17-6.54 0-2.79 1.97-4.68 5.72-4.68h2.05v22.7h.01Z' fill='%23fff'/%3E%3C/svg%3E";

  return (
    <a aria-label="Яндекс" className="home-link2 headline__logo" href="https://ya.ru/" 
      style={{
        display: 'block',
        width: '2.2rem',
        height: '2.2rem',
        backgroundImage: `url("${url}")`,
        backgroundSize: '2.2rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}>
    </a>
  )
}

export default Logo;