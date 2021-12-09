var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

export var LoadingScreen = function LoadingScreen(_ref) {
    var forma = _ref.forma;

    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        isLoading = _React$useState2[0],
        setIsLoading = _React$useState2[1];

    var handleLoadingScreenChanged = function handleLoadingScreenChanged(e) {
        setIsLoading(e.isLoading);
    };

    React.useEffect(function () {
        forma.addEventListener(forma.isLoadingChanged, handleLoadingScreenChanged);

        return function () {
            return forma.removeEventListener(forma.isLoadingChanged, handleLoadingScreenChanged);
        };
    }, []);

    return React.createElement(
        React.Fragment,
        null,
        isLoading && React.createElement(
            "div",
            { className: "loading-screen" },
            React.createElement("img", { src: "TemplateData/UnityLogoNoPadding@2x.png" }),
            React.createElement(
                "label",
                { className: "unity-text-element header-label loading-screen-text" },
                "Loading"
            )
        )
    );
};