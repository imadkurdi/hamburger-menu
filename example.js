// @ts-check

const [strClose, strOpen] = ["Close Face", "Open Face"];
const hamburger = document.querySelector("hamburger-menu");
const main = document.querySelector("main");
if (!main || !hamburger) throw new ReferenceError("Some elements are not found");

main.textContent = hamburger.hasAttribute("close-face") ? strClose : strOpen;

hamburger.addEventListener("hamburger-menu-clicked", ev => {
    // @ts-ignore
    const isFaceClosed = ev.detail;
    main.textContent = isFaceClosed ? strClose : strOpen;
});
