import Search from "./Search";
import Banner from "./Banner";
import AdditionalBlock from "./AdditionalBlock";

/**
 * Компонент контентной части
 */
const Content = () => {
  let image = 'https://funart.pro/uploads/posts/2022-06/thumbs/1654688073_9-funart-pro-p-milie-kotiki-do-slez-zhivotnie-krasivo-fot-9.jpg'

  return (
    <div className="content">
      <Search />
      <Banner image={image} />
      <AdditionalBlock />
    </div>
  )
}

export default Content;