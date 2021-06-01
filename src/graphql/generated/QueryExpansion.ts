/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryExpansion
// ====================================================

export interface QueryExpansion_expansions_card_sets_logo {
  __typename: "UploadFile";
  url: string;
}

export interface QueryExpansion_expansions_card_sets {
  __typename: "CardSet";
  id: string;
  name: string;
  slug: string;
  logo: QueryExpansion_expansions_card_sets_logo | null;
  cards_in_set: number | null;
  year: any | null;
}

export interface QueryExpansion_expansions {
  __typename: "Expansion";
  name: string;
  card_sets: QueryExpansion_expansions_card_sets[];
}

export interface QueryExpansion {
  expansions: QueryExpansion_expansions[];
}
