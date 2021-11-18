import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');

    let buttonLeft = createElement(`
      <button class='ribbon__arrow ribbon__arrow_left'>
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `);

    let buttonRight = createElement(`
      <button class='ribbon__arrow ribbon__arrow_right ribbon__arrow_visible'>
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `);

    let ribbonInner = document.createElement('nav')
    ribbonInner.classList.add('ribbon__inner');

    for (let category of categories) {
      
      let ribbonItem = createElement(`
      <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
    `);
      ribbonInner.append(ribbonItem);     
    }
    
    this.elem.append(ribbonInner); 
    this.elem.append(buttonLeft); 
    this.elem.append(buttonRight); 

    let items = this.elem.querySelectorAll('.ribbon__item');
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener('click', this.onClick);
    }

    this.scrollLeft();
    this.scrolLRight();
    
  }

  onClick = (event) => {
    event.preventDefault();
    let items = this.elem.querySelectorAll('.ribbon__item');
    let customEvent = new CustomEvent('ribbon-select', { 
      detail: event.target.closest('.ribbon__item').dataset.id,
      bubbles: true 
    });
  
    this.elem.dispatchEvent(customEvent);
    for (let i = 0; i < items.length; i++) {
      if (items[i].getAttribute('class') == 'ribbon__item ribbon__item_active') {
        items[i].classList.remove('ribbon__item_active');
      };
    }
    event.target.classList.add('ribbon__item_active');
  }


   scrollLeft() {
    let leftButton = this.elem.querySelector('.ribbon__arrow_left');
    let rightButton = this.elem.querySelector('.ribbon__arrow_right');
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
           
    leftButton.addEventListener('click', () => {
      let scrollLeft = ribbonInner.scrollLeft;
      ribbonInner.scrollBy(-350, 0);

      if (scrollLeft < 1) {
        leftButton.classList.remove('ribbon__arrow_visible');
        rightButton.classList.add('ribbon__arrow_visible');
      } else {
        leftButton.classList.add('ribbon__arrow_visible');
      };
    })
  }

  scrolLRight() {
    let rightButton = this.elem.querySelector('.ribbon__arrow_right');
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    let leftButton = this.elem.querySelector('.ribbon__arrow_left');

    rightButton.addEventListener('click', () => {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      ribbonInner.scrollBy(350, 0);

      if (scrollRight < 1 ) {
        rightButton.classList.remove('ribbon__arrow_visible');
      } else {
        rightButton.classList.add('ribbon__arrow_visible');
        leftButton.classList.add('ribbon__arrow_visible');
      }
    });
  }
};

document.body.addEventListener('ribbon-select', (event) => console.log(event.detail));
