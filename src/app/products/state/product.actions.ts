import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export const toggleProductCode = createAction('[Product] Toggle Product Code');

export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction('[Product] Clear Current Product');

export const initializeCurrentProduct = createAction('[Product] Initialize Current Product');

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction('[Product] Load Products Success', props<{ products: Product[] }>());

export const loadProductsFailure = createAction('[Product] Load Products Failed', props<{ error: string }>());

export const updateProduct = createAction('[Product] Update Product', props<{ product: Product }>());

export const updateProductSuccess = createAction('[Product] Update Product SUccess', props<{ product: Product }>());

export const updateProductFailure = createAction('[Product] Update Product Failed', props<{ error: string }>());

export const createProduct = createAction('[Product] Create Product', props<{ product: Product }>());

export const createProductSuccess = createAction('[Product] Create Product SUccess', props<{ product: Product }>());

export const createProductFailure = createAction('[Product] Create Product Failed', props<{ error: string }>());

export const deleteProduct = createAction('[Product] Delete Product', props<{ id: number }>());

export const deleteProductSuccess = createAction('[Product] Delete Product SUccess', props<{ id: number }>());

export const deleteProductFailure = createAction('[Product] Delete Product Failed', props<{ error: string }>());