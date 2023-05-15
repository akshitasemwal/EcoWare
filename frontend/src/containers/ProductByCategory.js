import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductFiltering = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("http://localhost:3001/getproductby", {
        params: {
          subcat: subcategory
        })
        .catch((err) => {
            console.log("error", err);
        });
        console.log(subcategory);
        console.log(response.data);
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("Products: ", products);
    return (
        <div className="ui container">
            <h1>
                <ProductComponent/>
            </h1>
        </div>
    )
};

export default ProductFiltering;
