/*
 * Copyright '2022' Iulian Stoicescu or its subsidiaries. All Rights Reserved.
 */
export abstract class FixtureFactory<T> {
  /**
   * Builds a fixture object populating all its attributes with fake values.
   */
  abstract build(attributes?): T;

  /**
   * Builds a collection of fixture objects.
   */
  buildList(length: number, attributes?): T[] {
    return Array.from({ length }, (v, k) => {
      return this.build(attributes && attributes[k] ? attributes[k] : attributes);
    });
  }
}
