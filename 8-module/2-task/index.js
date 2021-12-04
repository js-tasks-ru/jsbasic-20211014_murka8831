import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {
    
    };

     this.elem = createElement(`
    <div class="products-grid">
    </div>
    `)

    let prod = document.createElement('div');
    prod.classList.add('products-grid__inner');
    this.elem.append(prod);


    for (let product of products) {
      let card = new ProductCard (product);
      prod.append(card.elem);
    }
  
    
  }

  updateFilter(filters) {
    // let noNutsControl = document.querySelector('[data-no-nuts]');
    // let vegetarianOnlyControl = document.querySelector('[data-vegetarian-only]');
    // let maxSpicinessControl = document.querySelector('[data-max-spiciness]');
    // let categoryControl = document.querySelector('[data-category]');

    let cards = document.querySelectorAll('.card');


    // let vegeterian = [];
    // for (let product of this.products) {
    //     if (product.vegeterian == true) {
    //       vegeterian.push(product.name)
    //     }
    // };

    // let soups = [];
    // for (let product of this.products) {
    //     if (product.category == 'soups') {
    //       soups.push(product.name)
    //     }
    // };
    
    // let spiciness = [];
    // for (let product of this.products) {
    //     if (product.spiciness <= 2) {
    //       spiciness.push(product.name)
    //     }
    // };


    let nuts = [];
    let container = document.querySelector('.products-grid__inner');
    if (filters.noNuts) {
      for (let product of this.products) {
        if (product.nuts === false || product.nuts == undefined) {
          nuts.push(product)
        }
      };
      for (let card of cards) {
        card.remove()
      };
      for (let nut of nuts) {
        let card = new ProductCard (nut);
        container.append(card.elem);
      }
    } else {
      for (let product of this.products) {
          nuts.push(product) 
      } 
      for (let card of cards) {
        card.remove()
      };
      for (let nut of nuts) {
        let card = new ProductCard (nut);
        container.append(card.elem);
      }
    }

    
   



    // if (filters.vegeterianOnly) {
    //   // this.filters.vegeterianOnly = vegetarianOnlyControl.checked;
    //   for (let card of cards) {
    //     let vegeterianOn = vegeterian.includes(card.textContent);
    //     if (!vegeterianOn) {
    //       card.closest('.card').style.display = 'none';
    //     } else if (!vegeterianOn && (filters.noNuts)) {
    //         card.closest('.card').style.display = 'none';
    //       }
    //   } 
    // } else {
    //   // this.filters.vegeterianOnly = vegetarianOnlyControl.checked;
    //     for (let card of cards) {
    //       let vegeterianOn = vegeterian.includes(card.textContent);
    //       if (!vegeterianOn && (filters.noNuts)) {
    //         if ((nuts.includes(card.textContent))) {
    //           card.closest('.card').style.display = 'none';
    //         } else {
    //           card.closest('.card').style.display = '';
    //         }
    //       } else if (!vegeterianOn && (!filters.noNuts)) {
    //           card.closest('.card').style.display = '';
    //       }
    //     }
    //   };

// console.log(filters)

//     if (categoryControl.checked) {
//       this.filters.category = 'soups';
//       for (let card of cards) {
//         let category = soups.includes(card.textContent);
//         if (!category) {
//           card.closest('.card').style.display = 'none';
//         } 
//       } 
//     } else {
//         this.filters.category = '';
//         for (let card of cards) {
//           let category = soups.includes(card.textContent);
//           if ((!category) && (this.filters.noNuts) && (this.filters.vegeterianOnly)) {
//             if ((nuts.includes(card.textContent)) || (!vegeterian.includes(card.textContent))) {
//               card.closest('.card').style.display = 'none';
//             } else {
//               card.closest('.card').style.display = '';
//             }
//           } else if((!category) && (!this.filters.noNuts) && (!this.filters.vegeterianOnly)) {
//             card.closest('.card').style.display = '';
//           }
//         }
//       };


//       if (maxSpicinessControl.checked) {
//         this.filters.maxSpiciness = 2;
//         for (let card of cards) {
//         let spicinessOn = spiciness.includes(card.textContent);
//           if (!spicinessOn) {
//             card.closest('.card').style.display = 'none';
//           }
//         }
//        } else {
//         this.filters.maxSpiciness = 4;
//         for (let card of cards) {
//           let spicinessOn = spiciness.includes(card.textContent);
//           if ((!spicinessOn) && (this.filters.noNuts) && (this.filters.vegeterianOnly) && (this.category == 'soups')) {
//             if ((nuts.includes(card.textContent)) || (vegeterian.includes(card.textContent) || (soups.includes(card.textContent)))) {
//               card.closest('.card').style.display = 'none';
//             } else {
//               card.closest('.card').style.display = '';
//               }
//           } else if((!spicinessOn) && (!this.filters.noNuts) && (!this.filters.vegeterianOnly) && (this.category == '')) {
//             card.closest('.card').style.display = '';
//           }
//         }
//       }
  }
}
