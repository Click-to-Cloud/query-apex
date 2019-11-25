var pageComponent =
webpackJsonppageComponent([17],{

/***/ 278:
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

var _resultSoy = __webpack_require__(279);

var _resultSoy2 = _interopRequireDefault(_resultSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CAkNS = function (_Component) {
  _inherits(CAkNS, _Component);

  function CAkNS() {
    _classCallCheck(this, CAkNS);

    return _possibleConstructorReturn(this, (CAkNS.__proto__ || Object.getPrototypeOf(CAkNS)).apply(this, arguments));
  }

  return CAkNS;
}(_metalComponent2.default);

;

_metalSoy2.default.register(CAkNS, _resultSoy2.default);

exports.default = CAkNS;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.CAkNS = undefined;

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
   * @fileoverview Templates in namespace CAkNS.
   * @public
   */

  goog.module('CAkNS.incrementaldom');

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
    var param735 = function param735() {
      ie_open('h6');
      var dyn32 = opt_data.page.description;
      if (typeof dyn32 == 'function') dyn32();else if (dyn32 != null) itext(dyn32);
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
      itext('.');
      ie_close('p');
      ie_open('h4');
      itext('public List<SObject> run()');
      ie_close('h4');
      ie_open('p');
      itext('Returns a list of SObject.');
      ie_close('p');
      ie_open('p');
      itext('Alias to ');
      ie_open('code');
      itext('toSObjectList()');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('fetch');
      ie_close('h2');
      ie_open('p');
      itext('Fetch a subset of the result.');
      ie_close('p');
      ie_open('h4');
      itext('public SObject fetch()');
      ie_close('h4');
      ie_open('p');
      itext('Fetch the first SObject from the result.');
      ie_close('p');
      ie_open('p');
      itext('Returns an SObject.');
      ie_close('p');
      $templateAlias2({ code: 'Account account =\n    (Account)\n    new Query(\'Account\').\n    fetch();', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public SObject fetch(Integer n)');
      ie_close('h4');
      ie_open('p');
      itext('Fetch the n elements from the result.');
      ie_close('p');
      ie_open('p');
      itext('n: Indicates the number of elements.');
      ie_close('p');
      ie_open('p');
      itext('Returns an SObject.');
      ie_close('p');
      $templateAlias2({ code: 'Account account =\n    (Account)\n    new Query(\'Account\').\n    fetch(2);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h4');
      itext('public List<SObject> fetch(Integer first, Integer last)');
      ie_close('h4');
      ie_open('p');
      itext('Fetch a subset of result in the range [first, last).');
      ie_close('p');
      ie_open('p');
      itext('Returns a list of SObject.');
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
      itext('.');
      ie_close('p');
      ie_open('h4');
      itext('public List<SObject> toSObjectList()');
      ie_close('h4');
      ie_open('p');
      itext('Returns a list of SObject.');
      ie_close('p');
      ie_open('p');
      itext('Alias to ');
      ie_open('code');
      itext('run()');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: 'List<Account> accounts =\n    new Query(\'Account\').\n    toSObjectList();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('toIdList');
      ie_close('h2');
      ie_open('p');
      itext('Run the query and return the Id list of the result.');
      ie_close('p');
      ie_open('h4');
      itext('public List<Id> toIdList()');
      ie_close('h4');
      ie_open('p');
      itext('Returns a list of Id.');
      ie_close('p');
      $templateAlias2({ code: 'List<Id> accounts =\n    new Query(\'Account\').\n    toIdList();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('getQueryLocator');
      ie_close('h2');
      ie_open('p');
      itext('Get the QueryLocator that can be used for Batch Apex.');
      ie_close('p');
      ie_open('h4');
      itext('public Database.QueryLocator getQueryLocator()');
      ie_close('h4');
      ie_open('p');
      itext('Returns a Database.QueryLocator.');
      ie_close('p');
      $templateAlias2({ code: 'Database.QueryLocator locator =\n    new Query(\'Account\').\n    selectAllFields().\n    getQueryLocator();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
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
      itext('Returns a List of AggregateResult.');
      ie_close('p');
      ie_open('p');
      itext('The returned list is guaranteed to be non-empty.');
      ie_close('p');
      $templateAlias2({ code: 'List<AggregateResult> result =\n    new Query(\'Account\').\n    count(\'Name\').\n    aggregate();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('toQueryString');
      ie_close('h2');
      ie_open('p');
      itext('Get an executable SOQL string that can be used in ');
      ie_open('code');
      itext('Dateabase.query()');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('h4');
      itext('public String toQueryString()');
      ie_close('h4');
      ie_open('p');
      itext('Returns an executable SOQL string.');
      ie_close('p');
      $templateAlias2({ code: 'String queryStr = new Query(\'Account\').\n    selectAllFields().\n    run();\nList<Account> accounts = Datebase.query(queryStr);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param735 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'CAkNS.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var CAkNS = function (_Component) {
  _inherits(CAkNS, _Component);

  function CAkNS() {
    _classCallCheck(this, CAkNS);

    return _possibleConstructorReturn(this, (CAkNS.__proto__ || Object.getPrototypeOf(CAkNS)).apply(this, arguments));
  }

  return CAkNS;
}(_metalComponent2.default);

_metalSoy2.default.register(CAkNS, templates);
exports.CAkNS = CAkNS;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[278]);