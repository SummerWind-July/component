'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;

var SwitchTabs = function (_React$Component) {
  _inherits(SwitchTabs, _React$Component);

  function SwitchTabs(props) {
    _classCallCheck(this, SwitchTabs);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.tabClick = function (index) {
      _this.setState({ 'indexTable': index });

      _this.props.onTabClick && _this.props.onTabClick(index);
    };

    _this.state = {
      indexTable: props.indexTable
    };
    return _this;
  }

  SwitchTabs.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('indexTable' in nextProps) {
      var indexTable = nextProps.indexTable;
      this.setState({ 'indexTable': indexTable });
    }
  };

  SwitchTabs.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        tabBarExtraContent = _props.tabBarExtraContent;

    return _react2['default'].createElement(
      'div',
      { className: 'switch-tabs' },
      _react2['default'].createElement(
        _antd.Tabs,
        { activeKey: this.state.indexTable || '0', onTabClick: this.tabClick, tabBarExtraContent: tabBarExtraContent },
        children.map(function (item, index) {
          return _react2['default'].createElement(
            TabPane,
            { tab: item.props.label, key: index, disabled: item.props.disabled },
            item
          );
        })
      )
    );
  };

  return SwitchTabs;
}(_react2['default'].Component);

exports['default'] = SwitchTabs;
module.exports = exports['default'];