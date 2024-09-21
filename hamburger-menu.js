// @ts-check

const tmpl = document.createElement("template");
tmpl.innerHTML = `
   <style>
      :host {
         /* These are defaults, user could override by: --dim, --bg-color & --bars-color ... */
         --default-dim: 32px;
         --default-bg-color: #ddd;
         --default-bars-color: #555;
         --default-border-color: #c1c1c1;
         --default-border-radius: 0.25em;
         --default-transition-time: 200ms;

         display: inline-block;
         background-color: var(--bg-color, var(--default-bg-color));
         border-radius: var(--border-radius, var(--default-border-radius));
         cursor: pointer;
         border: 1px solid var(--border-color, var(--default-border-color));
         box-shadow: 0 0 3px var(--border-color, var(--default-border-color));
         contain: content;
      }
      :host(:is(:hover, :focus)) {
         transform: scale(1.1);
      }

      #container {
         box-sizing: border-box;
         block-size: var(--dim, var(--default-dim));
         inline-size: var(--dim, var(--default-dim));
         padding-block: calc(0.29 * var(--dim, var(--default-dim)));
         padding-inline: calc(0.2 * var(--dim, var(--default-dim)));
         display: flex;
         flex-direction: column;
         justify-content: space-between;
      }
      #container > div {
         background-color: var(--bars-color, var(--default-bars-color));
         block-size: calc(0.06 * var(--dim, var(--default-dim)));
         inline-size: 100%;
         transition: all var(--transition-time, var(--default-transition-time));
      }

      :host([close-face]) #container {
         justify-content: center;
      }
      :host([close-face]) > #container > div:nth-child(1) {
         transform: translateY(100%) rotateZ(45deg);
      }
      :host([close-face]) > #container > div:nth-child(2) {
         opacity: 0;
         transform: translateX(-100%);
      }
      :host([close-face]) > #container > div:nth-child(3) {
         transform: translateY(-100%) rotateZ(-45deg);
      }
   </style>

   <div id="container" part="menu">
      <div part="bar"></div>
      <div part="bar"></div>
      <div part="bar"></div>
   </div>
`;

class HamburgerMenu extends HTMLElement {
   constructor() {
      super();
      
		this.attachShadow({ mode: "open" });
      if (!this.shadowRoot) throw new ReferenceError("It seems that your environment does not support shadowRoot!");
		this.shadowRoot.appendChild(tmpl.content.cloneNode(true));

      this.addEventListener("click", () => {
         this.closeFace = !this.closeFace;
         this.dispatchEvent(new CustomEvent("hamburger-menu-clicked", {
            bubbles: true, composed: true,
            detail: this.closeFace
         }));
      });
   }

   static get observedAttributes() { return ["close-face"]; }

   get closeFace() {
      return this.hasAttribute("close-face");
   }
   set closeFace(val) {
      if (val) this.setAttribute('close-face', '');
      else this.removeAttribute('close-face');
   }
}

customElements.define("hamburger-menu", HamburgerMenu);

export default HamburgerMenu;
