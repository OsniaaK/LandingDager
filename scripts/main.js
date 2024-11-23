import {} from "./reveal.js";
import { select, selectAll, closeMenus } from "./helpers.js";

selectAll(".aboutLI").forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const { offsetWidth: width, offsetHeight: height } = item;
    const x = (e.offsetX / width) * 30;
    const y = (e.offsetY / height) * 30;
    item.style.transition = "transform 0.1s";
    item.style.transform = `rotateY(${x - 10}deg) rotateX(${10 - y}deg)`;
  });
  item.addEventListener("mouseleave", () => {
    item.style.transition = "transform 0.2s";
    item.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
});

const textAreaInput = select("#textAreaInput");

textAreaInput.addEventListener("input", function () {
  textAreaInput.style.height = "auto";
  textAreaInput.style.height = this.scrollHeight + "px";
});

const buttonMobile = select("#buttonMenuMobile");
const menuMobile = select("#burguerNav");
buttonMobile.addEventListener("click", (e) => {
  e.preventDefault();
  menuMobile.classList.toggle("appearMenu");
  menuMobile.classList.toggle("disappearMenu");
});
closeMenus(menuMobile, buttonMobile);

const buttonContact = select("#sendContactButton");
const warningSent = select("#modalSent");
const emailInput = select("#emailInput");
const numberInput = select("#numberInput");
buttonContact.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    emailInput.length == 0 ||
    numberInput.length == 0 ||
    textAreaInput.length == 0
  ) {
    return;
  }
  warningSent.classList.add("animationToolTip");
  warningSent.classList.remove("noToolTip");
  setTimeout(() => {
    warningSent.classList.remove("animationToolTip");
    warningSent.classList.add("noToolTip");
  }, 3000);
});