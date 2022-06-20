'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrapTable = require('../react-bootstrap-table');

var _reactBootstrapTable2 = _interopRequireDefault(_reactBootstrapTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 基础的Table组件，内部使用react-bootstrap-table
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 可以采用HOC(高阶组件)覆写功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var TableHeaderColumn = _reactBootstrapTable2['default'].TableHeaderColumn;

var CommonTable = function (_PureComponent) {
  _inherits(CommonTable, _PureComponent);

  function CommonTable() {
    var _temp, _this, _ret;

    _classCallCheck(this, CommonTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = {
      selectedRowKeys: [],
      sorter: {
        field: "",
        order: ""
      },
      sizePerPage: 10
    }, _this.renderTableColumns = function (columns) {

      return columns.map(function (item, index) {
        return _react2['default'].createElement(
          TableHeaderColumn,
          {
            width: item.width,
            dataField: item.dataIndex,
            tdStyle: item.tdStyle,
            dataAlign: item.align,
            dataSort: !!item.sort,
            dataFormat: item.render,
            key: index
          },
          item.title
        );
      });
    }, _this.onPageChange = function (page, sizePerPage) {
      _this.setState({
        sizePerPage: sizePerPage,
        current: page
      });

      _this.props.onChange({ current: page, pageSize: sizePerPage }, {}, _this.state.sorter);
    }, _this.onSortChange = function (sortName, sortOrder) {
      var sorter = {
        sortName: sortName,
        sortOrder: sortOrder
      };

      _this.setState({ sorter: sorter });

      _this.props.onChange({ current: _this.state.current, pageSize: _this.state.sizePerPage }, {}, sorter);
    }, _this.onSelect = function (row, isSelected) {
      var selectedRowKeys = _this.state.selectedRowKeys;


      var rows = [].concat(_this.props.selectedRows);

      if (isSelected == true) {
        selectedRowKeys.push(row.id);
        rows.push(row);
      } else if (isSelected == false) {
        selectedRowKeys = selectedRowKeys.filter(function (item) {
          return item != row.id;
        });
        rows = rows.filter(function (item) {
          return item.id != row.id;
        });
      }

      if (_this.props.onSelectRow) {
        _this.props.onSelectRow(rows);
      }

      _this.setState({ selectedRowKeys: selectedRowKeys });
    }, _this.onSelectAll = function (isSelected, rows) {
      var resultRows = [];

      if (isSelected) resultRows = rows;

      if (_this.props.onSelectRow) {
        _this.props.onSelectRow(resultRows);
      }

      var selectedRowKeys = resultRows.map(function (item) {
        return item[_this.props.rowKey];
      });

      _this.setState({ selectedRowKeys: selectedRowKeys });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CommonTable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      this.setState({
        selectedRowKeys: []
      });
    }
  };

  // 分页变换


  // 选项配置 start


  CommonTable.prototype.getSelectRow = function getSelectRow() {
    return {
      mode: "checkbox",
      clickToSelect: true,
      onSelect: this.onSelect,
      onSelectAll: this.onSelectAll,
      selected: this.state.selectedRowKeys,
      unselectable: this.props.unselectable
    };
  };

  // 选项配置 end

  CommonTable.prototype.render = function render() {
    var selectedRowKeys = this.state.selectedRowKeys;
    var _props = this.props,
        _props$data = _props.data,
        list = _props$data.list,
        totalCount = _props$data.totalCount,
        currentPage = _props$data.currentPage,
        columns = _props.columns,
        pagination = _props.pagination,
        remote = _props.remote,
        noDataText = _props.noDataText;


    return _react2['default'].createElement(
      'div',
      { className: 'standardTable' },
      _react2['default'].createElement(
        _reactBootstrapTable2['default'],
        {
          id: 'table-load',
          data: list,
          keyField: 'id',
          pagination: pagination,
          remote: remote,
          selectRow: this.getSelectRow(),
          options: {
            noDataText: noDataText,
            page: currentPage,
            sizePerPage: this.state.sizePerPage,
            onPageChange: this.onPageChange,
            onSortChange: this.onSortChange,
            defaultSortName: this.state.sorter.field,
            defaultSortOrder: this.state.sorter.order
          },
          fetchInfo: {
            dataTotalSize: totalCount
          }
        },
        this.renderTableColumns(columns)
      )
    );
  };

  return CommonTable;
}(_react.PureComponent);

CommonTable.propTypes = {
  onChange: _propTypes2['default'].func,
  data: _propTypes2['default'].object,
  columns: _propTypes2['default'].array,
  rowSelection: _propTypes2['default'].object,
  pagination: _propTypes2['default'].bool,
  remote: _propTypes2['default'].bool,
  onSelectRow: _propTypes2['default'].func,
  rowKey: _propTypes2['default'].string,
  unselectable: _propTypes2['default'].array
};

CommonTable.defaultProps = {
  pagination: false,
  remote: false,
  selectedRows: []
};

exports['default'] = CommonTable;
module.exports = exports['default'];