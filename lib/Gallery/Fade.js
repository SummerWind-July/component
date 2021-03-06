'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Fade = (0, _createReactClass2['default'])({
  displayName: 'Fade',
  getDefaultProps: function getDefaultProps() {
    return {
      duration: 200
    };
  },

  componentWillAppear: function componentWillAppear(callback) {
    setTimeout(callback, 1); // need at least one tick to fire transition
  },
  componentDidAppear: function componentDidAppear() {
    this._showElement();
  },
  componentWillEnter: function componentWillEnter(callback) {
    setTimeout(callback, 1);
  },
  componentDidEnter: function componentDidEnter() {
    this._showElement();
  },
  componentWillLeave: function componentWillLeave(callback) {
    this._hideElement();
    setTimeout(callback, this.props.duration);
  },
  componentDidLeave: function componentDidLeave() {},
  _showElement: function _showElement() {
    var el = this.element;
    el.style.opacity = 1;
  },
  _hideElement: function _hideElement() {
    var el = this.element;
    el.style.opacity = 0;
  },
  render: function render() {
    var _this = this;

    var defaultStyle = {
      opacity: 0,
      WebkitTransition: 'opacity ' + this.props.duration + 'ms ease-out',
      msTransition: 'opacity ' + this.props.duration + 'ms ease-out',
      transition: 'opacity ' + this.props.duration + 'ms ease-out'
    };

    var _props = this.props,
        duration = _props.duration,
        style = _props.style,
        others = _objectWithoutProperties(_props, ['duration', 'style']);

    return _react2['default'].createElement('div', _extends({ ref: function ref(element) {
        return _this.element = element;
      } }, others, { style: (0, _objectAssign2['default'])({}, defaultStyle, style) }));
  }
});

module.exports = Fade;