'use strict';

exports.__esModule = true;

var _FormTable = require('./FormTable');

var _FormTable2 = _interopRequireDefault(_FormTable);

var _CheckTableList = require('./CheckTableList');

var _CheckTableList2 = _interopRequireDefault(_CheckTableList);

var _RadioTableList = require('./RadioTableList');

var _RadioTableList2 = _interopRequireDefault(_RadioTableList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_FormTable2['default'].CheckTableList = _CheckTableList2['default'];
_FormTable2['default'].RadioTableList = _RadioTableList2['default'];

exports['default'] = _FormTable2['default'];
module.exports = exports['default'];