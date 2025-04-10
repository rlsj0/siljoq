document.addEventListener("DOMContentLoaded", function() {
  const openMenuBtn = document.getElementsByClassName("subheader__button-open")[0];
  const closeMenuBtn = document.getElementsByClassName("subheader__button-close")[0];
  const subheader = document.getElementsByClassName("subheader__top")[0];
  const nav = document.getElementsByClassName("subheader__nav")[0];

  openMenuBtn.addEventListener("click", () => {
    nav.classList.remove("hidden");
    nav.classList.add("active");
    subheader.classList.remove("active");
    subheader.classList.add("hidden");
  })

  closeMenuBtn.addEventListener("click", () => {
    nav.classList.remove("active");
    nav.classList.add("hidden");
    subheader.classList.remove("hidden");
    subheader.classList.add("active");
  })

  const checkboxes = document.querySelectorAll(".footer__checkbox input");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function() {
      // Del input paso al hermano (.footer__checkbox-icon), de ahí al
      // primer hijo (el svg) y de ahí al último hijo (la línea del check)
      const checkboxIcon = checkbox.nextElementSibling;
      const svg = checkboxIcon.firstElementChild;
      const checkLine = svg.lastElementChild;

      if (this.checked) {
        checkLine.style.opacity = "1";
      } else {
        checkLine.style.opacity = "0";
      }
    })
  })

  const filterButton = document.querySelector(".productbar__filter-button");
  const filters = document.querySelector(".filters");

  filterButton.addEventListener("click", () => {
    if (filters.classList.contains("hidden")) {
      filters.classList.remove("hidden");
      filters.classList.add("active");
    } else {
      filters.classList.remove("active");
      filters.classList.add("hidden");
    }
  })

});
