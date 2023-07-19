import styled from "styled-components"


export const Header = styled.header`
  width: 100vw;
  height: 15vh;
  display: flex;
  align-items: center;
  background: rgba(0,0,0,0.9);
  z-index: 1;
`;

export const LogoHeader = styled.div`
  width: 20%;
  height: 100%;
  border: 1px solid whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 80%;
    object-fit: contain;
  }

`;

export const NavHeader = styled.nav`
  width: 60%;
  height: 100%;
  border: 1px solid whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyHeader = styled.div`
  width: 40%;
  height: 100%;
  border: 1px solid whitesmoke;
`;

export const LinksHeader = styled.ul`
  width: 60%;
  height: 100%;
  border: 1px solid whitesmoke;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    font-size: 1.4rem;
    color: whitesmoke;
  }

  
`;

export const CardHeader = styled.div`
  width: 20%;
  height: 100%;
  border: 1px solid whitesmoke;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.4rem;
  text-align: center;

  .Search {
    color: whitesmoke;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }

  a {
    color: whitesmoke;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;