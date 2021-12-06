export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (product === null || product === undefined) {
      return;
    } else {
      if (this.isEmpty()) {
        let productAdd = Object.assign({}, {product}, {count:1});
          this.cartItems.push(productAdd);
      } else {
        let productFind = this.cartItems.find(cartItem => cartItem.product.id === product.id);
        if (productFind) {
          productFind.count += 1;
        } else {
          let productAdd = Object.assign({}, {product}, {count:1});
          this.cartItems.push(productAdd);
        } 
      } 
    }

    this.onProductUpdate(this.cartItems);

  }

  updateProductCount(productId, amount) {
    let productFind = this.cartItems.find(item => item.product.id === productId);

    if (amount == 1 && productFind) {
      productFind.count += 1;
    } else if (amount == -1 && productFind) {
      if (productFind.count > 1 ) {
        productFind.count += amount;
      } else if (productFind.count == 1) {
        productFind.count += amount;
        this.cartItems = this.cartItems.filter(cartItem => cartItem.count > 0);
      } else {
        this.cartItems = this.cartItems.filter(cartItem => cartItem.count > 0);
      }
    }

     this.onProductUpdate(this.cartItems);

  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    return this.cartItems.reduce((totalCount, cartItem) => totalCount + cartItem.count, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((totalPrice, cartItem) => totalPrice + cartItem.product.price* cartItem.count, 0);
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

