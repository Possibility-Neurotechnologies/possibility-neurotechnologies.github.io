class Partners extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <img id="remarkable-logo" src="./assets/partners/remarkable.jpeg" />
            <img id="innovate-logo" src="./assets/partners/innovate.png" />
            <img id="cdl-logo" src="./assets/partners/cdl.png" />
            <img id="cp-logo" src="./assets/partners/cp_alliance.png" />
        `;
    }
}

customElements.define("partner-element", Partners);
