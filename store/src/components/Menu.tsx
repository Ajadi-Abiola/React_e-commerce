import React from "react";
import styled from "styled-components";
import { useQuery, gql } from '@apollo/client';

const MenuStyle = styled.div<{ isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  button {
    position: relative;
    display: flex;
    background-color: white;
    border: none;
    cursor: pointer;
    gap: 10px;
    align-items: center;
    img {
      height: 10px;
      width: auto;
      padding: 0;
      transform: ${({ isOpen = false }) =>
    isOpen ? "rotate(180deg)" : "none"};
    }
  }
  ul {
    display: ${({ isOpen = false }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    list-style: none;
    position: absolute;
    top: 25px;
    gap: 8px;
    padding-left: 0px;
    box-shadow: 0px 4px 35px rgba(168, 173, 176, 0.19);
    li {
      display: flex;
      button {
        padding-left: 20px;
        padding-right: 38px;
        padding-bottom: 8px;
        padding-top: 8px;
        cursor: pointer;
      }
      button:hover {
        background-color: #eeeeee;
      }
    }
  }
`;

// const GET_CURRENCIES = gql`
// query Currencies {
//   currencies{
//     label,
//     symbol
//   }
// }
// `
// const { loading, error, data } = useQuery(GET_CURRENCIES);

class Menu extends React.Component<{
  options?: { value: string; text: string }[];
  onSelected?: (option: { value: string; text: string }) => void
}>
{
  state: { isOpen: boolean; selectedOption?: { value: string; text: string } } =
    {
      isOpen: false,
      selectedOption: this.props.options ? this.props.options[0] : undefined,
    };

  handleMenuOpen = () => {
    this.setState((prevState: { isOpen: boolean }) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleSelect = (selectedOption: { value: string; text: string }) => {
    this.setState({ selectedOption, isOpen: false });
  };

  componentDidUpdate(prevProps: any, prevState: any) {
    if (!prevState.selectedOption && this.props.options?.length) {
      this.setState({ selectedOption: this.props.options[0] })
    }
    if (this.state.selectedOption && prevState.selectedOption && prevState.selectedOption.value !== this.state.selectedOption.value) {
      this.props.onSelected && this.props.onSelected(this.state.selectedOption)
    }
  }

  render() {
    const { state, handleMenuOpen, props, handleSelect } = this;
    const { isOpen, selectedOption } = state;
    const { options } = props;
    return (
      <MenuStyle isOpen={isOpen}>
        <button onClick={handleMenuOpen}>
          <p>{selectedOption?.value}</p> <img src="./chevrondown.svg"></img>
        </button>
        <ul>
          {options?.map((option) => (
            <li>
              <button onClick={(e) => handleSelect(option)}>
                <span>{option.value}</span>
                {option.text}
              </button>
            </li>
          ))}
        </ul>
      </MenuStyle>
    );
  }
}
export default Menu;
