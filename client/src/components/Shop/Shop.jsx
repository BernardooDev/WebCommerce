import React from "react";
import {
  ImageProducts,
  NameProducts,
  PriceProducts,
  ShopPage,
  ShopProducts,
  SingleProducts,
} from "./Style";
import axios from "axios";
import { useQuery } from "react-query";

function Shop() {
  const getSneakers = async () => {
    const sneaker = await axios.get("http://localhost:3003/sneaker");
    return sneaker.data;
  };

  const { data } = useQuery("sneakers", getSneakers);

  return (
    <ShopPage>
      <ShopProducts>
        {data?.map((d) => (
          <SingleProducts key={d.id}>
            <ImageProducts>
              <img src={d.img} />
            </ImageProducts>
            <NameProducts>
              <p>{d.product}</p>
            </NameProducts>
            <PriceProducts>R$ - {d.price}</PriceProducts>
          </SingleProducts>
        ))}
      </ShopProducts>
    </ShopPage>
  );
}

export default Shop;
