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