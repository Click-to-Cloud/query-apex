var pageComponent =
webpackJsonppageComponent([16],{

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _fieldSoy = __webpack_require__(273);

var _fieldSoy2 = _interopRequireDefault(_fieldSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wfxCY = function (_Component) {
  _inherits(wfxCY, _Component);

  function wfxCY() {
    _classCallCheck(this, wfxCY);

    return _possibleConstructorReturn(this, (wfxCY.__proto__ || Object.getPrototypeOf(wfxCY)).apply(this, arguments));
  }

  return wfxCY;
}(_metalComponent2.default);

;

_metalSoy2.default.register(wfxCY, _fieldSoy2.default);

exports.default = wfxCY;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.wfxCY = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from field.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace wfxCY.
   * @public
   */

  goog.module('wfxCY.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param522 = function param522() {
      ie_open('h6');
      var dyn29 = opt_data.page.description;
      if (typeof dyn29 == 'function') dyn29();else if (dyn29 != null) itext(dyn29);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('selectField');
      ie_close('h2');
      ie_open('h4');
      itext('public Query selectField(String field)');
      ie_close('h4');
      ie_open('p');
      itext('Select a specific field.');
      ie_close('p');
      ie_open('p');
      itext('field: Name of one field, or multiple field names separated by \',\'.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    selectField(\'Name\').\n    selectField(\'OwnerId\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h2');
      itext('selectFields');
      ie_close('h2');
      ie_open('p');
      itext('Select specific fields.');
      ie_close('p');
      ie_open('h4');
      itext('public Query selectFields(String field)');
      ie_close('h4');
      ie_open('p');
      itext('field: Name of one field, or multiple field names separated by \',\'.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    selectFields(\'Name\').\n    selectFields(\'OwnerId, CreatedById\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query selectFields(List<String> fieldList)');
      ie_close('h4');
      ie_open('p');
      itext('fieldList: A list of field names.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    selectFields(new List<String>{\'OwnerId\', \'CreatedById\'});', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query selectFields(Set<String> fieldSet)');
      ie_close('h4');
      ie_open('p');
      itext('fieldSet: A Set of field names.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    selectFields(new Set<String>{\'OwnerId\', \'CreatedById\'});', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('h2');
      itext('selectAllFields');
      ie_close('h2');
      ie_open('h4');
      itext('public Query selectAllFields()');
      ie_close('h4');
      ie_open('p');
      itext('Select all accessible fields in the current object');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    selectAllFields();', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query selectAllFields(String parentField)');
      ie_close('h4');
      ie_open('p');
      itext('Select all accessible fields in the parent field');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    selectAllFields(\'Owner\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param522 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'wfxCY.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var wfxCY = function (_Component) {
  _inherits(wfxCY, _Component);

  function wfxCY() {
    _classCallCheck(this, wfxCY);

    return _possibleConstructorReturn(this, (wfxCY.__proto__ || Object.getPrototypeOf(wfxCY)).apply(this, arguments));
  }

  return wfxCY;
}(_metalComponent2.default);

_metalSoy2.default.register(wfxCY, templates);
exports.wfxCY = wfxCY;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[272]);