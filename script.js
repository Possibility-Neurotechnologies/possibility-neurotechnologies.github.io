const screenHeight = document.documentElement.clientHeight;

// -----------------------------------------------------------------------------------------------
// Change color of header/footer elements on scroll
// -----------------------------------------------------------------------------------------------
const mainContent = document.getElementById("main-content");
const currentPageId = getCurrentPageId();

mainContent.addEventListener("scroll", function () {
    var navLinks = document.querySelectorAll(".nav-link");
    var earlyAccess = document.querySelector("#early-access");
    var footer = document.querySelector("footer");
    var scrollPosition = mainContent.scrollTop;

    if (scrollPosition > 0.1 * screenHeight) {
        footer.classList.add("scrolled");
    } else {
        footer.classList.remove("scrolled");
    }
    if (scrollPosition > 0.9 * screenHeight) {
        earlyAccess.classList.add("scrolled");
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
        earlyAccess.classList.remove("scrolled");
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
console.log(headshots.length);

if (headshots.length > 0) {
    for (let i = 0; i < headshots.length; i++) {
        headshots[i].addEventListener("mouseenter", (event) => {
            var overlay = event.target.getElementsByClassName("overlay")[0];
            overlay.style.opacity = "1";
        });
        headshots[i].addEventListener("mouseleave", (event) => {
            var overlay = event.target.getElementsByClassName("overlay")[0];
            overlay.style.opacity = "0";
        });
    }
}
