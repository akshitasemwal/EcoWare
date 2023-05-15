import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import { Card } from 'semantic-ui-react';
import './styles.css';
import Pagination from "./Pagination";
import { PRODS_PER_PAGE } from '../utils/constants';

const ProductListing = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  console.log("Pages", totalPages);

    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
       setLoading(true);
        const response = await axios.get("http://localhost:3001/products")
        .catch((err) => {
          console.log("error", err);
        });
         setLoading(false);
        // console.log(response.data);
        setTotalPages(Math.ceil(response.data.length / PRODS_PER_PAGE));
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleClick = num => {
      setPage(num);
    }

    // console.log("Products: ", products);
    return (
      <div>
      { loading ? <h1>Loading...</h1> : <>
        <Card.Group className="sp">
                  <ProductComponent products = {products} page = {page}/>
        </Card.Group>
        <Pagination totalPages = {totalPages} handleClick = {handleClick} />
      </> }
      </div>
    )
};

export default ProductListing;
