const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.getElementById('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;
});
