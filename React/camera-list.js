var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { MenuList } from "./menu-list.js";

export var CameraList = function CameraList(_ref) {
    var forma = _ref.forma;

    var _React$useState = React.useState(''),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        selectedValue = _React$useState2[0],
        setSelectedValue = _React$useState2[1];

    var _React$useState3 = React.useState(null),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        list = _React$useState4[0],
        setList = _React$useState4[1];

    var handleSelectionChanged = function handleSelectionChanged(index, id) {
        forma.switchCamera(id);
        setSelectedValue(id);
    };

    // TODO: Commenting out for now since the cameraChanged event gets called twice and causes visual artifacts
    /*const handleCameraChanged = (e) => {
        if (e.id !== selectedValue)
            setSelectedValue(e.id);
    }*/

    React.useEffect(function () {
        var cameraList = forma.cameras;
        setList(cameraList);
        setSelectedValue(forma.currentCamera.id);

        //forma.addEventListener(forma.cameraChanged, handleCameraChanged)

        //return () => forma.removeEventListener(forma.cameraChanged, handleCameraChanged);
    }, []);

    return React.createElement(MenuList, { itemList: list, selectedValue: selectedValue, showPrice: false, callback: handleSelectionChanged });
};
