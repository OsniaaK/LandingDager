export const select = (selector) => document.querySelector(selector);
export const selectAll = (selector) => document.querySelectorAll(selector);

export const closeMenus = (elementoCerrar, disparador) => {
  document.addEventListener("click", (e) => {
    if (!elementoCerrar.contains(e.target) && !disparador.contains(e.target)) {
      elementoCerrar.classList.add("disappearMenu");
      elementoCerrar.classList.remove("appearMenu");
    }
  });
};