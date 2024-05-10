class ArrowSVG extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <svg viewBox="0 0 83 38" xmlns="http://www.w3.org/2000/svg">
            <path d="M81.7678 20.7678C82.7441 19.7915 82.7441 18.2085 81.7678 17.2322L65.8579 1.32233C64.8816 0.34602 63.2986 0.34602 62.3223 1.32233C61.346 2.29864 61.346 3.88155 62.3223 4.85786L76.4645 19L62.3223 33.1421C61.346 34.1184 61.346 35.7014 62.3223 36.6777C63.2986 37.654 64.8816 37.654 65.8579 36.6777L81.7678 20.7678ZM0 21.5H80V16.5H0V21.5Z"/>
        </svg>`;
    }
}

customElements.define("arrow-icon", ArrowSVG);

class HamburgerSVG extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>`;
    }
}

customElements.define("menu-icon", HamburgerSVG);

class CloseSVG extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
        </svg>`;
    }
}

customElements.define("close-icon", CloseSVG);
