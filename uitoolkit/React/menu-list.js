import { MenuListCard } from "./menu-list-card.js";

export var MenuList = function MenuList(_ref) {
    var _ref$itemList = _ref.itemList,
        itemList = _ref$itemList === undefined ? null : _ref$itemList,
        _ref$selectedValue = _ref.selectedValue,
        selectedValue = _ref$selectedValue === undefined ? null : _ref$selectedValue,
        _ref$selectedIndex = _ref.selectedIndex,
        selectedIndex = _ref$selectedIndex === undefined ? null : _ref$selectedIndex,
        _ref$hasChildren = _ref.hasChildren,
        hasChildren = _ref$hasChildren === undefined ? false : _ref$hasChildren,
        _ref$callback = _ref.callback,
        _callback = _ref$callback === undefined ? null : _ref$callback;

    var buttons = void 0;
    if (itemList != null) {
        var cardIndex = -1;
        if (selectedValue !== null) {
            cardIndex = itemList.findIndex(function (elem) {
                return elem.id === selectedValue;
            });
        } else if (selectedIndex !== null) {
            cardIndex = selectedIndex;
        }

        buttons = itemList.map(function (item, index) {
            return React.createElement(MenuListCard, {
                key: index,
                id: item.id,
                displayName: item.name,
                isEnabled: item.enabled,
                isSelected: cardIndex === index,
                price: item.price,
                thumbnail: item.getThumbnail(),
                hasChildren: hasChildren,
                callback: function callback() {
                    return (cardIndex !== index || item.isToggleable) && item.enabled && _callback(index, item.id, cardIndex === index && item.isToggleable);
                }
            });
        });
    }

    return React.createElement(
        React.Fragment,
        null,
        buttons
    );
};
