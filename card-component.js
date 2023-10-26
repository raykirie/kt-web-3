// Создаем пользовательский веб-компонент
class CardComponent extends HTMLElement {
    constructor() {
        super();

        // Создаем Shadow DOM для компонента
        this.attachShadow({ mode: 'open' });

        // Создаем основную структуру карточки
        const card = document.createElement('div');
        card.classList.add('card');

        // Получаем шаблоны для заголовка и контента
        const headerTemplate = this.querySelector('template[slot="header"]');
        const contentTemplate = this.querySelector('template[slot="content"]');

        // Клонируем содержимое шаблонов и добавляем их к карточке
        const headerClone = document.importNode(headerTemplate.content, true);
        const contentClone = document.importNode(contentTemplate.content, true);

        card.appendChild(headerClone);
        card.appendChild(contentClone);

        // Вставляем карточку в Shadow DOM
        this.shadowRoot.appendChild(card);

        // Применяем стили
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
