'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  minWidth: '150px',
  margin: '0 20px 30px 20px'
};

var CascadeSelectItem = function (_React$Component) {
  _inherits(CascadeSelectItem, _React$Component);

  function CascadeSelectItem() {
    _classCallCheck(this, CascadeSelectItem);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      data: []
    };
    return _this;
  }

  CascadeSelectItem.prototype.componentWillMount = function componentWillMount() {
    if (this.props.noParam) {
      this.fetchData();
    }
  };

  CascadeSelectItem.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var param = nextProps.param;

    if (param !== this.props.param) {
      this.props.onChange(null);
      this.fetchData(param);
    }
  };

  CascadeSelectItem.prototype.fetchData = function fetchData() {
    var _this2 = this;

    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (query === null) {
      return;
    }
    (0, _axios2['default'])({
      url: '' + this.props.url + query
    }).then(function (res) {
      var data = res.data;
      if (_this2.props.format) {
        data = data.map(function (v) {
          return _this2.props.format(v);
        });
      }
      _this2.setState({
        data: data
      });
    });
  };

  CascadeSelectItem.prototype.render = function render() {
    var _props = this.props,
        param = _props.param,
        noParam = _props.noParam,
        placeholder = _props.placeholder;

    if (!noParam && param === null) {
      return _react2['default'].createElement(_antd.Select, {
        style: style,
        disabled: true });
    }
    return _react2['default'].createElement(
      _antd.Select,
      {
        style: style,
        placeholder: placeholder,
        onChange: this.props.onChange
      },
      this.state.data.map(function (v) {
        return _react2['default'].createElement(
          _antd.Select.Option,
          { key: v.objectid },
          v.name
        );
      })
    );
  };

  return CascadeSelectItem;
}(_react2['default'].Component);

exports['default'] = CascadeSelectItem;
module.exports = exports['default'];