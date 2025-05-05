
  const mainHeader = document.getElementById('main-header');
  const secondaryHeader = document.getElementById('secondary-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      // Khi về đỉnh trang
      mainHeader.classList.remove('hide');
      secondaryHeader.style.top = mainHeader.offsetHeight + 'px';
    } else {
      // Khi cuộn xuống hoặc cuộn lên giữa chừng
      mainHeader.classList.add('hide');
      secondaryHeader.style.top = '0px';
    }
  });

  // Khởi tạo vị trí secondary-header đúng sau khi trang load
  window.addEventListener('load', () => {
    secondaryHeader.style.top = mainHeader.offsetHeight + 'px';
  });
