'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./submit-group.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var prefix = 'ux-btn-submit-group';

var SubmitGroup = function (_React$Component) {
  _inherits(SubmitGroup, _React$Component);

  function SubmitGroup() {
    _classCallCheck(this, SubmitGroup);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  SubmitGroup.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        size = _props.size,
        className = _props.className,
        others = _objectWithoutProperties(_props, ['size', 'className']);

    // large => lg
    // small => sm


    var sizeCls = {
      huge: 'hg',
      large: 'lg',
      small: 'sm'
    }[size] || '';

    var classes = (0, _classnames2['default'])((_classNames = {}, _classNames[prefix] = true, _classNames[prefix + "-" + sizeCls] = sizeCls, _classNames[className] = className, _classNames));

    return _react2['default'].createElement('div', _extends({}, others, { className: classes }));
  };

  return SubmitGroup;
}(_react2['default'].Component);

exports['default'] = SubmitGroup;
module.exports = exports['default'];