var pageComponent =
webpackJsonppageComponent([6],{

/***/ 286:
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

var _step_3Soy = __webpack_require__(287);

var _step_3Soy2 = _interopRequireDefault(_step_3Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PeoeW = function (_Component) {
  _inherits(PeoeW, _Component);

  function PeoeW() {
    _classCallCheck(this, PeoeW);

    return _possibleConstructorReturn(this, (PeoeW.__proto__ || Object.getPrototypeOf(PeoeW)).apply(this, arguments));
  }

  return PeoeW;
}(_metalComponent2.default);

;

_metalSoy2.default.register(PeoeW, _step_3Soy2.default);

exports.default = PeoeW;

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.PeoeW = undefined;

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

  // This file was automatically generated from step_3.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace PeoeW.
   * @public
   */

  goog.module('PeoeW.incrementaldom');

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
    var param683 = function param683() {
      ie_open('h2');
      var dyn35 = opt_data.page.title;
      if (typeof dyn35 == 'function') dyn35();else if (dyn35 != null) itext(dyn35);
      ie_close('h2');
      ie_open('p');
      itext('By default Query.apex will select only the Id field in the SObject, however we can override this if we want to select other fields.');
      ie_close('p');
      ie_open('p');
      itext('For example, this query will only select only the Name field from the Account object.');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').selectFields(\'Name\').run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This is equivalent to:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    [ SELECT Name FROM Account ];', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('We can also call \'selectFields\' method multiple times, the result is additive:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    selectFields(\'Name\').\n    selectFields(\'Phone\').\n    selectFields(\'Website\').\n    selectFields(\'Description\').\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('That\'s equivalent to:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    [ SELECT Name, Phone, Website, Description FROM Account ];', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Alternatively, we can put all the fields in one \'selectFields\' method, still preserving the additivity:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    selectFields(\'Name, Phone, Website\').\n    selectFields(\'Description\').\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Compare with:');
      ie_close('p');
      $templateAlias2({ code: 'List<String> fields = new List<String>{\'Name\', \'Phone\', \'Website\'};\nList<Account> accounts =\n    new Query(\'Account\').\n    selectFields(fields).\n    selectFields(\'Description\').\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('or:');
      ie_close('p');
      $templateAlias2({ code: 'Set<String> fields = new Set<String>{\'Name\', \'Phone\', \'Website\'};\nList<Account> accounts =\n    new Query(\'Account\').\n    selectFields(fields).\n    selectFields(\'Description\').\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('To make user convenient, Query.apex provides the \'selectAllFields\' method to select all user accessible fields:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    selectAllFields().\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param683 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'PeoeW.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var PeoeW = function (_Component) {
  _inherits(PeoeW, _Component);

  function PeoeW() {
    _classCallCheck(this, PeoeW);

    return _possibleConstructorReturn(this, (PeoeW.__proto__ || Object.getPrototypeOf(PeoeW)).apply(this, arguments));
  }

  return PeoeW;
}(_metalComponent2.default);

_metalSoy2.default.register(PeoeW, templates);
exports.PeoeW = PeoeW;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[286]);