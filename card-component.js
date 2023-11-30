
class CardComponent extends HTMLElement {
    constructor() {
        super();

        
        this.attachShadow({ mode: 'open' });

       
        const card = document.createElement('div');
        card.classList.add('card');

        
        const headerTemplate = this.querySelector('template[slot="header"]');
        const contentTemplate = this.querySelector('template[slot="content"]');

        
        const headerClone = document.importNode(headerTemplate.content, true);
        const contentClone = document.importNode(contentTemplate.content, true);

        card.appendChild(headerClone);
        card.appendChild(contentClone);

        
        this.shadowRoot.appendChild(card);

        
        const style = document.createElement('style');
        style.textContent = `
            .card {
                border: 1px solid #ccc;
                padding: 10px;
                margin: 10px;
            }
        `;
        this.shadowRoot.appendChild(style);
    }
}

// Регистрируем компонент
customElements.define('card-component', CardComponent);
