// site/js/views/reports.js

var app = app || {};

app.ReportsView = Backbone.View.extend({

	el: '#reports',

	events: {
		"click #save": "addReport"
	},

	initialize: function( reportSample ){
		this.collection = new app.Reports();
		this.render();

		this.listenTo( this.collection, 'add', this.renderReport );
	},

	render: function(){
		this.collection.each( function( report ){
			this.renderReport( report );
		}, this);
	},

	renderReport: function( report ){
		var view = new app.ReportView({ model: report });
		this.$el.append( view.render().el );
	},

	addReport: function( e ){
		e.preventDefault();

		var formData = {};
	}

});