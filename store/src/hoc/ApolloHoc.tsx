import React from "react";
import { useQuery, ApolloError } from "@apollo/client";
import { DocumentNode } from "graphql";
function ApolloHoc(
  query: DocumentNode
) {
  return function <TData extends { loading: boolean; error: ApolloError }>(ClassComponent: React.ComponentType<TData>) {
    return function FuncComponent () {
      const { data, loading, error } = useQuery<TData>(query);
      // console.log({loading})
      return <ClassComponent {...(data as TData)} {...{ loading, error }} />;
    };
  };
}

export default ApolloHoc;

const a = function(c:number) {
  return function(d:number) {
    return c + d
  }
}

a