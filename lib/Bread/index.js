'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _router = require('dva/router');

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description JSX 路由
 * @param route 路由对象
 * @param params 参数
 * @param routes 路由数组
 * @param paths 路径名称
 * @returns {} JSX
 */
function itemRender(route, params, routes, paths) {
  var length = routes.length;
  var index = routes.indexOf(route);
  var begin = index === 1;
  var last = index === length - 1;
  //noinspection JSUnresolvedVariable
  if (begin) {
    //noinspection JSUnresolvedVariable
    return _react2['default'].createElement(
      _router.Link,
      { to: '/' + paths.join('/') },
      _react2['default'].createElement(_antd.Icon, { type: 'home' }),
      route.breadcrumbName
    );
  } else if (last) {
    //noinspection JSUnresolvedVariable
    return _react2['default'].createElement(
      'span',
      null,
      route.breadcrumbName
    );
  }
  // noinspection JSUnresolvedVariable
  return _react2['default'].createElement(
    _router.Link,
    { to: '/' + paths.join('/') },
    route.breadcrumbName
  );
}

/**
 * @description 根据传入的路由，返回对应的面包屑
 * @attribute routes 路由信息
 * @attribute params 参数信息
 */

var Bread = function (_React$Component) {
  _inherits(Bread, _React$Component);

  function Bread() {
    _classCallCheck(this, Bread);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Bread.prototype.render = function render() {
    var _props = this.props,
        routes = _props.routes,
        params = _props.params;

    return _react2['default'].createElement(_antd.Breadcrumb, { className: 'zdy', itemRender: itemRender, routes: routes, params: params });
  };

  return Bread;
}(_react2['default'].Component);

exports['default'] = Bread;
module.exports = exports['default'];