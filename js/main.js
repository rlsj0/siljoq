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
});
