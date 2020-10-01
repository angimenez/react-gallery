'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));
var customHooks = require('@angimenez/custom-hooks');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 10px 0 10px 0;\n  border-radius: 5px;\n  background-color: whitesmoke;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transition: all 1s;\n  ", "\n  :hover {\n    transform: scale(1.02);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  color: black;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  outline: none;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 55px;\n  height: 20px;\n  border-radius: 50px;\n  font-size: 0.8em;\n  font-family: \"Montserrat\";\n  color: ", ";\n  border: none;\n  background: white;\n  @media (max-width: 600px) {\n    width: 45px;\n    height: 17px;\n    font-size: 0.5em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var PictureBox = function PictureBox(_ref) {
  var url = _ref.url,
      description = _ref.description;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      popup = _useState2[0],
      setPopup = _useState2[1];

  var handleClick = function handleClick() {
    setPopup(!popup);
  };

  return /*#__PURE__*/React.createElement(PictureContainer, {
    popup: popup,
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(Picture, {
    src: url,
    alt: description
  }), popup ? /*#__PURE__*/React.createElement(Exit, {
    onClick: handleClick,
    visible: !popup
  }, "Cerrar") : null, description ? /*#__PURE__*/React.createElement(Text, null, description) : null);
};

var Exit = styled.button(_templateObject(), colors.dark);
var Text = styled.p(_templateObject2());
var PictureContainer = styled.div(_templateObject3(), function (props) {
  return props.popup ? "\n      position: fixed;\n      top: 10%;\n      left: auto;\n      overflow: auto;\n      z-index:2;\n      transform: scale (1);\n  " : "";
});
var Picture = styled.img(_templateObject4());

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  margin: 10px;\n  width: ", "%;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var SMALL = 600;
var MEDIUM = 1000;
var BIG = 1500;

var ColumnWrapper = function ColumnWrapper(_ref) {
  var children = _ref.children;

  var _useWindowsDimension = customHooks.useWindowsDimension(),
      width = _useWindowsDimension.width;

  var columCount = ["mobile"];
  if (width > SMALL) columCount.push("tablet");
  if (width > MEDIUM) columCount.push("pc");
  if (width > BIG) columCount.push("big");
  return /*#__PURE__*/React.createElement(React.Fragment, null, columCount.map(function (_, column) {
    return /*#__PURE__*/React.createElement(Column, {
      width: 90 / columCount.length,
      key: column
    }, React.Children.map(children, function (child, i) {
      return i % columCount.length === column ? child : null;
    }));
  }));
};

var Images = function Images(_ref2) {
  var images = _ref2.images;
  if (images && images.length) return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(ColumnWrapper, null, images.map(function (item, i) {
    return /*#__PURE__*/React.createElement(PictureBox, _extends({
      key: item.url + i
    }, item));
  })));
  return null;
};

var Column = styled.div(_templateObject$1(), function (_ref3) {
  var _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? 100 : _ref3$width;
  return width;
});
var Container = styled.div(_templateObject2$1());

exports.Gallery = Images;
