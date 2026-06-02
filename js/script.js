const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", function () {
     navLinks.classList.toggle("open");
     const isOpen = navLinks.classList.contains("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  const links = navLinks.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", false);
    });
  });
}

const shareBtn = document.querySelector(".share-btn");

if (shareBtn) {
  shareBtn.addEventListener("click", function () {
    const pageUrl = window.location.href;

    navigator.clipboard.writeText(pageUrl).then(function () {
        shareBtn.classList.add("copied");
      showToast("Link copied to clipboard");
      setTimeout(function () {
        shareBtn.classList.remove("copied");
      }, 2000);
    });
  });
}

function showToast(message) {
     let toast = document.querySelector(".toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(function () {
    toast.classList.remove("show");
  }, 2500);
}