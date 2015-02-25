Stock.IndexView = Ember.View.extend({
	templateName: 'index',
	classNames:['home_container'],
	change: function(event) {
		var elem = $(event.target),
			controller = this.get('controller');
		if(elem.hasClass('home_dropdown')) {
			var companyName = elem.val(),
				data = Stock.get('data'),
				selectedObj;
			if(companyName === 'Select Company' || typeof companyName === 'undefined') {
				controller.set('companySelected', false);
			} else {
				selectedObj = data.findBy('name', companyName);
				controller.setProperties({
					'companySelected': true,
					'selectedObj': selectedObj,
				});
				this.setMode(true, false, false);
			}
		}
	},
	click: function(event) {
		var elem = $(event.target),
			controller = this.get('controller');
		if(elem.hasClass('number_button')) {
			this.setMode(true, false, false);
		} else if(elem.hasClass('graph_button')) {
			this.setMode(false, true, false);
		} else if(elem.hasClass('analysis_button')) {
			this.setMode(false, false, true);
		} else if(elem.closest('.logo_home').hasClass('logo_home')) {
			this.$('.home_dropdown').val('Select Company');
			controller.set('companySelected', false);
		}
	},
	setMode: function(numberShow, graphShow, analysisShow) {
		var controller = this.get('controller');
		controller.setProperties({
			'numberShow': numberShow,
			'graphShow': graphShow,
			'analysisShow': analysisShow
		});
	}
});