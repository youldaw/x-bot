$(".menu-opener").on("click", function (e) {
  $(this).toggleClass("active");
  $(".header__menu").toggleClass("active");
});

$(".hero__btn, .hero__link a").on("click", function (e) {
  e.preventDefault(); // Запрещаем переход по ссылке
  var target = $(this).attr("href"), // Берем значение из ссылки как цель id="second-screen"
    destination = $(target).offset().top; // Ищем верхнюю координату у нашей цели

  $("body,html").animate({ scrollTop: destination }, 500); // Плавно проматываем до цели
});

// function updateSliderValues() {
//   var sliderValue = $("#range").val();
//   var topPrice = 100000 - sliderValue * 1000;
//   var bottomPrice = 1000000 - sliderValue * 10000;

//   $(".value").toLocaleString();
//   $(".range__title").toLocaleString();
// }

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 2000,
  },
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});

const sliderEl = document.querySelector("#range");
const sliderValue = document.querySelector(".value");
const sliderValueSub = document.querySelector(".range__title span");

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;
  const tempSliderValueSub = event.target.value * 10;

  sliderValue.textContent = tempSliderValue;

  // Convert to string and replace commas with an empty space
  const formattedValueSub = tempSliderValueSub
    .toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/,/g, " ");

  sliderValueSub.textContent = formattedValueSub + "P.";

  const progress = (tempSliderValue / sliderEl.max) * 100;

  sliderEl.style.background = `linear-gradient(to right, #00ace1 ${progress}%, #000 ${progress}%)`;
});

$(document).ready(function ($) {
  $(".tab_content").hide();
  $(".tab_content:first").show();
  $(".tabs li:first").addClass("active");
  $(".tabs li").click(function (event) {
    $(".tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_content").hide();

    var selectTab = $(this).find("a").attr("href");

    $(selectTab).fadeIn();
  });
});
