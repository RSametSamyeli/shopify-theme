const rightButton = document.querySelector('.right-button');
const slider = document.querySelector('.right-section-content__slider');
const title =  document.getElementById('title');
const product = document.getElementsByTagName('h2');

rightButton.addEventListener('click', function() {
    slider.scrollLeft += 100;
} );

if( window.matchMedia('(max-width: 576px)').matches ) {
  window.scrollTo(0, 0);
  document.body.style.overflow = 'hidden';

  title.innerHTML = 'Everyday tops, we have something to suit every occasion.';

  for (var i = 0; i < product.length; i++) {
    product[i].innerHTML = 'Organic Skinny High <br> Waist Raw Hem Jeans';
  }
}