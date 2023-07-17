import styled from "styled-components"


export const Header = styled.header`
  width: 100vw;
  height: 15vh;
  border: 1px solid;
  display: flex;
  align-items: center;
  background: rgba(0,0,0,0.9);
  z-index: 1;
`;

export const LogoHeader = styled.div`
  width: 20%;
  height: 100%;
  border: 1px solid;
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

  .Search {
    color: whitesmoke;
  }
`;