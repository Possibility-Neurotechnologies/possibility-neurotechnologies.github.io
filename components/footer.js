class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        const socialsDiv = document.createElement("div");
        socialsDiv.className = "socials";

        const fbIcon = document.createElement("facebook-icon");
        socialsDiv.appendChild(fbIcon);
        const xIcon = document.createElement("x-icon");
        socialsDiv.appendChild(xIcon);
        const instaIcon = document.createElement("insta-icon");
        socialsDiv.appendChild(instaIcon);
        const lnIcon = document.createElement("linkedin-icon");
        socialsDiv.appendChild(lnIcon);
        const mailIcon = document.createElement("email-icon");
        socialsDiv.appendChild(mailIcon);

        const copyrightDiv = document.createElement("div");
        copyrightDiv.className = "copyright";

        const copyrightText = document.createElement("span");
        copyrightText.innerHTML = "Copyright &copy; 2026 Possibility Neurotechnologies. All rights reserved.";
        copyrightDiv.appendChild(copyrightText);

        shadow.appendChild(socialsDiv);
        shadow.appendChild(copyrightDiv);
    }
}

customElements.define("footer-element", Footer);
