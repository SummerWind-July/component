'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var uid = 0;

/**
 * @description 上传图片组件
 * @attribute uploadUrl 上传图片的链接地址
 */

var OneImg = function (_React$Component) {
  _inherits(OneImg, _React$Component);

  function OneImg() {
    _classCallCheck(this, OneImg);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: []
    };
    _this.handleCancel = _this.handleCancel.bind(_this);
    _this.handlePreview = _this.handlePreview.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.componentDidMount = _this.componentDidMount.bind(_this);
    return _this;
  }

  OneImg.prototype.componentDidMount = function componentDidMount() {
    var fileList = void 0;
    var url = this.props.fileList;
    if (url) {
      fileList = [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: url
      }];
    } else {
      fileList = [];
    }
    this.setState({
      previewVisible: false,
      previewImage: '',
      fileList: fileList
    });
  };

  OneImg.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var fileList = nextProps.fileList;

    if (typeof fileList === 'string' && this.props.fileList !== fileList) {
      this.setState({
        fileList: [{
          uid: uid++,
          name: nextProps.fileList.split('.').pop(),
          status: 'done',
          url: nextProps.fileList
        }]
      });
    }
    if (typeof fileList === 'undefined' || fileList === null) {
      this.setState({
        fileList: []
      });
    }
  };

  OneImg.prototype.handleCancel = function handleCancel() {
    this.setState({ previewVisible: false });
  };

  OneImg.prototype.handlePreview = function handlePreview(file) {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  OneImg.prototype.handleChange = function handleChange(_ref) {
    var fileList = _ref.fileList;
    var type = this.props.type;

    if (type && fileList.length) {
      if (fileList[0].name.indexOf(type) < 0) {
        _antd.message.warn('文件必须为ico类型');
        return false;
      }
    }
    var data = fileList.map(function (v) {
      return v.response;
    });
    if (fileList.length > 1) {
      fileList.shift();
    }
    this.props.onChange(data);
    this.setState({ fileList: fileList });
  };

  OneImg.prototype.render = function render() {
    var props = this.props;
    var _state = this.state,
        previewVisible = _state.previewVisible,
        previewImage = _state.previewImage;

    var fileList = this.state.fileList;
    if (fileList.length > 0 && fileList[0].url === '') {
      fileList = [];
    }

    var uploadButton = _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_antd.Icon, { type: 'plus' }),
      _react2['default'].createElement(
        'div',
        { className: 'ant-upload-text' },
        '\u4E0A\u4F20\u56FE\u7247'
      )
    );
    var _props = this.props,
        uploadUrl = _props.uploadUrl,
        name = _props.name;

    return _react2['default'].createElement(
      'div',
      { className: 'clearfix' },
      _react2['default'].createElement(
        _antd.Upload,
        {
          name: name || 'filedata',
          action: uploadUrl,
          fileList: fileList,
          onPreview: this.handlePreview,
          onChange: this.handleChange,
          listType: 'picture-card'
        },
        fileList.length >= 1 ? null : uploadButton
      ),
      _react2['default'].createElement(
        _antd.Modal,
        { visible: previewVisible, footer: null, onCancel: this.handleCancel },
        _react2['default'].createElement('img', { src: previewImage, alt: 'example', style: { width: '100%' } })
      )
    );
  };

  return OneImg;
}(_react2['default'].Component);

exports['default'] = OneImg;
module.exports = exports['default'];