var pageComponent =
webpackJsonppageComponent([3],{

/***/ 300:
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

var _step_7Soy = __webpack_require__(301);

var _step_7Soy2 = _interopRequireDefault(_step_7Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BgYVV = function (_Component) {
  _inherits(BgYVV, _Component);

  function BgYVV() {
    _classCallCheck(this, BgYVV);

    return _possibleConstructorReturn(this, (BgYVV.__proto__ || Object.getPrototypeOf(BgYVV)).apply(this, arguments));
  }

  return BgYVV;
}(_metalComponent2.default);

;

_metalSoy2.default.register(BgYVV, _step_7Soy2.default);

exports.default = BgYVV;

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.BgYVV = undefined;

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

  // This file was automatically generated from step_7.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace BgYVV.
   * @public
   */

  goog.module('BgYVV.incrementaldom');

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
    var param1080 = function param1080() {
      ie_open('h2');
      var dyn42 = opt_data.page.title;
      if (typeof dyn42 == 'function') dyn42();else if (dyn42 != null) itext(dyn42);
      ie_close('h2');
      ie_open('p');
      itext('We have learned to add multiple conditions in the previous section, but those conditions were very limited. What if we want to construct a condition with a combination of both boolean operators?');
      ie_close('p');
      ie_open('p');
      itext('In order to do that, we have to construct a \'Condition\' variable, before combining these conditions with the boolean operations, followed by an \'addCondition\' method to link the condition with the query.');
      ie_close('p');
      ie_open('p');
      itext('A typical example would be:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    addCondition(\n        Query.doOr(\n            Query.conditionEq(\'Name\', \'Sam\'),\n            Query.doAnd(\n                Query.conditionGt(\'NumberOfEmployees\', 0),\n                Query.conditionIn(\'Phone\', new Set<String>{\'+61 400 000 000\'})\n            )\n        )\n    ).\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This statement is equivalent to:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    [ SELECT Id FROM Account\n      WHERE Name = \'Sam\' OR\n      (\n        NumberOfEmployees > 0 AND\n        Phone IN :new Set<String>{\'+61 400 000 000\'}\n      )\n    ];', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Let me explain the example step by step. \'Query.conditionXX\' are a series static methods that construct a \'Condition\' variable, similar to the member methods \'addCondtionXX\', these include: \'conditionNotEq\', \'conditionIn\', \'conditionNotIn\', \'conditionLt\', \'conditionLe\', \'conditionGt\', \'conditionGe\' and \'conditionLike\'.');
      ie_close('p');
      ie_open('p');
      itext('Then, we can run boolean operations on any \'Condition\' variables. Because the fact that \'AND\' and \'OR\' have been reserved keyword in apex language, we have to use \'doAnd\' and \'doOr\' as replacement method names. These two methods are both static methods, with \'Condition\' as the return type, so that the return value can be a parameter of another boolean operation.');
      ie_close('p');
      ie_open('p');
      itext('A sample code from the example above:');
      ie_close('p');
      $templateAlias2({ code: 'Query.Condition condition =\n    Query.doAnd(\n        Query.conditionGt(\'NumberOfEmployees\', 0),\n        Query.conditionIn(\'Phone\', new Set<String>{\'+61 400 000 000\'})\n    );', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('A more complicated example from above:');
      ie_close('p');
      $templateAlias2({ code: 'Query.Condition condition =\n    Query.doOr(\n        Query.conditionEq(\'Name\', \'Sam\'),\n        Query.doAnd(\n            Query.conditionGt(\'NumberOfEmployees\', 0),\n            Query.conditionIn(\'Phone\', new Set<String>{\'+61 400 000 000\'})\n        )\n    );', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('It\'s also possible to pass up to 4 parameters in each boolean operation:');
      ie_close('p');
      $templateAlias2({ code: 'Query.Condition condition =\n    Query.doOr(\n        Query.conditionEq(\'Name\', \'Sam\'),\n        Query.conditionGt(\'NumberOfEmployees\', 0),\n        Query.conditionIn(\'Phone\', new Set<String>{\'+61 400 000 000\'}),\n        Query.conditionEq(\'Email\', \'sam@tarly.com\')\n    );', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Once we have constructed our Condition variable, we can pass the condition to the query, using its member method \'addCondition\'. Let\'s try a simple condition first:');
      ie_close('p');
      $templateAlias2({ code: 'Query.Condition condition = Query.conditionEq(\'Name\', \'Sam\');\nList<Account> accounts =\n    new Query(\'Account\').\n    addCondition(condition).\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('which is indeed equivalent to:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    addConditionEq(\'Name\', \'Sam\').\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('But this time, we can create more complicated conditions:');
      ie_close('p');
      $templateAlias2({ code: 'Query.Condition condition =\n    Query.doOr(\n        Query.conditionEq(\'Name\', \'Sam\'),\n        Query.doAnd(\n            Query.conditionGt(\'NumberOfEmployees\', 0),\n            Query.conditionIn(\'Phone\', new Set<String>{\'+61 400 000 000\'})\n        )\n    );\n\nList<Account> accounts =\n    new Query(\'Account\').\n    addCondition(condition).\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('or we can write it in one statement, which is identical to the first example we saw in this section.');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    addCondition(\n        Query.doOr(\n            Query.conditionEq(\'Name\', \'Sam\'),\n            Query.doAnd(\n                Query.conditionGt(\'NumberOfEmployees\', 0),\n                Query.conditionIn(\'Phone\', new Set<String>{\'+61 400 000 000\'})\n            )\n        )\n    ).\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('We can still call \'addConditionXX\' methods and \'addCondition\' simultaneously, which by default, will combine the conditions with boolean \'and\' operations, unless calling the \'switchToDisjunction\' method explicitly:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    addCondition(\n        Query.doOr(\n            Query.conditionEq(\'Name\', \'Sam\'),\n            Query.conditionGt(\'NumberOfEmployees\', 0)\n        )\n    ).\n    addConditionIn(\'Phone\', new Set<String>{\'+61 400 000 000\'}).\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('which is equivalent to:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    addCondition(\n        Query.doAnd(\n            Query.doOr(\n                Query.conditionEq(\'Name\', \'Sam\'),\n                Query.conditionGt(\'NumberOfEmployees\', 0)\n            ),\n            Query.conditionIn(\'Phone\', new Set<String>{\'+61 400 000 000\'})\n        )\n    ).\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('After this section, you will be capable of creating a query with any complex conditions.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1080 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'BgYVV.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var BgYVV = function (_Component) {
  _inherits(BgYVV, _Component);

  function BgYVV() {
    _classCallCheck(this, BgYVV);

    return _possibleConstructorReturn(this, (BgYVV.__proto__ || Object.getPrototypeOf(BgYVV)).apply(this, arguments));
  }

  return BgYVV;
}(_metalComponent2.default);

_metalSoy2.default.register(BgYVV, templates);
exports.BgYVV = BgYVV;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[300]);