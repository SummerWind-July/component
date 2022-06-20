'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Created by neo on 16/4/22.
                                                                                                                                                                                                                              */


var TableFilter = (0, _createReactClass2['default'])({
  displayName: 'TableFilter',
  render: function render() {
    var _classNames;

    var _props = this.props,
        className = _props.className,
        others = _objectWithoutProperties(_props, ['className']);

    var classes = (0, _classnames2['default'])((_classNames = {
      'table-filter': true,
      'clearfix': true
    }, _classNames[className] = className, _classNames));

    return _react2['default'].createElement('div', _extends({}, others, { className: classes }));
  }
});

exports['default'] = TableFilter;
module.exports = exports['default'];