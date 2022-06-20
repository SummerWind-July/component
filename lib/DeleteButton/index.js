'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description 本组件与 WrapTable 的 getOperate 方法深度依赖无需手动调用
 */
var DeleteButton = function (_React$Component) {
  _inherits(DeleteButton, _React$Component);

  function DeleteButton() {
    _classCallCheck(this, DeleteButton);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      onDelete: false
    };
    _this.overDelete = _this.overDelete.bind(_this);
    _this.outDelete = _this.outDelete.bind(_this);
    return _this;
  }

  DeleteButton.prototype.overDelete = function overDelete() {
    this.setState({
      onDelete: true
    });
  };

  DeleteButton.prototype.outDelete = function outDelete() {
    this.setState({
      onDelete: false
    });
  };

  DeleteButton.prototype.render = function render() {
    var onClick = this.props.onClick;
    var onDelete = this.state.onDelete;

    return _react2['default'].createElement(
      'span',
      {
        onMouseOver: this.overDelete,
        onMouseOut: this.outDelete },
      _react2['default'].createElement(
        _antd.Popconfirm,
        { title: '\u786E\u5B9A\u5220\u9664\uFF1F', okText: '\u662F', onConfirm: onClick, cancelText: '\u5426' },
        _react2['default'].createElement(
          _antd.Button,
          { icon: 'delete', type: onDelete ? 'danger' : 'dashed', href: '#' },
          '\u5220\u9664'
        )
      )
    );
  };

  return DeleteButton;
}(_react2['default'].Component);

exports['default'] = DeleteButton;
module.exports = exports['default'];