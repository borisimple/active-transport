const btnVan = document.querySelector(".btn-van");
const vanContact = document.querySelector(".van-contact");
const btnTruck = document.querySelector(".btn-truck");
const truckContant = [...document.querySelectorAll(".truck-contact")];
const wrapper = document.querySelector(".wrapper");
const main = document.querySelector("main");
const contact = document.querySelector(".contact");

const body = document.querySelector("body");

btnVan.addEventListener("click", () => {
  //   checkCurrentType();
  body.classList.replace("truck", "van");
  main.classList.replace("truck", "van");
  contact.classList.replace("truck", "van");
  btnTruck.classList.replace("active", "");
});
btnTruck.addEventListener("click", () => {
  //   checkCurrentType();
  body.classList.replace("van", "truck");
  main.classList.replace("van", "truck");
  contact.classList.replace("van", "truck");
  btnTruck.classList.replace("", "active");
});

trucks = async (a, st) => {
  a.forEach((element) => {
    element.style.display = `${st}`;
  });
};

// (checkCurrentType = () => {
//   wrapper.classList.contains("van")
//     ? (vanContact.style.display = "block") && trucks(truckContant, "none")
//     : (vanContact.style.display = "none") && trucks(truckContant, "block");
// })();
