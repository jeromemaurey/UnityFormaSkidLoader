var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { DropdownMenuElement } from "./dropdown-menu-element.js";

export var DropdownMenu = function DropdownMenu(_ref) {
    var _ref$id = _ref.id,
        id = _ref$id === undefined ? '' : _ref$id,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? '' : _ref$title,
        _ref$optionList = _ref.optionList,
        optionList = _ref$optionList === undefined ? null : _ref$optionList,
        _ref$selectedValue = _ref.selectedValue,
        selectedValue = _ref$selectedValue === undefined ? null : _ref$selectedValue,
        _ref$selectedIndex = _ref.selectedIndex,
        selectedIndex = _ref$selectedIndex === undefined ? null : _ref$selectedIndex,
        _ref$currentText = _ref.currentText,
        currentText = _ref$currentText === undefined ? '' : _ref$currentText,
        _ref$callback = _ref.callback,
        callback = _ref$callback === undefined ? null : _ref$callback;

    var _React$useState = React.useState(currentText),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        dropdownText = _React$useState2[0],
        setDropdownText = _React$useState2[1];

    var _React$useState3 = React.useState(false),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        isDropdownOpen = _React$useState4[0],
        setIsDropdownOpen = _React$useState4[1];

    var handleSelectionChanged = function handleSelectionChanged(id, index, text) {
        setDropdownText(text);

        if (callback) callback(id, index, text);
    };

    var handleDropdownClicked = function handleDropdownClicked() {
        setIsDropdownOpen(!isDropdownOpen);
    };

    var handleWindowClick = function handleWindowClick(e) {
        var shouldClose = !e.detail.matches('DropdownMenuElement') && !e.detail.matches('.renderstudio-dropdown__input');

        if (!shouldClose) shouldClose |= e.detail.matches('.renderstudio-dropdown__input') && e.detail.id !== id;

        // We don't want to call setIsDropdownOpen with true because it would trigger a re-render since React
        // re-renders even if the state value doesn't change.
        if (shouldClose) setIsDropdownOpen(false);
    };

    React.useEffect(function () {
        window.addEventListener('windowClicked', handleWindowClick);
        return function () {
            return window.removeEventListener('windowClicked', handleWindowClick);
        };
    }, []);

    var optionIndex = -1;
    if (selectedValue !== null && optionList !== null) optionIndex = optionList.findIndex(function (elem) {
        return elem === selectedValue;
    });else if (selectedIndex !== null) optionIndex = selectedIndex;

    var options = void 0;
    if (optionList != null && isDropdownOpen) {
        options = optionList.map(function (item, index) {
            return React.createElement(DropdownMenuElement, { key: index, text: item, isSelected: optionIndex === index, callback: function callback() {
                    return handleSelectionChanged(id, index, item);
                } });
        });
    }

    return React.createElement(
        'div',
        { className: 'renderstudio-dropdown' },
        React.createElement(
            'label',
            { className: 'unity-label unity-text-element renderstudio-dropdown__label' },
            title
        ),
        React.createElement(
            'button',
            { id: id, 'class': 'unity-button unity-text-element renderstudio-dropdown__input', onClick: handleDropdownClicked },
            dropdownText,
            React.createElement('div', { className: 'renderstudio-dropdown__caret' })
        ),
        isDropdownOpen && React.createElement(
            'div',
            { className: 'renderstudio-dropdown__content-container' },
            options
        )
    );
};
