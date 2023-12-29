
const Menu = document.querySelector('.menu')
const Bar = document.querySelector('.nav-menu')

Menu.addEventListener('click', () => {
  Menu.classList.toggle('ativo')
  Bar.classList.toggle('ativo')
})
document.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    Menu.classList.remove('ativo');
    Bar.classList.remove('ativo');
  });
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.projects-img');
const prevBtn = document.querySelector('#btn-back');
const nextBtn = document.querySelector('#btn-next');
let slideIndex = 0;

function showSlide(n) {
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${n * 100}%)`;
    slide.style.transition = 'transform 1s ease-in-out';
  });
}

function nextSlide() {
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
//FIM slider projetos