'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _component = require('component');

require('./style.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by neo on 2017/11/14.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var FormItem = _antd.Form.Item;

var RadioTableList = _component.FormTable.RadioTableList;


var searchLayout = { md: 8, sm: 24 };

var modalStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -20%)',
    border: 'none',
    padding: 0,
    width: '900px'
  },
  contentLimit: {
    maxHeight: "500px",
    overflowY: "auto"
  }
};

// 此处仅为示例，可能会是action.
function getUserList(params) {
  return _component.Util.ajaxPromise("http://localhost:8888/saas20/api/2017070701/Apartment/free/app/version/query", params, 'POST', 'json');
}

var QueryTable = function (_Component) {
  _inherits(QueryTable, _Component);

  function QueryTable(props) {
    _classCallCheck(this, QueryTable);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.columns = [{
      title: 'APP',
      dataIndex: 'appName'
    }, {
      title: '版本号',
      dataIndex: 'versionNo'
    }, {
      title: '创建时间',
      dataIndex: 'createTime',
      sort: true
    }, {
      title: '操作',
      render: function render(val, row) {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'a',
            { onClick: _this.handleDetailClick.bind(_this, row) },
            '\u914D\u7F6E'
          ),
          _react2['default'].createElement(_component.Divider, { type: 'vertical' }),
          _react2['default'].createElement(
            'a',
            null,
            '\u8BA2\u9605\u8B66\u62A5'
          )
        );
      }
    }];

    _this.handleAdd = function () {
      _this.detailInfo.setModal(true);
    };

    _this.getFilterGroup = function () {
      return [{
        align: "right",
        action: _react2['default'].createElement(
          _antd.Button,
          { onClick: _this.handleAdd, icon: 'plus', type: 'primary', size: 'large' },
          '\u65B0\u5EFA'
        )
      }];
    };

    _this.handleItemSelect = function (rows) {
      _this.setState({
        selectedRows: rows
      });
    };

    _this.state = {};
    return _this;
  }

  // table的列配置 example


  QueryTable.prototype.componentDidMount = function componentDidMount() {
    this.query();
  };

  QueryTable.prototype.handleDetailClick = function handleDetailClick(row) {
    //
    console.log(row);
  };

  // 下面开始模板区域
  // 操作区域


  // 默认展示条件
  QueryTable.prototype.getBasicCondition = function getBasicCondition() {
    return _react2['default'].createElement(
      _antd.Row,
      { gutter: 16 },
      _react2['default'].createElement(
        _antd.Col,
        searchLayout,
        _react2['default'].createElement(
          FormItem,
          { label: '\u5173\u952E\u5B57' },
          _react2['default'].createElement(_antd.Input, {
            size: 'large',
            maxLength: '30',
            placeholder: '\u6E20\u9053\u3001\u7BA1\u7406\u4E2D\u5FC3\u6216\u5BA2\u623F\u5173\u952E\u5B57'
          })
        )
      )
    );
  };

  // 高级隐藏条件


  QueryTable.prototype.getAdvancedCondition = function getAdvancedCondition() {
    return _react2['default'].createElement(
      _antd.Row,
      { gutter: 16 },
      _react2['default'].createElement(
        _antd.Col,
        searchLayout,
        _react2['default'].createElement(
          FormItem,
          { label: '\u6253\u7801' },
          _react2['default'].createElement(
            _antd.Select,
            {
              placeholder: '\u6253\u7801',
              allowClear: true
            },
            _react2['default'].createElement(
              Option,
              { value: 0 },
              '\u672A\u6253\u7801'
            ),
            _react2['default'].createElement(
              Option,
              { value: 1 },
              '\u5DF2\u6253\u7801'
            )
          )
        )
      )
    );
  };

  // 勾选回调


  QueryTable.prototype.render = function render() {
    var _this2 = this;

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(RadioTableList, {
        columns: this.columns,
        rowKey: 'id',
        pagination: true,
        remote: true,
        filterGroup: this.getFilterGroup(),
        basicCondition: this.getBasicCondition(),
        advancedCondition: this.getAdvancedCondition(),
        requestAction: getUserList,
        onItemSelect: this.handleItemSelect
      }),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _component.PanelModal,
          {
            ref: function ref(ins) {
              return _this2.detailInfo = ins;
            },
            title: '\u8BE6\u60C5',
            customStyles: modalStyles
          },
          '12312312'
        )
      )
    );
  };

  return QueryTable;
}(_react.Component);

exports['default'] = QueryTable;
module.exports = exports['default'];