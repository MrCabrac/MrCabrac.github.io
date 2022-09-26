const template = document.createElement('template');
template.innerHTML = `<style>
var {
    color: var(--devsite-var-color);
    cursor: pointer;
    font-weight: 500;
    white-space: nowrap;
    border-bottom: 1px dotted var(--devsite-var-color);
    font-weight: 700;
}
</style><var></var>`

class DevsiteVar extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('var').innerText = this.getAttribute('scope');
        const observer = new MutationObserver(() => { this.shadowRoot.querySelector('var').innerText = this.getAttribute('scope'); });
        observer.observe(this, { attributes: true });
    }

    connectedCallback() {
        this.shadowRoot.querySelector('var').innerText = this.getAttribute('scope');
    }
}

// export default DevsiteVar;
customElements.define("devsite-var", DevsiteVar)