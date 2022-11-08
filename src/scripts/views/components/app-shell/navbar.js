class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="navbar">
        <div class="navbar__menu">
          <button id="hamburgerButton">
            <strong><i class="material-icons">menu</i></strong>
          </button>
        </div>
        <div class="navbar__brand">
          <strong>
            <p class="navbar__brand-text">Crown</p>
          </strong>
        </div>
        <nav id="navigationDrawer" class="navbar__navigation">
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/favorite">Favourite</a></li>
            <li><a href="https://github.com/CROWNIX">About</a></li>
          </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('nav-bar', Navbar);
