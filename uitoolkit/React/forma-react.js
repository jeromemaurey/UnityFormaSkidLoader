import { UIContainer } from "./ui-container.js";

export var initializeReactUI = function initializeReactUI(formaObject) {
    ReactDOM.render(React.createElement(UIContainer, { forma: formaObject }), document.getElementById('ui-anchor'));
};
