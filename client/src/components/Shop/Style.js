import styled from "styled-components"

export const ShopPage = styled.main`
    width: 100%;
    height: 100vh;
    overflow: hidden;
`

export const ShopProducts = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2%;
`

export const SingleProducts = styled.div`
    margin-top: 3%;
    width: 20%;
    height: 50%;
    border: 1px solid red;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    cursor: pointer;
`

export const ImageProducts = styled.div`
    width: 80%;
    height: 50%;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border: 1px solid red;
    }
`

export const NameProducts = styled.div`
    width: 100%;
    height: 15%;
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PriceProducts = styled.div`
    width: 30%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid purple;
`

export const ButtonBuy = styled.button`
    width: 50%;
    height: 80%;
`