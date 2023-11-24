import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('app-form');
        const list = this.ownerDocument.createElement('app-memorylist');

        this.shadowRoot?.appendChild(something);
        this.shadowRoot?.appendChild(list);

    }
}

customElements.define('app-container', AppContainer)