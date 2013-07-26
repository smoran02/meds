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
				self.add({ date: new Date(), id: self.setNextId() });
				self.addNewDay();
			}, 5000);
		} else {
			this.add({ date: new Date(), id: 1 });
			this.addNewDay();
		}

	},

	setNextId: function(){
		return this.length + 1;
	}

});