'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
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

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  width: 100%;\n  margin: 10px 0 10px 0;\n  border-radius: 5px;\n  background-color: whitesmoke;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transition: all 1s;\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  color: black;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  cursor: pointer;\n  outline: none;\n  right: 10px;\n  top: 10px;\n  width: 55px;\n  height: 20px;\n  border-radius: 50px;\n  font-size: 0.8em;\n  color: black;\n  border: none;\n  background: white;\n  @media (max-width: 600px) {\n    width: 45px;\n    height: 17px;\n    font-size: 0.5em;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  visibility: ", ";\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  z-index: 1;\n  opacity: 0.5;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  background-color: black;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var PictureBox = function PictureBox(_ref) {
  var url = _ref.url,
      description = _ref.description;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      popup = _useState2[0],
      setPopup = _useState2[1];

  var handleClose = function handleClose(e) {
    e.stopPropagation();
    setPopup(false);
  };

  var handleOpen = function handleOpen(e) {
    e.stopPropagation();
    setPopup(true);
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Hidden, {
    visible: popup,
    onClick: handleClose
  }), /*#__PURE__*/React__default.createElement(PictureContainer, {
    popup: popup,
    onClick: handleOpen
  }, /*#__PURE__*/React__default.createElement(BackgroundImage, null, /*#__PURE__*/React__default.createElement(Picture, {
    src: url,
    alt: description,
    popup: popup
  })), popup ? /*#__PURE__*/React__default.createElement(Exit, {
    onClick: handleClose,
    visible: !popup
  }, "Cerrar") : null, description ? /*#__PURE__*/React__default.createElement(Text, null, description) : null));
};

var BackgroundImage = styled.div(_templateObject());
var Hidden = styled.div(_templateObject2(), function (props) {
  return props.visible ? "visible" : "hidden";
});
var Exit = styled.button(_templateObject3());
var Text = styled.p(_templateObject4());
var PictureContainer = styled.div(_templateObject5(), function (props) {
  return props.popup ? "\n      cursor: default;\n      position: fixed;\n      top: 10px;\n      left: 5px;\n      right: 5px;\n      overflow: auto;\n      z-index:2;\n      margin: 0;\n      max-height: 90vh;\n      align-items: center;\n      width: auto;\n  " : "\n        :hover {\n            transform: scale(1.02);\n        }";
});
var Picture = styled.img(_templateObject6(), function (props) {
  return props.popup ? "\n        height: 80vh;\n        width: auto;\n        @media (max-width: 600px) {\n            width: 100%;\n            height: auto;\n        }\n        " : "";
});

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
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, columCount.map(function (_, column) {
    return /*#__PURE__*/React__default.createElement(Column, {
      width: 90 / columCount.length,
      key: column
    }, React__default.Children.map(children, function (child, i) {
      return i % columCount.length === column ? child : null;
    }));
  }));
};

var Images = function Images(_ref2) {
  var images = _ref2.images;
  if (images && images.length) return /*#__PURE__*/React__default.createElement(Container, null, /*#__PURE__*/React__default.createElement(ColumnWrapper, null, images.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement(PictureBox, _extends({
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
