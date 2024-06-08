const screenHeight = document.documentElement.clientHeight;

// -----------------------------------------------------------------------------------------------
// Change color of header/footer elements on scroll
// -----------------------------------------------------------------------------------------------
const mainContent = document.getElementById("main-content");
const currentPageId = getCurrentPageId();

mainContent.addEventListener("scroll", function () {
    var scrollPosition = mainContent.scrollTop;

    var mobileNav = document.querySelector("#mobile-nav");
    var mobileNavFooter = document.querySelector("#mobile-nav-footer");

    if (scrollPosition > 0.1 * screenHeight) {
        var footerSocials = document.querySelector("#footer").shadowRoot.querySelector(".socials");
        footerSocials.classList.add("scrolled");

        var footerCopyright = document.querySelector("#footer").shadowRoot.querySelector(".copyright");
        footerCopyright.classList.add("scrolled");
    } else {
        var footerSocials = document.querySelector("#footer").shadowRoot.querySelector(".socials");
        footerSocials.classList.remove("scrolled");

        var footerCopyright = document.querySelector("#footer").shadowRoot.querySelector(".copyright");
        footerCopyright.classList.remove("scrolled");
    }

    if (scrollPosition > 0.9 * screenHeight && currentPageId !== "contact-link") {
        var earlyAccessDesktop = document.querySelector("#desktop-header").shadowRoot.querySelector(".early-access.desktop");
        earlyAccessDesktop.classList.add("scrolled");

        var earlyAccessMobile = document.querySelector("#mobile-header").shadowRoot.querySelector(".early-access");
        earlyAccessMobile.classList.add("scrolled");

        var menuIcon = document.querySelector("#mobile-header").shadowRoot.querySelector("menu-icon");
        menuIcon.classList.add("scrolled");

        var closeIcon = document.querySelector("#mobile-header").shadowRoot.querySelector("close-icon");
        closeIcon.classList.add("scrolled");

        var mobileLogoSmall = document.querySelector("#mobile-header").shadowRoot.querySelector("#mobile-logo-small");
        mobileLogoSmall.setAttribute("src", "../assets/possibility_neuron_color.png");

        var mobileLogoFull = document.querySelector("#mobile-header").shadowRoot.querySelector("#mobile-logo-full");
        mobileLogoFull.setAttribute("src", "../assets/possibility_logo_rgb.png");

        mobileNav.classList.add("scrolled");
        mobileNavFooter.classList.add("scrolled");

        var navLinks = document.querySelector("#desktop-header").shadowRoot.querySelectorAll(".nav-link");
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
        var earlyAccessDesktop = document.querySelector("#desktop-header").shadowRoot.querySelector(".early-access.desktop");
        earlyAccessDesktop.classList.remove("scrolled");

        var earlyAccessMobile = document.querySelector("#mobile-header").shadowRoot.querySelector(".early-access");
        earlyAccessMobile.classList.remove("scrolled");

        var menuIcon = document.querySelector("#mobile-header").shadowRoot.querySelector("menu-icon");
        menuIcon.classList.remove("scrolled");

        var closeIcon = document.querySelector("#mobile-header").shadowRoot.querySelector("close-icon");
        closeIcon.classList.remove("scrolled");

        var mobileLogoSmall = document.querySelector("#mobile-header").shadowRoot.querySelector("#mobile-logo-small");
        mobileLogoSmall.setAttribute("src", "../assets/possibility_neuron_white.png");

        var mobileLogoFull = document.querySelector("#mobile-header").shadowRoot.querySelector("#mobile-logo-full");
        mobileLogoFull.setAttribute("src", "../assets/possibility_logo_white.png");

        mobileNav.classList.remove("scrolled");
        mobileNavFooter.classList.remove("scrolled");

        var navLinks = document.querySelector("#desktop-header").shadowRoot.querySelectorAll(".nav-link");
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
// Mobile Menu
// -----------------------------------------------------------------------------------------------
var menuIcon = document.querySelector("#mobile-header").shadowRoot.querySelector("menu-icon");
menuIcon.addEventListener("click", (event) => {
    openMobileMenu();
});

var closeIcon = document.querySelector("#mobile-header").shadowRoot.querySelector("close-icon");
closeIcon.addEventListener("click", (event) => {
    closeMobileMenu();
});

var homeLink = document.querySelector("#mobile-header").shadowRoot.querySelector(".home-link");
homeLink.addEventListener("click", (event) => {
    closeMobileMenu();
});

function openMobileMenu() {
    document.querySelector("#mobile-nav").style.display = "flex";
    document.getElementById("main-content").style.display = "none";
    document.querySelector("#mobile-header").shadowRoot.querySelector("menu-icon").style.display = "none";
    document.querySelector("#mobile-header").shadowRoot.querySelector("close-icon").style.display = "flex";
    document.querySelector("#mobile-header").shadowRoot.querySelector(".early-access").style.display = "none";
    document.querySelector("#mobile-header").shadowRoot.querySelector("#mobile-logo-small").style.display = "none";
    document.querySelector("#mobile-header").shadowRoot.querySelector("#mobile-logo-full").style.display = "flex";
}

function closeMobileMenu() {
    //  document.querySelector("#mobile-nav").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.querySelector("#mobile-header").shadowRoot.querySelector("menu-icon").style.display = "flex";
    document.querySelector("#mobile-header").shadowRoot.querySelector("close-icon").style.display = "none";
    document.querySelector("#mobile-header").shadowRoot.querySelector(".early-access").style.display = "flex";
    document.querySelector("#mobile-header").shadowRoot.querySelector("#mobile-logo-small").style.display = "flex";
    document.querySelector("#mobile-header").shadowRoot.querySelector("#mobile-logo-full").style.display = "none";
}
