// menus open and close
let features = document.querySelector("ul li.features .name"),
  featuresMenu = document.querySelector(".more-features"),
  fArrowUp = document.querySelector(".name img.features-arrow-up"),
  fArrowDown = document.querySelector(".name img.features-arrow-down"),

  company = document.querySelector("ul li.company .name"),
  companyMenu = document.querySelector(".about-company"),
  mArrowUp = document.querySelector(".name img.company-arrow-up"),
  mArrowDown = document.querySelector(".name img.company-arrow-down");

features.onclick = () => {
  features.classList.toggle("active");
  if (features.classList.contains("active")) {
    featuresMenu.style.cssText = "display:flex; visibility: visible; opacity: 1;";
    fArrowDown.style.cssText = "display: none";
    fArrowUp.style.cssText = "display: inline";
  } else {
    featuresMenu.style.cssText = "";
    fArrowDown.style.cssText = "";
    fArrowUp.style.cssText = "";
  }
};

company.onclick = () => {
  company.classList.toggle("active");
  if (company.classList.contains("active")) {
    companyMenu.style.cssText = "display:flex; visibility: visible; opacity: 1;";
    mArrowDown.style.cssText = "display: none";
    mArrowUp.style.cssText = "display: inline";
  } else {
    companyMenu.style.cssText = "";
    mArrowDown.style.cssText = "";
    mArrowUp.style.cssText = "";
  }
};
// ---------------------------------------------------------------------------------
// show menu in phone screen:
let openBtn = document.querySelector(".menu-open"),
  closeBtn = document.querySelector(".menu-close"),
  menu = document.querySelector(".menu");

openBtn.onclick = () => {
  menu.style.cssText = "display: block; opacity:1;";
  openBtn.style.cssText = "z-index:0";
};
closeBtn.onclick = () => {
  menu.style.cssText = "opacity:0;";
  openBtn.style.cssText = "";
};
