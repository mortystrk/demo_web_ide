sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("test.Test.controller.View1", {
		onInit: function () {
			this.getView().setModel(this._createModel());
		},

		_createModel: function () {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData({
				"links": [{
					"Title": "Title 1",
					"TagName": "SAP",
					"TagNumber": "20"
				}, {
					"Title": "Title 2",
					"TagName": "SAP",
					"TagNumber": "30"
				}, {
					"Title": "Title 3",
					"TagName": "SAP",
					"TagNumber": "10"
				}, {
					"Title": "Title 4",
					"TagName": "SAP",
					"TagNumber": "15"
				}]
			});

			return oModel;
		}
	});
});