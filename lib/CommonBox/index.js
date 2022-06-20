'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonBox = function (_Component) {
  _inherits(CommonBox, _Component);

  function CommonBox() {
    var _temp, _this, _ret;

    _classCallCheck(this, CommonBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.renderTitle = function (title) {
      return _react2['default'].createElement(
        'div',
        { className: 'titleWrap' },
        _react2['default'].createElement(
          'div',
          { className: 'titleDom' },
          _react2['default'].createElement('div', { className: 'titleIcon' }),
          _react2['default'].createElement(
            'div',
            { className: 'titleContent' },
            title
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CommonBox.prototype.render = function render() {
    var _props = this.props,
        isDiv = _props.isDiv,
        className = _props.className,
        style = _props.style,
        title = _props.title,
        others = _objectWithoutProperties(_props, ['isDiv', 'className', 'style', 'title']);

    return _react2['default'].createElement(
      'div',
      _extends({ className: (isDiv ? '' : 'commonBox') + ' ' + className }, others, { style: _extends({}, style) }),
      typeof title === 'string' && title ? this.renderTitle(title) : _react2['default'].createElement(
        'div',
        null,
        title
      ),
      this.props.children,
      isDiv ? null : _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement('div', { className: 'angle1' }),
        _react2['default'].createElement('div', { className: 'angle2' }),
        _react2['default'].createElement('div', { className: 'angle3' }),
        _react2['default'].createElement('div', { className: 'angle4' })
      )
    );
  };

  return CommonBox;
}(_react.Component);

exports['default'] = CommonBox;


CommonBox.propTypes = {
  className: _propTypes2['default'].string,
  style: _propTypes2['default'].object,
  isDiv: _propTypes2['default'].bool,
  title: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].node])
};

CommonBox.defaultProps = {
  className: '',
  style: {},
  isDiv: false,
  title: ''
};
module.exports = exports['default'];