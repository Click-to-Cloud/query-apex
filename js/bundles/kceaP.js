var pageComponent =
webpackJsonppageComponent([6],{

/***/ 294:
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

var _step_4Soy = __webpack_require__(295);

var _step_4Soy2 = _interopRequireDefault(_step_4Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var kceaP = function (_Component) {
  _inherits(kceaP, _Component);

  function kceaP() {
    _classCallCheck(this, kceaP);

    return _possibleConstructorReturn(this, (kceaP.__proto__ || Object.getPrototypeOf(kceaP)).apply(this, arguments));
  }

  return kceaP;
}(_metalComponent2.default);

;

_metalSoy2.default.register(kceaP, _step_4Soy2.default);

exports.default = kceaP;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.kceaP = undefined;

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

  // This file was automatically generated from step_4.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace kceaP.
   * @public
   */

  goog.module('kceaP.incrementaldom');

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
    var param972 = function param972() {
      ie_open('h2');
      var dyn39 = opt_data.page.title;
      if (typeof dyn39 == 'function') dyn39();else if (dyn39 != null) itext(dyn39);
      ie_close('h2');
      ie_open('p');
      itext('It\'s also possible to include fields from a parent. The easiest way would be passing the parent name to the \'selectAllFields\' method:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    selectAllFields(\'Owner\').\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This would select the Id field in Account object, as weel as all the user accessible fields in the Owner reference, which is a User object.');
      ie_close('p');
      ie_open('p');
      itext('The statement is equivalent to:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    [ SELECT Id, Owner.Id, Owner.Name, Owner.CreatedById ... FROM Account ];', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Another way would be simply passing the parent field along with the relationship to the \'selectFields\' method:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    selectFields(\'Owner.Name, Owner.CreatedById\').\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('equivalent to:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    [ SELECT Id, Owner.Name, Owner.CreatedById FROM Account ];', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Meanwhile, multiple layer parent relationship is supported:');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Contact\').\n    selectFields(\'Account.Owner.Name\').\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param972 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'kceaP.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var kceaP = function (_Component) {
  _inherits(kceaP, _Component);

  function kceaP() {
    _classCallCheck(this, kceaP);

    return _possibleConstructorReturn(this, (kceaP.__proto__ || Object.getPrototypeOf(kceaP)).apply(this, arguments));
  }

  return kceaP;
}(_metalComponent2.default);

_metalSoy2.default.register(kceaP, templates);
exports.kceaP = kceaP;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[294]);