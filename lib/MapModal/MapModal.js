'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @deacription: 全景图园区定位坐标点选取
 * @props：
 *    id<string>: 渲染高得地图的容器
 *    getValue<function>: 返回选取的坐标值
 *    hideModal<function> : 关闭模态框
 *    initValue<string>: 初始化时坐标值，
 *    centerPoint<string>: 地图中心点坐标
 *
 */

var script1 = document.createElement("script");
script1.src = 'http://webapi.amap.com/maps?v=1.4.1&key=71cb242717a38b3104bc787f8bc38612';
document.body.appendChild(script1);

var script2 = document.createElement("script");
script2.src = 'http://webapi.amap.com/ui/1.0/main.js';
document.body.appendChild(script2);

var mapHeight = window.outerHeight - 100 + 'px';
var defaultPosition = [121.604727, 31.20115];
var styleLabel = {
  position: 'fixed',
  top: '10px',
  left: '50%',
  padding: '5px 10px',
  border: '1px solid #d3d3d3',
  background: '#fff',
  width: '560px',
  marginLeft: '-280px'
};

var MapModal = function (_React$Component) {
  _inherits(MapModal, _React$Component);

  function MapModal(props) {
    _classCallCheck(this, MapModal);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      map: null,
      point: null
    };
    _this.string2coord = _this.string2coord.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    _this.sendValue = _this.sendValue.bind(_this);
    return _this;
  }

  MapModal.prototype.string2coord = function string2coord(value) {
    if (typeof value === 'object') {
      return value;
    }
    if (typeof value === 'string' && value) {
      return value.split(',');
    }
  };

  MapModal.prototype.componentDidMount = function componentDidMount() {
    var that = this;

    AMapUI.loadUI(['misc/PositionPicker'], function (PositionPicker) {
      var center = '';
      var _that$props = that.props,
          initValue = _that$props.initValue,
          centerPoint = _that$props.centerPoint;

      if (initValue) {
        center = that.string2coord(initValue);
      } else if (centerPoint) {
        center = that.string2coord(centerPoint);
      } else {
        center = defaultPosition;
      }
      var map = new AMap.Map(that._cont, {
        zoom: 17,
        scrollWheel: false,
        center: center
      });
      that.state.map = map;
      that.setState({
        point: center.toString()
      });
      map.on('complete', function (d) {

        if (d.type === 'complete') {

          var positionPicker = new PositionPicker({
            mode: 'drapMap',
            map: map
          });

          positionPicker.on('success', function (positionResult) {
            var p = positionResult.position;
            that.setState({
              point: p.toString()
            });
          });

          positionPicker.on('fail', function (positionResult) {
            console.log('坐标选取失败！', positionResult.position);
            that.state.map.setCenter(center);
          });

          positionPicker.start();
          //手动添加图片，触发事件
          positionPicker.customControl.addTo();
          map.on('moveend', positionPicker._eventHandlers.onMapDragEnd);

          map.plugin(['AMap.ToolBar'], function () {
            map.addControl(new AMap.ToolBar({
              liteStyle: true,
              position: 'RT'
            }));
          });
        }
      });
    });
  };

  MapModal.prototype.componentWillUnmount = function componentWillUnmount() {};

  MapModal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    //编辑时重新定位
    var value = nextProps.initValue;

    if (value !== this.props.initValue) {
      var center = defaultPosition;
      if (value) {
        center = value;
      } else if (nextProps.centerPoint) {
        center = nextProps.centerPoint;
      }

      this.state.map.setCenter(this.string2coord(center));
      this.setState({
        point: center
      });
    }
  };

  MapModal.prototype.sendValue = function sendValue() {
    //返回值，关闭模态框
    var point = this.state.point;
    this.props.getValue(point);
    this.props.hideModal();
  };

  MapModal.prototype.handleCancel = function handleCancel() {
    //关闭模态框
    this.props.hideModal();
  };

  MapModal.prototype.render = function render() {
    var _this2 = this;

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement('div', { ref: function ref(c) {
          return _this2._cont = c;
        }, id: this.props.id, style: { width: '100%', height: mapHeight } }),
      _react2['default'].createElement(
        'div',
        { style: styleLabel },
        _react2['default'].createElement(
          'h2',
          { style: { display: 'inline-block' } },
          '\u62D6\u52A8\u5730\u56FE\u9009\u53D6\u70B9\u5750\u6807\uFF1A',
          this.state.point
        ),
        _react2['default'].createElement(
          _antd.Button,
          { type: 'default', style: { marginLeft: '16px', float: 'right' }, onClick: this.handleCancel },
          '\u53D6\u6D88'
        ),
        _react2['default'].createElement(
          _antd.Button,
          { type: 'primary', style: { marginLeft: '16px', float: 'right' }, onClick: this.sendValue },
          '\u786E\u5B9A'
        )
      )
    );
  };

  return MapModal;
}(_react2['default'].Component);

MapModal.propTypes = {
  id: _propTypes2['default'].string,
  getValue: _propTypes2['default'].func,
  hideModal: _propTypes2['default'].func,
  initValue: _propTypes2['default'].string,
  centerPoint: _propTypes2['default'].string
};
exports['default'] = MapModal;
module.exports = exports['default'];