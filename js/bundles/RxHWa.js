var pageComponent =
webpackJsonppageComponent([22],{

/***/ 268:
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

var _aggregateSoy = __webpack_require__(269);

var _aggregateSoy2 = _interopRequireDefault(_aggregateSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RxHWa = function (_Component) {
  _inherits(RxHWa, _Component);

  function RxHWa() {
    _classCallCheck(this, RxHWa);

    return _possibleConstructorReturn(this, (RxHWa.__proto__ || Object.getPrototypeOf(RxHWa)).apply(this, arguments));
  }

  return RxHWa;
}(_metalComponent2.default);

;

_metalSoy2.default.register(RxHWa, _aggregateSoy2.default);

exports.default = RxHWa;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.RxHWa = undefined;

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

  // This file was automatically generated from aggregate.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace RxHWa.
   * @public
   */

  goog.module('RxHWa.incrementaldom');

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
    var param315 = function param315() {
      ie_open('h6');
      var dyn27 = opt_data.page.description;
      if (typeof dyn27 == 'function') dyn27();else if (dyn27 != null) itext(dyn27);
      ie_close('h6');
      ie_open('p');
      itext('This section describes methods related to aggregate functions. When using any of these methods, you can only get the result using the ');
      ie_open('code');
      itext('aggregate()');
      ie_close('code');
      itext(' method in the end.');
      ie_close('p');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('count');
      ie_close('h2');
      ie_open('p');
      itext('Apply ');
      ie_open('code');
      itext('COUNT()');
      ie_close('code');
      itext(' function to a field.');
      ie_close('p');
      ie_open('h4');
      itext('public Query count(String field)');
      ie_close('h4');
      ie_open('p');
      itext('field: API name of the field. Can also be a field of a parent, e.g. \'Owner.Name\'.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    count(\'Id\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query count(String field, String alias)');
      ie_close('h4');
      ie_open('p');
      itext('field: API name of the field. Can also be a field of a parent, e.g. \'Owner.Name\'.');
      ie_close('p');
      ie_open('p');
      itext('alias: The alias set to the aggregate function.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    count(\'Id\', \'idCount\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h2');
      itext('countDistinct');
      ie_close('h2');
      ie_open('p');
      itext('Apply ');
      ie_open('code');
      itext('COUNT_DISTINCT()');
      ie_close('code');
      itext(' function to a field.');
      ie_close('p');
      ie_open('h4');
      itext('public Query countDistinct(String field)');
      ie_close('h4');
      ie_open('p');
      itext('field: API name of the field. Can also be a field of a parent, e.g. \'Owner.Name\'.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    countDistinct(\'Id\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query countDistinct(String field, String alias)');
      ie_close('h4');
      ie_open('p');
      itext('field: API name of the field. Can also be a field of a parent, e.g. \'Owner.Name\'.');
      ie_close('p');
      ie_open('p');
      itext('alias: The alias set to the aggregate function.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    countDistinct(\'Id\', \'idCount\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h2');
      itext('max');
      ie_close('h2');
      ie_open('p');
      itext('Apply ');
      ie_open('code');
      itext('MAX()');
      ie_close('code');
      itext(' function to a field');
      ie_close('p');
      ie_open('h4');
      itext('public Query max(String field)');
      ie_close('h4');
      ie_open('p');
      itext('field: API name of the field. Can also be a field of a parent, e.g. \'Owner.Name\'.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    max(\'Id\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query max(String field, String alias)');
      ie_close('h4');
      ie_open('p');
      itext('field: API name of the field. Can also be a field of a parent, e.g. \'Owner.Name\'.');
      ie_close('p');
      ie_open('p');
      itext('alias: The alias set to the aggregate function.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    max(\'NumberOfEmployees\', \'maxEmployees\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h2');
      itext('min');
      ie_close('h2');
      ie_open('p');
      itext('Apply ');
      ie_open('code');
      itext('MIN()');
      ie_close('code');
      itext(' function to a field');
      ie_close('p');
      ie_open('h4');
      itext('public Query min(String field)');
      ie_close('h4');
      ie_open('p');
      itext('field: API name of the field. Can also be a field of a parent, e.g. \'Owner.Name\'.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    min(\'Id\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query min(String field, String alias)');
      ie_close('h4');
      ie_open('p');
      itext('field: API name of the field. Can also be a field of a parent, e.g. \'Owner.Name\'.');
      ie_close('p');
      ie_open('p');
      itext('alias: The alias set to the aggregate function.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    min(\'NumberOfEmployees\', \'minEmployees\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h2');
      itext('avg');
      ie_close('h2');
      ie_open('p');
      itext('Apply ');
      ie_open('code');
      itext('AVG()');
      ie_close('code');
      itext(' function to a field');
      ie_close('p');
      ie_open('h4');
      itext('public Query avg(String field)');
      ie_close('h4');
      ie_open('p');
      itext('field: API name of the field. Can also be a field of a parent, e.g. \'Owner.Name\'.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    avg(\'Id\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query avg(String field, String alias)');
      ie_close('h4');
      ie_open('p');
      itext('field: API name of the field. Can also be a field of a parent, e.g. \'Owner.Name\'.');
      ie_close('p');
      ie_open('p');
      itext('alias: The alias set to the aggregate function.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    avg(\'NumberOfEmployees\', \'avgEmployees\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h2');
      itext('sum');
      ie_close('h2');
      ie_open('p');
      itext('Apply ');
      ie_open('code');
      itext('SUM()');
      ie_close('code');
      itext(' function to a field');
      ie_close('p');
      ie_open('h4');
      itext('public Query sum(String field)');
      ie_close('h4');
      ie_open('p');
      itext('field: API name of the field. Can also be a field of a parent, e.g. \'Owner.Name\'.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    sum(\'Id\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query sum(String field, String alias)');
      ie_close('h4');
      ie_open('p');
      itext('field: API name of the field. Can also be a field of a parent, e.g. \'Owner.Name\'.');
      ie_close('p');
      ie_open('p');
      itext('alias: The alias set to the aggregate function.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    sum(\'NumberOfEmployees\', \'sumEmployees\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('groupBy');
      ie_close('h2');
      ie_open('p');
      itext('Add the field to the GROUP BY clause.');
      ie_close('p');
      ie_open('h4');
      itext('public Query groupBy(String fields)');
      ie_close('h4');
      ie_open('p');
      itext('field: API name of the field, or multiple field names separated by \',\'.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    groupBy(\'Name\').\n    groupBy(\'OwnerId, CreatedById\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query groupBy(Set<String> fieldSet)');
      ie_close('h4');
      ie_open('p');
      itext('field: A set of fields.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    groupBy(new Set<String>{\'Name\', \'CreatedById\'});', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('selectField');
      ie_close('h2');
      ie_open('p');
      itext('Select a specific field and set an alias to it.');
      ie_close('p');
      ie_open('p');
      itext('This method is only available when using aggregate functions.');
      ie_close('p');
      ie_open('h4');
      itext('public Query selectField(String field, String alias)');
      ie_close('h4');
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
      itext('field: A Schema.SObjectField.');
      ie_close('p');
      ie_open('p');
      itext('alias: Name of the alias.');
      ie_close('p');
      $templateAlias2({ code: 'Query query =\n    new Query(Account.getSObjectType()).\n    selectField(Account.Name, \'myName\').\n    groupBy(\'Name\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('addHaving');
      ie_close('h2');
      ie_open('p');
      itext('Add a HAVING clause as conditions of the aggregated query.');
      ie_close('p');
      ie_open('h4');
      itext('public Query addHaving(Condition condition)');
      ie_close('h4');
      ie_open('p');
      itext('condition: A Query.Condition.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\ncount(\'Name\', \'countName\').\ngroupBy(\'Rating\').\naddHaving(Query.conditionGe(\'Count(Name)\', 2));', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('aggregate');
      ie_close('h2');
      ie_open('p');
      itext('Get the result of the aggregated query.');
      ie_close('p');
      ie_open('p');
      itext('Can only be used with aggregate functions.');
      ie_close('p');
      ie_open('h4');
      itext('public List<AggregateResult> aggregate()');
      ie_close('h4');
      ie_open('p');
      itext('Get the result of the aggregated query.');
      ie_close('p');
      ie_open('p');
      itext('The returned list is guaranteed to be non-empty.');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    count(\'Name\').\n    aggregate();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param315 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'RxHWa.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var RxHWa = function (_Component) {
  _inherits(RxHWa, _Component);

  function RxHWa() {
    _classCallCheck(this, RxHWa);

    return _possibleConstructorReturn(this, (RxHWa.__proto__ || Object.getPrototypeOf(RxHWa)).apply(this, arguments));
  }

  return RxHWa;
}(_metalComponent2.default);

_metalSoy2.default.register(RxHWa, templates);
exports.RxHWa = RxHWa;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[268]);