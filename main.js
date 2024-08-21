window.onscroll = function() {
    const header = document.querySelector("header");
    if (window.scrollY > 500) { // Change 50 to any value you prefer
        header.style.boxShadow = "0 4px 8px #eee";
        header.style.backgroundColor = "#fff";
        
    } else {
        header.style.boxShadow = "none";
    }
};

let menu=document.querySelector("#menu-icon");
let navmenu=document.querySelector("nav");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navmenu.classList.toggle("open");

}

