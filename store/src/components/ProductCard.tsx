import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCardStyle = styled.div`
  .ProductContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 386px;
    height: 444px;
    margin: 16px;
  }
  img {
    flex: none;
    align-self: stretch;
    flex-grow: 0;
    width: 100%;
    height: 330px;
  }
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 160%;
    color: #1d1f22;
    padding: 0;
    margin: 0;
  }

  .desc {
    display: flex;
    flex-direction: column;
    height: 58px;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding-top: 24px;
  }
  h2 {
    font-family: "Raleway";
    padding-top: 80px;
    padding-bottom: 103px;
    font-size: 42px;
    font-weight: 400;
    line-height: 67.2px;
    margin: 0;
    color: #1d1f22;
  }

  .productGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;
class ProductCard extends React.Component {
  render() {
    return (
      <ProductCardStyle>
        <h2>Category name</h2>
        <div className="productGrid">
          <div className="ProductContainer">
            <Link to="/pdp">
              <img src="./jacket.jpeg"></img>
            </Link>
            <div className="desc">
              <p>Denim shorts</p>
              <p>price</p>
            </div>
          </div>
          <div className="ProductContainer">
            <img src="./pic.png"></img>
            <div className="desc">
              <p>Denim shorts</p>
              <p>$50</p>
            </div>
          </div>
        </div>
      </ProductCardStyle>
    );
  }
}
export default ProductCard;
