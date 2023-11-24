import { addObserver, appState } from "../../store";

class memorylist extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
       if (this.shadowRoot) this.shadowRoot.innerHTML = "";
         appState.memory.forEach((memory) => {
            const memorylist = this.ownerDocument.createElement("article");
            const mtittle = this.ownerDocument.createElement("h2");
            mtittle.textContent = memory.tittlein;
            const mdescri = this.ownerDocument.createElement("h2");
            mdescri.textContent = memory.descripin;
            memorylist?.appendChild(mtittle)
            memorylist?.appendChild(mdescri)
            this.shadowRoot?.appendChild(memorylist);

        })
       
    }
}

customElements.define('app-memorylist', memorylist)
export default memorylist