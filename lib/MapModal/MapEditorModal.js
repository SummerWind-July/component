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
 * @deacription: 全景图园区、楼宇轮廓绘制
 * @props：
 *
 *    id<string>: 渲染高得地图的容器
 *    getValue<function>: 返回选取的坐标值
 *    hideModal<function> : 关闭模态框
 *    initValue<string>: 初始化时坐标值，
 *    centerPoint<string>: 地图中心点坐标
 */

var mapHeight = window.outerHeight - 100 + 'px';
var defaultPosition = [121.604727, 31.20115];
var styleLabel = {
  position: 'fixed',
  top: '10px',
  left: '50%',
  padding: '5px 10px',
  background: '#fff',
  zIndex: 100,
  marginLeft: '-200px',
  width: '400px',
  textAlign: 'center'
};

var script1 = document.createElement("script");
script1.src = 'http://webapi.amap.com/maps?v=1.4.1&key=71cb242717a38b3104bc787f8bc38612';
document.body.appendChild(script1);

var script2 = document.createElement("script");
script2.src = 'http://webapi.amap.com/ui/1.0/main.js';
document.body.appendChild(script2);

var MapModal = function (_React$Component) {
  _inherits(MapModal, _React$Component);

  function MapModal(props) {
    _classCallCheck(this, MapModal);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      map: null,
      editor: null,
      draw: null,
      polygon: null,
      path: [],
      disabledEditor: true, //是否能编辑
      disabledReturn: true, //是否可返回值
      disabledDraw: false //是否可绘制
    };
    _this.editorClose = _this.editorClose.bind(_this);
    _this.editorOpen = _this.editorOpen.bind(_this);
    _this.string2Coords = _this.string2Coords.bind(_this);
    _this.drawClose = _this.drawClose.bind(_this);
    _this.drawStart = _this.drawStart.bind(_this);
    _this.sendValue = _this.sendValue.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    _this.drawPolygon = _this.drawPolygon.bind(_this);
    _this.editPolygon = _this.editPolygon.bind(_this);

    return _this;
  }

  MapModal.prototype.editorOpen = function editorOpen() {
    this.state.editor.open();
    //编辑开始时不能返回数据
    this.setState({
      disabledReturn: true
    });
  };

  MapModal.prototype.editorClose = function editorClose() {
    //关闭编辑
    this.state.editor.close();
    //编辑结束才能返回数据
    this.setState({
      disabledReturn: false
    });
  };

  MapModal.prototype.drawClose = function drawClose() {
    //清空画布
    this.state.draw.close(true);
    this.state.draw.polygon();
    //清空数据
    this.setState({
      path: []
    });
  };

  MapModal.prototype.drawStart = function drawStart() {
    this.state.draw.polygon();
  };

  MapModal.prototype.sendValue = function sendValue() {
    //返回值，关闭模态框
    var path = this.state.path.toString();
    this.props.getValue(path);
    this.props.hideModal();
  };

  MapModal.prototype.handleCancel = function handleCancel() {
    //关闭模态框
    this.props.hideModal();
  };

  MapModal.prototype.string2Coords = function string2Coords(type, value) {
    if (type === 'point') {
      if (typeof value === 'object') {
        return value;
      } else {
        return value.split(',');
      }
    }

    if (type === 'polygon') {
      var arr = [];
      value = value.split(',');
      for (var i = 0; i < value.length; i += 2) {
        arr.push([value[i], value[i + 1]]);
      }
      return arr;
    }
  };

  MapModal.prototype.editPolygon = function editPolygon(path) {

    this.setState({
      path: path //编辑初始值
    });
    var that = this;
    var map = this.state.map;
    var polygon = new AMap.Polygon({
      map: map,
      path: path,
      strokeColor: '#2f9cfd',
      strokeOpacity: 1,
      strokeWeight: 3,
      fillColor: '#2f9cfd',
      fillOpacity: 0.25
    });

    this.state.polygon = polygon;
    map.plugin(['AMap.PolyEditor'], function () {
      var polygonEditor = new AMap.PolyEditor(map, polygon);
      that.state.editor = polygonEditor;
      that.setState({
        disabledEditor: false,
        disabledDraw: true
      });

      AMap.event.addListener(polygonEditor, 'end', function (data) {
        //编辑结束
        var path = data.target.getPath();
        //更新为编辑后的值
        that.setState({
          path: path

        });
      });
    });
  };

  MapModal.prototype.drawPolygon = function drawPolygon() {
    this.setState({
      disabledDraw: false, //启动绘制按钮
      disabledEditor: true
    });
    var map = this.state.map;
    var that = this;
    map.plugin(['AMap.PolyEditor', 'AMap.MouseTool'], function () {
      //绘制多边形
      var mouseTool = new AMap.MouseTool(map);
      that.state.draw = mouseTool;

      AMap.event.addListener(mouseTool, 'draw', function (data) {

        if (data.type === 'draw') {
          //绘制完成，关闭绘制
          mouseTool.close(false);

          //获取绘制多边形形对象及坐标值
          var obj = data.obj;
          var path = data.obj.getPath();
          that.setState({
            path: path,
            disabledEditor: false,
            disabledReturn: false,
            polygon: obj
          });

          //添加编辑功能
          var polygonEditor = new AMap.PolyEditor(map, obj);
          that.state.editor = polygonEditor;
          AMap.event.addListener(polygonEditor, 'end', function (data) {
            //编辑结束
            var path = data.target.getPath();
            //更新为编辑后的值
            that.setState({
              path: path

            });
          });
        }
      });
    });
  };

  MapModal.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        centerPoint = _props.centerPoint,
        initValue = _props.initValue;

    if (typeof centerPoint === 'string') {
      centerPoint = this.string2Coords('point', centerPoint);
    }

    var that = this;
    //生成地图
    var map = new AMap.Map(this._cont, {
      zoom: 17,
      resizeEnable: true,
      center: centerPoint
    });
    this.state.map = map;

    //有初始化值，生成多边形对象，编辑
    if (initValue) {
      var path = this.string2Coords('polygon', initValue);
      this.editPolygon(path);
    } else {
      //无初始化值，先绘制多边形对象，再编辑
      this.drawPolygon();
    }
  };

  MapModal.prototype.componentWillUnmount = function componentWillUnmount() {};

  MapModal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    //编辑时重新定位

    var initValue = nextProps.initValue;

    if (nextProps.centerPoint !== this.props.centerPoint) {
      //改变地图中心点
      var centerpoint = this.string2Coords('point', nextProps.centerPoint);
      this.state.map.setCenter(centerpoint);
    }

    if (initValue !== this.props.initValue) {
      this.state.map.clearMap();
      if (initValue) {
        var path = this.string2Coords('polygon', initValue);
        this.editPolygon(path);
      } else {
        //无初始化值，先绘制多边形对象，再编辑
        this.setState({
          path: [] //清空input
        });
        this.drawPolygon();
      }
    } else {
      //两次值都为空
      if (!initValue) {
        this.state.map.clearMap();
        this.setState({
          path: [] //清空input
        });
        this.drawPolygon();
      }
    }
  };

  MapModal.prototype.render = function render() {
    var _this2 = this;

    var container = this.props.id;
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        { style: styleLabel },
        _react2['default'].createElement(
          'div',
          { style: { display: 'inline-block' } },
          _react2['default'].createElement(
            _antd.Button,
            { type: 'primary', style: {}, onClick: this.drawStart, disabled: this.state.disabledDraw },
            '\u5F00\u59CB\u7ED8\u5236'
          ),
          _react2['default'].createElement(
            _antd.Button,
            { type: 'default', style: { marginLeft: '15px' }, onClick: this.drawClose, disabled: this.state.disabledDraw },
            '\u91CD\u65B0\u7ED8\u5236'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: { display: 'inline-block' } },
          _react2['default'].createElement(
            _antd.Button,
            { type: 'primary', style: { marginLeft: '15px' }, onClick: this.editorOpen, disabled: this.state.disabledEditor },
            '\u5F00\u59CB\u7F16\u8F91'
          ),
          _react2['default'].createElement(
            _antd.Button,
            { type: 'primary', style: { marginLeft: '15px' }, onClick: this.editorClose, disabled: this.state.disabledEditor },
            '\u7ED3\u675F\u7F16\u8F91'
          )
        ),
        _react2['default'].createElement(
          'p',
          { style: { fontSize: '12px', textAlign: 'left' } },
          '*\u70B9\u51FB\u5F00\u59CB\u7ED8\u5236\u6309\u94AE\uFF0C\u9F20\u6807\u5728\u5730\u56FE\u4E0A\u5355\u51FB\u3001\u62D6\u52A8\u7ED8\u5236\uFF0C\u53CC\u51FB\u7ED3\u675F\u7ED8\u5236'
        ),
        _react2['default'].createElement(
          'div',
          { style: { margin: '8px 0' } },
          '\u5750\u6807\u503C\uFF1A',
          _react2['default'].createElement(_antd.Input, { type: 'text', value: this.state.path.toString(), readOnly: true, style: { width: '300px', overflowX: 'scroll' } })
        ),
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _antd.Button,
            { type: 'default', onClick: this.handleCancel },
            '\u53D6\u6D88'
          ),
          _react2['default'].createElement(
            _antd.Button,
            { type: 'primary', style: { marginLeft: '16px' }, onClick: this.sendValue, disabled: this.state.disabledReturn },
            '\u786E\u5B9A'
          )
        )
      ),
      _react2['default'].createElement('div', { ref: function ref(c) {
          return _this2._cont = c;
        }, id: container, style: { width: '100%', height: mapHeight } })
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