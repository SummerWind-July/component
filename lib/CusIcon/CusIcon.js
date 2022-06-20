'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./icon.css');

require('./iconfont.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CusIcon = function CusIcon(props) {
  var type = props.type,
      fontSize = props.fontSize,
      spin = props.spin;

  var typeIcon = void 0;
  if (spin) typeIcon = type + '-spin';else typeIcon = type;
  return _react2['default'].createElement('i', { className: 'iconfont ux-icon-' + typeIcon,
    style: { fontSize: fontSize }
  });
};

exports['default'] = CusIcon;
module.exports = exports['default'];