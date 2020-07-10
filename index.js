'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));
var customHooks = require('@angimenez/custom-hooks');

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

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 10px 0 10px 0;\n  border-radius: 5px;\n  background-color: whitesmoke;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transition: all 1s;\n  :hover {\n    transform: scale(1.02);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 10px;\n  width: ", "%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  color: black;\n"]);

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
    return /*#__PURE__*/React.createElement(PictureContainer, {
      key: item.url + i
    }, /*#__PURE__*/React.createElement(Picture, {
      src: item.url,
      alt: item.description
    }), item.description ? /*#__PURE__*/React.createElement(Text, null, item.description) : null);
  })));
  return null;
};

var Text = styled.p(_templateObject());
var Column = styled.div(_templateObject2(), function (_ref3) {
  var _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? 100 : _ref3$width;
  return width;
});
var Container = styled.div(_templateObject3());
var PictureContainer = styled.div(_templateObject4());
var Picture = styled.img(_templateObject5());

exports.Gallery = Images;
