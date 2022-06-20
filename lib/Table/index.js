'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormTable = function (_Component) {
  _inherits(FormTable, _Component);

  function FormTable(props) {
    _classCallCheck(this, FormTable);

    var _this2 = _possibleConstructorReturn(this, _Component.call(this, props));

    _this2.makeRequest = function (params) {
      var dataRequest = _this2.props.dataRequest;
      var pagination = _this2.state.pagination;

      var _this = _this2;
      _this.setState({
        loading: true
      }, function () {
        dataRequest(params).then(function (result) {
          if (result.data.code === 0 && result.data.data && result.data.data.list) {
            pagination.current = params.pageNo;
            pagination.pageSize = params.pageSize;
            pagination.total = result.data.data.total;
            _this.setState({ dataSource: result.data.data.list, pagination: pagination, loading: false });
          } else {
            _this.setState({
              pagination: {
                total: 0,
                pageSize: params.pageSize || 10,
                current: 1,
                showTotal: function showTotal(total) {
                  return '\u5171' + total + '\u6761';
                }
              },
              dataSource: [],
              loading: false
            });
          }
        })['catch'](function (error) {
          if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            _antd.message.error(error.message);
          }
          _antd.message.error(error.config);
          _this.setState({
            pagination: {
              total: 0,
              pageSize: params.pageSize || 10,
              current: 1,
              showTotal: function showTotal(total) {
                return '\u5171' + total + '\u6761';
              }
            },
            dataSource: [],
            loading: false
          });
        });
      });
    };

    _this2.query = function () {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var pageSize = arguments[1];
      var pagination = _this2.state.pagination;

      var params = _this2.props.requestParams || {};
      params.pageNo = page;
      params.pageSize = pageSize || pagination.pageSize || 10;
      for (var key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          if (params[key] instanceof Array) {
            if (params[key].toString() === '[]') {
              delete params[key];
            }
          } else if (params[key] === '' || params[key] === null || params[key] === undefined) {
            delete params[key];
          }
        }
      }
      _this2.makeRequest(params);
    };

    _this2.handleChange = function (val) {
      var pagination = _this2.state.pagination;

      pagination.current = val.current;
      pagination.pageSize = val.pageSize;
      _this2.setState({ pagination: pagination }, function () {
        _this2.query(val.current, val.pageSize);
      });
    };

    _this2.renderFilter = function (filter) {
      return filter.map(function (item, i) {
        return _react2['default'].createElement(
          'div',
          { key: i, style: { float: item.align, margin: '0 10px' } },
          item.action
        );
      });
    };

    _this2.state = {
      loading: false,
      pagination: _extends({}, _this2.props.pagination, { showSizeChanger: true, showQuickJumper: true }),
      dataSource: _this2.props.dataSource
    };
    return _this2;
  }

  FormTable.prototype.componentDidMount = function componentDidMount() {
    if (!this.state.dataSource.length) {
      this.query();
    }
  };

  FormTable.prototype.render = function render() {
    var _props = this.props,
        columns = _props.columns,
        basicCondition = _props.basicCondition,
        className = _props.className,
        style = _props.style,
        rowKey = _props.rowKey,
        showHeader = _props.showHeader,
        size = _props.size,
        title = _props.title,
        rowSelection = _props.rowSelection,
        filterGroup = _props.filterGroup,
        others = _objectWithoutProperties(_props, ['columns', 'basicCondition', 'className', 'style', 'rowKey', 'showHeader', 'size', 'title', 'rowSelection', 'filterGroup']);

    var _state = this.state,
        loading = _state.loading,
        pagination = _state.pagination,
        dataSource = _state.dataSource;

    var hasForm = basicCondition;
    return _react2['default'].createElement(
      'div',
      { style: { background: 'white', paddingTop: '20px' } },
      hasForm ? basicCondition : null,
      filterGroup ? _react2['default'].createElement(
        'div',
        { style: { overflow: 'hidden', marginBottom: '10px' } },
        this.renderFilter(filterGroup)
      ) : null,
      _react2['default'].createElement(_antd.Table, _extends({}, others, {
        columns: columns,
        dataSource: dataSource,
        className: className,
        loading: loading,
        showHeader: showHeader,
        size: size,
        title: title,
        style: style,
        onChange: this.handleChange,
        rowSelection: rowSelection,
        rowKey: rowKey,
        pagination: pagination
      }))
    );
  };

  return FormTable;
}(_react.Component);

FormTable.propTypes = {
  columns: _propTypes2['default'].array,
  dataSource: _propTypes2['default'].array,
  rowKey: _propTypes2['default'].string,
  pagination: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].object]),
  filterGroup: _propTypes2['default'].array,
  basicCondition: _propTypes2['default'].node,
  className: _propTypes2['default'].string,
  style: _propTypes2['default'].object,
  loading: _propTypes2['default'].bool,
  showHeader: _propTypes2['default'].bool,
  size: _propTypes2['default'].string,
  title: _propTypes2['default'].string,
  rowSelection: _propTypes2['default'].object,
  dataRequest: _propTypes2['default'].func,
  requestParams: _propTypes2['default'].object
};

FormTable.defaultProps = {
  pagination: {
    total: 0,
    pageSize: 10,
    current: 1,
    showTotal: function showTotal(total) {
      return '\u5171' + total + '\u6761';
    }
  },
  rowSelection: null,
  dataSource: [],
  rowKey: 'key',
  showHeader: true,
  size: 'default',
  requestParams: {}
};

exports['default'] = FormTable;
module.exports = exports['default'];