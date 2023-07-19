import { useContext } from "react";
import {
  CartItems,
  CartPage,
  DetailsProductsPayment,
  DisplayItens,
  ImgSingleItem,
  PaymentContainer,
  PriceSingleItem,
  SingleItem,
  SingleProductPayment,
  TitleSingleItem,
  TittlePaymentContainer,
  TotalPricePayment,
  TrashSingleItem,
} from "./Style";
import { CartContext } from "../../context/Cart";
import axios from "axios";
import { useQuery } from "react-query";
import { GoTrash } from "react-icons/go";
import { RiShoppingCart2Fill } from "react-icons/ri";

function Card() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const { data } = useQuery("sneaker", async () => {
    const response = await axios.get("http://localhost:3003/sneaker");
    return response.data;
  });

  const Sneakers = data?.filter((item) => cartItems.includes(item.id));

  const TotalOfItens = Sneakers?.length;

  const PriceOfSneakers = Sneakers?.map((d) => Number(d.price));

  const SumOfSneaker = PriceOfSneakers?.reduce((a, b) => a + b, 0);

  return (
    <CartPage>
      <CartItems>
        <DisplayItens>
          {Sneakers?.map((item, id) => (
            <SingleItem key={id}>
              <ImgSingleItem>
                <img src={item.img} />
              </ImgSingleItem>
              <TitleSingleItem>
                <h3>{item.product}</h3>
              </TitleSingleItem>
              <PriceSingleItem>
                <p>R$ {item.price}</p>
              </PriceSingleItem>
              <TrashSingleItem>
                <GoTrash onClick={() => removeFromCart(item.id)}>
                  Remove
                </GoTrash>
              </TrashSingleItem>
            </SingleItem>
          ))}
        </DisplayItens>
      </CartItems>
      <PaymentContainer>
        <TittlePaymentContainer>
          <RiShoppingCart2Fill />
        </TittlePaymentContainer>
        <DetailsProductsPayment>
          
        </DetailsProductsPayment>
        <TotalPricePayment>
          <h3>Items: {TotalOfItens}</h3>
          <h3>Total: R${SumOfSneaker}</h3>
        </TotalPricePayment>
      </PaymentContainer>
    </CartPage>
  );
}

export default Card;
