class Header extends HTMLElement {
    constructor() {
        super();

        this.currentPage = this.getAttribute("currentPage") || "index";
    }

    connectedCallback() {
        // Create the shadow DOM and make it open to JS encapsulation
        const shadow = this.attachShadow({ mode: "open" });

        // Create styling for the shadow DOM
        const style = this.createStyleElement();

        // Create Logo as home link
        const homeLink = document.createElement("a");
        homeLink.className = "home-link";
        homeLink.setAttribute("href", "./index.html");

        const homeLogo = document.createElement("img");
        homeLogo.setAttribute("src", "../assets/possibility_logo_rgb.png");
        homeLink.appendChild(homeLogo);

        // Create nav elements
        const nav = document.createElement("div");
        nav.className = "nav";
        const ul = document.createElement("ul");

        const t2sLink = this.createNavElement("./index.html#t2s-content", "t2s-link", "Think2Switch&trade;");
        const aboutLink = this.createNavElement("./about.html", "about-link", "About Us");
        const researchLink = this.createNavElement("./research.html", "research-link", "Research");
        const contactLink = this.createNavElement("./contact.html", "contact-link", "Contact");
        const trialLink = this.createEarlyAccess();

        ul.appendChild(t2sLink);
        ul.appendChild(aboutLink);
        ul.appendChild(researchLink);
        ul.appendChild(contactLink);
        ul.appendChild(trialLink);

        nav.appendChild(ul);

        // Add everything to shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(homeLink);
        shadow.appendChild(nav);
    }

    createNavElement(href, id, label) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.id = id;
        a.className = "nav-link";
        a.setAttribute("href", href);
        a.innerHTML = label;

        li.appendChild(a);

        if (this.currentPage === id) {
            a.classList.add("current-page");
        }

        return li;
    }

    createEarlyAccess() {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.className = "early-access desktop";
        a.setAttribute("href", "./trial.html");
        a.innerHTML = "Early Access";

        li.appendChild(a);

        if (this.currentPage === "trial-link") {
            a.classList.add("current-page");
        }

        return a;
    }

    createStyleElement() {
        var styleEle = document.createElement("style");

        styleEle.innerHTML = `
        .home-link {
            height: 70%;
            margin-left: 15px;
        }
        
        img {
            height: 90%;
        }
        
        .nav {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            margin-right: 15px;
        }
        
        .nav ul {
            list-style-type: none;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
        }
        
        .nav li {
            margin-right: 12px;
            margin-left: 12px;
            text-decoration: none;
            transition: all 0.3 ease;
            font-family: "Poppins", sans-serif;
            font-size: 1.1rem;
        }
        
        .nav-link {
            text-decoration: none;
            color: var(--tcolor, #fff);
            display: inline;
            position: relative;
            overflow: hidden;
        }
        
        .nav-link:after {
            content: "";
            position: absolute;
            z-index: -1;
            right: 0;
            width: 0;
            bottom: -2px;
            height: 2px;
            background-color: var(--bcolor, #fff);
            transition: width 0.3s ease-out;
        }
        
        .nav-link:focus {
            outline: none;
        }
        
        .current-page {
            font-weight: bold;
        }
        .current-page:after {
            left: 0;
            right: auto;
            width: 100%;
        }
        
        .nav-link:hover:after,
        .nav-link:focus:after,
        .nav-link:active:after {
            left: 0;
            right: auto;
            width: 100%;
        }
        
        .early-access {
            font-family: "Poppins", sans-serif;
            padding: 6px 10px;
            border-radius: 20px;
            color: #fff;
            background-color: #ec3096;
            border: 0.15rem solid #ec3096;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .early-access:hover {
            background-color: #fbd0e8;
            color: #ec3096;
            cursor: pointer;
        }
        
        .early-access.current-page {
            font-weight: normal;
            background-color: #fbd0e8;
            color: #ec3096;
            text-decoration: none;
        }
        
        .early-access.scrolled {
            background-color: #7f3f98;
            color: #fff;
            border: 0.15rem solid #7f3f98;
        }
        
        .early-access.scrolled:hover {
            background-color: #e0c9e8;
            color: #7f3f98;
        }
        `;

        return styleEle;
    }
}

customElements.define("header-element", Header);
