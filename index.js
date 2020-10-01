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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 10px;\n  width: ", "%;\n"]);

  _templateObject = function _templateObject() {
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

var Column = styled.div(_templateObject(), function (_ref3) {
  var _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? 100 : _ref3$width;
  return width;
});
var Container = styled.div(_templateObject2());

exports.Gallery = Images;
