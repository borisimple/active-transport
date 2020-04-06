const btnVan = document.querySelector(".btn-van");
const btnTruck = document.querySelector(".btn-truck");
const sectionContact = document.querySelector(".contact");
const truckContact = document.querySelector(".truck-contact");
const vanContact = document.querySelector(".van-contact");
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");

btnTruck.addEventListener("click", () => {
  wrapper.classList.replace("van", "truck");
  body.classList.replace("van", "truck");
  sectionContact.replaceChild(truckContact, vanContact);
});

btnVan.addEventListener("click", () => {
  wrapper.classList.replace("truck", "van");
  body.classList.replace("truck", "van");
  sectionContact.replaceChild(vanContact, truckContact);
});
