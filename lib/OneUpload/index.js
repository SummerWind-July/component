'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description 上传文件组件
 * @attribute
 */
var OneUpload = function (_React$Component) {
  _inherits(OneUpload, _React$Component);

  function OneUpload() {
    _classCallCheck(this, OneUpload);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      fileList: []
    };
    _this.handlePreview = _this.handlePreview.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.componentDidMount = _this.componentDidMount.bind(_this);
    return _this;
  }

  OneUpload.prototype.componentDidMount = function componentDidMount() {
    var fileList = void 0;
    var url = this.props.fileList;
    if (url.length > 0) {
      fileList = url;
    } else {
      fileList = [];
    }
    this.setState({
      previewVisible: false,
      previewImage: '',
      fileList: fileList
    });
  };

  OneUpload.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var fileList = nextProps.fileList;

    if (typeof fileList === 'object' && this.props.fileList !== nextProps.fileList) {
      this.setState({
        fileList: nextProps.fileList
      });
    }
    if (typeof fileList === 'undefined' || fileList === null) {
      this.setState({
        fileList: []
      });
    }
  };

  OneUpload.prototype.handlePreview = function handlePreview(file) {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  OneUpload.prototype.handleChange = function handleChange(_ref) {
    var fileList = _ref.fileList;
    var type = this.props.type;

    if (type && fileList.length) {
      var flag = true;
      type.split(',').forEach(function (v) {
        if (fileList[0].name.indexOf(v) > 0) {
          flag = false;
        }
      });
      if (flag) {
        _antd.message.warn('文件类型不符合要求！');
        return false;
      }
    }
    var data = fileList.map(function (v) {
      return v.response;
    });
    if (fileList[0]) {
      if (fileList[0].status === 'uploading') {
        _antd.message.loading({ content: '上传中...', key: 'oneUpload' });
      } else if (fileList[0].status === 'done') {
        if (fileList[0].response && fileList[0].response.code === 1) {
          _antd.message.error({ content: data.file.response.msg, key: 'oneUpload', duration: 2 });
        } else {
          _antd.message.success({ content: '上传成功!', key: 'oneUpload', duration: 2 });
        }
      } else {
        _antd.message.error({ content: '上传失败!', key: 'oneUpload', duration: 2 });
      }
    }
    if (fileList.length > 1) {
      fileList.shift();
    }
    this.props.onChange(data);
    this.setState({ fileList: fileList });
  };

  OneUpload.prototype.render = function render() {
    var fileList = this.state.fileList;

    var _props = this.props,
        name = _props.name,
        uploadUrl = _props.uploadUrl,
        others = _objectWithoutProperties(_props, ['name', 'uploadUrl']);

    if (fileList.length > 0 && fileList[0].url === '') {
      fileList = [];
    }
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        _antd.Upload,
        _extends({
          name: name || 'filedata',
          action: uploadUrl
        }, others, {
          fileList: fileList,
          onPreview: this.handlePreview,
          onChange: this.handleChange
        }),
        _react2['default'].createElement(
          _antd.Button,
          null,
          _react2['default'].createElement(_antd.Icon, { type: 'upload' }),
          ' \u4E0A\u4F20'
        )
      )
    );
  };

  return OneUpload;
}(_react2['default'].Component);

exports['default'] = OneUpload;
module.exports = exports['default'];
