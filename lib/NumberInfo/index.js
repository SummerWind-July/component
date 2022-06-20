'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _accounting = require('../Util/accounting');

var _accounting2 = _interopRequireDefault(_accounting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var prefix = 'number-info';

var NumberInfo = function (_React$Component) {
  _inherits(NumberInfo, _React$Component);

  function NumberInfo() {
    _classCallCheck(this, NumberInfo);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  NumberInfo.prototype.textColor = function textColor() {
    if (this.props.color) {
      if (this.props.number > 0) {
        return { color: 'green' };
      } else {
        return { color: 'red' };
      }
    }
  };

  NumberInfo.prototype.titleInfo = function titleInfo() {
    var _props = this.props,
        number = _props.number,
        symbol = _props.symbol,
        precision = _props.precision;

    return _accounting2['default'].formatMoney(number, symbol, precision);
  };

  NumberInfo.prototype.render = function render() {
    var _classNames;

    var _props2 = this.props,
        number = _props2.number,
        className = _props2.className,
        symbol = _props2.symbol,
        precision = _props2.precision,
        others = _objectWithoutProperties(_props2, ['number', 'className', 'symbol', 'precision']);

    var textColor = this.textColor();
    var classes = (0, _classnames2['default'])((_classNames = {}, _classNames[prefix] = true, _classNames[className] = className, _classNames));

    return _react2['default'].createElement(
      'div',
      { className: classes, style: textColor },
      _react2['default'].createElement(
        'span',
        null,
        this.titleInfo()
      )
    );
  };

  return NumberInfo;
}(_react2['default'].Component);

NumberInfo.defaultProps = {
  color: false,
  symbol: "",
  precision: 2
};
exports['default'] = NumberInfo;
module.exports = exports['default'];