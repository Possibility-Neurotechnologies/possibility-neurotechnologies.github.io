const screenHeight = document.documentElement.clientHeight;

// -----------------------------------------------------------------------------------------------
// Change color of header/footer elements on scroll
// -----------------------------------------------------------------------------------------------
const mainContent = document.getElementById("main-content");
const currentPageId = getCurrentPageId();

mainContent.addEventListener("scroll", function () {
    var navLinks = document.querySelectorAll(".nav-link");
    var earlyAccessDesktop = document.querySelector(".early-access.desktop");
    var earlyAccessMobile = document.querySelector(".early-access.mobile");
    var mobileLogo = document.querySelector("#mobile-logo");
    var mobileMenuLogo = document.querySelector("#mobile-menu-logo");
    var mobileNav = document.querySelector("#mobile-nav");
    var hamburgerMenu = document.querySelector("menu-icon");
    var closeIcon = document.querySelector("close-icon");
    var mobileNavFooter = document.querySelector("#mobile-nav-footer");

    var footer = document.querySelector("footer");
    // var scrollBarStyle = document.querySelector("#scrollbar-style");
    var scrollPosition = mainContent.scrollTop;

    if (scrollPosition > 0.1 * screenHeight) {
        footer.classList.add("scrolled");
    } else {
        footer.classList.remove("scrolled");
    }
    /* if (scrollPosition > 0.5 * screenHeight) {
        scrollBarStyle.innerHTML = scrolledScrollBar;
    } else {
        scrollBarStyle.innerHTML = unscrolledScrollBar;
    } */
    if (scrollPosition > 0.9 * screenHeight && currentPageId !== "contact-link") {
        earlyAccessDesktop.classList.add("scrolled");
        earlyAccessMobile.classList.add("scrolled");
        mobileNav.classList.add("scrolled");
        hamburgerMenu.classList.add("scrolled");
        closeIcon.classList.add("scrolled");
        mobileNavFooter.classList.add("scrolled");

        mobileLogo.setAttribute("src", "./assets/possibility_neuron_color.png");
        mobileMenuLogo.setAttribute("src", "./assets/possibility_logo_rgb.png");

        for (i = 0; i < navLinks.length; i++) {
            if (navLinks[i].id == "t2s-link" && currentPageId == "t2s-link") {
                navLinks[i].classList.add("current-page");
            }
            if (navLinks[i].id == currentPageId) {
                setNavColors(navLinks[i], "#ec3096", "#ec3096");
            } else {
                setNavColors(navLinks[i], "#333", "#ec3096");
            }
        }
    } else {
        earlyAccessDesktop.classList.remove("scrolled");
        earlyAccessMobile.classList.remove("scrolled");
        mobileNav.classList.remove("scrolled");
        hamburgerMenu.classList.remove("scrolled");
        closeIcon.classList.remove("scrolled");
        mobileNavFooter.classList.remove("scrolled");

        mobileLogo.setAttribute("src", "./assets/possibility_neuron_white.png");
        mobileMenuLogo.setAttribute("src", "./assets/possibility_logo_white.png");

        for (i = 0; i < navLinks.length; i++) {
            if (navLinks[i].id == "t2s-link" && currentPageId == "t2s-link") {
                navLinks[i].classList.remove("current-page");
            }
            setNavColors(navLinks[i], "#fff", "#fff");
        }
    }
});

// Sets the text color and underline color for a nav link
function setNavColors(element, textColor, fillColor) {
    element.style.setProperty("--tcolor", textColor);
    element.style.setProperty("--bcolor", fillColor);
}

// Helper function to get the ID of the current
function getCurrentPageId() {
    var page = window.location.href.split("/").slice(-1)[0].split(".")[0];
    let pageId = "";
    if (page == "index") {
        pageId = "t2s-link";
    } else if (page == "about") {
        pageId = "about-link";
    } else if (page == "research") {
        pageId = "research-link";
    } else if (page == "contact") {
        pageId = "contact-link";
    }
    return pageId;
}

// -----------------------------------------------------------------------------------------------
// Mouse over event for Team page
// -----------------------------------------------------------------------------------------------
var headshots = document.getElementsByClassName("headshot");

if (headshots.length > 0) {
    for (let i = 0; i < headshots.length; i++) {
        headshots[i].addEventListener("mouseenter", (event) => {
            makeOverlayOpaque(event.target.getElementsByClassName("overlay")[0]);
        });
        headshots[i].addEventListener("touchstart", (event) => {
            makeAllOverlaysTransparent();
            makeOverlayOpaque(event.target.getElementsByClassName("overlay")[0]);
        });

        headshots[i].addEventListener("touchend", (event) => {
            makeOverlayTransparent(event.target.getElementsByClassName("overlay")[0]);
        });

        headshots[i].addEventListener("mouseleave", (event) => {
            makeOverlayTransparent(event.target.getElementsByClassName("overlay")[0]);
        });
    }
}

function makeOverlayOpaque(element) {
    element.style.opacity = "1";
}

function makeOverlayTransparent(element) {
    element.style.opacity = "0";
}

function makeAllOverlaysTransparent() {
    for (let i = 0; i < headshots.length; i++) {
        makeOverlayTransparent(headshots[i].getElementsByClassName("overlay")[0]);
    }
}

// -----------------------------------------------------------------------------------------------
// Scrollbar
// -----------------------------------------------------------------------------------------------
const unscrolledScrollBar = `
main::-webkit-scrollbar {
    width: 8px;
}

main::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 8px;
    border: 2px solid #7f3f98;
    height: 30px;
}

main::-webkit-scrollbar-track {
    background-color: #7f3f98;
}`;

const scrolledScrollBar = `
main::-webkit-scrollbar {
    width: 8px;
    transition: all 0.3s ease;
}

main::-webkit-scrollbar-thumb {
    background: #7f3f98;
    border-radius: 8px;
    border: 2px solid #fff;
    height: 30px;
}

main::-webkit-scrollbar-track {
    background-color: #fff;
}`;
