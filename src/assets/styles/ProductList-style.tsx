import styled from "styled-components";

export const ProductContainer = styled.div`
    /* margin-left: 5vw; */
`

export const ProductListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
`;

export const ProductCard = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;
    width: calc(33.333% - 250px);
    border: 1px solid #333;
    padding: 15px;
    /* margin-left: 2vw; */
    text-align: center;
    border-radius: 8px;
    background: #333;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    img {
        width: 100%;
        height: auto;
        /* border-radius: 8px; */
    }

    h3 {
        margin: 10px 0;
    }

    p {
        font-size: 18px;
        /* font-weight: bold; */
        color: #fff;
    }

    .like-button {
        color: white;
        transition: background-color 0.3s;
    }

    .buy:hover {
        background-color: #218838;
    }

    .buy{
        background-color: #28a745;
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        margin-top: auto;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

    svg{
        margin-right: 1vw;
        margin-top: 1vh;
    }
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    /* margin-top: 20px; */
`;

export const LikeButton = styled.button`
    background-color: #333;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
`;