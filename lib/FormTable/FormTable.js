'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormFilter = require('../FormFilter');

var _FormFilter2 = _interopRequireDefault(_FormFilter);

var _TableFilter = require('../TableFilter');

var _TableFilter2 = _interopRequireDefault(_TableFilter);

var _BasicTable = require('../StandardTable/hoc/BasicTable');

var _BasicTable2 = _interopRequireDefault(_BasicTable);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormTable = function (_Component) {
  _inherits(FormTable, _Component);

  function FormTable(props) {
    _classCallCheck(this, FormTable);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.getBasicQuery = function () {
      return _this.props.requestParams || {};
    };

    _this.query = function () {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var params = _this.getBasicQuery();

      var _this$state = _this.state,
          pageSize = _this$state.pageSize,
          sorter = _this$state.sorter;


      params.page = page;
      params.pageSize = pageSize;
      params.orderBy = _this.props.requestParams.orderBy || [sorter.field, sorter.order].join(" ");

      for (var key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          if (!params[key]) delete params[key];
        }
      }

      _this.makeRequest(params);
    };

    _this.handleChange = function (pagination, filters, sorter) {
      _this.setState({
        sorter: sorter,
        pageSize: pagination.pageSize
      }, function () {
        _this.query(pagination.current);
      });
    };

    _this.handleSelectRows = function (rows) {
      _this.setState({
        selectedRows: rows
      });

      _this.props.onItemSelect && _this.props.onItemSelect(rows);
    };

    _this.onSearchClick = function () {
      _this.query();
    };

    _this.state = {
      pageList: {
        currentPage: 1,
        list: [],
        totalCount: 0,
        totalPage: 0
      },
      selectedRows: [],
      pageSize: 10,
      sorter: {
        field: "",
        order: ""
      }
    };
    return _this;
  }

  FormTable.prototype.componentDidMount = function componentDidMount() {
    if (this.props.pageList) {
      this.setState({ pageList: this.props.pageList });
    } else {
      this.query();
    }
  };

  // 构造请求参数(分页信息等参数这边不需要)


  FormTable.prototype.makeRequest = function makeRequest(params) {
    var _this2 = this;

    var requestAction = this.props.requestAction;


    requestAction(params).then(function (result) {
      if (result.errorCode == 0 && result.data && result.data.list) _this2.setState({ pageList: result.data });else _this2.setState({
        pageList: {
          currentPage: 1,
          list: [],
          totalCount: 0,
          totalPage: 0
        }
      });
    });
  };

  // 构造查询的核心部分，把分页、排序参数和基本参数合并


  // 下层Table的变动回调，包含分页，排序


  FormTable.prototype.renderFilter = function renderFilter(filter) {
    return filter.map(function (item, i) {
      return _react2['default'].createElement(
        _TableFilter.FilterItem,
        { float: item.align, key: i },
        item.action
      );
    });
  };

  FormTable.prototype.render = function render() {
    var _props = this.props,
        columns = _props.columns,
        pagination = _props.pagination,
        remote = _props.remote,
        rowKey = _props.rowKey,
        filterGroup = _props.filterGroup,
        basicCondition = _props.basicCondition,
        advancedCondition = _props.advancedCondition,
        noDataText = _props.noDataText;


    var hasForm = basicCondition || advancedCondition;

    return _react2['default'].createElement(
      'div',
      null,
      hasForm ? _react2['default'].createElement(
        _FormFilter2['default'],
        {
          onSubmit: this.onSearchClick,
          className: 'tableListForm'
        },
        _react2['default'].createElement(
          _FormFilter.Condition,
          null,
          basicCondition
        ),
        advancedCondition ? _react2['default'].createElement(
          _FormFilter.AdvancedCondition,
          null,
          advancedCondition
        ) : null
      ) : null,
      filterGroup ? _react2['default'].createElement(
        _TableFilter2['default'],
        null,
        this.renderFilter(filterGroup)
      ) : null,
      _react2['default'].createElement(_BasicTable2['default'], {
        columns: columns,
        noDataText: noDataText,
        data: this.state.pageList,
        onChange: this.handleChange,
        onSelectRow: this.handleSelectRows,
        rowKey: rowKey,
        pagination: pagination,
        remote: remote
      })
    );
  };

  return FormTable;
}(_react.Component);

FormTable.propTypes = {
  columns: _propTypes2['default'].array,
  rowKey: _propTypes2['default'].string,
  pagination: _propTypes2['default'].bool,
  remote: _propTypes2['default'].bool,
  filterGroup: _propTypes2['default'].array,
  basicCondition: _propTypes2['default'].node,
  advancedCondition: _propTypes2['default'].element,
  onItemSelect: _propTypes2['default'].func,
  requestParams: _propTypes2['default'].object
};

FormTable.defaultProps = {
  advancedCondition: null,
  pagination: false,
  requestParams: {}
};

exports['default'] = FormTable;
module.exports = exports['default'];