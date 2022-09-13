import React, {SetStateAction, createContext} from "react";

export const AppContext = React.createContext({
  state: {},
  actions: {},
});

class AppProvider extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.setAcctionState = this.setAcctionState.bind(this)
  }
  state = {
    categories: [],
    currencies: [],
    selectedCurrency: {},
  };

  componentDidUpdate() {
    // console.log({state:this.state})
  }

  setAcctionState (state: any) {
    return this.setState(state)
  };

  render() {
    return (
      <AppContext.Provider
        value={{ state: { ...this.state }, actions: this.setAcctionState }}
      >{(this.props as any).children}</AppContext.Provider>
    );
  }
}
export default AppProvider