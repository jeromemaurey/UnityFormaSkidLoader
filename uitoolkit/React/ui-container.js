import { MenuContainer } from "./menu-container.js";
import { LoadingScreen } from "./loading-screen.js";
import { OverlayScreen } from "./overlay-screen.js";

export var UIContainer = function UIContainer(_ref) {
    var forma = _ref.forma;

    return React.createElement(
        "div",
        { className: "ui-container" },
        React.createElement(LoadingScreen, { forma: forma }),
        React.createElement(MenuContainer, { forma: forma }),
        React.createElement(OverlayScreen, { forma: forma })
    );
};
