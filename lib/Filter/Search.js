'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _antd = require('antd');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      clearVisible: false,
      // selectData: '',
      selectValue: _this.props.select && _this.props.selectProps ? _this.props.selectProps.defaultValue : ''
    }, _this.handleSearch = function () {
      var data = {
        keyword: _reactDom2['default'].findDOMNode(_this.searchInput).value
      };
      if (_this.props.select) {
        data.field = _this.state.selectValue;
      }
      if (_this.props.onSearch) _this.props.onSearch(data);
    }, _this.handleInputChange = function (e) {
      _this.setState(_extends({}, _this.state, {
        clearVisible: e.target.value !== ''
      }));
    }, _this.handeleSelectChange = function (value) {
      _this.setState(_extends({}, _this.state, {
        selectValue: value
      }));
    }, _this.handleFormReset = function () {
      _reactDom2['default'].findDOMNode(_this.searchInput).value = '';
      var data = {
        keyword: ''
      };
      // this.setState({
      //   selectData: '请选择',
      // });
      if (_this.props.select) {
        data.field = '';
      }
      if (_this.props.onSearch) _this.props.onSearch(data);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Search.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        size = _props.size,
        select = _props.select,
        selectOptions = _props.selectOptions,
        selectProps = _props.selectProps,
        style = _props.style,
        keyword = _props.keyword;
    var clearVisible = this.state.clearVisible;

    return _react2['default'].createElement(
      _antd.Input.Group,
      { compact: true, size: size, className: 'search', style: style },
      select && _react2['default'].createElement(
        _antd.Select,
        _extends({ ref: function ref(searchSelect) {
            return _this2.searchSelect = searchSelect;
          }, onChange: this.handeleSelectChange, size: size }, selectProps),
        selectOptions && selectOptions.map(function (item, key) {
          return _react2['default'].createElement(
            _antd.Select.Option,
            { value: item.value, key: key },
            item.name || item.value
          );
        })
      ),
      _react2['default'].createElement(_antd.Input, {
        ref: function ref(searchInput) {
          return _this2.searchInput = searchInput;
        },
        size: size,
        onChange: this.handleInputChange,
        onPressEnter: this.handleSearch,
        defaultValue: keyword }),
      _react2['default'].createElement(
        _antd.Button,
        { size: size, type: 'primary', style: { marginRight: '3px' }, onClick: this.handleSearch },
        '\u641C\u7D22'
      )
    );
  };

  return Search;
}(_react2['default'].Component);

// Search.propTypes = {
//   size: PropTypes.string,
//   select: PropTypes.bool,
//   selectProps: PropTypes.object,
//   onSearch: PropTypes.func,
//   selectOptions: PropTypes.array,
//   style: PropTypes.object,
//   keyword: PropTypes.string,
// };

exports['default'] = Search;
module.exports = exports['default'];