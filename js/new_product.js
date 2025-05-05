let currentIndex = 0;
const productList = document.querySelector('.list_product_new');
const products = document.querySelectorAll('.list_product_new .product');
const productWidth = products[0].offsetWidth + parseFloat(getComputedStyle(products[0]).marginRight) * 2;
const maxIndex = products.length - Math.floor(productList.offsetWidth / productWidth);

function updateSlider() {
  const translateX = -(productWidth * currentIndex);
  productList.style.transform = `translateX(${translateX}px)`;
}

function nextPage() {
  currentIndex++;
  if (currentIndex > maxIndex) currentIndex = 0; // Quay về đầu
  updateSlider();
}

function prevPage() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = maxIndex; // Quay về cuối
  updateSlider();
}

window.addEventListener('resize', () => {
  updateSlider();
});