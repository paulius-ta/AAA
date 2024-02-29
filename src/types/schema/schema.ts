/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export type paths = Record<string, never>;

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Description: {
      /** Format: int64 */
      id: number;
      origin: string[];
      /** Format: int64 */
      number: number;
      condition: string;
      dimensions: number[];
      attributes: components["schemas"]["ArtifactAttribute"][];
    };
    ArtifactAttribute: {
      id: string;
      type: string;
    };
    History: {
      /** Format: int64 */
      id: number;
      entries: components["schemas"]["HistoryEntry"][];
    };
    HistoryEntry: {
      /** Format: date */
      date: string;
      /** Format: decimal */
      amount: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
