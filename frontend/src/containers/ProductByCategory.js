import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setFilterProducts } from "../redux/actions/productActions";
import { useParams } from "react-router-dom";
import { Card } from 'semantic-ui-react';
import './styles.css';

const ProductFiltering = () => {

    const productsByCategory = useSelector((state) => state.allProducts.productsByCategory);
    const {category } = useParams();

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response  = await axios.get("http://localhost:3001/getproductby",{
            params: {
                subcat: category
            }
        })
        .catch((err) => {
            console.log("error", err);
        });
        // console.log(category);
        // console.log(response.data);
        dispatch(setFilterProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, [category]);

    return (
        <Card.Group className="sp">
                <ProductComponent products={productsByCategory}/>
        </Card.Group>
    )
};

export default ProductFiltering;
