$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  // toogle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Update image after every 2 seconds
  const imgContainer = document.querySelector("#img-folder");
  const imgFolder = imgContainer.querySelectorAll(".img-item");
  let currentIndex = 0;
  function updateImages() {
    imgFolder.forEach((img, index) => {
      img.classList.remove("active");
      img.classList.add("fade-out");
    });

    imgFolder[currentIndex].classList.add("active");
    imgFolder[currentIndex].classList.remove("fade-out");
    currentIndex = (currentIndex + 1) % imgFolder.length;
  }

  updateImages();
  setInterval(() => {
    imgFolder[currentIndex].classList.add("fade-out");
    updateImages();
  }, 5000);

  // typing animation script
  new Typed(".typing", {
    strings: ["Developer", "FreeLancer"],
    typeSpeed: 120,
    backSpeed: 40,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Coder", "Tech enthusiast"],
    typeSpeed: 120,
    backSpeed: 40,
    loop: true,
  });

  var typed = new Typed(".typing-3", {
    strings: [
      "New Technologies",
      "Java Frameworks",
      "Gen-AI Frameworks",
    ],
    typeSpeed: 120,
    backSpeed: 40,
    loop: true,
  });

  // owl carousel script{
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// Toggle Details on Button Click
function toggleDetails(button) {
  let details = button.nextElementSibling;

  if (details.style.display === "block") {
      details.style.display = "none";
      button.innerText = "Learn More";
  } else {
      details.style.display = "block";
      button.innerText = "Show Less";
  }
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop: true,             // Enables infinite scrolling
      margin: 20,             // Spacing between cards
      nav: true,              // Enables navigation arrows
      dots: true,             // Enables pagination dots
      autoplay: true,         // Auto-slide enabled
      autoplayTimeout: 3000,  // Slide every 3 seconds
      responsive: {
          0: { items: 1 },    // 1 item on small screens
          600: { items: 2 },  // 2 items on medium screens
          1000: { items: 3 }  // 3 items on large screens
      }
  });
});
