'use strict';

module.exports = function (oAppData) {
	var
		_ = require('underscore'),
		
		TextUtils = require('modules/CoreClient/js/utils/Text.js'),
		
		Settings = require('modules/%ModuleName%/js/Settings.js'),
		oSettings = _.extend({}, oAppData[Settings.ServerModuleName] || {}, oAppData['%ModuleName%'] || {})
	;
	
	Settings.init(oSettings);
	
	return {
		isAvailable: function (iUserRole, bPublic) {
			return !bPublic && iUserRole === Enums.UserRole.PowerUser;
		},
		start: function (ModulesManager) {
			ModulesManager.run('SettingsWebclient', 'registerSettingsTab', [function () { return require('modules/%ModuleName%/js/views/OutlookSyncSettingsPaneView.js'); }, Settings.HashModuleName, TextUtils.i18n('%MODULENAME%/LABEL_SETTINGS_TAB')]);
		}
	};
};
