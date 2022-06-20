'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _Gallery = require('../Gallery');

var _Gallery2 = _interopRequireDefault(_Gallery);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _isNaN = require('lodash/isNaN');

var _isNaN2 = _interopRequireDefault(_isNaN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  marginRight: '10px'
};

var UploadList = function (_React$Component) {
  _inherits(UploadList, _React$Component);

  function UploadList() {
    _classCallCheck(this, UploadList);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  UploadList.prototype.handleImageRemove = function handleImageRemove(img) {
    var arr = [];
    if (this.props.items) {
      arr = this.props.items.filter(function (file) {
        return file.key == img.id;
      });
    }

    this.props.onRemove && this.props.onRemove(arr[0]);
  };

  UploadList.prototype.renderGallery = function renderGallery() {
    var images = [];

    if (this.props.items) {
      images = this.props.items.map(function (file) {
        return {
          id: file.key,
          src: file.src,
          title: file.title
        };
      });
    }

    return images;
  };

  UploadList.prototype.renderGallerBox = function renderGallerBox() {

    return _react2['default'].createElement(_Gallery2['default'], { preview: this.props.preview || false, onImageRemove: this.handleImageRemove.bind(this),
      images: this.renderGallery(), thumbnailStyle: this.getSize() });
  };

  UploadList.prototype.getSize = function getSize() {
    var aspectRatio = 1;

    if (this.props.aspectRatio && !(0, _isNaN2['default'])(this.props.aspectRatio)) {

      aspectRatio = this.props.aspectRatio;
    }

    var thumbnailHeight = this.props.width / aspectRatio;

    var thumbnailStyle = {
      height: Math.floor(thumbnailHeight),
      width: this.props.width
    };

    return thumbnailStyle;
  };

  UploadList.prototype.getSingleImg = function getSingleImg() {
    var image = "";

    if (this.props.items && this.props.items.length >= 0) {
      image = this.props.items[0].src;
    }

    return _react2['default'].createElement('img', { className: 'upload-input-img', style: this.getSize(), src: image, alt: '' });
  };

  UploadList.prototype.renderImg = function renderImg() {
    if (this.props.multi) return this.renderGallerBox();else return this.getSingleImg();
  };

  UploadList.prototype.render = function render() {

    return _react2['default'].createElement(
      'div',
      { style: (0, _objectAssign2['default'])({}, styles, this.props.styles) },
      this.renderImg()
    );
  };

  return UploadList;
}(_react2['default'].Component);

UploadList.defaultProps = {
  listType: 'picture', // or text
  items: [],
  progressAttr: {
    strokeWidth: 3,
    showInfo: false
  },
  multi: true,
  styles: {}
};
exports['default'] = UploadList;
module.exports = exports['default'];