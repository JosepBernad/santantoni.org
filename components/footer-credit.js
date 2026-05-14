class FooterCredit extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                :host {
                    display: block;
                }

                .section {
                    margin-top: 4rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255,255,255,0.08);
                }

                :host-context([data-theme="light"]) .section {
                    border-top-color: rgba(0,0,0,0.08);
                }

                .wrap {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    width: fit-content;
                    margin: 0 auto;
                    opacity: 0.65;
                    transition: opacity 0.2s ease;
                }

                .wrap:hover {
                    opacity: 1;
                }

                .label {
                    font-family: var(--font-heading);
                    font-size: 0.8125rem;
                    line-height: 1.4;
                    color: var(--text-secondary, #808080);
                }

                .heart {
                    margin-left: 0.5em;
                    font-size: 1.15em;
                    vertical-align: -0.1em;
                }

                img {
                    height: 32px;
                    width: auto;
                    display: block;
                    filter: brightness(0) invert(1);
                }

                :host-context([data-theme="light"]) img {
                    filter: brightness(0);
                }
            </style>
            <div class="section">
                <div class="wrap" aria-label="Fet amb amor - Josep Bernad Enginyeria de Software i Projectes">
                    <span class="label">Fet amb molt de<span class="heart">🫶</span></span>
                    <img src="/josep-bernad-enginyeria.svg" alt="Josep Bernad Enginyeria de Software i Projectes">
                </div>
            </div>
        `;
    }
}

customElements.define('footer-credit', FooterCredit);
