import styled from "styled-components";

export const CartPage = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
`;

export const PaymentContainer = styled.div`
  width: 20%;
  height: 90%;
  background-color: white;
  box-shadow: 0px 0px 6px 0px rgba(191, 191, 191, 1);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const TittlePaymentContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

export const DetailsProductsPayment = styled.div`
  width: 100%;
  height: 60%;
`;

export const SingleProductPayment = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid;
`;

export const TotalPricePayment = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
`;

export const CartItems = styled.section`
  width: 60%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  flex-direction: column;
  box-shadow: 0px 0px 6px 0px rgba(191, 191, 191, 1);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const DisplayItens = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: row;
  overflow-y: scroll;
  overflow-x: hidden;
  box-shadow: 0px 0px 6px 0px rgba(3,0,3,1);
`;

export const SingleItem = styled.div`
  width: 100%;
  height: 30%;
  margin: 2% 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 0px 6px 0px rgba(191, 191, 191, 1);
  background-color: white;

  /* position: relative; */
`;

export const ImgSingleItem = styled.div`
  width: 20%;
  height: 80%;
  /* position: absolute; */
  box-shadow: 0px 0px 6px 0px rgba(3,0,3,1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 120%;
    height: 100%;
  }
`;

export const TitleSingleItem = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  /* position: relative;
    left: 3%; */
`;

export const PriceSingleItem = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const TrashSingleItem = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;
