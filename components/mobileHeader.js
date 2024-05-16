class MobileHeader extends HTMLElement {
    constructor() {
        super();

        this.currentPage = this.getAttribute("currentPage") || "index";
    }

    connectedCallback() {
        // Create the shadow DOM and make it open to JS encapsulation
        const shadow = this.attachShadow({ mode: "open" });

        // Create styling for the shadow DOM
        const style = this.createStyleElement();

        // Create the Poss Neuro Logo that links to the home page
        const homeLink = document.createElement("a");
        homeLink.className = "home-link";
        homeLink.setAttribute("href", "./index.html");

        const homeLogoSmall = document.createElement("img");
        homeLogoSmall.id = "mobile-logo-small";
        homeLogoSmall.setAttribute("src", "../assets/possibility_neuron_white.png");

        const homeLogoFull = document.createElement("img");
        homeLogoFull.id = "mobile-logo-full";
        homeLogoFull.setAttribute("src", "../assets/possibility_logo_white.png");
        homeLogoFull.style.display = "none";

        homeLink.appendChild(homeLogoSmall);
        homeLink.appendChild(homeLogoFull);

        // Create a <div> for the Early Access button and Menu icons
        const div = document.createElement("div");

        const trialLink = document.createElement("a");
        trialLink.className = "early-access";
        trialLink.setAttribute("href", "./trial.html");
        trialLink.innerHTML = "Early Access";

        const menuIcon = document.createElement("menu-icon");
        const closeIcon = document.createElement("close-icon");
        closeIcon.style.display = "none";

        div.appendChild(trialLink);
        div.appendChild(menuIcon);
        div.appendChild(closeIcon);

        // Add everything to shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(homeLink);
        shadow.appendChild(div);
    }

    createStyleElement() {
        var styleEle = document.createElement("style");

        styleEle.innerHTML = `    
        .home-link {
            margin-left: 10px;
            height: 100%;
        }

        img {
            height: 90%;
        }

        div {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
        }

        .early-access {
            font-family: "Poppins", sans-serif;
            font-size: 0.9rem;
            padding: 3px 8px;
            border-radius: 20px;
            margin-right: 15px;
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

        .early-access.scrolled {
            background-color: #7f3f98;
            color: #fff;
            border: 0.15rem solid #7f3f98;
        }
        
        .early-access.scrolled:hover {
            background-color: #e0c9e8;
            color: #7f3f98;
        }
    
        menu-icon {
            height: 20px;
            width: 20px;
            margin-right: 15px;
            fill: #fff;
        }
    
        menu-icon.scrolled {
            fill: #333;
        }
    
        close-icon {
            height: 20px;
            width: 20px;
            margin-right: 15px;
            fill: #fff;
        }
    
        close-icon.scrolled {
            fill: #333;
        }
        `;

        return styleEle;
    }
}

customElements.define("mobile-header", MobileHeader);
