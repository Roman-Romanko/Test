import React from "react";
import { ProductListContainer, ProductCard, ProductContainer, Buttons, LikeButton } from "../assets/styles/ProductList-style";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";
import { toggleFill } from "../utils/general";

export const ProductList = ({ category }) => {
    const products = useProducts(category);

    return (
        <ProductContainer>
            <ProductListContainer>
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>Ціна: {product.price} грн</p>
                            <Buttons>
                                <button className="buy">Купити</button>
                                {/* <Link to={`/product/${product.id}`}>
                                    <Button>Детальніше</Button> */}
                                <Link className="like-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart-fill" viewBox="-1 -1 18 18" onClick={(e) => toggleFill(e.currentTarget)}>
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                    </svg>
                                </Link>
                            </Buttons>
                        </ProductCard>
                    ))
                ) : (
                    <p>Товари відсутні</p>
                )}
            </ProductListContainer>
        </ProductContainer>
    );
};
