/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryCard
// ====================================================

export interface QueryCard_cards_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryCard_cards_card_set {
  __typename: "CardSet";
  name: string;
  cards_in_set: number | null;
  year: any | null;
}

export interface QueryCard_cards {
  __typename: "Card";
  id: string;
  name: string;
  number: any;
  image: QueryCard_cards_image | null;
  card_set: QueryCard_cards_card_set | null;
}

export interface QueryCard {
  cards: QueryCard_cards[];
}

export interface QueryCardVariables {
  slug: string;
}
