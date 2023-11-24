import { dispatch } from "../../store";
import { SaveMemory } from "../../store/actions";
import { memory } from "../../types/memorys";

const userInfo: memory = {
    tittlein: "",
    descripin: ""
};
export class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const textup = this.ownerDocument.createElement('label');
        textup.innerText = "Titulo de tu recuerdo"
        const textdown = this.ownerDocument.createElement('label');
        textdown.innerText = "Descripcion de tu recuerdo"

        const tittlein = this.ownerDocument.createElement('input');
        tittlein.addEventListener("change",(e: any) => {
        
            userInfo.tittlein = e.target.value;
        });

        const descripin = this.ownerDocument.createElement('input');
        descripin.addEventListener("change",(e: any) => {
            
            userInfo.descripin = e.target.value;
        });
        

        const savebtn = this.ownerDocument.createElement('button');
        savebtn.innerText = "Guardar recuerdo";
        savebtn.addEventListener("click",async() => {
            console.log(userInfo);
            dispatch( await SaveMemory(userInfo));
        });


        this.shadowRoot?.appendChild(textup);
        this.shadowRoot?.appendChild(tittlein);
        this.shadowRoot?.appendChild(textdown);
        this.shadowRoot?.appendChild(descripin);
        this.shadowRoot?.appendChild(savebtn);
       
    }
}

customElements.define('app-form', Form)