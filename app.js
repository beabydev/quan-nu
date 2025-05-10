document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".slider-container");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const slideCount = slides.length;
  let currentIndex = 0;

  function updateSlider() {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[currentIndex].classList.add("active");
    // Tùy chọn hiệu ứng trượt
    // sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function goToPrev() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }

  function goToNext() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
  }

  prevButton.addEventListener("click", goToPrev);
  nextButton.addEventListener("click", goToNext);

  // Hiển thị slide đầu tiên khi trang tải
  updateSlider();
});
