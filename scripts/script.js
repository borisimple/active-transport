const truckInfo = document.querySelector(".truck-info");
const vanInfo = document.querySelector(".van-info");
const copyright = document.querySelector("footer small");

const date = new Date();
copyright.innerHTML = `Copyright &copy; ${date.getFullYear()} BORISK. All rights reserved.`;
