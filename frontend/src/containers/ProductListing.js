import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import { Card } from 'semantic-ui-react';
import './styles.css';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("http://localhost:3001/products")
        .catch((err) => {
            console.log("error", err);
        });
        console.log(response.data);
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("Products: ", products);
    return (
        <Card.Group className="sp">
                <ProductComponent products={products}/>
        </Card.Group>
    )
};

export default ProductListing;
