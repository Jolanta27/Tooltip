"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, props));
    _this.state = {
      opacity: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Tooltip, [{
    key: "toggle",
    value: function toggle() {
      var tooltipNode = ReactDOM.findDOMNode(this);
      this.setState({
        opacity: !this.state.opacity,
        top: tooltipNode.offsetTop,
        left: tooltipNode.offsetLeft
      });
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        zIndex: this.state.opacity ? 1000 : -1000,
        opacity: +this.state.opacity,
        top: (this.state.top || 0) + 20,
        left: (this.state.left || 0) - 30
      };
      return React.createElement('div', {
        style: {
          display: 'inline'
        }
      }, React.createElement('span', {
        style: {
          color: 'blue'
        },
        onMouseEnter: this.toggle,
        onMouseOut: this.toggle
      }, this.props.children), React.createElement('div', {
        className: 'tooltip bottom',
        style: style,
        role: 'tooltip'
      }, React.createElement('div', {
        className: 'tooltip-arrow'
      }), React.createElement('div', {
        className: 'tooltip-inner'
      }, this.props.text)));
    }
  }]);

  return Tooltip;
}(React.Component);

ReactDOM.render(React.createElement('div', null, React.createElement(Tooltip, {
  text: 'The book I\'m reading now'
}, 'Programming languages '), 'was published in 2017. It\'s awesome!'), document.getElementById('tooltip'));