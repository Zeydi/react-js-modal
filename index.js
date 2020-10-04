"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactTransitionGroup = require("react-transition-group");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ModalOverlay = function ModalOverlay(props) {
  var content = /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal ".concat(props.className),
    style: props.style
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: "modal_header ".concat(props.headerClass)
  }, /*#__PURE__*/_react["default"].createElement("h2", null, props.header)), /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: props.onSubmit ? props.onSubmit : function (event) {
      return event.preventDefault();
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal_content ".concat(props.contentClass)
  }, props.children), /*#__PURE__*/_react["default"].createElement("footer", {
    className: "modal-footer ".concat(props.footerClass)
  }, props.footer)));

  return /*#__PURE__*/_reactDom["default"].createPortal(content, document.getElementById('modal-hook'));
};

var Backdrop = function Backdrop(props) {
  return /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement("div", {
    className: "backdrop",
    onClick: props.onClick
  }), document.getElementById('backdrop-hook'));
};

var Modal = function Modal(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.show && /*#__PURE__*/_react["default"].createElement(Backdrop, {
    onClick: props.onCancel
  }), /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.CSSTransition, {
    "in": props.show,
    timeout: 200,
    classNames: "modal",
    mountOnEnter: true,
    unmountOnExit: true
  }, /*#__PURE__*/_react["default"].createElement(ModalOverlay, props)));
};

var _default = Modal;
exports["default"] = _default;
