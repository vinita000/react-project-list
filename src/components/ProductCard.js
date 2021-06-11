import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, CardFooter
} from 'reactstrap';

const ProductCard = (props) => {
  const {category, price, stocked, name, description } = props.product
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margintop: "20px",
      marginBottom: "20px"
    }}>
      <Card style={{width: "30%"}}>
      <CardHeader tag="h5">{name}</CardHeader>
        <CardBody>
          {stocked ? <p>In stock</p> : <p>Out of stock</p>}
          <CardSubtitle tag="h6" className="mb-2 text-muted">{category}</CardSubtitle>
          <CardText>Description: {description}</CardText>
          <Button>Add to Cart</Button>
        </CardBody>
        <CardFooter>
          Price: ${props.product.price}
        </CardFooter>
      </Card>
    </div>
    

  );
}

export default ProductCard;