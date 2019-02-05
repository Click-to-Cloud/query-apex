var pageComponent =
webpackJsonppageComponent([14],{

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

var _resultSoy = __webpack_require__(295);

var _resultSoy2 = _interopRequireDefault(_resultSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vyybz = function (_Component) {
  _inherits(vyybz, _Component);

  function vyybz() {
    _classCallCheck(this, vyybz);

    return _possibleConstructorReturn(this, (vyybz.__proto__ || Object.getPrototypeOf(vyybz)).apply(this, arguments));
  }

  return vyybz;
}(_metalComponent2.default);

;

_metalSoy2.default.register(vyybz, _resultSoy2.default);

exports.default = vyybz;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.vyybz = undefined;

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

  // This file was automatically generated from result.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace vyybz.
   * @public
   */

  goog.module('vyybz.incrementaldom');

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
    var param604 = function param604() {
      ie_open('h6');
      var dyn31 = opt_data.page.description;
      if (typeof dyn31 == 'function') dyn31();else if (dyn31 != null) itext(dyn31);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('run');
      ie_close('h2');
      ie_open('p');
      itext('Run the query as if running ');
      ie_open('code');
      itext('Database.query()');
      ie_close('code');
      ie_close('p');
      ie_open('h4');
      itext('public List<SObject> run()');
      ie_close('h4');
      ie_open('p');
      itext('Returns a list of SObject');
      ie_close('p');
      ie_open('p');
      itext('Alias to ');
      ie_open('code');
      itext('toSObjectList()');
      ie_close('code');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('fetch');
      ie_close('h2');
      ie_open('p');
      itext('Fetch a subset of the result');
      ie_close('p');
      ie_open('h4');
      itext('public SObject fetch()');
      ie_close('h4');
      ie_open('p');
      itext('Fetch the first SObject from the result');
      ie_close('p');
      ie_open('p');
      itext('Returns an SObject');
      ie_close('p');
      $templateAlias2({ code: 'Account account =\n    (Account)\n    new Query(\'Account\').\n    fetch();', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public SObject fetch(Integer n)');
      ie_close('h4');
      ie_open('p');
      itext('Fetch the nth SObject from the result');
      ie_close('p');
      ie_open('p');
      itext('n: Indicates the nth SObject in the result list, starting with 0');
      ie_close('p');
      ie_open('p');
      itext('Returns an SObject');
      ie_close('p');
      $templateAlias2({ code: 'Account account =\n    (Account)\n    new Query(\'Account\').\n    fetch(2);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public List<SObject> fetch(Integer first, Integer last)');
      ie_close('h4');
      ie_open('p');
      itext('Fetch a subset of result in the range [first, last)');
      ie_close('p');
      ie_open('p');
      itext('Returns a list of SObject');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    fetch(2, 4);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('toSObjectList');
      ie_close('h2');
      ie_open('p');
      itext('Run the query as if running ');
      ie_open('code');
      itext('Database.query()');
      ie_close('code');
      ie_close('p');
      ie_open('h4');
      itext('public List<SObject> toSObjectList()');
      ie_close('h4');
      ie_open('p');
      itext('Returns a list of SObject');
      ie_close('p');
      ie_open('p');
      itext('Alias to ');
      ie_open('code');
      itext('run()');
      ie_close('code');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    toSObjectList();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('toIdList');
      ie_close('h2');
      ie_open('p');
      itext('Run the query and return the Id list of the result');
      ie_close('p');
      ie_open('h4');
      itext('public List<Id> toIdList()');
      ie_close('h4');
      ie_open('p');
      itext('Returns a list of Id');
      ie_close('p');
      $templateAlias2({ code: 'List<Id> accounts =\n    new Query(\'Account\').\n    toIdList();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param604 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'vyybz.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var vyybz = function (_Component) {
  _inherits(vyybz, _Component);

  function vyybz() {
    _classCallCheck(this, vyybz);

    return _possibleConstructorReturn(this, (vyybz.__proto__ || Object.getPrototypeOf(vyybz)).apply(this, arguments));
  }

  return vyybz;
}(_metalComponent2.default);

_metalSoy2.default.register(vyybz, templates);
exports.vyybz = vyybz;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[294]);