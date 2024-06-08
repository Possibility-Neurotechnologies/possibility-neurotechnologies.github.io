class MobileNav extends HTMLElement {
    constructor() {
        super();

        this.currentPage = this.getAttribute("currentPage") || "index";
    }

    connectedCallback() {
        // Create the shadow DOM and make it open to JS encapsulation
        const shadow = this.attachShadow({ mode: "open" });

        // Create styling for the shadow DOM
        const style = this.createStyleElement();

        // Create a div for spacing
        const div = document.createElement("div");

        // Create nav links
        const nav = document.createElement("div");
        // nav.setAttribute("currentPage", this.currentPage);
        nav.id = "nav";

        // Create footer
        const footer = document.createElement("mobile-footer");
        footer.id = "mobile-nav-footer";

        // Add everything to shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(div);
        shadow.appendChild(nav);
        shadow.appendChild(footer);
    }

    createStyleElement() {
        var styleEle = document.createElement("style");

        styleEle.innerHTML = `
        #mobile-nav {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background-image: linear-gradient(90deg, #e5287e 0%, #7f3f98 100%);
        }
    
        #nav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width: 70%;
            height: 50%;
        }
    
        #nav ul {
            list-style-type: none;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding-left: 0px;
        }
    
        #nav li {
            margin-bottom: 30px;
        }
    
        .current-page {
            text-decoration: underline;
        }
    
        #nav .early-access {
            font-size: 1rem;
            padding: 4px 10px;
            background-color: #7f3f98;
            border: 0.15rem solid #7f3f98;
        }
    
        #nav .early-access:hover {
            background-color: #e0c9e8;
            color: #7f3f98;
        }
    
        #nav .early-access.current-page {
            font-weight: normal;
            background-color: #e0c9e8;
            color: #7f3f98;
            text-decoration: none;
        }
    
        #mobile-nav-footer {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            background: transparent;
            transition: all 0.3s ease;
            fill: #fff;
            color: #fff;
        }
    
        #mobile-nav.scrolled {
            background-image: none;
            background-color: #fff;
        }
    `;

        return styleEle;
    }
}

customElements.define("mobile-nav", MobileNav);

class NavLinks extends HTMLElement {
    constructor() {
        super();

        this.currentPage = this.getAttribute("currentPage") || "index";
    }

    connectedCallback() {
        const nav = document.createElement("div");
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
}

customElements.define("nav-links", NavLinks);

class MobileFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Create the shadow DOM and make it open to JS encapsulation
        const shadow = this.attachShadow({ mode: "open" });

        // Create styling for the shadow DOM
        const style = this.createStyleElement();

        // Create <div> for the social media icons
        const socialsDiv = document.createElement("div");
        socialsDiv.id = "socials";

        const fbLink = this.createLinkElement("https://www.facebook.com/profile.php?id=61551642523387");
        const xLink = this.createLinkElement("https://x.com/PossNeuro");
        const instaLink = this.createLinkElement("https://www.instagram.com/possneuro/");
        const lnLink = this.createLinkElement("https://www.linkedin.com/company/possibility-neurotechnologies/");
        const mailLink = this.createLinkElement("mailto: info@possneuro.com");

        fbLink.appendChild(document.createElement("facebook-icon"));
        xLink.appendChild(document.createElement("x-icon"));
        instaLink.appendChild(document.createElement("insta-icon"));
        lnLink.appendChild(document.createElement("linkedin-icon"));
        mailLink.appendChild(document.createElement("email-icon"));

        socialsDiv.appendChild(fbLink);
        socialsDiv.appendChild(xLink);
        socialsDiv.appendChild(instaLink);
        socialsDiv.appendChild(lnLink);
        socialsDiv.appendChild(mailLink);

        // Create <div> for the copyright
        const copyrightDiv = document.createElement("div");
        copyrightDiv.id = "copyright";

        const copyrightText = document.createElement("span");
        copyrightText.innerHTML = "Copyright &copy; 2024 Possibility Neurotechnologies. <br/> All rights reserved.";
        copyrightDiv.appendChild(copyrightText);

        // Add everything to the container div
        shadow.appendChild(style);
        shadow.appendChild(socialsDiv);
        shadow.appendChild(copyrightDiv);
    }

    // Helper to create a link element with a given href
    createLinkElement(href) {
        var linkEle = document.createElement("a");
        linkEle.setAttribute("href", href);
        linkEle.setAttribute("target", "_blank");
        return linkEle;
    }

    createStyleElement() {
        var styleEle = document.createElement("style");
        styleEle.innerHTML = `
            #socials {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                margin-right: 5px;
                margin-bottom: 10px;
                height: 50%;
            }
            #socials.scrolled {
                fill: #7f3f98;
            }
        
            a {
                width: 20px;
                height: 20px;
                margin-right: 10px;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        
            #copyright {
                margin-right: 15px;
                margin-bottom: 10px;
            }

            #copyright.scrolled {
                color; #7f3f98;
            }
        
            p {
                margin: 0;
                font-size: 0.7rem;
                font-family: "Lato", sans-serif;
                text-align: right;
            }
        `;
        return styleEle;
    }
}

customElements.define("mobile-footer", MobileFooter);
