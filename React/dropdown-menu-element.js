export var DropdownMenuElement = function DropdownMenuElement(_ref) {
    var _ref$isSelected = _ref.isSelected,
        isSelected = _ref$isSelected === undefined ? false : _ref$isSelected,
        _ref$text = _ref.text,
        text = _ref$text === undefined ? '' : _ref$text,
        _ref$callback = _ref.callback,
        callback = _ref$callback === undefined ? null : _ref$callback;

    var handleElementClicked = function handleElementClicked(e) {
        if (!isSelected && callback) callback();
    };

    var buttonClass = isSelected ? "renderstudio-dropdown-item selected" : "renderstudio-dropdown-item";

    return React.createElement(
        "button",
        { className: buttonClass, onClick: handleElementClicked },
        React.createElement(
            "label",
            { className: "renderstudio-dropdown-item__label" },
            text
        )
    );
};
