'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CascadeSelect = function (_React$Component) {
  _inherits(CascadeSelect, _React$Component);

  function CascadeSelect() {
    _classCallCheck(this, CascadeSelect);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.changeItem = function (key, value) {
      _this.state[key] = value;
      _this.setState({});
      var notNull = {};
      Object.keys(_this.state).forEach(function (v) {
        if (_this.state[v] !== null) {
          notNull[v] = _this.state[v];
        }
      });
      if (_this.props.onChange) {
        _this.props.onChange(notNull);
      }
    };

    _this.state = {};
    return _this;
  }

  CascadeSelect.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    this.props.children.map(function (v) {
      _this2.state[v.key] = null;
    });
  };

  CascadeSelect.prototype.render = function render() {
    var _this3 = this;

    return _react2['default'].createElement(
      'div',
      null,
      this.props.children.map(function (v) {
        var param = v.props.param;

        var args = _extends({}, v.props, {
          value: _this3.state[v.key],
          onChange: function onChange(value) {
            return _this3.changeItem(v.key, value);
          }
        });
        if (param) {
          args.param = _this3.state[param];
        }
        var dom = (0, _react.cloneElement)(v, args);
        return dom;
      })
    );
  };

  return CascadeSelect;
}(_react2['default'].Component);

exports['default'] = CascadeSelect;
// class CascadeSelect extends React.Component{
//   componentWillReceiveProps(){
//
//   }
//   fetchData(){
//     axios({
//       url: `${this.props.url}/${this.props[this.props.params]}`
//     })
//   }
//   render(){
//     return (<div>
//       <Select onChange={(val) => this.props.onChange(this.props.key, val)}></Select>
//     </div> )
//   }
// }

module.exports = exports['default'];