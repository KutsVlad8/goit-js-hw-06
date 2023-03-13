const sliderRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

console.dir(sliderRef.value);

console.log(textRef);

const onSlider = () => {
  textRef.style.fontSize = sliderRef.value + 'px';
};

sliderRef.addEventListener('input', onSlider);
