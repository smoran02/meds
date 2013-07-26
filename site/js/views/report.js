// site/js/views/report.js

var app = app || {};

app.ReportView = Backbone.View.extend({

	tagName: 'div',

	className: 'reportContainer',

	template: _.template( $( '#reportTemplate' ).html() ),

	events: {
		"click table": "showDailyReport"
	},

	render: function(){
		this.$el.html( this.template( this.model.toJSON() ) );
		return this;
	},

	showDailyReport: function( e ){
		e.preventDefault();
		console.log( this.model.get( 'id' ) );
		
	}

});