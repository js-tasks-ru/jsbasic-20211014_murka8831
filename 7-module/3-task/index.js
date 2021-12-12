import createElement from '../../assets/lib/create-element.js';


export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.render();
    this.eventClick();
    
  }

    render() {
      this.elem = createElement(`
        <div class='slider'>
          <div class='slider__thumb' style="left:${(100/(this.steps -1))*this.value}%">
            <span class='slider__value'>${this.value}</span>
          </div>
          <div class='slider__progress' style="width:${(100/(this.steps-1))*this.value}%"></div>
        </div>
      `)

      let slider = document.createElement('div');
      slider.classList.add('slider__steps')
      for (let i = 0; i < this.steps; i++) {
        let step = createElement(`<span></span>`);
        if (i == this.value) {
          step.classList.add('slider__step-active');
        }
        slider.append(step);
      }
      this.elem.append(slider);
    }

  eventClick() {
    this.elem.addEventListener('click', (event) => {
      let sliderStep = (this.elem.offsetWidth)/(this.steps -1)
      let whereIsClick = Math.round((event.pageX - this.elem.offsetLeft)/sliderStep);

      let sliderValue = this.elem.querySelector('.slider__value');
      sliderValue.innerHTML = whereIsClick;

      let sliderThumb = this.elem.querySelector('.slider__thumb');
      sliderThumb.style.left = `${(100/(this.steps-1))*whereIsClick}%`;


      let sliderProgress = this.elem.querySelector('.slider__progress');
      sliderProgress.style.width = `${(100/(this.steps -1))*whereIsClick}%`;

      let sliderSteps = this.elem.querySelector('.slider__steps');

      for (let i = 0; i < sliderSteps.children.length; i++) {
        sliderSteps.children[i].classList.remove('slider__step-active');
      };

      sliderSteps.children[whereIsClick].classList.add('slider__step-active');
        
      if (whereIsClick != this.value) {
        this.value = whereIsClick;
        let customEvent = new CustomEvent('slider-change', { 
          detail: this.value, 
          bubbles: true 
        });
        this.elem.dispatchEvent(customEvent);
      }
    })
  }
};
