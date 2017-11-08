webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	const platform_browser_dynamic_1 = __webpack_require__(1);
	const core_1 = __webpack_require__(3);
	const app_module_1 = __webpack_require__(23);
	if (true) {
	    core_1.enableProdMode();
	}
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(21);
	const app_component_1 = __webpack_require__(24);
	const index_1 = __webpack_require__(27);
	let AppModule = class AppModule {
	};
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            index_1.ComparisonModule
	        ],
	        declarations: [
	            app_component_1.AppComponent,
	        ],
	        bootstrap: [app_component_1.AppComponent]
	    }), 
	    __metadata('design:paramtypes', [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	let AppComponent = class AppComponent {
	};
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'myapp',
	        template: '<comparison></comparison>',
	        styles: [
	            __webpack_require__(25),
	            __webpack_require__(26)
	        ],
	        encapsulation: core_1.ViewEncapsulation.None
	    }), 
	    __metadata('design:paramtypes', [])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = "/*!\n * Bootstrap v3.3.6 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n    font-family: sans-serif;\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%\n}\n\nbody {\n    margin: 0\n}\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n    display: block\n}\n\naudio, canvas, progress, video {\n    display: inline-block;\n    vertical-align: baseline\n}\n\naudio:not([controls]) {\n    display: none;\n    height: 0\n}\n\n[hidden], template {\n    display: none\n}\n\na {\n    background-color: transparent\n}\n\na:active, a:hover {\n    outline: 0\n}\n\nabbr[title] {\n    border-bottom: 1px dotted\n}\n\nb, strong {\n    font-weight: 700\n}\n\ndfn {\n    font-style: italic\n}\n\nh1 {\n    margin: .67em 0;\n    font-size: 2em\n}\n\nmark {\n    color: #000;\n    background: #ff0\n}\n\nsmall {\n    font-size: 80%\n}\n\nsub, sup {\n    position: relative;\n    font-size: 75%;\n    line-height: 0;\n    vertical-align: baseline\n}\n\nsup {\n    top: -.5em\n}\n\nsub {\n    bottom: -.25em\n}\n\nimg {\n    border: 0\n}\n\nsvg:not(:root) {\n    overflow: hidden\n}\n\nfigure {\n    margin: 1em 40px\n}\n\nhr {\n    height: 0;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box\n}\n\npre {\n    overflow: auto\n}\n\ncode, kbd, pre, samp {\n    font-family: monospace, monospace;\n    font-size: 1em\n}\n\nbutton, input, optgroup, select, textarea {\n    margin: 0;\n    font: inherit;\n    color: inherit\n}\n\nbutton {\n    overflow: visible\n}\n\nbutton, select {\n    text-transform: none\n}\n\nbutton, html input[type=button], input[type=reset], input[type=submit] {\n    -webkit-appearance: button;\n    cursor: pointer\n}\n\nbutton[disabled], html input[disabled] {\n    cursor: default\n}\n\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n    padding: 0;\n    border: 0\n}\n\ninput {\n    line-height: normal\n}\n\ninput[type=checkbox], input[type=radio] {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 0\n}\n\ninput[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {\n    height: auto\n}\n\ninput[type=search] {\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n    -webkit-appearance: textfield\n}\n\ninput[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {\n    -webkit-appearance: none\n}\n\nfieldset {\n    padding: .35em .625em .75em;\n    margin: 0 2px;\n    border: 1px solid silver\n}\n\nlegend {\n    padding: 0;\n    border: 0\n}\n\ntextarea {\n    overflow: auto\n}\n\noptgroup {\n    font-weight: 700\n}\n\ntable {\n    border-spacing: 0;\n    border-collapse: collapse\n}\n\ntd, th {\n    padding: 0\n}\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n    *, :after, :before {\n        color: #000 !important;\n        text-shadow: none !important;\n        background: 0 0 !important;\n        -webkit-box-shadow: none !important;\n        box-shadow: none !important\n    }\n\n    a, a:visited {\n        text-decoration: underline\n    }\n\n    a[href]:after {\n        content: \" (\" attr(href) \")\"\n    }\n\n    abbr[title]:after {\n        content: \" (\" attr(title) \")\"\n    }\n\n    a[href^=\"javascript:\"]:after, a[href^=\"#\"]:after {\n        content: \"\"\n    }\n\n    blockquote, pre {\n        border: 1px solid #999;\n        page-break-inside: avoid\n    }\n\n    thead {\n        display: table-header-group\n    }\n\n    img, tr {\n        page-break-inside: avoid\n    }\n\n    img {\n        max-width: 100% !important\n    }\n\n    h2, h3, p {\n        orphans: 3;\n        widows: 3\n    }\n\n    h2, h3 {\n        page-break-after: avoid\n    }\n\n    .navbar {\n        display: none\n    }\n\n    .btn > .caret, .dropup > .btn > .caret {\n        border-top-color: #000 !important\n    }\n\n    .label {\n        border: 1px solid #000\n    }\n\n    .table {\n        border-collapse: collapse !important\n    }\n\n    .table td, .table th {\n        background-color: #fff !important\n    }\n\n    .table-bordered td, .table-bordered th {\n        border: 1px solid #ddd !important\n    }\n}\n\n@font-face {\n    font-family: 'Glyphicons Halflings';\n    src: url(../fonts/glyphicons-halflings-regular.eot);\n    src: url(../fonts/glyphicons-halflings-regular.eot?#iefix) format('embedded-opentype'), url(../fonts/glyphicons-halflings-regular.woff2) format('woff2'), url(../fonts/glyphicons-halflings-regular.woff) format('woff'), url(../fonts/glyphicons-halflings-regular.ttf) format('truetype'), url(../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular) format('svg')\n}\n\n.glyphicon {\n    position: relative;\n    top: 1px;\n    display: inline-block;\n    font-family: 'Glyphicons Halflings';\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale\n}\n\n.glyphicon-asterisk:before {\n    content: \"\\002a\"\n}\n\n.glyphicon-plus:before {\n    content: \"\\002b\"\n}\n\n.glyphicon-eur:before, .glyphicon-euro:before {\n    content: \"\\20ac\"\n}\n\n.glyphicon-minus:before {\n    content: \"\\2212\"\n}\n\n.glyphicon-cloud:before {\n    content: \"\\2601\"\n}\n\n.glyphicon-envelope:before {\n    content: \"\\2709\"\n}\n\n.glyphicon-pencil:before {\n    content: \"\\270f\"\n}\n\n.glyphicon-glass:before {\n    content: \"\\e001\"\n}\n\n.glyphicon-music:before {\n    content: \"\\e002\"\n}\n\n.glyphicon-search:before {\n    content: \"\\e003\"\n}\n\n.glyphicon-heart:before {\n    content: \"\\e005\"\n}\n\n.glyphicon-star:before {\n    content: \"\\e006\"\n}\n\n.glyphicon-star-empty:before {\n    content: \"\\e007\"\n}\n\n.glyphicon-user:before {\n    content: \"\\e008\"\n}\n\n.glyphicon-film:before {\n    content: \"\\e009\"\n}\n\n.glyphicon-th-large:before {\n    content: \"\\e010\"\n}\n\n.glyphicon-th:before {\n    content: \"\\e011\"\n}\n\n.glyphicon-th-list:before {\n    content: \"\\e012\"\n}\n\n.glyphicon-ok:before {\n    content: \"\\e013\"\n}\n\n.glyphicon-remove:before {\n    content: \"\\e014\"\n}\n\n.glyphicon-zoom-in:before {\n    content: \"\\e015\"\n}\n\n.glyphicon-zoom-out:before {\n    content: \"\\e016\"\n}\n\n.glyphicon-off:before {\n    content: \"\\e017\"\n}\n\n.glyphicon-signal:before {\n    content: \"\\e018\"\n}\n\n.glyphicon-cog:before {\n    content: \"\\e019\"\n}\n\n.glyphicon-trash:before {\n    content: \"\\e020\"\n}\n\n.glyphicon-home:before {\n    content: \"\\e021\"\n}\n\n.glyphicon-file:before {\n    content: \"\\e022\"\n}\n\n.glyphicon-time:before {\n    content: \"\\e023\"\n}\n\n.glyphicon-road:before {\n    content: \"\\e024\"\n}\n\n.glyphicon-download-alt:before {\n    content: \"\\e025\"\n}\n\n.glyphicon-download:before {\n    content: \"\\e026\"\n}\n\n.glyphicon-upload:before {\n    content: \"\\e027\"\n}\n\n.glyphicon-inbox:before {\n    content: \"\\e028\"\n}\n\n.glyphicon-play-circle:before {\n    content: \"\\e029\"\n}\n\n.glyphicon-repeat:before {\n    content: \"\\e030\"\n}\n\n.glyphicon-refresh:before {\n    content: \"\\e031\"\n}\n\n.glyphicon-list-alt:before {\n    content: \"\\e032\"\n}\n\n.glyphicon-lock:before {\n    content: \"\\e033\"\n}\n\n.glyphicon-flag:before {\n    content: \"\\e034\"\n}\n\n.glyphicon-headphones:before {\n    content: \"\\e035\"\n}\n\n.glyphicon-volume-off:before {\n    content: \"\\e036\"\n}\n\n.glyphicon-volume-down:before {\n    content: \"\\e037\"\n}\n\n.glyphicon-volume-up:before {\n    content: \"\\e038\"\n}\n\n.glyphicon-qrcode:before {\n    content: \"\\e039\"\n}\n\n.glyphicon-barcode:before {\n    content: \"\\e040\"\n}\n\n.glyphicon-tag:before {\n    content: \"\\e041\"\n}\n\n.glyphicon-tags:before {\n    content: \"\\e042\"\n}\n\n.glyphicon-book:before {\n    content: \"\\e043\"\n}\n\n.glyphicon-bookmark:before {\n    content: \"\\e044\"\n}\n\n.glyphicon-print:before {\n    content: \"\\e045\"\n}\n\n.glyphicon-camera:before {\n    content: \"\\e046\"\n}\n\n.glyphicon-font:before {\n    content: \"\\e047\"\n}\n\n.glyphicon-bold:before {\n    content: \"\\e048\"\n}\n\n.glyphicon-italic:before {\n    content: \"\\e049\"\n}\n\n.glyphicon-text-height:before {\n    content: \"\\e050\"\n}\n\n.glyphicon-text-width:before {\n    content: \"\\e051\"\n}\n\n.glyphicon-align-left:before {\n    content: \"\\e052\"\n}\n\n.glyphicon-align-center:before {\n    content: \"\\e053\"\n}\n\n.glyphicon-align-right:before {\n    content: \"\\e054\"\n}\n\n.glyphicon-align-justify:before {\n    content: \"\\e055\"\n}\n\n.glyphicon-list:before {\n    content: \"\\e056\"\n}\n\n.glyphicon-indent-left:before {\n    content: \"\\e057\"\n}\n\n.glyphicon-indent-right:before {\n    content: \"\\e058\"\n}\n\n.glyphicon-facetime-video:before {\n    content: \"\\e059\"\n}\n\n.glyphicon-picture:before {\n    content: \"\\e060\"\n}\n\n.glyphicon-map-marker:before {\n    content: \"\\e062\"\n}\n\n.glyphicon-adjust:before {\n    content: \"\\e063\"\n}\n\n.glyphicon-tint:before {\n    content: \"\\e064\"\n}\n\n.glyphicon-edit:before {\n    content: \"\\e065\"\n}\n\n.glyphicon-share:before {\n    content: \"\\e066\"\n}\n\n.glyphicon-check:before {\n    content: \"\\e067\"\n}\n\n.glyphicon-move:before {\n    content: \"\\e068\"\n}\n\n.glyphicon-step-backward:before {\n    content: \"\\e069\"\n}\n\n.glyphicon-fast-backward:before {\n    content: \"\\e070\"\n}\n\n.glyphicon-backward:before {\n    content: \"\\e071\"\n}\n\n.glyphicon-play:before {\n    content: \"\\e072\"\n}\n\n.glyphicon-pause:before {\n    content: \"\\e073\"\n}\n\n.glyphicon-stop:before {\n    content: \"\\e074\"\n}\n\n.glyphicon-forward:before {\n    content: \"\\e075\"\n}\n\n.glyphicon-fast-forward:before {\n    content: \"\\e076\"\n}\n\n.glyphicon-step-forward:before {\n    content: \"\\e077\"\n}\n\n.glyphicon-eject:before {\n    content: \"\\e078\"\n}\n\n.glyphicon-chevron-left:before {\n    content: \"\\e079\"\n}\n\n.glyphicon-chevron-right:before {\n    content: \"\\e080\"\n}\n\n.glyphicon-plus-sign:before {\n    content: \"\\e081\"\n}\n\n.glyphicon-minus-sign:before {\n    content: \"\\e082\"\n}\n\n.glyphicon-remove-sign:before {\n    content: \"\\e083\"\n}\n\n.glyphicon-ok-sign:before {\n    content: \"\\e084\"\n}\n\n.glyphicon-question-sign:before {\n    content: \"\\e085\"\n}\n\n.glyphicon-info-sign:before {\n    content: \"\\e086\"\n}\n\n.glyphicon-screenshot:before {\n    content: \"\\e087\"\n}\n\n.glyphicon-remove-circle:before {\n    content: \"\\e088\"\n}\n\n.glyphicon-ok-circle:before {\n    content: \"\\e089\"\n}\n\n.glyphicon-ban-circle:before {\n    content: \"\\e090\"\n}\n\n.glyphicon-arrow-left:before {\n    content: \"\\e091\"\n}\n\n.glyphicon-arrow-right:before {\n    content: \"\\e092\"\n}\n\n.glyphicon-arrow-up:before {\n    content: \"\\e093\"\n}\n\n.glyphicon-arrow-down:before {\n    content: \"\\e094\"\n}\n\n.glyphicon-share-alt:before {\n    content: \"\\e095\"\n}\n\n.glyphicon-resize-full:before {\n    content: \"\\e096\"\n}\n\n.glyphicon-resize-small:before {\n    content: \"\\e097\"\n}\n\n.glyphicon-exclamation-sign:before {\n    content: \"\\e101\"\n}\n\n.glyphicon-gift:before {\n    content: \"\\e102\"\n}\n\n.glyphicon-leaf:before {\n    content: \"\\e103\"\n}\n\n.glyphicon-fire:before {\n    content: \"\\e104\"\n}\n\n.glyphicon-eye-open:before {\n    content: \"\\e105\"\n}\n\n.glyphicon-eye-close:before {\n    content: \"\\e106\"\n}\n\n.glyphicon-warning-sign:before {\n    content: \"\\e107\"\n}\n\n.glyphicon-plane:before {\n    content: \"\\e108\"\n}\n\n.glyphicon-calendar:before {\n    content: \"\\e109\"\n}\n\n.glyphicon-random:before {\n    content: \"\\e110\"\n}\n\n.glyphicon-comment:before {\n    content: \"\\e111\"\n}\n\n.glyphicon-magnet:before {\n    content: \"\\e112\"\n}\n\n.glyphicon-chevron-up:before {\n    content: \"\\e113\"\n}\n\n.glyphicon-chevron-down:before {\n    content: \"\\e114\"\n}\n\n.glyphicon-retweet:before {\n    content: \"\\e115\"\n}\n\n.glyphicon-shopping-cart:before {\n    content: \"\\e116\"\n}\n\n.glyphicon-folder-close:before {\n    content: \"\\e117\"\n}\n\n.glyphicon-folder-open:before {\n    content: \"\\e118\"\n}\n\n.glyphicon-resize-vertical:before {\n    content: \"\\e119\"\n}\n\n.glyphicon-resize-horizontal:before {\n    content: \"\\e120\"\n}\n\n.glyphicon-hdd:before {\n    content: \"\\e121\"\n}\n\n.glyphicon-bullhorn:before {\n    content: \"\\e122\"\n}\n\n.glyphicon-bell:before {\n    content: \"\\e123\"\n}\n\n.glyphicon-certificate:before {\n    content: \"\\e124\"\n}\n\n.glyphicon-thumbs-up:before {\n    content: \"\\e125\"\n}\n\n.glyphicon-thumbs-down:before {\n    content: \"\\e126\"\n}\n\n.glyphicon-hand-right:before {\n    content: \"\\e127\"\n}\n\n.glyphicon-hand-left:before {\n    content: \"\\e128\"\n}\n\n.glyphicon-hand-up:before {\n    content: \"\\e129\"\n}\n\n.glyphicon-hand-down:before {\n    content: \"\\e130\"\n}\n\n.glyphicon-circle-arrow-right:before {\n    content: \"\\e131\"\n}\n\n.glyphicon-circle-arrow-left:before {\n    content: \"\\e132\"\n}\n\n.glyphicon-circle-arrow-up:before {\n    content: \"\\e133\"\n}\n\n.glyphicon-circle-arrow-down:before {\n    content: \"\\e134\"\n}\n\n.glyphicon-globe:before {\n    content: \"\\e135\"\n}\n\n.glyphicon-wrench:before {\n    content: \"\\e136\"\n}\n\n.glyphicon-tasks:before {\n    content: \"\\e137\"\n}\n\n.glyphicon-filter:before {\n    content: \"\\e138\"\n}\n\n.glyphicon-briefcase:before {\n    content: \"\\e139\"\n}\n\n.glyphicon-fullscreen:before {\n    content: \"\\e140\"\n}\n\n.glyphicon-dashboard:before {\n    content: \"\\e141\"\n}\n\n.glyphicon-paperclip:before {\n    content: \"\\e142\"\n}\n\n.glyphicon-heart-empty:before {\n    content: \"\\e143\"\n}\n\n.glyphicon-link:before {\n    content: \"\\e144\"\n}\n\n.glyphicon-phone:before {\n    content: \"\\e145\"\n}\n\n.glyphicon-pushpin:before {\n    content: \"\\e146\"\n}\n\n.glyphicon-usd:before {\n    content: \"\\e148\"\n}\n\n.glyphicon-gbp:before {\n    content: \"\\e149\"\n}\n\n.glyphicon-sort:before {\n    content: \"\\e150\"\n}\n\n.glyphicon-sort-by-alphabet:before {\n    content: \"\\e151\"\n}\n\n.glyphicon-sort-by-alphabet-alt:before {\n    content: \"\\e152\"\n}\n\n.glyphicon-sort-by-order:before {\n    content: \"\\e153\"\n}\n\n.glyphicon-sort-by-order-alt:before {\n    content: \"\\e154\"\n}\n\n.glyphicon-sort-by-attributes:before {\n    content: \"\\e155\"\n}\n\n.glyphicon-sort-by-attributes-alt:before {\n    content: \"\\e156\"\n}\n\n.glyphicon-unchecked:before {\n    content: \"\\e157\"\n}\n\n.glyphicon-expand:before {\n    content: \"\\e158\"\n}\n\n.glyphicon-collapse-down:before {\n    content: \"\\e159\"\n}\n\n.glyphicon-collapse-up:before {\n    content: \"\\e160\"\n}\n\n.glyphicon-log-in:before {\n    content: \"\\e161\"\n}\n\n.glyphicon-flash:before {\n    content: \"\\e162\"\n}\n\n.glyphicon-log-out:before {\n    content: \"\\e163\"\n}\n\n.glyphicon-new-window:before {\n    content: \"\\e164\"\n}\n\n.glyphicon-record:before {\n    content: \"\\e165\"\n}\n\n.glyphicon-save:before {\n    content: \"\\e166\"\n}\n\n.glyphicon-open:before {\n    content: \"\\e167\"\n}\n\n.glyphicon-saved:before {\n    content: \"\\e168\"\n}\n\n.glyphicon-import:before {\n    content: \"\\e169\"\n}\n\n.glyphicon-export:before {\n    content: \"\\e170\"\n}\n\n.glyphicon-send:before {\n    content: \"\\e171\"\n}\n\n.glyphicon-floppy-disk:before {\n    content: \"\\e172\"\n}\n\n.glyphicon-floppy-saved:before {\n    content: \"\\e173\"\n}\n\n.glyphicon-floppy-remove:before {\n    content: \"\\e174\"\n}\n\n.glyphicon-floppy-save:before {\n    content: \"\\e175\"\n}\n\n.glyphicon-floppy-open:before {\n    content: \"\\e176\"\n}\n\n.glyphicon-credit-card:before {\n    content: \"\\e177\"\n}\n\n.glyphicon-transfer:before {\n    content: \"\\e178\"\n}\n\n.glyphicon-cutlery:before {\n    content: \"\\e179\"\n}\n\n.glyphicon-header:before {\n    content: \"\\e180\"\n}\n\n.glyphicon-compressed:before {\n    content: \"\\e181\"\n}\n\n.glyphicon-earphone:before {\n    content: \"\\e182\"\n}\n\n.glyphicon-phone-alt:before {\n    content: \"\\e183\"\n}\n\n.glyphicon-tower:before {\n    content: \"\\e184\"\n}\n\n.glyphicon-stats:before {\n    content: \"\\e185\"\n}\n\n.glyphicon-sd-video:before {\n    content: \"\\e186\"\n}\n\n.glyphicon-hd-video:before {\n    content: \"\\e187\"\n}\n\n.glyphicon-subtitles:before {\n    content: \"\\e188\"\n}\n\n.glyphicon-sound-stereo:before {\n    content: \"\\e189\"\n}\n\n.glyphicon-sound-dolby:before {\n    content: \"\\e190\"\n}\n\n.glyphicon-sound-5-1:before {\n    content: \"\\e191\"\n}\n\n.glyphicon-sound-6-1:before {\n    content: \"\\e192\"\n}\n\n.glyphicon-sound-7-1:before {\n    content: \"\\e193\"\n}\n\n.glyphicon-copyright-mark:before {\n    content: \"\\e194\"\n}\n\n.glyphicon-registration-mark:before {\n    content: \"\\e195\"\n}\n\n.glyphicon-cloud-download:before {\n    content: \"\\e197\"\n}\n\n.glyphicon-cloud-upload:before {\n    content: \"\\e198\"\n}\n\n.glyphicon-tree-conifer:before {\n    content: \"\\e199\"\n}\n\n.glyphicon-tree-deciduous:before {\n    content: \"\\e200\"\n}\n\n.glyphicon-cd:before {\n    content: \"\\e201\"\n}\n\n.glyphicon-save-file:before {\n    content: \"\\e202\"\n}\n\n.glyphicon-open-file:before {\n    content: \"\\e203\"\n}\n\n.glyphicon-level-up:before {\n    content: \"\\e204\"\n}\n\n.glyphicon-copy:before {\n    content: \"\\e205\"\n}\n\n.glyphicon-paste:before {\n    content: \"\\e206\"\n}\n\n.glyphicon-alert:before {\n    content: \"\\e209\"\n}\n\n.glyphicon-equalizer:before {\n    content: \"\\e210\"\n}\n\n.glyphicon-king:before {\n    content: \"\\e211\"\n}\n\n.glyphicon-queen:before {\n    content: \"\\e212\"\n}\n\n.glyphicon-pawn:before {\n    content: \"\\e213\"\n}\n\n.glyphicon-bishop:before {\n    content: \"\\e214\"\n}\n\n.glyphicon-knight:before {\n    content: \"\\e215\"\n}\n\n.glyphicon-baby-formula:before {\n    content: \"\\e216\"\n}\n\n.glyphicon-tent:before {\n    content: \"\\26fa\"\n}\n\n.glyphicon-blackboard:before {\n    content: \"\\e218\"\n}\n\n.glyphicon-bed:before {\n    content: \"\\e219\"\n}\n\n.glyphicon-apple:before {\n    content: \"\\f8ff\"\n}\n\n.glyphicon-erase:before {\n    content: \"\\e221\"\n}\n\n.glyphicon-hourglass:before {\n    content: \"\\231b\"\n}\n\n.glyphicon-lamp:before {\n    content: \"\\e223\"\n}\n\n.glyphicon-duplicate:before {\n    content: \"\\e224\"\n}\n\n.glyphicon-piggy-bank:before {\n    content: \"\\e225\"\n}\n\n.glyphicon-scissors:before {\n    content: \"\\e226\"\n}\n\n.glyphicon-bitcoin:before {\n    content: \"\\e227\"\n}\n\n.glyphicon-btc:before {\n    content: \"\\e227\"\n}\n\n.glyphicon-xbt:before {\n    content: \"\\e227\"\n}\n\n.glyphicon-yen:before {\n    content: \"\\00a5\"\n}\n\n.glyphicon-jpy:before {\n    content: \"\\00a5\"\n}\n\n.glyphicon-ruble:before {\n    content: \"\\20bd\"\n}\n\n.glyphicon-rub:before {\n    content: \"\\20bd\"\n}\n\n.glyphicon-scale:before {\n    content: \"\\e230\"\n}\n\n.glyphicon-ice-lolly:before {\n    content: \"\\e231\"\n}\n\n.glyphicon-ice-lolly-tasted:before {\n    content: \"\\e232\"\n}\n\n.glyphicon-education:before {\n    content: \"\\e233\"\n}\n\n.glyphicon-option-horizontal:before {\n    content: \"\\e234\"\n}\n\n.glyphicon-option-vertical:before {\n    content: \"\\e235\"\n}\n\n.glyphicon-menu-hamburger:before {\n    content: \"\\e236\"\n}\n\n.glyphicon-modal-window:before {\n    content: \"\\e237\"\n}\n\n.glyphicon-oil:before {\n    content: \"\\e238\"\n}\n\n.glyphicon-grain:before {\n    content: \"\\e239\"\n}\n\n.glyphicon-sunglasses:before {\n    content: \"\\e240\"\n}\n\n.glyphicon-text-size:before {\n    content: \"\\e241\"\n}\n\n.glyphicon-text-color:before {\n    content: \"\\e242\"\n}\n\n.glyphicon-text-background:before {\n    content: \"\\e243\"\n}\n\n.glyphicon-object-align-top:before {\n    content: \"\\e244\"\n}\n\n.glyphicon-object-align-bottom:before {\n    content: \"\\e245\"\n}\n\n.glyphicon-object-align-horizontal:before {\n    content: \"\\e246\"\n}\n\n.glyphicon-object-align-left:before {\n    content: \"\\e247\"\n}\n\n.glyphicon-object-align-vertical:before {\n    content: \"\\e248\"\n}\n\n.glyphicon-object-align-right:before {\n    content: \"\\e249\"\n}\n\n.glyphicon-triangle-right:before {\n    content: \"\\e250\"\n}\n\n.glyphicon-triangle-left:before {\n    content: \"\\e251\"\n}\n\n.glyphicon-triangle-bottom:before {\n    content: \"\\e252\"\n}\n\n.glyphicon-triangle-top:before {\n    content: \"\\e253\"\n}\n\n.glyphicon-console:before {\n    content: \"\\e254\"\n}\n\n.glyphicon-superscript:before {\n    content: \"\\e255\"\n}\n\n.glyphicon-subscript:before {\n    content: \"\\e256\"\n}\n\n.glyphicon-menu-left:before {\n    content: \"\\e257\"\n}\n\n.glyphicon-menu-right:before {\n    content: \"\\e258\"\n}\n\n.glyphicon-menu-down:before {\n    content: \"\\e259\"\n}\n\n.glyphicon-menu-up:before {\n    content: \"\\e260\"\n}\n\n* {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box\n}\n\n:after, :before {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box\n}\n\nhtml {\n    font-size: 10px;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)\n}\n\nbody {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #333;\n    background-color: #fff\n}\n\nbutton, input, select, textarea {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit\n}\n\na {\n    color: #337ab7;\n    text-decoration: none\n}\n\na:focus, a:hover {\n    color: #23527c;\n    text-decoration: underline\n}\n\na:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px\n}\n\nfigure {\n    margin: 0\n}\n\nimg {\n    vertical-align: middle\n}\n\n.carousel-inner > .item > a > img, .carousel-inner > .item > img, .img-responsive, .thumbnail a > img, .thumbnail > img {\n    display: block;\n    max-width: 100%;\n    height: auto\n}\n\n.img-rounded {\n    border-radius: 6px\n}\n\n.img-thumbnail {\n    display: inline-block;\n    max-width: 100%;\n    height: auto;\n    padding: 4px;\n    line-height: 1.42857143;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    -webkit-transition: all .2s ease-in-out;\n    -o-transition: all .2s ease-in-out;\n    transition: all .2s ease-in-out\n}\n\n.img-circle {\n    border-radius: 50%\n}\n\nhr {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    border: 0;\n    border-top: 1px solid #eee\n}\n\n.sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    border: 0\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n    position: static;\n    width: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    clip: auto\n}\n\n[role=button] {\n    cursor: pointer\n}\n\n.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\n    font-family: inherit;\n    font-weight: 500;\n    line-height: 1.1;\n    color: inherit\n}\n\n.h1 .small, .h1 small, .h2 .small, .h2 small, .h3 .small, .h3 small, .h4 .small, .h4 small, .h5 .small, .h5 small, .h6 .small, .h6 small, h1 .small, h1 small, h2 .small, h2 small, h3 .small, h3 small, h4 .small, h4 small, h5 .small, h5 small, h6 .small, h6 small {\n    font-weight: 400;\n    line-height: 1;\n    color: #777\n}\n\n.h1, .h2, .h3, h1, h2, h3 {\n    margin-top: 20px;\n    margin-bottom: 10px\n}\n\n.h1 .small, .h1 small, .h2 .small, .h2 small, .h3 .small, .h3 small, h1 .small, h1 small, h2 .small, h2 small, h3 .small, h3 small {\n    font-size: 65%\n}\n\n.h4, .h5, .h6, h4, h5, h6 {\n    margin-top: 10px;\n    margin-bottom: 10px\n}\n\n.h4 .small, .h4 small, .h5 .small, .h5 small, .h6 .small, .h6 small, h4 .small, h4 small, h5 .small, h5 small, h6 .small, h6 small {\n    font-size: 75%\n}\n\n.h1, h1 {\n    font-size: 36px\n}\n\n.h2, h2 {\n    font-size: 30px\n}\n\n.h3, h3 {\n    font-size: 24px\n}\n\n.h4, h4 {\n    font-size: 18px\n}\n\n.h5, h5 {\n    font-size: 14px\n}\n\n.h6, h6 {\n    font-size: 12px\n}\n\np {\n    margin: 0 0 10px\n}\n\n.lead {\n    margin-bottom: 20px;\n    font-size: 16px;\n    font-weight: 300;\n    line-height: 1.4\n}\n\n@media (min-width: 768px) {\n    .lead {\n        font-size: 21px\n    }\n}\n\n.small, small {\n    font-size: 85%\n}\n\n.mark, mark {\n    padding: .2em;\n    background-color: #fcf8e3\n}\n\n.text-left {\n    text-align: left\n}\n\n.text-right {\n    text-align: right\n}\n\n.text-center {\n    text-align: center\n}\n\n.text-justify {\n    text-align: justify\n}\n\n.text-nowrap {\n    white-space: nowrap\n}\n\n.text-lowercase {\n    text-transform: lowercase\n}\n\n.text-uppercase {\n    text-transform: uppercase\n}\n\n.text-capitalize {\n    text-transform: capitalize\n}\n\n.text-muted {\n    color: #777\n}\n\n.text-primary {\n    color: #337ab7\n}\n\na.text-primary:focus, a.text-primary:hover {\n    color: #286090\n}\n\n.text-success {\n    color: #3c763d\n}\n\na.text-success:focus, a.text-success:hover {\n    color: #2b542c\n}\n\n.text-info {\n    color: #31708f\n}\n\na.text-info:focus, a.text-info:hover {\n    color: #245269\n}\n\n.text-warning {\n    color: #8a6d3b\n}\n\na.text-warning:focus, a.text-warning:hover {\n    color: #66512c\n}\n\n.text-danger {\n    color: #a94442\n}\n\na.text-danger:focus, a.text-danger:hover {\n    color: #843534\n}\n\n.bg-primary {\n    color: #fff;\n    background-color: #337ab7\n}\n\na.bg-primary:focus, a.bg-primary:hover {\n    background-color: #286090\n}\n\n.bg-success {\n    background-color: #dff0d8\n}\n\na.bg-success:focus, a.bg-success:hover {\n    background-color: #c1e2b3\n}\n\n.bg-info {\n    background-color: #d9edf7\n}\n\na.bg-info:focus, a.bg-info:hover {\n    background-color: #afd9ee\n}\n\n.bg-warning {\n    background-color: #fcf8e3\n}\n\na.bg-warning:focus, a.bg-warning:hover {\n    background-color: #f7ecb5\n}\n\n.bg-danger {\n    background-color: #f2dede\n}\n\na.bg-danger:focus, a.bg-danger:hover {\n    background-color: #e4b9b9\n}\n\n.page-header {\n    padding-bottom: 9px;\n    margin: 40px 0 20px;\n    border-bottom: 1px solid #eee\n}\n\nol, ul {\n    margin-top: 0;\n    margin-bottom: 10px\n}\n\nol ol, ol ul, ul ol, ul ul {\n    margin-bottom: 0\n}\n\n.list-unstyled {\n    padding-left: 0;\n    list-style: none\n}\n\n.list-inline {\n    padding-left: 0;\n    margin-left: -5px;\n    list-style: none\n}\n\n.list-inline > li {\n    display: inline-block;\n    padding-right: 5px;\n    padding-left: 5px\n}\n\ndl {\n    margin-top: 0;\n    margin-bottom: 20px\n}\n\ndd, dt {\n    line-height: 1.42857143\n}\n\ndt {\n    font-weight: 700\n}\n\ndd {\n    margin-left: 0\n}\n\n@media (min-width: 768px) {\n    .dl-horizontal dt {\n        float: left;\n        width: 160px;\n        overflow: hidden;\n        clear: left;\n        text-align: right;\n        text-overflow: ellipsis;\n        white-space: nowrap\n    }\n\n    .dl-horizontal dd {\n        margin-left: 180px\n    }\n}\n\nabbr[data-original-title], abbr[title] {\n    cursor: help;\n    border-bottom: 1px dotted #777\n}\n\n.initialism {\n    font-size: 90%;\n    text-transform: uppercase\n}\n\nblockquote {\n    padding: 10px 20px;\n    margin: 0 0 20px;\n    font-size: 17.5px;\n    border-left: 5px solid #eee\n}\n\nblockquote ol:last-child, blockquote p:last-child, blockquote ul:last-child {\n    margin-bottom: 0\n}\n\nblockquote .small, blockquote footer, blockquote small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857143;\n    color: #777\n}\n\nblockquote .small:before, blockquote footer:before, blockquote small:before {\n    content: '\\2014 \\00A0'\n}\n\n.blockquote-reverse, blockquote.pull-right {\n    padding-right: 15px;\n    padding-left: 0;\n    text-align: right;\n    border-right: 5px solid #eee;\n    border-left: 0\n}\n\n.blockquote-reverse .small:before, .blockquote-reverse footer:before, .blockquote-reverse small:before, blockquote.pull-right .small:before, blockquote.pull-right footer:before, blockquote.pull-right small:before {\n    content: ''\n}\n\n.blockquote-reverse .small:after, .blockquote-reverse footer:after, .blockquote-reverse small:after, blockquote.pull-right .small:after, blockquote.pull-right footer:after, blockquote.pull-right small:after {\n    content: '\\00A0 \\2014'\n}\n\naddress {\n    margin-bottom: 20px;\n    font-style: normal;\n    line-height: 1.42857143\n}\n\ncode, kbd, pre, samp {\n    font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace\n}\n\ncode {\n    padding: 2px 4px;\n    font-size: 90%;\n    color: #c7254e;\n    background-color: #f9f2f4;\n    border-radius: 4px\n}\n\nkbd {\n    padding: 2px 4px;\n    font-size: 90%;\n    color: #fff;\n    background-color: #333;\n    border-radius: 3px;\n    -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25)\n}\n\nkbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: 700;\n    -webkit-box-shadow: none;\n    box-shadow: none\n}\n\npre {\n    display: block;\n    padding: 9.5px;\n    margin: 0 0 10px;\n    font-size: 13px;\n    line-height: 1.42857143;\n    color: #333;\n    word-break: break-all;\n    word-wrap: break-word;\n    background-color: #f5f5f5;\n    border: 1px solid #ccc;\n    border-radius: 4px\n}\n\npre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0\n}\n\n.pre-scrollable {\n    max-height: 340px;\n    overflow-y: scroll\n}\n\n.container {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto\n}\n\n@media (min-width: 768px) {\n    .container {\n        width: 750px\n    }\n}\n\n@media (min-width: 992px) {\n    .container {\n        width: 970px\n    }\n}\n\n@media (min-width: 1200px) {\n    .container {\n        width: 1170px\n    }\n}\n\n@media (min-width: 1500px) {\n    .container {\n        width: 1300px\n    }\n}\n\n@media (min-width: 1700px) {\n    .container {\n        width: 1400px\n    }\n}\n\n@media (min-width: 1900px) {\n    .container {\n        width: 1600px\n    }\n}\n\n.container-fluid {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto\n}\n\n.row {\n    margin-right: -15px;\n    margin-left: -15px\n}\n\n.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px\n}\n\n.col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\n    float: left\n}\n\n.col-xs-12 {\n    width: 100%\n}\n\n.col-xs-11 {\n    width: 91.66666667%\n}\n\n.col-xs-10 {\n    width: 83.33333333%\n}\n\n.col-xs-9 {\n    width: 75%\n}\n\n.col-xs-8 {\n    width: 66.66666667%\n}\n\n.col-xs-7 {\n    width: 58.33333333%\n}\n\n.col-xs-6 {\n    width: 50%\n}\n\n.col-xs-5 {\n    width: 41.66666667%\n}\n\n.col-xs-4 {\n    width: 33.33333333%\n}\n\n.col-xs-3 {\n    width: 25%\n}\n\n.col-xs-2 {\n    width: 16.66666667%\n}\n\n.col-xs-1 {\n    width: 8.33333333%\n}\n\n.col-xs-pull-12 {\n    right: 100%\n}\n\n.col-xs-pull-11 {\n    right: 91.66666667%\n}\n\n.col-xs-pull-10 {\n    right: 83.33333333%\n}\n\n.col-xs-pull-9 {\n    right: 75%\n}\n\n.col-xs-pull-8 {\n    right: 66.66666667%\n}\n\n.col-xs-pull-7 {\n    right: 58.33333333%\n}\n\n.col-xs-pull-6 {\n    right: 50%\n}\n\n.col-xs-pull-5 {\n    right: 41.66666667%\n}\n\n.col-xs-pull-4 {\n    right: 33.33333333%\n}\n\n.col-xs-pull-3 {\n    right: 25%\n}\n\n.col-xs-pull-2 {\n    right: 16.66666667%\n}\n\n.col-xs-pull-1 {\n    right: 8.33333333%\n}\n\n.col-xs-pull-0 {\n    right: auto\n}\n\n.col-xs-push-12 {\n    left: 100%\n}\n\n.col-xs-push-11 {\n    left: 91.66666667%\n}\n\n.col-xs-push-10 {\n    left: 83.33333333%\n}\n\n.col-xs-push-9 {\n    left: 75%\n}\n\n.col-xs-push-8 {\n    left: 66.66666667%\n}\n\n.col-xs-push-7 {\n    left: 58.33333333%\n}\n\n.col-xs-push-6 {\n    left: 50%\n}\n\n.col-xs-push-5 {\n    left: 41.66666667%\n}\n\n.col-xs-push-4 {\n    left: 33.33333333%\n}\n\n.col-xs-push-3 {\n    left: 25%\n}\n\n.col-xs-push-2 {\n    left: 16.66666667%\n}\n\n.col-xs-push-1 {\n    left: 8.33333333%\n}\n\n.col-xs-push-0 {\n    left: auto\n}\n\n.col-xs-offset-12 {\n    margin-left: 100%\n}\n\n.col-xs-offset-11 {\n    margin-left: 91.66666667%\n}\n\n.col-xs-offset-10 {\n    margin-left: 83.33333333%\n}\n\n.col-xs-offset-9 {\n    margin-left: 75%\n}\n\n.col-xs-offset-8 {\n    margin-left: 66.66666667%\n}\n\n.col-xs-offset-7 {\n    margin-left: 58.33333333%\n}\n\n.col-xs-offset-6 {\n    margin-left: 50%\n}\n\n.col-xs-offset-5 {\n    margin-left: 41.66666667%\n}\n\n.col-xs-offset-4 {\n    margin-left: 33.33333333%\n}\n\n.col-xs-offset-3 {\n    margin-left: 25%\n}\n\n.col-xs-offset-2 {\n    margin-left: 16.66666667%\n}\n\n.col-xs-offset-1 {\n    margin-left: 8.33333333%\n}\n\n.col-xs-offset-0 {\n    margin-left: 0\n}\n\n@media (min-width: 768px) {\n    .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9 {\n        float: left\n    }\n\n    .col-sm-12 {\n        width: 100%\n    }\n\n    .col-sm-11 {\n        width: 91.66666667%\n    }\n\n    .col-sm-10 {\n        width: 83.33333333%\n    }\n\n    .col-sm-9 {\n        width: 75%\n    }\n\n    .col-sm-8 {\n        width: 66.66666667%\n    }\n\n    .col-sm-7 {\n        width: 58.33333333%\n    }\n\n    .col-sm-6 {\n        width: 50%\n    }\n\n    .col-sm-5 {\n        width: 41.66666667%\n    }\n\n    .col-sm-4 {\n        width: 33.33333333%\n    }\n\n    .col-sm-3 {\n        width: 25%\n    }\n\n    .col-sm-2 {\n        width: 16.66666667%\n    }\n\n    .col-sm-1 {\n        width: 8.33333333%\n    }\n\n    .col-sm-pull-12 {\n        right: 100%\n    }\n\n    .col-sm-pull-11 {\n        right: 91.66666667%\n    }\n\n    .col-sm-pull-10 {\n        right: 83.33333333%\n    }\n\n    .col-sm-pull-9 {\n        right: 75%\n    }\n\n    .col-sm-pull-8 {\n        right: 66.66666667%\n    }\n\n    .col-sm-pull-7 {\n        right: 58.33333333%\n    }\n\n    .col-sm-pull-6 {\n        right: 50%\n    }\n\n    .col-sm-pull-5 {\n        right: 41.66666667%\n    }\n\n    .col-sm-pull-4 {\n        right: 33.33333333%\n    }\n\n    .col-sm-pull-3 {\n        right: 25%\n    }\n\n    .col-sm-pull-2 {\n        right: 16.66666667%\n    }\n\n    .col-sm-pull-1 {\n        right: 8.33333333%\n    }\n\n    .col-sm-pull-0 {\n        right: auto\n    }\n\n    .col-sm-push-12 {\n        left: 100%\n    }\n\n    .col-sm-push-11 {\n        left: 91.66666667%\n    }\n\n    .col-sm-push-10 {\n        left: 83.33333333%\n    }\n\n    .col-sm-push-9 {\n        left: 75%\n    }\n\n    .col-sm-push-8 {\n        left: 66.66666667%\n    }\n\n    .col-sm-push-7 {\n        left: 58.33333333%\n    }\n\n    .col-sm-push-6 {\n        left: 50%\n    }\n\n    .col-sm-push-5 {\n        left: 41.66666667%\n    }\n\n    .col-sm-push-4 {\n        left: 33.33333333%\n    }\n\n    .col-sm-push-3 {\n        left: 25%\n    }\n\n    .col-sm-push-2 {\n        left: 16.66666667%\n    }\n\n    .col-sm-push-1 {\n        left: 8.33333333%\n    }\n\n    .col-sm-push-0 {\n        left: auto\n    }\n\n    .col-sm-offset-12 {\n        margin-left: 100%\n    }\n\n    .col-sm-offset-11 {\n        margin-left: 91.66666667%\n    }\n\n    .col-sm-offset-10 {\n        margin-left: 83.33333333%\n    }\n\n    .col-sm-offset-9 {\n        margin-left: 75%\n    }\n\n    .col-sm-offset-8 {\n        margin-left: 66.66666667%\n    }\n\n    .col-sm-offset-7 {\n        margin-left: 58.33333333%\n    }\n\n    .col-sm-offset-6 {\n        margin-left: 50%\n    }\n\n    .col-sm-offset-5 {\n        margin-left: 41.66666667%\n    }\n\n    .col-sm-offset-4 {\n        margin-left: 33.33333333%\n    }\n\n    .col-sm-offset-3 {\n        margin-left: 25%\n    }\n\n    .col-sm-offset-2 {\n        margin-left: 16.66666667%\n    }\n\n    .col-sm-offset-1 {\n        margin-left: 8.33333333%\n    }\n\n    .col-sm-offset-0 {\n        margin-left: 0\n    }\n}\n\n@media (min-width: 992px) {\n    .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9 {\n        float: left\n    }\n\n    .col-md-12 {\n        width: 100%\n    }\n\n    .col-md-11 {\n        width: 91.66666667%\n    }\n\n    .col-md-10 {\n        width: 83.33333333%\n    }\n\n    .col-md-9 {\n        width: 75%\n    }\n\n    .col-md-8 {\n        width: 66.66666667%\n    }\n\n    .col-md-7 {\n        width: 58.33333333%\n    }\n\n    .col-md-6 {\n        width: 50%\n    }\n\n    .col-md-5 {\n        width: 41.66666667%\n    }\n\n    .col-md-4 {\n        width: 33.33333333%\n    }\n\n    .col-md-3 {\n        width: 25%\n    }\n\n    .col-md-2 {\n        width: 16.66666667%\n    }\n\n    .col-md-1 {\n        width: 8.33333333%\n    }\n\n    .col-md-pull-12 {\n        right: 100%\n    }\n\n    .col-md-pull-11 {\n        right: 91.66666667%\n    }\n\n    .col-md-pull-10 {\n        right: 83.33333333%\n    }\n\n    .col-md-pull-9 {\n        right: 75%\n    }\n\n    .col-md-pull-8 {\n        right: 66.66666667%\n    }\n\n    .col-md-pull-7 {\n        right: 58.33333333%\n    }\n\n    .col-md-pull-6 {\n        right: 50%\n    }\n\n    .col-md-pull-5 {\n        right: 41.66666667%\n    }\n\n    .col-md-pull-4 {\n        right: 33.33333333%\n    }\n\n    .col-md-pull-3 {\n        right: 25%\n    }\n\n    .col-md-pull-2 {\n        right: 16.66666667%\n    }\n\n    .col-md-pull-1 {\n        right: 8.33333333%\n    }\n\n    .col-md-pull-0 {\n        right: auto\n    }\n\n    .col-md-push-12 {\n        left: 100%\n    }\n\n    .col-md-push-11 {\n        left: 91.66666667%\n    }\n\n    .col-md-push-10 {\n        left: 83.33333333%\n    }\n\n    .col-md-push-9 {\n        left: 75%\n    }\n\n    .col-md-push-8 {\n        left: 66.66666667%\n    }\n\n    .col-md-push-7 {\n        left: 58.33333333%\n    }\n\n    .col-md-push-6 {\n        left: 50%\n    }\n\n    .col-md-push-5 {\n        left: 41.66666667%\n    }\n\n    .col-md-push-4 {\n        left: 33.33333333%\n    }\n\n    .col-md-push-3 {\n        left: 25%\n    }\n\n    .col-md-push-2 {\n        left: 16.66666667%\n    }\n\n    .col-md-push-1 {\n        left: 8.33333333%\n    }\n\n    .col-md-push-0 {\n        left: auto\n    }\n\n    .col-md-offset-12 {\n        margin-left: 100%\n    }\n\n    .col-md-offset-11 {\n        margin-left: 91.66666667%\n    }\n\n    .col-md-offset-10 {\n        margin-left: 83.33333333%\n    }\n\n    .col-md-offset-9 {\n        margin-left: 75%\n    }\n\n    .col-md-offset-8 {\n        margin-left: 66.66666667%\n    }\n\n    .col-md-offset-7 {\n        margin-left: 58.33333333%\n    }\n\n    .col-md-offset-6 {\n        margin-left: 50%\n    }\n\n    .col-md-offset-5 {\n        margin-left: 41.66666667%\n    }\n\n    .col-md-offset-4 {\n        margin-left: 33.33333333%\n    }\n\n    .col-md-offset-3 {\n        margin-left: 25%\n    }\n\n    .col-md-offset-2 {\n        margin-left: 16.66666667%\n    }\n\n    .col-md-offset-1 {\n        margin-left: 8.33333333%\n    }\n\n    .col-md-offset-0 {\n        margin-left: 0\n    }\n}\n\n@media (min-width: 1200px) {\n    .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9 {\n        float: left\n    }\n\n    .col-lg-12 {\n        width: 100%\n    }\n\n    .col-lg-11 {\n        width: 91.66666667%\n    }\n\n    .col-lg-10 {\n        width: 83.33333333%\n    }\n\n    .col-lg-9 {\n        width: 75%\n    }\n\n    .col-lg-8 {\n        width: 66.66666667%\n    }\n\n    .col-lg-7 {\n        width: 58.33333333%\n    }\n\n    .col-lg-6 {\n        width: 50%\n    }\n\n    .col-lg-5 {\n        width: 41.66666667%\n    }\n\n    .col-lg-4 {\n        width: 33.33333333%\n    }\n\n    .col-lg-3 {\n        width: 25%\n    }\n\n    .col-lg-2 {\n        width: 16.66666667%\n    }\n\n    .col-lg-1 {\n        width: 8.33333333%\n    }\n\n    .col-lg-pull-12 {\n        right: 100%\n    }\n\n    .col-lg-pull-11 {\n        right: 91.66666667%\n    }\n\n    .col-lg-pull-10 {\n        right: 83.33333333%\n    }\n\n    .col-lg-pull-9 {\n        right: 75%\n    }\n\n    .col-lg-pull-8 {\n        right: 66.66666667%\n    }\n\n    .col-lg-pull-7 {\n        right: 58.33333333%\n    }\n\n    .col-lg-pull-6 {\n        right: 50%\n    }\n\n    .col-lg-pull-5 {\n        right: 41.66666667%\n    }\n\n    .col-lg-pull-4 {\n        right: 33.33333333%\n    }\n\n    .col-lg-pull-3 {\n        right: 25%\n    }\n\n    .col-lg-pull-2 {\n        right: 16.66666667%\n    }\n\n    .col-lg-pull-1 {\n        right: 8.33333333%\n    }\n\n    .col-lg-pull-0 {\n        right: auto\n    }\n\n    .col-lg-push-12 {\n        left: 100%\n    }\n\n    .col-lg-push-11 {\n        left: 91.66666667%\n    }\n\n    .col-lg-push-10 {\n        left: 83.33333333%\n    }\n\n    .col-lg-push-9 {\n        left: 75%\n    }\n\n    .col-lg-push-8 {\n        left: 66.66666667%\n    }\n\n    .col-lg-push-7 {\n        left: 58.33333333%\n    }\n\n    .col-lg-push-6 {\n        left: 50%\n    }\n\n    .col-lg-push-5 {\n        left: 41.66666667%\n    }\n\n    .col-lg-push-4 {\n        left: 33.33333333%\n    }\n\n    .col-lg-push-3 {\n        left: 25%\n    }\n\n    .col-lg-push-2 {\n        left: 16.66666667%\n    }\n\n    .col-lg-push-1 {\n        left: 8.33333333%\n    }\n\n    .col-lg-push-0 {\n        left: auto\n    }\n\n    .col-lg-offset-12 {\n        margin-left: 100%\n    }\n\n    .col-lg-offset-11 {\n        margin-left: 91.66666667%\n    }\n\n    .col-lg-offset-10 {\n        margin-left: 83.33333333%\n    }\n\n    .col-lg-offset-9 {\n        margin-left: 75%\n    }\n\n    .col-lg-offset-8 {\n        margin-left: 66.66666667%\n    }\n\n    .col-lg-offset-7 {\n        margin-left: 58.33333333%\n    }\n\n    .col-lg-offset-6 {\n        margin-left: 50%\n    }\n\n    .col-lg-offset-5 {\n        margin-left: 41.66666667%\n    }\n\n    .col-lg-offset-4 {\n        margin-left: 33.33333333%\n    }\n\n    .col-lg-offset-3 {\n        margin-left: 25%\n    }\n\n    .col-lg-offset-2 {\n        margin-left: 16.66666667%\n    }\n\n    .col-lg-offset-1 {\n        margin-left: 8.33333333%\n    }\n\n    .col-lg-offset-0 {\n        margin-left: 0\n    }\n}\n\ntable {\n    background-color: transparent\n}\n\ncaption {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    color: #777;\n    text-align: left\n}\n\nth {\n    text-align: left\n}\n\n.table {\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 20px\n}\n\n.table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {\n    padding: 8px;\n    line-height: 1.42857143;\n    vertical-align: top;\n    border-top: 1px solid #ddd\n}\n\n.table > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ddd\n}\n\n.table > caption + thead > tr:first-child > td, .table > caption + thead > tr:first-child > th, .table > colgroup + thead > tr:first-child > td, .table > colgroup + thead > tr:first-child > th, .table > thead:first-child > tr:first-child > td, .table > thead:first-child > tr:first-child > th {\n    border-top: 0\n}\n\n.table > tbody + tbody {\n    border-top: 2px solid #ddd\n}\n\n.table .table {\n    background-color: #fff\n}\n\n.table-condensed > tbody > tr > td, .table-condensed > tbody > tr > th, .table-condensed > tfoot > tr > td, .table-condensed > tfoot > tr > th, .table-condensed > thead > tr > td, .table-condensed > thead > tr > th {\n    padding: 5px\n}\n\n.table-bordered {\n    border: 1px solid #ddd\n}\n\n.table-bordered > tbody > tr > td, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > td, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > thead > tr > th {\n    border: 1px solid #ddd\n}\n\n.table-bordered > thead > tr > td, .table-bordered > thead > tr > th {\n    border-bottom-width: 2px\n}\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n    background-color: #f9f9f9\n}\n\n.table-hover > tbody > tr:hover {\n    background-color: #f5f5f5\n}\n\ntable col[class*=col-] {\n    position: static;\n    display: table-column;\n    float: none\n}\n\ntable td[class*=col-], table th[class*=col-] {\n    position: static;\n    display: table-cell;\n    float: none\n}\n\n.table > tbody > tr.active > td, .table > tbody > tr.active > th, .table > tbody > tr > td.active, .table > tbody > tr > th.active, .table > tfoot > tr.active > td, .table > tfoot > tr.active > th, .table > tfoot > tr > td.active, .table > tfoot > tr > th.active, .table > thead > tr.active > td, .table > thead > tr.active > th, .table > thead > tr > td.active, .table > thead > tr > th.active {\n    background-color: #f5f5f5\n}\n\n.table-hover > tbody > tr.active:hover > td, .table-hover > tbody > tr.active:hover > th, .table-hover > tbody > tr:hover > .active, .table-hover > tbody > tr > td.active:hover, .table-hover > tbody > tr > th.active:hover {\n    background-color: #e8e8e8\n}\n\n.table > tbody > tr.success > td, .table > tbody > tr.success > th, .table > tbody > tr > td.success, .table > tbody > tr > th.success, .table > tfoot > tr.success > td, .table > tfoot > tr.success > th, .table > tfoot > tr > td.success, .table > tfoot > tr > th.success, .table > thead > tr.success > td, .table > thead > tr.success > th, .table > thead > tr > td.success, .table > thead > tr > th.success {\n    background-color: #dff0d8\n}\n\n.table-hover > tbody > tr.success:hover > td, .table-hover > tbody > tr.success:hover > th, .table-hover > tbody > tr:hover > .success, .table-hover > tbody > tr > td.success:hover, .table-hover > tbody > tr > th.success:hover {\n    background-color: #d0e9c6\n}\n\n.table > tbody > tr.info > td, .table > tbody > tr.info > th, .table > tbody > tr > td.info, .table > tbody > tr > th.info, .table > tfoot > tr.info > td, .table > tfoot > tr.info > th, .table > tfoot > tr > td.info, .table > tfoot > tr > th.info, .table > thead > tr.info > td, .table > thead > tr.info > th, .table > thead > tr > td.info, .table > thead > tr > th.info {\n    background-color: #d9edf7\n}\n\n.table-hover > tbody > tr.info:hover > td, .table-hover > tbody > tr.info:hover > th, .table-hover > tbody > tr:hover > .info, .table-hover > tbody > tr > td.info:hover, .table-hover > tbody > tr > th.info:hover {\n    background-color: #c4e3f3\n}\n\n.table > tbody > tr.warning > td, .table > tbody > tr.warning > th, .table > tbody > tr > td.warning, .table > tbody > tr > th.warning, .table > tfoot > tr.warning > td, .table > tfoot > tr.warning > th, .table > tfoot > tr > td.warning, .table > tfoot > tr > th.warning, .table > thead > tr.warning > td, .table > thead > tr.warning > th, .table > thead > tr > td.warning, .table > thead > tr > th.warning {\n    background-color: #fcf8e3\n}\n\n.table-hover > tbody > tr.warning:hover > td, .table-hover > tbody > tr.warning:hover > th, .table-hover > tbody > tr:hover > .warning, .table-hover > tbody > tr > td.warning:hover, .table-hover > tbody > tr > th.warning:hover {\n    background-color: #faf2cc\n}\n\n.table > tbody > tr.danger > td, .table > tbody > tr.danger > th, .table > tbody > tr > td.danger, .table > tbody > tr > th.danger, .table > tfoot > tr.danger > td, .table > tfoot > tr.danger > th, .table > tfoot > tr > td.danger, .table > tfoot > tr > th.danger, .table > thead > tr.danger > td, .table > thead > tr.danger > th, .table > thead > tr > td.danger, .table > thead > tr > th.danger {\n    background-color: #f2dede\n}\n\n.table-hover > tbody > tr.danger:hover > td, .table-hover > tbody > tr.danger:hover > th, .table-hover > tbody > tr:hover > .danger, .table-hover > tbody > tr > td.danger:hover, .table-hover > tbody > tr > th.danger:hover {\n    background-color: #ebcccc\n}\n\n.table-responsive {\n    min-height: .01%;\n    overflow-x: auto\n}\n\n@media screen and (max-width: 767px) {\n    .table-responsive {\n        width: 100%;\n        margin-bottom: 15px;\n        overflow-y: hidden;\n        -ms-overflow-style: -ms-autohiding-scrollbar;\n        border: 1px solid #ddd\n    }\n\n    .table-responsive > .table {\n        margin-bottom: 0\n    }\n\n    .table-responsive > .table > tbody > tr > td, .table-responsive > .table > tbody > tr > th, .table-responsive > .table > tfoot > tr > td, .table-responsive > .table > tfoot > tr > th, .table-responsive > .table > thead > tr > td, .table-responsive > .table > thead > tr > th {\n        white-space: nowrap\n    }\n\n    .table-responsive > .table-bordered {\n        border: 0\n    }\n\n    .table-responsive > .table-bordered > tbody > tr > td:first-child, .table-responsive > .table-bordered > tbody > tr > th:first-child, .table-responsive > .table-bordered > tfoot > tr > td:first-child, .table-responsive > .table-bordered > tfoot > tr > th:first-child, .table-responsive > .table-bordered > thead > tr > td:first-child, .table-responsive > .table-bordered > thead > tr > th:first-child {\n        border-left: 0\n    }\n\n    .table-responsive > .table-bordered > tbody > tr > td:last-child, .table-responsive > .table-bordered > tbody > tr > th:last-child, .table-responsive > .table-bordered > tfoot > tr > td:last-child, .table-responsive > .table-bordered > tfoot > tr > th:last-child, .table-responsive > .table-bordered > thead > tr > td:last-child, .table-responsive > .table-bordered > thead > tr > th:last-child {\n        border-right: 0\n    }\n\n    .table-responsive > .table-bordered > tbody > tr:last-child > td, .table-responsive > .table-bordered > tbody > tr:last-child > th, .table-responsive > .table-bordered > tfoot > tr:last-child > td, .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n        border-bottom: 0\n    }\n}\n\nfieldset {\n    min-width: 0;\n    padding: 0;\n    margin: 0;\n    border: 0\n}\n\nlegend {\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin-bottom: 20px;\n    font-size: 21px;\n    line-height: inherit;\n    color: #333;\n    border: 0;\n    border-bottom: 1px solid #e5e5e5\n}\n\nlabel {\n    display: inline-block;\n    max-width: 100%;\n    margin-bottom: 5px;\n    font-weight: 700\n}\n\ninput[type=search] {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box\n}\n\ninput[type=checkbox], input[type=radio] {\n    margin: 4px 0 0;\n    margin-top: 1px \\9;\n    line-height: normal\n}\n\ninput[type=file] {\n    display: block\n}\n\ninput[type=range] {\n    display: block;\n    width: 100%\n}\n\nselect[multiple], select[size] {\n    height: auto\n}\n\ninput[type=file]:focus, input[type=checkbox]:focus, input[type=radio]:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px\n}\n\noutput {\n    display: block;\n    padding-top: 7px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555\n}\n\n.form-control {\n    display: block;\n    width: 100%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s\n}\n\n.form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)\n}\n\n.form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1\n}\n\n.form-control:-ms-input-placeholder {\n    color: #999\n}\n\n.form-control::-webkit-input-placeholder {\n    color: #999\n}\n\n.form-control::-ms-expand {\n    background-color: transparent;\n    border: 0\n}\n\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n    background-color: #eee;\n    opacity: 1\n}\n\n.form-control[disabled], fieldset[disabled] .form-control {\n    cursor: not-allowed\n}\n\ntextarea.form-control {\n    height: auto\n}\n\ninput[type=search] {\n    -webkit-appearance: none\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n    input[type=date].form-control, input[type=time].form-control, input[type=datetime-local].form-control, input[type=month].form-control {\n        line-height: 34px\n    }\n\n    .input-group-sm input[type=date], .input-group-sm input[type=time], .input-group-sm input[type=datetime-local], .input-group-sm input[type=month], input[type=date].input-sm, input[type=time].input-sm, input[type=datetime-local].input-sm, input[type=month].input-sm {\n        line-height: 30px\n    }\n\n    .input-group-lg input[type=date], .input-group-lg input[type=time], .input-group-lg input[type=datetime-local], .input-group-lg input[type=month], input[type=date].input-lg, input[type=time].input-lg, input[type=datetime-local].input-lg, input[type=month].input-lg {\n        line-height: 46px\n    }\n}\n\n.form-group {\n    margin-bottom: 15px\n}\n\n.checkbox, .radio {\n    position: relative;\n    display: block;\n    margin-top: 10px;\n    margin-bottom: 10px\n}\n\n.checkbox label, .radio label {\n    min-height: 20px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: 400;\n    cursor: pointer\n}\n\n.checkbox input[type=checkbox], .checkbox-inline input[type=checkbox], .radio input[type=radio], .radio-inline input[type=radio] {\n    position: absolute;\n    margin-top: 4px \\9;\n    margin-left: -20px\n}\n\n.checkbox + .checkbox, .radio + .radio {\n    margin-top: -5px\n}\n\n.checkbox-inline, .radio-inline {\n    position: relative;\n    display: inline-block;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: 400;\n    vertical-align: middle;\n    cursor: pointer\n}\n\n.checkbox-inline + .checkbox-inline, .radio-inline + .radio-inline {\n    margin-top: 0;\n    margin-left: 10px\n}\n\nfieldset[disabled] input[type=checkbox], fieldset[disabled] input[type=radio], input[type=checkbox].disabled, input[type=checkbox][disabled], input[type=radio].disabled, input[type=radio][disabled] {\n    cursor: not-allowed\n}\n\n.checkbox-inline.disabled, .radio-inline.disabled, fieldset[disabled] .checkbox-inline, fieldset[disabled] .radio-inline {\n    cursor: not-allowed\n}\n\n.checkbox.disabled label, .radio.disabled label, fieldset[disabled] .checkbox label, fieldset[disabled] .radio label {\n    cursor: not-allowed\n}\n\n.form-control-static {\n    min-height: 34px;\n    padding-top: 7px;\n    padding-bottom: 7px;\n    margin-bottom: 0\n}\n\n.form-control-static.input-lg, .form-control-static.input-sm {\n    padding-right: 0;\n    padding-left: 0\n}\n\n.input-sm {\n    height: 30px;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px\n}\n\nselect.input-sm {\n    height: 30px;\n    line-height: 30px\n}\n\nselect[multiple].input-sm, textarea.input-sm {\n    height: auto\n}\n\n.form-group-sm .form-control {\n    height: 30px;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px\n}\n\n.form-group-sm select.form-control {\n    height: 30px;\n    line-height: 30px\n}\n\n.form-group-sm select[multiple].form-control, .form-group-sm textarea.form-control {\n    height: auto\n}\n\n.form-group-sm .form-control-static {\n    height: 30px;\n    min-height: 32px;\n    padding: 6px 10px;\n    font-size: 12px;\n    line-height: 1.5\n}\n\n.input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 6px\n}\n\nselect.input-lg {\n    height: 46px;\n    line-height: 46px\n}\n\nselect[multiple].input-lg, textarea.input-lg {\n    height: auto\n}\n\n.form-group-lg .form-control {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 6px\n}\n\n.form-group-lg select.form-control {\n    height: 46px;\n    line-height: 46px\n}\n\n.form-group-lg select[multiple].form-control, .form-group-lg textarea.form-control {\n    height: auto\n}\n\n.form-group-lg .form-control-static {\n    height: 46px;\n    min-height: 38px;\n    padding: 11px 16px;\n    font-size: 18px;\n    line-height: 1.3333333\n}\n\n.has-feedback {\n    position: relative\n}\n\n.has-feedback .form-control {\n    padding-right: 42.5px\n}\n\n.form-control-feedback {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2;\n    display: block;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    pointer-events: none\n}\n\n.form-group-lg .form-control + .form-control-feedback, .input-group-lg + .form-control-feedback, .input-lg + .form-control-feedback {\n    width: 46px;\n    height: 46px;\n    line-height: 46px\n}\n\n.form-group-sm .form-control + .form-control-feedback, .input-group-sm + .form-control-feedback, .input-sm + .form-control-feedback {\n    width: 30px;\n    height: 30px;\n    line-height: 30px\n}\n\n.has-success .checkbox, .has-success .checkbox-inline, .has-success .control-label, .has-success .help-block, .has-success .radio, .has-success .radio-inline, .has-success.checkbox label, .has-success.checkbox-inline label, .has-success.radio label, .has-success.radio-inline label {\n    color: #3c763d\n}\n\n.has-success .form-control {\n    border-color: #3c763d;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075)\n}\n\n.has-success .form-control:focus {\n    border-color: #2b542c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168\n}\n\n.has-success .input-group-addon {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #3c763d\n}\n\n.has-success .form-control-feedback {\n    color: #3c763d\n}\n\n.has-warning .checkbox, .has-warning .checkbox-inline, .has-warning .control-label, .has-warning .help-block, .has-warning .radio, .has-warning .radio-inline, .has-warning.checkbox label, .has-warning.checkbox-inline label, .has-warning.radio label, .has-warning.radio-inline label {\n    color: #8a6d3b\n}\n\n.has-warning .form-control {\n    border-color: #8a6d3b;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075)\n}\n\n.has-warning .form-control:focus {\n    border-color: #66512c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b\n}\n\n.has-warning .input-group-addon {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #8a6d3b\n}\n\n.has-warning .form-control-feedback {\n    color: #8a6d3b\n}\n\n.has-error .checkbox, .has-error .checkbox-inline, .has-error .control-label, .has-error .help-block, .has-error .radio, .has-error .radio-inline, .has-error.checkbox label, .has-error.checkbox-inline label, .has-error.radio label, .has-error.radio-inline label {\n    color: #a94442\n}\n\n.has-error .form-control {\n    border-color: #a94442;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075)\n}\n\n.has-error .form-control:focus {\n    border-color: #843534;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483\n}\n\n.has-error .input-group-addon {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #a94442\n}\n\n.has-error .form-control-feedback {\n    color: #a94442\n}\n\n.has-feedback label ~ .form-control-feedback {\n    top: 25px\n}\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n    top: 0\n}\n\n.help-block {\n    display: block;\n    margin-top: 5px;\n    margin-bottom: 10px;\n    color: #737373\n}\n\n@media (min-width: 768px) {\n    .form-inline .form-group {\n        display: inline-block;\n        margin-bottom: 0;\n        vertical-align: middle\n    }\n\n    .form-inline .form-control {\n        display: inline-block;\n        width: auto;\n        vertical-align: middle\n    }\n\n    .form-inline .form-control-static {\n        display: inline-block\n    }\n\n    .form-inline .input-group {\n        display: inline-table;\n        vertical-align: middle\n    }\n\n    .form-inline .input-group .form-control, .form-inline .input-group .input-group-addon, .form-inline .input-group .input-group-btn {\n        width: auto\n    }\n\n    .form-inline .input-group > .form-control {\n        width: 100%\n    }\n\n    .form-inline .control-label {\n        margin-bottom: 0;\n        vertical-align: middle\n    }\n\n    .form-inline .checkbox, .form-inline .radio {\n        display: inline-block;\n        margin-top: 0;\n        margin-bottom: 0;\n        vertical-align: middle\n    }\n\n    .form-inline .checkbox label, .form-inline .radio label {\n        padding-left: 0\n    }\n\n    .form-inline .checkbox input[type=checkbox], .form-inline .radio input[type=radio] {\n        position: relative;\n        margin-left: 0\n    }\n\n    .form-inline .has-feedback .form-control-feedback {\n        top: 0\n    }\n}\n\n.form-horizontal .checkbox, .form-horizontal .checkbox-inline, .form-horizontal .radio, .form-horizontal .radio-inline {\n    padding-top: 7px;\n    margin-top: 0;\n    margin-bottom: 0\n}\n\n.form-horizontal .checkbox, .form-horizontal .radio {\n    min-height: 27px\n}\n\n.form-horizontal .form-group {\n    margin-right: -15px;\n    margin-left: -15px\n}\n\n@media (min-width: 768px) {\n    .form-horizontal .control-label {\n        padding-top: 7px;\n        margin-bottom: 0;\n        text-align: right\n    }\n}\n\n.form-horizontal .has-feedback .form-control-feedback {\n    right: 15px\n}\n\n@media (min-width: 768px) {\n    .form-horizontal .form-group-lg .control-label {\n        padding-top: 11px;\n        font-size: 18px\n    }\n}\n\n@media (min-width: 768px) {\n    .form-horizontal .form-group-sm .control-label {\n        padding-top: 6px;\n        font-size: 12px\n    }\n}\n\n.btn {\n    display: inline-block;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.42857143;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 4px\n}\n\n.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px\n}\n\n.btn.focus, .btn:focus, .btn:hover {\n    color: #333;\n    text-decoration: none\n}\n\n.btn.active, .btn:active {\n    background-image: none;\n    outline: 0;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125)\n}\n\n.btn.disabled, .btn[disabled], fieldset[disabled] .btn {\n    cursor: not-allowed;\n    filter: alpha(opacity=65);\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    opacity: .65\n}\n\na.btn.disabled, fieldset[disabled] a.btn {\n    pointer-events: none\n}\n\n.btn-default {\n    color: #333;\n    background-color: #fff;\n    border-color: #ccc\n}\n\n.btn-default.focus, .btn-default:focus {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #8c8c8c\n}\n\n.btn-default:hover {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad\n}\n\n.btn-default.active, .btn-default:active, .open > .dropdown-toggle.btn-default {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad\n}\n\n.btn-default.active.focus, .btn-default.active:focus, .btn-default.active:hover, .btn-default:active.focus, .btn-default:active:focus, .btn-default:active:hover, .open > .dropdown-toggle.btn-default.focus, .open > .dropdown-toggle.btn-default:focus, .open > .dropdown-toggle.btn-default:hover {\n    color: #333;\n    background-color: #d4d4d4;\n    border-color: #8c8c8c\n}\n\n.btn-default.active, .btn-default:active, .open > .dropdown-toggle.btn-default {\n    background-image: none\n}\n\n.btn-default.disabled.focus, .btn-default.disabled:focus, .btn-default.disabled:hover, .btn-default[disabled].focus, .btn-default[disabled]:focus, .btn-default[disabled]:hover, fieldset[disabled] .btn-default.focus, fieldset[disabled] .btn-default:focus, fieldset[disabled] .btn-default:hover {\n    background-color: #fff;\n    border-color: #ccc\n}\n\n.btn-default .badge {\n    color: #fff;\n    background-color: #333\n}\n\n.btn-primary {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #2e6da4\n}\n\n.btn-primary.focus, .btn-primary:focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40\n}\n\n.btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74\n}\n\n.btn-primary.active, .btn-primary:active, .open > .dropdown-toggle.btn-primary {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74\n}\n\n.btn-primary.active.focus, .btn-primary.active:focus, .btn-primary.active:hover, .btn-primary:active.focus, .btn-primary:active:focus, .btn-primary:active:hover, .open > .dropdown-toggle.btn-primary.focus, .open > .dropdown-toggle.btn-primary:focus, .open > .dropdown-toggle.btn-primary:hover {\n    color: #fff;\n    background-color: #204d74;\n    border-color: #122b40\n}\n\n.btn-primary.active, .btn-primary:active, .open > .dropdown-toggle.btn-primary {\n    background-image: none\n}\n\n.btn-primary.disabled.focus, .btn-primary.disabled:focus, .btn-primary.disabled:hover, .btn-primary[disabled].focus, .btn-primary[disabled]:focus, .btn-primary[disabled]:hover, fieldset[disabled] .btn-primary.focus, fieldset[disabled] .btn-primary:focus, fieldset[disabled] .btn-primary:hover {\n    background-color: #337ab7;\n    border-color: #2e6da4\n}\n\n.btn-primary .badge {\n    color: #337ab7;\n    background-color: #fff\n}\n\n.btn-success {\n    color: #fff;\n    background-color: #5cb85c;\n    border-color: #4cae4c\n}\n\n.btn-success.focus, .btn-success:focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625\n}\n\n.btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439\n}\n\n.btn-success.active, .btn-success:active, .open > .dropdown-toggle.btn-success {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439\n}\n\n.btn-success.active.focus, .btn-success.active:focus, .btn-success.active:hover, .btn-success:active.focus, .btn-success:active:focus, .btn-success:active:hover, .open > .dropdown-toggle.btn-success.focus, .open > .dropdown-toggle.btn-success:focus, .open > .dropdown-toggle.btn-success:hover {\n    color: #fff;\n    background-color: #398439;\n    border-color: #255625\n}\n\n.btn-success.active, .btn-success:active, .open > .dropdown-toggle.btn-success {\n    background-image: none\n}\n\n.btn-success.disabled.focus, .btn-success.disabled:focus, .btn-success.disabled:hover, .btn-success[disabled].focus, .btn-success[disabled]:focus, .btn-success[disabled]:hover, fieldset[disabled] .btn-success.focus, fieldset[disabled] .btn-success:focus, fieldset[disabled] .btn-success:hover {\n    background-color: #5cb85c;\n    border-color: #4cae4c\n}\n\n.btn-success .badge {\n    color: #5cb85c;\n    background-color: #fff\n}\n\n.btn-info {\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #46b8da\n}\n\n.btn-info.focus, .btn-info:focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #1b6d85\n}\n\n.btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc\n}\n\n.btn-info.active, .btn-info:active, .open > .dropdown-toggle.btn-info {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc\n}\n\n.btn-info.active.focus, .btn-info.active:focus, .btn-info.active:hover, .btn-info:active.focus, .btn-info:active:focus, .btn-info:active:hover, .open > .dropdown-toggle.btn-info.focus, .open > .dropdown-toggle.btn-info:focus, .open > .dropdown-toggle.btn-info:hover {\n    color: #fff;\n    background-color: #269abc;\n    border-color: #1b6d85\n}\n\n.btn-info.active, .btn-info:active, .open > .dropdown-toggle.btn-info {\n    background-image: none\n}\n\n.btn-info.disabled.focus, .btn-info.disabled:focus, .btn-info.disabled:hover, .btn-info[disabled].focus, .btn-info[disabled]:focus, .btn-info[disabled]:hover, fieldset[disabled] .btn-info.focus, fieldset[disabled] .btn-info:focus, fieldset[disabled] .btn-info:hover {\n    background-color: #5bc0de;\n    border-color: #46b8da\n}\n\n.btn-info .badge {\n    color: #5bc0de;\n    background-color: #fff\n}\n\n.btn-warning {\n    color: #fff;\n    background-color: #f0ad4e;\n    border-color: #eea236\n}\n\n.btn-warning.focus, .btn-warning:focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #985f0d\n}\n\n.btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512\n}\n\n.btn-warning.active, .btn-warning:active, .open > .dropdown-toggle.btn-warning {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512\n}\n\n.btn-warning.active.focus, .btn-warning.active:focus, .btn-warning.active:hover, .btn-warning:active.focus, .btn-warning:active:focus, .btn-warning:active:hover, .open > .dropdown-toggle.btn-warning.focus, .open > .dropdown-toggle.btn-warning:focus, .open > .dropdown-toggle.btn-warning:hover {\n    color: #fff;\n    background-color: #d58512;\n    border-color: #985f0d\n}\n\n.btn-warning.active, .btn-warning:active, .open > .dropdown-toggle.btn-warning {\n    background-image: none\n}\n\n.btn-warning.disabled.focus, .btn-warning.disabled:focus, .btn-warning.disabled:hover, .btn-warning[disabled].focus, .btn-warning[disabled]:focus, .btn-warning[disabled]:hover, fieldset[disabled] .btn-warning.focus, fieldset[disabled] .btn-warning:focus, fieldset[disabled] .btn-warning:hover {\n    background-color: #f0ad4e;\n    border-color: #eea236\n}\n\n.btn-warning .badge {\n    color: #f0ad4e;\n    background-color: #fff\n}\n\n.btn-danger {\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d43f3a\n}\n\n.btn-danger.focus, .btn-danger:focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #761c19\n}\n\n.btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925\n}\n\n.btn-danger.active, .btn-danger:active, .open > .dropdown-toggle.btn-danger {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925\n}\n\n.btn-danger.active.focus, .btn-danger.active:focus, .btn-danger.active:hover, .btn-danger:active.focus, .btn-danger:active:focus, .btn-danger:active:hover, .open > .dropdown-toggle.btn-danger.focus, .open > .dropdown-toggle.btn-danger:focus, .open > .dropdown-toggle.btn-danger:hover {\n    color: #fff;\n    background-color: #ac2925;\n    border-color: #761c19\n}\n\n.btn-danger.active, .btn-danger:active, .open > .dropdown-toggle.btn-danger {\n    background-image: none\n}\n\n.btn-danger.disabled.focus, .btn-danger.disabled:focus, .btn-danger.disabled:hover, .btn-danger[disabled].focus, .btn-danger[disabled]:focus, .btn-danger[disabled]:hover, fieldset[disabled] .btn-danger.focus, fieldset[disabled] .btn-danger:focus, fieldset[disabled] .btn-danger:hover {\n    background-color: #d9534f;\n    border-color: #d43f3a\n}\n\n.btn-danger .badge {\n    color: #d9534f;\n    background-color: #fff\n}\n\n.btn-link {\n    font-weight: 400;\n    color: #337ab7;\n    border-radius: 0\n}\n\n.btn-link, .btn-link.active, .btn-link:active, .btn-link[disabled], fieldset[disabled] .btn-link {\n    background-color: transparent;\n    -webkit-box-shadow: none;\n    box-shadow: none\n}\n\n.btn-link, .btn-link:active, .btn-link:focus, .btn-link:hover {\n    border-color: transparent\n}\n\n.btn-link:focus, .btn-link:hover {\n    color: #23527c;\n    text-decoration: underline;\n    background-color: transparent\n}\n\n.btn-link[disabled]:focus, .btn-link[disabled]:hover, fieldset[disabled] .btn-link:focus, fieldset[disabled] .btn-link:hover {\n    color: #777;\n    text-decoration: none\n}\n\n.btn-group-lg > .btn, .btn-lg {\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 6px\n}\n\n.btn-group-sm > .btn, .btn-sm {\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px\n}\n\n.btn-group-xs > .btn, .btn-xs {\n    padding: 1px 5px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px\n}\n\n.btn-block {\n    display: block;\n    width: 100%\n}\n\n.btn-block + .btn-block {\n    margin-top: 5px\n}\n\ninput[type=button].btn-block, input[type=reset].btn-block, input[type=submit].btn-block {\n    width: 100%\n}\n\n.fade {\n    opacity: 0;\n    -webkit-transition: opacity .15s linear;\n    -o-transition: opacity .15s linear;\n    transition: opacity .15s linear\n}\n\n.fade.in {\n    opacity: 1\n}\n\n.collapse {\n    display: none\n}\n\n.collapse.in {\n    display: block\n}\n\ntr.collapse.in {\n    display: table-row\n}\n\ntbody.collapse.in {\n    display: table-row-group\n}\n\n.collapsing {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n    -webkit-transition-timing-function: ease;\n    -o-transition-timing-function: ease;\n    transition-timing-function: ease;\n    -webkit-transition-duration: .35s;\n    -o-transition-duration: .35s;\n    transition-duration: .35s;\n    -webkit-transition-property: height, visibility;\n    -o-transition-property: height, visibility;\n    transition-property: height, visibility\n}\n\n.caret {\n    display: inline-block;\n    width: 0;\n    height: 0;\n    margin-left: 2px;\n    vertical-align: middle;\n    border-top: 4px dashed;\n    border-top: 4px solid \\9;\n    border-right: 4px solid transparent;\n    border-left: 4px solid transparent\n}\n\n.dropdown, .dropup {\n    position: relative\n}\n\n.dropdown-toggle:focus {\n    outline: 0\n}\n\n.dropdown-menu {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    z-index: 1000;\n    display: none;\n    float: left;\n    min-width: 160px;\n    padding: 5px 0;\n    margin: 2px 0 0;\n    font-size: 14px;\n    text-align: left;\n    list-style: none;\n    background-color: #fff;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box;\n    border: 1px solid #ccc;\n    border: 1px solid rgba(0, 0, 0, .15);\n    border-radius: 4px;\n    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n    box-shadow: 0 6px 12px rgba(0, 0, 0, .175)\n}\n\n.dropdown-menu.pull-right {\n    right: 0;\n    left: auto\n}\n\n.dropdown-menu .divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5\n}\n\n.dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: 400;\n    line-height: 1.42857143;\n    color: #333;\n    white-space: nowrap\n}\n\n.dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover {\n    color: #262626;\n    text-decoration: none;\n    background-color: #f5f5f5\n}\n\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:focus, .dropdown-menu > .active > a:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #337ab7;\n    outline: 0\n}\n\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:focus, .dropdown-menu > .disabled > a:hover {\n    color: #777\n}\n\n.dropdown-menu > .disabled > a:focus, .dropdown-menu > .disabled > a:hover {\n    text-decoration: none;\n    cursor: not-allowed;\n    background-color: transparent;\n    background-image: none;\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false)\n}\n\n.open > .dropdown-menu {\n    display: block\n}\n\n.open > a {\n    outline: 0\n}\n\n.dropdown-menu-right {\n    right: 0;\n    left: auto\n}\n\n.dropdown-menu-left {\n    right: auto;\n    left: 0\n}\n\n.dropdown-header {\n    display: block;\n    padding: 3px 20px;\n    font-size: 12px;\n    line-height: 1.42857143;\n    color: #777;\n    white-space: nowrap\n}\n\n.dropdown-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 990\n}\n\n.pull-right > .dropdown-menu {\n    right: 0;\n    left: auto\n}\n\n.dropup .caret, .navbar-fixed-bottom .dropdown .caret {\n    content: \"\";\n    border-top: 0;\n    border-bottom: 4px dashed;\n    border-bottom: 4px solid \\9\n}\n\n.dropup .dropdown-menu, .navbar-fixed-bottom .dropdown .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n    margin-bottom: 2px\n}\n\n@media (min-width: 768px) {\n    .navbar-right .dropdown-menu {\n        right: 0;\n        left: auto\n    }\n\n    .navbar-right .dropdown-menu-left {\n        right: auto;\n        left: 0\n    }\n}\n\n.btn-group, .btn-group-vertical {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle\n}\n\n.btn-group-vertical > .btn, .btn-group > .btn {\n    position: relative;\n    float: left\n}\n\n.btn-group-vertical > .btn.active, .btn-group-vertical > .btn:active, .btn-group-vertical > .btn:focus, .btn-group-vertical > .btn:hover, .btn-group > .btn.active, .btn-group > .btn:active, .btn-group > .btn:focus, .btn-group > .btn:hover {\n    z-index: 2\n}\n\n.btn-group .btn + .btn, .btn-group .btn + .btn-group, .btn-group .btn-group + .btn, .btn-group .btn-group + .btn-group {\n    margin-left: -1px\n}\n\n.btn-toolbar {\n    margin-left: -5px\n}\n\n.btn-toolbar .btn, .btn-toolbar .btn-group, .btn-toolbar .input-group {\n    float: left\n}\n\n.btn-toolbar > .btn, .btn-toolbar > .btn-group, .btn-toolbar > .input-group {\n    margin-left: 5px\n}\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n    border-radius: 0\n}\n\n.btn-group > .btn:first-child {\n    margin-left: 0\n}\n\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0\n}\n\n.btn-group > .btn:last-child:not(:first-child), .btn-group > .dropdown-toggle:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0\n}\n\n.btn-group > .btn-group {\n    float: left\n}\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n    border-radius: 0\n}\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child, .btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0\n}\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0\n}\n\n.btn-group .dropdown-toggle:active, .btn-group.open .dropdown-toggle {\n    outline: 0\n}\n\n.btn-group > .btn + .dropdown-toggle {\n    padding-right: 8px;\n    padding-left: 8px\n}\n\n.btn-group > .btn-lg + .dropdown-toggle {\n    padding-right: 12px;\n    padding-left: 12px\n}\n\n.btn-group.open .dropdown-toggle {\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125)\n}\n\n.btn-group.open .dropdown-toggle.btn-link {\n    -webkit-box-shadow: none;\n    box-shadow: none\n}\n\n.btn .caret {\n    margin-left: 0\n}\n\n.btn-lg .caret {\n    border-width: 5px 5px 0;\n    border-bottom-width: 0\n}\n\n.dropup .btn-lg .caret {\n    border-width: 0 5px 5px\n}\n\n.btn-group-vertical > .btn, .btn-group-vertical > .btn-group, .btn-group-vertical > .btn-group > .btn {\n    display: block;\n    float: none;\n    width: 100%;\n    max-width: 100%\n}\n\n.btn-group-vertical > .btn-group > .btn {\n    float: none\n}\n\n.btn-group-vertical > .btn + .btn, .btn-group-vertical > .btn + .btn-group, .btn-group-vertical > .btn-group + .btn, .btn-group-vertical > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0\n}\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n    border-radius: 0\n}\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0\n}\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px\n}\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n    border-radius: 0\n}\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child, .btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0\n}\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0\n}\n\n.btn-group-justified {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n    border-collapse: separate\n}\n\n.btn-group-justified > .btn, .btn-group-justified > .btn-group {\n    display: table-cell;\n    float: none;\n    width: 1%\n}\n\n.btn-group-justified > .btn-group .btn {\n    width: 100%\n}\n\n.btn-group-justified > .btn-group .dropdown-menu {\n    left: auto\n}\n\n[data-toggle=buttons] > .btn input[type=checkbox], [data-toggle=buttons] > .btn input[type=radio], [data-toggle=buttons] > .btn-group > .btn input[type=checkbox], [data-toggle=buttons] > .btn-group > .btn input[type=radio] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none\n}\n\n.input-group {\n    position: relative;\n    display: table;\n    border-collapse: separate\n}\n\n.input-group[class*=col-] {\n    float: none;\n    padding-right: 0;\n    padding-left: 0\n}\n\n.input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0\n}\n\n.input-group .form-control:focus {\n    z-index: 3\n}\n\n.input-group-lg > .form-control, .input-group-lg > .input-group-addon, .input-group-lg > .input-group-btn > .btn {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 6px\n}\n\nselect.input-group-lg > .form-control, select.input-group-lg > .input-group-addon, select.input-group-lg > .input-group-btn > .btn {\n    height: 46px;\n    line-height: 46px\n}\n\nselect[multiple].input-group-lg > .form-control, select[multiple].input-group-lg > .input-group-addon, select[multiple].input-group-lg > .input-group-btn > .btn, textarea.input-group-lg > .form-control, textarea.input-group-lg > .input-group-addon, textarea.input-group-lg > .input-group-btn > .btn {\n    height: auto\n}\n\n.input-group-sm > .form-control, .input-group-sm > .input-group-addon, .input-group-sm > .input-group-btn > .btn {\n    height: 30px;\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px\n}\n\nselect.input-group-sm > .form-control, select.input-group-sm > .input-group-addon, select.input-group-sm > .input-group-btn > .btn {\n    height: 30px;\n    line-height: 30px\n}\n\nselect[multiple].input-group-sm > .form-control, select[multiple].input-group-sm > .input-group-addon, select[multiple].input-group-sm > .input-group-btn > .btn, textarea.input-group-sm > .form-control, textarea.input-group-sm > .input-group-addon, textarea.input-group-sm > .input-group-btn > .btn {\n    height: auto\n}\n\n.input-group .form-control, .input-group-addon, .input-group-btn {\n    display: table-cell\n}\n\n.input-group .form-control:not(:first-child):not(:last-child), .input-group-addon:not(:first-child):not(:last-child), .input-group-btn:not(:first-child):not(:last-child) {\n    border-radius: 0\n}\n\n.input-group-addon, .input-group-btn {\n    width: 1%;\n    white-space: nowrap;\n    vertical-align: middle\n}\n\n.input-group-addon {\n    padding: 6px 12px;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1;\n    color: #555;\n    text-align: center;\n    background-color: #eee;\n    border: 1px solid #ccc;\n    border-radius: 4px\n}\n\n.input-group-addon.input-sm {\n    padding: 5px 10px;\n    font-size: 12px;\n    border-radius: 3px\n}\n\n.input-group-addon.input-lg {\n    padding: 10px 16px;\n    font-size: 18px;\n    border-radius: 6px\n}\n\n.input-group-addon input[type=checkbox], .input-group-addon input[type=radio] {\n    margin-top: 0\n}\n\n.input-group .form-control:first-child, .input-group-addon:first-child, .input-group-btn:first-child > .btn, .input-group-btn:first-child > .btn-group > .btn, .input-group-btn:first-child > .dropdown-toggle, .input-group-btn:last-child > .btn-group:not(:last-child) > .btn, .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0\n}\n\n.input-group-addon:first-child {\n    border-right: 0\n}\n\n.input-group .form-control:last-child, .input-group-addon:last-child, .input-group-btn:first-child > .btn-group:not(:first-child) > .btn, .input-group-btn:first-child > .btn:not(:first-child), .input-group-btn:last-child > .btn, .input-group-btn:last-child > .btn-group > .btn, .input-group-btn:last-child > .dropdown-toggle {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0\n}\n\n.input-group-addon:last-child {\n    border-left: 0\n}\n\n.input-group-btn {\n    position: relative;\n    font-size: 0;\n    white-space: nowrap\n}\n\n.input-group-btn > .btn {\n    position: relative\n}\n\n.input-group-btn > .btn + .btn {\n    margin-left: -1px\n}\n\n.input-group-btn > .btn:active, .input-group-btn > .btn:focus, .input-group-btn > .btn:hover {\n    z-index: 2\n}\n\n.input-group-btn:first-child > .btn, .input-group-btn:first-child > .btn-group {\n    margin-right: -1px\n}\n\n.input-group-btn:last-child > .btn, .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px\n}\n\n.nav {\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none\n}\n\n.nav > li {\n    position: relative;\n    display: block\n}\n\n.nav > li > a {\n    position: relative;\n    display: block;\n    padding: 10px 15px\n}\n\n.nav > li > a:focus, .nav > li > a:hover {\n    text-decoration: none;\n    background-color: #eee\n}\n\n.nav > li.disabled > a {\n    color: #777\n}\n\n.nav > li.disabled > a:focus, .nav > li.disabled > a:hover {\n    color: #777;\n    text-decoration: none;\n    cursor: not-allowed;\n    background-color: transparent\n}\n\n.nav .open > a, .nav .open > a:focus, .nav .open > a:hover {\n    background-color: #eee;\n    border-color: #337ab7\n}\n\n.nav .nav-divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5\n}\n\n.nav > li > a > img {\n    max-width: none\n}\n\n.nav-tabs {\n    border-bottom: 1px solid #ddd\n}\n\n.nav-tabs > li {\n    float: left;\n    margin-bottom: -1px\n}\n\n.nav-tabs > li > a {\n    margin-right: 2px;\n    line-height: 1.42857143;\n    border: 1px solid transparent;\n    border-radius: 4px 4px 0 0\n}\n\n.nav-tabs > li > a:hover {\n    border-color: #eee #eee #ddd\n}\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {\n    color: #555;\n    cursor: default;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-bottom-color: transparent\n}\n\n.nav-tabs.nav-justified {\n    width: 100%;\n    border-bottom: 0\n}\n\n.nav-tabs.nav-justified > li {\n    float: none\n}\n\n.nav-tabs.nav-justified > li > a {\n    margin-bottom: 5px;\n    text-align: center\n}\n\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto\n}\n\n@media (min-width: 768px) {\n    .nav-tabs.nav-justified > li {\n        display: table-cell;\n        width: 1%\n    }\n\n    .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0\n    }\n}\n\n.nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px\n}\n\n.nav-tabs.nav-justified > .active > a, .nav-tabs.nav-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:hover {\n    border: 1px solid #ddd\n}\n\n@media (min-width: 768px) {\n    .nav-tabs.nav-justified > li > a {\n        border-bottom: 1px solid #ddd;\n        border-radius: 4px 4px 0 0\n    }\n\n    .nav-tabs.nav-justified > .active > a, .nav-tabs.nav-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:hover {\n        border-bottom-color: #fff\n    }\n}\n\n.nav-pills > li {\n    float: left\n}\n\n.nav-pills > li > a {\n    border-radius: 4px\n}\n\n.nav-pills > li + li {\n    margin-left: 2px\n}\n\n.nav-pills > li.active > a, .nav-pills > li.active > a:focus, .nav-pills > li.active > a:hover {\n    color: #fff;\n    background-color: #337ab7\n}\n\n.nav-stacked > li {\n    float: none\n}\n\n.nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0\n}\n\n.nav-justified {\n    width: 100%\n}\n\n.nav-justified > li {\n    float: none\n}\n\n.nav-justified > li > a {\n    margin-bottom: 5px;\n    text-align: center\n}\n\n.nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto\n}\n\n@media (min-width: 768px) {\n    .nav-justified > li {\n        display: table-cell;\n        width: 1%\n    }\n\n    .nav-justified > li > a {\n        margin-bottom: 0\n    }\n}\n\n.nav-tabs-justified {\n    border-bottom: 0\n}\n\n.nav-tabs-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px\n}\n\n.nav-tabs-justified > .active > a, .nav-tabs-justified > .active > a:focus, .nav-tabs-justified > .active > a:hover {\n    border: 1px solid #ddd\n}\n\n@media (min-width: 768px) {\n    .nav-tabs-justified > li > a {\n        border-bottom: 1px solid #ddd;\n        border-radius: 4px 4px 0 0\n    }\n\n    .nav-tabs-justified > .active > a, .nav-tabs-justified > .active > a:focus, .nav-tabs-justified > .active > a:hover {\n        border-bottom-color: #fff\n    }\n}\n\n.tab-content > .tab-pane {\n    display: none\n}\n\n.tab-content > .active {\n    display: block\n}\n\n.nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0\n}\n\n.navbar {\n    position: relative;\n    min-height: 50px;\n    margin-bottom: 20px;\n    border: 1px solid transparent\n}\n\n@media (min-width: 768px) {\n    .navbar {\n        border-radius: 4px\n    }\n}\n\n@media (min-width: 768px) {\n    .navbar-header {\n        float: left\n    }\n}\n\n.navbar-collapse {\n    padding-right: 15px;\n    padding-left: 15px;\n    overflow-x: visible;\n    -webkit-overflow-scrolling: touch;\n    border-top: 1px solid transparent;\n    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1)\n}\n\n.navbar-collapse.in {\n    overflow-y: auto\n}\n\n@media (min-width: 768px) {\n    .navbar-collapse {\n        width: auto;\n        border-top: 0;\n        -webkit-box-shadow: none;\n        box-shadow: none\n    }\n\n    .navbar-collapse.collapse {\n        display: block !important;\n        height: auto !important;\n        padding-bottom: 0;\n        overflow: visible !important\n    }\n\n    .navbar-collapse.in {\n        overflow-y: visible\n    }\n\n    .navbar-fixed-bottom .navbar-collapse, .navbar-fixed-top .navbar-collapse, .navbar-static-top .navbar-collapse {\n        padding-right: 0;\n        padding-left: 0\n    }\n}\n\n.navbar-fixed-bottom .navbar-collapse, .navbar-fixed-top .navbar-collapse {\n    max-height: 340px\n}\n\n@media (max-device-width: 480px) and (orientation: landscape) {\n    .navbar-fixed-bottom .navbar-collapse, .navbar-fixed-top .navbar-collapse {\n        max-height: 200px\n    }\n}\n\n.container-fluid > .navbar-collapse, .container-fluid > .navbar-header, .container > .navbar-collapse, .container > .navbar-header {\n    margin-right: -15px;\n    margin-left: -15px\n}\n\n@media (min-width: 768px) {\n    .container-fluid > .navbar-collapse, .container-fluid > .navbar-header, .container > .navbar-collapse, .container > .navbar-header {\n        margin-right: 0;\n        margin-left: 0\n    }\n}\n\n.navbar-static-top {\n    z-index: 1000;\n    border-width: 0 0 1px\n}\n\n@media (min-width: 768px) {\n    .navbar-static-top {\n        border-radius: 0\n    }\n}\n\n.navbar-fixed-bottom, .navbar-fixed-top {\n    position: fixed;\n    right: 0;\n    left: 0;\n    z-index: 1030\n}\n\n@media (min-width: 768px) {\n    .navbar-fixed-bottom, .navbar-fixed-top {\n        border-radius: 0\n    }\n}\n\n.navbar-fixed-top {\n    top: 0;\n    border-width: 0 0 1px\n}\n\n.navbar-fixed-bottom {\n    bottom: 0;\n    margin-bottom: 0;\n    border-width: 1px 0 0\n}\n\n.navbar-brand {\n    float: left;\n    height: 50px;\n    padding: 15px 15px;\n    font-size: 18px;\n    line-height: 20px\n}\n\n.navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none\n}\n\n.navbar-brand > img {\n    display: block\n}\n\n@media (min-width: 768px) {\n    .navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand {\n        margin-left: -15px\n    }\n}\n\n.navbar-toggle {\n    position: relative;\n    float: right;\n    padding: 9px 10px;\n    margin-top: 8px;\n    margin-right: 15px;\n    margin-bottom: 8px;\n    background-color: transparent;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 4px\n}\n\n.navbar-toggle:focus {\n    outline: 0\n}\n\n.navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px\n}\n\n.navbar-toggle .icon-bar + .icon-bar {\n    margin-top: 4px\n}\n\n@media (min-width: 768px) {\n    .navbar-toggle {\n        display: none\n    }\n}\n\n.navbar-nav {\n    margin: 7.5px -15px\n}\n\n.navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 20px\n}\n\n@media (max-width: 767px) {\n    .navbar-nav .open .dropdown-menu {\n        position: static;\n        float: none;\n        width: auto;\n        margin-top: 0;\n        background-color: transparent;\n        border: 0;\n        -webkit-box-shadow: none;\n        box-shadow: none\n    }\n\n    .navbar-nav .open .dropdown-menu .dropdown-header, .navbar-nav .open .dropdown-menu > li > a {\n        padding: 5px 15px 5px 25px\n    }\n\n    .navbar-nav .open .dropdown-menu > li > a {\n        line-height: 20px\n    }\n\n    .navbar-nav .open .dropdown-menu > li > a:focus, .navbar-nav .open .dropdown-menu > li > a:hover {\n        background-image: none\n    }\n}\n\n@media (min-width: 768px) {\n    .navbar-nav {\n        float: left;\n        margin: 0\n    }\n\n    .navbar-nav > li {\n        float: left\n    }\n\n    .navbar-nav > li > a {\n        padding-top: 15px;\n        padding-bottom: 15px\n    }\n}\n\n.navbar-form {\n    padding: 10px 15px;\n    margin-top: 8px;\n    margin-right: -15px;\n    margin-bottom: 8px;\n    margin-left: -15px;\n    border-top: 1px solid transparent;\n    border-bottom: 1px solid transparent;\n    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1)\n}\n\n@media (min-width: 768px) {\n    .navbar-form .form-group {\n        display: inline-block;\n        margin-bottom: 0;\n        vertical-align: middle\n    }\n\n    .navbar-form .form-control {\n        display: inline-block;\n        width: auto;\n        vertical-align: middle\n    }\n\n    .navbar-form .form-control-static {\n        display: inline-block\n    }\n\n    .navbar-form .input-group {\n        display: inline-table;\n        vertical-align: middle\n    }\n\n    .navbar-form .input-group .form-control, .navbar-form .input-group .input-group-addon, .navbar-form .input-group .input-group-btn {\n        width: auto\n    }\n\n    .navbar-form .input-group > .form-control {\n        width: 100%\n    }\n\n    .navbar-form .control-label {\n        margin-bottom: 0;\n        vertical-align: middle\n    }\n\n    .navbar-form .checkbox, .navbar-form .radio {\n        display: inline-block;\n        margin-top: 0;\n        margin-bottom: 0;\n        vertical-align: middle\n    }\n\n    .navbar-form .checkbox label, .navbar-form .radio label {\n        padding-left: 0\n    }\n\n    .navbar-form .checkbox input[type=checkbox], .navbar-form .radio input[type=radio] {\n        position: relative;\n        margin-left: 0\n    }\n\n    .navbar-form .has-feedback .form-control-feedback {\n        top: 0\n    }\n}\n\n@media (max-width: 767px) {\n    .navbar-form .form-group {\n        margin-bottom: 5px\n    }\n\n    .navbar-form .form-group:last-child {\n        margin-bottom: 0\n    }\n}\n\n@media (min-width: 768px) {\n    .navbar-form {\n        width: auto;\n        padding-top: 0;\n        padding-bottom: 0;\n        margin-right: 0;\n        margin-left: 0;\n        border: 0;\n        -webkit-box-shadow: none;\n        box-shadow: none\n    }\n}\n\n.navbar-nav > li > .dropdown-menu {\n    margin-top: 0;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0\n}\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n    margin-bottom: 0;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0\n}\n\n.navbar-btn {\n    margin-top: 8px;\n    margin-bottom: 8px\n}\n\n.navbar-btn.btn-sm {\n    margin-top: 10px;\n    margin-bottom: 10px\n}\n\n.navbar-btn.btn-xs {\n    margin-top: 14px;\n    margin-bottom: 14px\n}\n\n.navbar-text {\n    margin-top: 15px;\n    margin-bottom: 15px\n}\n\n@media (min-width: 768px) {\n    .navbar-text {\n        float: left;\n        margin-right: 15px;\n        margin-left: 15px\n    }\n}\n\n@media (min-width: 768px) {\n    .navbar-left {\n        float: left !important\n    }\n\n    .navbar-right {\n        float: right !important;\n        margin-right: -15px\n    }\n\n    .navbar-right ~ .navbar-right {\n        margin-right: 0\n    }\n}\n\n.navbar-default {\n    background-color: #f8f8f8;\n    border-color: #e7e7e7\n}\n\n.navbar-default .navbar-brand {\n    color: #777\n}\n\n.navbar-default .navbar-brand:focus, .navbar-default .navbar-brand:hover {\n    color: #5e5e5e;\n    background-color: transparent\n}\n\n.navbar-default .navbar-text {\n    color: #777\n}\n\n.navbar-default .navbar-nav > li > a {\n    color: #777\n}\n\n.navbar-default .navbar-nav > li > a:focus, .navbar-default .navbar-nav > li > a:hover {\n    color: #333;\n    background-color: transparent\n}\n\n.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-nav > .active > a:hover {\n    color: #555;\n    background-color: #e7e7e7\n}\n\n.navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:focus, .navbar-default .navbar-nav > .disabled > a:hover {\n    color: #ccc;\n    background-color: transparent\n}\n\n.navbar-default .navbar-toggle {\n    border-color: #ddd\n}\n\n.navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {\n    background-color: #ddd\n}\n\n.navbar-default .navbar-toggle .icon-bar {\n    background-color: #888\n}\n\n.navbar-default .navbar-collapse, .navbar-default .navbar-form {\n    border-color: #e7e7e7\n}\n\n.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:focus, .navbar-default .navbar-nav > .open > a:hover {\n    color: #555;\n    background-color: #e7e7e7\n}\n\n@media (max-width: 767px) {\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n        color: #777\n    }\n\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus, .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover {\n        color: #333;\n        background-color: transparent\n    }\n\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover {\n        color: #555;\n        background-color: #e7e7e7\n    }\n\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover {\n        color: #ccc;\n        background-color: transparent\n    }\n}\n\n.navbar-default .navbar-link {\n    color: #777\n}\n\n.navbar-default .navbar-link:hover {\n    color: #333\n}\n\n.navbar-default .btn-link {\n    color: #777\n}\n\n.navbar-default .btn-link:focus, .navbar-default .btn-link:hover {\n    color: #333\n}\n\n.navbar-default .btn-link[disabled]:focus, .navbar-default .btn-link[disabled]:hover, fieldset[disabled] .navbar-default .btn-link:focus, fieldset[disabled] .navbar-default .btn-link:hover {\n    color: #ccc\n}\n\n.navbar-inverse {\n    background-color: #222;\n    border-color: #080808\n}\n\n.navbar-inverse .navbar-brand {\n    color: #9d9d9d\n}\n\n.navbar-inverse .navbar-brand:focus, .navbar-inverse .navbar-brand:hover {\n    color: #fff;\n    background-color: transparent\n}\n\n.navbar-inverse .navbar-text {\n    color: #9d9d9d\n}\n\n.navbar-inverse .navbar-nav > li > a {\n    color: #9d9d9d\n}\n\n.navbar-inverse .navbar-nav > li > a:focus, .navbar-inverse .navbar-nav > li > a:hover {\n    color: #fff;\n    background-color: transparent\n}\n\n.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:focus, .navbar-inverse .navbar-nav > .active > a:hover {\n    color: #fff;\n    background-color: #080808\n}\n\n.navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:focus, .navbar-inverse .navbar-nav > .disabled > a:hover {\n    color: #444;\n    background-color: transparent\n}\n\n.navbar-inverse .navbar-toggle {\n    border-color: #333\n}\n\n.navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover {\n    background-color: #333\n}\n\n.navbar-inverse .navbar-toggle .icon-bar {\n    background-color: #fff\n}\n\n.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {\n    border-color: #101010\n}\n\n.navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:focus, .navbar-inverse .navbar-nav > .open > a:hover {\n    color: #fff;\n    background-color: #080808\n}\n\n@media (max-width: 767px) {\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n        border-color: #080808\n    }\n\n    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n        background-color: #080808\n    }\n\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n        color: #9d9d9d\n    }\n\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover {\n        color: #fff;\n        background-color: transparent\n    }\n\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover {\n        color: #fff;\n        background-color: #080808\n    }\n\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover {\n        color: #444;\n        background-color: transparent\n    }\n}\n\n.navbar-inverse .navbar-link {\n    color: #9d9d9d\n}\n\n.navbar-inverse .navbar-link:hover {\n    color: #fff\n}\n\n.navbar-inverse .btn-link {\n    color: #9d9d9d\n}\n\n.navbar-inverse .btn-link:focus, .navbar-inverse .btn-link:hover {\n    color: #fff\n}\n\n.navbar-inverse .btn-link[disabled]:focus, .navbar-inverse .btn-link[disabled]:hover, fieldset[disabled] .navbar-inverse .btn-link:focus, fieldset[disabled] .navbar-inverse .btn-link:hover {\n    color: #444\n}\n\n.breadcrumb {\n    padding: 8px 15px;\n    margin-bottom: 20px;\n    list-style: none;\n    background-color: #f5f5f5;\n    border-radius: 4px\n}\n\n.breadcrumb > li {\n    display: inline-block\n}\n\n.breadcrumb > li + li:before {\n    padding: 0 5px;\n    color: #ccc;\n    content: \"/\\00a0\"\n}\n\n.breadcrumb > .active {\n    color: #777\n}\n\n.pagination {\n    display: inline-block;\n    padding-left: 0;\n    margin: 20px 0;\n    border-radius: 4px\n}\n\n.pagination > li {\n    display: inline\n}\n\n.pagination > li > a, .pagination > li > span {\n    position: relative;\n    float: left;\n    padding: 6px 12px;\n    margin-left: -1px;\n    line-height: 1.42857143;\n    color: #337ab7;\n    text-decoration: none;\n    background-color: #fff;\n    border: 1px solid #ddd\n}\n\n.pagination > li:first-child > a, .pagination > li:first-child > span {\n    margin-left: 0;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px\n}\n\n.pagination > li:last-child > a, .pagination > li:last-child > span {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px\n}\n\n.pagination > li > a:focus, .pagination > li > a:hover, .pagination > li > span:focus, .pagination > li > span:hover {\n    z-index: 2;\n    color: #23527c;\n    background-color: #eee;\n    border-color: #ddd\n}\n\n.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {\n    z-index: 3;\n    color: #fff;\n    cursor: default;\n    background-color: #337ab7;\n    border-color: #337ab7\n}\n\n.pagination > .disabled > a, .pagination > .disabled > a:focus, .pagination > .disabled > a:hover, .pagination > .disabled > span, .pagination > .disabled > span:focus, .pagination > .disabled > span:hover {\n    color: #777;\n    cursor: not-allowed;\n    background-color: #fff;\n    border-color: #ddd\n}\n\n.pagination-lg > li > a, .pagination-lg > li > span {\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333\n}\n\n.pagination-lg > li:first-child > a, .pagination-lg > li:first-child > span {\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px\n}\n\n.pagination-lg > li:last-child > a, .pagination-lg > li:last-child > span {\n    border-top-right-radius: 6px;\n    border-bottom-right-radius: 6px\n}\n\n.pagination-sm > li > a, .pagination-sm > li > span {\n    padding: 5px 10px;\n    font-size: 12px;\n    line-height: 1.5\n}\n\n.pagination-sm > li:first-child > a, .pagination-sm > li:first-child > span {\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px\n}\n\n.pagination-sm > li:last-child > a, .pagination-sm > li:last-child > span {\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px\n}\n\n.pager {\n    padding-left: 0;\n    margin: 20px 0;\n    text-align: center;\n    list-style: none\n}\n\n.pager li {\n    display: inline\n}\n\n.pager li > a, .pager li > span {\n    display: inline-block;\n    padding: 5px 14px;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 15px\n}\n\n.pager li > a:focus, .pager li > a:hover {\n    text-decoration: none;\n    background-color: #eee\n}\n\n.pager .next > a, .pager .next > span {\n    float: right\n}\n\n.pager .previous > a, .pager .previous > span {\n    float: left\n}\n\n.pager .disabled > a, .pager .disabled > a:focus, .pager .disabled > a:hover, .pager .disabled > span {\n    color: #777;\n    cursor: not-allowed;\n    background-color: #fff\n}\n\n.label {\n    display: inline;\n    padding: .2em .6em .3em;\n    font-size: 75%;\n    font-weight: 700;\n    line-height: 1;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: baseline;\n    border-radius: .25em\n}\n\na.label:focus, a.label:hover {\n    color: #fff;\n    text-decoration: none;\n    cursor: pointer\n}\n\n.label:empty {\n    display: none\n}\n\n.btn .label {\n    position: relative;\n    top: -1px\n}\n\n.label-default {\n    background-color: #777\n}\n\n.label-default[href]:focus, .label-default[href]:hover {\n    background-color: #5e5e5e\n}\n\n.label-primary {\n    background-color: #337ab7\n}\n\n.label-primary[href]:focus, .label-primary[href]:hover {\n    background-color: #286090\n}\n\n.label-success {\n    background-color: #5cb85c\n}\n\n.label-success[href]:focus, .label-success[href]:hover {\n    background-color: #449d44\n}\n\n.label-info {\n    background-color: #5bc0de\n}\n\n.label-info[href]:focus, .label-info[href]:hover {\n    background-color: #31b0d5\n}\n\n.label-warning {\n    background-color: #f0ad4e\n}\n\n.label-warning[href]:focus, .label-warning[href]:hover {\n    background-color: #ec971f\n}\n\n.label-danger {\n    background-color: #d9534f\n}\n\n.label-danger[href]:focus, .label-danger[href]:hover {\n    background-color: #c9302c\n}\n\n.badge {\n    display: inline-block;\n    min-width: 10px;\n    padding: 3px 7px;\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1;\n    color: #fff;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    background-color: #777;\n    border-radius: 10px\n}\n\n.badge:empty {\n    display: none\n}\n\n.btn .badge {\n    position: relative;\n    top: -1px\n}\n\n.btn-group-xs > .btn .badge, .btn-xs .badge {\n    top: 0;\n    padding: 1px 5px\n}\n\na.badge:focus, a.badge:hover {\n    color: #fff;\n    text-decoration: none;\n    cursor: pointer\n}\n\n.list-group-item.active > .badge, .nav-pills > .active > a > .badge {\n    color: #337ab7;\n    background-color: #fff\n}\n\n.list-group-item > .badge {\n    float: right\n}\n\n.list-group-item > .badge + .badge {\n    margin-right: 5px\n}\n\n.nav-pills > li > a > .badge {\n    margin-left: 3px\n}\n\n.jumbotron {\n    padding-top: 30px;\n    padding-bottom: 30px;\n    margin-bottom: 30px;\n    color: inherit;\n    background-color: #eee\n}\n\n.jumbotron .h1, .jumbotron h1 {\n    color: inherit\n}\n\n.jumbotron p {\n    margin-bottom: 15px;\n    font-size: 21px;\n    font-weight: 200\n}\n\n.jumbotron > hr {\n    border-top-color: #d5d5d5\n}\n\n.container .jumbotron, .container-fluid .jumbotron {\n    padding-right: 15px;\n    padding-left: 15px;\n    border-radius: 6px\n}\n\n.jumbotron .container {\n    max-width: 100%\n}\n\n@media screen and (min-width: 768px) {\n    .jumbotron {\n        padding-top: 48px;\n        padding-bottom: 48px\n    }\n\n    .container .jumbotron, .container-fluid .jumbotron {\n        padding-right: 60px;\n        padding-left: 60px\n    }\n\n    .jumbotron .h1, .jumbotron h1 {\n        font-size: 63px\n    }\n}\n\n.thumbnail {\n    display: block;\n    padding: 4px;\n    margin-bottom: 20px;\n    line-height: 1.42857143;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    -webkit-transition: border .2s ease-in-out;\n    -o-transition: border .2s ease-in-out;\n    transition: border .2s ease-in-out\n}\n\n.thumbnail a > img, .thumbnail > img {\n    margin-right: auto;\n    margin-left: auto\n}\n\na.thumbnail.active, a.thumbnail:focus, a.thumbnail:hover {\n    border-color: #337ab7\n}\n\n.thumbnail .caption {\n    padding: 9px;\n    color: #333\n}\n\n.alert {\n    padding: 15px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n    border-radius: 4px\n}\n\n.alert h4 {\n    margin-top: 0;\n    color: inherit\n}\n\n.alert .alert-link {\n    font-weight: 700\n}\n\n.alert > p, .alert > ul {\n    margin-bottom: 0\n}\n\n.alert > p + p {\n    margin-top: 5px\n}\n\n.alert-dismissable, .alert-dismissible {\n    padding-right: 35px\n}\n\n.alert-dismissable .close, .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit\n}\n\n.alert-success {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #d6e9c6\n}\n\n.alert-success hr {\n    border-top-color: #c9e2b3\n}\n\n.alert-success .alert-link {\n    color: #2b542c\n}\n\n.alert-info {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1\n}\n\n.alert-info hr {\n    border-top-color: #a6e1ec\n}\n\n.alert-info .alert-link {\n    color: #245269\n}\n\n.alert-warning {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc\n}\n\n.alert-warning hr {\n    border-top-color: #f7e1b5\n}\n\n.alert-warning .alert-link {\n    color: #66512c\n}\n\n.alert-danger {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1\n}\n\n.alert-danger hr {\n    border-top-color: #e4b9c0\n}\n\n.alert-danger .alert-link {\n    color: #843534\n}\n\n@-webkit-keyframes progress-bar-stripes {\n    from {\n        background-position: 40px 0\n    }\n    to {\n        background-position: 0 0\n    }\n}\n\n@-o-keyframes progress-bar-stripes {\n    from {\n        background-position: 40px 0\n    }\n    to {\n        background-position: 0 0\n    }\n}\n\n@keyframes progress-bar-stripes {\n    from {\n        background-position: 40px 0\n    }\n    to {\n        background-position: 0 0\n    }\n}\n\n.progress {\n    height: 20px;\n    margin-bottom: 20px;\n    overflow: hidden;\n    background-color: #f5f5f5;\n    border-radius: 4px;\n    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1)\n}\n\n.progress-bar {\n    float: left;\n    width: 0;\n    height: 100%;\n    font-size: 12px;\n    line-height: 20px;\n    color: #fff;\n    text-align: center;\n    background-color: #337ab7;\n    -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n    -webkit-transition: width .6s ease;\n    -o-transition: width .6s ease;\n    transition: width .6s ease\n}\n\n.progress-bar-striped, .progress-striped .progress-bar {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    -webkit-background-size: 40px 40px;\n    background-size: 40px 40px\n}\n\n.progress-bar.active, .progress.active .progress-bar {\n    -webkit-animation: progress-bar-stripes 2s linear infinite;\n    -o-animation: progress-bar-stripes 2s linear infinite;\n    animation: progress-bar-stripes 2s linear infinite\n}\n\n.progress-bar-success {\n    background-color: #5cb85c\n}\n\n.progress-striped .progress-bar-success {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)\n}\n\n.progress-bar-info {\n    background-color: #5bc0de\n}\n\n.progress-striped .progress-bar-info {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)\n}\n\n.progress-bar-warning {\n    background-color: #f0ad4e\n}\n\n.progress-striped .progress-bar-warning {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)\n}\n\n.progress-bar-danger {\n    background-color: #d9534f\n}\n\n.progress-striped .progress-bar-danger {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)\n}\n\n.media {\n    margin-top: 15px\n}\n\n.media:first-child {\n    margin-top: 0\n}\n\n.media, .media-body {\n    overflow: hidden;\n    zoom: 1\n}\n\n.media-body {\n    width: 10000px\n}\n\n.media-object {\n    display: block\n}\n\n.media-object.img-thumbnail {\n    max-width: none\n}\n\n.media-right, .media > .pull-right {\n    padding-left: 10px\n}\n\n.media-left, .media > .pull-left {\n    padding-right: 10px\n}\n\n.media-body, .media-left, .media-right {\n    display: table-cell;\n    vertical-align: top\n}\n\n.media-middle {\n    vertical-align: middle\n}\n\n.media-bottom {\n    vertical-align: bottom\n}\n\n.media-heading {\n    margin-top: 0;\n    margin-bottom: 5px\n}\n\n.media-list {\n    padding-left: 0;\n    list-style: none\n}\n\n.list-group {\n    padding-left: 0;\n    margin-bottom: 20px\n}\n\n.list-group-item {\n    position: relative;\n    display: block;\n    padding: 10px 15px;\n    margin-bottom: -1px;\n    background-color: #fff;\n    border: 1px solid #ddd\n}\n\n.list-group-item:first-child {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px\n}\n\n.list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px\n}\n\na.list-group-item, button.list-group-item {\n    color: #555\n}\n\na.list-group-item .list-group-item-heading, button.list-group-item .list-group-item-heading {\n    color: #333\n}\n\na.list-group-item:focus, a.list-group-item:hover, button.list-group-item:focus, button.list-group-item:hover {\n    color: #555;\n    text-decoration: none;\n    background-color: #f5f5f5\n}\n\nbutton.list-group-item {\n    width: 100%;\n    text-align: left\n}\n\n.list-group-item.disabled, .list-group-item.disabled:focus, .list-group-item.disabled:hover {\n    color: #777;\n    cursor: not-allowed;\n    background-color: #eee\n}\n\n.list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading {\n    color: inherit\n}\n\n.list-group-item.disabled .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text {\n    color: #777\n}\n\n.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {\n    z-index: 2;\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7\n}\n\n.list-group-item.active .list-group-item-heading, .list-group-item.active .list-group-item-heading > .small, .list-group-item.active .list-group-item-heading > small, .list-group-item.active:focus .list-group-item-heading, .list-group-item.active:focus .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading > small, .list-group-item.active:hover .list-group-item-heading, .list-group-item.active:hover .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading > small {\n    color: inherit\n}\n\n.list-group-item.active .list-group-item-text, .list-group-item.active:focus .list-group-item-text, .list-group-item.active:hover .list-group-item-text {\n    color: #c7ddef\n}\n\n.list-group-item-success {\n    color: #3c763d;\n    background-color: #dff0d8\n}\n\na.list-group-item-success, button.list-group-item-success {\n    color: #3c763d\n}\n\na.list-group-item-success .list-group-item-heading, button.list-group-item-success .list-group-item-heading {\n    color: inherit\n}\n\na.list-group-item-success:focus, a.list-group-item-success:hover, button.list-group-item-success:focus, button.list-group-item-success:hover {\n    color: #3c763d;\n    background-color: #d0e9c6\n}\n\na.list-group-item-success.active, a.list-group-item-success.active:focus, a.list-group-item-success.active:hover, button.list-group-item-success.active, button.list-group-item-success.active:focus, button.list-group-item-success.active:hover {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d\n}\n\n.list-group-item-info {\n    color: #31708f;\n    background-color: #d9edf7\n}\n\na.list-group-item-info, button.list-group-item-info {\n    color: #31708f\n}\n\na.list-group-item-info .list-group-item-heading, button.list-group-item-info .list-group-item-heading {\n    color: inherit\n}\n\na.list-group-item-info:focus, a.list-group-item-info:hover, button.list-group-item-info:focus, button.list-group-item-info:hover {\n    color: #31708f;\n    background-color: #c4e3f3\n}\n\na.list-group-item-info.active, a.list-group-item-info.active:focus, a.list-group-item-info.active:hover, button.list-group-item-info.active, button.list-group-item-info.active:focus, button.list-group-item-info.active:hover {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f\n}\n\n.list-group-item-warning {\n    color: #8a6d3b;\n    background-color: #fcf8e3\n}\n\na.list-group-item-warning, button.list-group-item-warning {\n    color: #8a6d3b\n}\n\na.list-group-item-warning .list-group-item-heading, button.list-group-item-warning .list-group-item-heading {\n    color: inherit\n}\n\na.list-group-item-warning:focus, a.list-group-item-warning:hover, button.list-group-item-warning:focus, button.list-group-item-warning:hover {\n    color: #8a6d3b;\n    background-color: #faf2cc\n}\n\na.list-group-item-warning.active, a.list-group-item-warning.active:focus, a.list-group-item-warning.active:hover, button.list-group-item-warning.active, button.list-group-item-warning.active:focus, button.list-group-item-warning.active:hover {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b\n}\n\n.list-group-item-danger {\n    color: #a94442;\n    background-color: #f2dede\n}\n\na.list-group-item-danger, button.list-group-item-danger {\n    color: #a94442\n}\n\na.list-group-item-danger .list-group-item-heading, button.list-group-item-danger .list-group-item-heading {\n    color: inherit\n}\n\na.list-group-item-danger:focus, a.list-group-item-danger:hover, button.list-group-item-danger:focus, button.list-group-item-danger:hover {\n    color: #a94442;\n    background-color: #ebcccc\n}\n\na.list-group-item-danger.active, a.list-group-item-danger.active:focus, a.list-group-item-danger.active:hover, button.list-group-item-danger.active, button.list-group-item-danger.active:focus, button.list-group-item-danger.active:hover {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442\n}\n\n.list-group-item-heading {\n    margin-top: 0;\n    margin-bottom: 5px\n}\n\n.list-group-item-text {\n    margin-bottom: 0;\n    line-height: 1.3\n}\n\n.panel {\n    margin-bottom: 20px;\n    background-color: #fff;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, .05)\n}\n\n.panel-body {\n    padding: 15px\n}\n\n.panel-heading {\n    padding: 10px 15px;\n    border-bottom: 1px solid transparent;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px\n}\n\n.panel-heading > .dropdown .dropdown-toggle {\n    color: inherit\n}\n\n.panel-title {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 16px;\n    color: inherit\n}\n\n.panel-title > .small, .panel-title > .small > a, .panel-title > a, .panel-title > small, .panel-title > small > a {\n    color: inherit\n}\n\n.panel-footer {\n    padding: 10px 15px;\n    background-color: #f5f5f5;\n    border-top: 1px solid #ddd;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px\n}\n\n.panel > .list-group, .panel > .panel-collapse > .list-group {\n    margin-bottom: 0\n}\n\n.panel > .list-group .list-group-item, .panel > .panel-collapse > .list-group .list-group-item {\n    border-width: 1px 0;\n    border-radius: 0\n}\n\n.panel > .list-group:first-child .list-group-item:first-child, .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n    border-top: 0;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px\n}\n\n.panel > .list-group:last-child .list-group-item:last-child, .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n    border-bottom: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px\n}\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0\n}\n\n.panel-heading + .list-group .list-group-item:first-child {\n    border-top-width: 0\n}\n\n.list-group + .panel-footer {\n    border-top-width: 0\n}\n\n.panel > .panel-collapse > .table, .panel > .table, .panel > .table-responsive > .table {\n    margin-bottom: 0\n}\n\n.panel > .panel-collapse > .table caption, .panel > .table caption, .panel > .table-responsive > .table caption {\n    padding-right: 15px;\n    padding-left: 15px\n}\n\n.panel > .table-responsive:first-child > .table:first-child, .panel > .table:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px\n}\n\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child, .panel > .table:first-child > tbody:first-child > tr:first-child, .panel > .table:first-child > thead:first-child > tr:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px\n}\n\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child, .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child, .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child, .panel > .table:first-child > thead:first-child > tr:first-child td:first-child, .panel > .table:first-child > thead:first-child > tr:first-child th:first-child {\n    border-top-left-radius: 3px\n}\n\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child, .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child, .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child, .panel > .table:first-child > thead:first-child > tr:first-child td:last-child, .panel > .table:first-child > thead:first-child > tr:first-child th:last-child {\n    border-top-right-radius: 3px\n}\n\n.panel > .table-responsive:last-child > .table:last-child, .panel > .table:last-child {\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px\n}\n\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child, .panel > .table:last-child > tbody:last-child > tr:last-child, .panel > .table:last-child > tfoot:last-child > tr:last-child {\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px\n}\n\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child, .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child, .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child, .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child, .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n    border-bottom-left-radius: 3px\n}\n\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child, .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child, .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child, .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child, .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n    border-bottom-right-radius: 3px\n}\n\n.panel > .panel-body + .table, .panel > .panel-body + .table-responsive, .panel > .table + .panel-body, .panel > .table-responsive + .panel-body {\n    border-top: 1px solid #ddd\n}\n\n.panel > .table > tbody:first-child > tr:first-child td, .panel > .table > tbody:first-child > tr:first-child th {\n    border-top: 0\n}\n\n.panel > .table-bordered, .panel > .table-responsive > .table-bordered {\n    border: 0\n}\n\n.panel > .table-bordered > tbody > tr > td:first-child, .panel > .table-bordered > tbody > tr > th:first-child, .panel > .table-bordered > tfoot > tr > td:first-child, .panel > .table-bordered > tfoot > tr > th:first-child, .panel > .table-bordered > thead > tr > td:first-child, .panel > .table-bordered > thead > tr > th:first-child, .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child, .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child, .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child, .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child, .panel > .table-responsive > .table-bordered > thead > tr > td:first-child, .panel > .table-responsive > .table-bordered > thead > tr > th:first-child {\n    border-left: 0\n}\n\n.panel > .table-bordered > tbody > tr > td:last-child, .panel > .table-bordered > tbody > tr > th:last-child, .panel > .table-bordered > tfoot > tr > td:last-child, .panel > .table-bordered > tfoot > tr > th:last-child, .panel > .table-bordered > thead > tr > td:last-child, .panel > .table-bordered > thead > tr > th:last-child, .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child, .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child, .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child, .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child, .panel > .table-responsive > .table-bordered > thead > tr > td:last-child, .panel > .table-responsive > .table-bordered > thead > tr > th:last-child {\n    border-right: 0\n}\n\n.panel > .table-bordered > tbody > tr:first-child > td, .panel > .table-bordered > tbody > tr:first-child > th, .panel > .table-bordered > thead > tr:first-child > td, .panel > .table-bordered > thead > tr:first-child > th, .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td, .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th, .panel > .table-responsive > .table-bordered > thead > tr:first-child > td, .panel > .table-responsive > .table-bordered > thead > tr:first-child > th {\n    border-bottom: 0\n}\n\n.panel > .table-bordered > tbody > tr:last-child > td, .panel > .table-bordered > tbody > tr:last-child > th, .panel > .table-bordered > tfoot > tr:last-child > td, .panel > .table-bordered > tfoot > tr:last-child > th, .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td, .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th, .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td, .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n    border-bottom: 0\n}\n\n.panel > .table-responsive {\n    margin-bottom: 0;\n    border: 0\n}\n\n.panel-group {\n    margin-bottom: 20px\n}\n\n.panel-group .panel {\n    margin-bottom: 0;\n    border-radius: 4px\n}\n\n.panel-group .panel + .panel {\n    margin-top: 5px\n}\n\n.panel-group .panel-heading {\n    border-bottom: 0\n}\n\n.panel-group .panel-heading + .panel-collapse > .list-group, .panel-group .panel-heading + .panel-collapse > .panel-body {\n    border-top: 1px solid #ddd\n}\n\n.panel-group .panel-footer {\n    border-top: 0\n}\n\n.panel-group .panel-footer + .panel-collapse .panel-body {\n    border-bottom: 1px solid #ddd\n}\n\n.panel-default {\n    border-color: #ddd\n}\n\n.panel-default > .panel-heading {\n    color: #333;\n    background-color: #f5f5f5;\n    border-color: #ddd\n}\n\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #ddd\n}\n\n.panel-default > .panel-heading .badge {\n    color: #f5f5f5;\n    background-color: #333\n}\n\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ddd\n}\n\n.panel-primary {\n    border-color: #337ab7\n}\n\n.panel-primary > .panel-heading {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7\n}\n\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #337ab7\n}\n\n.panel-primary > .panel-heading .badge {\n    color: #337ab7;\n    background-color: #fff\n}\n\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #337ab7\n}\n\n.panel-success {\n    border-color: #d6e9c6\n}\n\n.panel-success > .panel-heading {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #d6e9c6\n}\n\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #d6e9c6\n}\n\n.panel-success > .panel-heading .badge {\n    color: #dff0d8;\n    background-color: #3c763d\n}\n\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #d6e9c6\n}\n\n.panel-info {\n    border-color: #bce8f1\n}\n\n.panel-info > .panel-heading {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1\n}\n\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #bce8f1\n}\n\n.panel-info > .panel-heading .badge {\n    color: #d9edf7;\n    background-color: #31708f\n}\n\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #bce8f1\n}\n\n.panel-warning {\n    border-color: #faebcc\n}\n\n.panel-warning > .panel-heading {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc\n}\n\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #faebcc\n}\n\n.panel-warning > .panel-heading .badge {\n    color: #fcf8e3;\n    background-color: #8a6d3b\n}\n\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #faebcc\n}\n\n.panel-danger {\n    border-color: #ebccd1\n}\n\n.panel-danger > .panel-heading {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1\n}\n\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n    border-top-color: #ebccd1\n}\n\n.panel-danger > .panel-heading .badge {\n    color: #f2dede;\n    background-color: #a94442\n}\n\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ebccd1\n}\n\n.embed-responsive {\n    position: relative;\n    display: block;\n    height: 0;\n    padding: 0;\n    overflow: hidden\n}\n\n.embed-responsive .embed-responsive-item, .embed-responsive embed, .embed-responsive iframe, .embed-responsive object, .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0\n}\n\n.embed-responsive-16by9 {\n    padding-bottom: 56.25%\n}\n\n.embed-responsive-4by3 {\n    padding-bottom: 75%\n}\n\n.well {\n    min-height: 20px;\n    padding: 19px;\n    margin-bottom: 20px;\n    background-color: #f5f5f5;\n    border: 1px solid #e3e3e3;\n    border-radius: 4px;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05)\n}\n\n.well blockquote {\n    border-color: #ddd;\n    border-color: rgba(0, 0, 0, .15)\n}\n\n.well-lg {\n    padding: 24px;\n    border-radius: 6px\n}\n\n.well-sm {\n    padding: 9px;\n    border-radius: 3px\n}\n\n.close {\n    float: right;\n    font-size: 21px;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    filter: alpha(opacity=20);\n    opacity: .2\n}\n\n.close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    filter: alpha(opacity=50);\n    opacity: .5\n}\n\nbutton.close {\n    -webkit-appearance: none;\n    padding: 0;\n    cursor: pointer;\n    background: 0 0;\n    border: 0\n}\n\n.modal-open {\n    overflow: hidden\n}\n\n.modal {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1050;\n    display: none;\n    overflow: hidden;\n    -webkit-overflow-scrolling: touch;\n    outline: 0\n}\n\n.modal.fade .modal-dialog {\n    -webkit-transition: -webkit-transform .3s ease-out;\n    -o-transition: -o-transform .3s ease-out;\n    transition: transform .3s ease-out;\n    -webkit-transform: translate(0, -25%);\n    -ms-transform: translate(0, -25%);\n    -o-transform: translate(0, -25%);\n    transform: translate(0, -25%)\n}\n\n.modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0)\n}\n\n.modal-open .modal {\n    overflow-x: hidden;\n    overflow-y: auto\n}\n\n.modal-dialog {\n    position: relative;\n    width: auto;\n    margin: 10px\n}\n\n.modal-content {\n    position: relative;\n    background-color: #fff;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box;\n    border: 1px solid #999;\n    border: 1px solid rgba(0, 0, 0, .2);\n    border-radius: 6px;\n    outline: 0;\n    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n    box-shadow: 0 3px 9px rgba(0, 0, 0, .5)\n}\n\n.modal-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1040;\n    background-color: #000\n}\n\n.modal-backdrop.fade {\n    filter: alpha(opacity=0);\n    opacity: 0\n}\n\n.modal-backdrop.in {\n    filter: alpha(opacity=50);\n    opacity: .5\n}\n\n.modal-header {\n    padding: 15px;\n    border-bottom: 1px solid #e5e5e5\n}\n\n.modal-header .close {\n    margin-top: -2px\n}\n\n.modal-title {\n    margin: 0;\n    line-height: 1.42857143\n}\n\n.modal-body {\n    position: relative;\n    padding: 15px\n}\n\n.modal-footer {\n    padding: 15px;\n    text-align: right;\n    border-top: 1px solid #e5e5e5\n}\n\n.modal-footer .btn + .btn {\n    margin-bottom: 0;\n    margin-left: 5px\n}\n\n.modal-footer .btn-group .btn + .btn {\n    margin-left: -1px\n}\n\n.modal-footer .btn-block + .btn-block {\n    margin-left: 0\n}\n\n.modal-scrollbar-measure {\n    position: absolute;\n    top: -9999px;\n    width: 50px;\n    height: 50px;\n    overflow: scroll\n}\n\n@media (min-width: 768px) {\n    .modal-dialog {\n        width: 600px;\n        margin: 30px auto\n    }\n\n    .modal-content {\n        -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n        box-shadow: 0 5px 15px rgba(0, 0, 0, .5)\n    }\n\n    .modal-sm {\n        width: 300px\n    }\n}\n\n@media (min-width: 992px) {\n    .modal-lg {\n        width: 900px\n    }\n}\n\n.tooltip {\n    position: absolute;\n    z-index: 1070;\n    display: block;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.42857143;\n    text-align: left;\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-break: normal;\n    word-spacing: normal;\n    word-wrap: normal;\n    white-space: normal;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    line-break: auto\n}\n\n.tooltip.in {\n    filter: alpha(opacity=90);\n    opacity: .9\n}\n\n.tooltip.top {\n    padding: 5px 0;\n    margin-top: -3px\n}\n\n.tooltip.right {\n    padding: 0 5px;\n    margin-left: 3px\n}\n\n.tooltip.bottom {\n    padding: 5px 0;\n    margin-top: 3px\n}\n\n.tooltip.left {\n    padding: 0 5px;\n    margin-left: -3px\n}\n\n.tooltip-inner {\n    max-width: 200px;\n    padding: 3px 8px;\n    color: #fff;\n    text-align: center;\n    background-color: #000;\n    border-radius: 4px\n}\n\n.tooltip-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid\n}\n\n.tooltip.top .tooltip-arrow {\n    bottom: 0;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px 5px 0;\n    border-top-color: #000\n}\n\n.tooltip.top-left .tooltip-arrow {\n    right: 5px;\n    bottom: 0;\n    margin-bottom: -5px;\n    border-width: 5px 5px 0;\n    border-top-color: #000\n}\n\n.tooltip.top-right .tooltip-arrow {\n    bottom: 0;\n    left: 5px;\n    margin-bottom: -5px;\n    border-width: 5px 5px 0;\n    border-top-color: #000\n}\n\n.tooltip.right .tooltip-arrow {\n    top: 50%;\n    left: 0;\n    margin-top: -5px;\n    border-width: 5px 5px 5px 0;\n    border-right-color: #000\n}\n\n.tooltip.left .tooltip-arrow {\n    top: 50%;\n    right: 0;\n    margin-top: -5px;\n    border-width: 5px 0 5px 5px;\n    border-left-color: #000\n}\n\n.tooltip.bottom .tooltip-arrow {\n    top: 0;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 0 5px 5px;\n    border-bottom-color: #000\n}\n\n.tooltip.bottom-left .tooltip-arrow {\n    top: 0;\n    right: 5px;\n    margin-top: -5px;\n    border-width: 0 5px 5px;\n    border-bottom-color: #000\n}\n\n.tooltip.bottom-right .tooltip-arrow {\n    top: 0;\n    left: 5px;\n    margin-top: -5px;\n    border-width: 0 5px 5px;\n    border-bottom-color: #000\n}\n\n.popover {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1060;\n    display: none;\n    max-width: 276px;\n    padding: 1px;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.42857143;\n    text-align: left;\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-break: normal;\n    word-spacing: normal;\n    word-wrap: normal;\n    white-space: normal;\n    background-color: #fff;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box;\n    border: 1px solid #ccc;\n    border: 1px solid rgba(0, 0, 0, .2);\n    border-radius: 6px;\n    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n    line-break: auto\n}\n\n.popover.top {\n    margin-top: -10px\n}\n\n.popover.right {\n    margin-left: 10px\n}\n\n.popover.bottom {\n    margin-top: 10px\n}\n\n.popover.left {\n    margin-left: -10px\n}\n\n.popover-title {\n    padding: 8px 14px;\n    margin: 0;\n    font-size: 14px;\n    background-color: #f7f7f7;\n    border-bottom: 1px solid #ebebeb;\n    border-radius: 5px 5px 0 0\n}\n\n.popover-content {\n    padding: 9px 14px\n}\n\n.popover > .arrow, .popover > .arrow:after {\n    position: absolute;\n    display: block;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid\n}\n\n.popover > .arrow {\n    border-width: 11px\n}\n\n.popover > .arrow:after {\n    content: \"\";\n    border-width: 10px\n}\n\n.popover.top > .arrow {\n    bottom: -11px;\n    left: 50%;\n    margin-left: -11px;\n    border-top-color: #999;\n    border-top-color: rgba(0, 0, 0, .25);\n    border-bottom-width: 0\n}\n\n.popover.top > .arrow:after {\n    bottom: 1px;\n    margin-left: -10px;\n    content: \" \";\n    border-top-color: #fff;\n    border-bottom-width: 0\n}\n\n.popover.right > .arrow {\n    top: 50%;\n    left: -11px;\n    margin-top: -11px;\n    border-right-color: #999;\n    border-right-color: rgba(0, 0, 0, .25);\n    border-left-width: 0\n}\n\n.popover.right > .arrow:after {\n    bottom: -10px;\n    left: 1px;\n    content: \" \";\n    border-right-color: #fff;\n    border-left-width: 0\n}\n\n.popover.bottom > .arrow {\n    top: -11px;\n    left: 50%;\n    margin-left: -11px;\n    border-top-width: 0;\n    border-bottom-color: #999;\n    border-bottom-color: rgba(0, 0, 0, .25)\n}\n\n.popover.bottom > .arrow:after {\n    top: 1px;\n    margin-left: -10px;\n    content: \" \";\n    border-top-width: 0;\n    border-bottom-color: #fff\n}\n\n.popover.left > .arrow {\n    top: 50%;\n    right: -11px;\n    margin-top: -11px;\n    border-right-width: 0;\n    border-left-color: #999;\n    border-left-color: rgba(0, 0, 0, .25)\n}\n\n.popover.left > .arrow:after {\n    right: 1px;\n    bottom: -10px;\n    content: \" \";\n    border-right-width: 0;\n    border-left-color: #fff\n}\n\n.carousel {\n    position: relative\n}\n\n.carousel-inner {\n    position: relative;\n    width: 100%;\n    overflow: hidden\n}\n\n.carousel-inner > .item {\n    position: relative;\n    display: none;\n    -webkit-transition: .6s ease-in-out left;\n    -o-transition: .6s ease-in-out left;\n    transition: .6s ease-in-out left\n}\n\n.carousel-inner > .item > a > img, .carousel-inner > .item > img {\n    line-height: 1\n}\n\n@media all and (transform-3d),(-webkit-transform-3d) {\n    .carousel-inner > .item {\n        -webkit-transition: -webkit-transform .6s ease-in-out;\n        -o-transition: -o-transform .6s ease-in-out;\n        transition: transform .6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n        perspective: 1000px\n    }\n\n    .carousel-inner > .item.active.right, .carousel-inner > .item.next {\n        left: 0;\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0)\n    }\n\n    .carousel-inner > .item.active.left, .carousel-inner > .item.prev {\n        left: 0;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0)\n    }\n\n    .carousel-inner > .item.active, .carousel-inner > .item.next.left, .carousel-inner > .item.prev.right {\n        left: 0;\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n.carousel-inner > .active, .carousel-inner > .next, .carousel-inner > .prev {\n    display: block\n}\n\n.carousel-inner > .active {\n    left: 0\n}\n\n.carousel-inner > .next, .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%\n}\n\n.carousel-inner > .next {\n    left: 100%\n}\n\n.carousel-inner > .prev {\n    left: -100%\n}\n\n.carousel-inner > .next.left, .carousel-inner > .prev.right {\n    left: 0\n}\n\n.carousel-inner > .active.left {\n    left: -100%\n}\n\n.carousel-inner > .active.right {\n    left: 100%\n}\n\n.carousel-control {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 15%;\n    font-size: 20px;\n    color: #fff;\n    text-align: center;\n    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n    background-color: rgba(0, 0, 0, 0);\n    filter: alpha(opacity=50);\n    opacity: .5\n}\n\n.carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, .0001) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, .0001) 100%);\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));\n    background-image: linear-gradient(to right, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, .0001) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n    background-repeat: repeat-x\n}\n\n.carousel-control.right {\n    right: 0;\n    left: auto;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0, rgba(0, 0, 0, .5) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0, rgba(0, 0, 0, .5) 100%);\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));\n    background-image: linear-gradient(to right, rgba(0, 0, 0, .0001) 0, rgba(0, 0, 0, .5) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n    background-repeat: repeat-x\n}\n\n.carousel-control:focus, .carousel-control:hover {\n    color: #fff;\n    text-decoration: none;\n    filter: alpha(opacity=90);\n    outline: 0;\n    opacity: .9\n}\n\n.carousel-control .glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right, .carousel-control .icon-next, .carousel-control .icon-prev {\n    position: absolute;\n    top: 50%;\n    z-index: 5;\n    display: inline-block;\n    margin-top: -10px\n}\n\n.carousel-control .glyphicon-chevron-left, .carousel-control .icon-prev {\n    left: 50%;\n    margin-left: -10px\n}\n\n.carousel-control .glyphicon-chevron-right, .carousel-control .icon-next {\n    right: 50%;\n    margin-right: -10px\n}\n\n.carousel-control .icon-next, .carousel-control .icon-prev {\n    width: 20px;\n    height: 20px;\n    font-family: serif;\n    line-height: 1\n}\n\n.carousel-control .icon-prev:before {\n    content: '\\2039'\n}\n\n.carousel-control .icon-next:before {\n    content: '\\203a'\n}\n\n.carousel-indicators {\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    z-index: 15;\n    width: 60%;\n    padding-left: 0;\n    margin-left: -30%;\n    text-align: center;\n    list-style: none\n}\n\n.carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: #000 \\9;\n    background-color: rgba(0, 0, 0, 0);\n    border: 1px solid #fff;\n    border-radius: 10px\n}\n\n.carousel-indicators .active {\n    width: 12px;\n    height: 12px;\n    margin: 0;\n    background-color: #fff\n}\n\n.carousel-caption {\n    position: absolute;\n    right: 15%;\n    bottom: 20px;\n    left: 15%;\n    z-index: 10;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    color: #fff;\n    text-align: center;\n    text-shadow: 0 1px 2px rgba(0, 0, 0, .6)\n}\n\n.carousel-caption .btn {\n    text-shadow: none\n}\n\n@media screen and (min-width: 768px) {\n    .carousel-control .glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right, .carousel-control .icon-next, .carousel-control .icon-prev {\n        width: 30px;\n        height: 30px;\n        margin-top: -10px;\n        font-size: 30px\n    }\n\n    .carousel-control .glyphicon-chevron-left, .carousel-control .icon-prev {\n        margin-left: -10px\n    }\n\n    .carousel-control .glyphicon-chevron-right, .carousel-control .icon-next {\n        margin-right: -10px\n    }\n\n    .carousel-caption {\n        right: 20%;\n        left: 20%;\n        padding-bottom: 30px\n    }\n\n    .carousel-indicators {\n        bottom: 20px\n    }\n}\n\n.btn-group-vertical > .btn-group:after, .btn-group-vertical > .btn-group:before, .btn-toolbar:after, .btn-toolbar:before, .clearfix:after, .clearfix:before, .container-fluid:after, .container-fluid:before, .container:after, .container:before, .dl-horizontal dd:after, .dl-horizontal dd:before, .form-horizontal .form-group:after, .form-horizontal .form-group:before, .modal-footer:after, .modal-footer:before, .modal-header:after, .modal-header:before, .nav:after, .nav:before, .navbar-collapse:after, .navbar-collapse:before, .navbar-header:after, .navbar-header:before, .navbar:after, .navbar:before, .pager:after, .pager:before, .panel-body:after, .panel-body:before, .row:after, .row:before {\n    display: table;\n    content: \" \"\n}\n\n.btn-group-vertical > .btn-group:after, .btn-toolbar:after, .clearfix:after, .container-fluid:after, .container:after, .dl-horizontal dd:after, .form-horizontal .form-group:after, .modal-footer:after, .modal-header:after, .nav:after, .navbar-collapse:after, .navbar-header:after, .navbar:after, .pager:after, .panel-body:after, .row:after {\n    clear: both\n}\n\n.center-block {\n    display: block;\n    margin-right: auto;\n    margin-left: auto\n}\n\n.pull-right {\n    float: right !important\n}\n\n.pull-left {\n    float: left !important\n}\n\n.hide {\n    display: none !important\n}\n\n.show {\n    display: block !important\n}\n\n.invisible {\n    visibility: hidden\n}\n\n.text-hide {\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0\n}\n\n.hidden {\n    display: none !important\n}\n\n.affix {\n    position: fixed\n}\n\n@-ms-viewport {\n    width: device-width\n}\n\n.visible-lg, .visible-md, .visible-sm, .visible-xs {\n    display: none !important\n}\n\n.visible-lg-block, .visible-lg-inline, .visible-lg-inline-block, .visible-md-block, .visible-md-inline, .visible-md-inline-block, .visible-sm-block, .visible-sm-inline, .visible-sm-inline-block, .visible-xs-block, .visible-xs-inline, .visible-xs-inline-block {\n    display: none !important\n}\n\n@media (max-width: 767px) {\n    .visible-xs {\n        display: block !important\n    }\n\n    table.visible-xs {\n        display: table !important\n    }\n\n    tr.visible-xs {\n        display: table-row !important\n    }\n\n    td.visible-xs, th.visible-xs {\n        display: table-cell !important\n    }\n}\n\n@media (max-width: 767px) {\n    .visible-xs-block {\n        display: block !important\n    }\n}\n\n@media (max-width: 767px) {\n    .visible-xs-inline {\n        display: inline !important\n    }\n}\n\n@media (max-width: 767px) {\n    .visible-xs-inline-block {\n        display: inline-block !important\n    }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n    .visible-sm {\n        display: block !important\n    }\n\n    table.visible-sm {\n        display: table !important\n    }\n\n    tr.visible-sm {\n        display: table-row !important\n    }\n\n    td.visible-sm, th.visible-sm {\n        display: table-cell !important\n    }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n    .visible-sm-block {\n        display: block !important\n    }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n    .visible-sm-inline {\n        display: inline !important\n    }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n    .visible-sm-inline-block {\n        display: inline-block !important\n    }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n    .visible-md {\n        display: block !important\n    }\n\n    table.visible-md {\n        display: table !important\n    }\n\n    tr.visible-md {\n        display: table-row !important\n    }\n\n    td.visible-md, th.visible-md {\n        display: table-cell !important\n    }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n    .visible-md-block {\n        display: block !important\n    }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n    .visible-md-inline {\n        display: inline !important\n    }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n    .visible-md-inline-block {\n        display: inline-block !important\n    }\n}\n\n@media (min-width: 1200px) {\n    .visible-lg {\n        display: block !important\n    }\n\n    table.visible-lg {\n        display: table !important\n    }\n\n    tr.visible-lg {\n        display: table-row !important\n    }\n\n    td.visible-lg, th.visible-lg {\n        display: table-cell !important\n    }\n}\n\n@media (min-width: 1200px) {\n    .visible-lg-block {\n        display: block !important\n    }\n}\n\n@media (min-width: 1200px) {\n    .visible-lg-inline {\n        display: inline !important\n    }\n}\n\n@media (min-width: 1200px) {\n    .visible-lg-inline-block {\n        display: inline-block !important\n    }\n}\n\n@media (max-width: 767px) {\n    .hidden-xs {\n        display: none !important\n    }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n    .hidden-sm {\n        display: none !important\n    }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n    .hidden-md {\n        display: none !important\n    }\n}\n\n@media (min-width: 1200px) {\n    .hidden-lg {\n        display: none !important\n    }\n}\n\n.visible-print {\n    display: none !important\n}\n\n@media print {\n    .visible-print {\n        display: block !important\n    }\n\n    table.visible-print {\n        display: table !important\n    }\n\n    tr.visible-print {\n        display: table-row !important\n    }\n\n    td.visible-print, th.visible-print {\n        display: table-cell !important\n    }\n}\n\n.visible-print-block {\n    display: none !important\n}\n\n@media print {\n    .visible-print-block {\n        display: block !important\n    }\n}\n\n.visible-print-inline {\n    display: none !important\n}\n\n@media print {\n    .visible-print-inline {\n        display: inline !important\n    }\n}\n\n.visible-print-inline-block {\n    display: none !important\n}\n\n@media print {\n    .visible-print-inline-block {\n        display: inline-block !important\n    }\n}\n\n@media print {\n    .hidden-print {\n        display: none !important\n    }\n}\n\n/*# sourceMappingURL=bootstrap.min.css.map */"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = "html {\n    overflow: auto;\n    overflow: initial;\n}"

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(28));
	__export(__webpack_require__(60));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	// Provider imports
	const platform_browser_1 = __webpack_require__(21);
	const http_1 = __webpack_require__(29);
	const comparison_details_component_1 = __webpack_require__(30);
	const comparison_footnote_component_1 = __webpack_require__(58);
	const comparison_component_1 = __webpack_require__(60);
	const pipes_module_1 = __webpack_require__(67);
	const input_module_1 = __webpack_require__(73);
	const output_module_1 = __webpack_require__(92);
	const comparison_service_1 = __webpack_require__(53);
	const comparison_data_service_1 = __webpack_require__(52);
	const comparison_config_service_1 = __webpack_require__(51);
	const comparison_citation_service_1 = __webpack_require__(55);
	let ComparisonModule = class ComparisonModule {
	};
	ComparisonModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            http_1.HttpModule,
	            input_module_1.InputModule,
	            output_module_1.OutputModule,
	            pipes_module_1.PipesModule
	        ],
	        exports: [
	            comparison_component_1.ComparisonComponent
	        ],
	        declarations: [
	            comparison_component_1.ComparisonComponent,
	            comparison_details_component_1.ComparisonDetailsComponent,
	            comparison_footnote_component_1.ComparisonFootnoteComponent
	        ],
	        providers: [
	            comparison_service_1.ComparisonService,
	            comparison_data_service_1.ComparisonDataService,
	            comparison_config_service_1.ComparisonConfigService,
	            comparison_citation_service_1.ComparisonCitationService,
	            platform_browser_1.Title
	        ]
	    }), 
	    __metadata('design:paramtypes', [])
	], ComparisonModule);
	exports.ComparisonModule = ComparisonModule;


/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const index_1 = __webpack_require__(31);
	const comparison_config_service_1 = __webpack_require__(51);
	const comparison_data_service_1 = __webpack_require__(52);
	const comparison_service_1 = __webpack_require__(53);
	const comparison_citation_service_1 = __webpack_require__(55);
	let ComparisonDetailsComponent = class ComparisonDetailsComponent {
	    constructor(serv, dataServ, confServ, citationServ) {
	        this.serv = serv;
	        this.dataServ = dataServ;
	        this.confServ = confServ;
	        this.citationServ = citationServ;
	        this.opened = false;
	        this.header = {
	            html: "",
	            text: "",
	            label: {},
	            url: "",
	            column: new index_1.TableData(),
	        };
	        this.body = "";
	    }
	    getBody() {
	        let body = this.confServ.comparison ? this.serv.converter.makeHtml(this.data.getProperty(this.confServ.comparison.details.body).plain) : "";
	        if (body && body != this.body) {
	            this.body = body;
	        }
	        return this.body;
	    }
	    getHeaderText() {
	        let headerText = this.confServ.comparison ? this.data[this.confServ.comparison.details.header] : "";
	        if (headerText && headerText != this.header.text) {
	            this.header.text = headerText;
	        }
	        return this.header.text;
	    }
	    getHeaderUrl() {
	        let headerUrl = this.confServ.comparison ? this.data[this.confServ.comparison.details.headerUrl] : "";
	        if (headerUrl && headerUrl != this.header.url) {
	            this.header.url = headerUrl;
	        }
	        return this.header.url;
	    }
	    getHeaderColumn() {
	        let headerColumn = (this.confServ.comparison && this.confServ.tableDataSet) ? this.confServ.tableDataSet.getTableData(this.confServ.comparison.details.headerLabel) : new index_1.TableData();
	        if (headerColumn && headerColumn != this.header.column) {
	            this.header.column = headerColumn;
	        }
	        return this.header.column;
	    }
	    getHeaderLabel() {
	        let headerLabel = (this.confServ.comparison && this.confServ.tableDataSet) ? this.confServ.tableDataSet.getTableData(this.confServ.comparison.details.headerLabel).type : new index_1.Type();
	        if (headerLabel && headerLabel != this.header.label) {
	            this.header.label = headerLabel;
	        }
	        return headerLabel;
	    }
	    getTable(tag) {
	        return this.confServ.tableDataSet ? this.confServ.tableDataSet.getTableData(tag) : new index_1.TableData();
	    }
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', (typeof (_a = typeof index_1.Data !== 'undefined' && index_1.Data) === 'function' && _a) || Object)
	], ComparisonDetailsComponent.prototype, "data", void 0);
	ComparisonDetailsComponent = __decorate([
	    core_1.Component({
	        selector: 'comparison-details',
	        template: __webpack_require__(56),
	        styles: [__webpack_require__(57)]
	    }), 
	    __metadata('design:paramtypes', [(typeof (_b = typeof comparison_service_1.ComparisonService !== 'undefined' && comparison_service_1.ComparisonService) === 'function' && _b) || Object, (typeof (_c = typeof comparison_data_service_1.ComparisonDataService !== 'undefined' && comparison_data_service_1.ComparisonDataService) === 'function' && _c) || Object, (typeof (_d = typeof comparison_config_service_1.ComparisonConfigService !== 'undefined' && comparison_config_service_1.ComparisonConfigService) === 'function' && _d) || Object, (typeof (_e = typeof comparison_citation_service_1.ComparisonCitationService !== 'undefined' && comparison_citation_service_1.ComparisonCitationService) === 'function' && _e) || Object])
	], ComparisonDetailsComponent);
	exports.ComparisonDetailsComponent = ComparisonDetailsComponent;
	var _a, _b, _c, _d, _e;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(32));
	__export(__webpack_require__(37));
	__export(__webpack_require__(38));
	__export(__webpack_require__(39));
	__export(__webpack_require__(40));
	__export(__webpack_require__(43));
	__export(__webpack_require__(41));
	__export(__webpack_require__(44));
	__export(__webpack_require__(45));
	__export(__webpack_require__(46));
	__export(__webpack_require__(47));
	__export(__webpack_require__(48));
	__export(__webpack_require__(49));
	__export(__webpack_require__(50));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	const index_1 = __webpack_require__(31);
	const util_1 = __webpack_require__(33);
	class Data {
	    constructor(http, tag = "", descr = "", url = "", properties = {}, rating = new index_1.RatingSet({})) {
	        this.http = http;
	        this.tag = tag;
	        this.descr = descr;
	        this.url = url;
	        this.properties = properties;
	        this.rating = rating;
	        this.repoLabels = {};
	    }
	    getProperty(name) {
	        switch (name) {
	            case "tag":
	                return new index_1.Property(this.tag, this.tag);
	            case "descr":
	                return new index_1.Property(this.descr, this.descr);
	            case "url":
	                return new index_1.Property(this.url, this.url);
	            case "Rating":
	                return new index_1.Property(this.getRating() + "", this.getRating() + "");
	            default:
	                return this.properties[name] ? this.properties[name] : new index_1.Property();
	        }
	    }
	    getRepoLabels(td, change) {
	        if (util_1.isNullOrUndefined(this.properties["Repo"]) || util_1.isNullOrUndefined(this.properties["Repo"].list[0])) {
	            return new index_1.Property();
	        }
	        if (!util_1.isNullOrUndefined(this.properties[td.tag])) {
	            return this.properties[td.tag];
	        }
	        const repoUrl = this.properties["Repo"].list[0].content;
	        const url = this.repoQueryBuildUrl(repoUrl);
	        if (url === "") {
	            return new index_1.Property();
	        }
	        this.http.get(url).toPromise().then(res => {
	            const d = {};
	            const commitDate = new Date(res.json()[0].commit.author.date);
	            let child = "The last commit is ";
	            const cd = moment(commitDate);
	            const now = moment();
	            const dateStrings = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
	            for (const s of dateStrings) {
	                const diff = Math.abs(now.diff(cd, s));
	                if (diff !== 0) {
	                    child += diff;
	                    // append unit in singular or plural
	                    child += " " + (diff === 1 ? s.substr(0, s.length - 1) : s);
	                    break;
	                }
	            }
	            child += " old";
	            d.htmlChilds = child;
	            for (const value in td.values) {
	                if (util_1.isNullOrUndefined(td.values[value]["min-age"])) {
	                    continue;
	                }
	                const min = td.values[value]["min-age"];
	                const minUnit = td.values[value]["min-age-unit"];
	                const minDiff = Math.abs(now.diff(cd, minUnit));
	                const max = td.values[value]["max-age"];
	                const maxUnit = td.values[value]["max-age-unit"];
	                const maxDiff = Math.abs(now.diff(cd, maxUnit));
	                // min === -1 => no limit
	                // same for max
	                let property;
	                for (const prop in this.properties) {
	                    if (prop === td.tag) {
	                        property = this.properties[prop];
	                        break;
	                    }
	                }
	                if (util_1.isNullOrUndefined(property)) {
	                    property = new index_1.Property();
	                }
	                if ((min === -1 || min <= minDiff) && (max === -1 || max > maxDiff)) {
	                    d.content = value;
	                    for (const item of property.list) {
	                        if (item.content === d.content) {
	                            property.list.splice(property.list.indexOf(item), 1);
	                        }
	                    }
	                    property.list.push(d);
	                    property.plain += " " + (cd.unix() - now.unix());
	                    property.plain = property.plain.trim();
	                }
	                this.properties[td.tag] = property;
	            }
	            change.markForCheck();
	        });
	        return new index_1.Property();
	    }
	    repoQueryBuildUrl(repoUrl) {
	        let url;
	        if (/https?:\/\/github\.com.*/.test(repoUrl)) {
	            url = repoUrl.replace(/https?:\/\/github.com/, "https://api.github.com/repos");
	            url += url.endsWith("/") ? "commits" : "/commits";
	        }
	        return url;
	    }
	    getPropertyTags(name) {
	        let tagList = new Array();
	        let p = this.getProperty(name);
	        p.list.forEach(item => {
	            tagList.push(item.content);
	        });
	        return tagList;
	    }
	    getPropertyListItems(name) {
	        return this.getProperty(name).list;
	    }
	    getRating() {
	        return this.rating.getAverage();
	    }
	    getRatings() {
	        return this.rating.getRatings();
	    }
	}
	exports.Data = Data;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = ({"ENV":"production"}).NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(35);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(36);
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(34)))

/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";
	class LabelCls {
	    constructor(label_success = Array(), label_warning = Array(), label_danger = Array(), label_default = Array(), label_info = Array(), label_primary = Array()) {
	        this.label_success = label_success;
	        this.label_warning = label_warning;
	        this.label_danger = label_danger;
	        this.label_default = label_default;
	        this.label_info = label_info;
	        this.label_primary = label_primary;
	    }
	    getCls(item) {
	        if (this.label_success.some(it => it.name == item)) {
	            return "label-success";
	        }
	        if (this.label_warning.some(it => it.name == item)) {
	            return "label-warning";
	        }
	        if (this.label_danger.some(it => it.name == item)) {
	            return "label-danger";
	        }
	        if (this.label_default.some(it => it.name == item)) {
	            return "label-default";
	        }
	        if (this.label_info.some(it => it.name == item)) {
	            return "label-info";
	        }
	        if (this.label_primary.some(it => it.name == item)) {
	            return "label-primary";
	        }
	        return "";
	    }
	}
	exports.LabelCls = LabelCls;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	"use strict";
	class ListItem {
	    constructor(content = "", plainChilds = "", converter) {
	        this.content = content;
	        this.plainChilds = plainChilds;
	        this.converter = converter;
	        this.htmlChilds = "";
	        this.latexChilds = "";
	        this.convertChilds();
	    }
	    convertChilds() {
	        if (this.plainChilds != "") {
	            this.htmlChilds = this.converter.makeHtml(this.plainChilds.replace(/^[\s]{3}/gm, ""));
	            if (this.htmlChilds) {
	                this.latexChilds = this.htmlChilds.replace(/[\s]{2}/gm, " ");
	                this.latexChilds = this.latexChilds.replace(/[\s]/gm, " ");
	            }
	        }
	    }
	    getLabel() {
	        return this.content + this.htmlChilds;
	    }
	}
	exports.ListItem = ListItem;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

	"use strict";
	class Property {
	    constructor(plain = "", text = "", list = new Array()) {
	        this.plain = plain;
	        this.text = text;
	        this.list = list;
	    }
	}
	exports.Property = Property;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	const type_1 = __webpack_require__(41);
	class TableData {
	    constructor(name = "", tag = "", url = "", style = "", display = false, type = new type_1.Type(), values = {}, sort = 0, repo = false, order = 'asc') {
	        this.name = name;
	        this.tag = tag;
	        this.url = url;
	        this.style = style;
	        this.display = display;
	        this.type = type;
	        this.values = values;
	        this.sort = sort;
	        this.repo = repo;
	        this.order = order;
	    }
	}
	exports.TableData = TableData;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	const labelcls_1 = __webpack_require__(37);
	const color_dictionary_1 = __webpack_require__(42);
	class Type {
	    constructor(tag = "", cls = "", labelCls = new labelcls_1.LabelCls(), colors = new color_dictionary_1.ColorDictionary()) {
	        this.tag = tag;
	        this.cls = cls;
	        this.labelCls = labelCls;
	        this.colors = colors;
	    }
	    getCls(item) {
	        let labelClsString = this.labelCls.getCls(item);
	        if (this.cls == "" && labelClsString == "" && this.colors[item] === "") {
	            return "label label-default";
	        }
	        else if (this.cls == "" && labelClsString == "") {
	            return "label";
	        }
	        else if (labelClsString != "") {
	            return "label " + labelClsString;
	        }
	        else {
	            //quick fix for old implementations
	            return this.cls != "label" ? this.cls : this.cls + "label-default";
	        }
	    }
	}
	exports.Type = Type;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	"use strict";
	class ColorDictionary {
	    constructor() {
	        this.colorDict = {};
	    }
	    setColor(label, color) {
	        this.colorDict[label] = color;
	    }
	    getColor(label) {
	        if (this.colorDict[label]) {
	            return this.colorDict[label];
	        }
	        else {
	            return "";
	        }
	    }
	    isEmpty() {
	        return Object.keys(this.colorDict).length === 0;
	    }
	}
	exports.ColorDictionary = ColorDictionary;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	const index_1 = __webpack_require__(31);
	const color_dictionary_1 = __webpack_require__(42);
	const util_1 = __webpack_require__(33);
	class TableDataSet {
	    constructor(jsonObj) {
	        this.tableDataSet = {};
	        this.set = [];
	        this.ready = false;
	        jsonObj.forEach(obj => {
	            let lcls = new index_1.LabelCls();
	            let values = {};
	            if (obj.type.values) {
	                obj.type.values.forEach(val => {
	                    let value = new index_1.Value(val.name, val.description);
	                    if (util_1.isNullOrUndefined(val["min-age"])) {
	                        values[val.name] = { tag: val.description, weight: val.weight };
	                    }
	                    else {
	                        const v = {};
	                        v["min-age"] = val["min-age"];
	                        v["min-age-unit"] = val["min-age-unit"];
	                        v["max-age"] = val["max-age"];
	                        v["max-age-unit"] = val["max-age-unit"];
	                        v["description"] = val.description;
	                        values[val.name] = v;
	                    }
	                    switch (val.class) {
	                        case "label-success":
	                            lcls.label_success.push(value);
	                            break;
	                        case "label-warning":
	                            lcls.label_warning.push(value);
	                            break;
	                        case "label-danger":
	                            lcls.label_danger.push(value);
	                            break;
	                        case "label-default":
	                            lcls.label_default.push(value);
	                            break;
	                        case "label-info":
	                            lcls.label_info.push(value);
	                            break;
	                        case "label-primary":
	                            lcls.label_primary.push(value);
	                            break;
	                    }
	                });
	            }
	            let colors = new color_dictionary_1.ColorDictionary();
	            if (obj.type && obj.type.values) {
	                for (const v of obj.type.values) {
	                    if (v.color) {
	                        colors.setColor(v.name, v.color);
	                    }
	                }
	            }
	            let type = new index_1.Type(obj.type.tag, obj.type.class, lcls, colors);
	            let order = obj.order;
	            if (!util_1.isNullOrUndefined(order)) {
	                order = order.toLowerCase();
	            }
	            let td = new index_1.TableData(obj.name, obj.tag, obj.urlTag, obj.style, obj.display, type, values, obj.sort, obj.repo, order);
	            this.tableDataSet[obj.tag] = td;
	        });
	        this.ready = true;
	    }
	    getTableData(tag) {
	        return this.tableDataSet[tag] ? this.tableDataSet[tag] : new index_1.TableData();
	    }
	    getTableDataArray() {
	        let size = 0;
	        for (let key in this.tableDataSet) {
	            if (!this.tableDataSet.hasOwnProperty(key))
	                continue;
	            size++;
	        }
	        if (this.set.length != size) {
	            for (let key in this.tableDataSet) {
	                if (!this.tableDataSet.hasOwnProperty(key))
	                    continue;
	                this.set.push(this.tableDataSet[key]);
	            }
	        }
	        return this.set;
	    }
	}
	exports.TableDataSet = TableDataSet;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	"use strict";
	class Value {
	    constructor(name = "", description = "", value = "", label = "") {
	        this.name = name;
	        this.description = description;
	        this.value = value;
	        this.label = label;
	    }
	}
	exports.Value = Value;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	"use strict";
	class Criteria {
	    constructor(name = "", tag = "", description = "", placeholder = "", and_search = true, values = new Array(), range_search = false) {
	        this.name = name;
	        this.tag = tag;
	        this.description = description;
	        this.placeholder = placeholder;
	        this.and_search = and_search;
	        this.values = values;
	        this.range_search = range_search;
	    }
	    getSearchIndicator() {
	        if (this.and_search) {
	            return "match all";
	        }
	        if (this.range_search) {
	            return "match range";
	        }
	        return "match one";
	    }
	}
	exports.Criteria = Criteria;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	const index_1 = __webpack_require__(31);
	class CriteriaSet {
	    constructor(jsonObj) {
	        this.criteriaSet = {};
	        jsonObj.forEach(crit => {
	            let criteria = new index_1.Criteria();
	            criteria.name = crit.name ? crit.name : crit.tag;
	            criteria.tag = crit.tag;
	            criteria.description = crit.description ? crit.description : "";
	            criteria.and_search = typeof crit.and_search !== typeof undefined ? crit.and_search : true;
	            criteria.range_search = typeof crit.range_search !== typeof undefined ? crit.range_search : false;
	            if (!criteria.range_search) {
	                crit.values.forEach(val => {
	                    let value = new index_1.Value();
	                    value.name = val.name ? val.name : "undefined value";
	                    value.value = val.name ? val.name : "undefined value";
	                    value.label = val.name ? val.name : "undefined value";
	                    value.description = val.description ? val.description : "";
	                    criteria.values.push(value);
	                });
	            }
	            criteria.placeholder = crit.placeholder ? crit.placeholder : "";
	            this.criteriaSet[crit.tag] = criteria;
	        });
	    }
	    getCriteriaArray() {
	        let set = new Array();
	        for (let key in this.criteriaSet) {
	            if (!this.criteriaSet.hasOwnProperty(key))
	                continue;
	            set.push(this.criteriaSet[key]);
	        }
	        return set;
	    }
	    getCriteria(tag) {
	        return this.criteriaSet[tag] ? this.criteriaSet[tag] : new index_1.Criteria();
	    }
	}
	exports.CriteriaSet = CriteriaSet;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	const criteria_1 = __webpack_require__(45);
	class CriteriaSelection {
	    constructor(values = new Array(), criteria = new criteria_1.Criteria()) {
	        this.values = values;
	        this.criteria = criteria;
	    }
	}
	exports.CriteriaSelection = CriteriaSelection;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	"use strict";
	class Details {
	    constructor(jsonObj) {
	        this.header = jsonObj.header ? jsonObj.header : "tag";
	        this.headerLabel = jsonObj['header-label'] ? jsonObj['header-label'] : "undefined";
	        this.headerUrl = jsonObj['header-url'] ? jsonObj['header-url'] : "url";
	        this.bodyMainTitle = jsonObj['body-main-title'] ? jsonObj['body-main-title'] : "Description";
	        this.body = jsonObj.body ? jsonObj.body : "Description";
	        this.bodyAttachmentTags = jsonObj['body-attachment-tags'] ? jsonObj['body-attachment-tags'] : new Array();
	        this.tooltipAsText = jsonObj.tooltipAsText != null ? jsonObj.tooltipAsText : true;
	    }
	}
	exports.Details = Details;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	const details_1 = __webpack_require__(48);
	class Comparison {
	    constructor(jsonObj) {
	        this.title = jsonObj.title ? jsonObj.title : "Ultimate-Comparison";
	        this.subtitle = jsonObj.subtitle ? jsonObj.subtitle : "Ultimate comparison framework";
	        this.selecttitle = jsonObj.selecttitle ? jsonObj.selecttitle : "Criteria";
	        this.tabletitle = jsonObj.tabletitle ? jsonObj.tabletitle : "Comparison of ...";
	        this.repository = jsonObj.repository ? jsonObj.repository : "https://github.com/ultimate-comparisons/ultimate-comparison-BASE.git";
	        this.details = jsonObj.details ? new details_1.Details(jsonObj.details) : new details_1.Details({});
	        this.displaytemplate = jsonObj.displaytemplate ? jsonObj.displaytemplate : false;
	        this.displayall = jsonObj.displayall ? jsonObj.displayall : false;
	    }
	}
	exports.Comparison = Comparison;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

	"use strict";
	class RatingSet {
	    constructor(jsonObj) {
	        this.set = new Array();
	        this.average = 0;
	        this.sum = 0;
	        if (jsonObj.hasOwnProperty("childs")) {
	            jsonObj.childs[0][0].forEach(item => {
	                let starsString = /\[(\d*)\]/gm.exec(item.content)[1];
	                let stars = parseInt(starsString);
	                let text = /(?:\[\d*\])((?:.|\n)*)/gm.exec(item.content)[1];
	                let rating = new Rating(stars, text);
	                this.set.push(rating);
	                this.sum += stars;
	            });
	        }
	        this.average = this.set.length > 0 ? this.sum / this.set.length : this.sum;
	    }
	    getRatings() {
	        return this.set;
	    }
	    getAverage() {
	        return this.average;
	    }
	}
	exports.RatingSet = RatingSet;
	class Rating {
	    constructor(stars = 0, text) {
	        this.stars = stars;
	        this.text = text;
	    }
	}
	exports.Rating = Rating;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const http_1 = __webpack_require__(29);
	const platform_browser_1 = __webpack_require__(21);
	const index_1 = __webpack_require__(31);
	const comparison_data_service_1 = __webpack_require__(52);
	const comparison_service_1 = __webpack_require__(53);
	let ComparisonConfigService = class ComparisonConfigService {
	    constructor(title, http, comparisonDataService, comparisonService) {
	        this.title = title;
	        this.http = http;
	        this.comparisonDataService = comparisonDataService;
	        this.comparisonService = comparisonService;
	        this.displayAllName = "All";
	    }
	    loadTableData(cd) {
	        this.http.request('comparison-configuration/table.json')
	            .subscribe(res => {
	            this.tableDataSet = new index_1.TableDataSet(res.json());
	            cd.markForCheck();
	            this.comparisonDataService.loadData(this.tableDataSet, cd);
	        });
	    }
	    loadCriteria(cd) {
	        this.http.request('comparison-configuration/criteria.json')
	            .subscribe(res => {
	            this.criteriaSet = new index_1.CriteriaSet(res.json());
	            cd.markForCheck();
	        });
	    }
	    loadComparison(cd) {
	        this.http.request('comparison-configuration/comparison.json')
	            .subscribe(res => {
	            this.comparison = new index_1.Comparison(res.json());
	            this.title.setTitle(this.comparison.title);
	            cd.markForCheck();
	        });
	    }
	    loadDescription(cd) {
	        this.http.request('comparison-configuration/description.md')
	            .subscribe(res => {
	            this.description = this.comparisonService.converter.makeHtml(res.text());
	            cd.markForCheck();
	        });
	    }
	    getBodyAttachmentTags() {
	        if (!this.comparison)
	            return new Array();
	        let tags = this.comparison.details.bodyAttachmentTags;
	        if (tags.length == 0)
	            tags = this.comparisonDataService.getDefaultAttachmentTags();
	        return tags;
	    }
	    displayAllChange(toggle, self) {
	        if (this.tableDataSet) {
	            this.tableDataSet.getTableDataArray().forEach((item) => {
	                item.display = toggle;
	            });
	            this.displayAllName = toggle ? "None" : "All";
	            self.change();
	        }
	    }
	    displayChange(column, self) {
	        column.display = !column.display;
	        self.change();
	    }
	};
	ComparisonConfigService = __decorate([
	    core_1.Injectable(), 
	    __metadata('design:paramtypes', [(typeof (_a = typeof platform_browser_1.Title !== 'undefined' && platform_browser_1.Title) === 'function' && _a) || Object, (typeof (_b = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _b) || Object, (typeof (_c = typeof comparison_data_service_1.ComparisonDataService !== 'undefined' && comparison_data_service_1.ComparisonDataService) === 'function' && _c) || Object, (typeof (_d = typeof comparison_service_1.ComparisonService !== 'undefined' && comparison_service_1.ComparisonService) === 'function' && _d) || Object])
	], ComparisonConfigService);
	exports.ComparisonConfigService = ComparisonConfigService;
	var _a, _b, _c, _d;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const http_1 = __webpack_require__(29);
	const index_1 = __webpack_require__(31);
	const comparison_service_1 = __webpack_require__(53);
	let ComparisonDataService = class ComparisonDataService {
	    constructor(http, comparisonService) {
	        this.http = http;
	        this.comparisonService = comparisonService;
	        this.data = new Array();
	        this.tags = {};
	    }
	    loadData(tableDataSet, cd) {
	        this.http.request('app/components/comparison/data/data.json')
	            .subscribe(res => {
	            res.json().forEach(obj => {
	                let data = new index_1.Data(this.http);
	                data.tag = obj.tag;
	                let regArray = /^((?:(?:\w+\s*)(?:-?\s*\w+.)*)+)\s*-?\s*((?:(?:http|ftp|https)(?::\/\/)(?:[\w_-]+(?:(?:\.[\w_-]+)+))|(?:www.))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?)$/gi.exec(data.tag);
	                data.url = regArray ? regArray[2] : "";
	                if (/^(www)/.test(data.url))
	                    data.url = "http://" + data.url;
	                data.tag = regArray ? regArray[1] : data.tag;
	                for (let key in obj) {
	                    if (!obj.hasOwnProperty(key))
	                        continue;
	                    switch (key) {
	                        case "tag":
	                            break;
	                        case "descr":
	                            data.descr = obj[key];
	                            break;
	                        case "Description":
	                            data.properties[key] = new index_1.Property(obj[key].plain);
	                            break;
	                        case "Rating":
	                            data.rating = new index_1.RatingSet(obj[key]);
	                            break;
	                        default:
	                            let p = new index_1.Property();
	                            this.tags[key] = key;
	                            p.plain = obj[key].plain;
	                            if (tableDataSet.getTableData(key).type.tag == "text") {
	                                p.text == obj[key].text;
	                            }
	                            else {
	                                if (typeof obj[key].childs[0][0] != 'string') {
	                                    obj[key].childs[0][0].forEach(item => {
	                                        let content = item.content;
	                                        let plainChilds = item.plainChilds;
	                                        if (item.childs && item.childs.length == 1) {
	                                            plainChilds = item.childs[0].plain;
	                                        }
	                                        let itm = new index_1.ListItem(content, plainChilds, this.comparisonService.converter);
	                                        p.list.push(itm);
	                                    });
	                                }
	                            }
	                            data.properties[key] = p;
	                            break;
	                    }
	                }
	                this.data.push(data);
	            });
	            cd.markForCheck();
	        });
	    }
	    getDefaultAttachmentTags() {
	        let tags = new Array();
	        for (let key in this.tags) {
	            if (!this.tags.hasOwnProperty(key) || key == "tag" || key == "url" || key == "descr" || key == "Rating")
	                continue;
	            tags.push(this.tags[key]);
	        }
	        return tags;
	    }
	    getLength() {
	        return this.data.length;
	    }
	};
	ComparisonDataService = __decorate([
	    core_1.Injectable(), 
	    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof comparison_service_1.ComparisonService !== 'undefined' && comparison_service_1.ComparisonService) === 'function' && _b) || Object])
	], ComparisonDataService);
	exports.ComparisonDataService = ComparisonDataService;
	var _a, _b;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(21);
	const showdown = __webpack_require__(54);
	let ComparisonService = class ComparisonService {
	    constructor(_sanitizer) {
	        this._sanitizer = _sanitizer;
	        this.footnotes = {};
	        this.findex = 0;
	        this.converter = new showdown.Converter();
	    }
	    getFootnotes() {
	        let fnotes = new Array();
	        let ind = 0;
	        for (let key in this.footnotes) {
	            if (!this.footnotes.hasOwnProperty(key))
	                continue;
	            if (this.footnotes[key].count < 1)
	                continue;
	            let item = this.footnotes[key];
	            fnotes.push("\\footnotetext[\\numexpr\\snum+" + ind++ + "]&#123;" + item.value + " \\label&#123;" + item.index + "&#125; &#125;");
	        }
	        return fnotes;
	    }
	};
	ComparisonService = __decorate([
	    core_1.Injectable(), 
	    __metadata('design:paramtypes', [(typeof (_a = typeof platform_browser_1.DomSanitizer !== 'undefined' && platform_browser_1.DomSanitizer) === 'function' && _a) || Object])
	], ComparisonService);
	exports.ComparisonService = ComparisonService;
	var _a;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;/*! showdown 02-06-2017 */
	(function(){
	/**
	 * Created by Tivie on 13-07-2015.
	 */
	
	function getDefaultOpts (simple) {
	  'use strict';
	
	  var defaultOptions = {
	    omitExtraWLInCodeBlocks: {
	      defaultValue: false,
	      describe: 'Omit the default extra whiteline added to code blocks',
	      type: 'boolean'
	    },
	    noHeaderId: {
	      defaultValue: false,
	      describe: 'Turn on/off generated header id',
	      type: 'boolean'
	    },
	    prefixHeaderId: {
	      defaultValue: false,
	      describe: 'Specify a prefix to generated header ids',
	      type: 'string'
	    },
	    ghCompatibleHeaderId: {
	      defaultValue: false,
	      describe: 'Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)',
	      type: 'boolean'
	    },
	    headerLevelStart: {
	      defaultValue: false,
	      describe: 'The header blocks level start',
	      type: 'integer'
	    },
	    parseImgDimensions: {
	      defaultValue: false,
	      describe: 'Turn on/off image dimension parsing',
	      type: 'boolean'
	    },
	    simplifiedAutoLink: {
	      defaultValue: false,
	      describe: 'Turn on/off GFM autolink style',
	      type: 'boolean'
	    },
	    excludeTrailingPunctuationFromURLs: {
	      defaultValue: false,
	      describe: 'Excludes trailing punctuation from links generated with autoLinking',
	      type: 'boolean'
	    },
	    literalMidWordUnderscores: {
	      defaultValue: false,
	      describe: 'Parse midword underscores as literal underscores',
	      type: 'boolean'
	    },
	    literalMidWordAsterisks: {
	      defaultValue: false,
	      describe: 'Parse midword asterisks as literal asterisks',
	      type: 'boolean'
	    },
	    strikethrough: {
	      defaultValue: false,
	      describe: 'Turn on/off strikethrough support',
	      type: 'boolean'
	    },
	    tables: {
	      defaultValue: false,
	      describe: 'Turn on/off tables support',
	      type: 'boolean'
	    },
	    tablesHeaderId: {
	      defaultValue: false,
	      describe: 'Add an id to table headers',
	      type: 'boolean'
	    },
	    ghCodeBlocks: {
	      defaultValue: true,
	      describe: 'Turn on/off GFM fenced code blocks support',
	      type: 'boolean'
	    },
	    tasklists: {
	      defaultValue: false,
	      describe: 'Turn on/off GFM tasklist support',
	      type: 'boolean'
	    },
	    smoothLivePreview: {
	      defaultValue: false,
	      describe: 'Prevents weird effects in live previews due to incomplete input',
	      type: 'boolean'
	    },
	    smartIndentationFix: {
	      defaultValue: false,
	      description: 'Tries to smartly fix indentation in es6 strings',
	      type: 'boolean'
	    },
	    disableForced4SpacesIndentedSublists: {
	      defaultValue: false,
	      description: 'Disables the requirement of indenting nested sublists by 4 spaces',
	      type: 'boolean'
	    },
	    simpleLineBreaks: {
	      defaultValue: false,
	      description: 'Parses simple line breaks as <br> (GFM Style)',
	      type: 'boolean'
	    },
	    requireSpaceBeforeHeadingText: {
	      defaultValue: false,
	      description: 'Makes adding a space between `#` and the header text mandatory (GFM Style)',
	      type: 'boolean'
	    },
	    ghMentions: {
	      defaultValue: false,
	      description: 'Enables github @mentions',
	      type: 'boolean'
	    },
	    ghMentionsLink: {
	      defaultValue: 'https://github.com/{u}',
	      description: 'Changes the link generated by @mentions. Only applies if ghMentions option is enabled.',
	      type: 'string'
	    },
	    encodeEmails: {
	      defaultValue: true,
	      description: 'Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities',
	      type: 'boolean'
	    },
	    openLinksInNewWindow: {
	      defaultValue: false,
	      description: 'Open all links in new windows',
	      type: 'boolean'
	    }
	  };
	  if (simple === false) {
	    return JSON.parse(JSON.stringify(defaultOptions));
	  }
	  var ret = {};
	  for (var opt in defaultOptions) {
	    if (defaultOptions.hasOwnProperty(opt)) {
	      ret[opt] = defaultOptions[opt].defaultValue;
	    }
	  }
	  return ret;
	}
	
	function allOptionsOn () {
	  'use strict';
	  var options = getDefaultOpts(true),
	      ret = {};
	  for (var opt in options) {
	    if (options.hasOwnProperty(opt)) {
	      ret[opt] = true;
	    }
	  }
	  return ret;
	}
	
	/**
	 * Created by Tivie on 06-01-2015.
	 */
	
	// Private properties
	var showdown = {},
	    parsers = {},
	    extensions = {},
	    globalOptions = getDefaultOpts(true),
	    setFlavor = 'vanilla',
	    flavor = {
	      github: {
	        omitExtraWLInCodeBlocks:              true,
	        simplifiedAutoLink:                   true,
	        excludeTrailingPunctuationFromURLs:   true,
	        literalMidWordUnderscores:            true,
	        strikethrough:                        true,
	        tables:                               true,
	        tablesHeaderId:                       true,
	        ghCodeBlocks:                         true,
	        tasklists:                            true,
	        disableForced4SpacesIndentedSublists: true,
	        simpleLineBreaks:                     true,
	        requireSpaceBeforeHeadingText:        true,
	        ghCompatibleHeaderId:                 true,
	        ghMentions:                           true
	      },
	      original: {
	        noHeaderId:                           true,
	        ghCodeBlocks:                         false
	      },
	      ghost: {
	        omitExtraWLInCodeBlocks:              true,
	        parseImgDimensions:                   true,
	        simplifiedAutoLink:                   true,
	        excludeTrailingPunctuationFromURLs:   true,
	        literalMidWordUnderscores:            true,
	        strikethrough:                        true,
	        tables:                               true,
	        tablesHeaderId:                       true,
	        ghCodeBlocks:                         true,
	        tasklists:                            true,
	        smoothLivePreview:                    true,
	        simpleLineBreaks:                     true,
	        requireSpaceBeforeHeadingText:        true,
	        ghMentions:                           false,
	        encodeEmails:                         true
	      },
	      vanilla: getDefaultOpts(true),
	      allOn: allOptionsOn()
	    };
	
	/**
	 * helper namespace
	 * @type {{}}
	 */
	showdown.helper = {};
	
	/**
	 * TODO LEGACY SUPPORT CODE
	 * @type {{}}
	 */
	showdown.extensions = {};
	
	/**
	 * Set a global option
	 * @static
	 * @param {string} key
	 * @param {*} value
	 * @returns {showdown}
	 */
	showdown.setOption = function (key, value) {
	  'use strict';
	  globalOptions[key] = value;
	  return this;
	};
	
	/**
	 * Get a global option
	 * @static
	 * @param {string} key
	 * @returns {*}
	 */
	showdown.getOption = function (key) {
	  'use strict';
	  return globalOptions[key];
	};
	
	/**
	 * Get the global options
	 * @static
	 * @returns {{}}
	 */
	showdown.getOptions = function () {
	  'use strict';
	  return globalOptions;
	};
	
	/**
	 * Reset global options to the default values
	 * @static
	 */
	showdown.resetOptions = function () {
	  'use strict';
	  globalOptions = getDefaultOpts(true);
	};
	
	/**
	 * Set the flavor showdown should use as default
	 * @param {string} name
	 */
	showdown.setFlavor = function (name) {
	  'use strict';
	  if (!flavor.hasOwnProperty(name)) {
	    throw Error(name + ' flavor was not found');
	  }
	  showdown.resetOptions();
	  var preset = flavor[name];
	  setFlavor = name;
	  for (var option in preset) {
	    if (preset.hasOwnProperty(option)) {
	      globalOptions[option] = preset[option];
	    }
	  }
	};
	
	/**
	 * Get the currently set flavor
	 * @returns {string}
	 */
	showdown.getFlavor = function () {
	  'use strict';
	  return setFlavor;
	};
	
	/**
	 * Get the options of a specified flavor. Returns undefined if the flavor was not found
	 * @param {string} name Name of the flavor
	 * @returns {{}|undefined}
	 */
	showdown.getFlavorOptions = function (name) {
	  'use strict';
	  if (flavor.hasOwnProperty(name)) {
	    return flavor[name];
	  }
	};
	
	/**
	 * Get the default options
	 * @static
	 * @param {boolean} [simple=true]
	 * @returns {{}}
	 */
	showdown.getDefaultOptions = function (simple) {
	  'use strict';
	  return getDefaultOpts(simple);
	};
	
	/**
	 * Get or set a subParser
	 *
	 * subParser(name)       - Get a registered subParser
	 * subParser(name, func) - Register a subParser
	 * @static
	 * @param {string} name
	 * @param {function} [func]
	 * @returns {*}
	 */
	showdown.subParser = function (name, func) {
	  'use strict';
	  if (showdown.helper.isString(name)) {
	    if (typeof func !== 'undefined') {
	      parsers[name] = func;
	    } else {
	      if (parsers.hasOwnProperty(name)) {
	        return parsers[name];
	      } else {
	        throw Error('SubParser named ' + name + ' not registered!');
	      }
	    }
	  }
	};
	
	/**
	 * Gets or registers an extension
	 * @static
	 * @param {string} name
	 * @param {object|function=} ext
	 * @returns {*}
	 */
	showdown.extension = function (name, ext) {
	  'use strict';
	
	  if (!showdown.helper.isString(name)) {
	    throw Error('Extension \'name\' must be a string');
	  }
	
	  name = showdown.helper.stdExtName(name);
	
	  // Getter
	  if (showdown.helper.isUndefined(ext)) {
	    if (!extensions.hasOwnProperty(name)) {
	      throw Error('Extension named ' + name + ' is not registered!');
	    }
	    return extensions[name];
	
	    // Setter
	  } else {
	    // Expand extension if it's wrapped in a function
	    if (typeof ext === 'function') {
	      ext = ext();
	    }
	
	    // Ensure extension is an array
	    if (!showdown.helper.isArray(ext)) {
	      ext = [ext];
	    }
	
	    var validExtension = validate(ext, name);
	
	    if (validExtension.valid) {
	      extensions[name] = ext;
	    } else {
	      throw Error(validExtension.error);
	    }
	  }
	};
	
	/**
	 * Gets all extensions registered
	 * @returns {{}}
	 */
	showdown.getAllExtensions = function () {
	  'use strict';
	  return extensions;
	};
	
	/**
	 * Remove an extension
	 * @param {string} name
	 */
	showdown.removeExtension = function (name) {
	  'use strict';
	  delete extensions[name];
	};
	
	/**
	 * Removes all extensions
	 */
	showdown.resetExtensions = function () {
	  'use strict';
	  extensions = {};
	};
	
	/**
	 * Validate extension
	 * @param {array} extension
	 * @param {string} name
	 * @returns {{valid: boolean, error: string}}
	 */
	function validate (extension, name) {
	  'use strict';
	
	  var errMsg = (name) ? 'Error in ' + name + ' extension->' : 'Error in unnamed extension',
	      ret = {
	        valid: true,
	        error: ''
	      };
	
	  if (!showdown.helper.isArray(extension)) {
	    extension = [extension];
	  }
	
	  for (var i = 0; i < extension.length; ++i) {
	    var baseMsg = errMsg + ' sub-extension ' + i + ': ',
	        ext = extension[i];
	    if (typeof ext !== 'object') {
	      ret.valid = false;
	      ret.error = baseMsg + 'must be an object, but ' + typeof ext + ' given';
	      return ret;
	    }
	
	    if (!showdown.helper.isString(ext.type)) {
	      ret.valid = false;
	      ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + ' given';
	      return ret;
	    }
	
	    var type = ext.type = ext.type.toLowerCase();
	
	    // normalize extension type
	    if (type === 'language') {
	      type = ext.type = 'lang';
	    }
	
	    if (type === 'html') {
	      type = ext.type = 'output';
	    }
	
	    if (type !== 'lang' && type !== 'output' && type !== 'listener') {
	      ret.valid = false;
	      ret.error = baseMsg + 'type ' + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
	      return ret;
	    }
	
	    if (type === 'listener') {
	      if (showdown.helper.isUndefined(ext.listeners)) {
	        ret.valid = false;
	        ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
	        return ret;
	      }
	    } else {
	      if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
	        ret.valid = false;
	        ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
	        return ret;
	      }
	    }
	
	    if (ext.listeners) {
	      if (typeof ext.listeners !== 'object') {
	        ret.valid = false;
	        ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + ' given';
	        return ret;
	      }
	      for (var ln in ext.listeners) {
	        if (ext.listeners.hasOwnProperty(ln)) {
	          if (typeof ext.listeners[ln] !== 'function') {
	            ret.valid = false;
	            ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln +
	              ' must be a function but ' + typeof ext.listeners[ln] + ' given';
	            return ret;
	          }
	        }
	      }
	    }
	
	    if (ext.filter) {
	      if (typeof ext.filter !== 'function') {
	        ret.valid = false;
	        ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + ' given';
	        return ret;
	      }
	    } else if (ext.regex) {
	      if (showdown.helper.isString(ext.regex)) {
	        ext.regex = new RegExp(ext.regex, 'g');
	      }
	      if (!(ext.regex instanceof RegExp)) {
	        ret.valid = false;
	        ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + ' given';
	        return ret;
	      }
	      if (showdown.helper.isUndefined(ext.replace)) {
	        ret.valid = false;
	        ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
	        return ret;
	      }
	    }
	  }
	  return ret;
	}
	
	/**
	 * Validate extension
	 * @param {object} ext
	 * @returns {boolean}
	 */
	showdown.validateExtension = function (ext) {
	  'use strict';
	
	  var validateExtension = validate(ext, null);
	  if (!validateExtension.valid) {
	    console.warn(validateExtension.error);
	    return false;
	  }
	  return true;
	};
	
	/**
	 * showdownjs helper functions
	 */
	
	if (!showdown.hasOwnProperty('helper')) {
	  showdown.helper = {};
	}
	
	/**
	 * Check if var is string
	 * @static
	 * @param {string} a
	 * @returns {boolean}
	 */
	showdown.helper.isString = function (a) {
	  'use strict';
	  return (typeof a === 'string' || a instanceof String);
	};
	
	/**
	 * Check if var is a function
	 * @static
	 * @param {*} a
	 * @returns {boolean}
	 */
	showdown.helper.isFunction = function (a) {
	  'use strict';
	  var getType = {};
	  return a && getType.toString.call(a) === '[object Function]';
	};
	
	/**
	 * isArray helper function
	 * @static
	 * @param {*} a
	 * @returns {boolean}
	 */
	showdown.helper.isArray = function (a) {
	  'use strict';
	  return a.constructor === Array;
	};
	
	/**
	 * Check if value is undefined
	 * @static
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 */
	showdown.helper.isUndefined = function (value) {
	  'use strict';
	  return typeof value === 'undefined';
	};
	
	/**
	 * ForEach helper function
	 * Iterates over Arrays and Objects (own properties only)
	 * @static
	 * @param {*} obj
	 * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
	 */
	showdown.helper.forEach = function (obj, callback) {
	  'use strict';
	  // check if obj is defined
	  if (showdown.helper.isUndefined(obj)) {
	    throw new Error('obj param is required');
	  }
	
	  if (showdown.helper.isUndefined(callback)) {
	    throw new Error('callback param is required');
	  }
	
	  if (!showdown.helper.isFunction(callback)) {
	    throw new Error('callback param must be a function/closure');
	  }
	
	  if (typeof obj.forEach === 'function') {
	    obj.forEach(callback);
	  } else if (showdown.helper.isArray(obj)) {
	    for (var i = 0; i < obj.length; i++) {
	      callback(obj[i], i, obj);
	    }
	  } else if (typeof (obj) === 'object') {
	    for (var prop in obj) {
	      if (obj.hasOwnProperty(prop)) {
	        callback(obj[prop], prop, obj);
	      }
	    }
	  } else {
	    throw new Error('obj does not seem to be an array or an iterable object');
	  }
	};
	
	/**
	 * Standardidize extension name
	 * @static
	 * @param {string} s extension name
	 * @returns {string}
	 */
	showdown.helper.stdExtName = function (s) {
	  'use strict';
	  return s.replace(/[_?*+\/\\.^-]/g, '').replace(/\s/g, '').toLowerCase();
	};
	
	function escapeCharactersCallback (wholeMatch, m1) {
	  'use strict';
	  var charCodeToEscape = m1.charCodeAt(0);
	  return '¨E' + charCodeToEscape + 'E';
	}
	
	/**
	 * Callback used to escape characters when passing through String.replace
	 * @static
	 * @param {string} wholeMatch
	 * @param {string} m1
	 * @returns {string}
	 */
	showdown.helper.escapeCharactersCallback = escapeCharactersCallback;
	
	/**
	 * Escape characters in a string
	 * @static
	 * @param {string} text
	 * @param {string} charsToEscape
	 * @param {boolean} afterBackslash
	 * @returns {XML|string|void|*}
	 */
	showdown.helper.escapeCharacters = function (text, charsToEscape, afterBackslash) {
	  'use strict';
	  // First we have to escape the escape characters so that
	  // we can build a character class out of them
	  var regexString = '([' + charsToEscape.replace(/([\[\]\\])/g, '\\$1') + '])';
	
	  if (afterBackslash) {
	    regexString = '\\\\' + regexString;
	  }
	
	  var regex = new RegExp(regexString, 'g');
	  text = text.replace(regex, escapeCharactersCallback);
	
	  return text;
	};
	
	var rgxFindMatchPos = function (str, left, right, flags) {
	  'use strict';
	  var f = flags || '',
	      g = f.indexOf('g') > -1,
	      x = new RegExp(left + '|' + right, 'g' + f.replace(/g/g, '')),
	      l = new RegExp(left, f.replace(/g/g, '')),
	      pos = [],
	      t, s, m, start, end;
	
	  do {
	    t = 0;
	    while ((m = x.exec(str))) {
	      if (l.test(m[0])) {
	        if (!(t++)) {
	          s = x.lastIndex;
	          start = s - m[0].length;
	        }
	      } else if (t) {
	        if (!--t) {
	          end = m.index + m[0].length;
	          var obj = {
	            left: {start: start, end: s},
	            match: {start: s, end: m.index},
	            right: {start: m.index, end: end},
	            wholeMatch: {start: start, end: end}
	          };
	          pos.push(obj);
	          if (!g) {
	            return pos;
	          }
	        }
	      }
	    }
	  } while (t && (x.lastIndex = s));
	
	  return pos;
	};
	
	/**
	 * matchRecursiveRegExp
	 *
	 * (c) 2007 Steven Levithan <stevenlevithan.com>
	 * MIT License
	 *
	 * Accepts a string to search, a left and right format delimiter
	 * as regex patterns, and optional regex flags. Returns an array
	 * of matches, allowing nested instances of left/right delimiters.
	 * Use the "g" flag to return all matches, otherwise only the
	 * first is returned. Be careful to ensure that the left and
	 * right format delimiters produce mutually exclusive matches.
	 * Backreferences are not supported within the right delimiter
	 * due to how it is internally combined with the left delimiter.
	 * When matching strings whose format delimiters are unbalanced
	 * to the left or right, the output is intentionally as a
	 * conventional regex library with recursion support would
	 * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
	 * "<" and ">" as the delimiters (both strings contain a single,
	 * balanced instance of "<x>").
	 *
	 * examples:
	 * matchRecursiveRegExp("test", "\\(", "\\)")
	 * returns: []
	 * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
	 * returns: ["t<<e>><s>", ""]
	 * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
	 * returns: ["test"]
	 */
	showdown.helper.matchRecursiveRegExp = function (str, left, right, flags) {
	  'use strict';
	
	  var matchPos = rgxFindMatchPos (str, left, right, flags),
	      results = [];
	
	  for (var i = 0; i < matchPos.length; ++i) {
	    results.push([
	      str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
	      str.slice(matchPos[i].match.start, matchPos[i].match.end),
	      str.slice(matchPos[i].left.start, matchPos[i].left.end),
	      str.slice(matchPos[i].right.start, matchPos[i].right.end)
	    ]);
	  }
	  return results;
	};
	
	/**
	 *
	 * @param {string} str
	 * @param {string|function} replacement
	 * @param {string} left
	 * @param {string} right
	 * @param {string} flags
	 * @returns {string}
	 */
	showdown.helper.replaceRecursiveRegExp = function (str, replacement, left, right, flags) {
	  'use strict';
	
	  if (!showdown.helper.isFunction(replacement)) {
	    var repStr = replacement;
	    replacement = function () {
	      return repStr;
	    };
	  }
	
	  var matchPos = rgxFindMatchPos(str, left, right, flags),
	      finalStr = str,
	      lng = matchPos.length;
	
	  if (lng > 0) {
	    var bits = [];
	    if (matchPos[0].wholeMatch.start !== 0) {
	      bits.push(str.slice(0, matchPos[0].wholeMatch.start));
	    }
	    for (var i = 0; i < lng; ++i) {
	      bits.push(
	        replacement(
	          str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
	          str.slice(matchPos[i].match.start, matchPos[i].match.end),
	          str.slice(matchPos[i].left.start, matchPos[i].left.end),
	          str.slice(matchPos[i].right.start, matchPos[i].right.end)
	        )
	      );
	      if (i < lng - 1) {
	        bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
	      }
	    }
	    if (matchPos[lng - 1].wholeMatch.end < str.length) {
	      bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
	    }
	    finalStr = bits.join('');
	  }
	  return finalStr;
	};
	
	/**
	 * Returns the index within the passed String object of the first occurrence of the specified regex,
	 * starting the search at fromIndex. Returns -1 if the value is not found.
	 *
	 * @param {string} str string to search
	 * @param {RegExp} regex Regular expression to search
	 * @param {int} [fromIndex = 0] Index to start the search
	 * @returns {Number}
	 * @throws InvalidArgumentError
	 */
	showdown.helper.regexIndexOf = function (str, regex, fromIndex) {
	  'use strict';
	  if (!showdown.helper.isString(str)) {
	    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
	  }
	  if (regex instanceof RegExp === false) {
	    throw 'InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp';
	  }
	  var indexOf = str.substring(fromIndex || 0).search(regex);
	  return (indexOf >= 0) ? (indexOf + (fromIndex || 0)) : indexOf;
	};
	
	/**
	 * Splits the passed string object at the defined index, and returns an array composed of the two substrings
	 * @param {string} str string to split
	 * @param {int} index index to split string at
	 * @returns {[string,string]}
	 * @throws InvalidArgumentError
	 */
	showdown.helper.splitAtIndex = function (str, index) {
	  'use strict';
	  if (!showdown.helper.isString(str)) {
	    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
	  }
	  return [str.substring(0, index), str.substring(index)];
	};
	
	/**
	 * Obfuscate an e-mail address through the use of Character Entities,
	 * transforming ASCII characters into their equivalent decimal or hex entities.
	 *
	 * Since it has a random component, subsequent calls to this function produce different results
	 *
	 * @param {string} mail
	 * @returns {string}
	 */
	showdown.helper.encodeEmailAddress = function (mail) {
	  'use strict';
	  var encode = [
	    function (ch) {
	      return '&#' + ch.charCodeAt(0) + ';';
	    },
	    function (ch) {
	      return '&#x' + ch.charCodeAt(0).toString(16) + ';';
	    },
	    function (ch) {
	      return ch;
	    }
	  ];
	
	  mail = mail.replace(/./g, function (ch) {
	    if (ch === '@') {
	      // this *must* be encoded. I insist.
	      ch = encode[Math.floor(Math.random() * 2)](ch);
	    } else {
	      var r = Math.random();
	      // roughly 10% raw, 45% hex, 45% dec
	      ch = (
	        r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch)
	      );
	    }
	    return ch;
	  });
	
	  return mail;
	};
	
	/**
	 * POLYFILLS
	 */
	// use this instead of builtin is undefined for IE8 compatibility
	if (typeof(console) === 'undefined') {
	  console = {
	    warn: function (msg) {
	      'use strict';
	      alert(msg);
	    },
	    log: function (msg) {
	      'use strict';
	      alert(msg);
	    },
	    error: function (msg) {
	      'use strict';
	      throw msg;
	    }
	  };
	}
	
	/**
	 * Common regexes.
	 * We declare some common regexes to improve performance
	 */
	showdown.helper.regexes = {
	  asteriskAndDash: /([*_])/g
	};
	
	/**
	 * Created by Estevao on 31-05-2015.
	 */
	
	/**
	 * Showdown Converter class
	 * @class
	 * @param {object} [converterOptions]
	 * @returns {Converter}
	 */
	showdown.Converter = function (converterOptions) {
	  'use strict';
	
	  var
	      /**
	       * Options used by this converter
	       * @private
	       * @type {{}}
	       */
	      options = {},
	
	      /**
	       * Language extensions used by this converter
	       * @private
	       * @type {Array}
	       */
	      langExtensions = [],
	
	      /**
	       * Output modifiers extensions used by this converter
	       * @private
	       * @type {Array}
	       */
	      outputModifiers = [],
	
	      /**
	       * Event listeners
	       * @private
	       * @type {{}}
	       */
	      listeners = {},
	
	      /**
	       * The flavor set in this converter
	       */
	      setConvFlavor = setFlavor;
	
	  _constructor();
	
	  /**
	   * Converter constructor
	   * @private
	   */
	  function _constructor () {
	    converterOptions = converterOptions || {};
	
	    for (var gOpt in globalOptions) {
	      if (globalOptions.hasOwnProperty(gOpt)) {
	        options[gOpt] = globalOptions[gOpt];
	      }
	    }
	
	    // Merge options
	    if (typeof converterOptions === 'object') {
	      for (var opt in converterOptions) {
	        if (converterOptions.hasOwnProperty(opt)) {
	          options[opt] = converterOptions[opt];
	        }
	      }
	    } else {
	      throw Error('Converter expects the passed parameter to be an object, but ' + typeof converterOptions +
	      ' was passed instead.');
	    }
	
	    if (options.extensions) {
	      showdown.helper.forEach(options.extensions, _parseExtension);
	    }
	  }
	
	  /**
	   * Parse extension
	   * @param {*} ext
	   * @param {string} [name='']
	   * @private
	   */
	  function _parseExtension (ext, name) {
	
	    name = name || null;
	    // If it's a string, the extension was previously loaded
	    if (showdown.helper.isString(ext)) {
	      ext = showdown.helper.stdExtName(ext);
	      name = ext;
	
	      // LEGACY_SUPPORT CODE
	      if (showdown.extensions[ext]) {
	        console.warn('DEPRECATION WARNING: ' + ext + ' is an old extension that uses a deprecated loading method.' +
	          'Please inform the developer that the extension should be updated!');
	        legacyExtensionLoading(showdown.extensions[ext], ext);
	        return;
	      // END LEGACY SUPPORT CODE
	
	      } else if (!showdown.helper.isUndefined(extensions[ext])) {
	        ext = extensions[ext];
	
	      } else {
	        throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
	      }
	    }
	
	    if (typeof ext === 'function') {
	      ext = ext();
	    }
	
	    if (!showdown.helper.isArray(ext)) {
	      ext = [ext];
	    }
	
	    var validExt = validate(ext, name);
	    if (!validExt.valid) {
	      throw Error(validExt.error);
	    }
	
	    for (var i = 0; i < ext.length; ++i) {
	      switch (ext[i].type) {
	
	        case 'lang':
	          langExtensions.push(ext[i]);
	          break;
	
	        case 'output':
	          outputModifiers.push(ext[i]);
	          break;
	      }
	      if (ext[i].hasOwnProperty('listeners')) {
	        for (var ln in ext[i].listeners) {
	          if (ext[i].listeners.hasOwnProperty(ln)) {
	            listen(ln, ext[i].listeners[ln]);
	          }
	        }
	      }
	    }
	
	  }
	
	  /**
	   * LEGACY_SUPPORT
	   * @param {*} ext
	   * @param {string} name
	   */
	  function legacyExtensionLoading (ext, name) {
	    if (typeof ext === 'function') {
	      ext = ext(new showdown.Converter());
	    }
	    if (!showdown.helper.isArray(ext)) {
	      ext = [ext];
	    }
	    var valid = validate(ext, name);
	
	    if (!valid.valid) {
	      throw Error(valid.error);
	    }
	
	    for (var i = 0; i < ext.length; ++i) {
	      switch (ext[i].type) {
	        case 'lang':
	          langExtensions.push(ext[i]);
	          break;
	        case 'output':
	          outputModifiers.push(ext[i]);
	          break;
	        default:// should never reach here
	          throw Error('Extension loader error: Type unrecognized!!!');
	      }
	    }
	  }
	
	  /**
	   * Listen to an event
	   * @param {string} name
	   * @param {function} callback
	   */
	  function listen (name, callback) {
	    if (!showdown.helper.isString(name)) {
	      throw Error('Invalid argument in converter.listen() method: name must be a string, but ' + typeof name + ' given');
	    }
	
	    if (typeof callback !== 'function') {
	      throw Error('Invalid argument in converter.listen() method: callback must be a function, but ' + typeof callback + ' given');
	    }
	
	    if (!listeners.hasOwnProperty(name)) {
	      listeners[name] = [];
	    }
	    listeners[name].push(callback);
	  }
	
	  function rTrimInputText (text) {
	    var rsp = text.match(/^\s*/)[0].length,
	        rgx = new RegExp('^\\s{0,' + rsp + '}', 'gm');
	    return text.replace(rgx, '');
	  }
	
	  /**
	   * Dispatch an event
	   * @private
	   * @param {string} evtName Event name
	   * @param {string} text Text
	   * @param {{}} options Converter Options
	   * @param {{}} globals
	   * @returns {string}
	   */
	  this._dispatch = function dispatch (evtName, text, options, globals) {
	    if (listeners.hasOwnProperty(evtName)) {
	      for (var ei = 0; ei < listeners[evtName].length; ++ei) {
	        var nText = listeners[evtName][ei](evtName, text, this, options, globals);
	        if (nText && typeof nText !== 'undefined') {
	          text = nText;
	        }
	      }
	    }
	    return text;
	  };
	
	  /**
	   * Listen to an event
	   * @param {string} name
	   * @param {function} callback
	   * @returns {showdown.Converter}
	   */
	  this.listen = function (name, callback) {
	    listen(name, callback);
	    return this;
	  };
	
	  /**
	   * Converts a markdown string into HTML
	   * @param {string} text
	   * @returns {*}
	   */
	  this.makeHtml = function (text) {
	    //check if text is not falsy
	    if (!text) {
	      return text;
	    }
	
	    var globals = {
	      gHtmlBlocks:     [],
	      gHtmlMdBlocks:   [],
	      gHtmlSpans:      [],
	      gUrls:           {},
	      gTitles:         {},
	      gDimensions:     {},
	      gListLevel:      0,
	      hashLinkCounts:  {},
	      langExtensions:  langExtensions,
	      outputModifiers: outputModifiers,
	      converter:       this,
	      ghCodeBlocks:    []
	    };
	
	    // This lets us use ¨ trema as an escape char to avoid md5 hashes
	    // The choice of character is arbitrary; anything that isn't
	    // magic in Markdown will work.
	    text = text.replace(/¨/g, '¨T');
	
	    // Replace $ with ¨D
	    // RegExp interprets $ as a special character
	    // when it's in a replacement string
	    text = text.replace(/\$/g, '¨D');
	
	    // Standardize line endings
	    text = text.replace(/\r\n/g, '\n'); // DOS to Unix
	    text = text.replace(/\r/g, '\n'); // Mac to Unix
	
	    // Stardardize line spaces (nbsp causes trouble in older browsers and some regex flavors)
	    text = text.replace(/\u00A0/g, ' ');
	
	    if (options.smartIndentationFix) {
	      text = rTrimInputText(text);
	    }
	
	    // Make sure text begins and ends with a couple of newlines:
	    text = '\n\n' + text + '\n\n';
	
	    // detab
	    text = showdown.subParser('detab')(text, options, globals);
	
	    /**
	     * Strip any lines consisting only of spaces and tabs.
	     * This makes subsequent regexs easier to write, because we can
	     * match consecutive blank lines with /\n+/ instead of something
	     * contorted like /[ \t]*\n+/
	     */
	    text = text.replace(/^[ \t]+$/mg, '');
	
	    //run languageExtensions
	    showdown.helper.forEach(langExtensions, function (ext) {
	      text = showdown.subParser('runExtension')(ext, text, options, globals);
	    });
	
	    // run the sub parsers
	    text = showdown.subParser('hashPreCodeTags')(text, options, globals);
	    text = showdown.subParser('githubCodeBlocks')(text, options, globals);
	    text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
	    text = showdown.subParser('hashCodeTags')(text, options, globals);
	    text = showdown.subParser('stripLinkDefinitions')(text, options, globals);
	    text = showdown.subParser('blockGamut')(text, options, globals);
	    text = showdown.subParser('unhashHTMLSpans')(text, options, globals);
	    text = showdown.subParser('unescapeSpecialChars')(text, options, globals);
	
	    // attacklab: Restore dollar signs
	    text = text.replace(/¨D/g, '$$');
	
	    // attacklab: Restore tremas
	    text = text.replace(/¨T/g, '¨');
	
	    // Run output modifiers
	    showdown.helper.forEach(outputModifiers, function (ext) {
	      text = showdown.subParser('runExtension')(ext, text, options, globals);
	    });
	
	    return text;
	  };
	
	  /**
	   * Set an option of this Converter instance
	   * @param {string} key
	   * @param {*} value
	   */
	  this.setOption = function (key, value) {
	    options[key] = value;
	  };
	
	  /**
	   * Get the option of this Converter instance
	   * @param {string} key
	   * @returns {*}
	   */
	  this.getOption = function (key) {
	    return options[key];
	  };
	
	  /**
	   * Get the options of this Converter instance
	   * @returns {{}}
	   */
	  this.getOptions = function () {
	    return options;
	  };
	
	  /**
	   * Add extension to THIS converter
	   * @param {{}} extension
	   * @param {string} [name=null]
	   */
	  this.addExtension = function (extension, name) {
	    name = name || null;
	    _parseExtension(extension, name);
	  };
	
	  /**
	   * Use a global registered extension with THIS converter
	   * @param {string} extensionName Name of the previously registered extension
	   */
	  this.useExtension = function (extensionName) {
	    _parseExtension(extensionName);
	  };
	
	  /**
	   * Set the flavor THIS converter should use
	   * @param {string} name
	   */
	  this.setFlavor = function (name) {
	    if (!flavor.hasOwnProperty(name)) {
	      throw Error(name + ' flavor was not found');
	    }
	    var preset = flavor[name];
	    setConvFlavor = name;
	    for (var option in preset) {
	      if (preset.hasOwnProperty(option)) {
	        options[option] = preset[option];
	      }
	    }
	  };
	
	  /**
	   * Get the currently set flavor of this converter
	   * @returns {string}
	   */
	  this.getFlavor = function () {
	    return setConvFlavor;
	  };
	
	  /**
	   * Remove an extension from THIS converter.
	   * Note: This is a costly operation. It's better to initialize a new converter
	   * and specify the extensions you wish to use
	   * @param {Array} extension
	   */
	  this.removeExtension = function (extension) {
	    if (!showdown.helper.isArray(extension)) {
	      extension = [extension];
	    }
	    for (var a = 0; a < extension.length; ++a) {
	      var ext = extension[a];
	      for (var i = 0; i < langExtensions.length; ++i) {
	        if (langExtensions[i] === ext) {
	          langExtensions[i].splice(i, 1);
	        }
	      }
	      for (var ii = 0; ii < outputModifiers.length; ++i) {
	        if (outputModifiers[ii] === ext) {
	          outputModifiers[ii].splice(i, 1);
	        }
	      }
	    }
	  };
	
	  /**
	   * Get all extension of THIS converter
	   * @returns {{language: Array, output: Array}}
	   */
	  this.getAllExtensions = function () {
	    return {
	      language: langExtensions,
	      output: outputModifiers
	    };
	  };
	};
	
	/**
	 * Turn Markdown link shortcuts into XHTML <a> tags.
	 */
	showdown.subParser('anchors', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('anchors.before', text, options, globals);
	
	  var writeAnchorTag = function (wholeMatch, linkText, linkId, url, m5, m6, title) {
	    if (showdown.helper.isUndefined(title)) {
	      title = '';
	    }
	    linkId = linkId.toLowerCase();
	
	    // Special case for explicit empty url
	    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
	      url = '';
	    } else if (!url) {
	      if (!linkId) {
	        // lower-case and turn embedded newlines into spaces
	        linkId = linkText.toLowerCase().replace(/ ?\n/g, ' ');
	      }
	      url = '#' + linkId;
	
	      if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
	        url = globals.gUrls[linkId];
	        if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
	          title = globals.gTitles[linkId];
	        }
	      } else {
	        return wholeMatch;
	      }
	    }
	
	    //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance
	    url = url.replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
	
	    var result = '<a href="' + url + '"';
	
	    if (title !== '' && title !== null) {
	      title = title.replace(/"/g, '&quot;');
	      //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance
	      title = title.replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
	      result += ' title="' + title + '"';
	    }
	
	    if (options.openLinksInNewWindow) {
	      // escaped _
	      result += ' target="¨E95Eblank"';
	    }
	
	    result += '>' + linkText + '</a>';
	
	    return result;
	  };
	
	  // First, handle reference-style links: [link text] [id]
	  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);
	
	  // Next, inline-style links: [link text](url "optional title")
	  // cases with crazy urls like ./image/cat1).png
	  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
	    writeAnchorTag);
	
	  // normal cases
	  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
	                      writeAnchorTag);
	
	  // handle reference-style shortcuts: [link text]
	  // These must come last in case you've also got [link test][1]
	  // or [link test](/foo)
	  text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);
	
	  // Lastly handle GithubMentions if option is enabled
	  if (options.ghMentions) {
	    text = text.replace(/(^|\s)(\\)?(@([a-z\d\-]+))(?=[.!?;,[\]()]|\s|$)/gmi, function (wm, st, escape, mentions, username) {
	      if (escape === '\\') {
	        return st + mentions;
	      }
	
	      //check if options.ghMentionsLink is a string
	      if (!showdown.helper.isString(options.ghMentionsLink)) {
	        throw new Error('ghMentionsLink option must be a string');
	      }
	      var lnk = options.ghMentionsLink.replace(/\{u}/g, username);
	      return st + '<a href="' + lnk + '">' + mentions + '</a>';
	    });
	  }
	
	  text = globals.converter._dispatch('anchors.after', text, options, globals);
	  return text;
	});
	
	// url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]
	
	var simpleURLRegex  = /\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)()(?=\s|$)(?!["<>])/gi,
	    simpleURLRegex2 = /\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]]?)(?=\s|$)(?!["<>])/gi,
	    //simpleURLRegex3 = /\b(((https?|ftp):\/\/|www\.)[a-z\d.-]+\.[a-z\d_.~:/?#\[\]@!$&'()*+,;=-]+?)([.!?()]?)(?=\s|$)(?!["<>])/gi,
	    delimUrlRegex   = /<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>/gi,
	    simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,
	    delimMailRegex  = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
	
	    replaceLink = function (options) {
	      'use strict';
	
	      return function (wm, link, m2, m3, trailingPunctuation) {
	        var lnkTxt = link,
	            append = '',
	            target = '';
	        if (/^www\./i.test(link)) {
	          link = link.replace(/^www\./i, 'http://www.');
	        }
	        if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
	          append = trailingPunctuation;
	        }
	        if (options.openLinksInNewWindow) {
	          target = ' target="¨E95Eblank"';
	        }
	        return '<a href="' + link + '"' + target + '>' + lnkTxt + '</a>' + append;
	      };
	    },
	
	    replaceMail = function (options, globals) {
	      'use strict';
	      return function (wholeMatch, b, mail) {
	        var href = 'mailto:';
	        b = b || '';
	        mail = showdown.subParser('unescapeSpecialChars')(mail, options, globals);
	        if (options.encodeEmails) {
	          href = showdown.helper.encodeEmailAddress(href + mail);
	          mail = showdown.helper.encodeEmailAddress(mail);
	        } else {
	          href = href + mail;
	        }
	        return b + '<a href="' + href + '">' + mail + '</a>';
	      };
	    };
	
	showdown.subParser('autoLinks', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('autoLinks.before', text, options, globals);
	
	  text = text.replace(delimUrlRegex, replaceLink(options));
	  text = text.replace(delimMailRegex, replaceMail(options, globals));
	
	  text = globals.converter._dispatch('autoLinks.after', text, options, globals);
	
	  return text;
	});
	
	showdown.subParser('simplifiedAutoLinks', function (text, options, globals) {
	  'use strict';
	
	  if (!options.simplifiedAutoLink) {
	    return text;
	  }
	
	  text = globals.converter._dispatch('simplifiedAutoLinks.before', text, options, globals);
	
	  if (options.excludeTrailingPunctuationFromURLs) {
	    text = text.replace(simpleURLRegex2, replaceLink(options));
	  } else {
	    text = text.replace(simpleURLRegex, replaceLink(options));
	  }
	  text = text.replace(simpleMailRegex, replaceMail(options, globals));
	
	  text = globals.converter._dispatch('simplifiedAutoLinks.after', text, options, globals);
	
	  return text;
	});
	
	/**
	 * These are all the transformations that form block-level
	 * tags like paragraphs, headers, and list items.
	 */
	showdown.subParser('blockGamut', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('blockGamut.before', text, options, globals);
	
	  // we parse blockquotes first so that we can have headings and hrs
	  // inside blockquotes
	  text = showdown.subParser('blockQuotes')(text, options, globals);
	  text = showdown.subParser('headers')(text, options, globals);
	
	  // Do Horizontal Rules:
	  text = showdown.subParser('horizontalRule')(text, options, globals);
	
	  text = showdown.subParser('lists')(text, options, globals);
	  text = showdown.subParser('codeBlocks')(text, options, globals);
	  text = showdown.subParser('tables')(text, options, globals);
	
	  // We already ran _HashHTMLBlocks() before, in Markdown(), but that
	  // was to escape raw HTML in the original Markdown source. This time,
	  // we're escaping the markup we've just created, so that we don't wrap
	  // <p> tags around block-level tags.
	  text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
	  text = showdown.subParser('paragraphs')(text, options, globals);
	
	  text = globals.converter._dispatch('blockGamut.after', text, options, globals);
	
	  return text;
	});
	
	showdown.subParser('blockQuotes', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('blockQuotes.before', text, options, globals);
	
	  text = text.replace(/((^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm, function (wholeMatch, m1) {
	    var bq = m1;
	
	    // attacklab: hack around Konqueror 3.5.4 bug:
	    // "----------bug".replace(/^-/g,"") == "bug"
	    bq = bq.replace(/^[ \t]*>[ \t]?/gm, '¨0'); // trim one level of quoting
	
	    // attacklab: clean up hack
	    bq = bq.replace(/¨0/g, '');
	
	    bq = bq.replace(/^[ \t]+$/gm, ''); // trim whitespace-only lines
	    bq = showdown.subParser('githubCodeBlocks')(bq, options, globals);
	    bq = showdown.subParser('blockGamut')(bq, options, globals); // recurse
	
	    bq = bq.replace(/(^|\n)/g, '$1  ');
	    // These leading spaces screw with <pre> content, so we need to fix that:
	    bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (wholeMatch, m1) {
	      var pre = m1;
	      // attacklab: hack around Konqueror 3.5.4 bug:
	      pre = pre.replace(/^  /mg, '¨0');
	      pre = pre.replace(/¨0/g, '');
	      return pre;
	    });
	
	    return showdown.subParser('hashBlock')('<blockquote>\n' + bq + '\n</blockquote>', options, globals);
	  });
	
	  text = globals.converter._dispatch('blockQuotes.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Process Markdown `<pre><code>` blocks.
	 */
	showdown.subParser('codeBlocks', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('codeBlocks.before', text, options, globals);
	
	  // sentinel workarounds for lack of \A and \Z, safari\khtml bug
	  text += '¨0';
	
	  var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
	  text = text.replace(pattern, function (wholeMatch, m1, m2) {
	    var codeblock = m1,
	        nextChar = m2,
	        end = '\n';
	
	    codeblock = showdown.subParser('outdent')(codeblock, options, globals);
	    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
	    codeblock = showdown.subParser('detab')(codeblock, options, globals);
	    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
	    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing newlines
	
	    if (options.omitExtraWLInCodeBlocks) {
	      end = '';
	    }
	
	    codeblock = '<pre><code>' + codeblock + end + '</code></pre>';
	
	    return showdown.subParser('hashBlock')(codeblock, options, globals) + nextChar;
	  });
	
	  // strip sentinel
	  text = text.replace(/¨0/, '');
	
	  text = globals.converter._dispatch('codeBlocks.after', text, options, globals);
	  return text;
	});
	
	/**
	 *
	 *   *  Backtick quotes are used for <code></code> spans.
	 *
	 *   *  You can use multiple backticks as the delimiters if you want to
	 *     include literal backticks in the code span. So, this input:
	 *
	 *         Just type ``foo `bar` baz`` at the prompt.
	 *
	 *       Will translate to:
	 *
	 *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
	 *
	 *    There's no arbitrary limit to the number of backticks you
	 *    can use as delimters. If you need three consecutive backticks
	 *    in your code, use four for delimiters, etc.
	 *
	 *  *  You can use spaces to get literal backticks at the edges:
	 *
	 *         ... type `` `bar` `` ...
	 *
	 *       Turns to:
	 *
	 *         ... type <code>`bar`</code> ...
	 */
	showdown.subParser('codeSpans', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('codeSpans.before', text, options, globals);
	
	  if (typeof(text) === 'undefined') {
	    text = '';
	  }
	  text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
	    function (wholeMatch, m1, m2, m3) {
	      var c = m3;
	      c = c.replace(/^([ \t]*)/g, '');	// leading whitespace
	      c = c.replace(/[ \t]*$/g, '');	// trailing whitespace
	      c = showdown.subParser('encodeCode')(c, options, globals);
	      return m1 + '<code>' + c + '</code>';
	    }
	  );
	
	  text = globals.converter._dispatch('codeSpans.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Convert all tabs to spaces
	 */
	showdown.subParser('detab', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('detab.before', text, options, globals);
	
	  // expand first n-1 tabs
	  text = text.replace(/\t(?=\t)/g, '    '); // g_tab_width
	
	  // replace the nth with two sentinels
	  text = text.replace(/\t/g, '¨A¨B');
	
	  // use the sentinel to anchor our regex so it doesn't explode
	  text = text.replace(/¨B(.+?)¨A/g, function (wholeMatch, m1) {
	    var leadingText = m1,
	        numSpaces = 4 - leadingText.length % 4;  // g_tab_width
	
	    // there *must* be a better way to do this:
	    for (var i = 0; i < numSpaces; i++) {
	      leadingText += ' ';
	    }
	
	    return leadingText;
	  });
	
	  // clean up sentinels
	  text = text.replace(/¨A/g, '    ');  // g_tab_width
	  text = text.replace(/¨B/g, '');
	
	  text = globals.converter._dispatch('detab.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Smart processing for ampersands and angle brackets that need to be encoded.
	 */
	showdown.subParser('encodeAmpsAndAngles', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('encodeAmpsAndAngles.before', text, options, globals);
	
	  // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
	  // http://bumppo.net/projects/amputator/
	  text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;');
	
	  // Encode naked <'s
	  text = text.replace(/<(?![a-z\/?$!])/gi, '&lt;');
	
	  // Encode <
	  text = text.replace(/</g, '&lt;');
	
	  // Encode >
	  text = text.replace(/>/g, '&gt;');
	
	  text = globals.converter._dispatch('encodeAmpsAndAngles.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Returns the string, with after processing the following backslash escape sequences.
	 *
	 * attacklab: The polite way to do this is with the new escapeCharacters() function:
	 *
	 *    text = escapeCharacters(text,"\\",true);
	 *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
	 *
	 * ...but we're sidestepping its use of the (slow) RegExp constructor
	 * as an optimization for Firefox.  This function gets called a LOT.
	 */
	showdown.subParser('encodeBackslashEscapes', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('encodeBackslashEscapes.before', text, options, globals);
	
	  text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
	  text = text.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, showdown.helper.escapeCharactersCallback);
	
	  text = globals.converter._dispatch('encodeBackslashEscapes.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Encode/escape certain characters inside Markdown code runs.
	 * The point is that in code, these characters are literals,
	 * and lose their special Markdown meanings.
	 */
	showdown.subParser('encodeCode', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('encodeCode.before', text, options, globals);
	
	  // Encode all ampersands; HTML entities are not
	  // entities within a Markdown code span.
	  text = text
	    .replace(/&/g, '&amp;')
	  // Do the angle bracket song and dance:
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	  // Now, escape characters that are magic in Markdown:
	    .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);
	
	  text = globals.converter._dispatch('encodeCode.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
	 * don't conflict with their use in Markdown for code, italics and strong.
	 */
	showdown.subParser('escapeSpecialCharsWithinTagAttributes', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.before', text, options, globals);
	
	  // Build a regex to find HTML tags and comments.  See Friedl's
	  // "Mastering Regular Expressions", 2nd Ed., pp. 200-201.
	  var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;
	
	  text = text.replace(regex, function (wholeMatch) {
	    return wholeMatch
	      .replace(/(.)<\/?code>(?=.)/g, '$1`')
	      .replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
	  });
	
	  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Handle github codeblocks prior to running HashHTML so that
	 * HTML contained within the codeblock gets escaped properly
	 * Example:
	 * ```ruby
	 *     def hello_world(x)
	 *       puts "Hello, #{x}"
	 *     end
	 * ```
	 */
	showdown.subParser('githubCodeBlocks', function (text, options, globals) {
	  'use strict';
	
	  // early exit if option is not enabled
	  if (!options.ghCodeBlocks) {
	    return text;
	  }
	
	  text = globals.converter._dispatch('githubCodeBlocks.before', text, options, globals);
	
	  text += '¨0';
	
	  text = text.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function (wholeMatch, language, codeblock) {
	    var end = (options.omitExtraWLInCodeBlocks) ? '' : '\n';
	
	    // First parse the github code block
	    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
	    codeblock = showdown.subParser('detab')(codeblock, options, globals);
	    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
	    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace
	
	    codeblock = '<pre><code' + (language ? ' class="' + language + ' language-' + language + '"' : '') + '>' + codeblock + end + '</code></pre>';
	
	    codeblock = showdown.subParser('hashBlock')(codeblock, options, globals);
	
	    // Since GHCodeblocks can be false positives, we need to
	    // store the primitive text and the parsed text in a global var,
	    // and then return a token
	    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
	  });
	
	  // attacklab: strip sentinel
	  text = text.replace(/¨0/, '');
	
	  return globals.converter._dispatch('githubCodeBlocks.after', text, options, globals);
	});
	
	showdown.subParser('hashBlock', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('hashBlock.before', text, options, globals);
	  text = text.replace(/(^\n+|\n+$)/g, '');
	  text = '\n\n¨K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
	  text = globals.converter._dispatch('hashBlock.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Hash and escape <code> elements that should not be parsed as markdown
	 */
	showdown.subParser('hashCodeTags', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('hashCodeTags.before', text, options, globals);
	
	  var repFunc = function (wholeMatch, match, left, right) {
	    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
	    return '¨C' + (globals.gHtmlSpans.push(codeblock) - 1) + 'C';
	  };
	
	  // Hash naked <code>
	  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '<code\\b[^>]*>', '</code>', 'gim');
	
	  text = globals.converter._dispatch('hashCodeTags.after', text, options, globals);
	  return text;
	});
	
	showdown.subParser('hashElement', function (text, options, globals) {
	  'use strict';
	
	  return function (wholeMatch, m1) {
	    var blockText = m1;
	
	    // Undo double lines
	    blockText = blockText.replace(/\n\n/g, '\n');
	    blockText = blockText.replace(/^\n/, '');
	
	    // strip trailing blank lines
	    blockText = blockText.replace(/\n+$/g, '');
	
	    // Replace the element text with a marker ("¨KxK" where x is its key)
	    blockText = '\n\n¨K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';
	
	    return blockText;
	  };
	});
	
	showdown.subParser('hashHTMLBlocks', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('hashHTMLBlocks.before', text, options, globals);
	
	  var blockTags = [
	        'pre',
	        'div',
	        'h1',
	        'h2',
	        'h3',
	        'h4',
	        'h5',
	        'h6',
	        'blockquote',
	        'table',
	        'dl',
	        'ol',
	        'ul',
	        'script',
	        'noscript',
	        'form',
	        'fieldset',
	        'iframe',
	        'math',
	        'style',
	        'section',
	        'header',
	        'footer',
	        'nav',
	        'article',
	        'aside',
	        'address',
	        'audio',
	        'canvas',
	        'figure',
	        'hgroup',
	        'output',
	        'video',
	        'p'
	      ],
	      repFunc = function (wholeMatch, match, left, right) {
	        var txt = wholeMatch;
	        // check if this html element is marked as markdown
	        // if so, it's contents should be parsed as markdown
	        if (left.search(/\bmarkdown\b/) !== -1) {
	          txt = left + globals.converter.makeHtml(match) + right;
	        }
	        return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
	      };
	
	  for (var i = 0; i < blockTags.length; ++i) {
	
	    var opTagPos,
	        rgx1     = new RegExp('^ {0,3}<' + blockTags[i] + '\\b[^>]*>', 'im'),
	        patLeft  = '<' + blockTags[i] + '\\b[^>]*>',
	        patRight = '</' + blockTags[i] + '>';
	    // 1. Look for the first position of the first opening HTML tag in the text
	    while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {
	      //2. Split the text in that position
	      var subTexts = showdown.helper.splitAtIndex(text, opTagPos),
	      //3. Match recursively
	          newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, 'im');
	
	      // prevent an infinite loop
	      if (newSubText1 === subTexts[1]) {
	        break;
	      }
	      text = subTexts[0].concat(newSubText1);
	    }
	  }
	  // HR SPECIAL CASE
	  text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
	    showdown.subParser('hashElement')(text, options, globals));
	
	  // Special case for standalone HTML comments
	  text = showdown.helper.replaceRecursiveRegExp(text, function (txt) {
	    return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
	  }, '^ {0,3}<!--', '-->', 'gm');
	
	  // PHP and ASP-style processor instructions (<?...?> and <%...%>)
	  text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
	    showdown.subParser('hashElement')(text, options, globals));
	
	  text = globals.converter._dispatch('hashHTMLBlocks.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Hash span elements that should not be parsed as markdown
	 */
	showdown.subParser('hashHTMLSpans', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('hashHTMLSpans.before', text, options, globals);
	
	  function hashHTMLSpan (html) {
	    return '¨C' + (globals.gHtmlSpans.push(html) - 1) + 'C';
	  }
	
	  // Hash Self Closing tags
	  text = text.replace(/<[^>]+?\/>/gi, function (wm) {
	    return hashHTMLSpan(wm);
	  });
	
	  // Hash tags without properties
	  text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (wm) {
	    return hashHTMLSpan(wm);
	  });
	
	  // Hash tags with properties
	  text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (wm) {
	    return hashHTMLSpan(wm);
	  });
	
	  // Hash self closing tags without />
	  text = text.replace(/<[^>]+?>/gi, function (wm) {
	    return hashHTMLSpan(wm);
	  });
	
	  /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/
	
	  text = globals.converter._dispatch('hashHTMLSpans.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Unhash HTML spans
	 */
	showdown.subParser('unhashHTMLSpans', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('unhashHTMLSpans.before', text, options, globals);
	
	  for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
	    var repText = globals.gHtmlSpans[i],
	        // limiter to prevent infinite loop (assume 10 as limit for recurse)
	        limit = 0;
	
	    while (/¨C(\d+)C/.test(repText)) {
	      var num = RegExp.$1;
	      repText = repText.replace('¨C' + num + 'C', globals.gHtmlSpans[num]);
	      if (limit === 10) {
	        break;
	      }
	      ++limit;
	    }
	    text = text.replace('¨C' + i + 'C', repText);
	  }
	
	  text = globals.converter._dispatch('unhashHTMLSpans.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Hash and escape <pre><code> elements that should not be parsed as markdown
	 */
	showdown.subParser('hashPreCodeTags', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('hashPreCodeTags.before', text, options, globals);
	
	  var repFunc = function (wholeMatch, match, left, right) {
	    // encode html entities
	    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
	    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
	  };
	
	  // Hash <pre><code>
	  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>', '^ {0,3}</code>\\s*</pre>', 'gim');
	
	  text = globals.converter._dispatch('hashPreCodeTags.after', text, options, globals);
	  return text;
	});
	
	showdown.subParser('headers', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('headers.before', text, options, globals);
	
	  var headerLevelStart = (isNaN(parseInt(options.headerLevelStart))) ? 1 : parseInt(options.headerLevelStart),
	      ghHeaderId = options.ghCompatibleHeaderId,
	
	  // Set text-style headers:
	  //	Header 1
	  //	========
	  //
	  //	Header 2
	  //	--------
	  //
	      setextRegexH1 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
	      setextRegexH2 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
	
	  text = text.replace(setextRegexH1, function (wholeMatch, m1) {
	
	    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
	        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
	        hLevel = headerLevelStart,
	        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
	    return showdown.subParser('hashBlock')(hashBlock, options, globals);
	  });
	
	  text = text.replace(setextRegexH2, function (matchFound, m1) {
	    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
	        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
	        hLevel = headerLevelStart + 1,
	        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
	    return showdown.subParser('hashBlock')(hashBlock, options, globals);
	  });
	
	  // atx-style headers:
	  //  # Header 1
	  //  ## Header 2
	  //  ## Header 2 with closing hashes ##
	  //  ...
	  //  ###### Header 6
	  //
	  var atxStyle = (options.requireSpaceBeforeHeadingText) ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
	
	  text = text.replace(atxStyle, function (wholeMatch, m1, m2) {
	    var hText = m2;
	    if (options.customizedHeaderId) {
	      hText = m2.replace(/\s?\{([^{]+?)}\s*$/, '');
	    }
	
	    var span = showdown.subParser('spanGamut')(hText, options, globals),
	        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m2) + '"',
	        hLevel = headerLevelStart - 1 + m1.length,
	        header = '<h' + hLevel + hID + '>' + span + '</h' + hLevel + '>';
	
	    return showdown.subParser('hashBlock')(header, options, globals);
	  });
	
	  function headerId (m) {
	    var title;
	
	    // It is separate from other options to allow combining prefix and customized
	    if (options.customizedHeaderId) {
	      var match = m.match(/\{([^{]+?)}\s*$/);
	      if (match && match[1]) {
	        m = match[1];
	      }
	    }
	
	    // Prefix id to prevent causing inadvertent pre-existing style matches.
	    if (showdown.helper.isString(options.prefixHeaderId)) {
	      title = options.prefixHeaderId + m;
	    } else if (options.prefixHeaderId === true) {
	      title = 'section ' + m;
	    } else {
	      title = m;
	    }
	
	    if (ghHeaderId) {
	      title = title
	        .replace(/ /g, '-')
	        // replace previously escaped chars (&, ¨ and $)
	        .replace(/&amp;/g, '')
	        .replace(/¨T/g, '')
	        .replace(/¨D/g, '')
	        // replace rest of the chars (&~$ are repeated as they might have been escaped)
	        // borrowed from github's redcarpet (some they should produce similar results)
	        .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, '')
	        .toLowerCase();
	    } else {
	      title = title
	        .replace(/[^\w]/g, '')
	        .toLowerCase();
	    }
	
	    if (globals.hashLinkCounts[title]) {
	      title = title + '-' + (globals.hashLinkCounts[title]++);
	    } else {
	      globals.hashLinkCounts[title] = 1;
	    }
	    return title;
	  }
	
	  text = globals.converter._dispatch('headers.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Turn Markdown link shortcuts into XHTML <a> tags.
	 */
	showdown.subParser('horizontalRule', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('horizontalRule.before', text, options, globals);
	
	  var key = showdown.subParser('hashBlock')('<hr />', options, globals);
	  text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
	  text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
	  text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
	
	  text = globals.converter._dispatch('horizontalRule.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Turn Markdown image shortcuts into <img> tags.
	 */
	showdown.subParser('images', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('images.before', text, options, globals);
	
	  var inlineRegExp      = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
	      crazyRegExp       = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
	      referenceRegExp   = /!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g,
	      refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;
	
	  function writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title) {
	
	    var gUrls   = globals.gUrls,
	        gTitles = globals.gTitles,
	        gDims   = globals.gDimensions;
	
	    linkId = linkId.toLowerCase();
	
	    if (!title) {
	      title = '';
	    }
	    // Special case for explicit empty url
	    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
	      url = '';
	
	    } else if (url === '' || url === null) {
	      if (linkId === '' || linkId === null) {
	        // lower-case and turn embedded newlines into spaces
	        linkId = altText.toLowerCase().replace(/ ?\n/g, ' ');
	      }
	      url = '#' + linkId;
	
	      if (!showdown.helper.isUndefined(gUrls[linkId])) {
	        url = gUrls[linkId];
	        if (!showdown.helper.isUndefined(gTitles[linkId])) {
	          title = gTitles[linkId];
	        }
	        if (!showdown.helper.isUndefined(gDims[linkId])) {
	          width = gDims[linkId].width;
	          height = gDims[linkId].height;
	        }
	      } else {
	        return wholeMatch;
	      }
	    }
	
	    altText = altText
	      .replace(/"/g, '&quot;')
	    //altText = showdown.helper.escapeCharacters(altText, '*_', false);
	      .replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
	    //url = showdown.helper.escapeCharacters(url, '*_', false);
	    url = url.replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
	    var result = '<img src="' + url + '" alt="' + altText + '"';
	
	    if (title) {
	      title = title
	        .replace(/"/g, '&quot;')
	      //title = showdown.helper.escapeCharacters(title, '*_', false);
	        .replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
	      result += ' title="' + title + '"';
	    }
	
	    if (width && height) {
	      width  = (width === '*') ? 'auto' : width;
	      height = (height === '*') ? 'auto' : height;
	
	      result += ' width="' + width + '"';
	      result += ' height="' + height + '"';
	    }
	
	    result += ' />';
	
	    return result;
	  }
	
	  // First, handle reference-style labeled images: ![alt text][id]
	  text = text.replace(referenceRegExp, writeImageTag);
	
	  // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")
	  // cases with crazy urls like ./image/cat1).png
	  text = text.replace(crazyRegExp, writeImageTag);
	
	  // normal cases
	  text = text.replace(inlineRegExp, writeImageTag);
	
	  // handle reference-style shortcuts: |[img text]
	  text = text.replace(refShortcutRegExp, writeImageTag);
	
	  text = globals.converter._dispatch('images.after', text, options, globals);
	  return text;
	});
	
	showdown.subParser('italicsAndBold', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('italicsAndBold.before', text, options, globals);
	
	  // it's faster to have 3 separate regexes for each case than have just one
	  // because of backtracing, in some cases, it could lead to an exponential effect
	  // called "catastrophic backtrace". Ominous!
	
	  function parseInside (txt, left, right) {
	    if (options.simplifiedAutoLink) {
	      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
	    }
	    return left + txt + right;
	  }
	
	  // Parse underscores
	  if (options.literalMidWordUnderscores) {
	    text = text.replace(/\b___(\S[\s\S]*)___\b/g, function (wm, txt) {
	      return parseInside (txt, '<strong><em>', '</em></strong>');
	    });
	    text = text.replace(/\b__(\S[\s\S]*)__\b/g, function (wm, txt) {
	      return parseInside (txt, '<strong>', '</strong>');
	    });
	    text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function (wm, txt) {
	      return parseInside (txt, '<em>', '</em>');
	    });
	  } else {
	    text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
	      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
	    });
	    text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
	      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
	    });
	    text = text.replace(/_([^\s_][\s\S]*?)_/g, function (wm, m) {
	      // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
	      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
	    });
	  }
	
	  // Now parse asterisks
	  if (options.literalMidWordAsterisks) {
	    text = text.trim().replace(/(?:^| +)\*{3}(\S[\s\S]*?)\*{3}(?: +|$)/g, function (wm, txt) {
	      return parseInside (txt, ' <strong><em>', '</em></strong> ');
	    });
	    text = text.trim().replace(/(?:^| +)\*{2}(\S[\s\S]*?)\*{2}(?: +|$)/g, function (wm, txt) {
	      return parseInside (txt, ' <strong>', '</strong> ');
	    });
	    text = text.trim().replace(/(?:^| +)\*{1}(\S[\s\S]*?)\*{1}(?: +|$)/g, function (wm, txt) {
	      return parseInside (txt, ' <em>', '</em>' + (wm.slice(-1) === ' ' ? ' ' : ''));
	    });
	  } else {
	    text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (wm, m) {
	      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
	    });
	    text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (wm, m) {
	      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
	    });
	    text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function (wm, m) {
	      // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
	      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
	    });
	  }
	
	
	  text = globals.converter._dispatch('italicsAndBold.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Form HTML ordered (numbered) and unordered (bulleted) lists.
	 */
	showdown.subParser('lists', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('lists.before', text, options, globals);
	
	  /**
	   * Process the contents of a single ordered or unordered list, splitting it
	   * into individual list items.
	   * @param {string} listStr
	   * @param {boolean} trimTrailing
	   * @returns {string}
	   */
	  function processListItems (listStr, trimTrailing) {
	    // The $g_list_level global keeps track of when we're inside a list.
	    // Each time we enter a list, we increment it; when we leave a list,
	    // we decrement. If it's zero, we're not in a list anymore.
	    //
	    // We do this because when we're not inside a list, we want to treat
	    // something like this:
	    //
	    //    I recommend upgrading to version
	    //    8. Oops, now this line is treated
	    //    as a sub-list.
	    //
	    // As a single paragraph, despite the fact that the second line starts
	    // with a digit-period-space sequence.
	    //
	    // Whereas when we're inside a list (or sub-list), that line will be
	    // treated as the start of a sub-list. What a kludge, huh? This is
	    // an aspect of Markdown's syntax that's hard to parse perfectly
	    // without resorting to mind-reading. Perhaps the solution is to
	    // change the syntax rules such that sub-lists must start with a
	    // starting cardinal number; e.g. "1." or "a.".
	    globals.gListLevel++;
	
	    // trim trailing blank lines:
	    listStr = listStr.replace(/\n{2,}$/, '\n');
	
	    // attacklab: add sentinel to emulate \z
	    listStr += '¨0';
	
	    var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
	        isParagraphed = (/\n[ \t]*\n(?!¨0)/.test(listStr));
	
	    // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
	    // which is a syntax breaking change
	    // activating this option reverts to old behavior
	    if (options.disableForced4SpacesIndentedSublists) {
	      rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
	    }
	
	    listStr = listStr.replace(rgx, function (wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
	      checked = (checked && checked.trim() !== '');
	
	      var item = showdown.subParser('outdent')(m4, options, globals),
	          bulletStyle = '';
	
	      // Support for github tasklists
	      if (taskbtn && options.tasklists) {
	        bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
	        item = item.replace(/^[ \t]*\[(x|X| )?]/m, function () {
	          var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
	          if (checked) {
	            otp += ' checked';
	          }
	          otp += '>';
	          return otp;
	        });
	      }
	
	      // ISSUE #312
	      // This input: - - - a
	      // causes trouble to the parser, since it interprets it as:
	      // <ul><li><li><li>a</li></li></li></ul>
	      // instead of:
	      // <ul><li>- - a</li></ul>
	      // So, to prevent it, we will put a marker (¨A)in the beginning of the line
	      // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser
	      item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (wm2) {
	        return '¨A' + wm2;
	      });
	
	      // m1 - Leading line or
	      // Has a double return (multi paragraph) or
	      // Has sublist
	      if (m1 || (item.search(/\n{2,}/) > -1)) {
	        item = showdown.subParser('githubCodeBlocks')(item, options, globals);
	        item = showdown.subParser('blockGamut')(item, options, globals);
	      } else {
	        // Recursion for sub-lists:
	        item = showdown.subParser('lists')(item, options, globals);
	        item = item.replace(/\n$/, ''); // chomp(item)
	        item = showdown.subParser('hashHTMLBlocks')(item, options, globals);
	        // Colapse double linebreaks
	        item = item.replace(/\n\n+/g, '\n\n');
	        // replace double linebreaks with a placeholder
	        item = item.replace(/\n\n/g, '¨B');
	        if (isParagraphed) {
	          item = showdown.subParser('paragraphs')(item, options, globals);
	        } else {
	          item = showdown.subParser('spanGamut')(item, options, globals);
	        }
	        item = item.replace(/¨B/g, '\n\n');
	      }
	
	      // now we need to remove the marker (¨A)
	      item = item.replace('¨A', '');
	      // we can finally wrap the line in list item tags
	      item =  '<li' + bulletStyle + '>' + item + '</li>\n';
	
	      return item;
	    });
	
	    // attacklab: strip sentinel
	    listStr = listStr.replace(/¨0/g, '');
	
	    globals.gListLevel--;
	
	    if (trimTrailing) {
	      listStr = listStr.replace(/\s+$/, '');
	    }
	
	    return listStr;
	  }
	
	  /**
	   * Check and parse consecutive lists (better fix for issue #142)
	   * @param {string} list
	   * @param {string} listType
	   * @param {boolean} trimTrailing
	   * @returns {string}
	   */
	  function parseConsecutiveLists (list, listType, trimTrailing) {
	    // check if we caught 2 or more consecutive lists by mistake
	    // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
	    var olRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
	        ulRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
	        counterRxg = (listType === 'ul') ? olRgx : ulRgx,
	        result = '';
	
	    if (list.search(counterRxg) !== -1) {
	      (function parseCL (txt) {
	        var pos = txt.search(counterRxg);
	        if (pos !== -1) {
	          // slice
	          result += '\n<' + listType + '>\n' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n';
	
	          // invert counterType and listType
	          listType = (listType === 'ul') ? 'ol' : 'ul';
	          counterRxg = (listType === 'ul') ? olRgx : ulRgx;
	
	          //recurse
	          parseCL(txt.slice(pos));
	        } else {
	          result += '\n<' + listType + '>\n' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n';
	        }
	      })(list);
	    } else {
	      result = '\n<' + listType + '>\n' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n';
	    }
	
	    return result;
	  }
	
	  // add sentinel to hack around khtml/safari bug:
	  // http://bugs.webkit.org/show_bug.cgi?id=11231
	  text += '¨0';
	
	  if (globals.gListLevel) {
	    text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
	      function (wholeMatch, list, m2) {
	        var listType = (m2.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
	        return parseConsecutiveLists(list, listType, true);
	      }
	    );
	  } else {
	    text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
	      function (wholeMatch, m1, list, m3) {
	        var listType = (m3.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
	        return parseConsecutiveLists(list, listType, false);
	      }
	    );
	  }
	
	  // strip sentinel
	  text = text.replace(/¨0/, '');
	  text = globals.converter._dispatch('lists.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Remove one level of line-leading tabs or spaces
	 */
	showdown.subParser('outdent', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('outdent.before', text, options, globals);
	
	  // attacklab: hack around Konqueror 3.5.4 bug:
	  // "----------bug".replace(/^-/g,"") == "bug"
	  text = text.replace(/^(\t|[ ]{1,4})/gm, '¨0'); // attacklab: g_tab_width
	
	  // attacklab: clean up hack
	  text = text.replace(/¨0/g, '');
	
	  text = globals.converter._dispatch('outdent.after', text, options, globals);
	  return text;
	});
	
	/**
	 *
	 */
	showdown.subParser('paragraphs', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('paragraphs.before', text, options, globals);
	  // Strip leading and trailing lines:
	  text = text.replace(/^\n+/g, '');
	  text = text.replace(/\n+$/g, '');
	
	  var grafs = text.split(/\n{2,}/g),
	      grafsOut = [],
	      end = grafs.length; // Wrap <p> tags
	
	  for (var i = 0; i < end; i++) {
	    var str = grafs[i];
	    // if this is an HTML marker, copy it
	    if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
	      grafsOut.push(str);
	
	    // test for presence of characters to prevent empty lines being parsed
	    // as paragraphs (resulting in undesired extra empty paragraphs)
	    } else if (str.search(/\S/) >= 0) {
	      str = showdown.subParser('spanGamut')(str, options, globals);
	      str = str.replace(/^([ \t]*)/g, '<p>');
	      str += '</p>';
	      grafsOut.push(str);
	    }
	  }
	
	  /** Unhashify HTML blocks */
	  end = grafsOut.length;
	  for (i = 0; i < end; i++) {
	    var blockText = '',
	        grafsOutIt = grafsOut[i],
	        codeFlag = false;
	    // if this is a marker for an html block...
	    // use RegExp.test instead of string.search because of QML bug
	    while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
	      var delim = RegExp.$1,
	          num   = RegExp.$2;
	
	      if (delim === 'K') {
	        blockText = globals.gHtmlBlocks[num];
	      } else {
	        // we need to check if ghBlock is a false positive
	        if (codeFlag) {
	          // use encoded version of all text
	          blockText = showdown.subParser('encodeCode')(globals.ghCodeBlocks[num].text, options, globals);
	        } else {
	          blockText = globals.ghCodeBlocks[num].codeblock;
	        }
	      }
	      blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs
	
	      grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
	      // Check if grafsOutIt is a pre->code
	      if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
	        codeFlag = true;
	      }
	    }
	    grafsOut[i] = grafsOutIt;
	  }
	  text = grafsOut.join('\n');
	  // Strip leading and trailing lines:
	  text = text.replace(/^\n+/g, '');
	  text = text.replace(/\n+$/g, '');
	  return globals.converter._dispatch('paragraphs.after', text, options, globals);
	});
	
	/**
	 * Run extension
	 */
	showdown.subParser('runExtension', function (ext, text, options, globals) {
	  'use strict';
	
	  if (ext.filter) {
	    text = ext.filter(text, globals.converter, options);
	
	  } else if (ext.regex) {
	    // TODO remove this when old extension loading mechanism is deprecated
	    var re = ext.regex;
	    if (!(re instanceof RegExp)) {
	      re = new RegExp(re, 'g');
	    }
	    text = text.replace(re, ext.replace);
	  }
	
	  return text;
	});
	
	/**
	 * These are all the transformations that occur *within* block-level
	 * tags like paragraphs, headers, and list items.
	 */
	showdown.subParser('spanGamut', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('spanGamut.before', text, options, globals);
	  text = showdown.subParser('codeSpans')(text, options, globals);
	  text = showdown.subParser('escapeSpecialCharsWithinTagAttributes')(text, options, globals);
	  text = showdown.subParser('encodeBackslashEscapes')(text, options, globals);
	
	  // Process anchor and image tags. Images must come first,
	  // because ![foo][f] looks like an anchor.
	  text = showdown.subParser('images')(text, options, globals);
	  text = showdown.subParser('anchors')(text, options, globals);
	
	  // Make links out of things like `<http://example.com/>`
	  // Must come after anchors, because you can use < and >
	  // delimiters in inline links like [this](<url>).
	  text = showdown.subParser('autoLinks')(text, options, globals);
	  text = showdown.subParser('italicsAndBold')(text, options, globals);
	  text = showdown.subParser('strikethrough')(text, options, globals);
	  text = showdown.subParser('simplifiedAutoLinks')(text, options, globals);
	
	  // we need to hash HTML tags inside spans
	  text = showdown.subParser('hashHTMLSpans')(text, options, globals);
	
	  // now we encode amps and angles
	  text = showdown.subParser('encodeAmpsAndAngles')(text, options, globals);
	
	  // Do hard breaks
	  if (options.simpleLineBreaks) {
	    // GFM style hard breaks
	    text = text.replace(/\n/g, '<br />\n');
	  } else {
	    // Vanilla hard breaks
	    text = text.replace(/  +\n/g, '<br />\n');
	  }
	
	  text = globals.converter._dispatch('spanGamut.after', text, options, globals);
	  return text;
	});
	
	showdown.subParser('strikethrough', function (text, options, globals) {
	  'use strict';
	
	  function parseInside (txt) {
	    if (options.simplifiedAutoLink) {
	      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
	    }
	    return '<del>' + txt + '</del>';
	  }
	
	  if (options.strikethrough) {
	    text = globals.converter._dispatch('strikethrough.before', text, options, globals);
	    text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (wm, txt) { return parseInside(txt); });
	    text = globals.converter._dispatch('strikethrough.after', text, options, globals);
	  }
	
	  return text;
	});
	
	/**
	 * Strips link definitions from text, stores the URLs and titles in
	 * hash references.
	 * Link defs are in the form: ^[id]: url "optional title"
	 */
	showdown.subParser('stripLinkDefinitions', function (text, options, globals) {
	  'use strict';
	
	  var regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm;
	
	  // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
	  text += '¨0';
	
	  text = text.replace(regex, function (wholeMatch, linkId, url, width, height, blankLines, title) {
	    linkId = linkId.toLowerCase();
	    globals.gUrls[linkId] = showdown.subParser('encodeAmpsAndAngles')(url, options, globals);  // Link IDs are case-insensitive
	
	    if (blankLines) {
	      // Oops, found blank lines, so it's not a title.
	      // Put back the parenthetical statement we stole.
	      return blankLines + title;
	
	    } else {
	      if (title) {
	        globals.gTitles[linkId] = title.replace(/"|'/g, '&quot;');
	      }
	      if (options.parseImgDimensions && width && height) {
	        globals.gDimensions[linkId] = {
	          width:  width,
	          height: height
	        };
	      }
	    }
	    // Completely remove the definition from the text
	    return '';
	  });
	
	  // attacklab: strip sentinel
	  text = text.replace(/¨0/, '');
	
	  return text;
	});
	
	showdown.subParser('tables', function (text, options, globals) {
	  'use strict';
	
	  if (!options.tables) {
	    return text;
	  }
	
	  var tableRgx = /^ {0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|¨0)/gm;
	
	  function parseStyles (sLine) {
	    if (/^:[ \t]*--*$/.test(sLine)) {
	      return ' style="text-align:left;"';
	    } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
	      return ' style="text-align:right;"';
	    } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
	      return ' style="text-align:center;"';
	    } else {
	      return '';
	    }
	  }
	
	  function parseHeaders (header, style) {
	    var id = '';
	    header = header.trim();
	    if (options.tableHeaderId) {
	      id = ' id="' + header.replace(/ /g, '_').toLowerCase() + '"';
	    }
	    header = showdown.subParser('spanGamut')(header, options, globals);
	
	    return '<th' + id + style + '>' + header + '</th>\n';
	  }
	
	  function parseCells (cell, style) {
	    var subText = showdown.subParser('spanGamut')(cell, options, globals);
	    return '<td' + style + '>' + subText + '</td>\n';
	  }
	
	  function buildTable (headers, cells) {
	    var tb = '<table>\n<thead>\n<tr>\n',
	        tblLgn = headers.length;
	
	    for (var i = 0; i < tblLgn; ++i) {
	      tb += headers[i];
	    }
	    tb += '</tr>\n</thead>\n<tbody>\n';
	
	    for (i = 0; i < cells.length; ++i) {
	      tb += '<tr>\n';
	      for (var ii = 0; ii < tblLgn; ++ii) {
	        tb += cells[i][ii];
	      }
	      tb += '</tr>\n';
	    }
	    tb += '</tbody>\n</table>\n';
	    return tb;
	  }
	
	  text = globals.converter._dispatch('tables.before', text, options, globals);
	
	  // find escaped pipe characters
	  text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);
	
	  // parse tables
	  text = text.replace(tableRgx, function (rawTable) {
	
	    var i, tableLines = rawTable.split('\n');
	
	    // strip wrong first and last column if wrapped tables are used
	    for (i = 0; i < tableLines.length; ++i) {
	      if (/^ {0,3}\|/.test(tableLines[i])) {
	        tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, '');
	      }
	      if (/\|[ \t]*$/.test(tableLines[i])) {
	        tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, '');
	      }
	    }
	
	    var rawHeaders = tableLines[0].split('|').map(function (s) { return s.trim();}),
	        rawStyles = tableLines[1].split('|').map(function (s) { return s.trim();}),
	        rawCells = [],
	        headers = [],
	        styles = [],
	        cells = [];
	
	    tableLines.shift();
	    tableLines.shift();
	
	    for (i = 0; i < tableLines.length; ++i) {
	      if (tableLines[i].trim() === '') {
	        continue;
	      }
	      rawCells.push(
	        tableLines[i]
	          .split('|')
	          .map(function (s) {
	            return s.trim();
	          })
	      );
	    }
	
	    if (rawHeaders.length < rawStyles.length) {
	      return rawTable;
	    }
	
	    for (i = 0; i < rawStyles.length; ++i) {
	      styles.push(parseStyles(rawStyles[i]));
	    }
	
	    for (i = 0; i < rawHeaders.length; ++i) {
	      if (showdown.helper.isUndefined(styles[i])) {
	        styles[i] = '';
	      }
	      headers.push(parseHeaders(rawHeaders[i], styles[i]));
	    }
	
	    for (i = 0; i < rawCells.length; ++i) {
	      var row = [];
	      for (var ii = 0; ii < headers.length; ++ii) {
	        if (showdown.helper.isUndefined(rawCells[i][ii])) {
	
	        }
	        row.push(parseCells(rawCells[i][ii], styles[ii]));
	      }
	      cells.push(row);
	    }
	
	    return buildTable(headers, cells);
	  });
	
	  text = globals.converter._dispatch('tables.after', text, options, globals);
	
	  return text;
	});
	
	/**
	 * Swap back in all the special characters we've hidden.
	 */
	showdown.subParser('unescapeSpecialChars', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('unescapeSpecialChars.before', text, options, globals);
	
	  text = text.replace(/¨E(\d+)E/g, function (wholeMatch, m1) {
	    var charCodeToReplace = parseInt(m1);
	    return String.fromCharCode(charCodeToReplace);
	  });
	
	  text = globals.converter._dispatch('unescapeSpecialChars.after', text, options, globals);
	  return text;
	});
	
	var root = this;
	
	// CommonJS/nodeJS Loader
	if (typeof module !== 'undefined' && module.exports) {
	  module.exports = showdown;
	
	// AMD Loader
	} else if (true) {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';
	    return showdown;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	// Regular Browser loader
	} else {
	  root.showdown = showdown;
	}
	}).call(this);
	
	//# sourceMappingURL=showdown.js.map


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const http_1 = __webpack_require__(29);
	let ComparisonCitationService = class ComparisonCitationService {
	    constructor(http) {
	        this.http = http;
	        this.bibEntriesHtml = {};
	        this.bibEntriesInline = {};
	        this.keys = {};
	        this.references = new Array();
	        this.check = false;
	        this.precheck = false;
	        this.ready = false;
	    }
	    sortedReferences() {
	        let values = [];
	        for (let reference of this.references) {
	            let key = reference;
	            let entry = { "html": this.bibEntriesHtml[key] };
	            entry["key"] = key;
	            entry["index"] = this.bibEntriesInline[key];
	            entry["index"] = entry["index"].substr(1, entry["index"].length - 2);
	            values.push(entry);
	        }
	        return values.sort((a, b) => a.index - b.index);
	    }
	    loadCitationData(cd) {
	        this.http.request('citation/output/fbib.json')
	            .subscribe(res => {
	            this.bibEntriesHtml = res.json();
	            if (!this.check && this.precheck) {
	                this.check = true;
	            }
	            else {
	                this.precheck = true;
	            }
	            cd.markForCheck();
	        });
	        this.http.request('citation/output/fkeys.json')
	            .subscribe(res => {
	            this.bibEntriesInline = res.json();
	            if (!this.check && this.precheck) {
	                this.check = true;
	            }
	            else {
	                this.precheck = true;
	            }
	            cd.markForCheck();
	        });
	    }
	    getUsedEntries() {
	        let entries = new Array();
	        for (let key in this.keys) {
	            if (!this.keys.hasOwnProperty(key))
	                continue;
	            entries.push({ key: key, html: this.bibEntriesHtml[this.keys[key]] });
	        }
	        return entries.length > 0 ? entries : [{ key: "emty", html: "" }];
	    }
	    addUsedEntries(entries) {
	        let newEntries = new Array();
	        for (let index in entries) {
	            let entry = entries[index];
	            if (!this.keys[entry]) {
	                newEntries.push(entry);
	                this.keys[entry] = entry;
	            }
	        }
	        if (newEntries.length > 0) {
	            if (this.references) {
	                this.references = this.references.concat(newEntries);
	            }
	            else {
	                this.references = newEntries;
	            }
	        }
	    }
	    getBibEntriesHtml(key) {
	        return this.bibEntriesHtml[key];
	    }
	    getBibEntriesInline(key) {
	        return this.bibEntriesInline[key];
	    }
	};
	ComparisonCitationService = __decorate([
	    core_1.Injectable(), 
	    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	], ComparisonCitationService);
	exports.ComparisonCitationService = ComparisonCitationService;
	var _a;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"pheader\">\n    <h2>{{getHeaderText()}}\n        <template ngFor let-sitem [ngForOf]=\"data?.getPropertyListItems(confServ.comparison?.details.headerLabel)\"\n                  *ngIf=\"confServ.comparison\">\n            <ptooltip [tooltip]=\"getHeaderColumn()?.values[sitem.content].tag\"\n                      [tooltipHtml]=\"sitem.htmlChilds|citation:[citationServ]\" [position]=\"'s'\">\n                <div class=\"{{getHeaderLabel()?.getCls(sitem.content)}} mylabel\">\n                    {{sitem.content}}\n                </div>\n            </ptooltip>\n        </template>\n        <small><a href=\"{{getHeaderUrl()}}\" target=\"_blank\">{{getHeaderUrl()}}</a></small>\n    </h2>\n</div>\n<div class=\"content\" style=\"padding-left:15px; padding-right: 15px;\">\n    <pcard *ngIf=\"confServ.comparison\" heading=\"{{confServ.comparison?.details.bodyMainTitle}}\" style=\"display:block;\">\n        <div class=\"card-content\">\n            <htmlcitationtext [description]=\"getBody()\" [citationServ]=\"citationServ\"\n                              *ngIf=\"citationServ.check\"></htmlcitationtext>\n        </div>\n    </pcard>\n    <template ngFor let-atag [ngForOf]=\"confServ.getBodyAttachmentTags()\" *ngIf=\"confServ.comparison\">\n        <pcard heading=\"{{getTable(atag).name}}\">\n            <p class=\"card-content\">\n                <template ngFor let-sitem [ngForOf]=\"data?.getPropertyListItems(atag)\">\n                    <ptooltip *ngIf=\"!confServ.comparison?.details.tooltipAsText\" [tooltip]=\"getTable(atag)?.values[sitem.content]\"\n                              [tooltipHtml]=\"sitem.htmlChilds|citation:[citationServ]\" [position]=\"'n'\">\n                        <span class=\"{{getTable(atag)?.type?.getCls(sitem.content)}} mylabel\">{{sitem.content}}</span>\n                    </ptooltip>\n                    <div *ngIf=\"confServ.comparison?.details.tooltipAsText\">\n                        <span *ngIf=\"(this.confServ.tableDataSet.getTableData(atag).type.colors | json).length === 21\"\n                              class=\"{{getTable(atag)?.type?.getCls(sitem.content)}} mylabel\">{{sitem.content}}</span>\n                        <span *ngIf=\"(this.confServ.tableDataSet.getTableData(atag).type.colors | json).length !== 21\"\n                              class=\"label mylabel\" [style.background-color]=\"this.confServ.tableDataSet.getTableData(atag).type.colors.getColor(sitem.content)\">{{sitem.content}}</span>\n                        <span class=\"tooltip-text\">\n                        <htmlcitationtext [description]=\"getTable(atag)?.values[sitem.content]\"\n                                          [citationServ]=\"citationServ\"\n                                          *ngIf=\"citationServ.check\"></htmlcitationtext>\n                        <htmlcitationtext [description]=\"sitem.htmlChilds\" [citationServ]=\"citationServ\"\n                                          *ngIf=\"citationServ.check\"></htmlcitationtext>\n                        </span>\n                    </div>\n                </template>\n            </p>\n        </pcard>\n    </template>\n\n    <pcard heading=\"Ratings\" *ngIf=\"data?.getRatings().length > 0\" style=\"display:block\">\n        <div class=\"card-content\">\n            <template ngFor let-item [ngForOf]=\"data?.getRatings()\">\n                <dl>\n                    <dt>\n                        <iicon icon=\"star\">{{item.stars}}</iicon>\n                    </dt>\n                    <dd>\n                        {{item.text}}\n                    </dd>\n                </dl>\n            </template>\n        </div>\n    </pcard>\n</div>\n";

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: block;\n    padding: 0;\n}\n\n.mylabel {\n    margin: 2px;\n    display: inline-block !important;\n    cursor: pointer;\n    font-size: 14px !important;\n    white-space: inherit;\n}\n\n.card-content {\n    padding: 0 16 16 16;\n    position: relative;\n}\n\npcard /deep/ .paper-header {\n    font-size: 18px;\n}\n\n.tooltip-text {\n    display: inline-table;\n}\n\n.tooltip-text /deep/ ul {\n    padding-left: 15px;\n}"

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const comparison_service_1 = __webpack_require__(53);
	const comparison_citation_service_1 = __webpack_require__(55);
	const citation_pipe_1 = __webpack_require__(59);
	let ComparisonFootnoteComponent = class ComparisonFootnoteComponent {
	    constructor(citationPipe, citationServ, compServ) {
	        this.citationPipe = citationPipe;
	        this.citationServ = citationServ;
	        this.compServ = compServ;
	        this.compiled_footnote = "";
	    }
	    compile_footnote(note) {
	        if (!this.compServ.footnotes[note]) {
	            this.compServ.footnotes[note] = {
	                value: this.citationPipe.transform(note, [this.citationServ, true]),
	                index: (this.compServ.findex++ + "r" + Math.random() * 100000).toString().substr(0, 5),
	                count: 1
	            };
	        }
	        else {
	            this.compServ.footnotes[this.footnote].count++;
	        }
	        this.compiled_footnote = "\\footref&#123;" + this.compServ.footnotes[note].index + "&#125;";
	    }
	    ngOnChanges() {
	        this.compile_footnote(this.footnote);
	    }
	    ngOnDestroy() {
	        this.compServ.footnotes[this.footnote].count--;
	        if (this.compServ.footnotes[this.footnote].count == 0) {
	            delete this.compServ.footnotes[this.footnote];
	        }
	    }
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], ComparisonFootnoteComponent.prototype, "footnote", void 0);
	ComparisonFootnoteComponent = __decorate([
	    core_1.Component({
	        selector: 'comparison-footnote',
	        template: '<div [innerHtml]="compiled_footnote|sanitizeHtml"></div>',
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }), 
	    __metadata('design:paramtypes', [(typeof (_a = typeof citation_pipe_1.CitationPipe !== 'undefined' && citation_pipe_1.CitationPipe) === 'function' && _a) || Object, (typeof (_b = typeof comparison_citation_service_1.ComparisonCitationService !== 'undefined' && comparison_citation_service_1.ComparisonCitationService) === 'function' && _b) || Object, (typeof (_c = typeof comparison_service_1.ComparisonService !== 'undefined' && comparison_service_1.ComparisonService) === 'function' && _c) || Object])
	], ComparisonFootnoteComponent);
	exports.ComparisonFootnoteComponent = ComparisonFootnoteComponent;
	var _a, _b, _c;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const util_1 = __webpack_require__(33);
	let CitationPipe = class CitationPipe {
	    transform(value, args = []) {
	        if (util_1.isUndefined(value) || value.length == 0) {
	            return "";
	        }
	        let citServ = args[0];
	        let latex = args[1];
	        let entries = new Array();
	        if (!latex) {
	            value = value.replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => {
	                entries.push(dec);
	                return '<a class="cite-link" href="#' + dec + '">' + citServ.getBibEntriesInline(dec) + '</a>';
	            });
	        }
	        else {
	            value = value.replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => {
	                return '\\cite{' + dec + '}';
	            });
	        }
	        if (entries.length > 0) {
	            citServ.addUsedEntries(entries);
	            citServ.ready = true;
	        }
	        return value;
	    }
	};
	CitationPipe = __decorate([
	    core_1.Pipe({
	        name: 'citation',
	        pure: false
	    }), 
	    __metadata('design:paramtypes', [])
	], CitationPipe);
	exports.CitationPipe = CitationPipe;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const index_1 = __webpack_require__(31);
	const comparison_config_service_1 = __webpack_require__(51);
	const comparison_data_service_1 = __webpack_require__(52);
	const comparison_service_1 = __webpack_require__(53);
	const comparison_citation_service_1 = __webpack_require__(55);
	const VersionInformation_1 = __webpack_require__(61);
	const http_1 = __webpack_require__(29);
	var FileSaver = __webpack_require__(62);
	let ComparisonComponent = class ComparisonComponent {
	    constructor(http, serv, dataServ, confServ, citationServ, cd) {
	        this.http = http;
	        this.serv = serv;
	        this.dataServ = dataServ;
	        this.confServ = confServ;
	        this.citationServ = citationServ;
	        this.cd = cd;
	        this.criteriaSelection = [];
	        this.query = {};
	        this.changed = 0;
	        this.order = new Array();
	        this.orderOption = new Array();
	        this.ready = false;
	        this.versionInformation = new VersionInformation_1.VersionInformation();
	        this.activeRow = new index_1.Data(this.http);
	        this.showTable = false;
	        this.showTableTooltips = true;
	        this.tableTooltipsAsFootnotes = false;
	        this.confServ.loadComparison(this.cd);
	        this.confServ.loadCriteria(this.cd);
	        this.confServ.loadTableData(this.cd);
	        this.confServ.loadDescription(this.cd);
	        this.citationServ.loadCitationData(this.cd);
	    }
	    getVersionInformation() {
	        return this.versionInformation;
	    }
	    criteriaChanged(value, crit) {
	        if (value) {
	            this.query[crit.tag] = new index_1.CriteriaSelection(value, crit);
	        }
	        this.cd.markForCheck();
	        this.change();
	    }
	    showDetails(data) {
	        this.activeRow = data;
	        this.detailsModal.open();
	    }
	    showTableProperties() {
	        this.settingsModal.open();
	    }
	    downloadLatexTable() {
	        let content = this.latexTable.nativeElement.textContent;
	        content = content.substr(content.indexOf('%'), content.length);
	        let blob = new Blob([content], { type: 'plain/text' });
	        FileSaver.saveAs(blob, "latextable.tex");
	        return window.URL.createObjectURL(blob);
	    }
	    previewLatexTable(show) {
	        if (show) {
	            this.latexTable.nativeElement.classList.remove("ltable");
	        }
	        else {
	            this.latexTable.nativeElement.classList.add("ltable");
	        }
	    }
	    displayReferences() {
	        if (this.citationServ.check && this.citationServ.references.length > 0 && !this.ready) {
	            setTimeout(() => {
	                this.ready = true;
	            }, 1000);
	        }
	        return this.ready;
	        ;
	    }
	    change() {
	        if (this.changed == 1) {
	            this.changed = 0;
	        }
	        else {
	            this.changed = 1;
	        }
	    }
	    changeDisplayTemplate() {
	        if (this.confServ.comparison) {
	            this.confServ.comparison.displaytemplate = !this.confServ.comparison.displaytemplate;
	        }
	        this.change();
	    }
	    changeDisplayAll() {
	        if (this.confServ.comparison) {
	            this.confServ.comparison.displayall = !this.confServ.comparison.displayall;
	        }
	        this.change();
	    }
	};
	__decorate([
	    core_1.ViewChild('details'), 
	    __metadata('design:type', Object)
	], ComparisonComponent.prototype, "detailsModal", void 0);
	__decorate([
	    core_1.ViewChild('settings'), 
	    __metadata('design:type', Object)
	], ComparisonComponent.prototype, "settingsModal", void 0);
	__decorate([
	    core_1.ViewChild('latextable'), 
	    __metadata('design:type', (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object)
	], ComparisonComponent.prototype, "latexTable", void 0);
	ComparisonComponent = __decorate([
	    core_1.Component({
	        selector: 'comparison',
	        template: __webpack_require__(65),
	        styles: [__webpack_require__(66)]
	    }), 
	    __metadata('design:paramtypes', [(typeof (_b = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _b) || Object, (typeof (_c = typeof comparison_service_1.ComparisonService !== 'undefined' && comparison_service_1.ComparisonService) === 'function' && _c) || Object, (typeof (_d = typeof comparison_data_service_1.ComparisonDataService !== 'undefined' && comparison_data_service_1.ComparisonDataService) === 'function' && _d) || Object, (typeof (_e = typeof comparison_config_service_1.ComparisonConfigService !== 'undefined' && comparison_config_service_1.ComparisonConfigService) === 'function' && _e) || Object, (typeof (_f = typeof comparison_citation_service_1.ComparisonCitationService !== 'undefined' && comparison_citation_service_1.ComparisonCitationService) === 'function' && _f) || Object, (typeof (_g = typeof core_1.ChangeDetectorRef !== 'undefined' && core_1.ChangeDetectorRef) === 'function' && _g) || Object])
	], ComparisonComponent);
	exports.ComparisonComponent = ComparisonComponent;
	var _a, _b, _c, _d, _e, _f, _g;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	"use strict";
	class VersionInformation {
	    constructor() {
	        this.date = "2017-11-07";
	        this.commit = "d95e1ed197cc21c7fa0a646d50532818ef65eb4a";
	        this.link = "https://github.com/ultimate-comparisons/ultimate-comparison-BASE/commit/d95e1ed197cc21c7fa0a646d50532818ef65eb4a";
	    }
	}
	exports.VersionInformation = VersionInformation;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
	 * A saveAs() FileSaver implementation.
	 * 1.3.2
	 * 2016-06-16 18:25:19
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: MIT
	 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
	 */
	
	/*global self */
	/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */
	
	/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
	
	var saveAs = saveAs || (function(view) {
		"use strict";
		// IE <10 is explicitly unsupported
		if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
			return;
		}
		var
			  doc = view.document
			  // only get URL when necessary in case Blob.js hasn't overridden it yet
			, get_URL = function() {
				return view.URL || view.webkitURL || view;
			}
			, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
			, can_use_save_link = "download" in save_link
			, click = function(node) {
				var event = new MouseEvent("click");
				node.dispatchEvent(event);
			}
			, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
			, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
			, throw_outside = function(ex) {
				(view.setImmediate || view.setTimeout)(function() {
					throw ex;
				}, 0);
			}
			, force_saveable_type = "application/octet-stream"
			// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
			, arbitrary_revoke_timeout = 1000 * 40 // in ms
			, revoke = function(file) {
				var revoker = function() {
					if (typeof file === "string") { // file is an object URL
						get_URL().revokeObjectURL(file);
					} else { // file is a File
						file.remove();
					}
				};
				setTimeout(revoker, arbitrary_revoke_timeout);
			}
			, dispatch = function(filesaver, event_types, event) {
				event_types = [].concat(event_types);
				var i = event_types.length;
				while (i--) {
					var listener = filesaver["on" + event_types[i]];
					if (typeof listener === "function") {
						try {
							listener.call(filesaver, event || filesaver);
						} catch (ex) {
							throw_outside(ex);
						}
					}
				}
			}
			, auto_bom = function(blob) {
				// prepend BOM for UTF-8 XML and text/* types (including HTML)
				// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
				if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
					return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
				}
				return blob;
			}
			, FileSaver = function(blob, name, no_auto_bom) {
				if (!no_auto_bom) {
					blob = auto_bom(blob);
				}
				// First try a.download, then web filesystem, then object URLs
				var
					  filesaver = this
					, type = blob.type
					, force = type === force_saveable_type
					, object_url
					, dispatch_all = function() {
						dispatch(filesaver, "writestart progress write writeend".split(" "));
					}
					// on any filesys errors revert to saving with object URLs
					, fs_error = function() {
						if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
							// Safari doesn't allow downloading of blob urls
							var reader = new FileReader();
							reader.onloadend = function() {
								var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
								var popup = view.open(url, '_blank');
								if(!popup) view.location.href = url;
								url=undefined; // release reference before dispatching
								filesaver.readyState = filesaver.DONE;
								dispatch_all();
							};
							reader.readAsDataURL(blob);
							filesaver.readyState = filesaver.INIT;
							return;
						}
						// don't create more object URLs than needed
						if (!object_url) {
							object_url = get_URL().createObjectURL(blob);
						}
						if (force) {
							view.location.href = object_url;
						} else {
							var opened = view.open(object_url, "_blank");
							if (!opened) {
								// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
								view.location.href = object_url;
							}
						}
						filesaver.readyState = filesaver.DONE;
						dispatch_all();
						revoke(object_url);
					}
				;
				filesaver.readyState = filesaver.INIT;
	
				if (can_use_save_link) {
					object_url = get_URL().createObjectURL(blob);
					setTimeout(function() {
						save_link.href = object_url;
						save_link.download = name;
						click(save_link);
						dispatch_all();
						revoke(object_url);
						filesaver.readyState = filesaver.DONE;
					});
					return;
				}
	
				fs_error();
			}
			, FS_proto = FileSaver.prototype
			, saveAs = function(blob, name, no_auto_bom) {
				return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
			}
		;
		// IE 10+ (native saveAs)
		if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
			return function(blob, name, no_auto_bom) {
				name = name || blob.name || "download";
	
				if (!no_auto_bom) {
					blob = auto_bom(blob);
				}
				return navigator.msSaveOrOpenBlob(blob, name);
			};
		}
	
		FS_proto.abort = function(){};
		FS_proto.readyState = FS_proto.INIT = 0;
		FS_proto.WRITING = 1;
		FS_proto.DONE = 2;
	
		FS_proto.error =
		FS_proto.onwritestart =
		FS_proto.onprogress =
		FS_proto.onwrite =
		FS_proto.onabort =
		FS_proto.onerror =
		FS_proto.onwriteend =
			null;
	
		return saveAs;
	}(
		   typeof self !== "undefined" && self
		|| typeof window !== "undefined" && window
		|| this.content
	));
	// `self` is undefined in Firefox for Android content script context
	// while `this` is nsIContentFrameMessageManager
	// with an attribute `content` that corresponds to the window
	
	if (typeof module !== "undefined" && module.exports) {
	  module.exports.saveAs = saveAs;
	} else if (("function" !== "undefined" && __webpack_require__(63) !== null) && (__webpack_require__(64) !== null)) {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return saveAs;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	module.exports = "<a href=\"{{confServ.comparison?.repository}}\" class=\"github-corner\">\n    <svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\"\n         style=\"cursor:pointer; fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;\">\n        <path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path>\n        <path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\"\n              fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path>\n        <path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\"\n              fill=\"currentColor\" class=\"octo-body\"></path>\n    </svg>\n</a>\n\n<div class=\"container\">\n    <div class=\"page-header\">\n        <h1>{{confServ.comparison?.title}}\n            <small>{{confServ.comparison?.subtitle}}</small>\n        </h1>\n    </div>\n\n    <pcard class=\"large-paper-card\">\n        <div class=\"card-content\">\n            <htmlcitationtext [description]=\"confServ.description\" [citationServ]=\"citationServ\"\n                              *ngIf=\"citationServ.check\"></htmlcitationtext>\n        </div>\n    </pcard>\n\n    <pcard [heading]=\"confServ.comparison?.selecttitle\" class=\"large-paper-card\">\n        <div class=\"card-content\">\n            <template ngFor let-crit [ngForOf]=\"confServ.criteriaSet?.getCriteriaArray()\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <ptooltip [tooltip]=\"crit.description\">\n                            <label>\n                                {{crit.name}}\n                                <span class=\"search-indicator\">({{crit.getSearchIndicator()}})</span>\n                            </label>\n                        </ptooltip><br>\n                        <select2 [options]=\"crit.values\" [placeholder]=\"crit.placeholder\"\n                                 (result)=\"criteriaChanged($event, crit)\" *ngIf=\"!crit.range_search\"></select2>\n                        <input type=\"text\" [placeholder]=\"crit.placeholder\" [style.width]=\"'100%'\" class=\"range-search\"\n                               (keyup)=\"criteriaChanged($event, crit)\" *ngIf=\"crit.range_search\">\n                    </div>\n                </div>\n            </template>\n        </div>\n    </pcard>\n\n    <pcard heading=\"{{confServ.comparison?.tabletitle}}\" class=\"super-large-paper-card\">\n        <div class=\"card-content\">\n            <generictable [display]=\"confServ.tableDataSet\" [settings]=\"'true'\"\n                          [columns]=\"confServ.tableDataSet.getTableDataArray()\" [data]=\"dataServ.data\" [query]=\"query\"\n                          [displayTemplate]=\"confServ.comparison.displaytemplate\" [citationServ]=\"citationServ\"\n                          (settingsCallback)=\"showTableProperties()\" (showDetails)=\"showDetails($event)\"\n                          [(order)]=\"order\" [(orderOption)]=\"orderOption\"\n                          *ngIf=\"citationServ.check&&confServ.tableDataSet.ready\"\n                          [changeNum]=\"dataServ.getLength()+changed\"></generictable>\n        </div>\n    </pcard>\n\n    <pcard heading=\"References\" class=\"large-paper-card\" [hidden]=\"this.citationServ.references.length == 0\">\n        <div class=\"card-content\">\n            <referencestable [changeNum]=\"dataServ.getLength()+changed\" [citationServ]=\"citationServ\"></referencestable>\n        </div>\n    </pcard>\n\n</div>\n\n<pdialog id=\"settings\" #details>\n    <comparison-details [data]=\"activeRow\" *ngIf=\"detailsModal?.opened\"></comparison-details>\n</pdialog>\n\n<pdialog id=\"settings\" #settings>\n    <div class=\"pheader\">\n        <h2>Table Settings</h2>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"col-md-6\">\n            <h5>Select Columns...</h5>\n            <pitem>\n                <pcheckbox [checked]=\"confServ.displayAll\" (checkedChange)=\"confServ.displayAllChange($event, this)\"\n                           [label]=\"confServ.displayAllName\"></pcheckbox>\n            </pitem>\n            <template ngFor let-column [ngForOf]=\"confServ.tableDataSet?.getTableDataArray()\">\n                <pitem>\n                    <pcheckbox [checked]=column.display (checkedChange)=\"confServ.displayChange(column,this)\"\n                               [label]=\"column.name\"></pcheckbox>\n                </pitem>\n            </template>\n        </div>\n        <div class=\"col-md-6\">\n            <h5>Other Settings...</h5>\n            <div *ngIf=\"confServ.comparison\">\n                <pitem>\n                    <pcheckbox [checked]=\"confServ.comparison.displaytemplate\" (checkedChange)=\"changeDisplayTemplate()\"\n                               [label]=\"'Display Template'\"></pcheckbox>\n                </pitem>\n                <pitem>\n                    <pcheckbox [checked]=\"confServ.comparison.displayall\" (checkedChange)=\"changeDisplayAll()\"\n                               [label]=\"'Show Uncompared'\"></pcheckbox>\n                </pitem>\n                <h6>Latex</h6>\n                <pitem>\n                    <pbutton (click)=\"downloadLatexTable()\">Download Table</pbutton>\n                </pitem>\n                <pitem>\n                    <pcheckbox [(checked)]=\"showTable\" [label]=\"'Display Latex Table'\"></pcheckbox>\n                </pitem>\n                <pitem>\n                    <pcheckbox [(checked)]=\"showTableTooltips\" [label]=\"'Show Tooltips'\"></pcheckbox>\n                </pitem>\n                <pitem>\n                    <pcheckbox [(checked)]=\"tableTooltipsAsFootnotes\"\n                               [label]=\"'Display tooltip text in Footnotes'\"></pcheckbox>\n                </pitem>\n                <h6>Details page</h6>\n                <pitem>\n                    <pcheckbox [(checked)]=\"confServ.comparison?.details.tooltipAsText\"\n                               [label]=\"'Display tooltip text next to labels in the details page'\"></pcheckbox>\n                </pitem>\n            </div>\n        </div>\n    </div>\n</pdialog>\n\n\n<div *ngIf=\"showTable\" class=\"container\" #latextable>\n    <!-- @formatter:off -->\n<pcard heading=\"Latex Table\" class=\"large-paper-card\"><div class=\"card-content\" style=\"overflow: auto;\"><!--\n-->%\\usepackage&#123;calc&#125;<br/>\n%\\usepackage&#123;booktabs&#125;<br/>\n%\\usepackage&#123;url&#125;<br/>\n%\\usepackage&#123;hyperref&#125;<br/>\n%\\usepackage&#123;footnote&#125;<br/>\n%\\usepackage&#123;scrextend&#125;<br/>\n%\\makesavenoteenv&#123;tabular&#125;<br/>\n%\\makesavenoteenv&#123;tabule&#125;<br/>\n\\begin&#123;tabular&#125;&#123;&#64;&#123;&#125; <template ngFor let-column [ngForOf]=\"confServ.tableDataSet?.getTableDataArray() | tablefilter\">p&#123;\\linewidth/{{(confServ.tableDataSet?.getTableDataArray() | tablefilter).length}}&#125; </template>&#64;&#123;&#125;&#125;<br/>\n\\toprule<br/>\n<template ngFor let-column [ngForOf]=\"confServ.tableDataSet?.getTableDataArray() | tablefilter\" let-last=\"last\">{{column.name}} <!--\n    --><template [ngIf]=\"!last\">&#38; </template><!--\n    --><template [ngIf]=\"last\">\\\\<br/></template>\n</template>\\midrule<br/>\n<!-- iterate over data rows\n--><template ngFor let-dat [ngForOf]=\"dataServ.data | orderBy: [order,orderOption] | datafilter: [query,confServ.comparison?.displaytemplate]\"><!--\n    iterate over data columns \n    --><template ngFor let-column [ngForOf]=\"confServ.tableDataSet?.getTableDataArray() | tablefilter\" let-last=\"last\"><!--\n        print url \n        --><template [ngIf]=\"column.type?.tag==='url'\">{{dat.getProperty(column.tag).text}}</template><!--\n        print text \n        --><template [ngIf]=\"column.type?.tag==='text'\"><div [innerHtml]=\"dat.getProperty(column.tag).text|citation:[citationServ, true]|sanitizeHtml\"></div></template><!--\n        print labels \n        --><template [ngIf]=\"column.type?.tag==='label'\"><!--\n            iterate over labels \n            --><template ngFor let-sitem [ngForOf]=\"dat.getPropertyListItems(column.tag)\" let-lastItem=\"last\" *ngIf=\"column.type?.labelCls\"><!--\n                print label \n                -->{{sitem.content}}<!--\n                    tooltip\n                    --><template [ngIf]=\"sitem.latexChilds\"><!--\n                        print tooltips?\n                        --><template [ngIf]=\"showTableTooltips\"><!--\n                            print tooltips in footnotes\n                            --><comparison-footnote [footnote]=\"sitem.latexChilds\" *ngIf=\"tableTooltipsAsFootnotes\"></comparison-footnote><!--\n                            print tooltips after labels    \n                            --><div [innerHtml]=\"sitem.latexChilds|citation: [this.citationServ, true]|sanitizeHtml\"></div><!--\n                        --></template><!-- \n                    --></template><!-- \n                    label seperator --><template [ngIf]=\"!lastItem\">, </template><!--\n            --></template><!--\n        --></template><template [ngIf]=\"!last\"> &#38; </template><template [ngIf]=\"last\">\\\\<br/></template><!--\n    --></template>\n</template>\\bottomrule<br/>\n\\end&#123;tabular&#125;<br/>\n<template [ngIf]=\"tableTooltipsAsFootnotes\">\n\\newcommand\\snum&#123;0&#125;\n<template ngFor let-item [ngForOf]=\"serv.getFootnotes()\"><div [innerHtml]=\"item|sanitizeHtml\"></div>\n</template></template></div></pcard>\n    <!-- @formatter:on -->\n</div>\n\n<div class=\"footer\">\n    <div class=\"container\">\n        This is an <a href=\"http://ultimate-comparisons.github.io/\">Ultimate Comparison</a> | content licensed under <a\n            rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/4.0/\"><img\n            alt=\"Creative Commons License CC-BY-SA 4.0\" style=\"border-width:0\"\n            src=\"https://i.creativecommons.org/l/by-sa/4.0/88x31.png\"/></a> | <a [href]=\"getVersionInformation()?.link\">{{getVersionInformation()?.commit?.substr(0, 8) + \" (\" + (getVersionInformation()?.date | date: (\"yyyy-MM-dd\")) + \")\"}}</a>\n    </div>\n</div>";

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	module.exports = "comparison {\n    min-height: 100%;\n    position: relative;\n    display: block;\n}\n\n.description > :first-child {\n    margin-top: 0;\n}\n\n.description > :last-child {\n    margin-bottom: 0;\n}\n\n.card-content {\n    padding: 16px;\n    position: relative;\n}\n\n.footer {\n    position: relative;\n    bottom: 0;\n    width: 100%;\n    height: 50px;\n    background-color: #f5f5f5;\n}\n\n.footer > .container {\n    padding: 10px;\n}\n\npdialog {\n    z-index: 5000;\n}\n\n.floatThead-container {\n    z-index: 3000;\n}\n\n.ltable {\n    display: none;\n}\n\n.large-paper-card {\n    width: 100%;\n    margin: 0 0 20 0;\n    padding-bottom: 0px;\n}\n\n.super-large-paper-card {\n    min-width: 100%;\n    margin: 0 0 20 0;\n    padding-bottom: 0px;\n}\n\n/* github corner */\n.github-corner {\n    z-index: 1000;\n}\n\n.github-corner svg {\n    z-index: 999;\n}\n\n.github-corner:hover .octo-arm {\n    animation: octocat-wave 560ms ease-in-out;\n}\n\n@keyframes octocat-wave {\n    0%,\n    100% {\n        transform: rotate(0);\n    }\n    20%,\n    60% {\n        transform: rotate(-25deg);\n    }\n    40%,\n    80% {\n        transform: rotate(10deg);\n    }\n}\n\n@media (max-width: 500px) {\n    .github-corner:hover .octo-arm {\n        animation: none;\n    }\n\n    .github-corner .octo-arm {\n        animation: octocat-wave 560ms ease-in-out;\n    }\n}\n\n.search-indicator {\n    color: rgba(255, 0, 0, 0.52);\n    font-size: 8pt;\n    opacity: 80;\n}\n\n.range-search {\n    border: 0px !important;\n    border-bottom: 1px solid #aaa !important;\n    border-radius: 0px !important;\n    margin-top: 8px;\n}\n\n.range-search:focus {\n    outline-width: 0;\n}"

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(21);
	const data_pipe_1 = __webpack_require__(68);
	const table_pipe_1 = __webpack_require__(69);
	const orderby_pipe_1 = __webpack_require__(70);
	const citation_pipe_1 = __webpack_require__(59);
	const sanitizer_pipe_1 = __webpack_require__(71);
	const attribute_pipe_1 = __webpack_require__(72);
	let PipesModule = class PipesModule {
	};
	PipesModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule
	        ],
	        exports: [
	            data_pipe_1.DataPipe,
	            table_pipe_1.TablePipe,
	            orderby_pipe_1.OrderByPipe,
	            citation_pipe_1.CitationPipe,
	            sanitizer_pipe_1.SanitizerPipe,
	            attribute_pipe_1.AttributePipe
	        ],
	        declarations: [
	            data_pipe_1.DataPipe,
	            table_pipe_1.TablePipe,
	            orderby_pipe_1.OrderByPipe,
	            citation_pipe_1.CitationPipe,
	            sanitizer_pipe_1.SanitizerPipe,
	            attribute_pipe_1.AttributePipe
	        ],
	        providers: [
	            data_pipe_1.DataPipe,
	            table_pipe_1.TablePipe,
	            orderby_pipe_1.OrderByPipe,
	            citation_pipe_1.CitationPipe,
	            sanitizer_pipe_1.SanitizerPipe,
	            attribute_pipe_1.AttributePipe
	        ]
	    }), 
	    __metadata('design:paramtypes', [])
	], PipesModule);
	exports.PipesModule = PipesModule;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	let DataPipe = class DataPipe {
	    transform(value, args = []) {
	        this.query = args[0];
	        if (!this.query) {
	            return value;
	        }
	        return value.filter((item) => {
	            if (item.tag.trim() === "Template" && !args[1])
	                return false;
	            for (let key in this.query) {
	                if (!this.query.hasOwnProperty(key))
	                    continue;
	                let cont = this.query[key];
	                let values = item.getPropertyTags(cont.criteria.tag);
	                if (cont.criteria.range_search) {
	                    let value = cont.values.target.value;
	                    value = value.replace(/ /g, "");
	                    if (value.length === 0) {
	                        return true;
	                    }
	                    const tokens = value.split(",");
	                    for (const token of tokens) {
	                        if (token.lastIndexOf("-") >= 1) {
	                            if (this.rangeSearch(token, item.properties[cont.criteria.tag].list)) {
	                                return true;
	                            }
	                        }
	                        else {
	                            if (this.numberSearch(Number.parseFloat(token), item.properties[cont.criteria.tag].list)) {
	                                return true;
	                            }
	                        }
	                    }
	                    return false;
	                }
	                else {
	                    if (!((cont.values.length < 1) || (this.intersect(cont.values, values, cont.criteria.and_search)))) {
	                        return false;
	                    }
	                }
	            }
	            return true;
	        });
	    }
	    intersect(small_set, big_set, all) {
	        var inter = all;
	        if (!big_set) {
	            return false;
	        }
	        if (all) {
	            // all elements from the small_set must be in the big_set
	            small_set.every(element => {
	                if (big_set.indexOf(element) < 0) {
	                    inter = false;
	                    return false;
	                }
	                return true;
	            });
	        }
	        else {
	            // at least one elmenet must fit
	            small_set.some(element => {
	                if (big_set.indexOf(element) > -1) {
	                    inter = true;
	                    return true;
	                }
	            });
	        }
	        if (!inter && small_set.length == 0) {
	            return true;
	        }
	        return inter;
	    }
	    rangeSearch(range, list) {
	        let negativeMin = false;
	        if (range.startsWith("-")) {
	            negativeMin = true;
	            range = range.substr(1);
	        }
	        let negativeMax = false;
	        if (range.indexOf("--") + 1 == range.lastIndexOf("-")) {
	            negativeMax = true;
	        }
	        const rValues = range.split(/-/).filter(el => el.length !== 0);
	        if (rValues.length < 2) {
	            return this.numberSearch(Number.parseFloat(rValues[0]), list);
	        }
	        rValues[1] = rValues[rValues.length - 1];
	        let min = Number.parseFloat(rValues[0]);
	        if (negativeMin) {
	            min *= -1;
	        }
	        let max = Number.parseFloat(rValues[1]);
	        if (negativeMax) {
	            max *= -1;
	        }
	        if (max < min) {
	            const t = max;
	            max = min;
	            min = t;
	        }
	        for (const item of list) {
	            const n = Number.parseFloat(item.content);
	            if (min <= n && n <= max) {
	                return true;
	            }
	        }
	        return false;
	    }
	    numberSearch(number, list) {
	        if (isNaN(number)) {
	            return false;
	        }
	        for (let item of list) {
	            if (Number.parseFloat(item.content) === number) {
	                return true;
	            }
	        }
	        return false;
	    }
	};
	DataPipe = __decorate([
	    core_1.Pipe({
	        name: 'datafilter',
	        pure: false
	    }), 
	    __metadata('design:paramtypes', [])
	], DataPipe);
	exports.DataPipe = DataPipe;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	let TablePipe = class TablePipe {
	    transform(value, args) {
	        return value.filter((item) => item.display);
	    }
	};
	TablePipe = __decorate([
	    core_1.Pipe({
	        name: 'tablefilter',
	        pure: false
	    }), 
	    __metadata('design:paramtypes', [])
	], TablePipe);
	exports.TablePipe = TablePipe;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	let OrderByPipe_1 = class OrderByPipe {
	    static _comparator(a, b) {
	        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
	            if (a.toLowerCase() < b.toLowerCase())
	                return -1;
	            if (a.toLowerCase() > b.toLowerCase())
	                return 1;
	        }
	        else {
	            if (parseFloat(a) < parseFloat(b))
	                return -1;
	            if (parseFloat(a) > parseFloat(b))
	                return 1;
	        }
	        return 0;
	    }
	    transform(value, args = []) {
	        this.params = { value: args[0], option: args[1] };
	        return value.sort((a, b) => {
	            for (let i = 0; i < this.params.value.length; i++) {
	                if (this.params.option[i] == 0)
	                    continue;
	                let desc = this.params.option[i] == -1;
	                if (a.properties[this.params.value[i]] === undefined && b.properties[this.params.value[i]] === undefined) {
	                    if (a[this.params.value[i]] === undefined && b[this.params.value[i]] === undefined) {
	                        return 0;
	                    }
	                }
	                else if (a.properties[this.params.value[i]] === undefined) {
	                    // a lacks the attribute => it is always below the others
	                    return 1;
	                }
	                else if (b.properties[this.params.value[i]] === undefined) {
	                    // b lacks the attribute => it is always below the others
	                    return -1;
	                }
	                let pA = a[this.params.value[i]] ? a[this.params.value[i]] : a.properties[this.params.value[i]].plain;
	                let pB = b[this.params.value[i]] ? b[this.params.value[i]] : b.properties[this.params.value[i]].plain;
	                let comparison = !desc ? OrderByPipe_1._comparator(pA, pB) : -OrderByPipe_1._comparator(pA, pB);
	                if (comparison != 0)
	                    return comparison;
	            }
	            return 0;
	        });
	    }
	};
	let OrderByPipe = OrderByPipe_1;
	OrderByPipe = OrderByPipe_1 = __decorate([
	    core_1.Pipe({
	        name: 'orderBy',
	        pure: false
	    }), 
	    __metadata('design:paramtypes', [])
	], OrderByPipe);
	exports.OrderByPipe = OrderByPipe;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(21);
	let SanitizerPipe = class SanitizerPipe {
	    constructor(_sanitizer) {
	        this._sanitizer = _sanitizer;
	    }
	    transform(v) {
	        let html = this._sanitizer.bypassSecurityTrustHtml(v);
	        if (html.hasOwnProperty("changingThisBreaksApplicationSecurity") && /^<p>\d+\./.test(html["changingThisBreaksApplicationSecurity"])) {
	            html["changingThisBreaksApplicationSecurity"] = "<p>" + html["changingThisBreaksApplicationSecurity"].substr(html["changingThisBreaksApplicationSecurity"].indexOf('.') + 1);
	        }
	        return html;
	    }
	};
	SanitizerPipe = __decorate([
	    core_1.Pipe({
	        name: 'sanitizeHtml',
	        pure: false
	    }), 
	    __metadata('design:paramtypes', [(typeof (_a = typeof platform_browser_1.DomSanitizer !== 'undefined' && platform_browser_1.DomSanitizer) === 'function' && _a) || Object])
	], SanitizerPipe);
	exports.SanitizerPipe = SanitizerPipe;
	var _a;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const util_1 = __webpack_require__(33);
	let AttributePipe = class AttributePipe {
	    transform(values, ...args) {
	        const tdata = args[0][0];
	        const mult = tdata.order === 'asc' ? 1 : -1;
	        let weightFound = true;
	        for (let key in tdata.values) {
	            weightFound = weightFound && !util_1.isNullOrUndefined(tdata.values[key].weight);
	        }
	        if (!weightFound) {
	            return this.sortAlphabetically(values, mult);
	        }
	        return values.sort((o1, o2) => {
	            let w1, w2;
	            for (let key in tdata.values) {
	                if (o1["content"] === key) {
	                    w1 = tdata.values[key].weight;
	                }
	                if (o2["content"] === key) {
	                    w2 = tdata.values[key].weight;
	                }
	            }
	            return mult * (w1 - w2);
	        });
	    }
	    sortAlphabetically(values, mult) {
	        return values.sort((o1, o2) => {
	            return mult * o1.content.localeCompare(o2.content);
	        });
	    }
	};
	AttributePipe = __decorate([
	    core_1.Pipe({
	        name: 'orderAttributes',
	        pure: false
	    }), 
	    __metadata('design:paramtypes', [])
	], AttributePipe);
	exports.AttributePipe = AttributePipe;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(21);
	const angular2_select_1 = __webpack_require__(74);
	const select2_component_1 = __webpack_require__(89);
	let InputModule = class InputModule {
	};
	InputModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            angular2_select_1.SelectModule
	        ],
	        exports: [
	            select2_component_1.Select2Component
	        ],
	        declarations: [
	            select2_component_1.Select2Component
	        ],
	        providers: [],
	        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
	    }), 
	    __metadata('design:paramtypes', [])
	], InputModule);
	exports.InputModule = InputModule;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(75));


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var forms_1 = __webpack_require__(76);
	var select_component_1 = __webpack_require__(80);
	var select_dropdown_component_1 = __webpack_require__(86);
	var SelectModule = (function () {
	    function SelectModule() {
	    }
	    SelectModule.decorators = [
	        { type: core_1.NgModule, args: [{
	                    declarations: [
	                        select_component_1.SelectComponent,
	                        select_dropdown_component_1.SelectDropdownComponent
	                    ],
	                    exports: [
	                        select_component_1.SelectComponent
	                    ],
	                    imports: [
	                        common_1.CommonModule,
	                        forms_1.FormsModule
	                    ]
	                },] },
	    ];
	    /** @nocollapse */
	    SelectModule.ctorParameters = function () { return []; };
	    return SelectModule;
	}());
	exports.SelectModule = SelectModule;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v2.3.1
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(3), __webpack_require__(77), __webpack_require__(4), __webpack_require__(5), __webpack_require__(78)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
	}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     *  Base class for control directives.
	      * *
	      * Only used internally in the forms module.
	      * *
	     * @abstract
	     */
	    var AbstractControlDirective = (function () {
	        function AbstractControlDirective() {
	        }
	        Object.defineProperty(AbstractControlDirective.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { throw new Error('unimplemented'); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "value", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.value : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.valid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.invalid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.pending : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.errors : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.pristine : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.dirty : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.touched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.untouched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.disabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.enabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.statusChanges : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.valueChanges : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        AbstractControlDirective.prototype.reset = function (value) {
	            if (value === void 0) { value = undefined; }
	            if (this.control)
	                this.control.reset(value);
	        };
	        /**
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControlDirective.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return this.control ? this.control.hasError(errorCode, path) : false;
	        };
	        /**
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControlDirective.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return this.control ? this.control.getError(errorCode, path) : null;
	        };
	        return AbstractControlDirective;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     *  A directive that contains multiple {@link NgControl}s.
	      * *
	      * Only used by the forms module.
	      * *
	     */
	    var ControlContainer = (function (_super) {
	        __extends$1(ControlContainer, _super);
	        function ControlContainer() {
	            _super.apply(this, arguments);
	        }
	        Object.defineProperty(ControlContainer.prototype, "formDirective", {
	            /**
	             *  Get the form to which this container belongs.
	             * @return {?}
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ControlContainer.prototype, "path", {
	            /**
	             *  Get the path to this container.
	             * @return {?}
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return ControlContainer;
	    }(AbstractControlDirective));
	
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isPresent(obj) {
	        return obj != null;
	    }
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isBlank(obj) {
	        return obj == null;
	    }
	    /**
	     * @param {?} a
	     * @param {?} b
	     * @return {?}
	     */
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    /**
	     * @param {?} o
	     * @return {?}
	     */
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	
	    /**
	     *  Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        /**
	         * @param {?} m1
	         * @param {?} m2
	         * @return {?}
	         */
	        StringMapWrapper.merge = function (m1, m2) {
	            var /** @type {?} */ m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        /**
	         * @param {?} m1
	         * @param {?} m2
	         * @return {?}
	         */
	        StringMapWrapper.equals = function (m1, m2) {
	            var /** @type {?} */ k1 = Object.keys(m1);
	            var /** @type {?} */ k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var /** @type {?} */ i = 0; i < k1.length; i++) {
	                var /** @type {?} */ key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        /**
	         * @param {?} arr
	         * @param {?} condition
	         * @return {?}
	         */
	        ListWrapper.findLast = function (arr, condition) {
	            for (var /** @type {?} */ i = arr.length - 1; i >= 0; i--) {
	                if (condition(arr[i])) {
	                    return arr[i];
	                }
	            }
	            return null;
	        };
	        /**
	         * @param {?} list
	         * @param {?} items
	         * @return {?}
	         */
	        ListWrapper.removeAll = function (list, items) {
	            for (var /** @type {?} */ i = 0; i < items.length; ++i) {
	                var /** @type {?} */ index = list.indexOf(items[i]);
	                if (index > -1) {
	                    list.splice(index, 1);
	                }
	            }
	        };
	        /**
	         * @param {?} list
	         * @param {?} el
	         * @return {?}
	         */
	        ListWrapper.remove = function (list, el) {
	            var /** @type {?} */ index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        /**
	         * @param {?} a
	         * @param {?} b
	         * @return {?}
	         */
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var /** @type {?} */ i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        /**
	         * @param {?} list
	         * @return {?}
	         */
	        ListWrapper.flatten = function (list) {
	            return list.reduce(function (flat, item) {
	                var /** @type {?} */ flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
	                return ((flat)).concat(flatItem);
	            }, []);
	        };
	        return ListWrapper;
	    }());
	
	    var /** @type {?} */ isPromise = _angular_core.__core_private__.isPromise;
	
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    function isEmptyInputValue(value) {
	        return value == null || typeof value === 'string' && value.length === 0;
	    }
	    /**
	     * Providers for validators to be used for {@link FormControl}s in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * ### Example
	     *
	     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	     * @stable
	     */
	    var /** @type {?} */ NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
	    /**
	     * Providers for asynchronous validators to be used for {@link FormControl}s
	     * in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * See {@link NG_VALIDATORS} for more details.
	     *
	     * @stable
	     */
	    var /** @type {?} */ NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
	    /**
	     *  Provides a set of validators used by form controls.
	      * *
	      * A validator is a function that processes a {@link FormControl} or collection of
	      * controls and returns a map of errors. A null map means that validation has passed.
	      * *
	      * ### Example
	      * *
	      * ```typescript
	      * var loginControl = new FormControl("", Validators.required)
	      * ```
	      * *
	     */
	    var Validators = (function () {
	        function Validators() {
	        }
	        /**
	         *  Validator that requires controls to have a non-empty value.
	         * @param {?} control
	         * @return {?}
	         */
	        Validators.required = function (control) {
	            return isEmptyInputValue(control.value) ? { 'required': true } : null;
	        };
	        /**
	         *  Validator that requires control value to be true.
	         * @param {?} control
	         * @return {?}
	         */
	        Validators.requiredTrue = function (control) {
	            return control.value === true ? null : { 'required': true };
	        };
	        /**
	         *  Validator that requires controls to have a value of a minimum length.
	         * @param {?} minLength
	         * @return {?}
	         */
	        Validators.minLength = function (minLength) {
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var /** @type {?} */ length = control.value ? control.value.length : 0;
	                return length < minLength ?
	                    { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         *  Validator that requires controls to have a value of a maximum length.
	         * @param {?} maxLength
	         * @return {?}
	         */
	        Validators.maxLength = function (maxLength) {
	            return function (control) {
	                var /** @type {?} */ length = control.value ? control.value.length : 0;
	                return length > maxLength ?
	                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         *  Validator that requires a control to match a regex to its value.
	         * @param {?} pattern
	         * @return {?}
	         */
	        Validators.pattern = function (pattern) {
	            if (!pattern)
	                return Validators.nullValidator;
	            var /** @type {?} */ regex;
	            var /** @type {?} */ regexStr;
	            if (typeof pattern === 'string') {
	                regexStr = "^" + pattern + "$";
	                regex = new RegExp(regexStr);
	            }
	            else {
	                regexStr = pattern.toString();
	                regex = pattern;
	            }
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var /** @type {?} */ value = control.value;
	                return regex.test(value) ? null :
	                    { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
	            };
	        };
	        /**
	         *  No-op validator.
	         * @param {?} c
	         * @return {?}
	         */
	        Validators.nullValidator = function (c) { return null; };
	        /**
	         *  Compose multiple validators into a single function that returns the union
	          * of the individual error maps.
	         * @param {?} validators
	         * @return {?}
	         */
	        Validators.compose = function (validators) {
	            if (!validators)
	                return null;
	            var /** @type {?} */ presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                return _mergeErrors(_executeValidators(control, presentValidators));
	            };
	        };
	        /**
	         * @param {?} validators
	         * @return {?}
	         */
	        Validators.composeAsync = function (validators) {
	            if (!validators)
	                return null;
	            var /** @type {?} */ presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                var /** @type {?} */ promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	                return Promise.all(promises).then(_mergeErrors);
	            };
	        };
	        return Validators;
	    }());
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function _convertToPromise(obj) {
	        return isPromise(obj) ? obj : rxjs_operator_toPromise.toPromise.call(obj);
	    }
	    /**
	     * @param {?} control
	     * @param {?} validators
	     * @return {?}
	     */
	    function _executeValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    /**
	     * @param {?} control
	     * @param {?} validators
	     * @return {?}
	     */
	    function _executeAsyncValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    /**
	     * @param {?} arrayOfErrors
	     * @return {?}
	     */
	    function _mergeErrors(arrayOfErrors) {
	        var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
	            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
	        }, {});
	        return Object.keys(res).length === 0 ? null : res;
	    }
	
	    /**
	     * Used to provide a {@link ControlValueAccessor} for form controls.
	     *
	     * See {@link DefaultValueAccessor} for how to implement one.
	     * @stable
	     */
	    var /** @type {?} */ NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');
	
	    var /** @type {?} */ CHECKBOX_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
	        multi: true,
	    };
	    /**
	     *  The accessor for writing a value and listening to changes on a checkbox input element.
	      * *
	      * ### Example
	      * ```
	      * <input type="checkbox" name="rememberLogin" ngModel>
	      * ```
	      * *
	      * @stable
	     */
	    var CheckboxControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function CheckboxControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        CheckboxControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                        providers: [CHECKBOX_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return CheckboxControlValueAccessor;
	    }());
	
	    var /** @type {?} */ DEFAULT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  The default accessor for writing a value and listening to changes that is used by the
	      * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	      * *
	      * ### Example
	      * ```
	      * <input type="text" name="searchQuery" ngModel>
	      * ```
	      * *
	      * @stable
	     */
	    var DefaultValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function DefaultValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.writeValue = function (value) {
	            var /** @type {?} */ normalizedValue = value == null ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        DefaultValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                        // TODO: vsavkin replace the above selector with the one below it once
	                        // https://github.com/angular/angular/issues/3011 is implemented
	                        // selector: '[ngControl],[ngModel],[ngFormControl]',
	                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [DEFAULT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        DefaultValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return DefaultValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * @param {?} validator
	     * @return {?}
	     */
	    function normalizeValidator(validator) {
	        if (((validator)).validate) {
	            return function (c) { return ((validator)).validate(c); };
	        }
	        else {
	            return (validator);
	        }
	    }
	    /**
	     * @param {?} validator
	     * @return {?}
	     */
	    function normalizeAsyncValidator(validator) {
	        if (((validator)).validate) {
	            return function (c) { return ((validator)).validate(c); };
	        }
	        else {
	            return (validator);
	        }
	    }
	
	    var /** @type {?} */ NUMBER_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  The accessor for writing a number value and listening to changes that is used by the
	      * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	      * *
	      * ### Example
	      * ```
	      * <input type="number" [(ngModel)]="age">
	      * ```
	     */
	    var NumberValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function NumberValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.writeValue = function (value) {
	            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	            var /** @type {?} */ normalizedValue = value == null ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        NumberValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [NUMBER_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        NumberValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return NumberValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @return {?}
	     */
	    function unimplemented() {
	        throw new Error('unimplemented');
	    }
	    /**
	     *  A base class that all control directive extend.
	      * It binds a {@link FormControl} object to a DOM element.
	      * *
	      * Used internally by Angular forms.
	      * *
	     * @abstract
	     */
	    var NgControl = (function (_super) {
	        __extends$2(NgControl, _super);
	        function NgControl() {
	            _super.apply(this, arguments);
	            /** @internal */
	            this._parent = null;
	            this.name = null;
	            this.valueAccessor = null;
	            /** @internal */
	            this._rawValidators = [];
	            /** @internal */
	            this._rawAsyncValidators = [];
	        }
	        Object.defineProperty(NgControl.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return (unimplemented()); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgControl.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return (unimplemented()); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @abstract
	         * @param {?} newValue
	         * @return {?}
	         */
	        NgControl.prototype.viewToModelUpdate = function (newValue) { };
	        return NgControl;
	    }(AbstractControlDirective));
	
	    var /** @type {?} */ RADIO_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  Internal class used by Angular to uncheck radio buttons with the matching name.
	     */
	    var RadioControlRegistry = (function () {
	        function RadioControlRegistry() {
	            this._accessors = [];
	        }
	        /**
	         * @param {?} control
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype.add = function (control, accessor) {
	            this._accessors.push([control, accessor]);
	        };
	        /**
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype.remove = function (accessor) {
	            for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
	                if (this._accessors[i][1] === accessor) {
	                    this._accessors.splice(i, 1);
	                    return;
	                }
	            }
	        };
	        /**
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype.select = function (accessor) {
	            var _this = this;
	            this._accessors.forEach(function (c) {
	                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                    c[1].fireUncheck(accessor.value);
	                }
	            });
	        };
	        /**
	         * @param {?} controlPair
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	            if (!controlPair[0].control)
	                return false;
	            return controlPair[0]._parent === accessor._control._parent &&
	                controlPair[1].name === accessor.name;
	        };
	        RadioControlRegistry.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        RadioControlRegistry.ctorParameters = function () { return []; };
	        return RadioControlRegistry;
	    }());
	    /**
	     *  *
	      * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	      * to keep the view synced with the {@link FormControl} model.
	      * *
	      * *
	      * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	      * value accessor will be active on any radio control that has a form directive. You do
	      * **not** need to add a special selector to activate it.
	      * *
	      * ### How to use radio buttons with form directives
	      * *
	      * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
	      * in the same group have the same `name` attribute.  Radio buttons with different `name`
	      * attributes do not affect each other.
	      * *
	      * {@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
	      * *
	      * When using radio buttons in a reactive form, radio buttons in the same group should have the
	      * same `formControlName`. You can also add a `name` attribute, but it's optional.
	      * *
	      * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * @stable
	     */
	    var RadioControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         * @param {?} _registry
	         * @param {?} _injector
	         */
	        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this._registry = _registry;
	            this._injector = _injector;
	            this.onChange = function () { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.ngOnInit = function () {
	            this._control = this._injector.get(NgControl);
	            this._checkName();
	            this._registry.add(this._control, this);
	        };
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.writeValue = function (value) {
	            this._state = value === this.value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this._fn = fn;
	            this.onChange = function () {
	                fn(_this.value);
	                _this._registry.select(_this);
	            };
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype._checkName = function () {
	            if (this.name && this.formControlName && this.name !== this.formControlName) {
	                this._throwNameError();
	            }
	            if (!this.name && this.formControlName)
	                this.name = this.formControlName;
	        };
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype._throwNameError = function () {
	            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	        };
	        RadioControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                        providers: [RADIO_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RadioControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	            { type: RadioControlRegistry, },
	            { type: _angular_core.Injector, },
	        ]; };
	        RadioControlValueAccessor.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'formControlName': [{ type: _angular_core.Input },],
	            'value': [{ type: _angular_core.Input },],
	        };
	        return RadioControlValueAccessor;
	    }());
	
	    var /** @type {?} */ RANGE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RangeValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  The accessor for writing a range value and listening to changes that is used by the
	      * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	      * *
	      * ### Example
	      * ```
	      * <input type="range" [(ngModel)]="age" >
	      * ```
	     */
	    var RangeValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function RangeValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        RangeValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [RANGE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RangeValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return RangeValueAccessor;
	    }());
	
	    var /** @type {?} */ SELECT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * @param {?} id
	     * @param {?} value
	     * @return {?}
	     */
	    function _buildValueString(id, value) {
	        if (id == null)
	            return "" + value;
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    /**
	     * @param {?} valueString
	     * @return {?}
	     */
	    function _extractId(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     *  *
	      * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	      * to keep the view synced with the {@link FormControl} model.
	      * *
	      * *
	      * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	      * value accessor will be active on any select control that has a form directive. You do
	      * **not** need to add a special selector to activate it.
	      * *
	      * ### How to use select controls with form directives
	      * *
	      * To use a select in a template-driven form, simply add an `ngModel` and a `name`
	      * attribute to the main `<select>` tag.
	      * *
	      * If your option values are simple strings, you can bind to the normal `value` property
	      * on the option.  If your option values happen to be objects (and you'd like to save the
	      * selection in your form as an object), use `ngValue` instead:
	      * *
	      * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
	      * *
	      * In reactive forms, you'll also want to add your form directive (`formControlName` or
	      * `formControl`) on the main `<select>` tag. Like in the former example, you have the
	      * choice of binding to the  `value` or `ngValue` property on the select's options.
	      * *
	      * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
	      * *
	      * Note: We listen to the 'change' event because 'input' events aren't fired
	      * for selects in Firefox and IE:
	      * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	      * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var SelectControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function SelectControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.writeValue = function (value) {
	            this.value = value;
	            var /** @type {?} */ valueString = _buildValueString(this._getOptionId(value), value);
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (valueString) {
	                _this.value = valueString;
	                fn(_this._getOptionValue(valueString));
	            };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /**
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id), value))
	                    return id;
	            }
	            return null;
	        };
	        /**
	         * @param {?} valueString
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var /** @type {?} */ id = _extractId(valueString);
	            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
	        };
	        SelectControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return SelectControlValueAccessor;
	    }());
	    /**
	     *  *
	      * *
	      * See docs for {@link SelectControlValueAccessor} for usage examples.
	      * *
	     */
	    var NgSelectOption = (function () {
	        /**
	         * @param {?} _element
	         * @param {?} _renderer
	         * @param {?} _select
	         */
	        function NgSelectOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (this._select)
	                this.id = this._select._registerOption();
	        }
	        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._select._optionMap.set(this.id, value);
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectOption.prototype, "value", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                this._setElementValue(value);
	                if (this._select)
	                    this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgSelectOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /**
	         * @return {?}
	         */
	        NgSelectOption.prototype.ngOnDestroy = function () {
	            if (this._select) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectOption.ctorParameters = function () { return [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ]; };
	        NgSelectOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectOption;
	    }());
	
	    var /** @type {?} */ SELECT_MULTIPLE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * @param {?} id
	     * @param {?} value
	     * @return {?}
	     */
	    function _buildValueString$1(id, value) {
	        if (id == null)
	            return "" + value;
	        if (typeof value === 'string')
	            value = "'" + value + "'";
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    /**
	     * @param {?} valueString
	     * @return {?}
	     */
	    function _extractId$1(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     *  The accessor for writing a value and listening to changes on a select element.
	      * *
	     */
	    var SelectMultipleControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	            var _this = this;
	            this.value = value;
	            var /** @type {?} */ optionSelectedStateSetter;
	            if (Array.isArray(value)) {
	                // convert values to ids
	                var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
	                optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
	            }
	            else {
	                optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
	            }
	            this._optionMap.forEach(optionSelectedStateSetter);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (_) {
	                var /** @type {?} */ selected = [];
	                if (_.hasOwnProperty('selectedOptions')) {
	                    var /** @type {?} */ options = _.selectedOptions;
	                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
	                        var /** @type {?} */ opt = options.item(i);
	                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	                else {
	                    var /** @type {?} */ options = (_.options);
	                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
	                        var /** @type {?} */ opt = options.item(i);
	                        if (opt.selected) {
	                            var /** @type {?} */ val = _this._getOptionValue(opt.value);
	                            selected.push(val);
	                        }
	                    }
	                }
	                _this.value = selected;
	                fn(selected);
	            };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	            var /** @type {?} */ id = (this._idCounter++).toString();
	            this._optionMap.set(id, value);
	            return id;
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id)._value, value))
	                    return id;
	            }
	            return null;
	        };
	        /**
	         * @param {?} valueString
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var /** @type {?} */ id = _extractId$1(valueString);
	            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
	        };
	        SelectMultipleControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectMultipleControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return SelectMultipleControlValueAccessor;
	    }());
	    /**
	     *  Marks `<option>` as dynamic, so Angular can be notified when options change.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <select multiple name="city" ngModel>
	      * <option *ngFor="let c of cities" [value]="c"></option>
	      * </select>
	      * ```
	     */
	    var NgSelectMultipleOption = (function () {
	        /**
	         * @param {?} _element
	         * @param {?} _renderer
	         * @param {?} _select
	         */
	        function NgSelectMultipleOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (this._select) {
	                this.id = this._select._registerOption(this);
	            }
	        }
	        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._value = value;
	                this._setElementValue(_buildValueString$1(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                if (this._select) {
	                    this._value = value;
	                    this._setElementValue(_buildValueString$1(this.id, value));
	                    this._select.writeValue(this._select.value);
	                }
	                else {
	                    this._setElementValue(value);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgSelectMultipleOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /**
	         * @param {?} selected
	         * @return {?}
	         */
	        NgSelectMultipleOption.prototype._setSelected = function (selected) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	        };
	        /**
	         * @return {?}
	         */
	        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	            if (this._select) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectMultipleOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectMultipleOption.ctorParameters = function () { return [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ]; };
	        NgSelectMultipleOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectMultipleOption;
	    }());
	
	    /**
	     * @param {?} name
	     * @param {?} parent
	     * @return {?}
	     */
	    function controlPath(name, parent) {
	        return parent.path.concat([name]);
	    }
	    /**
	     * @param {?} control
	     * @param {?} dir
	     * @return {?}
	     */
	    function setUpControl(control, dir) {
	        if (!control)
	            _throwError(dir, 'Cannot find control with');
	        if (!dir.valueAccessor)
	            _throwError(dir, 'No value accessor for form control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	        dir.valueAccessor.writeValue(control.value);
	        // view -> model
	        dir.valueAccessor.registerOnChange(function (newValue) {
	            dir.viewToModelUpdate(newValue);
	            control.markAsDirty();
	            control.setValue(newValue, { emitModelToViewChange: false });
	        });
	        // touched
	        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	        control.registerOnChange(function (newValue, emitModelEvent) {
	            // control -> view
	            dir.valueAccessor.writeValue(newValue);
	            // control -> ngModel
	            if (emitModelEvent)
	                dir.viewToModelUpdate(newValue);
	        });
	        if (dir.valueAccessor.setDisabledState) {
	            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
	        }
	        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
	        dir._rawValidators.forEach(function (validator) {
	            if (((validator)).registerOnValidatorChange)
	                ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (((validator)).registerOnValidatorChange)
	                ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	    }
	    /**
	     * @param {?} control
	     * @param {?} dir
	     * @return {?}
	     */
	    function cleanUpControl(control, dir) {
	        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
	        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
	        dir._rawValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange) {
	                validator.registerOnValidatorChange(null);
	            }
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange) {
	                validator.registerOnValidatorChange(null);
	            }
	        });
	        if (control)
	            control._clearChangeFns();
	    }
	    /**
	     * @param {?} control
	     * @param {?} dir
	     * @return {?}
	     */
	    function setUpFormContainer(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    }
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    function _noControlError(dir) {
	        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
	    }
	    /**
	     * @param {?} dir
	     * @param {?} message
	     * @return {?}
	     */
	    function _throwError(dir, message) {
	        var /** @type {?} */ messageEnd;
	        if (dir.path.length > 1) {
	            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	        }
	        else if (dir.path[0]) {
	            messageEnd = "name: '" + dir.path + "'";
	        }
	        else {
	            messageEnd = 'unspecified name attribute';
	        }
	        throw new Error(message + " " + messageEnd);
	    }
	    /**
	     * @param {?} validators
	     * @return {?}
	     */
	    function composeValidators(validators) {
	        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
	    }
	    /**
	     * @param {?} validators
	     * @return {?}
	     */
	    function composeAsyncValidators(validators) {
	        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
	            null;
	    }
	    /**
	     * @param {?} changes
	     * @param {?} viewModel
	     * @return {?}
	     */
	    function isPropertyUpdated(changes, viewModel) {
	        if (!changes.hasOwnProperty('model'))
	            return false;
	        var /** @type {?} */ change = changes['model'];
	        if (change.isFirstChange())
	            return true;
	        return !looseIdentical(viewModel, change.currentValue);
	    }
	    var /** @type {?} */ BUILTIN_ACCESSORS = [
	        CheckboxControlValueAccessor,
	        RangeValueAccessor,
	        NumberValueAccessor,
	        SelectControlValueAccessor,
	        SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor,
	    ];
	    /**
	     * @param {?} valueAccessor
	     * @return {?}
	     */
	    function isBuiltInAccessor(valueAccessor) {
	        return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
	    }
	    /**
	     * @param {?} dir
	     * @param {?} valueAccessors
	     * @return {?}
	     */
	    function selectValueAccessor(dir, valueAccessors) {
	        if (!valueAccessors)
	            return null;
	        var /** @type {?} */ defaultAccessor;
	        var /** @type {?} */ builtinAccessor;
	        var /** @type {?} */ customAccessor;
	        valueAccessors.forEach(function (v) {
	            if (v.constructor === DefaultValueAccessor) {
	                defaultAccessor = v;
	            }
	            else if (isBuiltInAccessor(v)) {
	                if (builtinAccessor)
	                    _throwError(dir, 'More than one built-in value accessor matches form control with');
	                builtinAccessor = v;
	            }
	            else {
	                if (customAccessor)
	                    _throwError(dir, 'More than one custom value accessor matches form control with');
	                customAccessor = v;
	            }
	        });
	        if (customAccessor)
	            return customAccessor;
	        if (builtinAccessor)
	            return builtinAccessor;
	        if (defaultAccessor)
	            return defaultAccessor;
	        _throwError(dir, 'No valid value accessor for form control with');
	        return null;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     *  This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	      * *
	     */
	    var AbstractFormGroupDirective = (function (_super) {
	        __extends(AbstractFormGroupDirective, _super);
	        function AbstractFormGroupDirective() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @return {?}
	         */
	        AbstractFormGroupDirective.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormGroup(this);
	        };
	        /**
	         * @return {?}
	         */
	        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormGroup(this);
	            }
	        };
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	            /**
	             *  Get the {@link FormGroup} backing this binding.
	             * @return {?}
	             */
	            get: function () { return this.formDirective.getFormGroup(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	            /**
	             *  Get the path to this control group.
	             * @return {?}
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	            /**
	             *  Get the {@link Form} to which this group belongs.
	             * @return {?}
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @return {?}
	         */
	        AbstractFormGroupDirective.prototype._checkParentType = function () { };
	        return AbstractFormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var AbstractControlStatus = (function () {
	        /**
	         * @param {?} cd
	         */
	        function AbstractControlStatus(cd) {
	            this._cd = cd;
	        }
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.untouched : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.touched : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.pristine : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.dirty : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.valid : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.invalid : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.pending : false; },
	            enumerable: true,
	            configurable: true
	        });
	        return AbstractControlStatus;
	    }());
	    var /** @type {?} */ ngControlStatusHost = {
	        '[class.ng-untouched]': 'ngClassUntouched',
	        '[class.ng-touched]': 'ngClassTouched',
	        '[class.ng-pristine]': 'ngClassPristine',
	        '[class.ng-dirty]': 'ngClassDirty',
	        '[class.ng-valid]': 'ngClassValid',
	        '[class.ng-invalid]': 'ngClassInvalid',
	        '[class.ng-pending]': 'ngClassPending',
	    };
	    /**
	     *  Directive automatically applied to Angular form controls that sets CSS classes
	      * based on control status (valid/invalid/dirty/etc).
	      * *
	     */
	    var NgControlStatus = (function (_super) {
	        __extends$3(NgControlStatus, _super);
	        /**
	         * @param {?} cd
	         */
	        function NgControlStatus(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatus.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
	        ];
	        /** @nocollapse */
	        NgControlStatus.ctorParameters = function () { return [
	            { type: NgControl, decorators: [{ type: _angular_core.Self },] },
	        ]; };
	        return NgControlStatus;
	    }(AbstractControlStatus));
	    /**
	     *  Directive automatically applied to Angular form groups that sets CSS classes
	      * based on control status (valid/invalid/dirty/etc).
	      * *
	     */
	    var NgControlStatusGroup = (function (_super) {
	        __extends$3(NgControlStatusGroup, _super);
	        /**
	         * @param {?} cd
	         */
	        function NgControlStatusGroup(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatusGroup.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
	                        host: ngControlStatusHost
	                    },] },
	        ];
	        /** @nocollapse */
	        NgControlStatusGroup.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
	        ]; };
	        return NgControlStatusGroup;
	    }(AbstractControlStatus));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     *  Use by directives and components to emit custom Events.
	      * *
	      * ### Examples
	      * *
	      * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	      * title gets clicked:
	      * *
	      * ```
	      * selector: 'zippy',
	      * template: `
	      * <div class="zippy">
	      * <div (click)="toggle()">Toggle</div>
	      * <div [hidden]="!visible">
	      * <ng-content></ng-content>
	      * </div>
	      * </div>`})
	      * export class Zippy {
	      * visible: boolean = true;
	      * @Output() open: EventEmitter<any> = new EventEmitter();
	      * @Output() close: EventEmitter<any> = new EventEmitter();
	      * *
	      * toggle() {
	      * this.visible = !this.visible;
	      * if (this.visible) {
	      * this.open.emit(null);
	      * } else {
	      * this.close.emit(null);
	      * }
	      * }
	      * }
	      * ```
	      * *
	      * The events payload can be accessed by the parameter `$event` on the components output event
	      * handler:
	      * *
	      * ```
	      * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	      * ```
	      * *
	      * Uses Rx.Observable but provides an adapter to make it work as specified here:
	      * https://github.com/jhusain/observable-spec
	      * *
	      * Once a reference implementation of the spec is available, switch to it.
	     */
	    var EventEmitter = (function (_super) {
	        __extends$5(EventEmitter, _super);
	        /**
	         *  Creates an instance of [EventEmitter], which depending on [isAsync],
	          * delivers events synchronously or asynchronously.
	         * @param {?=} isAsync
	         */
	        function EventEmitter(isAsync) {
	            if (isAsync === void 0) { isAsync = false; }
	            _super.call(this);
	            this.__isAsync = isAsync;
	        }
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	        /**
	         * @param {?=} generatorOrNext
	         * @param {?=} error
	         * @param {?=} complete
	         * @return {?}
	         */
	        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	            var /** @type {?} */ schedulerFn;
	            var /** @type {?} */ errorFn = function (err) { return null; };
	            var /** @type {?} */ completeFn = function () { return null; };
	            if (generatorOrNext && typeof generatorOrNext === 'object') {
	                schedulerFn = this.__isAsync ? function (value) {
	                    setTimeout(function () { return generatorOrNext.next(value); });
	                } : function (value) { generatorOrNext.next(value); };
	                if (generatorOrNext.error) {
	                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                        function (err) { generatorOrNext.error(err); };
	                }
	                if (generatorOrNext.complete) {
	                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                        function () { generatorOrNext.complete(); };
	                }
	            }
	            else {
	                schedulerFn = this.__isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                    function (value) { generatorOrNext(value); };
	                if (error) {
	                    errorFn =
	                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	                }
	                if (complete) {
	                    completeFn =
	                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	                }
	            }
	            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	        };
	        return EventEmitter;
	    }(rxjs_Subject.Subject));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	     */
	    var /** @type {?} */ VALID = 'VALID';
	    /**
	     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	     */
	    var /** @type {?} */ INVALID = 'INVALID';
	    /**
	     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	     * errors are not yet available for the input value.
	     */
	    var /** @type {?} */ PENDING = 'PENDING';
	    /**
	     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
	     * calculations of validity or value.
	     */
	    var /** @type {?} */ DISABLED = 'DISABLED';
	    /**
	     * @param {?} control
	     * @param {?} path
	     * @param {?} delimiter
	     * @return {?}
	     */
	    function _find(control, path, delimiter) {
	        if (path == null)
	            return null;
	        if (!(path instanceof Array)) {
	            path = ((path)).split(delimiter);
	        }
	        if (path instanceof Array && (path.length === 0))
	            return null;
	        return ((path)).reduce(function (v, name) {
	            if (v instanceof FormGroup) {
	                return v.controls[name] || null;
	            }
	            if (v instanceof FormArray) {
	                return v.at(/** @type {?} */ (name)) || null;
	            }
	            return null;
	        }, control);
	    }
	    /**
	     * @param {?} r
	     * @return {?}
	     */
	    function toObservable(r) {
	        return isPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
	    }
	    /**
	     * @param {?} validator
	     * @return {?}
	     */
	    function coerceToValidator(validator) {
	        return Array.isArray(validator) ? composeValidators(validator) : validator;
	    }
	    /**
	     * @param {?} asyncValidator
	     * @return {?}
	     */
	    function coerceToAsyncValidator(asyncValidator) {
	        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
	    }
	    /**
	     *  {@link FormArray}.
	      * *
	      * It provides some of the shared behavior that all controls and groups of controls have, like
	      * running validators, calculating status, and resetting state. It also defines the properties
	      * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
	      * instantiated directly.
	      * *
	     * @abstract
	     */
	    var AbstractControl = (function () {
	        /**
	         * @param {?} validator
	         * @param {?} asyncValidator
	         */
	        function AbstractControl(validator, asyncValidator) {
	            this.validator = validator;
	            this.asyncValidator = asyncValidator;
	            /** @internal */
	            this._onCollectionChange = function () { };
	            this._pristine = true;
	            this._touched = false;
	            /** @internal */
	            this._onDisabledChange = [];
	        }
	        Object.defineProperty(AbstractControl.prototype, "value", {
	            /**
	             *  The value of the control.
	             * @return {?}
	             */
	            get: function () { return this._value; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "parent", {
	            /**
	             *  The parent control.
	             * @return {?}
	             */
	            get: function () { return this._parent; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "status", {
	            /**
	             *  The validation status of the control. There are four possible
	              * validation statuses:
	              * *
	              * * **VALID**:  control has passed all validation checks
	              * * **INVALID**: control has failed at least one validation check
	              * * **PENDING**: control is in the midst of conducting a validation check
	              * * **DISABLED**: control is exempt from validation checks
	              * *
	              * These statuses are mutually exclusive, so a control cannot be
	              * both valid AND invalid or invalid AND disabled.
	             * @return {?}
	             */
	            get: function () { return this._status; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valid", {
	            /**
	             *  A control is `valid` when its `status === VALID`.
	              * *
	              * In order to have this status, the control must have passed all its
	              * validation checks.
	             * @return {?}
	             */
	            get: function () { return this._status === VALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "invalid", {
	            /**
	             *  A control is `invalid` when its `status === INVALID`.
	              * *
	              * In order to have this status, the control must have failed
	              * at least one of its validation checks.
	             * @return {?}
	             */
	            get: function () { return this._status === INVALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pending", {
	            /**
	             *  A control is `pending` when its `status === PENDING`.
	              * *
	              * In order to have this status, the control must be in the
	              * middle of conducting a validation check.
	             * @return {?}
	             */
	            get: function () { return this._status == PENDING; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "disabled", {
	            /**
	             *  A control is `disabled` when its `status === DISABLED`.
	              * *
	              * Disabled controls are exempt from validation checks and
	              * are not included in the aggregate value of their ancestor
	              * controls.
	             * @return {?}
	             */
	            get: function () { return this._status === DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "enabled", {
	            /**
	             *  A control is `enabled` as long as its `status !== DISABLED`.
	              * *
	              * In other words, it has a status of `VALID`, `INVALID`, or
	              * `PENDING`.
	             * @return {?}
	             */
	            get: function () { return this._status !== DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "errors", {
	            /**
	             *  Returns any errors generated by failing validation. If there
	              * are no errors, it will return null.
	             * @return {?}
	             */
	            get: function () { return this._errors; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pristine", {
	            /**
	             *  A control is `pristine` if the user has not yet changed
	              * the value in the UI.
	              * *
	              * Note that programmatic changes to a control's value will
	              * *not* mark it dirty.
	             * @return {?}
	             */
	            get: function () { return this._pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "dirty", {
	            /**
	             *  A control is `dirty` if the user has changed the value
	              * in the UI.
	              * *
	              * Note that programmatic changes to a control's value will
	              * *not* mark it dirty.
	             * @return {?}
	             */
	            get: function () { return !this.pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "touched", {
	            /**
	             *  A control is marked `touched` once the user has triggered
	              * a `blur` event on it.
	             * @return {?}
	             */
	            get: function () { return this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "untouched", {
	            /**
	             *  A control is `untouched` if the user has not yet triggered
	              * a `blur` event on it.
	             * @return {?}
	             */
	            get: function () { return !this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	            /**
	             *  Emits an event every time the value of the control changes, in
	              * the UI or programmatically.
	             * @return {?}
	             */
	            get: function () { return this._valueChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	            /**
	             *  Emits an event every time the validation status of the control
	              * is re-calculated.
	             * @return {?}
	             */
	            get: function () { return this._statusChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the synchronous validators that are active on this control.  Calling
	          * this will overwrite any existing sync validators.
	         * @param {?} newValidator
	         * @return {?}
	         */
	        AbstractControl.prototype.setValidators = function (newValidator) {
	            this.validator = coerceToValidator(newValidator);
	        };
	        /**
	         *  Sets the async validators that are active on this control. Calling this
	          * will overwrite any existing async validators.
	         * @param {?} newValidator
	         * @return {?}
	         */
	        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	            this.asyncValidator = coerceToAsyncValidator(newValidator);
	        };
	        /**
	         *  Empties out the sync validator list.
	         * @return {?}
	         */
	        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	        /**
	         *  Empties out the async validator list.
	         * @return {?}
	         */
	        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	        /**
	         *  Marks the control as `touched`.
	          * *
	          * This will also mark all direct ancestors as `touched` to maintain
	          * the model.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = true;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `untouched`.
	          * *
	          * If the control has any children, it will also mark all children as `untouched`
	          * to maintain the model, and re-calculate the `touched` status of all parent
	          * controls.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsUntouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = false;
	            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `dirty`.
	          * *
	          * This will also mark all direct ancestors as `dirty` to maintain
	          * the model.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsDirty = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = false;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsDirty({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `pristine`.
	          * *
	          * If the control has any children, it will also mark all children as `pristine`
	          * to maintain the model, and re-calculate the `pristine` status of all parent
	          * controls.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsPristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = true;
	            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `pending`.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsPending = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._status = PENDING;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsPending({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Disables the control. This means the control will be exempt from validation checks and
	          * excluded from the aggregate value of any parent. Its status is `DISABLED`.
	          * *
	          * If the control has children, all children will be disabled to maintain the model.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.disable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = DISABLED;
	            this._errors = null;
	            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	            this._updateValue();
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
	        };
	        /**
	         *  Enables the control. This means the control will be included in validation checks and
	          * the aggregate value of its parent. Its status is re-calculated based on its value and
	          * its validators.
	          * *
	          * If the control has children, all children will be enabled.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.enable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = VALID;
	            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
	        };
	        /**
	         * @param {?} onlySelf
	         * @return {?}
	         */
	        AbstractControl.prototype._updateAncestors = function (onlySelf) {
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity();
	                this._parent._updatePristine();
	                this._parent._updateTouched();
	            }
	        };
	        /**
	         * @param {?} parent
	         * @return {?}
	         */
	        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	        /**
	         *  Sets the value of the control. Abstract method (implemented in sub-classes).
	         * @abstract
	         * @param {?} value
	         * @param {?=} options
	         * @return {?}
	         */
	        AbstractControl.prototype.setValue = function (value, options) { };
	        /**
	         *  Patches the value of the control. Abstract method (implemented in sub-classes).
	         * @abstract
	         * @param {?} value
	         * @param {?=} options
	         * @return {?}
	         */
	        AbstractControl.prototype.patchValue = function (value, options) { };
	        /**
	         *  Resets the control. Abstract method (implemented in sub-classes).
	         * @abstract
	         * @param {?=} value
	         * @param {?=} options
	         * @return {?}
	         */
	        AbstractControl.prototype.reset = function (value, options) { };
	        /**
	         *  Re-calculates the value and validation status of the control.
	          * *
	          * By default, it will also update the value and validity of its ancestors.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.updateValueAndValidity = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._setInitialStatus();
	            this._updateValue();
	            if (this.enabled) {
	                this._errors = this._runValidator();
	                this._status = this._calculateStatus();
	                if (this._status === VALID || this._status === PENDING) {
	                    this._runAsyncValidator(emitEvent);
	                }
	            }
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            }
	        };
	        /**
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype._updateTreeValidity = function (_a) {
	            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
	            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._runValidator = function () {
	            return this.validator ? this.validator(this) : null;
	        };
	        /**
	         * @param {?} emitEvent
	         * @return {?}
	         */
	        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	            var _this = this;
	            if (this.asyncValidator) {
	                this._status = PENDING;
	                this._cancelExistingSubscription();
	                var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
	                this._asyncValidationSubscription =
	                    obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	            }
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._cancelExistingSubscription = function () {
	            if (this._asyncValidationSubscription) {
	                this._asyncValidationSubscription.unsubscribe();
	            }
	        };
	        /**
	         *  Sets errors on a form control.
	          * *
	          * This is used when validations are run manually by the user, rather than automatically.
	          * *
	          * Calling `setErrors` will also update the validity of the parent control.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const login = new FormControl("someLogin");
	          * login.setErrors({
	          * "notUnique": true
	          * });
	          * *
	          * expect(login.valid).toEqual(false);
	          * expect(login.errors).toEqual({"notUnique": true});
	          * *
	          * login.setValue("someOtherLogin");
	          * *
	          * expect(login.valid).toEqual(true);
	          * ```
	         * @param {?} errors
	         * @param {?=} __1
	         * @return {?}
	         */
	        AbstractControl.prototype.setErrors = function (errors, _a) {
	            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	            this._errors = errors;
	            this._updateControlsErrors(emitEvent !== false);
	        };
	        /**
	         *  Retrieves a child control given the control's name or path.
	          * *
	          * Paths can be passed in as an array or a string delimited by a dot.
	          * *
	          * To get a control nested within a `person` sub-group:
	          * *
	          * * `this.form.get('person.name');`
	          * *
	          * -OR-
	          * *
	          * * `this.form.get(['person', 'name']);`
	         * @param {?} path
	         * @return {?}
	         */
	        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	        /**
	         *  Returns true if the control with the given path has the error specified. Otherwise
	          * returns null or undefined.
	          * *
	          * If no path is given, it checks for the error on the present control.
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControl.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            var /** @type {?} */ control = path ? this.get(path) : this;
	            return control && control._errors ? control._errors[errorCode] : null;
	        };
	        /**
	         *  Returns true if the control with the given path has the error specified. Otherwise
	          * returns false.
	          * *
	          * If no path is given, it checks for the error on the present control.
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControl.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return !!this.getError(errorCode, path);
	        };
	        Object.defineProperty(AbstractControl.prototype, "root", {
	            /**
	             *  Retrieves the top-level ancestor of this control.
	             * @return {?}
	             */
	            get: function () {
	                var /** @type {?} */ x = this;
	                while (x._parent) {
	                    x = x._parent;
	                }
	                return x;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} emitEvent
	         * @return {?}
	         */
	        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	            this._status = this._calculateStatus();
	            if (emitEvent) {
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent) {
	                this._parent._updateControlsErrors(emitEvent);
	            }
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._initObservables = function () {
	            this._valueChanges = new EventEmitter();
	            this._statusChanges = new EventEmitter();
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._calculateStatus = function () {
	            if (this._allControlsDisabled())
	                return DISABLED;
	            if (this._errors)
	                return INVALID;
	            if (this._anyControlsHaveStatus(PENDING))
	                return PENDING;
	            if (this._anyControlsHaveStatus(INVALID))
	                return INVALID;
	            return VALID;
	        };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        AbstractControl.prototype._updateValue = function () { };
	        /**
	         * @abstract
	         * @param {?} cb
	         * @return {?}
	         */
	        AbstractControl.prototype._forEachChild = function (cb) { };
	        /**
	         * @abstract
	         * @param {?} condition
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControls = function (condition) { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        AbstractControl.prototype._allControlsDisabled = function () { };
	        /**
	         * @param {?} status
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	            return this._anyControls(function (control) { return control.status === status; });
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControlsDirty = function () {
	            return this._anyControls(function (control) { return control.dirty; });
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControlsTouched = function () {
	            return this._anyControls(function (control) { return control.touched; });
	        };
	        /**
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype._updatePristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = !this._anyControlsDirty();
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype._updateTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = this._anyControlsTouched();
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * @param {?} formState
	         * @return {?}
	         */
	        AbstractControl.prototype._isBoxedValue = function (formState) {
	            return typeof formState === 'object' && formState !== null &&
	                Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
	        return AbstractControl;
	    }());
	    /**
	     *  *
	      * It is one of the three fundamental building blocks of Angular forms, along with
	      * {@link FormGroup} and {@link FormArray}.
	      * *
	      * *
	      * When instantiating a {@link FormControl}, you can pass in an initial value as the
	      * first argument. Example:
	      * *
	      * ```ts
	      * const ctrl = new FormControl('some value');
	      * console.log(ctrl.value);     // 'some value'
	      * *```
	      * *
	      * You can also initialize the control with a form state object on instantiation,
	      * which includes both the value and whether or not the control is disabled.
	      * You can't use the value key without the disabled key; both are required
	      * to use this way of initialization.
	      * *
	      * ```ts
	      * const ctrl = new FormControl({value: 'n/a', disabled: true});
	      * console.log(ctrl.value);     // 'n/a'
	      * console.log(ctrl.status);   // 'DISABLED'
	      * ```
	      * *
	      * To include a sync validator (or an array of sync validators) with the control,
	      * pass it in as the second argument. Async validators are also supported, but
	      * have to be passed in separately as the third arg.
	      * *
	      * ```ts
	      * const ctrl = new FormControl('', Validators.required);
	      * console.log(ctrl.value);     // ''
	      * console.log(ctrl.status);   // 'INVALID'
	      * ```
	      * *
	      * See its superclass, {@link AbstractControl}, for more properties and methods.
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var FormControl = (function (_super) {
	        __extends$6(FormControl, _super);
	        /**
	         * @param {?=} formState
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         */
	        function FormControl(formState, validator, asyncValidator) {
	            if (formState === void 0) { formState = null; }
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	            /** @internal */
	            this._onChange = [];
	            this._applyFormState(formState);
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	            this._initObservables();
	        }
	        /**
	         *  Set the value of the form control to `value`.
	          * *
	          * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	          * and not its parent component. This defaults to false.
	          * *
	          * If `emitEvent` is `true`, this
	          * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
	          * to true (as it falls through to `updateValueAndValidity`).
	          * *
	          * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	          * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	          * specified.
	          * *
	          * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	          * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormControl.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	            this._value = value;
	            if (this._onChange.length && emitModelToViewChange !== false) {
	                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange !== false); });
	            }
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of a control.
	          * *
	          * This function is functionally the same as {@link FormControl.setValue} at this level.
	          * It exists for symmetry with {@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
	          * where it does behave differently.
	         * @param {?} value
	         * @param {?=} options
	         * @return {?}
	         */
	        FormControl.prototype.patchValue = function (value, options) {
	            if (options === void 0) { options = {}; }
	            this.setValue(value, options);
	        };
	        /**
	         *  Resets the form control. This means by default:
	          * *
	          * * it is marked as `pristine`
	          * * it is marked as `untouched`
	          * * value is set to null
	          * *
	          * You can also reset to a specific form state by passing through a standalone
	          * value or a form state object that contains both a value and a disabled state
	          * (these are the only two properties that cannot be calculated).
	          * *
	          * Ex:
	          * *
	          * ```ts
	          * this.control.reset('Nancy');
	          * *
	          * console.log(this.control.value);  // 'Nancy'
	          * ```
	          * *
	          * OR
	          * *
	          * ```
	          * this.control.reset({value: 'Nancy', disabled: true});
	          * *
	          * console.log(this.control.value);  // 'Nancy'
	          * console.log(this.control.status);  // 'DISABLED'
	          * ```
	         * @param {?=} formState
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormControl.prototype.reset = function (formState, _a) {
	            if (formState === void 0) { formState = null; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._applyFormState(formState);
	            this.markAsPristine({ onlySelf: onlySelf });
	            this.markAsUntouched({ onlySelf: onlySelf });
	            this.setValue(this._value, { onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * @return {?}
	         */
	        FormControl.prototype._updateValue = function () { };
	        /**
	         * @param {?} condition
	         * @return {?}
	         */
	        FormControl.prototype._anyControls = function (condition) { return false; };
	        /**
	         * @return {?}
	         */
	        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
	        /**
	         *  Register a listener for change events.
	         * @param {?} fn
	         * @return {?}
	         */
	        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	        /**
	         * @return {?}
	         */
	        FormControl.prototype._clearChangeFns = function () {
	            this._onChange = [];
	            this._onDisabledChange = [];
	            this._onCollectionChange = function () { };
	        };
	        /**
	         *  Register a listener for disabled events.
	         * @param {?} fn
	         * @return {?}
	         */
	        FormControl.prototype.registerOnDisabledChange = function (fn) {
	            this._onDisabledChange.push(fn);
	        };
	        /**
	         * @param {?} cb
	         * @return {?}
	         */
	        FormControl.prototype._forEachChild = function (cb) { };
	        /**
	         * @param {?} formState
	         * @return {?}
	         */
	        FormControl.prototype._applyFormState = function (formState) {
	            if (this._isBoxedValue(formState)) {
	                this._value = formState.value;
	                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
	                    this.enable({ onlySelf: true, emitEvent: false });
	            }
	            else {
	                this._value = formState;
	            }
	        };
	        return FormControl;
	    }(AbstractControl));
	    /**
	     *  instances.
	      * *
	      * A `FormGroup` aggregates the values of each child {@link FormControl} into one object,
	      * with each control name as the key.  It calculates its status by reducing the statuses
	      * of its children. For example, if one of the controls in a group is invalid, the entire
	      * group becomes invalid.
	      * *
	      * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	      * along with {@link FormControl} and {@link FormArray}.
	      * *
	      * *
	      * When instantiating a {@link FormGroup}, pass in a collection of child controls as the first
	      * argument. The key for each child will be the name under which it is registered.
	      * *
	      * ### Example
	      * *
	      * ```
	      * const form = new FormGroup({
	      * first: new FormControl('Nancy', Validators.minLength(2)),
	      * last: new FormControl('Drew'),
	      * });
	      * *
	      * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
	      * console.log(form.status);  // 'VALID'
	      * ```
	      * *
	      * You can also include group-level validators as the second arg, or group-level async
	      * validators as the third arg. These come in handy when you want to perform validation
	      * that considers the value of more than one child control.
	      * *
	      * ### Example
	      * *
	      * ```
	      * const form = new FormGroup({
	      * password: new FormControl('', Validators.minLength(2)),
	      * passwordConfirm: new FormControl('', Validators.minLength(2)),
	      * }, passwordMatchValidator);
	      * *
	      * *
	      * function passwordMatchValidator(g: FormGroup) {
	      * return g.get('password').value === g.get('passwordConfirm').value
	      * ? null : {'mismatch': true};
	      * }
	      * ```
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var FormGroup = (function (_super) {
	        __extends$6(FormGroup, _super);
	        /**
	         * @param {?} controls
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         */
	        function FormGroup(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         *  Registers a control with the group's list of controls.
	          * *
	          * This method does not update value or validity of the control, so for
	          * most cases you'll want to use {@link FormGroup.addControl} instead.
	         * @param {?} name
	         * @param {?} control
	         * @return {?}
	         */
	        FormGroup.prototype.registerControl = function (name, control) {
	            if (this.controls[name])
	                return this.controls[name];
	            this.controls[name] = control;
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	            return control;
	        };
	        /**
	         *  Add a control to this group.
	         * @param {?} name
	         * @param {?} control
	         * @return {?}
	         */
	        FormGroup.prototype.addControl = function (name, control) {
	            this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Remove a control from this group.
	         * @param {?} name
	         * @return {?}
	         */
	        FormGroup.prototype.removeControl = function (name) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Replace an existing control.
	         * @param {?} name
	         * @param {?} control
	         * @return {?}
	         */
	        FormGroup.prototype.setControl = function (name, control) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            if (control)
	                this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Check whether there is an enabled control with the given name in the group.
	          * *
	          * It will return false for disabled controls. If you'd like to check for
	          * existence in the group only, use {@link AbstractControl.get} instead.
	         * @param {?} controlName
	         * @return {?}
	         */
	        FormGroup.prototype.contains = function (controlName) {
	            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
	        };
	        /**
	         *  Sets the value of the {@link FormGroup}. It accepts an object that matches
	          * the structure of the group, with control names as keys.
	          * *
	          * This method performs strict checks, so it will throw an error if you try
	          * to set the value of a control that doesn't exist or if you exclude the
	          * value of a control.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const form = new FormGroup({
	          * first: new FormControl(),
	          * last: new FormControl()
	          * });
	          * console.log(form.value);   // {first: null, last: null}
	          * *
	          * form.setValue({first: 'Nancy', last: 'Drew'});
	          * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
	          * *
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormGroup.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._checkAllValuesPresent(value);
	            Object.keys(value).forEach(function (name) {
	                _this._throwIfControlMissing(name);
	                _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of the {@link FormGroup}. It accepts an object with control
	          * names as keys, and will do its best to match the values to the correct controls
	          * in the group.
	          * *
	          * It accepts both super-sets and sub-sets of the group without throwing an error.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const form = new FormGroup({
	          * first: new FormControl(),
	          * last: new FormControl()
	          * });
	          * console.log(form.value);   // {first: null, last: null}
	          * *
	          * form.patchValue({first: 'Nancy'});
	          * console.log(form.value);   // {first: 'Nancy', last: null}
	          * *
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormGroup.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            Object.keys(value).forEach(function (name) {
	                if (_this.controls[name]) {
	                    _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Resets the {@link FormGroup}. This means by default:
	          * *
	          * * The group and all descendants are marked `pristine`
	          * * The group and all descendants are marked `untouched`
	          * * The value of all descendants will be null or null maps
	          * *
	          * You can also reset to a specific form state by passing in a map of states
	          * that matches the structure of your form, with control names as keys. The state
	          * can be a standalone value or a form state object with both a value and a disabled
	          * status.
	          * *
	          * ### Example
	          * *
	          * ```ts
	          * this.form.reset({first: 'name', last: 'last name'});
	          * *
	          * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	          * ```
	          * *
	          * - OR -
	          * *
	          * ```
	          * this.form.reset({
	          * first: {value: 'name', disabled: true},
	          * last: 'last'
	          * });
	          * *
	          * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	          * console.log(this.form.get('first').status);  // 'DISABLED'
	          * ```
	         * @param {?=} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormGroup.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = {}; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._forEachChild(function (control, name) {
	                control.reset(value[name], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         *  The aggregate value of the {@link FormGroup}, including any disabled controls.
	          * *
	          * If you'd like to include all values regardless of disabled status, use this method.
	          * Otherwise, the `value` property is the best way to get the value of the group.
	         * @return {?}
	         */
	        FormGroup.prototype.getRawValue = function () {
	            return this._reduceChildren({}, function (acc, control, name) {
	                acc[name] = control.value;
	                return acc;
	            });
	        };
	        /**
	         * @param {?} name
	         * @return {?}
	         */
	        FormGroup.prototype._throwIfControlMissing = function (name) {
	            if (!Object.keys(this.controls).length) {
	                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.controls[name]) {
	                throw new Error("Cannot find form control with name: " + name + ".");
	            }
	        };
	        /**
	         * @param {?} cb
	         * @return {?}
	         */
	        FormGroup.prototype._forEachChild = function (cb) {
	            var _this = this;
	            Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) {
	                control.setParent(_this);
	                control._registerOnCollectionChange(_this._onCollectionChange);
	            });
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	        /**
	         * @param {?} condition
	         * @return {?}
	         */
	        FormGroup.prototype._anyControls = function (condition) {
	            var _this = this;
	            var /** @type {?} */ res = false;
	            this._forEachChild(function (control, name) {
	                res = res || (_this.contains(name) && condition(control));
	            });
	            return res;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._reduceValue = function () {
	            var _this = this;
	            return this._reduceChildren({}, function (acc, control, name) {
	                if (control.enabled || _this.disabled) {
	                    acc[name] = control.value;
	                }
	                return acc;
	            });
	        };
	        /**
	         * @param {?} initValue
	         * @param {?} fn
	         * @return {?}
	         */
	        FormGroup.prototype._reduceChildren = function (initValue, fn) {
	            var /** @type {?} */ res = initValue;
	            this._forEachChild(function (control, name) { res = fn(res, control, name); });
	            return res;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
	                var controlName = _a[_i];
	                if (this.controls[controlName].enabled) {
	                    return false;
	                }
	            }
	            return Object.keys(this.controls).length > 0 || this.disabled;
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        FormGroup.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, name) {
	                if (value[name] === undefined) {
	                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
	                }
	            });
	        };
	        return FormGroup;
	    }(AbstractControl));
	    /**
	     *  instances.
	      * *
	      * A `FormArray` aggregates the values of each child {@link FormControl} into an array.
	      * It calculates its status by reducing the statuses of its children. For example, if one of
	      * the controls in a `FormArray` is invalid, the entire array becomes invalid.
	      * *
	      * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	      * along with {@link FormControl} and {@link FormGroup}.
	      * *
	      * *
	      * When instantiating a {@link FormArray}, pass in an array of child controls as the first
	      * argument.
	      * *
	      * ### Example
	      * *
	      * ```
	      * const arr = new FormArray([
	      * new FormControl('Nancy', Validators.minLength(2)),
	      * new FormControl('Drew'),
	      * ]);
	      * *
	      * console.log(arr.value);   // ['Nancy', 'Drew']
	      * console.log(arr.status);  // 'VALID'
	      * ```
	      * *
	      * You can also include array-level validators as the second arg, or array-level async
	      * validators as the third arg. These come in handy when you want to perform validation
	      * that considers the value of more than one child control.
	      * *
	      * ### Adding or removing controls
	      * *
	      * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	      * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	      * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	      * the `FormArray` directly, as that will result in strange and unexpected behavior such
	      * as broken change detection.
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var FormArray = (function (_super) {
	        __extends$6(FormArray, _super);
	        /**
	         * @param {?} controls
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         */
	        function FormArray(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         *  Get the {@link AbstractControl} at the given `index` in the array.
	         * @param {?} index
	         * @return {?}
	         */
	        FormArray.prototype.at = function (index) { return this.controls[index]; };
	        /**
	         *  Insert a new {@link AbstractControl} at the end of the array.
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype.push = function (control) {
	            this.controls.push(control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Insert a new {@link AbstractControl} at the given `index` in the array.
	         * @param {?} index
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype.insert = function (index, control) {
	            this.controls.splice(index, 0, control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Remove the control at the given `index` in the array.
	         * @param {?} index
	         * @return {?}
	         */
	        FormArray.prototype.removeAt = function (index) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Replace an existing control.
	         * @param {?} index
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype.setControl = function (index, control) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            if (control) {
	                this.controls.splice(index, 0, control);
	                this._registerControl(control);
	            }
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        Object.defineProperty(FormArray.prototype, "length", {
	            /**
	             *  Length of the control array.
	             * @return {?}
	             */
	            get: function () { return this.controls.length; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the value of the {@link FormArray}. It accepts an array that matches
	          * the structure of the control.
	          * *
	          * This method performs strict checks, so it will throw an error if you try
	          * to set the value of a control that doesn't exist or if you exclude the
	          * value of a control.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const arr = new FormArray([
	          * new FormControl(),
	          * new FormControl()
	          * ]);
	          * console.log(arr.value);   // [null, null]
	          * *
	          * arr.setValue(['Nancy', 'Drew']);
	          * console.log(arr.value);   // ['Nancy', 'Drew']
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormArray.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._checkAllValuesPresent(value);
	            value.forEach(function (newValue, index) {
	                _this._throwIfControlMissing(index);
	                _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of the {@link FormArray}. It accepts an array that matches the
	          * structure of the control, and will do its best to match the values to the correct
	          * controls in the group.
	          * *
	          * It accepts both super-sets and sub-sets of the array without throwing an error.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const arr = new FormArray([
	          * new FormControl(),
	          * new FormControl()
	          * ]);
	          * console.log(arr.value);   // [null, null]
	          * *
	          * arr.patchValue(['Nancy']);
	          * console.log(arr.value);   // ['Nancy', null]
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormArray.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            value.forEach(function (newValue, index) {
	                if (_this.at(index)) {
	                    _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Resets the {@link FormArray}. This means by default:
	          * *
	          * * The array and all descendants are marked `pristine`
	          * * The array and all descendants are marked `untouched`
	          * * The value of all descendants will be null or null maps
	          * *
	          * You can also reset to a specific form state by passing in an array of states
	          * that matches the structure of the control. The state can be a standalone value
	          * or a form state object with both a value and a disabled status.
	          * *
	          * ### Example
	          * *
	          * ```ts
	          * this.arr.reset(['name', 'last name']);
	          * *
	          * console.log(this.arr.value);  // ['name', 'last name']
	          * ```
	          * *
	          * - OR -
	          * *
	          * ```
	          * this.arr.reset([
	          * {value: 'name', disabled: true},
	          * 'last'
	          * ]);
	          * *
	          * console.log(this.arr.value);  // ['name', 'last name']
	          * console.log(this.arr.get(0).status);  // 'DISABLED'
	          * ```
	         * @param {?=} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormArray.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = []; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._forEachChild(function (control, index) {
	                control.reset(value[index], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         *  The aggregate value of the array, including any disabled controls.
	          * *
	          * If you'd like to include all values regardless of disabled status, use this method.
	          * Otherwise, the `value` property is the best way to get the value of the array.
	         * @return {?}
	         */
	        FormArray.prototype.getRawValue = function () { return this.controls.map(function (control) { return control.value; }); };
	        /**
	         * @param {?} index
	         * @return {?}
	         */
	        FormArray.prototype._throwIfControlMissing = function (index) {
	            if (!this.controls.length) {
	                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.at(index)) {
	                throw new Error("Cannot find form control at index " + index);
	            }
	        };
	        /**
	         * @param {?} cb
	         * @return {?}
	         */
	        FormArray.prototype._forEachChild = function (cb) {
	            this.controls.forEach(function (control, index) { cb(control, index); });
	        };
	        /**
	         * @return {?}
	         */
	        FormArray.prototype._updateValue = function () {
	            var _this = this;
	            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
	                .map(function (control) { return control.value; });
	        };
	        /**
	         * @param {?} condition
	         * @return {?}
	         */
	        FormArray.prototype._anyControls = function (condition) {
	            return this.controls.some(function (control) { return control.enabled && condition(control); });
	        };
	        /**
	         * @return {?}
	         */
	        FormArray.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) { return _this._registerControl(control); });
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        FormArray.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, i) {
	                if (value[i] === undefined) {
	                    throw new Error("Must supply a value for form control at index: " + i + ".");
	                }
	            });
	        };
	        /**
	         * @return {?}
	         */
	        FormArray.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
	                var control = _a[_i];
	                if (control.enabled)
	                    return false;
	            }
	            return this.controls.length > 0 || this.disabled;
	        };
	        /**
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype._registerControl = function (control) {
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	        };
	        return FormArray;
	    }(AbstractControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formDirectiveProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgForm; })
	    };
	    var /** @type {?} */ resolvedPromise = Promise.resolve(null);
	    /**
	     *  to track aggregate form value and validation status.
	      * *
	      * *
	      * As soon as you import the `FormsModule`, this directive becomes active by default on
	      * all `<form>` tags.  You don't need to add a special selector.
	      * *
	      * You can export the directive into a local template variable using `ngForm` as the key
	      * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
	      * {@link FormGroup} instance are duplicated on the directive itself, so a reference to it
	      * will give you access to the aggregate value and validity status of the form, as well as
	      * user interaction properties like `dirty` and `touched`.
	      * *
	      * To register child controls with the form, you'll want to use {@link NgModel} with a
	      * `name` attribute.  You can also use {@link NgModelGroup} if you'd like to create
	      * sub-groups within the form.
	      * *
	      * You can listen to the directive's `ngSubmit` event to be notified when the user has
	      * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	      * submission event.
	      * *
	      * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `FormsModule`
	      * *
	      * @stable
	     */
	    var NgForm = (function (_super) {
	        __extends$4(NgForm, _super);
	        /**
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function NgForm(validators, asyncValidators) {
	            _super.call(this);
	            this._submitted = false;
	            this.ngSubmit = new EventEmitter();
	            this.form =
	                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	        }
	        Object.defineProperty(NgForm.prototype, "submitted", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "controls", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form.controls; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.addControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                dir._control = (container.registerControl(dir.name, dir.control));
	                setUpControl(dir.control, dir);
	                dir.control.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.removeControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                if (container) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.addFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                var /** @type {?} */ group = new FormGroup({});
	                setUpFormContainer(group, dir);
	                container.registerControl(dir.name, group);
	                group.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.removeFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                if (container) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @param {?} value
	         * @return {?}
	         */
	        NgForm.prototype.updateModel = function (dir, value) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ ctrl = (_this.form.get(dir.path));
	                ctrl.setValue(value);
	            });
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	        /**
	         * @param {?} $event
	         * @return {?}
	         */
	        NgForm.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        /**
	         * @return {?}
	         */
	        NgForm.prototype.onReset = function () { this.resetForm(); };
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        NgForm.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /**
	         * @param {?} path
	         * @return {?}
	         */
	        NgForm.prototype._findContainer = function (path) {
	            path.pop();
	            return path.length ? (this.form.get(path)) : this.form;
	        };
	        NgForm.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                        providers: [formDirectiveProvider],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        outputs: ['ngSubmit'],
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgForm.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        return NgForm;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var /** @type {?} */ Examples = {
	        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	    };
	
	    var TemplateDrivenErrors = (function () {
	        function TemplateDrivenErrors() {
	        }
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.modelParentException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + Examples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Examples.ngModelWithFormGroup);
	        };
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.formGroupNameException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.missingNameException = function () {
	            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	        };
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.modelGroupParentException = function () {
	            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        return TemplateDrivenErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ modelGroupProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
	    };
	    /**
	     *  *
	      * *
	      * This directive can only be used as a child of {@link NgForm} (or in other words,
	      * within `<form>` tags).
	      * *
	      * Use this directive if you'd like to create a sub-group within a form. This can
	      * come in handy if you want to validate a sub-group of your form separately from
	      * the rest of your form, or if some values in your domain model make more sense to
	      * consume together in a nested object.
	      * *
	      * Pass in the name you'd like this sub-group to have and it will become the key
	      * for the sub-group in the form's full value. You can also export the directive into
	      * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
	      * *
	      * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `FormsModule`
	      * *
	     */
	    var NgModelGroup = (function (_super) {
	        __extends$8(NgModelGroup, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function NgModelGroup(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /**
	         * @return {?}
	         */
	        NgModelGroup.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelGroupParentException();
	            }
	        };
	        NgModelGroup.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
	        ];
	        /** @nocollapse */
	        NgModelGroup.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        NgModelGroup.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
	        };
	        return NgModelGroup;
	    }(AbstractFormGroupDirective));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formControlBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return NgModel; })
	    };
	    /**
	     * `ngModel` forces an additional change detection run when its inputs change:
	     * E.g.:
	     * ```
	     * <div>{{myModel.valid}}</div>
	     * <input [(ngModel)]="myValue" #myModel="ngModel">
	     * ```
	     * I.e. `ngModel` can export itself on the element and then be used in the template.
	     * Normally, this would result in expressions before the `input` that use the exported directive
	     * to have and old value as they have been
	     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
	     * detection run.
	     *
	     * Notes:
	     * - this is just one extra run no matter how many `ngModel` have been changed.
	     * - this is a general problem when using `exportAs` for directives!
	     */
	    var /** @type {?} */ resolvedPromise$1 = Promise.resolve(null);
	    /**
	     *  to a form control element.
	      * *
	      * The {@link FormControl} instance will track the value, user interaction, and
	      * validation status of the control and keep the view synced with the model. If used
	      * within a parent form, the directive will also register itself with the form as a child
	      * control.
	      * *
	      * *
	      * This directive can be used by itself or as part of a larger form. All you need is the
	      * `ngModel` selector to activate it.
	      * *
	      * It accepts a domain model as an optional {@link @Input}. If you have a one-way binding
	      * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
	      * class will set the value in the view. If you have a two-way binding with `[()]` syntax
	      * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
	      * the domain model in your class as well.
	      * *
	      * If you wish to inspect the properties of the associated {@link FormControl} (like
	      * validity state), you can also export the directive into a local template variable using
	      * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
	      * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
	      * will fall through to the control anyway, so you can access them directly. You can see a
	      * full list of properties directly available in {@link AbstractControlDirective}.
	      * *
	      * The following is an example of a simple standalone control using `ngModel`:
	      * *
	      * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
	      * *
	      * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
	      * so that the control can be registered with the parent form under that name.
	      * *
	      * It's worth noting that in the context of a parent form, you often can skip one-way or
	      * two-way binding because the parent form will sync the value for you. You can access
	      * its properties by exporting it into a local template variable using `ngForm` (ex:
	      * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
	      * *
	      * If you do need to populate initial values into your form, using a one-way binding for
	      * `ngModel` tends to be sufficient as long as you use the exported form's value rather
	      * than the domain model's value on submit.
	      * *
	      * Take a look at an example of using `ngModel` within a form:
	      * *
	      * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	      * *
	      * To see `ngModel` examples with different form control types, see:
	      * *
	      * * Radio buttons: {@link RadioControlValueAccessor}
	      * * Selects: {@link SelectControlValueAccessor}
	      * *
	      * **npm package**: `@angular/forms`
	      * *
	      * **NgModule**: `FormsModule`
	      * *
	      * @stable
	     */
	    var NgModel = (function (_super) {
	        __extends$7(NgModel, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         * @param {?} valueAccessors
	         */
	        function NgModel(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            /** @internal */
	            this._control = new FormControl();
	            /** @internal */
	            this._registered = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        NgModel.prototype.ngOnChanges = function (changes) {
	            this._checkForErrors();
	            if (!this._registered)
	                this._setUpControl();
	            if ('isDisabled' in changes) {
	                this._updateDisabled(changes);
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this._updateValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	        Object.defineProperty(NgModel.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return this._parent ? controlPath(this.name, this._parent) : [this.name];
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} newValue
	         * @return {?}
	         */
	        NgModel.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._setUpControl = function () {
	            this._isStandalone() ? this._setUpStandalone() :
	                this.formDirective.addControl(this);
	            this._registered = true;
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._isStandalone = function () {
	            return !this._parent || (this.options && this.options.standalone);
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._setUpStandalone = function () {
	            setUpControl(this._control, this);
	            this._control.updateValueAndValidity({ emitEvent: false });
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._checkForErrors = function () {
	            if (!this._isStandalone()) {
	                this._checkParentType();
	            }
	            this._checkName();
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                TemplateDrivenErrors.formGroupNameException();
	            }
	            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelParentException();
	            }
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._checkName = function () {
	            if (this.options && this.options.name)
	                this.name = this.options.name;
	            if (!this._isStandalone() && !this.name) {
	                TemplateDrivenErrors.missingNameException();
	            }
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgModel.prototype._updateValue = function (value) {
	            var _this = this;
	            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	        };
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        NgModel.prototype._updateDisabled = function (changes) {
	            var _this = this;
	            var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
	            var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
	            resolvedPromise$1.then(function () {
	                if (isDisabled && !_this.control.disabled) {
	                    _this.control.disable();
	                }
	                else if (!isDisabled && _this.control.disabled) {
	                    _this.control.enable();
	                }
	            });
	        };
	        NgModel.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[ngModel]:not([formControlName]):not([formControl])',
	                        providers: [formControlBinding],
	                        exportAs: 'ngModel'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgModel.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ]; };
	        NgModel.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	        };
	        return NgModel;
	    }(NgControl));
	
	    var ReactiveErrors = (function () {
	        function ReactiveErrors() {
	        }
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.controlParentException = function () {
	            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.ngModelGroupException = function () {
	            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.missingFormException = function () {
	            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.groupParentException = function () {
	            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.arrayParentException = function () {
	            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.disabledAttrWarning = function () {
	            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
	        };
	        return ReactiveErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formControlBinding$1 = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
	    };
	    /**
	     *  *
	      * In other words, this directive ensures that any values written to the {@link FormControl}
	      * instance programmatically will be written to the DOM element (model -> view). Conversely,
	      * any values written to the DOM element through user input will be reflected in the
	      * {@link FormControl} instance (view -> model).
	      * *
	      * *
	      * Use this directive if you'd like to create and manage a {@link FormControl} instance directly.
	      * Simply create a {@link FormControl}, save it to your component class, and pass it into the
	      * {@link FormControlDirective}.
	      * *
	      * This directive is designed to be used as a standalone control.  Unlike {@link FormControlName},
	      * it does not require that your {@link FormControl} instance be part of any parent
	      * {@link FormGroup}, and it won't be registered to any {@link FormGroupDirective} that
	      * exists above it.
	      * *
	      * **Get the value**: the `value` property is always synced and available on the
	      * {@link FormControl} instance. See a full list of available properties in
	      * {@link AbstractControl}.
	      * *
	      * **Set the value**: You can pass in an initial value when instantiating the {@link FormControl},
	      * or you can set it programmatically later using {@link AbstractControl.setValue} or
	      * {@link AbstractControl.patchValue}.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the control, you can
	      * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	      * {@link AbstractControl.statusChanges} to be notified when the validation status is
	      * re-calculated.
	      * *
	      * ### Example
	      * *
	      * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `ReactiveFormsModule`
	      * *
	      * @stable
	     */
	    var FormControlDirective = (function (_super) {
	        __extends$9(FormControlDirective, _super);
	        /**
	         * @param {?} validators
	         * @param {?} asyncValidators
	         * @param {?} valueAccessors
	         */
	        function FormControlDirective(validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this.update = new EventEmitter();
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
	            /**
	             * @param {?} isDisabled
	             * @return {?}
	             */
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormControlDirective.prototype.ngOnChanges = function (changes) {
	            if (this._isControlChanged(changes)) {
	                setUpControl(this.form, this);
	                if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                    this.valueAccessor.setDisabledState(true);
	                }
	                this.form.updateValueAndValidity({ emitEvent: false });
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.form.setValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        Object.defineProperty(FormControlDirective.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} newValue
	         * @return {?}
	         */
	        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormControlDirective.prototype._isControlChanged = function (changes) {
	            return changes.hasOwnProperty('form');
	        };
	        FormControlDirective.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
	        ];
	        /** @nocollapse */
	        FormControlDirective.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ]; };
	        FormControlDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlDirective;
	    }(NgControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$11 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formDirectiveProvider$1 = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
	    };
	    /**
	     *  *
	      * *
	      * This directive accepts an existing {@link FormGroup} instance. It will then use this
	      * {@link FormGroup} instance to match any child {@link FormControl}, {@link FormGroup},
	      * and {@link FormArray} instances to child {@link FormControlName}, {@link FormGroupName},
	      * and {@link FormArrayName} directives.
	      * *
	      * **Set value**: You can set the form's initial value when instantiating the
	      * {@link FormGroup}, or you can set it programmatically later using the {@link FormGroup}'s
	      * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue} methods.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
	      * to the {@link FormGroup}'s {@link AbstractControl.valueChanges} event.  You can also listen to
	      * its {@link AbstractControl.statusChanges} event to be notified when the validation status is
	      * re-calculated.
	      * *
	      * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
	      * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	      * submission event.
	      * *
	      * ### Example
	      * *
	      * In this example, we create form controls for first name and last name.
	      * *
	      * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	      * *
	      * **npm package**: `@angular/forms`
	      * *
	      * **NgModule**: {@link ReactiveFormsModule}
	      * *
	      * @stable
	     */
	    var FormGroupDirective = (function (_super) {
	        __extends$11(FormGroupDirective, _super);
	        /**
	         * @param {?} _validators
	         * @param {?} _asyncValidators
	         */
	        function FormGroupDirective(_validators, _asyncValidators) {
	            _super.call(this);
	            this._validators = _validators;
	            this._asyncValidators = _asyncValidators;
	            this._submitted = false;
	            this.directives = [];
	            this.form = null;
	            this.ngSubmit = new EventEmitter();
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormGroupDirective.prototype.ngOnChanges = function (changes) {
	            this._checkFormPresent();
	            if (changes.hasOwnProperty('form')) {
	                this._updateValidators();
	                this._updateDomValue();
	                this._updateRegistrations();
	            }
	        };
	        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.addControl = function (dir) {
	            var /** @type {?} */ ctrl = this.form.get(dir.path);
	            setUpControl(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	            this.directives.push(dir);
	            return ctrl;
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.addFormGroup = function (dir) {
	            var /** @type {?} */ ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.addFormArray = function (dir) {
	            var /** @type {?} */ ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.removeFormArray = function (dir) { };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.getFormArray = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @param {?} value
	         * @return {?}
	         */
	        FormGroupDirective.prototype.updateModel = function (dir, value) {
	            var /** @type {?} */ ctrl = (this.form.get(dir.path));
	            ctrl.setValue(value);
	        };
	        /**
	         * @param {?} $event
	         * @return {?}
	         */
	        FormGroupDirective.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        FormGroupDirective.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._updateDomValue = function () {
	            var _this = this;
	            this.directives.forEach(function (dir) {
	                var /** @type {?} */ newCtrl = _this.form.get(dir.path);
	                if (dir._control !== newCtrl) {
	                    cleanUpControl(dir._control, dir);
	                    if (newCtrl)
	                        setUpControl(newCtrl, dir);
	                    dir._control = newCtrl;
	                }
	            });
	            this.form._updateTreeValidity({ emitEvent: false });
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._updateRegistrations = function () {
	            var _this = this;
	            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
	            if (this._oldForm)
	                this._oldForm._registerOnCollectionChange(function () { });
	            this._oldForm = this.form;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._updateValidators = function () {
	            var /** @type {?} */ sync = composeValidators(this._validators);
	            this.form.validator = Validators.compose([this.form.validator, sync]);
	            var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._checkFormPresent = function () {
	            if (!this.form) {
	                ReactiveErrors.missingFormException();
	            }
	        };
	        FormGroupDirective.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroup]',
	                        providers: [formDirectiveProvider$1],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        FormGroupDirective.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        FormGroupDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
	            'ngSubmit': [{ type: _angular_core.Output },],
	        };
	        return FormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$12 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formGroupNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
	    };
	    /**
	     *  *
	      * *
	      * This directive can only be used with a parent {@link FormGroupDirective} (selector:
	      * `[formGroup]`).
	      * *
	      * It accepts the string name of the nested {@link FormGroup} you want to link, and
	      * will look for a {@link FormGroup} registered with that name in the parent
	      * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	      * *
	      * Nested form groups can come in handy when you want to validate a sub-group of a
	      * form separately from the rest or when you'd like to group the values of certain
	      * controls into their own nested object.
	      * *
	      * **Access the group**: You can access the associated {@link FormGroup} using the
	      * {@link AbstractControl.get} method. Ex: `this.form.get('name')`.
	      * *
	      * You can also access individual controls within the group using dot syntax.
	      * Ex: `this.form.get('name.first')`
	      * *
	      * **Get the value**: the `value` property is always synced and available on the
	      * {@link FormGroup}. See a full list of available properties in {@link AbstractControl}.
	      * *
	      * **Set the value**: You can set an initial value for each child control when instantiating
	      * the {@link FormGroup}, or you can set it programmatically later using
	      * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the group, you can
	      * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	      * {@link AbstractControl.statusChanges} to be notified when the validation status is
	      * re-calculated.
	      * *
	      * ### Example
	      * *
	      * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `ReactiveFormsModule`
	      * *
	     */
	    var FormGroupName = (function (_super) {
	        __extends$12(FormGroupName, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function FormGroupName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /**
	         * @return {?}
	         */
	        FormGroupName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.groupParentException();
	            }
	        };
	        FormGroupName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormGroupName.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        FormGroupName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
	        };
	        return FormGroupName;
	    }(AbstractFormGroupDirective));
	    var /** @type {?} */ formArrayNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
	    };
	    /**
	     *  *
	      * *
	      * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	      * `[formGroup]`).
	      * *
	      * It accepts the string name of the nested {@link FormArray} you want to link, and
	      * will look for a {@link FormArray} registered with that name in the parent
	      * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	      * *
	      * Nested form arrays can come in handy when you have a group of form controls but
	      * you're not sure how many there will be. Form arrays allow you to create new
	      * form controls dynamically.
	      * *
	      * **Access the array**: You can access the associated {@link FormArray} using the
	      * {@link AbstractControl.get} method on the parent {@link FormGroup}.
	      * Ex: `this.form.get('cities')`.
	      * *
	      * **Get the value**: the `value` property is always synced and available on the
	      * {@link FormArray}. See a full list of available properties in {@link AbstractControl}.
	      * *
	      * **Set the value**: You can set an initial value for each child control when instantiating
	      * the {@link FormArray}, or you can set the value programmatically later using the
	      * {@link FormArray}'s {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}
	      * methods.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the array, you can
	      * subscribe to the {@link FormArray}'s {@link AbstractControl.valueChanges} event.  You can also
	      * listen to its {@link AbstractControl.statusChanges} event to be notified when the validation
	      * status is re-calculated.
	      * *
	      * **Add new controls**: You can add new controls to the {@link FormArray} dynamically by
	      * calling its {@link FormArray.push} method.
	      * Ex: `this.form.get('cities').push(new FormControl());`
	      * *
	      * ### Example
	      * *
	      * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `ReactiveFormsModule`
	      * *
	     */
	    var FormArrayName = (function (_super) {
	        __extends$12(FormArrayName, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function FormArrayName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /**
	         * @return {?}
	         */
	        FormArrayName.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormArray(this);
	        };
	        /**
	         * @return {?}
	         */
	        FormArrayName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormArray(this);
	            }
	        };
	        Object.defineProperty(FormArrayName.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.formDirective.getFormArray(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return this._parent ? (this._parent.formDirective) : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @return {?}
	         */
	        FormArrayName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.arrayParentException();
	            }
	        };
	        FormArrayName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormArrayName.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        FormArrayName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
	        };
	        return FormArrayName;
	    }(ControlContainer));
	    /**
	     * @param {?} parent
	     * @return {?}
	     */
	    function _hasInvalidParent(parent) {
	        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
	            !(parent instanceof FormArrayName);
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$10 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ controlNameBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
	    };
	    /**
	     *  element by name.
	      * *
	      * In other words, this directive ensures that any values written to the {@link FormControl}
	      * instance programmatically will be written to the DOM element (model -> view). Conversely,
	      * any values written to the DOM element through user input will be reflected in the
	      * {@link FormControl} instance (view -> model).
	      * *
	      * *
	      * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	      * `[formGroup]`).
	      * *
	      * It accepts the string name of the {@link FormControl} instance you want to
	      * link, and will look for a {@link FormControl} registered with that name in the
	      * closest {@link FormGroup} or {@link FormArray} above it.
	      * *
	      * **Access the control**: You can access the {@link FormControl} associated with
	      * this directive by using the {@link AbstractControl.get} method.
	      * Ex: `this.form.get('first');`
	      * *
	      * **Get value**: the `value` property is always synced and available on the {@link FormControl}.
	      * See a full list of available properties in {@link AbstractControl}.
	      * *
	      * **Set value**: You can set an initial value for the control when instantiating the
	      * {@link FormControl}, or you can set it programmatically later using
	      * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the control, you can
	      * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	      * {@link AbstractControl.statusChanges} to be notified when the validation status is
	      * re-calculated.
	      * *
	      * ### Example
	      * *
	      * In this example, we create form controls for first name and last name.
	      * *
	      * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	      * *
	      * To see `formControlName` examples with different form control types, see:
	      * *
	      * * Radio buttons: {@link RadioControlValueAccessor}
	      * * Selects: {@link SelectControlValueAccessor}
	      * *
	      * **npm package**: `@angular/forms`
	      * *
	      * **NgModule**: {@link ReactiveFormsModule}
	      * *
	      * @stable
	     */
	    var FormControlName = (function (_super) {
	        __extends$10(FormControlName, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         * @param {?} valueAccessors
	         */
	        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this._added = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlName.prototype, "isDisabled", {
	            /**
	             * @param {?} isDisabled
	             * @return {?}
	             */
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormControlName.prototype.ngOnChanges = function (changes) {
	            if (!this._added)
	                this._setUpControl();
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.viewModel = this.model;
	                this.formDirective.updateModel(this, this.model);
	            }
	        };
	        /**
	         * @return {?}
	         */
	        FormControlName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeControl(this);
	            }
	        };
	        /**
	         * @param {?} newValue
	         * @return {?}
	         */
	        FormControlName.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        Object.defineProperty(FormControlName.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @return {?}
	         */
	        FormControlName.prototype._checkParentType = function () {
	            if (!(this._parent instanceof FormGroupName) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                ReactiveErrors.ngModelGroupException();
	            }
	            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
	                !(this._parent instanceof FormArrayName)) {
	                ReactiveErrors.controlParentException();
	            }
	        };
	        /**
	         * @return {?}
	         */
	        FormControlName.prototype._setUpControl = function () {
	            this._checkParentType();
	            this._control = this.formDirective.addControl(this);
	            if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                this.valueAccessor.setDisabledState(true);
	            }
	            this._added = true;
	        };
	        FormControlName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
	        ];
	        /** @nocollapse */
	        FormControlName.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ]; };
	        FormControlName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlName;
	    }(NgControl));
	
	    var __extends$13 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
	        multi: true
	    };
	    var /** @type {?} */ CHECKBOX_REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxRequiredValidator; }),
	        multi: true
	    };
	    /**
	     *  A Directive that adds the `required` validator to any controls marked with the
	      * `required` attribute, via the {@link NG_VALIDATORS} binding.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <input name="fullName" ngModel required>
	      * ```
	      * *
	     */
	    var RequiredValidator = (function () {
	        function RequiredValidator() {
	        }
	        Object.defineProperty(RequiredValidator.prototype, "required", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._required; },
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                this._required = value != null && value !== false && "" + value !== 'false';
	                if (this._onChange)
	                    this._onChange();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        RequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.required(c) : null;
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        RequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
	                        providers: [REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required ? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        RequiredValidator.ctorParameters = function () { return []; };
	        RequiredValidator.propDecorators = {
	            'required': [{ type: _angular_core.Input },],
	        };
	        return RequiredValidator;
	    }());
	    /**
	     *  A Directive that adds the `required` validator to checkbox controls marked with the
	      * `required` attribute, via the {@link NG_VALIDATORS} binding.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <input type="checkbox" name="active" ngModel required>
	      * ```
	      * *
	     */
	    var CheckboxRequiredValidator = (function (_super) {
	        __extends$13(CheckboxRequiredValidator, _super);
	        function CheckboxRequiredValidator() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        CheckboxRequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.requiredTrue(c) : null;
	        };
	        CheckboxRequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
	                        providers: [CHECKBOX_REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required ? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxRequiredValidator.ctorParameters = function () { return []; };
	        return CheckboxRequiredValidator;
	    }(RequiredValidator));
	    /**
	     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='min'}
	     */
	    var /** @type {?} */ MIN_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
	        multi: true
	    };
	    /**
	     *  A directive which installs the {@link MinLengthValidator} for any `formControlName`,
	      * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
	      * *
	     */
	    var MinLengthValidator = (function () {
	        function MinLengthValidator() {
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        MinLengthValidator.prototype.ngOnChanges = function (changes) {
	            if ('minlength' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        MinLengthValidator.prototype.validate = function (c) {
	            return this.minlength == null ? null : this._validator(c);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        /**
	         * @return {?}
	         */
	        MinLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.minLength(parseInt(this.minlength, 10));
	        };
	        MinLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                        providers: [MIN_LENGTH_VALIDATOR],
	                        host: { '[attr.minlength]': 'minlength ? minlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MinLengthValidator.ctorParameters = function () { return []; };
	        MinLengthValidator.propDecorators = {
	            'minlength': [{ type: _angular_core.Input },],
	        };
	        return MinLengthValidator;
	    }());
	    /**
	     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='max'}
	     */
	    var /** @type {?} */ MAX_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
	        multi: true
	    };
	    /**
	     *  A directive which installs the {@link MaxLengthValidator} for any `formControlName,
	      * `formControl`,
	      * or control with `ngModel` that also has a `maxlength` attribute.
	      * *
	     */
	    var MaxLengthValidator = (function () {
	        function MaxLengthValidator() {
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
	            if ('maxlength' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        MaxLengthValidator.prototype.validate = function (c) {
	            return this.maxlength != null ? this._validator(c) : null;
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        /**
	         * @return {?}
	         */
	        MaxLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
	        };
	        MaxLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                        providers: [MAX_LENGTH_VALIDATOR],
	                        host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MaxLengthValidator.ctorParameters = function () { return []; };
	        MaxLengthValidator.propDecorators = {
	            'maxlength': [{ type: _angular_core.Input },],
	        };
	        return MaxLengthValidator;
	    }());
	    var /** @type {?} */ PATTERN_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
	        multi: true
	    };
	    /**
	     *  A Directive that adds the `pattern` validator to any controls marked with the
	      * `pattern` attribute, via the {@link NG_VALIDATORS} binding. Uses attribute value
	      * as the regex to validate Control value against.  Follows pattern attribute
	      * semantics; i.e. regex must match entire Control value.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
	      * ```
	     */
	    var PatternValidator = (function () {
	        function PatternValidator() {
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        PatternValidator.prototype.ngOnChanges = function (changes) {
	            if ('pattern' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        /**
	         * @return {?}
	         */
	        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
	        PatternValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                        providers: [PATTERN_VALIDATOR],
	                        host: { '[attr.pattern]': 'pattern ? pattern : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        PatternValidator.ctorParameters = function () { return []; };
	        PatternValidator.propDecorators = {
	            'pattern': [{ type: _angular_core.Input },],
	        };
	        return PatternValidator;
	    }());
	
	    /**
	     *  *
	      * It is essentially syntactic sugar that shortens the `new FormGroup()`,
	      * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
	      * forms.
	      * *
	      * *
	      * To use, inject `FormBuilder` into your component class. You can then call its methods
	      * directly.
	      * *
	      * {@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: {@link ReactiveFormsModule}
	      * *
	     */
	    var FormBuilder = (function () {
	        function FormBuilder() {
	        }
	        /**
	         *  Construct a new {@link FormGroup} with the given map of configuration.
	          * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
	          * *
	          * See the {@link FormGroup} constructor for more details.
	         * @param {?} controlsConfig
	         * @param {?=} extra
	         * @return {?}
	         */
	        FormBuilder.prototype.group = function (controlsConfig, extra) {
	            if (extra === void 0) { extra = null; }
	            var /** @type {?} */ controls = this._reduceControls(controlsConfig);
	            var /** @type {?} */ validator = isPresent(extra) ? extra['validator'] : null;
	            var /** @type {?} */ asyncValidator = isPresent(extra) ? extra['asyncValidator'] : null;
	            return new FormGroup(controls, validator, asyncValidator);
	        };
	        /**
	         *  Construct a new {@link FormControl} with the given `formState`,`validator`, and
	          * `asyncValidator`.
	          * *
	          * `formState` can either be a standalone value for the form control or an object
	          * that contains both a value and a disabled status.
	          * *
	         * @param {?} formState
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         * @return {?}
	         */
	        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            return new FormControl(formState, validator, asyncValidator);
	        };
	        /**
	         *  Construct a {@link FormArray} from the given `controlsConfig` array of
	          * configuration, with the given optional `validator` and `asyncValidator`.
	         * @param {?} controlsConfig
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         * @return {?}
	         */
	        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	            var _this = this;
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            var /** @type {?} */ controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	            return new FormArray(controls, validator, asyncValidator);
	        };
	        /**
	         * @param {?} controlsConfig
	         * @return {?}
	         */
	        FormBuilder.prototype._reduceControls = function (controlsConfig) {
	            var _this = this;
	            var /** @type {?} */ controls = {};
	            Object.keys(controlsConfig).forEach(function (controlName) {
	                controls[controlName] = _this._createControl(controlsConfig[controlName]);
	            });
	            return controls;
	        };
	        /**
	         * @param {?} controlConfig
	         * @return {?}
	         */
	        FormBuilder.prototype._createControl = function (controlConfig) {
	            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	                controlConfig instanceof FormArray) {
	                return controlConfig;
	            }
	            else if (Array.isArray(controlConfig)) {
	                var /** @type {?} */ value = controlConfig[0];
	                var /** @type {?} */ validator = controlConfig.length > 1 ? controlConfig[1] : null;
	                var /** @type {?} */ asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	                return this.control(value, validator, asyncValidator);
	            }
	            else {
	                return this.control(controlConfig);
	            }
	        };
	        FormBuilder.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        FormBuilder.ctorParameters = function () { return []; };
	        return FormBuilder;
	    }());
	
	    /**
	     * @stable
	     */
	    var /** @type {?} */ VERSION = new _angular_core.Version('2.3.1');
	
	    var /** @type {?} */ SHARED_FORM_DIRECTIVES = [
	        NgSelectOption,
	        NgSelectMultipleOption,
	        DefaultValueAccessor,
	        NumberValueAccessor,
	        RangeValueAccessor,
	        CheckboxControlValueAccessor,
	        SelectControlValueAccessor,
	        SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor,
	        NgControlStatus,
	        NgControlStatusGroup,
	        RequiredValidator,
	        MinLengthValidator,
	        MaxLengthValidator,
	        PatternValidator,
	        CheckboxRequiredValidator,
	    ];
	    var /** @type {?} */ TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
	    var /** @type {?} */ REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
	    /**
	     *  Internal module used for sharing directives between FormsModule and ReactiveFormsModule
	     */
	    var InternalFormsSharedModule = (function () {
	        function InternalFormsSharedModule() {
	        }
	        InternalFormsSharedModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: SHARED_FORM_DIRECTIVES,
	                        exports: SHARED_FORM_DIRECTIVES,
	                    },] },
	        ];
	        /** @nocollapse */
	        InternalFormsSharedModule.ctorParameters = function () { return []; };
	        return InternalFormsSharedModule;
	    }());
	
	    /**
	     *  The ng module for forms.
	     */
	    var FormsModule = (function () {
	        function FormsModule() {
	        }
	        FormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
	                        providers: [RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        FormsModule.ctorParameters = function () { return []; };
	        return FormsModule;
	    }());
	    /**
	     *  The ng module for reactive forms.
	     */
	    var ReactiveFormsModule = (function () {
	        function ReactiveFormsModule() {
	        }
	        ReactiveFormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
	                        providers: [FormBuilder, RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        ReactiveFormsModule.ctorParameters = function () { return []; };
	        return ReactiveFormsModule;
	    }());
	
	    exports.AbstractControlDirective = AbstractControlDirective;
	    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	    exports.ControlContainer = ControlContainer;
	    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
	    exports.DefaultValueAccessor = DefaultValueAccessor;
	    exports.NgControl = NgControl;
	    exports.NgControlStatus = NgControlStatus;
	    exports.NgControlStatusGroup = NgControlStatusGroup;
	    exports.NgForm = NgForm;
	    exports.NgModel = NgModel;
	    exports.NgModelGroup = NgModelGroup;
	    exports.RadioControlValueAccessor = RadioControlValueAccessor;
	    exports.FormControlDirective = FormControlDirective;
	    exports.FormControlName = FormControlName;
	    exports.FormGroupDirective = FormGroupDirective;
	    exports.FormArrayName = FormArrayName;
	    exports.FormGroupName = FormGroupName;
	    exports.NgSelectOption = NgSelectOption;
	    exports.SelectControlValueAccessor = SelectControlValueAccessor;
	    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	    exports.CheckboxRequiredValidator = CheckboxRequiredValidator;
	    exports.MaxLengthValidator = MaxLengthValidator;
	    exports.MinLengthValidator = MinLengthValidator;
	    exports.PatternValidator = PatternValidator;
	    exports.RequiredValidator = RequiredValidator;
	    exports.FormBuilder = FormBuilder;
	    exports.AbstractControl = AbstractControl;
	    exports.FormArray = FormArray;
	    exports.FormControl = FormControl;
	    exports.FormGroup = FormGroup;
	    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
	    exports.NG_VALIDATORS = NG_VALIDATORS;
	    exports.Validators = Validators;
	    exports.VERSION = VERSION;
	    exports.FormsModule = FormsModule;
	    exports.ReactiveFormsModule = ReactiveFormsModule;
	
	}));

/***/ }),
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(76);
	var select_component_css_1 = __webpack_require__(81);
	var select_component_html_1 = __webpack_require__(82);
	var option_list_1 = __webpack_require__(83);
	exports.SELECT_VALUE_ACCESSOR = {
	    provide: forms_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return SelectComponent; }),
	    multi: true
	};
	var SelectComponent = (function () {
	    function SelectComponent() {
	        this.allowClear = false;
	        this.disabled = false;
	        this.multiple = false;
	        this.noFilter = 0;
	        this.notFoundMsg = 'No results found';
	        this.placeholder = '';
	        this.opened = new core_1.EventEmitter();
	        this.closed = new core_1.EventEmitter();
	        this.selected = new core_1.EventEmitter();
	        this.deselected = new core_1.EventEmitter();
	        this.noOptionsFound = new core_1.EventEmitter();
	        this._value = [];
	        // Selection state variables.
	        this.hasSelected = false;
	        // View state variables.
	        this.filterEnabled = true;
	        this.filterInputWidth = 1;
	        this.hasFocus = false;
	        this.isBelow = true;
	        this.isDisabled = false;
	        this.isOpen = false;
	        this.placeholderView = '';
	        this.clearClicked = false;
	        this.selectContainerClicked = false;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        /** Keys. **/
	        this.KEYS = {
	            BACKSPACE: 8,
	            TAB: 9,
	            ENTER: 13,
	            ESC: 27,
	            SPACE: 32,
	            UP: 38,
	            DOWN: 40
	        };
	    }
	    /** Event handlers. **/
	    // Angular lifecycle hooks.
	    SelectComponent.prototype.ngOnInit = function () {
	        this.placeholderView = this.placeholder;
	    };
	    SelectComponent.prototype.ngAfterViewInit = function () {
	        this.updateFilterWidth();
	    };
	    SelectComponent.prototype.ngOnChanges = function (changes) {
	        if (changes.hasOwnProperty('options')) {
	            this.updateOptionsList(changes['options'].isFirstChange());
	        }
	        if (changes.hasOwnProperty('noFilter')) {
	            var numOptions = this.optionList.options.length;
	            var minNumOptions = changes['noFilter'].currentValue;
	            this.filterEnabled = numOptions >= minNumOptions;
	        }
	    };
	    // Window.
	    SelectComponent.prototype.onWindowClick = function () {
	        if (!this.selectContainerClicked) {
	            this.closeDropdown();
	        }
	        this.clearClicked = false;
	        this.selectContainerClicked = false;
	    };
	    SelectComponent.prototype.onWindowResize = function () {
	        this.updateWidth();
	    };
	    // Select container.
	    SelectComponent.prototype.onSelectContainerClick = function (event) {
	        this.selectContainerClicked = true;
	        if (!this.clearClicked) {
	            this.toggleDropdown();
	        }
	    };
	    SelectComponent.prototype.onSelectContainerFocus = function () {
	        this.onTouched();
	    };
	    SelectComponent.prototype.onSelectContainerKeydown = function (event) {
	        this.handleSelectContainerKeydown(event);
	    };
	    // Dropdown container.
	    SelectComponent.prototype.onDropdownOptionClicked = function (option) {
	        this.multiple ?
	            this.toggleSelectOption(option) : this.selectOption(option);
	    };
	    SelectComponent.prototype.onDropdownClose = function (focus) {
	        this.closeDropdown(focus);
	    };
	    // Single filter input.
	    SelectComponent.prototype.onSingleFilterClick = function () {
	        this.selectContainerClicked = true;
	    };
	    SelectComponent.prototype.onSingleFilterInput = function (term) {
	        var toEmpty = this.optionList.filter(term);
	        if (toEmpty) {
	            this.noOptionsFound.emit(null);
	        }
	    };
	    SelectComponent.prototype.onSingleFilterKeydown = function (event) {
	        this.handleSingleFilterKeydown(event);
	    };
	    // Multiple filter input.
	    SelectComponent.prototype.onMultipleFilterInput = function (event) {
	        var _this = this;
	        if (!this.isOpen) {
	            this.openDropdown();
	        }
	        this.updateFilterWidth();
	        setTimeout(function () {
	            var toEmpty = _this.optionList.filter(event.target.value);
	            if (toEmpty) {
	                _this.noOptionsFound.emit(null);
	            }
	        });
	    };
	    SelectComponent.prototype.onMultipleFilterKeydown = function (event) {
	        this.handleMultipleFilterKeydown(event);
	    };
	    // Single clear select.
	    SelectComponent.prototype.onClearSelectionClick = function (event) {
	        this.clearClicked = true;
	        this.clearSelection();
	        this.closeDropdown(true);
	    };
	    // Multiple deselect option.
	    SelectComponent.prototype.onDeselectOptionClick = function (option) {
	        this.clearClicked = true;
	        this.deselectOption(option);
	    };
	    /** API. **/
	    // TODO fix issues with global click/key handler that closes the dropdown.
	    SelectComponent.prototype.open = function () {
	        this.openDropdown();
	    };
	    SelectComponent.prototype.close = function () {
	        this.closeDropdown();
	    };
	    SelectComponent.prototype.clear = function () {
	        this.clearSelection();
	    };
	    SelectComponent.prototype.select = function (value) {
	        var _this = this;
	        this.optionList.getOptionsByValue(value).forEach(function (option) {
	            _this.selectOption(option);
	        });
	    };
	    /** ControlValueAccessor interface methods. **/
	    SelectComponent.prototype.writeValue = function (value) {
	        this.value = value;
	    };
	    SelectComponent.prototype.registerOnChange = function (fn) {
	        this.onChange = fn;
	    };
	    SelectComponent.prototype.registerOnTouched = function (fn) {
	        this.onTouched = fn;
	    };
	    SelectComponent.prototype.setDisabledState = function (isDisabled) {
	        this.disabled = isDisabled;
	    };
	    Object.defineProperty(SelectComponent.prototype, "value", {
	        /** Value. **/
	        get: function () {
	            return this.multiple ? this._value : this._value[0];
	        },
	        set: function (v) {
	            if (typeof v === 'undefined' || v === null || v === '') {
	                v = [];
	            }
	            else if (typeof v === 'string') {
	                v = [v];
	            }
	            else if (!Array.isArray(v)) {
	                throw new TypeError('Value must be a string or an array.');
	            }
	            if (!option_list_1.OptionList.equalValues(v, this._value)) {
	                this.optionList.value = v;
	                this.valueChanged();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SelectComponent.prototype.valueChanged = function () {
	        this._value = this.optionList.value;
	        this.hasSelected = this._value.length > 0;
	        this.placeholderView = this.hasSelected ? '' : this.placeholder;
	        this.updateFilterWidth();
	        this.onChange(this.value);
	    };
	    /** Initialization. **/
	    SelectComponent.prototype.updateOptionsList = function (firstTime) {
	        var v;
	        if (!firstTime) {
	            v = this.optionList.value;
	        }
	        this.optionList = new option_list_1.OptionList(this.options);
	        if (!firstTime) {
	            this.optionList.value = v;
	            this.valueChanged();
	        }
	    };
	    /** Dropdown. **/
	    SelectComponent.prototype.toggleDropdown = function () {
	        if (!this.isDisabled) {
	            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
	        }
	    };
	    SelectComponent.prototype.openDropdown = function () {
	        if (!this.isOpen) {
	            this.updateWidth();
	            this.updatePosition();
	            this.isOpen = true;
	            if (this.multiple && this.filterEnabled) {
	                this.filterInput.nativeElement.focus();
	            }
	            this.opened.emit(null);
	        }
	    };
	    SelectComponent.prototype.closeDropdown = function (focus) {
	        if (focus === void 0) { focus = false; }
	        if (this.isOpen) {
	            this.clearFilterInput();
	            this.isOpen = false;
	            if (focus) {
	                this.focus();
	            }
	            this.closed.emit(null);
	        }
	    };
	    /** Select. **/
	    SelectComponent.prototype.selectOption = function (option) {
	        if (!option.selected) {
	            this.optionList.select(option, this.multiple);
	            this.valueChanged();
	            this.selected.emit(option.undecoratedCopy());
	        }
	    };
	    SelectComponent.prototype.deselectOption = function (option) {
	        var _this = this;
	        if (option.selected) {
	            this.optionList.deselect(option);
	            this.valueChanged();
	            this.deselected.emit(option.undecoratedCopy());
	            setTimeout(function () {
	                if (_this.multiple) {
	                    _this.updatePosition();
	                    _this.optionList.highlight();
	                    if (_this.isOpen) {
	                        _this.dropdown.moveHighlightedIntoView();
	                    }
	                }
	            });
	        }
	    };
	    SelectComponent.prototype.clearSelection = function () {
	        var selection = this.optionList.selection;
	        if (selection.length > 0) {
	            this.optionList.clearSelection();
	            this.valueChanged();
	            if (selection.length === 1) {
	                this.deselected.emit(selection[0].undecoratedCopy());
	            }
	            else {
	                this.deselected.emit(selection.map(function (option) {
	                    return option.undecoratedCopy();
	                }));
	            }
	        }
	    };
	    SelectComponent.prototype.toggleSelectOption = function (option) {
	        option.selected ?
	            this.deselectOption(option) : this.selectOption(option);
	    };
	    SelectComponent.prototype.selectHighlightedOption = function () {
	        var option = this.optionList.highlightedOption;
	        if (option !== null) {
	            this.selectOption(option);
	            this.closeDropdown(true);
	        }
	    };
	    SelectComponent.prototype.deselectLast = function () {
	        var sel = this.optionList.selection;
	        if (sel.length > 0) {
	            var option = sel[sel.length - 1];
	            this.deselectOption(option);
	            this.setMultipleFilterInput(option.label + ' ');
	        }
	    };
	    /** Filter. **/
	    SelectComponent.prototype.clearFilterInput = function () {
	        if (this.multiple && this.filterEnabled) {
	            this.filterInput.nativeElement.value = '';
	        }
	        else {
	            this.dropdown.clearFilterInput();
	        }
	    };
	    SelectComponent.prototype.setMultipleFilterInput = function (value) {
	        if (this.filterEnabled) {
	            this.filterInput.nativeElement.value = value;
	        }
	    };
	    SelectComponent.prototype.handleSelectContainerKeydown = function (event) {
	        var _this = this;
	        var key = event.which;
	        if (this.isOpen) {
	            if (key === this.KEYS.ESC ||
	                (key === this.KEYS.UP && event.altKey)) {
	                this.closeDropdown(true);
	            }
	            else if (key === this.KEYS.TAB) {
	                this.closeDropdown();
	            }
	            else if (key === this.KEYS.ENTER) {
	                this.selectHighlightedOption();
	            }
	            else if (key === this.KEYS.UP) {
	                this.optionList.highlightPreviousOption();
	                this.dropdown.moveHighlightedIntoView();
	                if (!this.filterEnabled) {
	                    event.preventDefault();
	                }
	            }
	            else if (key === this.KEYS.DOWN) {
	                this.optionList.highlightNextOption();
	                this.dropdown.moveHighlightedIntoView();
	                if (!this.filterEnabled) {
	                    event.preventDefault();
	                }
	            }
	        }
	        else {
	            if (key === this.KEYS.ENTER || key === this.KEYS.SPACE ||
	                (key === this.KEYS.DOWN && event.altKey)) {
	                /* FIREFOX HACK:
	                 *
	                 * The setTimeout is added to prevent the enter keydown event
	                 * to be triggered for the filter input field, which causes
	                 * the dropdown to be closed again.
	                 */
	                setTimeout(function () { _this.openDropdown(); });
	            }
	        }
	    };
	    SelectComponent.prototype.handleMultipleFilterKeydown = function (event) {
	        var key = event.which;
	        if (key === this.KEYS.BACKSPACE) {
	            if (this.hasSelected && this.filterEnabled &&
	                this.filterInput.nativeElement.value === '') {
	                this.deselectLast();
	            }
	        }
	    };
	    SelectComponent.prototype.handleSingleFilterKeydown = function (event) {
	        var key = event.which;
	        if (key === this.KEYS.ESC || key === this.KEYS.TAB
	            || key === this.KEYS.UP || key === this.KEYS.DOWN
	            || key === this.KEYS.ENTER) {
	            this.handleSelectContainerKeydown(event);
	        }
	    };
	    /** View. **/
	    SelectComponent.prototype.focus = function () {
	        this.hasFocus = true;
	        if (this.multiple && this.filterEnabled) {
	            this.filterInput.nativeElement.focus();
	        }
	        else {
	            this.selectionSpan.nativeElement.focus();
	        }
	    };
	    SelectComponent.prototype.blur = function () {
	        this.hasFocus = false;
	        this.selectionSpan.nativeElement.blur();
	    };
	    SelectComponent.prototype.updateWidth = function () {
	        this.width = this.selectionSpan.nativeElement.offsetWidth;
	    };
	    SelectComponent.prototype.updatePosition = function () {
	        var e = this.selectionSpan.nativeElement;
	        this.left = e.offsetLeft;
	        this.top = e.offsetTop + e.offsetHeight;
	    };
	    SelectComponent.prototype.updateFilterWidth = function () {
	        if (typeof this.filterInput !== 'undefined') {
	            var value = this.filterInput.nativeElement.value;
	            this.filterInputWidth = value.length === 0 ?
	                1 + this.placeholderView.length * 10 : 1 + value.length * 10;
	        }
	    };
	    SelectComponent.decorators = [
	        { type: core_1.Component, args: [{
	                    selector: 'ng-select',
	                    template: select_component_html_1.TEMPLATE,
	                    styles: [select_component_css_1.STYLE],
	                    providers: [exports.SELECT_VALUE_ACCESSOR],
	                    encapsulation: core_1.ViewEncapsulation.None
	                },] },
	    ];
	    /** @nocollapse */
	    SelectComponent.ctorParameters = function () { return []; };
	    SelectComponent.propDecorators = {
	        'options': [{ type: core_1.Input },],
	        'allowClear': [{ type: core_1.Input },],
	        'disabled': [{ type: core_1.Input },],
	        'highlightColor': [{ type: core_1.Input },],
	        'highlightTextColor': [{ type: core_1.Input },],
	        'multiple': [{ type: core_1.Input },],
	        'noFilter': [{ type: core_1.Input },],
	        'notFoundMsg': [{ type: core_1.Input },],
	        'placeholder': [{ type: core_1.Input },],
	        'opened': [{ type: core_1.Output },],
	        'closed': [{ type: core_1.Output },],
	        'selected': [{ type: core_1.Output },],
	        'deselected': [{ type: core_1.Output },],
	        'noOptionsFound': [{ type: core_1.Output },],
	        'selectionSpan': [{ type: core_1.ViewChild, args: ['selection',] },],
	        'dropdown': [{ type: core_1.ViewChild, args: ['dropdown',] },],
	        'filterInput': [{ type: core_1.ViewChild, args: ['filterInput',] },],
	    };
	    return SelectComponent;
	}());
	exports.SelectComponent = SelectComponent;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

	"use strict";
	exports.STYLE = "ng-select {\n  display: inline-block;\n  margin: 0;\n  position: relative;\n  vertical-align: middle;\n  width: 100%; }\n  ng-select * {\n    box-sizing: border-box;\n    font-family: Sans-Serif; }\n  ng-select > div {\n    border: 1px solid #ddd;\n    box-sizing: border-box;\n    cursor: pointer;\n    user-select: none;\n    width: 100%; }\n    ng-select > div.disabled {\n      background-color: #eee;\n      color: #aaa;\n      cursor: default;\n      pointer-events: none; }\n    ng-select > div > div.single {\n      display: flex;\n      height: 30px;\n      width: 100%; }\n      ng-select > div > div.single > div.value,\n      ng-select > div > div.single > div.placeholder {\n        flex: 1;\n        line-height: 30px;\n        overflow: hidden;\n        padding: 0 10px;\n        white-space: nowrap; }\n      ng-select > div > div.single > div.placeholder {\n        color: #a9a9a9; }\n      ng-select > div > div.single > div.clear,\n      ng-select > div > div.single > div.toggle {\n        color: #aaa;\n        line-height: 30px;\n        text-align: center;\n        width: 30px; }\n        ng-select > div > div.single > div.clear:hover,\n        ng-select > div > div.single > div.toggle:hover {\n          background-color: #ececec; }\n      ng-select > div > div.single > div.clear {\n        font-size: 18px; }\n      ng-select > div > div.single > div.toggle {\n        font-size: 14px; }\n    ng-select > div > div.multiple {\n      display: flex;\n      flex-flow: row wrap;\n      height: 100%;\n      min-height: 30px;\n      padding: 0 10px;\n      width: 100%; }\n      ng-select > div > div.multiple > div.option {\n        background-color: #eee;\n        border: 1px solid #aaa;\n        border-radius: 4px;\n        color: #333;\n        cursor: default;\n        display: inline-block;\n        flex-shrink: 0;\n        font-size: 14px;\n        line-height: 22px;\n        margin: 3px 5px 3px 0;\n        padding: 0 4px; }\n        ng-select > div > div.multiple > div.option span.deselect-option {\n          color: #aaa;\n          cursor: pointer;\n          font-size: 14px;\n          height: 20px;\n          line-height: 20px; }\n          ng-select > div > div.multiple > div.option span.deselect-option:hover {\n            color: #555; }\n      ng-select > div > div.multiple input {\n        background-color: transparent;\n        border: none;\n        height: 30px;\n        line-height: 30px;\n        padding: 0; }\n        ng-select > div > div.multiple input:focus {\n          outline: none; }\n";


/***/ }),
/* 82 */
/***/ (function(module, exports) {

	"use strict";
	exports.TEMPLATE = "<div\n    #selection\n    [attr.tabindex]=\"disabled ? null : 0\"\n    [ngClass]=\"{'open': isOpen, 'focus': hasFocus, 'below': isBelow, 'disabled': disabled}\"\n    (click)=\"onSelectContainerClick($event)\"\n    (focus)=\"onSelectContainerFocus()\"\n    (keydown)=\"onSelectContainerKeydown($event)\"\n    (window:click)=\"onWindowClick()\"\n    (window:resize)=\"onWindowResize()\">\n\n    <div class=\"single\"\n        *ngIf=\"!multiple\">\n        <div class=\"value\"\n            *ngIf=\"optionList.hasSelected()\">\n            {{optionList.selection[0].label}}\n        </div>\n        <div class=\"placeholder\"\n            *ngIf=\"!optionList.hasSelected()\">\n            {{placeholderView}}\n        </div>\n        <div class=\"clear\"\n            *ngIf=\"allowClear && hasSelected\"\n            (click)=\"onClearSelectionClick($event)\">\n            &#x2715;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"isOpen\">\n            &#x25B2;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"!isOpen\">\n            &#x25BC;\n        </div>\n    </div>\n\n    <div class=\"multiple\"\n        *ngIf=\"multiple\">\n        <div class=\"option\"\n            *ngFor=\"let option of optionList.selection\">\n            <span class=\"deselect-option\"\n                (click)=onDeselectOptionClick(option)>\n                &#x2715;\n            </span>\n            {{option.label}}\n        </div>\n        <input\n            *ngIf=\"filterEnabled\"\n            #filterInput\n            tabindex=\"-1\"\n            [placeholder]=\"placeholderView\"\n            [ngStyle]=\"{'width.px': filterInputWidth}\"\n            (input)=\"onMultipleFilterInput($event)\"\n            (keydown)=\"onMultipleFilterKeydown($event)\"/>\n    </div>\n\n</div>\n<select-dropdown\n    *ngIf=\"isOpen\"\n    #dropdown\n    [multiple]=\"multiple\"\n    [optionList]=\"optionList\"\n    [notFoundMsg]=\"notFoundMsg\"\n    [highlightColor]=\"highlightColor\"\n    [highlightTextColor]=\"highlightTextColor\"\n    [filterEnabled]=\"filterEnabled\"\n    [width]=\"width\"\n    [top]=\"top\"\n    [left]=\"left\"\n    (close)=\"onDropdownClose($event)\"\n    (optionClicked)=\"onDropdownOptionClicked($event)\"\n    (singleFilterClick)=\"onSingleFilterClick()\"\n    (singleFilterInput)=\"onSingleFilterInput($event)\"\n    (singleFilterKeydown)=\"onSingleFilterKeydown($event)\">\n</select-dropdown>\n";


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var option_1 = __webpack_require__(84);
	var diacritics_1 = __webpack_require__(85);
	var OptionList = (function () {
	    function OptionList(options) {
	        /* Consider using these for performance improvement. */
	        // private _selection: Array<Option>;
	        // private _filtered: Array<Option>;
	        // private _value: Array<string>;
	        this._highlightedOption = null;
	        if (typeof options === 'undefined' || options === null) {
	            options = [];
	        }
	        this._options = options.map(function (option) {
	            var o = new option_1.Option(option.value, option.label);
	            if (option.disabled) {
	                o.disable();
	            }
	            return o;
	        });
	        this._hasShown = this._options.length > 0;
	        this.highlight();
	    }
	    Object.defineProperty(OptionList.prototype, "options", {
	        /** Options. **/
	        get: function () {
	            return this._options;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OptionList.prototype.getOptionsByValue = function (value) {
	        return this.options.filter(function (option) {
	            return option.value === value;
	        });
	    };
	    Object.defineProperty(OptionList.prototype, "value", {
	        /** Value. **/
	        get: function () {
	            return this.selection.map(function (selectedOption) {
	                return selectedOption.value;
	            });
	        },
	        set: function (v) {
	            v = typeof v === 'undefined' || v === null ? [] : v;
	            this.options.forEach(function (option) {
	                option.selected = v.indexOf(option.value) > -1;
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(OptionList.prototype, "selection", {
	        /** Selection. **/
	        get: function () {
	            return this.options.filter(function (option) {
	                return option.selected;
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OptionList.prototype.select = function (option, multiple) {
	        if (!multiple) {
	            this.clearSelection();
	        }
	        option.selected = true;
	    };
	    OptionList.prototype.deselect = function (option) {
	        option.selected = false;
	    };
	    OptionList.prototype.clearSelection = function () {
	        this.options.forEach(function (option) {
	            option.selected = false;
	        });
	    };
	    Object.defineProperty(OptionList.prototype, "filtered", {
	        /** Filter. **/
	        get: function () {
	            return this.options.filter(function (option) {
	                return option.shown;
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OptionList.prototype.filter = function (term) {
	        var anyShown = false;
	        if (term.trim() === '') {
	            this.resetFilter();
	            anyShown = this.options.length > 0;
	        }
	        else {
	            this.options.forEach(function (option) {
	                var l = diacritics_1.Diacritics.strip(option.label).toUpperCase();
	                var t = diacritics_1.Diacritics.strip(term).toUpperCase();
	                option.shown = l.indexOf(t) > -1;
	                if (option.shown) {
	                    anyShown = true;
	                }
	            });
	        }
	        var toEmpty = this.hasShown && !anyShown;
	        this.highlight();
	        this._hasShown = anyShown;
	        return toEmpty;
	    };
	    OptionList.prototype.resetFilter = function () {
	        this.options.forEach(function (option) {
	            option.shown = true;
	        });
	    };
	    Object.defineProperty(OptionList.prototype, "highlightedOption", {
	        /** Highlight. **/
	        get: function () {
	            return this._highlightedOption;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OptionList.prototype.highlight = function () {
	        var option = this.hasShownSelected() ?
	            this.getFirstShownSelected() : this.getFirstShown();
	        this.highlightOption(option);
	    };
	    OptionList.prototype.highlightOption = function (option) {
	        this.clearHighlightedOption();
	        if (option !== null) {
	            option.highlighted = true;
	            this._highlightedOption = option;
	        }
	    };
	    OptionList.prototype.highlightNextOption = function () {
	        var shownOptions = this.filtered;
	        var index = this.getHighlightedIndexFromList(shownOptions);
	        if (index > -1 && index < shownOptions.length - 1) {
	            this.highlightOption(shownOptions[index + 1]);
	        }
	    };
	    OptionList.prototype.highlightPreviousOption = function () {
	        var shownOptions = this.filtered;
	        var index = this.getHighlightedIndexFromList(shownOptions);
	        if (index > 0) {
	            this.highlightOption(shownOptions[index - 1]);
	        }
	    };
	    OptionList.prototype.clearHighlightedOption = function () {
	        if (this.highlightedOption !== null) {
	            this.highlightedOption.highlighted = false;
	            this._highlightedOption = null;
	        }
	    };
	    OptionList.prototype.getHighlightedIndexFromList = function (options) {
	        for (var i = 0; i < options.length; i++) {
	            if (options[i].highlighted) {
	                return i;
	            }
	        }
	        return -1;
	    };
	    OptionList.prototype.getHighlightedIndex = function () {
	        return this.getHighlightedIndexFromList(this.filtered);
	    };
	    Object.defineProperty(OptionList.prototype, "hasShown", {
	        /** Util. **/
	        get: function () {
	            return this._hasShown;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OptionList.prototype.hasSelected = function () {
	        return this.options.some(function (option) {
	            return option.selected;
	        });
	    };
	    OptionList.prototype.hasShownSelected = function () {
	        return this.options.some(function (option) {
	            return option.shown && option.selected;
	        });
	    };
	    OptionList.prototype.getFirstShown = function () {
	        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
	            var option = _a[_i];
	            if (option.shown) {
	                return option;
	            }
	        }
	        return null;
	    };
	    OptionList.prototype.getFirstShownSelected = function () {
	        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
	            var option = _a[_i];
	            if (option.shown && option.selected) {
	                return option;
	            }
	        }
	        return null;
	    };
	    // v0 and v1 are assumed not to be undefined or null.
	    OptionList.equalValues = function (v0, v1) {
	        if (v0.length !== v1.length) {
	            return false;
	        }
	        var a = v0.slice().sort();
	        var b = v1.slice().sort();
	        return a.every(function (v, i) {
	            return v === b[i];
	        });
	    };
	    return OptionList;
	}());
	exports.OptionList = OptionList;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

	"use strict";
	var Option = (function () {
	    function Option(value, label) {
	        this.value = value;
	        this.label = label;
	        this.disabled = false;
	        this.highlighted = false;
	        this.selected = false;
	        this.shown = true;
	    }
	    Option.prototype.show = function () {
	        this.shown = true;
	    };
	    Option.prototype.hide = function () {
	        this.shown = false;
	    };
	    Option.prototype.disable = function () {
	        this.disabled = true;
	    };
	    Option.prototype.enable = function () {
	        this.disabled = false;
	    };
	    Option.prototype.undecoratedCopy = function () {
	        return {
	            label: this.label,
	            value: this.value
	        };
	    };
	    return Option;
	}());
	exports.Option = Option;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

	"use strict";
	var Diacritics = (function () {
	    function Diacritics() {
	    }
	    Diacritics.strip = function (text) {
	        var _this = this;
	        var match = function (a) {
	            return _this.DIACRITICS[a] || a;
	        };
	        return text.replace(/[^\u0000-\u007E]/g, match);
	    };
	    Diacritics.DIACRITICS = {
	        '\u24B6': 'A',
	        '\uFF21': 'A',
	        '\u00C0': 'A',
	        '\u00C1': 'A',
	        '\u00C2': 'A',
	        '\u1EA6': 'A',
	        '\u1EA4': 'A',
	        '\u1EAA': 'A',
	        '\u1EA8': 'A',
	        '\u00C3': 'A',
	        '\u0100': 'A',
	        '\u0102': 'A',
	        '\u1EB0': 'A',
	        '\u1EAE': 'A',
	        '\u1EB4': 'A',
	        '\u1EB2': 'A',
	        '\u0226': 'A',
	        '\u01E0': 'A',
	        '\u00C4': 'A',
	        '\u01DE': 'A',
	        '\u1EA2': 'A',
	        '\u00C5': 'A',
	        '\u01FA': 'A',
	        '\u01CD': 'A',
	        '\u0200': 'A',
	        '\u0202': 'A',
	        '\u1EA0': 'A',
	        '\u1EAC': 'A',
	        '\u1EB6': 'A',
	        '\u1E00': 'A',
	        '\u0104': 'A',
	        '\u023A': 'A',
	        '\u2C6F': 'A',
	        '\uA732': 'AA',
	        '\u00C6': 'AE',
	        '\u01FC': 'AE',
	        '\u01E2': 'AE',
	        '\uA734': 'AO',
	        '\uA736': 'AU',
	        '\uA738': 'AV',
	        '\uA73A': 'AV',
	        '\uA73C': 'AY',
	        '\u24B7': 'B',
	        '\uFF22': 'B',
	        '\u1E02': 'B',
	        '\u1E04': 'B',
	        '\u1E06': 'B',
	        '\u0243': 'B',
	        '\u0182': 'B',
	        '\u0181': 'B',
	        '\u24B8': 'C',
	        '\uFF23': 'C',
	        '\u0106': 'C',
	        '\u0108': 'C',
	        '\u010A': 'C',
	        '\u010C': 'C',
	        '\u00C7': 'C',
	        '\u1E08': 'C',
	        '\u0187': 'C',
	        '\u023B': 'C',
	        '\uA73E': 'C',
	        '\u24B9': 'D',
	        '\uFF24': 'D',
	        '\u1E0A': 'D',
	        '\u010E': 'D',
	        '\u1E0C': 'D',
	        '\u1E10': 'D',
	        '\u1E12': 'D',
	        '\u1E0E': 'D',
	        '\u0110': 'D',
	        '\u018B': 'D',
	        '\u018A': 'D',
	        '\u0189': 'D',
	        '\uA779': 'D',
	        '\u01F1': 'DZ',
	        '\u01C4': 'DZ',
	        '\u01F2': 'Dz',
	        '\u01C5': 'Dz',
	        '\u24BA': 'E',
	        '\uFF25': 'E',
	        '\u00C8': 'E',
	        '\u00C9': 'E',
	        '\u00CA': 'E',
	        '\u1EC0': 'E',
	        '\u1EBE': 'E',
	        '\u1EC4': 'E',
	        '\u1EC2': 'E',
	        '\u1EBC': 'E',
	        '\u0112': 'E',
	        '\u1E14': 'E',
	        '\u1E16': 'E',
	        '\u0114': 'E',
	        '\u0116': 'E',
	        '\u00CB': 'E',
	        '\u1EBA': 'E',
	        '\u011A': 'E',
	        '\u0204': 'E',
	        '\u0206': 'E',
	        '\u1EB8': 'E',
	        '\u1EC6': 'E',
	        '\u0228': 'E',
	        '\u1E1C': 'E',
	        '\u0118': 'E',
	        '\u1E18': 'E',
	        '\u1E1A': 'E',
	        '\u0190': 'E',
	        '\u018E': 'E',
	        '\u24BB': 'F',
	        '\uFF26': 'F',
	        '\u1E1E': 'F',
	        '\u0191': 'F',
	        '\uA77B': 'F',
	        '\u24BC': 'G',
	        '\uFF27': 'G',
	        '\u01F4': 'G',
	        '\u011C': 'G',
	        '\u1E20': 'G',
	        '\u011E': 'G',
	        '\u0120': 'G',
	        '\u01E6': 'G',
	        '\u0122': 'G',
	        '\u01E4': 'G',
	        '\u0193': 'G',
	        '\uA7A0': 'G',
	        '\uA77D': 'G',
	        '\uA77E': 'G',
	        '\u24BD': 'H',
	        '\uFF28': 'H',
	        '\u0124': 'H',
	        '\u1E22': 'H',
	        '\u1E26': 'H',
	        '\u021E': 'H',
	        '\u1E24': 'H',
	        '\u1E28': 'H',
	        '\u1E2A': 'H',
	        '\u0126': 'H',
	        '\u2C67': 'H',
	        '\u2C75': 'H',
	        '\uA78D': 'H',
	        '\u24BE': 'I',
	        '\uFF29': 'I',
	        '\u00CC': 'I',
	        '\u00CD': 'I',
	        '\u00CE': 'I',
	        '\u0128': 'I',
	        '\u012A': 'I',
	        '\u012C': 'I',
	        '\u0130': 'I',
	        '\u00CF': 'I',
	        '\u1E2E': 'I',
	        '\u1EC8': 'I',
	        '\u01CF': 'I',
	        '\u0208': 'I',
	        '\u020A': 'I',
	        '\u1ECA': 'I',
	        '\u012E': 'I',
	        '\u1E2C': 'I',
	        '\u0197': 'I',
	        '\u24BF': 'J',
	        '\uFF2A': 'J',
	        '\u0134': 'J',
	        '\u0248': 'J',
	        '\u24C0': 'K',
	        '\uFF2B': 'K',
	        '\u1E30': 'K',
	        '\u01E8': 'K',
	        '\u1E32': 'K',
	        '\u0136': 'K',
	        '\u1E34': 'K',
	        '\u0198': 'K',
	        '\u2C69': 'K',
	        '\uA740': 'K',
	        '\uA742': 'K',
	        '\uA744': 'K',
	        '\uA7A2': 'K',
	        '\u24C1': 'L',
	        '\uFF2C': 'L',
	        '\u013F': 'L',
	        '\u0139': 'L',
	        '\u013D': 'L',
	        '\u1E36': 'L',
	        '\u1E38': 'L',
	        '\u013B': 'L',
	        '\u1E3C': 'L',
	        '\u1E3A': 'L',
	        '\u0141': 'L',
	        '\u023D': 'L',
	        '\u2C62': 'L',
	        '\u2C60': 'L',
	        '\uA748': 'L',
	        '\uA746': 'L',
	        '\uA780': 'L',
	        '\u01C7': 'LJ',
	        '\u01C8': 'Lj',
	        '\u24C2': 'M',
	        '\uFF2D': 'M',
	        '\u1E3E': 'M',
	        '\u1E40': 'M',
	        '\u1E42': 'M',
	        '\u2C6E': 'M',
	        '\u019C': 'M',
	        '\u24C3': 'N',
	        '\uFF2E': 'N',
	        '\u01F8': 'N',
	        '\u0143': 'N',
	        '\u00D1': 'N',
	        '\u1E44': 'N',
	        '\u0147': 'N',
	        '\u1E46': 'N',
	        '\u0145': 'N',
	        '\u1E4A': 'N',
	        '\u1E48': 'N',
	        '\u0220': 'N',
	        '\u019D': 'N',
	        '\uA790': 'N',
	        '\uA7A4': 'N',
	        '\u01CA': 'NJ',
	        '\u01CB': 'Nj',
	        '\u24C4': 'O',
	        '\uFF2F': 'O',
	        '\u00D2': 'O',
	        '\u00D3': 'O',
	        '\u00D4': 'O',
	        '\u1ED2': 'O',
	        '\u1ED0': 'O',
	        '\u1ED6': 'O',
	        '\u1ED4': 'O',
	        '\u00D5': 'O',
	        '\u1E4C': 'O',
	        '\u022C': 'O',
	        '\u1E4E': 'O',
	        '\u014C': 'O',
	        '\u1E50': 'O',
	        '\u1E52': 'O',
	        '\u014E': 'O',
	        '\u022E': 'O',
	        '\u0230': 'O',
	        '\u00D6': 'O',
	        '\u022A': 'O',
	        '\u1ECE': 'O',
	        '\u0150': 'O',
	        '\u01D1': 'O',
	        '\u020C': 'O',
	        '\u020E': 'O',
	        '\u01A0': 'O',
	        '\u1EDC': 'O',
	        '\u1EDA': 'O',
	        '\u1EE0': 'O',
	        '\u1EDE': 'O',
	        '\u1EE2': 'O',
	        '\u1ECC': 'O',
	        '\u1ED8': 'O',
	        '\u01EA': 'O',
	        '\u01EC': 'O',
	        '\u00D8': 'O',
	        '\u01FE': 'O',
	        '\u0186': 'O',
	        '\u019F': 'O',
	        '\uA74A': 'O',
	        '\uA74C': 'O',
	        '\u01A2': 'OI',
	        '\uA74E': 'OO',
	        '\u0222': 'OU',
	        '\u24C5': 'P',
	        '\uFF30': 'P',
	        '\u1E54': 'P',
	        '\u1E56': 'P',
	        '\u01A4': 'P',
	        '\u2C63': 'P',
	        '\uA750': 'P',
	        '\uA752': 'P',
	        '\uA754': 'P',
	        '\u24C6': 'Q',
	        '\uFF31': 'Q',
	        '\uA756': 'Q',
	        '\uA758': 'Q',
	        '\u024A': 'Q',
	        '\u24C7': 'R',
	        '\uFF32': 'R',
	        '\u0154': 'R',
	        '\u1E58': 'R',
	        '\u0158': 'R',
	        '\u0210': 'R',
	        '\u0212': 'R',
	        '\u1E5A': 'R',
	        '\u1E5C': 'R',
	        '\u0156': 'R',
	        '\u1E5E': 'R',
	        '\u024C': 'R',
	        '\u2C64': 'R',
	        '\uA75A': 'R',
	        '\uA7A6': 'R',
	        '\uA782': 'R',
	        '\u24C8': 'S',
	        '\uFF33': 'S',
	        '\u1E9E': 'S',
	        '\u015A': 'S',
	        '\u1E64': 'S',
	        '\u015C': 'S',
	        '\u1E60': 'S',
	        '\u0160': 'S',
	        '\u1E66': 'S',
	        '\u1E62': 'S',
	        '\u1E68': 'S',
	        '\u0218': 'S',
	        '\u015E': 'S',
	        '\u2C7E': 'S',
	        '\uA7A8': 'S',
	        '\uA784': 'S',
	        '\u24C9': 'T',
	        '\uFF34': 'T',
	        '\u1E6A': 'T',
	        '\u0164': 'T',
	        '\u1E6C': 'T',
	        '\u021A': 'T',
	        '\u0162': 'T',
	        '\u1E70': 'T',
	        '\u1E6E': 'T',
	        '\u0166': 'T',
	        '\u01AC': 'T',
	        '\u01AE': 'T',
	        '\u023E': 'T',
	        '\uA786': 'T',
	        '\uA728': 'TZ',
	        '\u24CA': 'U',
	        '\uFF35': 'U',
	        '\u00D9': 'U',
	        '\u00DA': 'U',
	        '\u00DB': 'U',
	        '\u0168': 'U',
	        '\u1E78': 'U',
	        '\u016A': 'U',
	        '\u1E7A': 'U',
	        '\u016C': 'U',
	        '\u00DC': 'U',
	        '\u01DB': 'U',
	        '\u01D7': 'U',
	        '\u01D5': 'U',
	        '\u01D9': 'U',
	        '\u1EE6': 'U',
	        '\u016E': 'U',
	        '\u0170': 'U',
	        '\u01D3': 'U',
	        '\u0214': 'U',
	        '\u0216': 'U',
	        '\u01AF': 'U',
	        '\u1EEA': 'U',
	        '\u1EE8': 'U',
	        '\u1EEE': 'U',
	        '\u1EEC': 'U',
	        '\u1EF0': 'U',
	        '\u1EE4': 'U',
	        '\u1E72': 'U',
	        '\u0172': 'U',
	        '\u1E76': 'U',
	        '\u1E74': 'U',
	        '\u0244': 'U',
	        '\u24CB': 'V',
	        '\uFF36': 'V',
	        '\u1E7C': 'V',
	        '\u1E7E': 'V',
	        '\u01B2': 'V',
	        '\uA75E': 'V',
	        '\u0245': 'V',
	        '\uA760': 'VY',
	        '\u24CC': 'W',
	        '\uFF37': 'W',
	        '\u1E80': 'W',
	        '\u1E82': 'W',
	        '\u0174': 'W',
	        '\u1E86': 'W',
	        '\u1E84': 'W',
	        '\u1E88': 'W',
	        '\u2C72': 'W',
	        '\u24CD': 'X',
	        '\uFF38': 'X',
	        '\u1E8A': 'X',
	        '\u1E8C': 'X',
	        '\u24CE': 'Y',
	        '\uFF39': 'Y',
	        '\u1EF2': 'Y',
	        '\u00DD': 'Y',
	        '\u0176': 'Y',
	        '\u1EF8': 'Y',
	        '\u0232': 'Y',
	        '\u1E8E': 'Y',
	        '\u0178': 'Y',
	        '\u1EF6': 'Y',
	        '\u1EF4': 'Y',
	        '\u01B3': 'Y',
	        '\u024E': 'Y',
	        '\u1EFE': 'Y',
	        '\u24CF': 'Z',
	        '\uFF3A': 'Z',
	        '\u0179': 'Z',
	        '\u1E90': 'Z',
	        '\u017B': 'Z',
	        '\u017D': 'Z',
	        '\u1E92': 'Z',
	        '\u1E94': 'Z',
	        '\u01B5': 'Z',
	        '\u0224': 'Z',
	        '\u2C7F': 'Z',
	        '\u2C6B': 'Z',
	        '\uA762': 'Z',
	        '\u24D0': 'a',
	        '\uFF41': 'a',
	        '\u1E9A': 'a',
	        '\u00E0': 'a',
	        '\u00E1': 'a',
	        '\u00E2': 'a',
	        '\u1EA7': 'a',
	        '\u1EA5': 'a',
	        '\u1EAB': 'a',
	        '\u1EA9': 'a',
	        '\u00E3': 'a',
	        '\u0101': 'a',
	        '\u0103': 'a',
	        '\u1EB1': 'a',
	        '\u1EAF': 'a',
	        '\u1EB5': 'a',
	        '\u1EB3': 'a',
	        '\u0227': 'a',
	        '\u01E1': 'a',
	        '\u00E4': 'a',
	        '\u01DF': 'a',
	        '\u1EA3': 'a',
	        '\u00E5': 'a',
	        '\u01FB': 'a',
	        '\u01CE': 'a',
	        '\u0201': 'a',
	        '\u0203': 'a',
	        '\u1EA1': 'a',
	        '\u1EAD': 'a',
	        '\u1EB7': 'a',
	        '\u1E01': 'a',
	        '\u0105': 'a',
	        '\u2C65': 'a',
	        '\u0250': 'a',
	        '\uA733': 'aa',
	        '\u00E6': 'ae',
	        '\u01FD': 'ae',
	        '\u01E3': 'ae',
	        '\uA735': 'ao',
	        '\uA737': 'au',
	        '\uA739': 'av',
	        '\uA73B': 'av',
	        '\uA73D': 'ay',
	        '\u24D1': 'b',
	        '\uFF42': 'b',
	        '\u1E03': 'b',
	        '\u1E05': 'b',
	        '\u1E07': 'b',
	        '\u0180': 'b',
	        '\u0183': 'b',
	        '\u0253': 'b',
	        '\u24D2': 'c',
	        '\uFF43': 'c',
	        '\u0107': 'c',
	        '\u0109': 'c',
	        '\u010B': 'c',
	        '\u010D': 'c',
	        '\u00E7': 'c',
	        '\u1E09': 'c',
	        '\u0188': 'c',
	        '\u023C': 'c',
	        '\uA73F': 'c',
	        '\u2184': 'c',
	        '\u24D3': 'd',
	        '\uFF44': 'd',
	        '\u1E0B': 'd',
	        '\u010F': 'd',
	        '\u1E0D': 'd',
	        '\u1E11': 'd',
	        '\u1E13': 'd',
	        '\u1E0F': 'd',
	        '\u0111': 'd',
	        '\u018C': 'd',
	        '\u0256': 'd',
	        '\u0257': 'd',
	        '\uA77A': 'd',
	        '\u01F3': 'dz',
	        '\u01C6': 'dz',
	        '\u24D4': 'e',
	        '\uFF45': 'e',
	        '\u00E8': 'e',
	        '\u00E9': 'e',
	        '\u00EA': 'e',
	        '\u1EC1': 'e',
	        '\u1EBF': 'e',
	        '\u1EC5': 'e',
	        '\u1EC3': 'e',
	        '\u1EBD': 'e',
	        '\u0113': 'e',
	        '\u1E15': 'e',
	        '\u1E17': 'e',
	        '\u0115': 'e',
	        '\u0117': 'e',
	        '\u00EB': 'e',
	        '\u1EBB': 'e',
	        '\u011B': 'e',
	        '\u0205': 'e',
	        '\u0207': 'e',
	        '\u1EB9': 'e',
	        '\u1EC7': 'e',
	        '\u0229': 'e',
	        '\u1E1D': 'e',
	        '\u0119': 'e',
	        '\u1E19': 'e',
	        '\u1E1B': 'e',
	        '\u0247': 'e',
	        '\u025B': 'e',
	        '\u01DD': 'e',
	        '\u24D5': 'f',
	        '\uFF46': 'f',
	        '\u1E1F': 'f',
	        '\u0192': 'f',
	        '\uA77C': 'f',
	        '\u24D6': 'g',
	        '\uFF47': 'g',
	        '\u01F5': 'g',
	        '\u011D': 'g',
	        '\u1E21': 'g',
	        '\u011F': 'g',
	        '\u0121': 'g',
	        '\u01E7': 'g',
	        '\u0123': 'g',
	        '\u01E5': 'g',
	        '\u0260': 'g',
	        '\uA7A1': 'g',
	        '\u1D79': 'g',
	        '\uA77F': 'g',
	        '\u24D7': 'h',
	        '\uFF48': 'h',
	        '\u0125': 'h',
	        '\u1E23': 'h',
	        '\u1E27': 'h',
	        '\u021F': 'h',
	        '\u1E25': 'h',
	        '\u1E29': 'h',
	        '\u1E2B': 'h',
	        '\u1E96': 'h',
	        '\u0127': 'h',
	        '\u2C68': 'h',
	        '\u2C76': 'h',
	        '\u0265': 'h',
	        '\u0195': 'hv',
	        '\u24D8': 'i',
	        '\uFF49': 'i',
	        '\u00EC': 'i',
	        '\u00ED': 'i',
	        '\u00EE': 'i',
	        '\u0129': 'i',
	        '\u012B': 'i',
	        '\u012D': 'i',
	        '\u00EF': 'i',
	        '\u1E2F': 'i',
	        '\u1EC9': 'i',
	        '\u01D0': 'i',
	        '\u0209': 'i',
	        '\u020B': 'i',
	        '\u1ECB': 'i',
	        '\u012F': 'i',
	        '\u1E2D': 'i',
	        '\u0268': 'i',
	        '\u0131': 'i',
	        '\u24D9': 'j',
	        '\uFF4A': 'j',
	        '\u0135': 'j',
	        '\u01F0': 'j',
	        '\u0249': 'j',
	        '\u24DA': 'k',
	        '\uFF4B': 'k',
	        '\u1E31': 'k',
	        '\u01E9': 'k',
	        '\u1E33': 'k',
	        '\u0137': 'k',
	        '\u1E35': 'k',
	        '\u0199': 'k',
	        '\u2C6A': 'k',
	        '\uA741': 'k',
	        '\uA743': 'k',
	        '\uA745': 'k',
	        '\uA7A3': 'k',
	        '\u24DB': 'l',
	        '\uFF4C': 'l',
	        '\u0140': 'l',
	        '\u013A': 'l',
	        '\u013E': 'l',
	        '\u1E37': 'l',
	        '\u1E39': 'l',
	        '\u013C': 'l',
	        '\u1E3D': 'l',
	        '\u1E3B': 'l',
	        '\u017F': 'l',
	        '\u0142': 'l',
	        '\u019A': 'l',
	        '\u026B': 'l',
	        '\u2C61': 'l',
	        '\uA749': 'l',
	        '\uA781': 'l',
	        '\uA747': 'l',
	        '\u01C9': 'lj',
	        '\u24DC': 'm',
	        '\uFF4D': 'm',
	        '\u1E3F': 'm',
	        '\u1E41': 'm',
	        '\u1E43': 'm',
	        '\u0271': 'm',
	        '\u026F': 'm',
	        '\u24DD': 'n',
	        '\uFF4E': 'n',
	        '\u01F9': 'n',
	        '\u0144': 'n',
	        '\u00F1': 'n',
	        '\u1E45': 'n',
	        '\u0148': 'n',
	        '\u1E47': 'n',
	        '\u0146': 'n',
	        '\u1E4B': 'n',
	        '\u1E49': 'n',
	        '\u019E': 'n',
	        '\u0272': 'n',
	        '\u0149': 'n',
	        '\uA791': 'n',
	        '\uA7A5': 'n',
	        '\u01CC': 'nj',
	        '\u24DE': 'o',
	        '\uFF4F': 'o',
	        '\u00F2': 'o',
	        '\u00F3': 'o',
	        '\u00F4': 'o',
	        '\u1ED3': 'o',
	        '\u1ED1': 'o',
	        '\u1ED7': 'o',
	        '\u1ED5': 'o',
	        '\u00F5': 'o',
	        '\u1E4D': 'o',
	        '\u022D': 'o',
	        '\u1E4F': 'o',
	        '\u014D': 'o',
	        '\u1E51': 'o',
	        '\u1E53': 'o',
	        '\u014F': 'o',
	        '\u022F': 'o',
	        '\u0231': 'o',
	        '\u00F6': 'o',
	        '\u022B': 'o',
	        '\u1ECF': 'o',
	        '\u0151': 'o',
	        '\u01D2': 'o',
	        '\u020D': 'o',
	        '\u020F': 'o',
	        '\u01A1': 'o',
	        '\u1EDD': 'o',
	        '\u1EDB': 'o',
	        '\u1EE1': 'o',
	        '\u1EDF': 'o',
	        '\u1EE3': 'o',
	        '\u1ECD': 'o',
	        '\u1ED9': 'o',
	        '\u01EB': 'o',
	        '\u01ED': 'o',
	        '\u00F8': 'o',
	        '\u01FF': 'o',
	        '\u0254': 'o',
	        '\uA74B': 'o',
	        '\uA74D': 'o',
	        '\u0275': 'o',
	        '\u01A3': 'oi',
	        '\u0223': 'ou',
	        '\uA74F': 'oo',
	        '\u24DF': 'p',
	        '\uFF50': 'p',
	        '\u1E55': 'p',
	        '\u1E57': 'p',
	        '\u01A5': 'p',
	        '\u1D7D': 'p',
	        '\uA751': 'p',
	        '\uA753': 'p',
	        '\uA755': 'p',
	        '\u24E0': 'q',
	        '\uFF51': 'q',
	        '\u024B': 'q',
	        '\uA757': 'q',
	        '\uA759': 'q',
	        '\u24E1': 'r',
	        '\uFF52': 'r',
	        '\u0155': 'r',
	        '\u1E59': 'r',
	        '\u0159': 'r',
	        '\u0211': 'r',
	        '\u0213': 'r',
	        '\u1E5B': 'r',
	        '\u1E5D': 'r',
	        '\u0157': 'r',
	        '\u1E5F': 'r',
	        '\u024D': 'r',
	        '\u027D': 'r',
	        '\uA75B': 'r',
	        '\uA7A7': 'r',
	        '\uA783': 'r',
	        '\u24E2': 's',
	        '\uFF53': 's',
	        '\u00DF': 's',
	        '\u015B': 's',
	        '\u1E65': 's',
	        '\u015D': 's',
	        '\u1E61': 's',
	        '\u0161': 's',
	        '\u1E67': 's',
	        '\u1E63': 's',
	        '\u1E69': 's',
	        '\u0219': 's',
	        '\u015F': 's',
	        '\u023F': 's',
	        '\uA7A9': 's',
	        '\uA785': 's',
	        '\u1E9B': 's',
	        '\u24E3': 't',
	        '\uFF54': 't',
	        '\u1E6B': 't',
	        '\u1E97': 't',
	        '\u0165': 't',
	        '\u1E6D': 't',
	        '\u021B': 't',
	        '\u0163': 't',
	        '\u1E71': 't',
	        '\u1E6F': 't',
	        '\u0167': 't',
	        '\u01AD': 't',
	        '\u0288': 't',
	        '\u2C66': 't',
	        '\uA787': 't',
	        '\uA729': 'tz',
	        '\u24E4': 'u',
	        '\uFF55': 'u',
	        '\u00F9': 'u',
	        '\u00FA': 'u',
	        '\u00FB': 'u',
	        '\u0169': 'u',
	        '\u1E79': 'u',
	        '\u016B': 'u',
	        '\u1E7B': 'u',
	        '\u016D': 'u',
	        '\u00FC': 'u',
	        '\u01DC': 'u',
	        '\u01D8': 'u',
	        '\u01D6': 'u',
	        '\u01DA': 'u',
	        '\u1EE7': 'u',
	        '\u016F': 'u',
	        '\u0171': 'u',
	        '\u01D4': 'u',
	        '\u0215': 'u',
	        '\u0217': 'u',
	        '\u01B0': 'u',
	        '\u1EEB': 'u',
	        '\u1EE9': 'u',
	        '\u1EEF': 'u',
	        '\u1EED': 'u',
	        '\u1EF1': 'u',
	        '\u1EE5': 'u',
	        '\u1E73': 'u',
	        '\u0173': 'u',
	        '\u1E77': 'u',
	        '\u1E75': 'u',
	        '\u0289': 'u',
	        '\u24E5': 'v',
	        '\uFF56': 'v',
	        '\u1E7D': 'v',
	        '\u1E7F': 'v',
	        '\u028B': 'v',
	        '\uA75F': 'v',
	        '\u028C': 'v',
	        '\uA761': 'vy',
	        '\u24E6': 'w',
	        '\uFF57': 'w',
	        '\u1E81': 'w',
	        '\u1E83': 'w',
	        '\u0175': 'w',
	        '\u1E87': 'w',
	        '\u1E85': 'w',
	        '\u1E98': 'w',
	        '\u1E89': 'w',
	        '\u2C73': 'w',
	        '\u24E7': 'x',
	        '\uFF58': 'x',
	        '\u1E8B': 'x',
	        '\u1E8D': 'x',
	        '\u24E8': 'y',
	        '\uFF59': 'y',
	        '\u1EF3': 'y',
	        '\u00FD': 'y',
	        '\u0177': 'y',
	        '\u1EF9': 'y',
	        '\u0233': 'y',
	        '\u1E8F': 'y',
	        '\u00FF': 'y',
	        '\u1EF7': 'y',
	        '\u1E99': 'y',
	        '\u1EF5': 'y',
	        '\u01B4': 'y',
	        '\u024F': 'y',
	        '\u1EFF': 'y',
	        '\u24E9': 'z',
	        '\uFF5A': 'z',
	        '\u017A': 'z',
	        '\u1E91': 'z',
	        '\u017C': 'z',
	        '\u017E': 'z',
	        '\u1E93': 'z',
	        '\u1E95': 'z',
	        '\u01B6': 'z',
	        '\u0225': 'z',
	        '\u0240': 'z',
	        '\u2C6C': 'z',
	        '\uA763': 'z',
	        '\u0386': '\u0391',
	        '\u0388': '\u0395',
	        '\u0389': '\u0397',
	        '\u038A': '\u0399',
	        '\u03AA': '\u0399',
	        '\u038C': '\u039F',
	        '\u038E': '\u03A5',
	        '\u03AB': '\u03A5',
	        '\u038F': '\u03A9',
	        '\u03AC': '\u03B1',
	        '\u03AD': '\u03B5',
	        '\u03AE': '\u03B7',
	        '\u03AF': '\u03B9',
	        '\u03CA': '\u03B9',
	        '\u0390': '\u03B9',
	        '\u03CC': '\u03BF',
	        '\u03CD': '\u03C5',
	        '\u03CB': '\u03C5',
	        '\u03B0': '\u03C5',
	        '\u03C9': '\u03C9',
	        '\u03C2': '\u03C3'
	    };
	    return Diacritics;
	}());
	exports.Diacritics = Diacritics;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var select_dropdown_component_css_1 = __webpack_require__(87);
	var select_dropdown_component_html_1 = __webpack_require__(88);
	var SelectDropdownComponent = (function () {
	    function SelectDropdownComponent() {
	        this.close = new core_1.EventEmitter();
	        this.optionClicked = new core_1.EventEmitter();
	        this.singleFilterClick = new core_1.EventEmitter();
	        this.singleFilterInput = new core_1.EventEmitter();
	        this.singleFilterKeydown = new core_1.EventEmitter();
	        this.disabledColor = '#fff';
	        this.disabledTextColor = '9e9e9e';
	    }
	    /** Event handlers. **/
	    // Angular life cycle hooks.
	    SelectDropdownComponent.prototype.ngOnInit = function () {
	        this.optionsReset();
	    };
	    SelectDropdownComponent.prototype.ngOnChanges = function (changes) {
	        if (changes.hasOwnProperty('optionList')) {
	            this.optionsReset();
	        }
	    };
	    SelectDropdownComponent.prototype.ngAfterViewInit = function () {
	        this.moveHighlightedIntoView();
	        if (!this.multiple && this.filterEnabled) {
	            this.filterInput.nativeElement.focus();
	        }
	    };
	    // Filter input (single select).
	    SelectDropdownComponent.prototype.onSingleFilterClick = function (event) {
	        this.singleFilterClick.emit(null);
	    };
	    SelectDropdownComponent.prototype.onSingleFilterInput = function (event) {
	        this.singleFilterInput.emit(event.target.value);
	    };
	    SelectDropdownComponent.prototype.onSingleFilterKeydown = function (event) {
	        this.singleFilterKeydown.emit(event);
	    };
	    // Options list.
	    SelectDropdownComponent.prototype.onOptionsWheel = function (event) {
	        this.handleOptionsWheel(event);
	    };
	    SelectDropdownComponent.prototype.onOptionMouseover = function (option) {
	        this.optionList.highlightOption(option);
	    };
	    SelectDropdownComponent.prototype.onOptionClick = function (option) {
	        this.optionClicked.emit(option);
	    };
	    /** Initialization. **/
	    SelectDropdownComponent.prototype.optionsReset = function () {
	        this.optionList.filter('');
	        this.optionList.highlight();
	    };
	    /** View. **/
	    SelectDropdownComponent.prototype.getOptionStyle = function (option) {
	        if (option.highlighted) {
	            var style = {};
	            if (typeof this.highlightColor !== 'undefined') {
	                style['background-color'] = this.highlightColor;
	            }
	            if (typeof this.highlightTextColor !== 'undefined') {
	                style['color'] = this.highlightTextColor;
	            }
	            return style;
	        }
	        else {
	            return {};
	        }
	    };
	    SelectDropdownComponent.prototype.clearFilterInput = function () {
	        if (this.filterEnabled) {
	            this.filterInput.nativeElement.value = '';
	        }
	    };
	    SelectDropdownComponent.prototype.moveHighlightedIntoView = function () {
	        var list = this.optionsList.nativeElement;
	        var listHeight = list.offsetHeight;
	        var itemIndex = this.optionList.getHighlightedIndex();
	        if (itemIndex > -1) {
	            var item = list.children[0].children[itemIndex];
	            var itemHeight = item.offsetHeight;
	            var itemTop = itemIndex * itemHeight;
	            var itemBottom = itemTop + itemHeight;
	            var viewTop = list.scrollTop;
	            var viewBottom = viewTop + listHeight;
	            if (itemBottom > viewBottom) {
	                list.scrollTop = itemBottom - listHeight;
	            }
	            else if (itemTop < viewTop) {
	                list.scrollTop = itemTop;
	            }
	        }
	    };
	    SelectDropdownComponent.prototype.handleOptionsWheel = function (e) {
	        var div = this.optionsList.nativeElement;
	        var atTop = div.scrollTop === 0;
	        var atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
	        if (atTop && e.deltaY < 0) {
	            e.preventDefault();
	        }
	        else if (atBottom && e.deltaY > 0) {
	            e.preventDefault();
	        }
	    };
	    SelectDropdownComponent.decorators = [
	        { type: core_1.Component, args: [{
	                    selector: 'select-dropdown',
	                    template: select_dropdown_component_html_1.TEMPLATE,
	                    styles: [select_dropdown_component_css_1.STYLE],
	                    encapsulation: core_1.ViewEncapsulation.None
	                },] },
	    ];
	    /** @nocollapse */
	    SelectDropdownComponent.ctorParameters = function () { return []; };
	    SelectDropdownComponent.propDecorators = {
	        'filterEnabled': [{ type: core_1.Input },],
	        'highlightColor': [{ type: core_1.Input },],
	        'highlightTextColor': [{ type: core_1.Input },],
	        'left': [{ type: core_1.Input },],
	        'multiple': [{ type: core_1.Input },],
	        'notFoundMsg': [{ type: core_1.Input },],
	        'optionList': [{ type: core_1.Input },],
	        'top': [{ type: core_1.Input },],
	        'width': [{ type: core_1.Input },],
	        'close': [{ type: core_1.Output },],
	        'optionClicked': [{ type: core_1.Output },],
	        'singleFilterClick': [{ type: core_1.Output },],
	        'singleFilterInput': [{ type: core_1.Output },],
	        'singleFilterKeydown': [{ type: core_1.Output },],
	        'filterInput': [{ type: core_1.ViewChild, args: ['filterInput',] },],
	        'optionsList': [{ type: core_1.ViewChild, args: ['optionsList',] },],
	    };
	    return SelectDropdownComponent;
	}());
	exports.SelectDropdownComponent = SelectDropdownComponent;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

	"use strict";
	exports.STYLE = "select-dropdown {\n  box-sizing: border-box;\n  font-family: Sans-Serif; }\n  select-dropdown * {\n    box-sizing: border-box;\n    font-family: Sans-Serif; }\n  select-dropdown > div {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-top: none;\n    box-sizing: border-box;\n    position: absolute;\n    z-index: 1; }\n    select-dropdown > div .filter {\n      padding: 3px;\n      width: 100%; }\n      select-dropdown > div .filter input {\n        border: 1px solid #eee;\n        box-sizing: border-box;\n        padding: 4px;\n        width: 100%; }\n    select-dropdown > div .options {\n      max-height: 200px;\n      overflow-y: auto; }\n      select-dropdown > div .options ul {\n        list-style: none;\n        margin: 0;\n        padding: 0; }\n        select-dropdown > div .options ul li {\n          padding: 4px 8px;\n          cursor: pointer;\n          user-select: none; }\n  select-dropdown .selected {\n    background-color: #e0e0e0; }\n    select-dropdown .selected.highlighted {\n      background-color: #2196F3;\n      color: #fff; }\n  select-dropdown .highlighted {\n    background-color: #2196F3;\n    color: #fff; }\n  select-dropdown .disabled {\n    background-color: #fff;\n    color: #9e9e9e;\n    cursor: default;\n    pointer-events: none; }\n";


/***/ }),
/* 88 */
/***/ (function(module, exports) {

	"use strict";
	exports.TEMPLATE = "<div\n    [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\">\n\n    <div class=\"filter\"\n        *ngIf=\"!multiple && filterEnabled\">\n        <input\n            #filterInput\n            (click)=\"onSingleFilterClick($event)\"\n            (input)=\"onSingleFilterInput($event)\"\n            (keydown)=\"onSingleFilterKeydown($event)\">\n    </div>\n\n    <div class=\"options\"\n        #optionsList>\n        <ul\n            (wheel)=\"onOptionsWheel($event)\">\n            <li *ngFor=\"let option of optionList.filtered\"\n                [ngClass]=\"{'highlighted': option.highlighted, 'selected': option.selected, 'disabled': option.disabled}\"\n                [ngStyle]=\"getOptionStyle(option)\"\n                (click)=\"onOptionClick(option)\"\n                (mouseover)=\"onOptionMouseover(option)\">\n                {{option.label}}\n            </li>\n            <li\n                *ngIf=\"!optionList.hasShown\"\n                class=\"message\">\n                {{notFoundMsg}}\n            </li>\n        </ul>\n    </div>\n</div>\n";


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	let Select2Component = class Select2Component {
	    constructor() {
	        this.ops = [{ value: 't1', label: 't2' }];
	        this.options = new Array();
	        this.maximumSelectionLength = 0;
	        this.result = new core_1.EventEmitter();
	        this.value = new Array();
	    }
	    select(item) {
	        this.value.push(item.value);
	        this.result.emit(this.value);
	    }
	    deSelect(item) {
	        let index = this.value.indexOf(item.value);
	        if (index >= -1) {
	            this.value.splice(index, 1);
	        }
	        this.result.emit(this.value);
	    }
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Object)
	], Select2Component.prototype, "options", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Number)
	], Select2Component.prototype, "maximumSelectionLength", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], Select2Component.prototype, "placeholder", void 0);
	__decorate([
	    core_1.Output(), 
	    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	], Select2Component.prototype, "result", void 0);
	Select2Component = __decorate([
	    core_1.Component({
	        selector: 'select2',
	        template: __webpack_require__(90),
	        styles: [
	            __webpack_require__(91)
	        ],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }), 
	    __metadata('design:paramtypes', [])
	], Select2Component);
	exports.Select2Component = Select2Component;
	var _a;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

	module.exports = "<ng-select\n        [options]=\"options\"\n        [multiple]=true\n        (selected)=\"select($event)\"\n        (deselected)=\"deSelect($event)\"\n        placeholder=\"{{placeholder}}\">\n</ng-select>\n\n";

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	module.exports = ":host /deep/ ng-select {\n    display: table !important;\n    table-layout: fixed !important;\n    width: 100% !important;\n}\n\n:host /deep/ div {\n    z-index: 3001;\n}\n\n:host /deep/ input {\n    width: 100%;\n}\n\n:host /deep/ .below {\n    border: 0px !important;\n    border-bottom: 1px solid #aaa !important;\n    border-radius: 0px !important;\n}\n\n:host /deep/ .option {\n    background-color: #777 !important;\n    color: #fff !important;\n    font-weight: bold;\n    border-radius: 4px !important;\n}\n\n:host /deep/ .deselect-option {\n    color: #fff !important;\n}"

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(21);
	const pipes_module_1 = __webpack_require__(67);
	const polymer_module_1 = __webpack_require__(93);
	const html_citation_text_component_1 = __webpack_require__(118);
	const generic_table_component_1 = __webpack_require__(121);
	const references_table_component_1 = __webpack_require__(124);
	let OutputModule = class OutputModule {
	};
	OutputModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            pipes_module_1.PipesModule,
	            polymer_module_1.PolymerModule
	        ],
	        exports: [
	            html_citation_text_component_1.HtmlCitationTextComponent,
	            generic_table_component_1.GenericTableComponent,
	            references_table_component_1.ReferencesTableComponent,
	            polymer_module_1.PolymerModule
	        ],
	        declarations: [
	            html_citation_text_component_1.HtmlCitationTextComponent,
	            generic_table_component_1.GenericTableComponent,
	            references_table_component_1.ReferencesTableComponent
	        ],
	        providers: []
	    }), 
	    __metadata('design:paramtypes', [])
	], OutputModule);
	exports.OutputModule = OutputModule;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(21);
	const paper_card_component_1 = __webpack_require__(94);
	const iron_icon_component_1 = __webpack_require__(97);
	const tooltip_component_1 = __webpack_require__(100);
	const paper_icon_button_component_1 = __webpack_require__(103);
	const paper_button_component_1 = __webpack_require__(106);
	const paper_dialog_component_1 = __webpack_require__(109);
	const paper_item_component_1 = __webpack_require__(112);
	const paper_checkbox_component_1 = __webpack_require__(115);
	let PolymerModule = class PolymerModule {
	};
	PolymerModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule
	        ],
	        exports: [
	            paper_card_component_1.PaperCardComponent,
	            iron_icon_component_1.IronIconComponent,
	            tooltip_component_1.TooltipComponent,
	            paper_icon_button_component_1.PaperIconButtonComponent,
	            paper_button_component_1.PaperButtonComponent,
	            paper_dialog_component_1.PaperDialogComponent,
	            paper_item_component_1.PaperItemComponent,
	            paper_checkbox_component_1.PaperCheckboxComponent
	        ],
	        declarations: [
	            paper_card_component_1.PaperCardComponent,
	            iron_icon_component_1.IronIconComponent,
	            tooltip_component_1.TooltipComponent,
	            paper_icon_button_component_1.PaperIconButtonComponent,
	            paper_button_component_1.PaperButtonComponent,
	            paper_dialog_component_1.PaperDialogComponent,
	            paper_item_component_1.PaperItemComponent,
	            paper_checkbox_component_1.PaperCheckboxComponent
	        ]
	    }), 
	    __metadata('design:paramtypes', [])
	], PolymerModule);
	exports.PolymerModule = PolymerModule;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	let PaperCardComponent = class PaperCardComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], PaperCardComponent.prototype, "heading", void 0);
	PaperCardComponent = __decorate([
	    core_1.Component({
	        selector: 'pcard',
	        template: __webpack_require__(95),
	        styles: [__webpack_require__(96)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }), 
	    __metadata('design:paramtypes', [])
	], PaperCardComponent);
	exports.PaperCardComponent = PaperCardComponent;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"paper-header\" *ngIf=\"heading\">{{heading}}</div>\n<ng-content></ng-content>";

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,500,500italic,700,700italic\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono:400,700\");\n\n:host {\n    display: inline-block;\n    position: relative;\n    box-sizing: border-box;\n    font-family: 'Roboto', 'Noto', sans-serif;\n    border-radius: 2px;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12),\n    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    margin: 10px;\n}\n\n.paper-header {\n    position: relative;\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit;\n    overflow: hidden;\n    padding: 16px;\n    font-size: 24px;\n    font-weight: 400;\n    color: var(--paper-card-header-color, #000);\n}\n\n:host /deep/ dl {\n    width: 100%;\n    overflow: hidden;\n    padding: 0;\n    margin: 0\n}\n\n:host /deep/ dt {\n    float: left;\n    width: 40px;\n    padding: 0;\n    margin: 0\n}\n\n:host /deep/ dd {\n    float: left;\n    padding: 0;\n    margin: 0\n}"

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	let IronIconComponent = class IronIconComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], IronIconComponent.prototype, "icon", void 0);
	IronIconComponent = __decorate([
	    core_1.Component({
	        selector: 'iicon',
	        template: __webpack_require__(98),
	        styles: [__webpack_require__(99)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }), 
	    __metadata('design:paramtypes', [])
	], IronIconComponent);
	exports.IronIconComponent = IronIconComponent;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

	module.exports = "<ng-content></ng-content>\n<svg viewBox=\"0 0 24 24\">\n    <defs>\n        <g id=\"keyboard-arrow-down\">\n            <path d=\"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z\"/>\n        </g>\n        <g id=\"keyboard-arrow-up\">\n            <path d=\"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z\"/>\n        </g>\n        <g id=\"settings\">\n            <path d=\"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z\"/>\n        </g>\n        <g id=\"info\">\n            <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z\"/>\n        </g>\n        <g id=\"star\">\n            <path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/>\n        </g>\n    </defs>\n    <use [attr.xlink:href]=\"'#'+icon\"/>\n</svg>";

/***/ }),
/* 99 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: -ms-inline-flexbox;\n    display: -webkit-inline-flex;\n    display: inline-flex;\n\n    -ms-flex-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    -webkit-justify-content: center;\n    justify-content: center;\n\n    position: relative;\n\n    vertical-align: middle;\n\n    fill: currentcolor;\n    stroke: none;\n\n    width: 24px;\n    height: 24px;\n}\n\nsvg {\n    pointer-events: none;\n    display: block;\n    width: 100%;\n    height: 100%;\n}"

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(21);
	let TooltipComponent = class TooltipComponent {
	    constructor(_sanitizer) {
	        this._sanitizer = _sanitizer;
	        this.tooltip = "";
	        this.tooltipHtml = "";
	        this.positionClass = 'n';
	    }
	    set position(p) {
	        this.positionClass = p;
	    }
	    ngOnInit() {
	        if (typeof this.tooltip === "number") {
	            this.tooltip = this.tooltip.toString();
	        }
	        if (this.tooltip.indexOf("<") > -1 && this.tooltip.indexOf(">") > -1) {
	            const tokens = this.tooltip.split(/[ ,\n\r]/);
	            let tip = this.tooltip;
	            for (let token of tokens) {
	                token = token.substr(0, token.lastIndexOf(">") + 1);
	                if (/<https?:\/\/[^>]+>/.test(token)) {
	                    const href = token.substr(1, token.length - 2);
	                    tip = tip.replace(token, "<a class='cite-link' href='" + href + "'>" + href + "</a>");
	                }
	            }
	            this.tooltip = this._sanitizer.bypassSecurityTrustHtml(tip);
	        }
	    }
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Object)
	], TooltipComponent.prototype, "tooltip", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], TooltipComponent.prototype, "tooltipHtml", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String), 
	    __metadata('design:paramtypes', [String])
	], TooltipComponent.prototype, "position", null);
	__decorate([
	    core_1.HostBinding('class'), 
	    __metadata('design:type', Object)
	], TooltipComponent.prototype, "positionClass", void 0);
	TooltipComponent = __decorate([
	    core_1.Component({
	        selector: 'ptooltip',
	        template: __webpack_require__(101),
	        styles: [__webpack_require__(102)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }), 
	    __metadata('design:paramtypes', [(typeof (_a = typeof platform_browser_1.DomSanitizer !== 'undefined' && platform_browser_1.DomSanitizer) === 'function' && _a) || Object])
	], TooltipComponent);
	exports.TooltipComponent = TooltipComponent;
	var _a;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

	module.exports = "<ng-content></ng-content>\n<div class=\"ptooltiptext\" *ngIf=\"tooltip&&tooltip!=''||tooltipHtml&&tooltipHtml!=''\">\n    <div [innerHtml]=\"tooltip\"></div>\n    <div [innerHtml]=\"_sanitizer.bypassSecurityTrustHtml(tooltipHtml)\"></div>\n</div>";

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    position: relative;\n    display: inline-block;\n}\n\n:host .ptooltiptext {\n    visibility: hidden;\n    min-width: 60px;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    padding: 5px;\n    border-radius: 6px;\n\n    position: absolute;\n    z-index: 4999;\n\n    white-space: nowrap;\n\n    transition-property: visibility;\n    transition-duration: 0.1s;\n}\n\n:host .ptooltiptext /deep/ a {\n    color: lightgray;\n}\n\n:host .ptooltiptext /deep/ ul, :host .ptooltiptext /deep/ ol {\n    text-align: left;\n    padding-left: 20px;\n}\n\n:host:hover .ptooltiptext {\n    visibility: visible;\n}\n\n:host .ptooltiptext::after {\n    content: \" \";\n    position: absolute;\n    border-width: 5px;\n    border-style: solid;\n}\n\n/* north */\n:host.n .ptooltiptext {\n    bottom: 115%;\n    left: -25%;\n    margin-left: 1em;\n    margin-top: 0;\n}\n\n:host.n .ptooltiptext::after {\n    top: 100%;\n    left: 1em;\n    margin-left: -5px;\n    border-color: black transparent transparent transparent;\n}\n\n/* south */\n:host.s .ptooltiptext {\n    top: 115%;\n    left: -25%;\n    margin-left: 1em;\n}\n\n:host.s .ptooltiptext::after {\n    bottom: 100%;\n    left: 1em;\n    margin-left: -5px;\n    border-color: transparent transparent black transparent;\n}\n\n/* east */\n:host.e .ptooltiptext {\n    top: 0;\n    left: 100%;\n    margin-left: 5px;\n}\n\n:host.e .ptooltiptext::after {\n    top: 1em;\n    right: 100%; /* To the left of the tooltip */\n    margin-top: -5px;\n    border-color: transparent black transparent transparent;\n}\n\n/* west */\n:host.w .ptooltiptext {\n    top: 0;\n    right: 100%;\n    margin-right: 5px;\n}\n\n:host.w .ptooltiptext::after {\n    top: 1em;\n    left: 100%;\n    margin-top: -5px;\n    border-color: transparent transparent transparent black;\n}   \n\n"

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	let PaperIconButtonComponent = class PaperIconButtonComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], PaperIconButtonComponent.prototype, "icon", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], PaperIconButtonComponent.prototype, "title", void 0);
	PaperIconButtonComponent = __decorate([
	    core_1.Component({
	        selector: 'picon-button',
	        template: __webpack_require__(104),
	        styles: [__webpack_require__(105)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }), 
	    __metadata('design:paramtypes', [])
	], PaperIconButtonComponent);
	exports.PaperIconButtonComponent = PaperIconButtonComponent;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

	module.exports = "<ptooltip [tooltip]=\"title\" [position]=\"'w'\">\n    <iicon [icon]=\"icon\"></iicon>\n</ptooltip>\n";

/***/ }),
/* 105 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: inline-block;\n    position: relative;\n    padding: 3px;\n    outline: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    cursor: pointer;\n    z-index: 0;\n    line-height: 1;\n\n    width: 30px;\n    height: 30px;\n\n    box-sizing: border-box !important;\n}"

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	let PaperButtonComponent = class PaperButtonComponent {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], PaperButtonComponent.prototype, "text", void 0);
	PaperButtonComponent = __decorate([
	    core_1.Component({
	        selector: 'pbutton',
	        template: __webpack_require__(107),
	        styles: [__webpack_require__(108)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }), 
	    __metadata('design:paramtypes', [])
	], PaperButtonComponent);
	exports.PaperButtonComponent = PaperButtonComponent;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

	module.exports = "{{text}}\n<ng-content></ng-content>";

/***/ }),
/* 108 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    color: #3f51b5;\n    display: inline-block;\n    position: relative;\n    box-sizing: border-box;\n    min-width: 5.14em;\n    margin: 0 0.29em;\n    background: transparent;\n    text-align: center;\n    font: inherit;\n    text-transform: uppercase;\n    outline-width: 0;\n    border-radius: 3px;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -webkit-user-select: none;\n    cursor: pointer;\n    z-index: 0;\n    padding: 0.7em 0.57em;\n\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12),\n    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n\n    transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n:host:active {\n    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12),\n    0 5px 5px -3px rgba(0, 0, 0, 0.4);\n}"

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	let PaperDialogComponent = class PaperDialogComponent {
	    constructor(el, renderer) {
	        this.el = el;
	        this.renderer = renderer;
	        this.opened = false;
	    }
	    onClick(target) {
	        if (target.localName === "pdialog") {
	            this.close();
	        }
	    }
	    open() {
	        this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
	        document.body.classList.add("modal-open");
	        this.opened = true;
	    }
	    close() {
	        this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
	        document.body.classList.remove("modal-open");
	        this.opened = false;
	    }
	    onKeydown(event) {
	        if (this.opened && event.key.toLowerCase() === 'escape') {
	            this.close();
	        }
	    }
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], PaperDialogComponent.prototype, "heading", void 0);
	__decorate([
	    core_1.HostListener('click', ['$event.target']), 
	    __metadata('design:type', Function), 
	    __metadata('design:paramtypes', [Object]), 
	    __metadata('design:returntype', void 0)
	], PaperDialogComponent.prototype, "onClick", null);
	__decorate([
	    core_1.HostListener('window:keydown', ['$event']), 
	    __metadata('design:type', Function), 
	    __metadata('design:paramtypes', [Object]), 
	    __metadata('design:returntype', void 0)
	], PaperDialogComponent.prototype, "onKeydown", null);
	PaperDialogComponent = __decorate([
	    core_1.Component({
	        selector: 'pdialog',
	        template: __webpack_require__(110),
	        styles: [__webpack_require__(111)]
	    }), 
	    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _b) || Object])
	], PaperDialogComponent);
	exports.PaperDialogComponent = PaperDialogComponent;
	var _a, _b;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"dialog\" *ngIf=\"opened\">\n    <ng-content></ng-content>\n    <div class=\"buttons\">\n        <pbutton (click)=\"close()\">Close</pbutton>\n    </div>\n</div>\n";

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    position: fixed;\n    overflow-x: hidden;\n    overflow-y: auto;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    display: none;\n    z-index: 2000;\n    background: rgba(0, 0, 0, 0.5);\n}\n\n@media (min-width: 992px) {\n    .dialog {\n        width: 900px !important;\n    }\n}\n\n@media (min-width: 768px) and (max-width: 992px) {\n    .dialog {\n        width: 600px !important;\n    }\n}\n\n@media (max-width: 660px) {\n    .dialog {\n        width: 90% !important;\n    }\n}\n\n.dialog {\n    max-height: inherit !important;\n    position: relative !important;\n    border-radius: 5px;\n    background: #ffffff;\n    color: #212121;\n    font-family: 'Roboto', 'Noto', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 20px;\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);\n    margin-top: 25px;\n    margin-bottom: 60px;\n    margin-right: auto;\n    margin-left: auto;\n    max-width: 90%;\n}\n\n.buttons {\n    color: #3f51b5;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n\n    -ms-flex-direction: row;\n    -webkit-flex-direction: row;\n    flex-direction: row;\n    -ms-flex-pack: end;\n    -webkit-justify-content: flex-end;\n    justify-content: flex-end;\n\n    position: relative;\n    padding: 8px;\n    margin: 0;\n}\n\n:host /deep/ .pheader {\n    border-bottom: 1px solid #eee;\n\n    padding: 15 15 8 15;\n    margin: 0 0 20 0;\n}\n\n:host /deep/ .pheader h2 {\n    font-family: 'Roboto', 'Noto', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    white-space: nowrap;\n    overflow: visible;\n    text-overflow: ellipsis;\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 28px;\n    margin: 0;\n}"

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	let PaperItemComponent = class PaperItemComponent {
	};
	PaperItemComponent = __decorate([
	    core_1.Component({
	        selector: 'pitem',
	        template: __webpack_require__(113),
	        styles: [__webpack_require__(114)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }), 
	    __metadata('design:paramtypes', [])
	], PaperItemComponent);
	exports.PaperItemComponent = PaperItemComponent;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

	module.exports = "<ng-content></ng-content>";

/***/ }),
/* 114 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: block;\n    position: relative;\n    padding: 0px 16px;\n}\n\n:host(.item-selected) {\n    font-weight: bold;\n}"

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	let PaperCheckboxComponent = class PaperCheckboxComponent {
	    constructor(el, renderer) {
	        this.el = el;
	        this.renderer = renderer;
	        this.checkedChange = new core_1.EventEmitter();
	    }
	    ngOnChanges() {
	        if (this.checked) {
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], "background-color", "#3f51b5");
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], "border-color", "#3f51b5");
	        }
	        else {
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], "background-color", "#fff");
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], "border-color", "#000");
	        }
	        this.el.nativeElement.checked = this.checked;
	    }
	    toogleCheck() {
	    }
	    onChange(e) {
	        this.checked = !this.checked;
	        if (this.checked) {
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], "background-color", "#3f51b5");
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], "border-color", "#3f51b5");
	        }
	        else {
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], "background-color", "#fff");
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], "border-color", "#000");
	        }
	        this.el.nativeElement.checked = this.checked;
	        this.checkedChange.emit(this.checked);
	    }
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], PaperCheckboxComponent.prototype, "label", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Boolean)
	], PaperCheckboxComponent.prototype, "checked", void 0);
	__decorate([
	    core_1.Output(), 
	    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	], PaperCheckboxComponent.prototype, "checkedChange", void 0);
	__decorate([
	    core_1.HostListener('click', ['$event']), 
	    __metadata('design:type', Function), 
	    __metadata('design:paramtypes', [Object]), 
	    __metadata('design:returntype', void 0)
	], PaperCheckboxComponent.prototype, "onChange", null);
	PaperCheckboxComponent = __decorate([
	    core_1.Component({
	        selector: 'pcheckbox',
	        template: __webpack_require__(116),
	        styles: [__webpack_require__(117)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }), 
	    __metadata('design:paramtypes', [(typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object, (typeof (_c = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _c) || Object])
	], PaperCheckboxComponent);
	exports.PaperCheckboxComponent = PaperCheckboxComponent;
	var _a, _b, _c;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"pcheckbox\">\n    <div class=\"pcheckmark\" *ngIf=\"checked\"></div>\n</div>\n<div class=\"plabel\">{{label}}</div>";

/***/ }),
/* 117 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: inline-block;\n    white-space: nowrap;\n    cursor: pointer;\n\n    position: relative;\n}\n\n:host:focus {\n    outline: none;\n}\n\n.pcheckbox {\n    box-sizing: border-box;\n    height: 18px;\n    width: 18px;\n    border: solid 2px;\n    border-radius: 2px;\n    pointer-events: none;\n    -webkit-transition: background-color 140ms, border-color 140ms;\n    transition: background-color 140ms, border-color 140ms;\n    display: inline-block;\n    position: relative;\n    vertical-align: middle;\n}\n\n.pcheckmark {\n    position: absolute;\n    width: 36%;\n    height: 70%;\n    border-style: solid;\n    border-top: none;\n    border-left: none;\n    transform-origin: 97% 86%;\n    -webkit-transform-origin: 97% 86%;\n    transform: rotate(45deg);\n    border-right-width: calc(2 / 15 * 18px);\n    border-bottom-width: calc(2 / 15 * 18px);\n    border-color: white;\n}\n\n.plabel {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    white-space: normal;\n    pointer-events: none;\n    padding-left: 8px;\n}"

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const comparison_citation_service_1 = __webpack_require__(55);
	const comparison_service_1 = __webpack_require__(53);
	let HtmlCitationTextComponent = class HtmlCitationTextComponent {
	    constructor(serv) {
	        this.serv = serv;
	        this.description = " ";
	    }
	    makeMarkdown(text) {
	        if (text === null || text === undefined || text === "" || text === " ")
	            return " ";
	        if (typeof text === "object") {
	            text = text["tag"];
	        }
	        return this.serv.converter.makeHtml(text);
	    }
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], HtmlCitationTextComponent.prototype, "description", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', (typeof (_a = typeof comparison_citation_service_1.ComparisonCitationService !== 'undefined' && comparison_citation_service_1.ComparisonCitationService) === 'function' && _a) || Object)
	], HtmlCitationTextComponent.prototype, "citationServ", void 0);
	HtmlCitationTextComponent = __decorate([
	    core_1.Component({
	        selector: 'htmlcitationtext',
	        template: __webpack_require__(119),
	        styles: [__webpack_require__(120)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }), 
	    __metadata('design:paramtypes', [(typeof (_b = typeof comparison_service_1.ComparisonService !== 'undefined' && comparison_service_1.ComparisonService) === 'function' && _b) || Object])
	], HtmlCitationTextComponent);
	exports.HtmlCitationTextComponent = HtmlCitationTextComponent;
	var _a, _b;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

	module.exports = "<div [innerHtml]=\"makeMarkdown(description) | citation: [citationServ] | sanitizeHtml\" class=\"'description'\"\n     *ngIf=\"description\"></div>\n        ";

/***/ }),
/* 120 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: block;\n}\n\n.description > :first-child {\n    margin-top: 0;\n}\n\n.description > :last-child {\n    margin-bottom: 0;\n}"

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const comparison_citation_service_1 = __webpack_require__(55);
	const comparison_config_service_1 = __webpack_require__(51);
	const platform_browser_1 = __webpack_require__(21);
	const http_1 = __webpack_require__(29);
	let GenericTableComponent = class GenericTableComponent {
	    constructor(ar, confServ, sanitization, http, cd) {
	        this.ar = ar;
	        this.confServ = confServ;
	        this.sanitization = sanitization;
	        this.http = http;
	        this.cd = cd;
	        this.counter = 0;
	        this.display = false;
	        this.settings = false;
	        this.columns = new Array();
	        this.data = new Array();
	        this.query = {};
	        this.displayTemplate = false;
	        this.settingsCallback = new core_1.EventEmitter();
	        this.showDetails = new core_1.EventEmitter();
	        this.changeNum = 0;
	        this.order = new Array();
	        this.orderChange = new core_1.EventEmitter();
	        this.orderOption = new Array();
	        this.orderOptionChange = new core_1.EventEmitter();
	        this.ctrlCounter = 0;
	    }
	    orderClick(e, value) {
	        let pos = this.order.findIndex(name => name == value);
	        if (e.ctrlKey) {
	            this.ctrlCounter = this.order[this.ctrlCounter] == value ? this.ctrlCounter : this.ctrlCounter + 1;
	        }
	        else {
	            this.ctrlCounter = 0;
	        }
	        if (typeof pos != 'undefined' && pos >= 0) {
	            this.order[this.ctrlCounter] = value;
	            this.orderOption[this.ctrlCounter] = this.orderOption[pos] == 1 ? -1 : 1;
	            this.orderOption[pos] = pos != this.ctrlCounter ? 0 : this.orderOption[this.ctrlCounter];
	        }
	        else {
	            this.order[this.ctrlCounter] = value;
	            this.orderOption[this.ctrlCounter] = 1;
	        }
	        if (this.ctrlCounter == 0) {
	            for (let i = 1; i < this.orderOption.length; i++) {
	                this.orderOption[i] = 0;
	            }
	        }
	        this.orderChange.emit(this.order);
	        this.orderOptionChange.emit(this.orderOption);
	        this.table.trigger('reflow');
	    }
	    displayOrder(value, option) {
	        if (this.order.length === 0 && this.orderOption.length === 0) {
	            this.order[this.ctrlCounter] = "tag";
	            this.orderOption[this.ctrlCounter] = 1;
	        }
	        return this.order.findIndex(val => val == value) >= 0 && this.orderOption[this.order.findIndex(val => val == value)] == option;
	    }
	    ngAfterViewChecked() {
	        this.table = $("table.table.table-hover");
	        this.table.floatThead();
	        anchors.options = {
	            placement: 'right'
	        };
	        anchors.add('.anchored');
	    }
	    ngOnChanges() {
	        this.update();
	    }
	    update() {
	        if (this.table != null) {
	            this.table.trigger('reflow');
	        }
	    }
	    shouldBeShown(data) {
	        if (this.confServ.comparison && this.confServ.comparison.displayall) {
	            return true;
	        }
	        let val = true;
	        for (let column of this.confServ.tableDataSet.getTableDataArray()) {
	            if (column.display && data.properties[column.tag] != null && data.properties[column.tag].plain != "") {
	                return true;
	            }
	            if (column.display && data.properties[column.tag] != null) {
	                val = false;
	            }
	        }
	        return val;
	    }
	    getColor(column, label) {
	        return this.sanitization.bypassSecurityTrustStyle(column.type.colors.getColor(label));
	    }
	    getForegroundColor(color) {
	        const h = Number.parseInt(color["changingThisBreaksApplicationSecurity"].substr(4, 3).split(',')[0]);
	        const s = 1;
	        const l = 0.7;
	        const rgb = this.hslToRgb(h, s, l);
	        const yiq = ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
	        return this.sanitization.bypassSecurityTrustStyle((yiq >= 128) ? '#f0f0f0' : '#0d0d0d');
	    }
	    hslToRgb(h, s, l) {
	        const c = (1 - Math.abs(2 * l - 1)) * s;
	        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
	        const m = l - c / 2;
	        let r, g, b;
	        if (0 <= h && h < 60) {
	            r = c;
	            g = x;
	            b = 0;
	        }
	        else if (60 <= h && h < 120) {
	            r = x;
	            g = c;
	            b = 0;
	        }
	        else if (120 <= h && h < 180) {
	            r = 0;
	            g = c;
	            b = x;
	        }
	        else if (180 <= h && h < 240) {
	            r = 0;
	            g = x;
	            b = c;
	        }
	        else if (240 <= h && h < 300) {
	            r = x;
	            g = 0;
	            b = c;
	        }
	        else {
	            r = c;
	            g = 0;
	            b = x;
	        }
	        return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
	    }
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Boolean)
	], GenericTableComponent.prototype, "display", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Boolean)
	], GenericTableComponent.prototype, "settings", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Object)
	], GenericTableComponent.prototype, "columns", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Object)
	], GenericTableComponent.prototype, "data", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Object)
	], GenericTableComponent.prototype, "query", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Boolean)
	], GenericTableComponent.prototype, "displayTemplate", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', (typeof (_a = typeof comparison_citation_service_1.ComparisonCitationService !== 'undefined' && comparison_citation_service_1.ComparisonCitationService) === 'function' && _a) || Object)
	], GenericTableComponent.prototype, "citationServ", void 0);
	__decorate([
	    core_1.Output(), 
	    __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
	], GenericTableComponent.prototype, "settingsCallback", void 0);
	__decorate([
	    core_1.Output(), 
	    __metadata('design:type', (typeof (_c = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _c) || Object)
	], GenericTableComponent.prototype, "showDetails", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Number)
	], GenericTableComponent.prototype, "changeNum", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Object)
	], GenericTableComponent.prototype, "order", void 0);
	__decorate([
	    core_1.Output(), 
	    __metadata('design:type', (typeof (_d = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _d) || Object)
	], GenericTableComponent.prototype, "orderChange", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Object)
	], GenericTableComponent.prototype, "orderOption", void 0);
	__decorate([
	    core_1.Output(), 
	    __metadata('design:type', (typeof (_e = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _e) || Object)
	], GenericTableComponent.prototype, "orderOptionChange", void 0);
	GenericTableComponent = __decorate([
	    core_1.Component({
	        selector: 'generictable',
	        template: __webpack_require__(122),
	        styles: [__webpack_require__(123)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }), 
	    __metadata('design:paramtypes', [(typeof (_f = typeof core_1.ApplicationRef !== 'undefined' && core_1.ApplicationRef) === 'function' && _f) || Object, (typeof (_g = typeof comparison_config_service_1.ComparisonConfigService !== 'undefined' && comparison_config_service_1.ComparisonConfigService) === 'function' && _g) || Object, (typeof (_h = typeof platform_browser_1.DomSanitizer !== 'undefined' && platform_browser_1.DomSanitizer) === 'function' && _h) || Object, (typeof (_j = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _j) || Object, (typeof (_k = typeof core_1.ChangeDetectorRef !== 'undefined' && core_1.ChangeDetectorRef) === 'function' && _k) || Object])
	], GenericTableComponent);
	exports.GenericTableComponent = GenericTableComponent;
	var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

	module.exports = "<table class=\"table table-hover\" *ngIf=\"display\">\n    <thead style=\"background-color: white;\">\n    <tr>\n        <template ngFor let-column [ngForOf]=\"columns | tablefilter\">\n            <th valign=column.valign style=column.style name=column.tag>\n                <button (click)=\"orderClick($event, column.tag)\">{{column.name}}\n                    <iicon icon=\"keyboard-arrow-up\" *ngIf=\"displayOrder(column.tag, -1)\"></iicon>\n                    <iicon icon=\"keyboard-arrow-down\" *ngIf=\"displayOrder(column.tag, 1)\"></iicon>\n                </button>\n            </th>\n        </template>\n        <th style=\"width: 3%\" name=\"details\" *ngIf=\"settings\">\n            <picon-button icon=\"settings\" title=\"Settings\" (click)=\"settingsCallback.emit()\"></picon-button>\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n    <template ngFor let-dat [ngForOf]=\"data | orderBy: [order,orderOption] | datafilter: [query, displayTemplate]\">\n        <tr *ngIf=\"shouldBeShown(dat)\">\n            <template ngFor let-column [ngForOf]=\"columns | tablefilter\">\n                <td *ngIf=\"column.type?.tag==='url'\"><a class=\"anchored\" href=\"{{dat.getProperty(column.url).text}}\" target=\"_blank\">{{dat.getProperty(column.tag).text}}</a>\n                </td>\n                <td *ngIf=\"column.type?.tag==='text'\">\n                    <div [innerHtml]=\"dat.getProperty(column.tag).text|citation: [citationServ] | sanitizeHtml\"></div>\n                </td>\n                <td *ngIf=\"column.type?.tag==='label' && !column.repo\">\n                    <template ngFor let-sitem [ngForOf]=\"dat.getPropertyListItems(column.tag)\"\n                              *ngIf=\"column.type?.labelCls\">\n                        <ptooltip [tooltip]=\"column.values[sitem.content].tag\"\n                                  [tooltipHtml]=\"sitem.htmlChilds | citation: [citationServ]\" [position]=\"'n'\">\n                            <div *ngIf=\"column.type.colors.isEmpty()\" class=\"{{column.type.getCls(sitem.content)}} {{column.type.labelCls.getCls(sitem.content)}} mylabel\">\n                                {{sitem.content}}\n                            </div>\n                            <div *ngIf=\"!column.type.colors.isEmpty()\" [style.color]=\"getForegroundColor(getColor(column, sitem.content))\" [style.background-color]=\"getColor(column, sitem.content)\" class=\"{{column.type.getCls(sitem.content)}} {{column.type.labelCls.getCls(sitem.content)}} mylabel\">\n                                {{sitem.content}}\n                            </div>\n                        </ptooltip>\n                    </template>\n                </td>\n                <td *ngIf=\"column.type?.tag==='label' && column.repo\">\n                    <template ngFor let-sitem [ngForOf]=\"dat.getRepoLabels(column, cd).list\"\n                              *ngIf=\"column.type?.labelCls\">\n                        <ptooltip [tooltipHtml]=\"sitem.htmlChilds\" [position]=\"'n'\">\n                            <div *ngIf=\"column.type.colors.isEmpty()\" class=\"{{column.type.getCls(sitem.content)}} {{column.type.labelCls.getCls(sitem.content)}} mylabel\">\n                                {{sitem.content}}\n                            </div>\n                            <div *ngIf=\"!column.type.colors.isEmpty()\" [style.background-color]=\"getColor(column, sitem.content)\" [style.color]=\"getForegroundColor(getColor(column, sitem.content))\" class=\"{{column.type.getCls(sitem.content)}} {{column.type.labelCls.getCls(sitem.content)}} mylabel\">\n                                {{sitem.content}}\n                            </div>\n                        </ptooltip>\n                    </template>\n                </td>\n                <td *ngIf=\"column.type?.tag=='rating'\">\n                    <iicon icon=\"star\" *ngIf=\"dat.getRating()!=0\">{{dat.getRating()}}</iicon>\n                </td>\n            </template>\n            <td>\n                <picon-button icon=\"info\" title=\"Details\" (click)=\"showDetails.emit(dat)\"></picon-button>\n            </td>\n        </tr>\n    </template>\n    </tbody>\n</table>\n        ";

/***/ }),
/* 123 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: block;\n}\n\ntable {\n    min-width: 600px;\n    margin-bottom: 0px;\n}\n\n.mylabel {\n    margin: 2px;\n    display: inline-block !important;\n    cursor: pointer;\n    font-size: 14px !important;\n    white-space: inherit;\n}\n\n.label-unknown {\n    color: black;\n    border: solid black 1px;\n}\n\nth > button {\n    border: none;\n    padding: 0;\n    outline: none;\n    background-color: inherit;\n}\n\ntable tr {\n    white-space: normal;\n}\n\ntable {\n    width: auto;\n}\n\n.anchored::before {\n    content: '';\n    display: block;\n    height:48px;\n    margin:-48px 0 0;\n}"

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const comparison_citation_service_1 = __webpack_require__(55);
	let ReferencesTableComponent = class ReferencesTableComponent {
	    constructor() {
	        this.changeNum = 0;
	    }
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', (typeof (_a = typeof comparison_citation_service_1.ComparisonCitationService !== 'undefined' && comparison_citation_service_1.ComparisonCitationService) === 'function' && _a) || Object)
	], ReferencesTableComponent.prototype, "citationServ", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Number)
	], ReferencesTableComponent.prototype, "changeNum", void 0);
	ReferencesTableComponent = __decorate([
	    core_1.Component({
	        selector: 'referencestable',
	        template: __webpack_require__(125),
	        styles: [__webpack_require__(126)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }), 
	    __metadata('design:paramtypes', [])
	], ReferencesTableComponent);
	exports.ReferencesTableComponent = ReferencesTableComponent;
	var _a;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

	module.exports = "<table>\n    <template ngFor let-entry [ngForOf]=\"this.citationServ.sortedReferences()\">\n        <tr style=\"padding-left:5px;\">\n            <td style=\"padding-right:10px;font-size:small;padding-top:3px;width:15%;\" valign=\"top\">\n                {{'[' + entry.index + ']'}}:\n            </td>\n            <td [id]=\"entry.key\" [innerHtml]=\"entry.html|sanitizeHtml\"></td>\n        </tr>\n    </template>\n</table>";

/***/ }),
/* 126 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: block;\n}"

/***/ })
]);
//# sourceMappingURL=app.b4e97cfd881a2d0396cb.js.map