const btnVan = document.querySelector(".btn-van");
const btnTruck = document.querySelector(".btn-truck");
const sectionContact = document.querySelector(".contact");
const truckContact = document.querySelector(".truck-contact");
const vanContact = document.querySelector(".van-contact");
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");

sectionContact.replaceChild(truckContact, vanContact);

btnTruck.addEventListener("click", () => {
  wrapper.classList.replace("van", "truck");
  body.classList.replace("van", "truck");
  sectionContact.classList.replace("van", "truck");
  sectionContact.replaceChild(truckContact, vanContact);
  if (btnVan.classList.contains("active")) {
    btnVan.classList.remove("active");
  }
  btnTruck.classList.add("active");
});

btnVan.addEventListener("click", () => {
  wrapper.classList.replace("truck", "van");
  body.classList.replace("truck", "van");
  sectionContact.classList.replace("truck", "van");
  sectionContact.replaceChild(vanContact, truckContact);
  if (btnTruck.classList.contains("active")) {
    btnTruck.classList.remove("active");
  }
  btnVan.classList.add("active");
});
