let effectLevel = document.querySelector('.effect-level');
let slider = effectLevel.querySelector('.effect-level__slider');
let effectLevelSlider = effectLevel.querySelector('.effect-level__value');

let min = 0;
let max = 100;
let step = 0.1;

let sliderCreate = () => {
    noUiSlider.create(slider, {
      start:[max],
      range: {
        'min': min,
        'max': max,
      },
      step : step,
    })
    effectLevel.classList.add('visually-hidden');
    slider.noUiSlider.on('update', ()=>{
      effectLevelSlider.value =  slider.noUiSlider.get();
    })
  }
  
  let sliderSet = (min, max, step) => {
    slider.noUiSlider.updateOptions({
      start: [max],
      range: {
        'min': min,
        'max': max,
      },
      step : step,
    })
  }
  let sliderEffect = (filter) => {
    switch (filter) { 
      case 'chrome':
         min = 0;
         max = 1;
         step = 0.1;
        break;
      case 'sepia':
         min = 0;
         max = 1;
         step = 0.1;
         break;
      case 'marvin':
         min = 0;
         max = 100;
         step = 1;
         break;
      case 'phobos':
         min = 0,
         max = 3,
         step = 0.1
         break;
      case 'heat':
         min = 1;
         max = 3;
         step= 0.1;
         break;
    }
    if (filter == 'none'){
        min = 0;
        max = 100;
        step = 10;
        effectLevel.classList.add('visually-hidden');
      } else {
        effectLevel.classList.remove('visually-hidden');
      }
    sliderSet(min, max, step);
  };
  export { sliderCreate, sliderEffect } ;