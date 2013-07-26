// site/js/collections/reports.js

var app = app || {};

app.Reports = Backbone.Collection.extend({
	
	model: app.Report,

	initialize: function(){
		this.addNewDay();
	},

	addNewDay: function(){
		
		if ( this.length != 0 ){
			var self = this;
			setTimeout( function() {
				self.add({ date: new Date() })
				self.addNewDay();
			}, 10000);
		} else {
			this.add({ date: new Date() });
			this.addNewDay();
		}

	}

});