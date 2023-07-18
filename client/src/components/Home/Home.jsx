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
import YeezyCooper from "../../assets/YeezyCooper.png";
import YeezyOreo from "../../assets/YeezyOreo.png";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import BackGround from "../../assets/BackGround.png";
import axios from "axios";
import { useQuery } from "react-query";

function Home() {
  const getSneakers = async () => {
    const sneaker = await axios.get("http://localhost:3003/sneaker");
    return sneaker.data;
  };

  const { data } = useQuery("sneakers", getSneakers);

  return (
    <HomePage>
      <img className="BackGround" src={BackGround} />
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
          <ButtonShopwNow>
            <NavLink to="/shop">Shop now</NavLink>
          </ButtonShopwNow>
          <AddToCart>
            <NavLink to="/card">
              <RiShoppingCart2Fill /> Add to Cart
            </NavLink>
          </AddToCart>
        </ButtonsTitlePage>
      </TitleTopPage>
      <ProductsBottom>
        {data?.slice(0, 3).map((d) => (
          <SingleProductsBottom key={d.id}>
            <SingleProductImg>
              <img src={d.img} />
            </SingleProductImg>
            <SingleProductsTitle>
              <h1>{d.product}</h1>
              <p>R$ {d.price}</p>
            </SingleProductsTitle>
            <SingleProductsContainer />
          </SingleProductsBottom>
        ))}
      </ProductsBottom>
    </HomePage>
  );
}

export default Home;
