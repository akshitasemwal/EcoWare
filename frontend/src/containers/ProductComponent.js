import React from "react";
import { useSelector } from "react-redux";
import { Card, Image } from 'semantic-ui-react';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
      const { _id, product_name, product_id, product_description, brand: {Brand_image} } = product;

      return(
      //   <div className="four wide column" key={_id}>
      //     <div className="ui stackable cards">
      //       <div className="card">
      //         <div className="image">
      //           <img src={Brand_image} alt={product_name} />
      //         </div>
      //         <div className="content">
      //           <div className="header">{product_name}</div>
      //           <div className="meta">{product_id}</div>
      //           <div className="description">{product_description}</div>
      //         </div>
      //       </div>
      //     </div>
      // </div>
      <Card>
        <Card.Content>
          <Image src={Brand_image} alt={product_name}/>
          <Card.Header>{product_name}</Card.Header>
          <Card.Meta>{product_id}</Card.Meta>
          <Card.Description>{product_description}</Card.Description>
        </Card.Content>
      </Card>
  );
    })
    return (
      <>{ renderList }</>
    )
};

export default ProductComponent;
