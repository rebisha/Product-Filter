import { createSelector } from "reselect";

const selectProduct = state => state.product;

export const selectProductItem = createSelector(
  [selectProduct],
  item => item.products
);
