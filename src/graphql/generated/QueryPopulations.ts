/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryPopulations
// ====================================================

export interface QueryPopulations_populations {
  __typename: "Population";
  PSA10: number;
  PSA9: number;
  PSA8: number;
  PSA7: number;
  PSA6: number;
  PSA5: number;
  PSA4: number;
  PSA3: number;
  PSA2: number;
  PSA1: number;
  date_checked: any;
}

export interface QueryPopulations {
  populations: QueryPopulations_populations[];
}

export interface QueryPopulationsVariables {
  card: string;
  limit?: number | null;
  sort?: string | null;
}
