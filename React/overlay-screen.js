var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

export var OverlayScreen = function OverlayScreen(_ref) {
    var forma = _ref.forma;

    var _React$useState = React.useState(""),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        price = _React$useState2[0],
        setPrice = _React$useState2[1];

    var handlePricingChanged = function handlePricingChanged(e) {
        if (e.pricing.valid) setPrice(e.pricing.totalPrice);
    };

    React.useEffect(function () {
        forma.addEventListener(forma.pricingChanged, handlePricingChanged);

        var product = forma.currentProduct;
        if (product !== null) {
            setPrice(product.price);
        }

        return function () {
            return forma.removeEventListener(forma.pricingChanged, handlePricingChanged);
        };
    }, []);

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "div",
            { className: "overlay-screen" },
            React.createElement(
                "div",
                { className: "overlay-container" },
                React.createElement(
                    "label",
                    { className: "unity-label unity-text-element total-price-label" },
                    "Total Price: ",
                    price
                )
            )
        )
    );
};
