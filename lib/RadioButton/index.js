'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _antd = require('antd');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = function (_React$Component) {
  _inherits(RadioButton, _React$Component);

  function RadioButton(props) {
    _classCallCheck(this, RadioButton);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onClickChange = function (ev) {
      var lastActiveKey = _this.state.activeKey;
      var target = ev.target;
      var key = target.value;
      _this.setState({
        activeKey: key
      }, function () {
        var onChange = _this.props.onChange;
        if (onChange && key !== lastActiveKey) {
          onChange(key, target);
        } else {
          if (onChange && key === lastActiveKey && _this.props.canCancel) {
            _this.setState({
              activeKey: ''
            });
            onChange(key, target);
          }
        }
      });
    };

    var activeKey = void 0;
    if ('activeKey' in props) {
      activeKey = props.activeKey;
    }
    _this.state = {
      activeKey: activeKey
    };
    return _this;
  }

  RadioButton.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return !(0, _shallowequal2['default'])(this.props, nextProps) || !(0, _shallowequal2['default'])(this.state, nextState);
  };

  RadioButton.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var props = this.props;
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-radio-button' : _props$prefixCls,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className;

    var classString = (0, _classnames2['default'])(prefixCls, (_classNames = {}, _classNames[prefixCls + '-' + props.arrangement] = props.arrangement, _classNames), className);
    var children = void 0;
    // 如果存在 options, 优先使用
    if (props.options && props.options.length > 0) {
      children = props.options.map(function (option, index) {
        return _react2['default'].createElement(
          _antd.Button,
          {
            key: index,
            value: option.key,
            disabled: option.disabled || false,
            name: option.text,
            onClick: _this2.onClickChange,
            size: _this2.props.size,
            type: _this2.state.activeKey === option.key ? _this2.props.clickType : _this2.props.defaultType
          },
          option.text
        );
      });
    }

    return _react2['default'].createElement(
      'div',
      {
        className: classString,
        style: props.style,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave
      },
      children
    );
  };

  return RadioButton;
}(_react2['default'].Component);

RadioButton.defaultProps = {
  canCancel: false,
  defaultType: 'default',
  clickType: 'primary',
  arrangement: 'horizontal',
  size: 'large',
  options: [],
  onChange: function onChange() {}
};
RadioButton.propTypes = {
  canCancel: _propTypes2['default'].bool,
  defaultType: _propTypes2['default'].string,
  clickType: _propTypes2['default'].string,
  activeKey: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
  arrangement: _propTypes2['default'].string,
  size: _propTypes2['default'].string,
  options: _propTypes2['default'].array,
  onChange: _propTypes2['default'].func
};
exports['default'] = RadioButton;
module.exports = exports['default'];