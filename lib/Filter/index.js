'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableFilter = function (_React$Component) {
  _inherits(TableFilter, _React$Component);

  function TableFilter() {
    _classCallCheck(this, TableFilter);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      field: ''
    };
    _this.doSearch = _this.doSearch.bind(_this);
    _this.selectField = _this.selectField.bind(_this);
    return _this;
  }

  TableFilter.prototype.doSearch = function doSearch(_ref) {
    var keyword = _ref.keyword;

    var val = keyword;
    var field = this.state.field;

    if (val === '') {
      this.state.searchFilter = {};
    } else {
      var _state$searchFilter;

      this.state.searchFilter = (_state$searchFilter = {}, _state$searchFilter[field] = val, _state$searchFilter);
    }
    this.props.doSearch(this.state.searchFilter);
  };

  TableFilter.prototype.selectField = function selectField(val) {
    this.state.field = val;
  };

  TableFilter.prototype.render = function render() {
    var searchItems = this.props.searchItems;

    var blist = searchItems.map(function (v) {
      return {
        name: v.name,
        value: v.field
      };
    });
    var span = 11;
    var offset = 12;
    if (this.props.size === 'full') {
      offset = 1;
      span = 23;
    }
    return _react2['default'].createElement(
      _antd.Row,
      { style: { height: '40px' } },
      _react2['default'].createElement(
        _antd.Col,
        { span: span, offset: offset },
        _react2['default'].createElement(_Search2['default'], {
          select: true, selectOptions: blist, onSearch: this.doSearch,
          selectProps: {
            placeholder: '请选择筛选字段',
            onSelect: this.selectField,
            style: { width: '120px' }
          }
        })
      )
    );
  };

  return TableFilter;
}(_react2['default'].Component);

TableFilter.propTypes = {
  searchItems: _propTypes2['default'].array,
  doSearch: _propTypes2['default'].func
};
TableFilter.defaultProps = {};

exports['default'] = TableFilter;
module.exports = exports['default'];