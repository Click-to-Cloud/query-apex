var pageComponent =
webpackJsonppageComponent([18],{

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

var _conditionSoy = __webpack_require__(269);

var _conditionSoy2 = _interopRequireDefault(_conditionSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hzMOv = function (_Component) {
  _inherits(hzMOv, _Component);

  function hzMOv() {
    _classCallCheck(this, hzMOv);

    return _possibleConstructorReturn(this, (hzMOv.__proto__ || Object.getPrototypeOf(hzMOv)).apply(this, arguments));
  }

  return hzMOv;
}(_metalComponent2.default);

;

_metalSoy2.default.register(hzMOv, _conditionSoy2.default);

exports.default = hzMOv;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.hzMOv = undefined;

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

  // This file was automatically generated from condition.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace hzMOv.
   * @public
   */

  goog.module('hzMOv.incrementaldom');

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
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('byId');
      ie_close('h2');
      ie_open('p');
      itext('Add a condition to the query, limiting the sObject to a specific ID or a collection of ID. Alias to ');
      ie_open('code');
      itext('addConditionEq(\'Id\', ...)');
      ie_close('code');
      ie_close('p');
      ie_open('h4');
      itext('public Query byId(Id id)');
      ie_close('h4');
      ie_open('p');
      itext('id: The specified ID of the SObject');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    byId();', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query byId(List<Id> idList)');
      ie_close('h4');
      ie_open('p');
      itext('idList: A List of specified IDs');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    byId(new List<Id>{\'001O000000qkv3KIAQ\'});', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query byId(Set<Id> idSet)');
      ie_close('h4');
      ie_open('p');
      itext('idSet: A Set of specified IDs');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    byId(new Set<Id>{\'001O000000qkv3KIAQ\'});', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('addConditionXX');
      ie_close('h2');
      ie_open('p');
      itext('Add a condition to the query, limiting the sObject. \'XX\' can be one of these comparison operators: Eq, NotEq, In, Lt, Le, Gt, Ge, Like.');
      ie_close('p');
      ie_open('p');
      itext('By default, all the conditions added by this method will be joined by the boolean operator \'and\', i.e. the result is true if and only if all the conditions are true, unless calling the ');
      ie_open('code');
      itext('switchToDisjunction');
      ie_close('code');
      itext(' method.');
      ie_close('p');
      ie_open('h4');
      itext('public Query addConditionEq(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Add a condition ');
      ie_open('code');
      itext('lhs = rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value equals to the right hand side value.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a primitive type or a ');
      ie_open('code');
      itext('Query.Literal');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    addConditionEq(\'Id\', \'001O000000qkv3KIAQ\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query addConditionNotEq(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Add a condition ');
      ie_open('code');
      itext('lhs != rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value does not equal to the right hand side value.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a primitive type or a ');
      ie_open('code');
      itext('Query.Literal');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    addConditionNotEq(\'Id\', \'001O000000qkv3KIAQ\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query addConditionIn(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Add a condition ');
      ie_open('code');
      itext('lhs IN rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value equals to any value in the right hand side collection.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a List or a Set.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    addConditionIn(\'Id\', new Set<Id>{\'001O000000qkv3KIAQ\'});', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query addConditionNotIn(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Add a condition ');
      ie_open('code');
      itext('lhs NOT IN rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value does not equal to any value in the right hand side collection.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a List or a Set.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    addConditionNotIn(\'Id\', new Set<Id>{\'001O000000qkv3KIAQ\'});', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query addConditionLt(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Add a condition ');
      ie_open('code');
      itext('lhs < rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value is less than the right hand side value.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a primitive type or a ');
      ie_open('code');
      itext('Query.Literal');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    addConditionLt(\'NumberOfEmployees\', 10);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query addConditionLe(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Add a condition ');
      ie_open('code');
      itext('lhs <= rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value is less than, or equals the right hand side value.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a primitive type or a ');
      ie_open('code');
      itext('Query.Literal');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    addConditionLe(\'NumberOfEmployees\', 10);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query addConditionGt(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Add a condition ');
      ie_open('code');
      itext('lhs > rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value is greater than the right hand side value.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a primitive type or a ');
      ie_open('code');
      itext('Query.Literal');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    addConditionGt(\'NumberOfEmployees\', 10);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query addConditionGe(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Add a condition ');
      ie_open('code');
      itext('lhs >= rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value is greater than, or equals the right hand side value.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a primitive type or a ');
      ie_open('code');
      itext('Query.Literal');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    addConditionGe(\'NumberOfEmployees\', 10);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query addConditionLike(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Add a condition ');
      ie_open('code');
      itext('lhs LIKE rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value matches the right hand side value, in a way similar to the ');
      ie_open('code');
      itext('LIKE');
      ie_close('code');
      itext(' operator in SQL.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a String.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery query =\n    new Query(\'Account\').\n    addConditionLike(\'Name\', \'%Sam%\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('addCondition');
      ie_close('h2');
      ie_open('h4');
      itext('public Query addCondition(Condition condition)');
      ie_close('h4');
      ie_open('p');
      itext('Add a condition expression, which is a Query.Condition type instance.');
      ie_close('p');
      ie_open('p');
      itext('condition: A Query.Condition type, which can be constructed by a static');
      ie_open('code');
      itext('conditionXX');
      ie_close('code');
      itext(' method.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery q =\n    new Query(\'Account\').\n    addCondition(Query.conditionEq(\'Name\', \'Sam\'));', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('conditionXX');
      ie_close('h2');
      ie_open('p');
      itext('Creates a Query.Condition instance. \'XX\' can be one of these comparison operators: Eq, NotEq, In, Lt, Le, Gt, Ge, Like.');
      ie_close('p');
      ie_open('h4');
      itext('public static Condition conditionEq(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Creates a condition ');
      ie_open('code');
      itext('lhs = rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value equals to the right hand side value.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a primitive type or a ');
      ie_open('code');
      itext('Query.Literal');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery.Condition condition =\n    Query.conditionEq(\'Name\', \'Sam\');\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public static Condition conditionNotEq(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Creates a condition ');
      ie_open('code');
      itext('lhs != rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value does not equal to the right hand side value.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a primitive type or a ');
      ie_open('code');
      itext('Query.Literal');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery.Condition condition =\n    Query.conditionNotEq(\'Name\', \'Sam\');\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public static Condition conditionIn(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Creates a condition ');
      ie_open('code');
      itext('lhs IN rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value equals to any value in the right hand side collection.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a List or a Set.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery.Condition condition =\n    Query.conditionIn(\'Name\', new Set<String>{\'Sam\'});\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public static Condition conditionNotIn(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Creates a condition ');
      ie_open('code');
      itext('lhs NOT IN rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value does not equal to any value in the right hand side collection.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a List or a Set.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery.Condition condition =\n    Query.conditionNotIn(\'Name\', new Set<String>{\'Sam\'});\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public static Condition conditionLt(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Creates a condition ');
      ie_open('code');
      itext('lhs < rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value is less than the right hand side value.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a primitive type or a ');
      ie_open('code');
      itext('Query.Literal');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery.Condition condition =\n    Query.conditionLt(\'NumberOfEmployees\', 10);\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public static Condition conditionLe(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Creates a condition ');
      ie_open('code');
      itext('lhs <= rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value is less than, or equals the right hand side value.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a primitive type or a ');
      ie_open('code');
      itext('Query.Literal');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery.Condition condition =\n    Query.conditionLe(\'NumberOfEmployees\', 10);\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public static Condition conditionGt(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Creates a condition ');
      ie_open('code');
      itext('lhs > rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value is greater than the right hand side value.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a primitive type or a ');
      ie_open('code');
      itext('Query.Literal');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery.Condition condition =\n    Query.conditionGt(\'NumberOfEmployees\', 10);\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public static Condition conditionGe(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Creates a condition ');
      ie_open('code');
      itext('lhs >= rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value is greater than, or equals the right hand side value.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a primitive type or a ');
      ie_open('code');
      itext('Query.Literal');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery.Condition condition =\n    Query.conditionGe(\'NumberOfEmployees\', 10);\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public static Condition conditionLike(String lhs, Object rhs)');
      ie_close('h4');
      ie_open('p');
      itext('Creates a condition ');
      ie_open('code');
      itext('lhs LIKE rhs');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if the left hand side value matches the right hand side value, in a way similar to the ');
      ie_open('code');
      itext('LIKE');
      ie_close('code');
      itext(' operator in SQL.');
      ie_close('p');
      ie_open('p');
      itext('lhs: Left hand side of the binary expression, which can only be a field name.');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the binary expression, which can only be a String.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery.Condition condition =\n    Query.conditionLike(\'Name\', \'%Sam%\');\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('doAnd');
      ie_close('h2');
      ie_open('p');
      itext('Join two or more Query.Condition instances with boolean operator \'and\'.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if all the conditions are true.');
      ie_close('p');
      ie_open('p');
      itext('Because ');
      ie_open('code');
      itext('and');
      ie_close('code');
      itext(' has been a reserved keyword in Apex, we have to rename the method to ');
      ie_open('code');
      itext('doAnd');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('h4');
      itext('public static Condition doAnd(Condition lhs, Condition rhs)');
      ie_close('h4');
      ie_open('p');
      itext('lhs: Left hand side of the boolean expression');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the boolean expression');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if both lhs and rhs are true.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery.Condition condition =\n    Query.doAnd(\n        Query.conditionLike(\'Name\', \'%Sam%\'),\n        Query.conditionGe(\'NumberOfEmployees\', 10)\n    );\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public static Condition doAnd(Condition condition0, Condition condition1, Condition condition2)');
      ie_close('h4');
      ie_open('p');
      itext('condition0: First condition in the boolean expression condition1: Second condition in the boolean expression condition2: Third condition in the boolean expression');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if all three condtions are true.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery.Condition condition =\n    Query.doAnd(\n        Query.conditionLike(\'Name\', \'%Sam%\'),\n        Query.conditionEq(\'Phone\', \'123 456 789\'),\n        Query.conditionGe(\'NumberOfEmployees\', 10)\n    );\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public static Condition doAnd(Condition condition0, Condition condition1, Condition condition2, Condition condition3)');
      ie_close('h4');
      ie_open('p');
      itext('condition0: First condition in the boolean expression condition1: Second condition in the boolean expression condition2: Third condition in the boolean expression condition3: Fourth condition in the boolean expression');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if all four condtions are true.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery.Condition condition =\n    Query.doAnd(\n        Query.conditionLike(\'Name\', \'%Sam%\'),\n        Query.conditionEq(\'Phone\', \'123 456 789\'),\n        Query.conditionIn(\'Id\', new Set<Id>{\'00190000012KXI2AAO\'}),\n        Query.conditionGe(\'NumberOfEmployees\', 10)\n    );\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public static Condition doAnd(List<Condition> conditions)');
      ie_close('h4');
      ie_open('p');
      itext('conditions: A list of conditions in the boolean expression');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if all the conditions in the list are true.');
      ie_close('p');
      $templateAlias2({ code: '\nList<Query.Condition> conditions =\n    new List<Query.Condition>{\n        Query.conditionLike(\'Name\', \'%Sam%\'),\n        Query.conditionEq(\'Phone\', \'123 456 789\'),\n        Query.conditionIn(\'Id\', new Set<Id>{\'00190000012KXI2AAO\'}),\n        Query.conditionGe(\'NumberOfEmployees\', 10)\n    };\n\nQuery.Condition condition =\n    Query.doAnd(conditions);\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('doOr');
      ie_close('h2');
      ie_open('p');
      itext('Join two or more Query.Condition instances with boolean operator \'or\'.');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if at least one of the conditions is true.');
      ie_close('p');
      ie_open('p');
      itext('Because ');
      ie_open('code');
      itext('or');
      ie_close('code');
      itext(' has been a reserved keyword in Apex, we have to rename the method to ');
      ie_open('code');
      itext('doOr');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('h4');
      itext('public static Condition doOr(Condition lhs, Condition rhs)');
      ie_close('h4');
      ie_open('p');
      itext('lhs: Left hand side of the boolean expression');
      ie_close('p');
      ie_open('p');
      itext('rhs: Right hand side of the boolean expression');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if either lhs or rhs is true.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery.Condition condition =\n    Query.doOr(\n        Query.conditionLike(\'Name\', \'%Sam%\'),\n        Query.conditionGe(\'NumberOfEmployees\', 10)\n    );\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public static Condition doOr(Condition condition0, Condition condition1, Condition condition2)');
      ie_close('h4');
      ie_open('p');
      itext('condition0: First condition in the boolean expression condition1: Second condition in the boolean expression condition2: Third condition in the boolean expression');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if at least one of the three conditions is true.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery.Condition condition =\n    Query.doOr(\n        Query.conditionLike(\'Name\', \'%Sam%\'),\n        Query.conditionEq(\'Phone\', \'123 456 789\'),\n        Query.conditionGe(\'NumberOfEmployees\', 10)\n    );\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public static Condition doAnd(Condition condition0, Condition condition1, Condition condition2, Condition condition3)');
      ie_close('h4');
      ie_open('p');
      itext('condition0: First condition in the boolean expression condition1: Second condition in the boolean expression condition2: Third condition in the boolean expression condition3: Fourth condition in the boolean expression');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if at least one of the four conditions is true.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery.Condition condition =\n    Query.doOr(\n        Query.conditionLike(\'Name\', \'%Sam%\'),\n        Query.conditionEq(\'Phone\', \'123 456 789\'),\n        Query.conditionIn(\'Id\', new Set<Id>{\'00190000012KXI2AAO\'}),\n        Query.conditionGe(\'NumberOfEmployees\', 10)\n    );\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public static Condition doAnd(List<Condition> conditions)');
      ie_close('h4');
      ie_open('p');
      itext('conditions: A list of conditions in the boolean expression');
      ie_close('p');
      ie_open('p');
      itext('The result is true if and only if at least one condition in the list is true.');
      ie_close('p');
      $templateAlias2({ code: '\nList<Query.Condition> conditions =\n    new List<Query.Condition>{\n        Query.conditionLike(\'Name\', \'%Sam%\'),\n        Query.conditionEq(\'Phone\', \'123 456 789\'),\n        Query.conditionIn(\'Id\', new Set<Id>{\'00190000012KXI2AAO\'}),\n        Query.conditionGe(\'NumberOfEmployees\', 10)\n    };\n\nQuery.Condition condition =\n    Query.doOr(conditions);\n\nQuery q =\n    new Query(\'Account\').\n    addCondition(condition);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('Misc');
      ie_close('h2');
      ie_open('h4');
      itext('public Query switchToDisjunction()');
      ie_close('h4');
      ie_open('p');
      itext('After calling this function, all expression added by ');
      ie_open('code');
      itext('addCondition');
      ie_close('code');
      itext(' or');
      ie_open('code');
      itext('addConditionXX');
      ie_close('code');
      itext(' will be joined with the boolean ');
      ie_open('code');
      itext('or');
      ie_close('code');
      itext(' operator, i.e. the query condition is true if and only if at least one of these expression are true.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery q =\n    new Query(\'Account\').\n    addCondition(Query.doAnd(\n        Query.conditionEq(\'Name\', \'Jack\'),\n        Query.conditionEq(\'Phone\', \'123 456 789\')\n    )).\n    addConditionEq(\'Name\', \'David\').\n    switchToDisjunction();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('The example above is equivalent to this query:');
      ie_close('p');
      $templateAlias2({ code: '\nSELECT Id FROM Account WHERE (Name = \'Jack\' AND Phone = \'123 456 789) OR (Name = \'David\')', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query switchToConjunction()');
      ie_close('h4');
      ie_open('p');
      itext('Reverse the effect of ');
      ie_open('code');
      itext('switchToDisjunction');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('After calling this function, all expression added by ');
      ie_open('code');
      itext('addCondition');
      ie_close('code');
      itext(' or');
      ie_open('code');
      itext('addConditionXX');
      ie_close('code');
      itext(' will be joined with the boolean ');
      ie_open('code');
      itext('and');
      ie_close('code');
      itext(' operator, i.e. the query condition is true if and only if all these expression are true.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery q =\n    new Query(\'Account\').\n    addCondition(Query.doOr(\n        Query.conditionEq(\'Name\', \'Jack\'),\n        Query.conditionEq(\'Phone\', \'123 456 789\')\n    )).\n    addConditionEq(\'Name\', \'David\').\n    switchToDisjunction().\n    switchToConjunction();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('The example above is equivalent to this query:');
      ie_close('p');
      $templateAlias2({ code: '\nSELECT Id FROM Account WHERE (Name = \'Jack\' OR Phone = \'123 456 789) AND (Name = \'David\')', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public Query resetCondition()');
      ie_close('h4');
      ie_open('p');
      itext('Clear all conditions.');
      ie_close('p');
      $templateAlias2({ code: '\nQuery q =\n    new Query(\'Account\').\n    addConditionEq(\'Name\', \'David\').\n    resetCondition();', mode: 'javascript' }, null, opt_ijData);
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
    $render.soyTemplateName = 'hzMOv.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var hzMOv = function (_Component) {
  _inherits(hzMOv, _Component);

  function hzMOv() {
    _classCallCheck(this, hzMOv);

    return _possibleConstructorReturn(this, (hzMOv.__proto__ || Object.getPrototypeOf(hzMOv)).apply(this, arguments));
  }

  return hzMOv;
}(_metalComponent2.default);

_metalSoy2.default.register(hzMOv, templates);
exports.hzMOv = hzMOv;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[268]);