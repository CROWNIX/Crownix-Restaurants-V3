class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>Copyright &copy; 2022 - Crownix Restaurants</p>
    `;
  }
}

customElements.define('foot-bar', Footer);
