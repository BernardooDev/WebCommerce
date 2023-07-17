import {
  AddToCart,
  ButtonShopwNow,
  ButtonsTitlePage,
  DescriptionTitlePage,
  HomePage,
  ProductsBottom,
  SingleProductImg,
  SingleProductsBottom,
  SingleProductsContainer,
  SingleProductsTitle,
  TitlePage,
  TitleTopPage,
} from "./Style";

import ChicagoJ1 from "../../assets/ChicagoJ1.png";
import LightBlueJ1 from "../../assets/LightBlueJ1.png";
import YeezyOreo from "../../assets/YeezyOreo.png";
import { RiShoppingCart2Fill } from "react-icons/ri";

function Home() {
  return (
    <HomePage>
      <TitleTopPage>
        <TitlePage>
          <h1>
            <span>Step</span> up your game
            <br />
            with <span>style!</span>
          </h1>
        </TitlePage>
        <DescriptionTitlePage>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            repellendus quod ratione expedita quos ipsum, non voluptas iusto
            quisquam et deleniti labore officia doloremque perferendis cum
            excepturi. Ad, suscipit quibusdam.
          </p>
        </DescriptionTitlePage>
        <ButtonsTitlePage>
          <ButtonShopwNow>Shop now</ButtonShopwNow>
          <AddToCart>
            <RiShoppingCart2Fill /> Add to Cart
          </AddToCart>
        </ButtonsTitlePage>
      </TitleTopPage>
      <ProductsBottom>
        <SingleProductsBottom>
          <SingleProductImg>
            <img src={ChicagoJ1} />
          </SingleProductImg>
          <SingleProductsContainer />
          <SingleProductsTitle></SingleProductsTitle>
        </SingleProductsBottom>
        <SingleProductsBottom>
          <SingleProductImg>
            <img src={LightBlueJ1} />
          </SingleProductImg>
          <SingleProductsContainer />
          <SingleProductsTitle></SingleProductsTitle>
        </SingleProductsBottom>
        <SingleProductsBottom>
          <SingleProductImg>
            <img className="Oreo" src={YeezyOreo} />
          </SingleProductImg>
          <SingleProductsContainer>
            <SingleProductsTitle></SingleProductsTitle>
          </SingleProductsContainer>
        </SingleProductsBottom>
      </ProductsBottom>
    </HomePage>
  );
}

export default Home;
