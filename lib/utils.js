'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animateScroll = animateScroll;

var _warning = require('fbjs/lib/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function animateScroll(id, animate) {
  var element = id ? document.getElementById(id) : document.body;
  (0, _warning2.default)(element, 'Cannot find element: #' + id);

  var offset = animate.offset,
      duration = animate.duration,
      easing = animate.easing;

  var start = getScrollTop();
  var to = getOffsetTop(element) + offset;
  var change = to - start;

  function animateFn() {
    var elapsedTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var increment = 20;
    var elapsed = elapsedTime + increment;
    var position = easing(null, elapsed, start, change, duration);
    setScrollTop(position);
    elapsed < duration && setTimeout(function () {
      animateFn(elapsed);
    }, increment);
  }

  animateFn();
  window.location.hash = id;
}

function getScrollTop() {
  // like jQuery -> $('html, body').scrollTop
  return document.documentElement.scrollTop || document.body.scrollTop;
}

function setScrollTop(position) {
  document.documentElement.scrollTop = document.body.scrollTop = position;
}

function getOffsetTop(element) {
  var _element$getBoundingC = element.getBoundingClientRect(),
      top = _element$getBoundingC.top;

  return top + getScrollTop();
}