import React from "react";
import { useSelector } from "react-redux";
import { Card, Image } from 'semantic-ui-react';
import './styles.css';

const ProductComponent = ({products}) => {

    const renderList = products.map((product) => {
      const { _id, product_name, product_id, product_description, brand: {Brand_image}, subcategory: {Sub_Category_name} } = product;

      return(
        <div className="four wide column ui" key={_id}>
          <div className="ui stackable cards outer">
            <div className="card">
              <div className="image">
                <img src={Brand_image} alt={product_name} />
              </div>
              <div className="content size">
                <div className="header">{product_name}</div>
                <div className="meta">{product_id}</div>
                <div className="description">{Sub_Category_name}</div>
              </div>
            </div>
          </div>
      </div>
  );
    })
    return (
      <>{ renderList }</>
    )
};

export default ProductComponent;
