var nav = document.querySelector("nav.navigational-links");

document.getElementById("open-hamburger-menu").addEventListener("click", () => {
    
    // for transition property
    if (nav.classList.contains("disclose")) {
        // exit
        nav.classList.remove("disclose");
        
    } else if (!nav.classList.contains("disclose")) {
        // entry
        nav.classList.add("trnst-guide");
        
        setTimeout(() => {
            nav.classList.add("disclose");
        }, 1);
    }    
});

document.getElementById("close-btn").addEventListener("click", () => {
    nav.classList.remove("disclose");
});

// eventlisteners

window.addEventListener("resize", (sz) => {
    nav.classList.remove("disclose");

    // remove .trnst-guide immediately at desktop display
    if (window.innerWidth >= 780) {
        nav.classList.remove("trnst-guide");
    }
})

nav.addEventListener("transitionend", (e) => {
    // wait for the nav to be completely transaprent before removing
    if (nav.classList.contains("trnst-guide") && !nav.classList.contains("disclose") && e.propertyName === "opacity") {
        nav.classList.remove("trnst-guide");
    }
})