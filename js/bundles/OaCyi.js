var pageComponent =
webpackJsonppageComponent([5],{

/***/ 296:
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

var _step_5Soy = __webpack_require__(297);

var _step_5Soy2 = _interopRequireDefault(_step_5Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OaCyi = function (_Component) {
  _inherits(OaCyi, _Component);

  function OaCyi() {
    _classCallCheck(this, OaCyi);

    return _possibleConstructorReturn(this, (OaCyi.__proto__ || Object.getPrototypeOf(OaCyi)).apply(this, arguments));
  }

  return OaCyi;
}(_metalComponent2.default);

;

_metalSoy2.default.register(OaCyi, _step_5Soy2.default);

exports.default = OaCyi;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.OaCyi = undefined;

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

  // This file was automatically generated from step_5.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace OaCyi.
   * @public
   */

  goog.module('OaCyi.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param1008 = function param1008() {
      ie_open('h2');
      var dyn40 = opt_data.page.title;
      if (typeof dyn40 == 'function') dyn40();else if (dyn40 != null) itext(dyn40);
      ie_close('h2');
      ie_open('p');
      itext('Most of the time, we want to make a query with conditions, typically querying a record with a specific Id or a lookup field, then we can use the \'addConditionEq\' method:');
      ie_close('p');
      $templateAlias2({ code: 'Account account =\n    (Account)new Query(\'Account\').\n    addConditionEq(\'Id\', \'0010l00000QJN3MAAX\').\n    fetch();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This statement is querying an Account record with Id \'0010l00000QJN3MAAX\', equivalent to this statement:');
      ie_close('p');
      $templateAlias2({ code: 'Account account =\n    [ SELECT Id FROM Account WHERE Id = \'0010l00000QJN3MAAX\' ];', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In previous tutorials we saw another statement which has the same functionality, using the \'byId\' method:');
      ie_close('p');
      $templateAlias2({ code: 'Account account =\n    (Account)new Query(\'Account\').\n    byId(\'0010l00000QJN3MAAX\').\n    fetch();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Now let\'s try querying the accounts owned by the current user:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    addConditionEq(\'OwnerId\', UserInfo.getUserId()).\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('equivalent to:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    [ SELECT Id FROM Account WHERE OwnerId = :UserInfo.getUserId() ];', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('\'addConditionEq(String field, Object arg)\' is limiting the query with a field equals to the variable \'arg\', while Query.apex provides other operators for conditions, including \'addConditionNotEq\', \'addConditionIn\', \'addConditionNotIn\', \'addConditionLt\', \'addConditionLe\', \'addConditionGt\', \'addConditionGe\' and \'addConditionLike\'.');
      ie_close('p');
      ie_open('p');
      itext('Examples are:');
      ie_close('p');
      $templateAlias2({ code: 'new Query(\'Account\').\n    addConditionNotEq(\'Name\', \'N/A\').\n    run();\n\nnew Query(\'Account\').\n    addConditionIn(\'Name\', new Set<String>{\'ABC\'}).\n    run();\n\nnew Query(\'Account\').\n    addConditionNotIn(\'Name\', new Set<String>{\'N/A\'}).\n    run();\n\nnew Query(\'Account\').\n    addConditionLt(\'NumberOfEmployees\', 15).\n    run();\n\nnew Query(\'Account\').\n    addConditionLe(\'NumberOfEmployees\', 10).\n    run();\n\nnew Query(\'Account\').\n    addConditionGt(\'NumberOfEmployees\', 5).\n    run();\n\nnew Query(\'Account\').\n    addConditionGe(\'NumberOfEmployees\', 10).\n    run();\n\nnew Query(\'Account\').\n    addConditionLike(\'Name\', \'%ABC%\').\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1008 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'OaCyi.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var OaCyi = function (_Component) {
  _inherits(OaCyi, _Component);

  function OaCyi() {
    _classCallCheck(this, OaCyi);

    return _possibleConstructorReturn(this, (OaCyi.__proto__ || Object.getPrototypeOf(OaCyi)).apply(this, arguments));
  }

  return OaCyi;
}(_metalComponent2.default);

_metalSoy2.default.register(OaCyi, templates);
exports.OaCyi = OaCyi;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[296]);