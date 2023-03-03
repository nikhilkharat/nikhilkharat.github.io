//Header fixed

window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
}

//navbar links

document.querySelector('.nav1').onclick = function () {
  var redirectWindow = window.open('https://drive.google.com/file/d/1zaJrWZTzw_TqyG0fC3rt3icSLPvsd7G_/view?usp=sharing', '_blank');
  redirectWindow.location
}

const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a")

a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active")
    }
    this.classList.add("active");
    document.querySelector(".navbar").classList.toggle("show");
  })
})

//Hamburger

const hamBurger = document.querySelector(".hamburger");

hamBurger.addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("show");
})


document.querySelector('.cv-btn').onclick = function () {
  var redirectWindow = window.open('https://drive.google.com/file/d/1zaJrWZTzw_TqyG0fC3rt3icSLPvsd7G_/view?usp=sharing', '_blank');
  redirectWindow.location
}

