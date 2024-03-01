const accordionItem = document.querySelectorAll(".accardion__item");

accordionItem.forEach((item, index) => {
  let accordionTitle = item.querySelector(".accardion__item-title");
  accordionTitle.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".accardion__item-text");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`;
    } else {
      description.style.height = "0px";
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionItem.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".accardion__item-text");
      des.style.height = "0";
    }
  });
}
