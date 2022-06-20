'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcDialog = require('rc-dialog');

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _reactDraggable = require('react-draggable');

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

var _close = require('./close.png');

var _close2 = _interopRequireDefault(_close);

require('animate.css');

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel(props) {
    _classCallCheck(this, Panel);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onCancel = function () {
      _this.setState({ mask: false }, function () {
        _this.props.onCancel && _this.props.onCancel();
      });
    };

    _this.onStop = function (e, position) {
      var x = position.x,
          y = position.y;

      _this.setState({ position: { x: x, y: y } }, function () {
        _this.props.onDragStop && _this.props.onDragStop(e, position);
      });
    };

    _this.state = {
      position: props.position,
      currentZIndex: props.zIndex || parseInt(localStorage.getItem('panelIndex') || '1000'),
      mask: props.mask
    };
    return _this;
  }

  Panel.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.position) {
      if (nextProps.position.x !== this.props.position.x || nextProps.position.y !== this.props.position.y) {
        this.setState({ position: nextProps.position });
      }
    }
    if (!this.props.visible && nextProps.visible) {
      var index = nextProps.zIndex ? nextProps.zIndex + 1 : parseInt(localStorage.getItem('panelIndex') || '1000') + 1;
      localStorage.setItem('panelIndex', '' + index);
      this.setState({ currentZIndex: index, mask: nextProps.mask || false });
    }
    if (this.props.mask && !nextProps.mask) {
      this.setState({ mask: nextProps.mask || false });
    }
  };

  Panel.prototype.render = function render() {
    var _props = this.props,
        visible = _props.visible,
        disabled = _props.disabled,
        title = _props.title,
        zIndex = _props.zIndex,
        width = _props.width,
        style = _props.style,
        logo = _props.logo,
        className = _props.className;
    var _state = this.state,
        currentZIndex = _state.currentZIndex,
        mask = _state.mask,
        position = _state.position;

    return _react2['default'].createElement(
      _rcDialog2['default'],
      { visible: visible, mask: mask, zIndex: zIndex || currentZIndex },
      _react2['default'].createElement(
        _reactDraggable2['default'],
        {
          disabled: disabled,
          position: position,
          onStop: this.onStop,
          cancel: 'strong'
        },
        _react2['default'].createElement(
          'div',
          { className: 'KPanel zoomIn animated ' + className, style: _extends({ zIndex: zIndex || currentZIndex }, style, { minWidth: width ? 'auto' : '440px' }) },
          _react2['default'].createElement(
            'div',
            { className: 'KPanel-header' },
            _react2['default'].createElement(
              'div',
              { style: { display: 'flex', position: 'relative' } },
              _react2['default'].createElement('div', { style: { width: '5px', height: '25px', background: 'rgb(53, 158, 251)' } }),
              _react2['default'].createElement('div', { style: { width: '20px', height: '5px', background: 'rgb(53, 158, 251)' } }),
              _react2['default'].createElement('div', { style: { position: 'absolute', top: '1px', left: '25px', right: '20px', height: '1px', background: 'rgb(42, 91, 149)' } }),
              _react2['default'].createElement('div', { style: { position: 'absolute', right: '5px', width: '20px', height: '5px', background: 'rgb(53, 158, 251)' } }),
              _react2['default'].createElement('div', { style: { position: 'absolute', right: 0, width: '5px', height: '25px', background: 'rgb(53, 158, 251)' } })
            ),
            _react2['default'].createElement(
              'div',
              { className: 'titleView' },
              _react2['default'].createElement(
                'div',
                { className: 'title' },
                logo || _react2['default'].createElement('div', { style: { width: '30px' } }),
                title || ''
              ),
              _react2['default'].createElement('img', { className: 'cancelBtn', src: _close2['default'], alt: '', onClick: this.onCancel })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'KPanel-content' },
            _react2['default'].createElement('div', { style: { position: 'absolute', top: '25px', bottom: '25px', left: 0, width: '1px', background: 'rgb(42, 91, 149)' } }),
            _react2['default'].createElement('div', { style: { position: 'absolute', top: '25px', bottom: '25px', right: 0, width: '1px', background: 'rgb(42, 91, 149)' } }),
            _react2['default'].createElement(
              'div',
              { style: { width: width + 65, float: 'right', padding: '5px 15px 0 15px' } },
              _react2['default'].createElement(
                'strong',
                { className: 'no-cursor', style: { cursor: 'default', fontWeight: 'normal' } },
                this.props.children
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'KPanel-footer' },
            _react2['default'].createElement('div', { style: { width: '5px', height: '25px', background: 'rgb(53, 158, 251)' } }),
            _react2['default'].createElement('div', { style: { position: 'absolute', bottom: 0, width: '25px', height: '5px', background: 'rgb(53, 158, 251)' } }),
            _react2['default'].createElement('div', { style: { position: 'absolute', left: '25px', right: '25px', bottom: '1px', height: '1px', background: 'rgb(42, 91, 149)' } }),
            _react2['default'].createElement('div', { style: { position: 'absolute', right: '5px', bottom: 0, width: '20px', height: '5px', background: 'rgb(53, 158, 251)' } }),
            _react2['default'].createElement('div', { style: { position: 'absolute', right: 0, width: '5px', height: '25px', background: 'rgb(53, 158, 251)' } })
          )
        )
      )
    );
  };

  return Panel;
}(_react2['default'].Component);

exports['default'] = Panel;


Panel.propTypes = {
  logo: _propTypes2['default'].node,
  className: _propTypes2['default'].string,
  style: _propTypes2['default'].object,
  width: _propTypes2['default'].number,
  title: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].node]),
  visible: _propTypes2['default'].bool,
  mask: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  zIndex: _propTypes2['default'].number,
  position: _propTypes2['default'].object,
  onCancel: _propTypes2['default'].func,
  onDragStop: _propTypes2['default'].func
};

Panel.defaultProps = {
  className: '',
  style: {},
  width: 350,
  title: '',
  visible: false,
  mask: false,
  disabled: false,
  position: { x: 0, y: 0 }
};
module.exports = exports['default'];