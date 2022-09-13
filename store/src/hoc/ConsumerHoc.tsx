import React from "react";
import { AppContext } from "../context";

function ConsumerHoc(stateToshow: (state: any) => any,
  actionsToPerform: object | null) {
  return function (
    ClassComponent: React.ComponentType<any>
  ) {
    return class Consumer extends React.Component {

      render() {
        // console.log({ccc: this.props})
        return (
          <AppContext.Consumer>
            {({ state, actions }) => {
              const a = stateToshow !== null? stateToshow(state): {};

              const b = actionsToPerform? Object.values(actionsToPerform).reduce((prevVal: any, currval: any) => (
                {
                  ...prevVal, [currval.name]:actions
                }
              ), {}) : {};
              return <ClassComponent {...a} {...b} {...this.props} />;
            }}
          </AppContext.Consumer>
        );
      }
    };
  }
}

export default ConsumerHoc;
