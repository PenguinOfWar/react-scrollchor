'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scrollchor = function (_React$Component) {
  _inherits(Scrollchor, _React$Component);

  function Scrollchor(props) {
    _classCallCheck(this, Scrollchor);

    var _this = _possibleConstructorReturn(this, (Scrollchor.__proto__ || Object.getPrototypeOf(Scrollchor)).call(this, props));

    _initialiseProps.call(_this);

    _this._setup(props);
    _this.simulateClick = _this._handleClick;
    return _this;
  }

  _createClass(Scrollchor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this._setup(nextProps);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this._setup(props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          to = _props.to,
          animate = _props.animate,
          beforeAnimate = _props.beforeAnimate,
          afterAnimate = _props.afterAnimate,
          props = _objectWithoutProperties(_props, ['to', 'animate', 'beforeAnimate', 'afterAnimate']); // eslint-disable-line no-unused-vars

      return !this.props.children ? null : _react2.default.createElement('a', _extends({}, props, { href: '#' + this._to, onClick: this._handleClick }));
    }
  }]);

  return Scrollchor;
}(_react2.default.Component);

// Default easing function
// jQuery easing 'swing'


Scrollchor.propTypes = {
  to: _propTypes2.default.string.isRequired,
  animate: _propTypes2.default.shape({
    offset: _propTypes2.default.number,
    duration: _propTypes2.default.number,
    easing: _propTypes2.default.func
  }),
  beforeAnimate: _propTypes2.default.func,
  afterAnimate: _propTypes2.default.func
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._setup = function (props) {
    _this2._to = props.to && props.to.replace(/^#/, '') || '';

    var _ref = props.animate || {},
        _ref$offset = _ref.offset,
        offset = _ref$offset === undefined ? 0 : _ref$offset,
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 400 : _ref$duration,
        _ref$easing = _ref.easing,
        easing = _ref$easing === undefined ? easeOutQuad : _ref$easing;

    _this2._animate = { offset: offset, duration: duration, easing: easing };
    _this2._beforeAnimate = props.beforeAnimate || function () {};
    _this2._afterAnimate = props.afterAnimate || function () {};
  };

  this._handleClick = function (event) {
    _this2._beforeAnimate(event);
    event && event.preventDefault();
    (0, _utils.animateScroll)(_this2._to, _this2._animate);
    _this2._afterAnimate(event);
  };
};

exports.default = Scrollchor;
function easeOutQuad(x, t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}