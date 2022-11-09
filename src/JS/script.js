"use strict";

let icon = document.querySelectorAll(".fa-regular");

icon.forEach((icon) => {
  if (icon.classList.contains("fa-envelope")) {
    icon.addEventListener("click", () => {
      icon.classList.add("fa-envelope-open-text");
      icon.classList.remove("fa-envelope");
      icon.classList.toggle("fa-solid");
      setTimeout(() => {
        icon.classList.toggle("fa-solid");
        icon.classList.remove("fa-envelope-open-text");
        icon.classList.add("fa-envelope");
      }, 100);
    });
  } else {
    icon.addEventListener("click", () => {
      icon.classList.toggle("fa-solid");
      setTimeout(() => {
        icon.classList.toggle("fa-solid");
      }, 100);
    });
  }
});
