class FrSample extends HTMLElement {
    _root;

    constructor() {
        super();
        this._root = this.attachShadow({mode: 'closed'});
    }

    render() {
        this._root.innerHTML = '<nav>\n' +
                               '    <div role="list">\n' +
                               '        <slot></slot>\n' +
                               '    </div>\n' +
                               '</nav>';
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }
}

class FrSampleItem extends HTMLElement {
    _root;

    constructor() {
        super();
        this._root = this.attachShadow({mode: 'closed'});
    }

    render() {
        this._root.innerHTML = '<a href="" role="listitem">\n' +
                               '    <slot></slot>\n' +
                               '</a>';
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }
}

class FrSampleNestItem extends HTMLElement {
    _root;

    constructor() {
        super();
        this._root = this.attachShadow({mode: 'closed'});
    }

    render() {
        this._root.innerHTML = '<details role="listitem">\n' +
                               '    <summary>\n' +
                               '        <a href="">\n' +
                               '            <slot></slot>\n' +
                               '        </a>\n' +
                               '    </summary>\n' +
                               '    <div role="list">\n' +
                               '        <slot name="items"></slot>\n' +
                               '    </div>\n' +
                               '</details>';
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }
}

customElements.define('fr-sample', FrSample);
customElements.define('fr-sample-item', FrSampleItem);
customElements.define('fr-sample-nest-item', FrSampleNestItem);
