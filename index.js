$(document).ready(function () {
  var $slider = $(".offer-slider");
  var $slider1 = $(".product");
  var $slider2 = $(".other-products");
  var $slider3 = $(".clients");
  var $slider4 = $(".header-slider");
  var $slider5 = $(".product-phone-version");

  $slider.slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slick-prev">&larr;</button>',
    nextArrow: '<button class="slick-next">&rarr;</button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
          variableWidth: true,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $slider1.slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev-1">&larr;</button>',
    nextArrow: '<button class="slick-next-1">&rarr;</button>',
  });
  $slider2.slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev-2">&larr;</button>',
    nextArrow: '<button class="slick-next-2">&rarr;</button>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  $slider3.slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    appendDots: $(".client-dots"),
    customPaging: function (slider, i) {
      return '<span class="client-dot"></span>';
    },
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $slider4.slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: $(".header-dots"),
    customPaging: function (slider, i) {
      return '<span class="header-dot"></span>';
    },
  });
  $slider5.slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: '<button class="slick-prev-1">&larr;</button>',
    nextArrow: '<button class="slick-next-1">&rarr;</button>',
  });
  function calculateTotalPages() {
    var slidesToShow = slick.options.slidesToShow;
    var totalSlides = slick.slideCount;
    return Math.ceil(totalSlides / slidesToShow);
  }

  // Обновление счетчика - показываем страницы, а не слайды
  var totalPages = calculateTotalPages();
  $(".total-slides").text(totalPages < 10 ? "0" + totalPages : totalPages);

  $slider.on("afterChange", function (event, slick, currentSlide) {
    // Рассчитываем текущую страницу
    var slidesToShow = slick.options.slidesToShow;
    var currentPage = Math.floor(currentSlide / slidesToShow) + 1;

    // Обновляем общее количество страниц (на случай изменения адаптивности)
    var totalPages = Math.ceil(slick.slideCount / slidesToShow);

    $(".slider-counter").html(
      (currentPage < 10 ? "0" + currentPage : currentPage) +
        "/" +
        (totalPages < 10 ? "0" + totalPages : totalPages),
    );

    // Обновляем также .total-slides (на случай адаптивности)
    $(".total-slides").text(totalPages < 10 ? "0" + totalPages : totalPages);
  });

  // Также обновляем при изменении размера окна (адаптивность)
  $(window).on("resize", function () {
    setTimeout(function () {
      var currentSlide = slick.currentSlide;
      var slidesToShow = slick.options.slidesToShow;
      var currentPage = Math.floor(currentSlide / slidesToShow) + 1;
      var totalPages = Math.ceil(slick.slideCount / slidesToShow);

      $(".slider-counter").html(
        (currentPage < 10 ? "0" + currentPage : currentPage) +
          "/" +
          (totalPages < 10 ? "0" + totalPages : totalPages),
      );
      $(".total-slides").text(totalPages < 10 ? "0" + totalPages : totalPages);
    }, 100);
  });
});
