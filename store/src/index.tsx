import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "context";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(
  <BrowserRouter>
    <AppProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </AppProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
