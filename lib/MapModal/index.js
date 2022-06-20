'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MapModal = require('./MapModal');

var _MapModal2 = _interopRequireDefault(_MapModal);

var _MapEditorModal = require('./MapEditorModal');

var _MapEditorModal2 = _interopRequireDefault(_MapEditorModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapWidth = window.outerWidth + 'px';
var mapHeight = window.outerHeight - 100 + 'px';

/**
 * @description 全景图定位的模态框
 * @props initValue<string> 初始化坐标值
 * @props getValue<function> 将选取的坐标值传递给对应的input
 * @props id<string> 渲染地图的容器id
 * @props type<string> 点定位or绘制编辑多边形
 * @props hideModal<function> 关闭模态框
 */

var defaultPosition = '121.604727, 31.20115';

var Bind = function (_React$Component) {
  _inherits(Bind, _React$Component);

  function Bind(props) {
    _classCallCheck(this, Bind);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      visible: false,
      position: defaultPosition,
      path: null,
      type: 'point'
    };
    _this.showModal = _this.showModal.bind(_this);
    _this.hideModal = _this.hideModal.bind(_this);
    _this.getPosition = _this.getPosition.bind(_this);
    return _this;
  }

  Bind.prototype.showModal = function showModal() {
    this.setState({
      visible: true,
      type: this.props.type || 'point'
    });
  };

  Bind.prototype.hideModal = function hideModal() {
    this.setState({
      visible: false
    });
  };

  Bind.prototype.getPosition = function getPosition(str) {
    //MapModal选取的value值
    if (this.props.type === 'polygon') {
      var arr = str.split(',');
      str = str + ',' + arr[0] + ',' + arr[1];
    }
    this.props.getValue(str);
  };

  Bind.prototype.render = function render() {
    var _props = this.props,
        type = _props.type,
        id = _props.id,
        initValue = _props.initValue,
        centerPoint = _props.centerPoint;

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        _antd.Button,
        { type: 'default', onClick: this.showModal, size: 'large' },
        '\u6D4F\u89C8'
      ),
      _react2['default'].createElement(
        _antd.Modal,
        {
          visible: this.state.visible,
          width: mapWidth,
          onOk: this.hideModal, onCancel: this.hideModal,
          style: { top: 0, height: mapHeight },
          footer: null,
          closable: false
        },
        type === 'polygon' ? _react2['default'].createElement(_MapEditorModal2['default'], {
          getValue: this.getPosition,
          hideModal: this.hideModal,
          centerPoint: centerPoint || defaultPosition,
          id: id,
          initValue: initValue
        }) : _react2['default'].createElement(_MapModal2['default'], {
          id: id,
          getValue: this.getPosition,
          hideModal: this.hideModal,
          centerPoint: centerPoint,
          initValue: initValue })
      )
    );
  };

  return Bind;
}(_react2['default'].Component);

Bind.propTypes = {
  type: _propTypes2['default'].string,
  id: _propTypes2['default'].string,
  getValue: _propTypes2['default'].func,
  hideModal: _propTypes2['default'].func,
  initValue: _propTypes2['default'].string,
  centerPoint: _propTypes2['default'].string
};
exports['default'] = Bind;
module.exports = exports['default'];