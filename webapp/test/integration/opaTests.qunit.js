/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"test/Test/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});