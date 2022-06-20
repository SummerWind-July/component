'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Auth = function (_Component) {
  _inherits(Auth, _Component);

  function Auth(props) {
    _classCallCheck(this, Auth);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.getData = function (authUrl) {
      _axios2['default'].get(authUrl + '?auth=true').then(function (r) {
        _this.setState({ tips: r || {} });
      });
    };

    _this.getTips = function (tips) {
      if (!tips.code) {
        return false;
      }
      if (tips.code === 403) {
        return _react2['default'].createElement(
          'div',
          { className: 'authTips' },
          _this.props.authTips
        );
      }
      if (tips.code === 509) {
        return _react2['default'].createElement(
          'div',
          { className: 'authTips' },
          tips.msg
        );
      }
    };

    _this.state = {
      tips: {}
    };
    return _this;
  }

  Auth.prototype.componentDidMount = function componentDidMount() {
    var authUrl = this.props.authUrl;

    this.getData(authUrl);
  };

  Auth.prototype.render = function render() {
    var tips = this.state.tips;

    return _react2['default'].createElement(
      'span',
      null,
      this.getTips(tips) || this.props.children
    );
  };

  return Auth;
}(_react.Component);

exports['default'] = Auth;


Auth.propTypes = {
  authUrl: _propTypes2['default'].string,
  authTips: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].node])
};

Auth.defaultProps = {
  authUrl: '',
  authTips: '对不起，您没有该项权限'
};
module.exports = exports['default'];