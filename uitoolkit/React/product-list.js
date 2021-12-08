var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { DropdownMenu } from "./dropdown-menu.js";

export var ProductList = function ProductList(_ref) {
    var forma = _ref.forma;

    var _React$useState = React.useState(forma.products),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        productList = _React$useState2[0],
        setProductList = _React$useState2[1];

    var _React$useState3 = React.useState(forma.contexts),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        contextList = _React$useState4[0],
        setContextList = _React$useState4[1];

    var handleProductSelectionChanged = function handleProductSelectionChanged(id, index, option) {
        forma.switchProduct(index);
    };

    var handleContextSelectionChanged = function handleContextSelectionChanged(id, index, option) {
        forma.switchContext(id, option);
    };

    var handleProductChanged = function handleProductChanged(e) {
        setContextList(forma.contexts);
    };

    var handleWindowClick = function handleWindowClick(e) {
        window.dispatchEvent(new CustomEvent('windowClicked', { 'detail': e.target }));
    };

    React.useEffect(function () {
        forma.addEventListener(forma.productChanged, handleProductChanged);
        window.onclick = handleWindowClick;

        return function () {
            forma.removeEventListener(forma.productChanged, handleProductChanged);
            window.onclick = null;
        };
    }, []);

    var currentProduct = forma.currentProduct;
    var productName = currentProduct !== null ? currentProduct.name : '';

    return React.createElement(
        'div',
        null,
        productList.length > 0 && React.createElement(
            React.Fragment,
            null,
            React.createElement(DropdownMenu, { id: 'product', title: 'Products', optionList: productList, currentText: productName,
                selectedIndex: forma.currentProductIndex, callback: handleProductSelectionChanged })
        ),
        contextList !== null && contextList.map(function (item, index) {
            return React.createElement(
                React.Fragment,
                { key: index },
                React.createElement(DropdownMenu, { id: item.name, title: item.name, optionList: item.values.map(function (elem) {
                        return elem.key;
                    }),
                    currentText: item.selection, selectedValue: item.selection, callback: handleContextSelectionChanged })
            );
        })
    );
};
