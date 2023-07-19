import { useContext } from "react";
import { CartItems, CartPage, SingleItem } from "./Style";
import { CartContext } from "../../context/Cart";
import axios from "axios";
import { useQuery } from "react-query";

function Card() {
  const { cartItems } = useContext(CartContext);

  const { data } = useQuery("sneaker", async () => {
    const response = await axios.get("http://localhost:3003/sneaker");
    return response.data;
  });

  const Sneakers = data?.filter((item) => cartItems.includes(item.id));

  const PriceOfSneakers = Sneakers?.map((d) => Number(d.price));

  const SumOfSneaker = PriceOfSneakers?.reduce((a, b) => a + b);

  return (
    <CartPage>
      <CartItems>
        {Sneakers?.map((item, id) => (
          <SingleItem key={id}>
            <h1>{item.product}</h1>
            <p>{item.price}</p>
          </SingleItem>
        ))}
        <h3>Total: {SumOfSneaker}</h3>
      </CartItems>
    </CartPage>
  );
}

export default Card;
