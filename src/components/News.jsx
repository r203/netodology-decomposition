import NewsTitle from "./NewsTitle";
import NewsList from "./NewsList";

/**
 * Компонент содержит компоненты с новостями
 */
const News = () => {
  let now = 'Сейчас в сми'
  let country = 'В Германии'
  let recommendation = 'Рекомендации'
  let newsList = [
    { id: 1, icon: 'O', title: 'В гос думе запретили' },
    { id: 2, icon: 'X', title: 'Решили построить' },
    { id: 3, icon: '#', title: 'Мэра посадили' },
  ]

  return (
    <>
      <NewsTitle
        now={now}
        country={country}
        recommendation={recommendation} />
      <NewsList
        items={newsList} />
    </>
  )
}

export default News;