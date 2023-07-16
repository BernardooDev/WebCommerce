import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import "./App.css";

export const Header = styled.header`
  width: 100vw;
  height: 15vh;
  border: 1px solid;
  display: flex;
  align-items: center;
  background: transparent;
  z-index: 1;
`;

export const LogoHeader = styled.div`
  width: 20%;
  height: 100%;
  border: 1px solid;
`;

export const NavHeader = styled.nav`
  width: 60%;
  height: 100%;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyHeader = styled.div`
  width: 40%;
  height: 100%;
`;

export const LinksHeader = styled.ul`
  width: 60%;
  height: 100%;
  border: 1px solid;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;

  li {
    list-style: none;
  }
`;

export const CardHeader = styled.div`
  width: 20%;
  height: 100%;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

function App() {
  return (
    <>
    <Header>
      <LogoHeader></LogoHeader>
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
        <BsSearch />
        <NavLink to="/card">
          <RiShoppingCart2Fill />
        </NavLink>
      </CardHeader>
    </Header>
    <Outlet>
    </Outlet>
    </>
  );
}

export default App;
