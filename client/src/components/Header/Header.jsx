import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react'
import { CardHeader, EmptyHeader, Header, LinksHeader, LogoHeader, NavHeader, NumberOfItens } from './Style';
import { BsSearch } from 'react-icons/bs';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import axios from "axios"
import { CartContext } from '../../context/Cart';
import { useQuery } from 'react-query';
import LogoSneaker from "../../assets/LogoSneaker.png"

function header() {
  const { cartItems } = useContext(CartContext);

  const { data } = useQuery("sneaker", async () => {
    const response = await axios.get("http://localhost:3003/sneaker");
    return response.data;
  });

  const Sneakers = data?.filter((item) => cartItems.includes(item.id));

  const TotalOfItens = Sneakers?.length;

  return (
    <Header>
    <LogoHeader>
        <img src={LogoSneaker} />
    </LogoHeader>
    <NavHeader>
      <EmptyHeader />
      <LinksHeader>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
      </LinksHeader>
    </NavHeader>
    <CardHeader>
      <BsSearch className="Search" />
      <NavLink to="/cart">
        <RiShoppingCart2Fill />
        <NumberOfItens>
          {TotalOfItens}
        </NumberOfItens>
      </NavLink>
    </CardHeader>
  </Header>
  )
}

export default header;