class Headshot extends HTMLElement {
    constructor(id, name, position, link) {
        super();

        this.id = id;
        this.name = name;
        this.position = position;
        this.link = link;
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="${this.id}" class="headshot">
                <div class="overlay">
                    <div class="top"></div>
                    <div class="middle">
                        <span class="team-name">${this.name}</span>
                        <span class="team-position">${this.position}</span>
                    </div>
                    <div class="bottom row">
                        <a><linkedin-icon></linkedin-icon></a>
                    </div>
                </div>
             </div>
        `;
    }
}

customElements.define("headshot-element", Headshot);
