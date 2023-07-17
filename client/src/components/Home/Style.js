import styled from "styled-components";

export const HomePage = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: rgba(0,0,0,0.9)
`;

export const TitleTopPage = styled.section`
  width: 50%;
  height: 80%;
  overflow: hidden;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 0;
  left: 0;
`;

export const TitlePage = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: start;

  h1 {
    font-size: 4rem;
    color: whitesmoke;
  }

  span {
    color: purple;
  }
`;

export const DescriptionTitlePage = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    padding: 0 5%;
    font-size: 1.4rem;
    color: whitesmoke;
  }
`;
export const ButtonsTitlePage = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;

export const ButtonShopwNow = styled.button`
  width: 30%;
  height: 50%;
  border-radius: 10px;
  border: none;
  color: purple;
  background-color: black;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
  cursor: pointer;
`;

export const AddToCart = styled.button`
  width: 30%;
  height: 50%;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid purple;
  font-size: 1.2rem;
  font-weight: bold;
  color: purple;
  box-shadow: 0px 0px 25px 0px rgba(140,15,140,0.3);
  cursor: pointer;
`;

export const ProductsBottom = styled.div`
  width: 60%;
  height: 30%;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const SingleProductsBottom = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const SingleProductImg = styled.div`
  width: 50%;
  height: 60%;
  position: absolute;
  top: 0%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
    max-width: 150%;
    height: 150%;
    transform: rotateZ(-10deg)
  }

  .Oreo {
    max-width: 135%;
  }
`


export const SingleProductsContainer = styled.div`
  width: 100%;
  height: 60%;
  opacity: 0.7;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.3) 10%,
    rgba(192, 192, 192, 0.1) 90%
  );
  position: absolute;
  bottom: 5%;
  border-radius: 20px;
  border: 1px solid whitesmoke;
  display: flex;
  align-items: flex-end;
`;

export const SingleProductsTitle = styled.div`
  width: 100%;
  height: 75%;
  z-index: 10000;
  opacity: 1;
  text-align: center;
  position: relative;

`
