var pageComponent =
webpackJsonppageComponent([13],{

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

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

__webpack_require__(16);

var _subquerySoy = __webpack_require__(277);

var _subquerySoy2 = _interopRequireDefault(_subquerySoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WqGmW = function (_Component) {
  _inherits(WqGmW, _Component);

  function WqGmW() {
    _classCallCheck(this, WqGmW);

    return _possibleConstructorReturn(this, (WqGmW.__proto__ || Object.getPrototypeOf(WqGmW)).apply(this, arguments));
  }

  return WqGmW;
}(_metalComponent2.default);

;

_metalSoy2.default.register(WqGmW, _subquerySoy2.default);

exports.default = WqGmW;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.WqGmW = undefined;

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

  // This file was automatically generated from subquery.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace WqGmW.
   * @public
   */

  goog.module('WqGmW.incrementaldom');

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
    var param862 = function param862() {
      ie_open('h6');
      var dyn39 = opt_data.page.description;
      if (typeof dyn39 == 'function') dyn39();else if (dyn39 != null) itext(dyn39);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('addSubquery');
      ie_close('h2');
      ie_open('p');
      itext('Add a subquery to the query, selecting an SObject list from a specific child relationship.');
      ie_close('p');
      ie_open('p');
      itext('For example, in this query, the expression enclosed in parentheses is a subquery:');
      ie_close('p');
      $templateAlias2({ code: '\nSELECT Name, (SELECT LastName FROM Contacts) FROM Account', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query addSubquery(String relationshipName)');
      ie_close('h4');
      ie_open('p');
      itext('relationshipName: Name of the child relationship');
      ie_close('p');
      $templateAlias2({ code: '\nQuery q =\n    new Query(\'Account\').\n    addSubquery(\'Contacts\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query addSubquery(String relationshipName, String fields)');
      ie_close('h4');
      ie_open('p');
      itext('relationshipName: Name of the child relationship');
      ie_close('p');
      ie_open('p');
      itext('fields: One or more field names in the child relationship that will be selected. If there are more than one field, they will be separated by a comma \',\'.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery q =\n    new Query(\'Account\').\n    addSubquery(\'Contacts\', \'FirstName, LastName\').\n    addSubquery(\'Notes\', \'Title\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query addSubquery(String relationshipName, Set<String> fieldSet)');
      ie_close('h4');
      ie_open('p');
      itext('relationshipName: Name of the child relationship');
      ie_close('p');
      ie_open('p');
      itext('fieldSet: A set of field names in the child relationship that will be selected');
      ie_close('p');
      $templateAlias2({ code: '\nQuery q =\n    new Query(\'Account\').\n    addSubquery(\'Contacts\', new Set<String>{\'FirstName\', \'LastName\'});', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query addSubquery(String relationshipName, List<String> fieldList)');
      ie_close('h4');
      ie_open('p');
      itext('relationshipName: Name of the child relationship');
      ie_close('p');
      ie_open('p');
      itext('fieldList: A list of field names in the child relationship that will be selected');
      ie_close('p');
      $templateAlias2({ code: '\nQuery q =\n    new Query(\'Account\').\n    addSubquery(\'Contacts\', new List<String>{\'FirstName\', \'LastName\'});', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query addSubquery(Query subquery)');
      ie_close('h4');
      ie_open('p');
      itext('subquery: A subquery instance constructed by the static method');
      ie_open('code');
      itext('Query.subquery');
      ie_close('code');
      ie_close('p');
      $templateAlias2({ code: '\nQuery q =\n    new Query(\'Account\').\n    addSubquery(Query.subquery(\'Contacts\'));', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('subquery');
      ie_close('h2');
      ie_open('p');
      itext('Creates a subquery instance.');
      ie_close('p');
      ie_open('p');
      itext('The instance can be linked to the main query using the ');
      ie_open('code');
      itext('addSubquery');
      ie_close('code');
      itext(' method afterwards.');
      ie_close('p');
      ie_open('h4');
      itext('public static Query subquery(String relationshipName)');
      ie_close('h4');
      ie_open('p');
      itext('relationshipName: Name of the child relationship');
      ie_close('p');
      $templateAlias2({ code: '\nQuery q =\n    new Query(\'Account\').\n    addSubquery(Query.subquery(\'Contacts\'));', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param862 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'WqGmW.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var WqGmW = function (_Component) {
  _inherits(WqGmW, _Component);

  function WqGmW() {
    _classCallCheck(this, WqGmW);

    return _possibleConstructorReturn(this, (WqGmW.__proto__ || Object.getPrototypeOf(WqGmW)).apply(this, arguments));
  }

  return WqGmW;
}(_metalComponent2.default);

_metalSoy2.default.register(WqGmW, templates);
exports.WqGmW = WqGmW;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[276]);