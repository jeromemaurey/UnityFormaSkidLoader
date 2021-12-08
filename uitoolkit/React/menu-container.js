var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { Header } from "./header.js";
import { VariantTable } from "./variant-table.js";
import { EnvironmentList } from "./environment-list.js";
import { CameraList } from "./camera-list.js";
import { ProductList } from "./product-list.js";
import { TabBar } from "./tab-bar.js";

export var MenuContainer = function MenuContainer(_ref) {
    var forma = _ref.forma;

    var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        activeSection = _React$useState2[0],
        setActiveSection = _React$useState2[1];

    var _React$useState3 = React.useState(""),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        currentProductName = _React$useState4[0],
        setCurrentProductName = _React$useState4[1];

    var _React$useState5 = React.useState(""),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        currentProductDescription = _React$useState6[0],
        setCurrentProductDescription = _React$useState6[1];

    var sections = ['Contexts', 'Variants', 'Environments', 'Cameras'];

    var handleSectionChange = function handleSectionChange(index) {
        setActiveSection(index);

        if (index >= 0 && index < sections.length) document.dispatchEvent(new CustomEvent('onSectionChanged', { detail: { sectionName: sections[index] } }));
    };

    var handleProductChanged = function handleProductChanged(e) {
        var product = forma.currentProduct;
        if (product !== null) {
            setCurrentProductName(product.name);
            setCurrentProductDescription(product.description);
        }
    };

    React.useEffect(function () {
        forma.addEventListener(forma.productChanged, handleProductChanged);
        handleProductChanged(null);
        handleSectionChange(1);

        return function () {
            return forma.removeEventListener(forma.productChanged, handleProductChanged);
        };
    }, []);

    var section = void 0;
    switch (activeSection) {
        case 0:
            section = React.createElement(ProductList, { forma: forma });
            break;
        case 1:
            section = React.createElement(VariantTable, { forma: forma, title: sections[1] });
            break;
        case 2:
            section = React.createElement(EnvironmentList, { forma: forma });
            break;
        case 3:
            section = React.createElement(CameraList, { forma: forma });
            break;
    }

    return React.createElement(
        "div",
        { className: "menu-container" },
        React.createElement(Header, null),
        React.createElement(
            "div",
            { "class": "middle-container" },
            React.createElement(
                "div",
                { className: "vertical-scrollview" },
                section
            )
        ),
        React.createElement(TabBar, { tabIndex: 1, onTabChange: handleSectionChange })
    );
};
