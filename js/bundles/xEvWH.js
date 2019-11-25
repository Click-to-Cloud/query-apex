var pageComponent =
webpackJsonppageComponent([10],{

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

var _step_10Soy = __webpack_require__(287);

var _step_10Soy2 = _interopRequireDefault(_step_10Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var xEvWH = function (_Component) {
  _inherits(xEvWH, _Component);

  function xEvWH() {
    _classCallCheck(this, xEvWH);

    return _possibleConstructorReturn(this, (xEvWH.__proto__ || Object.getPrototypeOf(xEvWH)).apply(this, arguments));
  }

  return xEvWH;
}(_metalComponent2.default);

;

_metalSoy2.default.register(xEvWH, _step_10Soy2.default);

exports.default = xEvWH;

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.xEvWH = undefined;

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

  // This file was automatically generated from step_10.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace xEvWH.
   * @public
   */

  goog.module('xEvWH.incrementaldom');

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
    var param853 = function param853() {
      ie_open('h2');
      var dyn35 = opt_data.page.title;
      if (typeof dyn35 == 'function') dyn35();else if (dyn35 != null) itext(dyn35);
      ie_close('h2');
      ie_open('p');
      itext('Aggregate functions are more useful combined with the \'groupBy\' method, so that each group can have its own aggregate result. Similar to the simple aggregate functions, the \'aggregate\' method is needed to get the aggregate results, which will return a list of \'AggregateResult\' items.');
      ie_close('p');
      $templateAlias2({ code: 'List<AggregateResult> results =\n    new Query(\'Account\').\n    selectField(\'Rating\').\n    count(\'Name\', \'countName\').\n    max(\'NumberOfEmployees\', \'maxEmployees\').\n    groupBy(\'Rating\').\n    aggregate();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This example tries to group the accounts based on their rating, and for each rating group it tries to find the maximum number of employees.');
      ie_close('p');
      $templateAlias2({ code: 'for (AggregateResult result : results) {\n    System.debug(\'Rating: \' + result.get(\'Rating\'));\n    System.debug(\'maxEmployees: \' + result.get(\'maxEmployees\'));\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Note that we can only select fields that appear in the group by method. In this example, only the \'Rating\' field appears in the group by clause, so only the \'Rating\' field can be selected.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param853 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'xEvWH.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var xEvWH = function (_Component) {
  _inherits(xEvWH, _Component);

  function xEvWH() {
    _classCallCheck(this, xEvWH);

    return _possibleConstructorReturn(this, (xEvWH.__proto__ || Object.getPrototypeOf(xEvWH)).apply(this, arguments));
  }

  return xEvWH;
}(_metalComponent2.default);

_metalSoy2.default.register(xEvWH, templates);
exports.xEvWH = xEvWH;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[286]);