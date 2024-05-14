class Footer extends HTMLElement {
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
        socialsDiv.className = "socials";

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
        copyrightDiv.className = "copyright";

        const copyrightText = document.createElement("span");
        copyrightText.innerHTML = "Copyright &copy; 2024 Possibility Neurotechnologies. All rights reserved.";
        copyrightDiv.appendChild(copyrightText);

        // Add everything to the shadow DOM
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

    // Helper to create the style element to make things look cleaner
    createStyleElement() {
        var styleEle = document.createElement("style");
        styleEle.innerHTML = `
            .socials {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                margin-right: 15px;
                margin-bottom: 10px;
                height: 50%;
            }

            .socials.scrolled{
                fill: #7f3f98;
                color: #7f3f98;
            }

            a {
                width: 30px;
                height: 30px;
                margin-right: 10px;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .social-icon {
                width: 100%;
                height: 100%;
                cursor: pointer;
            }

            .copyright {
                margin-right: 20px;
                margin-bottom: 10px;
            }

            .copyright.scrolled {
                color: #7f3f98;
            }
            
            span {
                font-size: 0.9rem;
                font-family: "Lato", sans-serif;
            }
        `;

        return styleEle;
    }
}

customElements.define("footer-element", Footer);
