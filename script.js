const joinButton = document.querySelector("#joinVillage");
const mask = document.querySelector(".member-mask");
const tabs = document.querySelectorAll(".tabs button");
const navItems = document.querySelectorAll(".bottom-nav button");
const dots = document.querySelectorAll(".dots i");

joinButton.addEventListener("click", () => {
  mask.querySelector("strong").textContent = "已入村，欢迎查看乡村动态";
  joinButton.textContent = "已入村";
  mask.style.background = "rgba(22, 190, 131, 0.9)";
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
  });
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");
  });
});

let activeDot = 1;
setInterval(() => {
  dots[activeDot].classList.remove("active");
  activeDot = (activeDot + 1) % dots.length;
  dots[activeDot].classList.add("active");
}, 2400);
