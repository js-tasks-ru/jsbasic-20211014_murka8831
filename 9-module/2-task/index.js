import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {
  }

  async render() {
    let containerElement = document.querySelector('[data-carousel-holder]');
    let carousel = new Carousel(slides);
    containerElement.append(carousel.elem);

    let ribbon = new RibbonMenu(categories);
    let container = document.querySelector('[data-ribbon-holder]');
    container.append(ribbon.elem);

    let holder = document.querySelector('[data-slider-holder]');
    let stepSlider = new StepSlider({
      steps: 5,
      value: 3,
    });
    holder.append(stepSlider.elem);

    let cartIcon = new CartIcon();
    let cartIconHolder = document.querySelector('[data-cart-icon-holder]');
    cartIconHolder.append(cartIcon.elem);
    
    let cart = new Cart(cartIcon);

    let url = './products.json';
    let response = await fetch(url);
    let products = await response.json();
    let productsGridHolder = document.querySelector('[data-products-grid-holder]');
    let productGrid = new ProductsGrid(products);
    productsGridHolder.innerHTML = '';
    productsGridHolder.append(productGrid.elem);
    
  }
}
