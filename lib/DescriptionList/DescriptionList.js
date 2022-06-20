'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Description = require('./Description');

var _Description2 = _interopRequireDefault(_Description);

var _chunk = require('lodash/chunk');

var _chunk2 = _interopRequireDefault(_chunk);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DescriptionList = function (_React$Component) {
  _inherits(DescriptionList, _React$Component);

  function DescriptionList(props) {
    _classCallCheck(this, DescriptionList);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {};
    return _this;
  }

  DescriptionList.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        layout = _props.layout,
        col = _props.col,
        gutter = _props.gutter,
        size = _props.size;

    var column = col > 4 ? 4 : col;
    var clsnames = 'descriptionList' + ' ' + size + ' ' + layout;
    var rowArray = [];
    if (children) {
      rowArray = Array.isArray(children) ? (0, _chunk2['default'])(children, column) : [children];
    }

    return _react2['default'].createElement(
      'div',
      { className: clsnames },
      _react2['default'].createElement(
        _antd.Row,
        { gutter: gutter },
        rowArray.map(function (row, rowindex) {
          var rowArr = row.length ? row : [row];
          return _react2['default'].createElement(
            'div',
            { key: rowindex, style: { display: 'flow-root' } },
            rowArr.map(function (child, index) {
              return _react2['default'].createElement(
                _Description2['default'],
                {
                  term: child.props.term,
                  labelStyle: child.props.labelStyle,
                  contentStyle: child.props.contentStyle,
                  type: child.props.type,
                  images: child.props.images,
                  columns: child.props.columns,
                  column: column,
                  key: index
                },
                child.props.children
              );
            })
          );
        })
      )
    );
  };

  return DescriptionList;
}(_react2['default'].Component);

DescriptionList.propTypes = {
  layout: _propTypes2['default'].string,
  col: _propTypes2['default'].number,
  gutter: _propTypes2['default'].number,
  size: _propTypes2['default'].string
};
DescriptionList.defaultProps = {
  layout: 'horizontal',
  col: 3,
  gutter: 32,
  size: ''
};

exports['default'] = DescriptionList;
module.exports = exports['default'];