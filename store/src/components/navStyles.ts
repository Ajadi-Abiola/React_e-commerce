import styled from "styled-components";

const NavStyles = styled.header`
  display: flex;
  justify-content: space-between;
  height: 80px;
  flex-direction: row;
  align-items: center;
  font-family: Raleway;
  nav,
  img,
  select {
    padding-top: 24px;
  }
  nav {
    display: flex;
    gap: 22px;
    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
      font-style: normal;
      color: #1d1f22;
      color: green;
    }
  }
  nav.active {
    color: green;
  }
  div {
    display: flex;
    gap: 22px;
    align-items: center;
    justify-content: center;
    img {
      padding: 0;
    }
  }
`;

export default NavStyles;
