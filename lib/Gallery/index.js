'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _Lightbox = require('./Lightbox.js');

var _Lightbox2 = _interopRequireDefault(_Lightbox);

require('./styles/style.css');

var _reactFa = require('react-fa');

var _reactFa2 = _interopRequireDefault(_reactFa);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Created by neo on 15/12/15.
 */
var THUMBNAIL_SIZE = 120;

var defaultStyles = {
  gallery: {
    overflow: 'hidden'
  },
  thumbnail: {
    backgroundSize: 'cover',
    height: 'auto',
    overflow: 'hidden',
    width: THUMBNAIL_SIZE
  },
  thumbnailImage: {
    display: 'block',
    height: 'auto',
    left: '50%',
    position: 'relative',

    WebkitTransform: 'translateX(-50%)',
    MozTransform: 'translateX(-50%)',
    msTransform: 'translateX(-50%)',
    transform: 'translateX(-50%)'
  }
};

var Gallery = (0, _createReactClass2['default'])({
  displayName: 'Gallery',
  propTypes: {
    images: _propTypes2['default'].array,
    heading: _propTypes2['default'].string,
    subheading: _propTypes2['default'].string,
    sepia: _propTypes2['default'].bool,
    style: _propTypes2['default'].object,
    preview: _propTypes2['default'].bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      style: {}
    };
  },
  getInitialState: function getInitialState() {
    return {
      lightboxIsOpen: false,
      currentImage: 0,
      preview: false
    };
  },
  openLightbox: function openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  },
  closeLightbox: function closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  },
  gotoPrevious: function gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  },
  gotoNext: function gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  },
  handleDelete: function handleDelete(obj) {
    this.props.onImageRemove(obj);
  },
  renderGallery: function renderGallery() {
    var _this = this;

    if (!this.props.images) return;

    var _props = this.props,
        style = _props.style,
        preview = _props.preview;


    defaultStyles.thumbnail.width = style.width || defaultStyles.thumbnail.width;
    defaultStyles.thumbnail.height = style.height;

    var cls = (0, _classnames2['default'])({
      "image-list-item": true,
      'preview': !preview ? true : false
    });

    var gallery = this.props.images.map(function (obj, i) {
      return _react2['default'].createElement(
        'li',
        { key: i, className: cls },
        _react2['default'].createElement(
          'a',
          { href: obj.src, onClick: function onClick(event) {
              return _this.openLightbox(i, event);
            },
            style: (0, _objectAssign2['default'])({}, defaultStyles.thumbnail) },
          _react2['default'].createElement('img', { src: obj.src, style: (0, _objectAssign2['default'])({}, obj.style, _this.props.style) || {} })
        ),
        _react2['default'].createElement(
          'p',
          null,
          obj.title
        ),
        _this.props.onImageRemove ? _react2['default'].createElement(
          'div',
          { className: 'image-del' },
          _react2['default'].createElement(
            'span',
            { onClick: _this.handleDelete.bind(_this, obj) },
            _react2['default'].createElement(_reactFa2['default'], {
              name: 'times' })
          )
        ) : null
      );
    });

    return _react2['default'].createElement(
      'div',
      { style: defaultStyles.gallery },
      _react2['default'].createElement(
        'ul',
        { className: 'image-list-group' },
        gallery
      )
    );
  },
  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'section', style: { marginBottom: "15px" } },
      this.props.heading && _react2['default'].createElement(
        'h2',
        null,
        this.props.heading
      ),
      this.props.subheading && _react2['default'].createElement(
        'p',
        null,
        this.props.subheading
      ),
      this.renderGallery(),
      _react2['default'].createElement(_Lightbox2['default'], {
        currentImage: this.state.currentImage,
        images: this.props.images,
        isOpen: this.state.lightboxIsOpen,
        onClickPrev: this.gotoPrevious,
        onClickNext: this.gotoNext,
        onClose: this.closeLightbox,
        width: 1200,
        hasRotate: this.props.hasRotate || false
      })
    );
  }
});

module.exports = Gallery;