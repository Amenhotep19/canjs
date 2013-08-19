steal.config({
	map: {
		"*": {
			"jquery/jquery.js" : "jquery",
			"can/util/util.js": "can/util/jquery/jquery.js"
		}
	},
	paths: {
		"jquery": "lib/jquery.1.9.1.js",
		"mootools/mootools.js" : "lib/mootools-core-1.4.5.js",
		"dojo/dojo.js" : "util/dojo/dojo-1.8.1.js",
		"yui/yui.js" : "lib/yui-3.7.3.js",
		"zepto/zepto.js" : "lib/zepto.1.0rc1.js",
		"can/": "",
		"jquerypp/": "http://jquerypp.com/release/1.0.1/steal/"
	},
	shim : {
		jquery: {
			exports: "jQuery"
		},
		"zepto/zepto.js": {
			"exports": "Zepto"
		}
	},
	ext: {
		ejs: "view/ejs/ejs.js",
		mustache: "view/mustache/mustache.js"
	},
	root: steal.config('root').join('../')
});
