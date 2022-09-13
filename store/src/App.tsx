import React, { Suspense } from "react";
import Router from "./components/Router";
import NavBar from "components/NavBar";
import Container from "components/Container";
import { ApolloHoc, ConsumerHoc } from "hoc";
import { setAppData } from "./stateSetters";
import compose from "recompose/compose";
import {query} from './queries'
class App extends React.Component {
  componentDidMount() {
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    const { setAppData, ...rest } = this.props as any
    if(prevProps.categories.toString() !== rest.categories.toString() )
    (this.props as any).setAppData &&
      (this.props as any).setAppData({ ...rest });
  }

  render() {
    return (
      <Container>
        <NavBar />
        <Suspense fallback={<>loading...</>}>
          <Router />
        </Suspense>
      </Container>
    );
  }
}

const Enhanced = compose(
  ApolloHoc(query),
  ConsumerHoc((state: any) => ({
    categories: state.categories,
    currencies: state.currencies,
  }), { setAppData })
)(App as any)
export default Enhanced

