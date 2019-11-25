var pageComponent =
webpackJsonppageComponent([2],{

/***/ 302:
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

var _step_8Soy = __webpack_require__(303);

var _step_8Soy2 = _interopRequireDefault(_step_8Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var aYxNJ = function (_Component) {
  _inherits(aYxNJ, _Component);

  function aYxNJ() {
    _classCallCheck(this, aYxNJ);

    return _possibleConstructorReturn(this, (aYxNJ.__proto__ || Object.getPrototypeOf(aYxNJ)).apply(this, arguments));
  }

  return aYxNJ;
}(_metalComponent2.default);

;

_metalSoy2.default.register(aYxNJ, _step_8Soy2.default);

exports.default = aYxNJ;

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.aYxNJ = undefined;

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

  // This file was automatically generated from step_8.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace aYxNJ.
   * @public
   */

  goog.module('aYxNJ.incrementaldom');

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
    var param1146 = function param1146() {
      ie_open('h2');
      var dyn43 = opt_data.page.title;
      if (typeof dyn43 == 'function') dyn43();else if (dyn43 != null) itext(dyn43);
      ie_close('h2');
      ie_open('p');
      itext('In this section, we will see how a child relationship query, sometimes called subquery, can be constructed. But before that, let\'s review how a subquery works in Salesforce:');
      ie_close('p');
      ie_open('p');
      itext('Take the objects Account and Contact as an example. Contact object has a lookup field (foreign key) pointing to a Contact, so Account is the parent of Contact, and in reverse Contact is the child of Account. We already saw that in previous sections, when querying the Contact object, it\'s also possible to get the fields in the parent object, which is Account object in this case. However, it would be slightly more complicated when trying to query a field from a child.');
      ie_close('p');
      ie_open('p');
      itext('Here is an example of such a query in SOQL:');
      ie_close('p');
      $templateAlias2({ code: '\nSELECT Name, (SELECT FirstName, LastName FROM Contacts) FROM Account', mode: 'text' }, null, opt_ijData);
      ie_open('p');
      itext('In this case, \'Contacts\' is the child relationship name, and the query inside the parentheses is a subquery.');
      ie_close('p');
      ie_open('p');
      itext('Let\'s see how to construct such a query using Query.apex:');
      ie_close('p');
      $templateAlias2({ code: '\nList<Account> accounts =\n    new Query(\'Account\').\n    addSubquery(\n        Query.subquery(\'Contacts\').\n        selectFields(\'FirstName, LastName\')\n    ).\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Similar to the condition, we need to construct a subquery using the static method \'subquery\', which takes a child relationship name as a parameter, before calling the \'addSubquery\' member method.');
      ie_close('p');
      ie_open('p');
      itext('Here is another example of a subquery with conditions and limits:');
      ie_close('p');
      $templateAlias2({ code: '\nList<Account> accounts =\n    new Query(\'Account\').\n    addSubquery(\n        Query.subquery(\'Contacts\').\n        addConditionEq(\'FirstName\', \'Sam\').\n        addConditionIn(\'LastName\', new List<String>{\'Tarly\'})\n    ).\n    run();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('As we can see, after constructing the subquery, we can still do field selection and add conditions using the same methods in Query. Using a combination of the methods above, we should be able to build a query with a subquery in any complexity.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1146 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'aYxNJ.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var aYxNJ = function (_Component) {
  _inherits(aYxNJ, _Component);

  function aYxNJ() {
    _classCallCheck(this, aYxNJ);

    return _possibleConstructorReturn(this, (aYxNJ.__proto__ || Object.getPrototypeOf(aYxNJ)).apply(this, arguments));
  }

  return aYxNJ;
}(_metalComponent2.default);

_metalSoy2.default.register(aYxNJ, templates);
exports.aYxNJ = aYxNJ;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[302]);