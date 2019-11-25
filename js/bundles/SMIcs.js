var pageComponent =
webpackJsonppageComponent([19],{

/***/ 274:
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

var _fieldSoy = __webpack_require__(275);

var _fieldSoy2 = _interopRequireDefault(_fieldSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SMIcs = function (_Component) {
  _inherits(SMIcs, _Component);

  function SMIcs() {
    _classCallCheck(this, SMIcs);

    return _possibleConstructorReturn(this, (SMIcs.__proto__ || Object.getPrototypeOf(SMIcs)).apply(this, arguments));
  }

  return SMIcs;
}(_metalComponent2.default);

;

_metalSoy2.default.register(SMIcs, _fieldSoy2.default);

exports.default = SMIcs;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.SMIcs = undefined;

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
   * @fileoverview Templates in namespace SMIcs.
   * @public
   */

  goog.module('SMIcs.incrementaldom');

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
    var param653 = function param653() {
      ie_open('h6');
      var dyn30 = opt_data.page.description;
      if (typeof dyn30 == 'function') dyn30();else if (dyn30 != null) itext(dyn30);
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
      itext('field: API name of the field. Can also be a field of a parent, e.g. \'Owner.Name\'.');
      ie_close('p');
      $templateAlias2({ code: 'Query query =\n    new Query(\'Account\').\n    selectField(\'Name\').\n    selectField(\'Owner.Name\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query selectField(Schema.SObjectField field)');
      ie_close('h4');
      ie_open('p');
      itext('Select a specific field.');
      ie_close('p');
      ie_open('p');
      itext('field: A Schema.SObjectField.');
      ie_close('p');
      $templateAlias2({ code: 'Query query =\n    new Query(Account.getSObjectType()).\n    selectField(Account.Name).\n    selectField(Account.OwnerId);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query selectField(String field, String alias)');
      ie_close('h4');
      ie_open('p');
      itext('Select a specific field and set an alias to it.');
      ie_close('p');
      ie_open('p');
      itext('This method is only available when using aggregate functions.');
      ie_close('p');
      ie_open('p');
      itext('field: API name of the field. Can also be a field of a parent, e.g. \'Owner.Name\'.');
      ie_close('p');
      ie_open('p');
      itext('alias: Name of the alias.');
      ie_close('p');
      $templateAlias2({ code: 'Query query =\n    new Query(\'Account\').\n    selectField(\'Name\', \'myName\').\n    groupBy(\'Name\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query selectField(Schema.SObjectField field, String alias)');
      ie_close('h4');
      ie_open('p');
      itext('Select a specific field and set an alias to it.');
      ie_close('p');
      ie_open('p');
      itext('This method is only available when using aggregate functions.');
      ie_close('p');
      ie_open('p');
      itext('field: A Schema.SObjectField.');
      ie_close('p');
      ie_open('p');
      itext('alias: Name of the alias.');
      ie_close('p');
      $templateAlias2({ code: 'Query query =\n    new Query(Account.getSObjectType()).\n    selectField(Account.Name, \'myName\').\n    groupBy(\'Name\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
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
      itext('field: API name of the field, or multiple field names separated by \',\'.');
      ie_close('p');
      $templateAlias2({ code: 'Query query =\n    new Query(\'Account\').\n    selectFields(\'Name\').\n    selectFields(\'OwnerId, CreatedById\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query selectFields(List<String> fieldList)');
      ie_close('h4');
      ie_open('p');
      itext('fieldList: A list of field API names.');
      ie_close('p');
      $templateAlias2({ code: 'Query query =\n    new Query(\'Account\').\n    selectFields(new List<String>{\'OwnerId\', \'CreatedById\'});', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query selectFields(Set<String> fieldSet)');
      ie_close('h4');
      ie_open('p');
      itext('fieldSet: A Set of field API names.');
      ie_close('p');
      $templateAlias2({ code: 'Query query =\n    new Query(\'Account\').\n    selectFields(new Set<String>{\'OwnerId\', \'CreatedById\'});', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query selectFields(Schema.SObjectField field)');
      ie_close('h4');
      ie_open('p');
      itext('Alias of ');
      ie_open('code');
      itext('selectField(Schema.SObjectField field)');
      ie_close('code');
      ie_close('p');
      ie_open('p');
      itext('field: A Schema.SObjectField');
      ie_close('p');
      $templateAlias2({ code: 'Query query =\n    new Query(Account.getSObjectType()).\n    selectField(Account.Name).\n    selectField(Account.OwnerId);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query selectFields(Set<Schema.SObjectField> fields)');
      ie_close('h4');
      ie_open('p');
      itext('fields: A Set of Schema.SObjectField');
      ie_close('p');
      $templateAlias2({ code: 'Query query =\n    new Query(Account.getSObjectType()).\n    selectFields(new Set<Schema.SObjectField>{Account.Name, Account.OwnerId});', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query selectFields(List<Schema.SObjectField> fields)');
      ie_close('h4');
      ie_open('p');
      itext('fields: A List of Schema.SObjectField');
      ie_close('p');
      $templateAlias2({ code: 'Query query =\n    new Query(Account.getSObjectType()).\n    selectFields(new List<Schema.SObjectField>{Account.Name, Account.OwnerId});', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('selectAllFields');
      ie_close('h2');
      ie_open('h4');
      itext('public Query selectAllFields()');
      ie_close('h4');
      ie_open('p');
      itext('Select all accessible fields in the current object');
      ie_close('p');
      $templateAlias2({ code: 'Query query =\n    new Query(\'Account\').\n    selectAllFields();', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query selectAllFields(String parentField)');
      ie_close('h4');
      ie_open('p');
      itext('Select all accessible fields in the parent field');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    selectAllFields(\'Owner\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param653 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'SMIcs.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var SMIcs = function (_Component) {
  _inherits(SMIcs, _Component);

  function SMIcs() {
    _classCallCheck(this, SMIcs);

    return _possibleConstructorReturn(this, (SMIcs.__proto__ || Object.getPrototypeOf(SMIcs)).apply(this, arguments));
  }

  return SMIcs;
}(_metalComponent2.default);

_metalSoy2.default.register(SMIcs, templates);
exports.SMIcs = SMIcs;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[274]);