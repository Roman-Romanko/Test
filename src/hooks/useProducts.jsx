import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = (category) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(response => {
                if (category === "women") {
                    setProducts(response.data.products_women || []);
                } else if (category === "men") {
                    setProducts(response.data.products_men || []);
                } else if (category === "all") {
                    const allProducts = [
                        ...(response.data.products_women || []),
                        ...(response.data.products_men || [])
                    ];
                    setProducts(allProducts);
                } else {
                    setProducts([]);
                }
            })
            .catch(error => console.error("Помилка при завантаженні товарів", error));
    }, [category]);

    return products;
};

export default useProducts;
