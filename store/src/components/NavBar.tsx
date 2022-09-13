import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavStyles from "./navStyles";
import Menu from "./Menu";
import { gql, useQuery } from "@apollo/client";
import { ConsumerHoc } from "hoc";


class NavBar extends React.Component {
  render() {
    console.log({ props: this.props })
    return (
      <NavStyles>
        <nav>
          <NavLink to="/">All</NavLink>
          <Link to="/clothes">Clothes</Link>
          <Link to="/tech">tech</Link>
        </nav>
        <Link to="/" ><img src="./a-logo.png"></img></Link>
        <div>
          <Menu
            options={(this.props as any).currencies ? (this.props as any).currencies.map((x: any) => ({
              value: x.symbol,
              text: x.label
            })) : []}
            onSelected={(option) => {
              (this.props as any).setSelected && (this.props as any).setSelected({ selectedCurrency: option })
            }}
          />
          <img src="./emptyCart.png" />
        </div>
      </NavStyles>
    );
  }
}
export default ConsumerHoc((state) => ({ currencies: state.currencies, selectedCurrency: state.selectedCurrency }), { setSelected: () => { } })(NavBar);
