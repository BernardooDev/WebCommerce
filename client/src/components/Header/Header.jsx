import { NavLink } from 'react-router-dom';
import React from 'react'
import { CardHeader, EmptyHeader, Header, LinksHeader, LogoHeader, NavHeader } from './Style';
import { BsSearch } from 'react-icons/bs';
import { RiShoppingCart2Fill } from 'react-icons/ri';
// import LogoSneaker from "../../assets/LogoSneaker.png"

function header() {
  return (
    <Header>
    <LogoHeader>
        {/* <img src={LogoSneaker} /> */}
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
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </LinksHeader>
    </NavHeader>
    <CardHeader>
      <BsSearch className="Search" />
      <NavLink to="/card">
        <RiShoppingCart2Fill />
      </NavLink>
    </CardHeader>
  </Header>
  )
}

export default header;