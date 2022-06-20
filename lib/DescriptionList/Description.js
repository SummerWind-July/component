'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _component = require('component');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var responsive = {
  1: { xs: 24 },
  2: { xs: 24, sm: 12 },
  3: { xs: 24, sm: 12, md: 8 },
  4: { xs: 24, sm: 12, md: 6 },
  5: { xs: 24, sm: 16 },
  6: { xs: 24, sm: 18 }
};

var Description = function (_React$Component) {
  _inherits(Description, _React$Component);

  function Description(props) {
    _classCallCheck(this, Description);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {};
    return _this;
  }

  Description.prototype.getColumn = function getColumn() {
    var _props = this.props,
        columns = _props.columns,
        column = _props.column;

    var col = column;
    if (columns) {
      switch (column) {
        case 1:
          col = 1;
          break;
        case 2:
          if (columns == 2) col = 1;
          break;
        case 3:
          if (columns == 2) col = 5;else if (columns == 3) col = 1;
          break;
        case 4:
          if (columns == 2) col = 2;else if (columns == 3) col = 6;else if (columns == 4) col = 1;
          break;
        default:
          break;
      }
    }
    return col;
  };

  Description.prototype.render = function render() {
    var _props2 = this.props,
        term = _props2.term,
        type = _props2.type,
        images = _props2.images,
        labelStyle = _props2.labelStyle,
        contentStyle = _props2.contentStyle;

    var column = this.getColumn();
    var ele = void 0;
    if (type && type === 'image') {
      if (term) ele = _react2['default'].createElement(
        _antd.Col,
        { span: 24 },
        _react2['default'].createElement(
          'div',
          { className: 'description-label', style: labelStyle },
          this.props.term
        ),
        _react2['default'].createElement(
          'div',
          { className: 'description-detail' },
          _react2['default'].createElement(_component.Gallery, { images: images })
        )
      );else ele = _react2['default'].createElement(
        _antd.Col,
        { span: 23, offset: 1 },
        _react2['default'].createElement(_component.Gallery, { images: images })
      );
    } else ele = _react2['default'].createElement(
      _antd.Col,
      responsive[column],
      _react2['default'].createElement(
        'div',
        { className: 'description-label', style: labelStyle },
        this.props.term
      ),
      _react2['default'].createElement(
        'div',
        { className: 'description-detail', style: contentStyle },
        this.props.children
      )
    );

    return _react2['default'].createElement(
      'div',
      null,
      ele
    );
  };

  return Description;
}(_react2['default'].Component);

Description.propTypes = {
  term: _propTypes2['default'].string,
  labelStyle: _propTypes2['default'].object,
  contentStyle: _propTypes2['default'].object,
  type: _propTypes2['default'].string,
  images: _propTypes2['default'].array,
  columns: _propTypes2['default'].number
};
Description.defaultProps = {
  term: '',
  labelStyle: {},
  contentStyle: {},
  type: '',
  images: []
};

exports['default'] = Description;
module.exports = exports['default'];