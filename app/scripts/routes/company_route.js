Stock.CompanyRoute = Ember.Route.extend({
	beforeModel: function() {
		console.log();
	},
	model: function(param) {
		this.set('model', param);
	},
	setupController: function(controller, model) {
		controller.setProperties({
			'data': Stock.get('data'),
			'selectedObj': Stock.get('selectedObj')
		});
	}
})