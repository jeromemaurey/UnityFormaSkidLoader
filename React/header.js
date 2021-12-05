var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

export var Header = function Header() {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        isBackButtonVisible = _React$useState2[0],
        setBackButtonVisible = _React$useState2[1];

    var _React$useState3 = React.useState(''),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        title = _React$useState4[0],
        setTitle = _React$useState4[1];

    var handleEnterFeaturesPage = function handleEnterFeaturesPage(e) {
        setBackButtonVisible(true);
        setTitle(e.detail.featureName);
    };

    var handleBackButtonPressed = function handleBackButtonPressed() {
        document.dispatchEvent(new Event('onBackButtonPressed'));
    };

    var handleSectionChanged = function handleSectionChanged(e) {
        setBackButtonVisible(false);
        setTitle(e.detail.sectionName);
    };

    React.useEffect(function () {
        document.addEventListener('onEnterFeaturesPage', handleEnterFeaturesPage);
        document.addEventListener('onSectionChanged', handleSectionChanged);
        return function () {
            document.removeEventListener('onEnterFeaturesPage', handleEnterFeaturesPage);
            document.removeEventListener('onSectionChanged', handleSectionChanged);
        };
    }, []);

    return React.createElement(
        'div',
        { className: 'top-container' },
        React.createElement(
            'div',
            { className: 'header' },
            isBackButtonVisible && React.createElement(
                'button',
                { 'class': 'navigation-button unity-text-element', onClick: handleBackButtonPressed },
                'Back'
            ),
            React.createElement(
                'label',
                { 'class': 'unity-label header-label navigation-header-text unity-text-element' },
                title
            ),
            isBackButtonVisible && React.createElement(
                'button',
                { style: { color: 'transparent', backgroundColor: 'transparent', border: 'none' } },
                'Back'
            ),
            ' '
        )
    );
};
