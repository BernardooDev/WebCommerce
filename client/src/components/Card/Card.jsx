import { useContext } from "react"
// import { CardPage } from "./Style"
import { CartContext } from "../../context/Cart"
import axios from "axios";
import { useQuery } from "react-query";

function Card() {
  const { cartItems } = useContext(CartContext);
  const { data } = useQuery("sneaker", async () => {
    const response = await axios.get("http://localhost:3003/sneaker");
    return response.data;
  });

  const filteredItems = data?.filter((item) => cartItems.includes(item.id));

  return (
    <div>
      {filteredItems &&
        filteredItems.map((item) => (
          <div key={item.id}>
            <h1>{item.product}</h1>
            <p>{item.price}</p>
          </div>
        ))}
    </div>
  );
}

export default Card;

