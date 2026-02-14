// Card Click Navigation
document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("click",()=>{
    window.location.href = card.dataset.link;
  });
});

// Mobile Menu Toggle
const toggle = document.querySelector(".vs-toggle");
const menu = document.querySelector(".vs-menu");

toggle.addEventListener("click",()=>{
  menu.classList.toggle("active");
});
