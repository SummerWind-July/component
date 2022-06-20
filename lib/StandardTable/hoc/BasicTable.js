'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StandardTable = require('../StandardTable');

var _StandardTable2 = _interopRequireDefault(_StandardTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 基本Table
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 无选择功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

function HOCFactory(WrappedComponent) {
  var _class, _temp;

  return _temp = _class = function (_WrappedComponent) {
    _inherits(Enhancer, _WrappedComponent);

    function Enhancer() {
      _classCallCheck(this, Enhancer);

      return _possibleConstructorReturn(this, _WrappedComponent.apply(this, arguments));
    }

    // 重写，禁用了勾选功能
    Enhancer.prototype.getSelectRow = function getSelectRow() {
      return {};
    };

    Enhancer.prototype.render = function render() {
      return _WrappedComponent.prototype.render.call(this);
    };

    return Enhancer;
  }(WrappedComponent), _class.displayName = "BasicTable", _temp;
}

exports['default'] = HOCFactory(_StandardTable2['default']);
module.exports = exports['default'];