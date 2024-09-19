# hamburger-menu component
![component](./hamburger-menu.gif)

This is a hamburger-menu component. A standard custom web component written in pure vanilla JS. So it could be used in any framework.

## Usage:
Use it like any other tag:
- In html: `<hamburger-menu></hamburger-menu>`
- In JS: `document.createElement("hamburger-menu")` or `new HamburgerMenu()`

## Attributes:
- `close-face` attribute: if present, insted of 3 parallel bars, the menu shows 2 crossing bars. ex: `<hamburger-menu close-face></hamburger-menu>`

## Styling:
1. Define in an element's selector blok one or more of the following custom properties:
- `--dim`: menu dimensions in pixels. Default is 32px.
- `--bg-color`: menu's background-color. Default is #ddd.
- `--bars-color`: color of the menu's bars. Default is #555.
- `--border-color`: color of the menu's borders and its box-shadow. Default is #c1c1c1.
- `--border-radius`: radius of the menu's borders. Default is 0.25em.
- `--transition-time`: when clicked, the menu transitions between open and close states. This custom property defines the transition time. Default is 200ms.

2. Or you can reach the following parts of the component:
- `::part(menu)`: the menu is actually a DIV element, so style it as you style any DIV element.
- `::part(bar)`: the bars inside the menu. Bars are actually DIVs elements, so style them as you style any DIV element.

  ex: `::part(menu) { background-color: red; border-radius: 10px; }`

## Events:
- `hamburger-menu-clicked`: This event enables developers to take actions when a user clicks the menu. To learn about the menu's state after the user clicks it you should read `event.detail` which is a boolean value. If true that means the menu (after beeing clicked) has `close-face` attribute (which means it has 2 crossed bars). Otherwise that means the menu has not `close-face` attribute and it shows 3 parallel bars.<br>
Please note that, as a developer, you do not need to take any action to control the menu itself, it works automatically as expected.

  ex: `document.querySelector("hamburger-menu").addEventListener("hamburger-menu-clicked", e => { console.log(e.detail); });`
