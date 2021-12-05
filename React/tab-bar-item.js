export var TabBarItem = function TabBarItem(_ref) {
    var _ref$imgSrc = _ref.imgSrc,
        imgSrc = _ref$imgSrc === undefined ? '' : _ref$imgSrc,
        _ref$isSelected = _ref.isSelected,
        isSelected = _ref$isSelected === undefined ? false : _ref$isSelected,
        _ref$onClick = _ref.onClick,
        onClick = _ref$onClick === undefined ? null : _ref$onClick;

    return React.createElement(
        "button",
        { className: "" + (isSelected ? "tab-bar-button" : "tab-bar-button"), onClick: onClick },
        React.createElement("img", { src: imgSrc, className: "" + (isSelected ? "tab-bar-button-icon selected" : "tab-bar-button-icon") })
    );
};
