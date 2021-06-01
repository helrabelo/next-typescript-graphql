/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryCards
// ====================================================

export interface QueryCards_cards_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryCards_cards {
  __typename: "Card";
  name: string;
  image: QueryCards_cards_image | null;
}

export interface QueryCards {
  cards: QueryCards_cards[];
}

export interface QueryCardsVariables {
  limit: number;
}
