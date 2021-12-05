var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { MenuList } from "./menu-list.js";
import { Navigation } from "./navigation.js";

export var VariantTable = function VariantTable(_ref) {
    var forma = _ref.forma,
        title = _ref.title;

    var _React$useState = React.useState(true),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        isShowingSets = _React$useState2[0],
        setIsShowingSets = _React$useState2[1];

    var _React$useState3 = React.useState(''),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        selectedFeatureSet = _React$useState4[0],
        setSelectedFeatureSet = _React$useState4[1];

    var _React$useState5 = React.useState(''),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        selectedFeature = _React$useState6[0],
        setSelectedFeature = _React$useState6[1];

    var _React$useState7 = React.useState(null),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        featureSetList = _React$useState8[0],
        setFeatureSetList = _React$useState8[1];

    var _React$useState9 = React.useState(null),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        featureList = _React$useState10[0],
        setFeatureList = _React$useState10[1];

    var _React$useState11 = React.useState(0),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        featureSetScroll = _React$useState12[0],
        setFeatureSetScroll = _React$useState12[1];

    var _React$useState13 = React.useState(false),
        _React$useState14 = _slicedToArray(_React$useState13, 2),
        featureSetRefreshNeeded = _React$useState14[0],
        setFeatureSetRefreshNeeded = _React$useState14[1];

    var _React$useState15 = React.useState(false),
        _React$useState16 = _slicedToArray(_React$useState15, 2),
        featureRefreshNeeded = _React$useState16[0],
        setFeatureRefreshNeeded = _React$useState16[1];

    var handleFeatureSetSelected = function handleFeatureSetSelected(index, id) {
        forma.fetchFeatures(id);
        setSelectedFeatureSet(id);
        setSelectedFeature(forma.getSelectedFeature(id));

        setIsShowingSets(false);
        document.dispatchEvent(new CustomEvent('onEnterFeaturesPage', { detail: { featureName: featureSetList[index].name } }));

        var container = document.querySelector('.vertical-scrollview');
        if (container !== null) {
            setFeatureSetScroll(container.scrollTop);
            container.scrollTop = 0;
        }
    };

    var handleFeatureSelected = function handleFeatureSelected(index, id, deselect) {
        forma.selectFeature(id);

        var featureId = id;
        if (deselect) featureId = '';

        setSelectedFeature(featureId);
    };

    var handleBackPressed = function handleBackPressed() {
        setIsShowingSets(true);
        document.dispatchEvent(new CustomEvent('onSectionChanged', { detail: { sectionName: title } }));
    };

    var handleProductChanged = function handleProductChanged(e) {
        forma.fetchFeatureSets();
        setIsShowingSets(true);
    };

    var handleFeatureListReady = function handleFeatureListReady(e) {
        setFeatureList(e.features);
    };

    var handleFeatureSetListReady = function handleFeatureSetListReady(e) {
        setFeatureSetList(e.featureSets);
    };

    var handleRulesChanged = function handleRulesChanged(e) {
        setFeatureSetRefreshNeeded(true);
        setFeatureRefreshNeeded(true);
    };

    var tryRefreshFeatureList = function tryRefreshFeatureList() {
        if (featureRefreshNeeded && selectedFeatureSet !== '') {
            forma.fetchFeatures(selectedFeatureSet);
            setFeatureRefreshNeeded(false);
        }
    };

    React.useEffect(function () {
        forma.addEventListener(forma.productChanged, handleProductChanged);
        forma.addEventListener(forma.featureListChanged, handleFeatureListReady);
        forma.addEventListener(forma.featureSetListChanged, handleFeatureSetListReady);
        forma.addEventListener(forma.rulesChanged, handleRulesChanged);

        document.addEventListener('onBackButtonPressed', handleBackPressed);

        //Need to call this directly in case the product was already loaded
        handleProductChanged(null);

        return function () {
            forma.removeEventListener(forma.productChanged, handleProductChanged);
            forma.removeEventListener(forma.featureListChanged, handleFeatureListReady);
            forma.removeEventListener(forma.featureSetListChanged, handleFeatureSetListReady);
            forma.removeEventListener(forma.rulesChanged, handleRulesChanged);
        };
    }, []);

    React.useEffect(function () {
        var container = document.querySelector('.vertical-scrollview');
        if (container != null && isShowingSets) container.scrollTop = featureSetScroll;
    });

    React.useEffect(function () {
        if (featureSetRefreshNeeded) {
            forma.fetchFeatureSets();
            setFeatureSetRefreshNeeded(false);
        }
    }, [featureSetRefreshNeeded]);

    React.useEffect(function () {
        tryRefreshFeatureList();
    }, [featureRefreshNeeded]);

    React.useEffect(function () {
        tryRefreshFeatureList();
    }, [selectedFeatureSet]);

    var section = void 0;
    if (isShowingSets) {
        section = React.createElement(MenuList, { itemList: featureSetList, showPrice: false, hasChildren: true, callback: handleFeatureSetSelected });
    } else {
        section = React.createElement(MenuList, { itemList: featureList, selectedValue: selectedFeature, showPrice: true, callback: handleFeatureSelected });
    }

    return React.createElement(
        "div",
        null,
        section
    );
};
