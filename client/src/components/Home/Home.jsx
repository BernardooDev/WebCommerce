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
            Discover the latest collection of premium sneakers that combine
            style and comfort. From iconic classics to cutting-edge designs, our
            curated selection offers something for every sneaker enthusiast.
            Step up your sneaker game and make a statement with our exclusive
            range of footwear.
          </p>
        </DescriptionTitlePage>
        <ButtonsTitlePage>
          <ButtonShopwNow>
            <NavLink to="/shop">Shop now</NavLink>
          </ButtonShopwNow>
          <AddToCart>
            <NavLink to="/cart">
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
