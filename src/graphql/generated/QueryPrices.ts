/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryPrices
// ====================================================

export interface QueryPrices_prices {
  __typename: "Price";
  price: number | null;
  grade: number | null;
  date: any;
}

export interface QueryPrices {
  prices: QueryPrices_prices[];
}

export interface QueryPricesVariables {
  card: string;
  grade?: number | null;
  limit?: number | null;
  sort?: string | null;
}
