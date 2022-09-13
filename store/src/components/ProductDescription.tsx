import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavStyles from "./navStyles";
import Menu from "./Menu";
import styled from "styled-components";

const ProductDescStyle = styled.div`
  p {
    margin: 0;
  }
  .prodSection {
    display: flex;
    flex-direction: row;
    position: relative;
    gap: 30px;
    padding-top: 80px;
    padding-bottom: 178px;
  }
  .prodDetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 559px;
  }
  img {
    height: 511px;
    width: 100%;
  }
  .prodbrand {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    margin: 0;
    color: #1d1f22;
  }
  .prodDecs {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
    color: #1d1f22;
    padding-top: 16px;
    padding-bottom: 43px;
  }
  .sizeButton {
    height: 45px;
    width: 63px;
    background-color: #ffffff;
    margin: 12px;
    border: 1px solid #1d1f22;
    cursor: pointer;
    font-size: 16px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  .sizeButton:hover {
    background-color: #1d1f22;
    color: #ffffff;
  }
  .prodHeader {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    text-transform: uppercase;
  }
  .colorButton {
    height: 32px;
    width: 32px;
    background-color: #ffffff;
    margin: 8px;
    cursor: pointer;
    /* border: none; */
    padding-top: 10px;
    margin-bottom: 36px;
  }
  .colorButton:hover {
    border: 1px solid #5ece7b;
  }
  .prodPrice {
    padding-top: 10px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    padding-bottom: 20px;
  }
  .prodCart {
    width: 292px;
    height: 52px;
    background-color: #5ece7b;
    color: #ffffff;
    text-transform: uppercase;
    border: none;
    font-family: "Raleway";
    font-weight: 600;
    font-size: 16px;
    padding-top: 16px;
    padding-left: 32px;
    padding-right: 32px;

    padding-bottom: 16px;
    margin-bottom: 40px;
  }
  .prodDesc {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
`;

class ProductDescription extends React.Component {
  render() {
    return (
      <ProductDescStyle>
        <div className="prodSection">
          <img src="./jacket.jpeg"></img>
          <div className="prodDetails">
            <p className="prodbrand">Apollo </p>
            <p className="prodDecs">Running Shorts</p>

            <div>
              <p className="prodHeader">SIZE:</p>
              <button className="sizeButton">S</button>
              <button className="sizeButton">M</button>
              <button className="sizeButton">L</button>
              <button className="sizeButton">XL</button>
            </div>
            <div>
              <p className="prodHeader">Color:</p>
              <button className="colorButton"></button>
              <button className="colorButton"></button>
              <button className="colorButton"></button>
              <button className="colorButton"></button>
            </div>
            <div>
              <p className="prodHeader">Price:</p>
              <p className="prodPrice">$50.00</p>
            </div>
            <div>
              <button className="prodCart">Add to cart</button>
            </div>
            <div>
              <p className="productDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem ut maiores voluptatem saepe. Distinctio qui, eius
                delectus omnis deleniti magnam ex soluta quam quasi, in nostrum
                fugiat fugit eligendi accusantium.
              </p>
            </div>
          </div>
        </div>
      </ProductDescStyle>
    );
  }
}
export default ProductDescription;
