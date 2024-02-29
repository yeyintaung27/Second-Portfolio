const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const filter_btns = document.querySelectorAll(".filter-btn");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));
    

var typed = new Typed(".type", {
    strings: [
        "I Am Designer",
        "I Am Wed Developer",
        "I Am App Developer",
        "I Am Programmer"
    ], 
    loop: true,
    typeSpeed: 0,   
    backSpeed: 0,
    shuffle: true,
    smartBackspace: false,
});


filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.7s",
});

window.addEventListener("scroll", () => {
    skillsEffect();
  });
  
  function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
  }
  
  function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
  }

  $(".modal-trigger").click(function(e){
    e.preventDefault();
    dataModal = $(this).attr("data-modal");
    $("#" + dataModal).css({"display":"block"});
    // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
  });
  
  $(".close-modal, .modal-sandbox").click(function(){
    $(".modal").css({"display":"none"});
    // $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
  });