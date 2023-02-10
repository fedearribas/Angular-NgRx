import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Product } from '../product'
import { getCurrentProduct, getError, getProducts, getShowProductCode, State } from '../state';
import { ProductPageActions } from '../state/actions';

@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent {

  displayCode$ = this.store.select(getShowProductCode);
  products$ = this.store.select(getProducts);
  // Used to highlight the selected product in the list
  selectedProduct$ = this.store.select(getCurrentProduct);
  errorMessage$ = this.store.select(getError);

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(ProductPageActions.loadProducts());
  }

  checkChanged(): void {
    this.store.dispatch(ProductPageActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductPageActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductPageActions.setCurrentProduct({ currentProductId: product.id }));
  }


}
