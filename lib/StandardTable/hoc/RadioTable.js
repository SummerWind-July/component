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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 单选功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

function HOCFactory(WrappedComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_WrappedComponent) {
    _inherits(Enhancer, _WrappedComponent);

    function Enhancer() {
      var _temp, _this, _ret;

      _classCallCheck(this, Enhancer);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _WrappedComponent.call.apply(_WrappedComponent, [this].concat(args))), _this), _this.onSelect = function (row, isSelected) {
        var selectedRowKeys = _this.state.selectedRowKeys;


        var rows = [].concat(_this.props.selectedRows);

        if (isSelected == true) {
          selectedRowKeys = [row.id];
          rows = [row];
        } else if (isSelected == false) {
          selectedRowKeys = [];
          rows = [];
        }

        if (_this.props.onSelectRow) {
          _this.props.onSelectRow(rows);
        }

        _this.setState({ selectedRowKeys: selectedRowKeys });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // 重写，单选功能
    Enhancer.prototype.getSelectRow = function getSelectRow() {
      return {
        mode: "radio",
        clickToSelect: true,
        onSelect: this.onSelect,
        selected: this.state.selectedRowKeys,
        unselectable: this.props.unselectable
      };
    };

    // 单选


    Enhancer.prototype.render = function render() {
      return _WrappedComponent.prototype.render.call(this);
    };

    return Enhancer;
  }(WrappedComponent), _class.displayName = "RadioTable", _temp2;
}

exports['default'] = HOCFactory(_StandardTable2['default']);
module.exports = exports['default'];