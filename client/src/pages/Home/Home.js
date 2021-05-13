import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../../components/Product/Product";
import products from "../../products";

export default function Home() {
  return (
    <div>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
