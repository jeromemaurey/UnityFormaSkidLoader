var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { TabBarItem } from "./tab-bar-item.js";

export var TabBar = function TabBar(_ref) {
    var _ref$tabIndex = _ref.tabIndex,
        tabIndex = _ref$tabIndex === undefined ? 0 : _ref$tabIndex,
        _ref$onTabChange = _ref.onTabChange,
        onTabChange = _ref$onTabChange === undefined ? null : _ref$onTabChange;

    var _React$useState = React.useState(tabIndex),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        selectedTab = _React$useState2[0],
        setSelectedTab = _React$useState2[1];

    var handleSelectionChanged = function handleSelectionChanged(index) {
        if (onTabChange) onTabChange(index);

        setSelectedTab(index);
    };

    return React.createElement(
        "div",
        { "class": "bottom-container" },
        React.createElement(
            "div",
            { className: "tab-bar-container" },
            React.createElement(TabBarItem, { imgSrc: "TemplateData/Context.png", isSelected: selectedTab === 0, onClick: function onClick() {
                    return handleSelectionChanged(0);
                } }),
            React.createElement(TabBarItem, { imgSrc: "TemplateData/VariantTable.png", isSelected: selectedTab === 1, onClick: function onClick() {
                    return handleSelectionChanged(1);
                } }),
            React.createElement(TabBarItem, { imgSrc: "TemplateData/Stage.png", isSelected: selectedTab === 2, onClick: function onClick() {
                    return handleSelectionChanged(2);
                } }),
            React.createElement(TabBarItem, { imgSrc: "TemplateData/Cam.png", isSelected: selectedTab === 3, onClick: function onClick() {
                    return handleSelectionChanged(3);
                } })
        )
    );
};
