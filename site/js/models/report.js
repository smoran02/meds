// site/js/models/report.js

var app = app || {};

app.Report = Backbone.Model.extend({

	defaults: {
		date: '',
		am_weight: '',
		am_bp: '',
		am_pulse: '',
		am_temp: '',
		am_meds: '',
		miralax: '',
		lunch_meds: '',
		nap: 'No',
		pm_meds: '',
		pm_bp: '',
		pm_pulse: '',
		bedtime_meds: '',
		bedtime: '',
	}

});