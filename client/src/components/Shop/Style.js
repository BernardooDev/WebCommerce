import styled from "styled-components";

export const ShopPage = styled.main`
  width: 100%;
  height: 150vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
  font-family: 'VT323', monospace;
`;

export const ShopProducts = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2%;
`;

export const SingleProducts = styled.div`
  width: 20%;
  height: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(192, 192, 192, 0.3) 90%
  );
  border: 1px solid whitesmoke;
  border-radius: 10px;
  cursor: pointer;
`;

export const ImageProducts = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const NameProducts = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  border: 1px solid;
  text-align: center;
  align-items: center;
  color: whitesmoke;
  font-size: 1.8rem;
`;

export const PriceProducts = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
  font-size: 1.6rem;
`;

export const AddtoCart = styled.button`
    width: 50%;
    height: 10%;
    border-radius: 20px;
    border: 3px solid black;
    color: whitesmoke;
    background-color: transparent;
    font-weight: bold;
    cursor: pointer;
    font-family: 'VT323', monospace;
    font-size: 1rem;

    &:hover {
      color: black;
      background-color: whitesmoke;
    }
`
