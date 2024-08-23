function openSearchModal() {
  document.getElementById("searchModal").style.display = "block";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("searchModal")) {
    document.getElementById("searchModal").style.display = "none";
  }
}
// Carousel with "flickity" library
const carousel = document.querySelector(".carousel");
if (carousel) {
  const flkty = new Flickity(carousel, {
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
    autoPlay: 5000, // Lecture automatique toutes les 5 secondes
    draggable: true, // Activation du déplacement manuel
  });

  // Pause lors du survol
  carousel.addEventListener("mouseenter", () => {
    flkty.stopPlayer();
  });
  carousel.addEventListener("mouseleave", () => {
    flkty.playPlayer();
  });
}

const mainCarousel = document.querySelector(".main-carousel");
if (mainCarousel) {
  const flkty = new Flickity(mainCarousel, {
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
    autoPlay: 2000, // Lecture automatique toutes les 5 secondes
    draggable: true, // Activation du déplacement manuel
  });

  // Pause lors du survol
  mainCarousel.addEventListener("mouseenter", () => {
    flkty.stopPlayer();
  });
  mainCarousel.addEventListener("mouseleave", () => {
    flkty.playPlayer();
  });
}

// Hide navigation icons
const flickityPrevNextButtons = document.querySelectorAll(".flickity-button");
flickityPrevNextButtons.forEach(button => {
  button.style.display = "none";
});
// إظهار الزر عند التمرير لأسفل الصفحة
window.onscroll = function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

// التمرير إلى أعلى الصفحة عند الضغط على الزر
document.getElementById("scrollToTopBtn").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // تأثير تمرير سلس
  });
};

window.addEventListener('load', function () {
  var loadingScreen = document.getElementById('loading-screen');

  function hideLoadingScreen() {
    loadingScreen.style.display = 'none';
  }

  function showLoadingScreen() {
    loadingScreen.style.display = 'flex';
  }

  function checkInternetConnection() {
    if (!navigator.onLine) {
      showLoadingScreen();
      setTimeout(hideLoadingScreen, 3000);
      setTimeout(checkInternetConnection, 1000);
    } else {
      hideLoadingScreen();
    }
  }

  checkInternetConnection();
});