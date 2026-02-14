// Card Click Navigation
document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("click",()=>{
    const link = card.dataset.link;
    if(link){
      window.location.href = link;
    }
  });
});

// Mobile Menu Toggle (SAFE)
const toggle = document.querySelector(".vs-toggle");
const menu = document.querySelector(".vs-menu");

if(toggle && menu){
  toggle.addEventListener("click",()=>{
    menu.classList.toggle("active");
  });
}
