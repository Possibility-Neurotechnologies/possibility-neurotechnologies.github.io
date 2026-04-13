const screenHeight = document.documentElement.clientHeight;

// -----------------------------------------------------------------------------------------------
// Change color of header/footer elements on scroll
// -----------------------------------------------------------------------------------------------
const mainContent = document.getElementById("main-content");
const currentPageId = getCurrentPageId();
const scrollIndicator = document.querySelector(".scroll-indicator");

mainContent.addEventListener("scroll", function () {
    var headers = document.querySelectorAll("header");
    var navLinks = document.querySelectorAll(".nav-link");
    var startDesktop = document.querySelector(".start-nav.desktop");
    var startMobile = document.querySelector(".start-nav.mobile");
    var desktopLogo = document.querySelector("#desktop-logo");
    var mobileLogo = document.querySelector("#mobile-logo");
    var mobileMenuLogo = document.querySelector("#mobile-menu-logo");
    var mobileNav = document.querySelector("#mobile-nav");
    var hamburgerMenu = document.querySelector("menu-icon");
    var closeIcon = document.querySelector("close-icon");
    var mobileNavFooter = document.querySelector("#mobile-nav-footer");

    var footer = document.querySelector("footer");
    var scrollPosition = mainContent.scrollTop;

    // Scroll indicator: hide once user scrolls past title / hero 
    if (scrollIndicator) {
        if (mainContent.scrollTop > 60) {
            scrollIndicator.classList.add("hidden");
        } else {
            scrollIndicator.classList.remove("hidden");
        }
    }

    if (scrollPosition > 0.1 * screenHeight) {
        footer.classList.add("scrolled");
    } else {
        footer.classList.remove("scrolled");
    }
    if (scrollPosition > 0.9 * screenHeight && currentPageId !== "contact-link") {
        startDesktop.classList.add("scrolled");
        startMobile.classList.add("scrolled");
        mobileNav.classList.add("scrolled");
        hamburgerMenu.classList.add("scrolled");
        closeIcon.classList.add("scrolled");
        mobileNavFooter.classList.add("scrolled");

        desktopLogo.setAttribute("src", "./assets/possibility_logo_rgb.png");
        mobileLogo.setAttribute("src", "./assets/possibility_neuron_color.png");
        mobileMenuLogo.setAttribute("src", "./assets/possibility_logo_rgb.png");

        for (i = 0; i < headers.length; i++) {
            headers[i].style.background = "#fff";
        }

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
        startDesktop.classList.remove("scrolled");
        startMobile.classList.remove("scrolled");
        mobileNav.classList.remove("scrolled");
        hamburgerMenu.classList.remove("scrolled");
        closeIcon.classList.remove("scrolled");
        mobileNavFooter.classList.remove("scrolled");

        desktopLogo.setAttribute("src", "./assets/possibility_logo_white.png");
        mobileLogo.setAttribute("src", "./assets/possibility_neuron_white.png");
        mobileMenuLogo.setAttribute("src", "./assets/possibility_logo_white.png");

        for (i = 0; i < headers.length; i++) {
            headers[i].style.background = "linear-gradient(90deg, #e5287e 0%, #7f3f98 100%)";
        }

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
    } else if (page == "concept") {
        pageId = "research-link";
    } else if (page == "contact") {
        pageId = "contact-link";
    } else if (page == "media") {
        pageId = "media-link";
    }
    return pageId;
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
