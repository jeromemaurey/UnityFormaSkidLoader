export var Navigation = function Navigation(_ref) {
    var _ref$onBackPressed = _ref.onBackPressed,
        onBackPressed = _ref$onBackPressed === undefined ? null : _ref$onBackPressed;

    return React.createElement(
        "div",
        { className: "navigation" },
        React.createElement(
            "button",
            { className: "navigation-button", onClick: onBackPressed },
            "<"
        )
    );
};
