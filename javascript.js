
/* moves the navigation off screen */
function closeNav() {
    nav = document.getElementById("nav");
    nav.style.left = "-50em";
}

/* moves navigation on-screen */
function openNav() {
    nav = document.getElementById("nav");
    nav.style.left = "0em";
}

let state = 0;

/* Theme toggle  */ 
function toggleTheme(){
    toggle_btn = document.getElementById("toggleTheme");
   
    if (state == 0){
        toggle_btn.innerHTML = "toggle_on"
        state = 1;
    } else {
        toggle_btn.innerHTML = "toggle_off"
        state = 0;
    }

    
}