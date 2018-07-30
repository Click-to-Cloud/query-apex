var pageComponent =
webpackJsonppageComponent([3],{

/***/ 290:
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

var _step_6Soy = __webpack_require__(291);

var _step_6Soy2 = _interopRequireDefault(_step_6Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TXmVC = function (_Component) {
  _inherits(TXmVC, _Component);

  function TXmVC() {
    _classCallCheck(this, TXmVC);

    return _possibleConstructorReturn(this, (TXmVC.__proto__ || Object.getPrototypeOf(TXmVC)).apply(this, arguments));
  }

  return TXmVC;
}(_metalComponent2.default);

;

_metalSoy2.default.register(TXmVC, _step_6Soy2.default);

exports.default = TXmVC;

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.TXmVC = undefined;

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

  // This file was automatically generated from step_6.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace TXmVC.
   * @public
   */

  goog.module('TXmVC.incrementaldom');

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
    var param785 = function param785() {
      ie_open('h2');
      var dyn37 = opt_data.page.title;
      if (typeof dyn37 == 'function') dyn37();else if (dyn37 != null) itext(dyn37);
      ie_close('h2');
      ie_open('p');
      itext('In the previous section, we have learned to add a single condition to the query. In many cases, however, that is far from enough. So Query.apex allows calling \'addConditionXX\' multiple times, resulting in combining all the conditions with boolean \'and\' operation.');
      ie_close('p');
      ie_open('p');
      itext('Example:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    addConditionEq(\'Name\', \'Sam\').\n    addConditionGt(\'NumberOfEmployees\', 0).\n    addConditionIn(\'Phone\', new Set<String>{\'+61 400 000 000\'}).\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('equivalent to:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    [ SELECT Id FROM Account\n      WHERE Name = \'Sam\'\n      AND NumberOfEmployees > 0\n      AND Phone IN :new Set<String>{\'+61 400 000 000\'} ];', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Meanwhile, Query.apex provides a method \'switchToDisjunction\' to change the boolean \'and\' operator to the boolean \'or\' operator. Appending an extra \'switchToDisjunction\' method to the same example above:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    addConditionEq(\'Name\', \'Sam\').\n    addConditionGt(\'NumberOfEmployees\', 0).\n    addConditionIn(\'Phone\', new Set<String>{\'+61 400 000 000\'}).\n    switchToDisjunction().\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('equivalent to:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    [ SELECT Id FROM Account\n      WHERE Name = \'Sam\'\n      OR NumberOfEmployees > 0\n      OR Phone IN :new Set<String>{\'+61 400 000 000\'} ];', mode: 'javascript' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param785 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'TXmVC.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var TXmVC = function (_Component) {
  _inherits(TXmVC, _Component);

  function TXmVC() {
    _classCallCheck(this, TXmVC);

    return _possibleConstructorReturn(this, (TXmVC.__proto__ || Object.getPrototypeOf(TXmVC)).apply(this, arguments));
  }

  return TXmVC;
}(_metalComponent2.default);

_metalSoy2.default.register(TXmVC, templates);
exports.TXmVC = TXmVC;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[290]);