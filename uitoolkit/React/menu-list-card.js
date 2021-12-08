var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

export var MenuListCard = function MenuListCard(_ref) {
    var _ref$id = _ref.id,
        id = _ref$id === undefined ? '' : _ref$id,
        _ref$displayName = _ref.displayName,
        displayName = _ref$displayName === undefined ? '' : _ref$displayName,
        _ref$isEnabled = _ref.isEnabled,
        isEnabled = _ref$isEnabled === undefined ? true : _ref$isEnabled,
        _ref$isSelected = _ref.isSelected,
        isSelected = _ref$isSelected === undefined ? false : _ref$isSelected,
        _ref$price = _ref.price,
        price = _ref$price === undefined ? '' : _ref$price,
        _ref$thumbnail = _ref.thumbnail,
        thumbnail = _ref$thumbnail === undefined ? '' : _ref$thumbnail,
        _ref$hasChildren = _ref.hasChildren,
        hasChildren = _ref$hasChildren === undefined ? false : _ref$hasChildren,
        _ref$callback = _ref.callback,
        callback = _ref$callback === undefined ? null : _ref$callback;

    var _React$useState = React.useState(price),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        displayedPrice = _React$useState2[0],
        setDisplayedPrice = _React$useState2[1];

    var handlePricingChanged = function handlePricingChanged(e) {
        if (e.pricing.valid) {
            var feature = e.pricing.featurePrices.find(function (item) {
                return item.id === id;
            });
            if (typeof feature !== 'undefined') {
                setDisplayedPrice(feature.price);
            }
        }
    };

    React.useEffect(function () {
        if (displayedPrice !== '') forma.addEventListener(forma.pricingChanged, handlePricingChanged);

        return function () {
            return forma.removeEventListener(forma.pricingChanged, handlePricingChanged);
        };
    }, []);

    React.useEffect(function () {
        setDisplayedPrice(price);
    }, [price]);

    var thumbnailInfoClass = isSelected ? 'list-card-thumbnail-info-selected' : 'list-card-thumbnail-info';
    var cardClass = isEnabled ? "image-card" : "image-card disabled";

    return React.createElement(
        'div',
        { className: 'image-card ' + (isSelected ? "selected" : "") + ' ' + (isEnabled ? "" : "disabled"), onClick: callback },
        React.createElement('div', { className: 'card-thumbnail', style: { backgroundImage: "url(" + thumbnail + ")" } }),
        displayedPrice !== null && displayedPrice !== '' && React.createElement(
            'label',
            { className: 'unity-label unity-text-element price-label' },
            displayedPrice
        ),
        React.createElement(
            'div',
            { 'class': 'title-section' },
            React.createElement(
                'div',
                { 'class': 'unity-text-element label-title' },
                displayName
            ),
            hasChildren && React.createElement('div', { 'class': 'card-arrow-image' })
        ),
        React.createElement('div', { className: 'selection-border' })
    );
};
