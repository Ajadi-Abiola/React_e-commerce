import { ConsumerHoc } from "hoc";
import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";

const Homestyle = styled.div`
 
`;

export class HomePage extends React.Component {
  render() {
    return (
      <Homestyle>
        <div className="container">
          <ProductCard />
        </div>
      </Homestyle>
    );
  }
}
export default HomePage
