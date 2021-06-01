/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCardsTable
// ====================================================

export interface GetCardsTable_getCardsTable_psa10 {
  __typename: "PriceData";
  price: number | null;
  change30d: number | null;
  population: number | null;
  lastSale: string | null;
}

export interface GetCardsTable_getCardsTable_psa9 {
  __typename: "PriceData";
  price: number | null;
  change30d: number | null;
  population: number | null;
  lastSale: string | null;
}

export interface GetCardsTable_getCardsTable {
  __typename: "CardRow";
  number: number | null;
  slug: string | null;
  cardImage: string | null;
  cardName: string | null;
  setName: string | null;
  setSlug: string | null;
  year: number | null;
  psa10: GetCardsTable_getCardsTable_psa10 | null;
  psa9: GetCardsTable_getCardsTable_psa9 | null;
}

export interface GetCardsTable {
  getCardsTable: GetCardsTable_getCardsTable[];
}

export interface GetCardsTableVariables {
  setSlug: string;
}
