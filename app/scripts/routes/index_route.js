Stock.IndexRoute = Ember.Route.extend({
    model: function(param) {
    	$('body').addClass('loading_div');
    	var data = [{
			'name': 'Tata Steel',
			'nseSymbol': 'TATASTEEL',
			'bseSymbol': 500470,
			'sector': 'STEEL - LARGE',
			'price': 365.1,
			'faceValue': 10.00,
			'marketCap': 49570.83,
			'bookValue': 629.60,
			'eps': 75.41,
			'dividend': 10,
			'month': 'March 2014',
			'debtToEquity': 0.43,
			'currentRatio': 0.57,
			'yearData':[
				{'year': 2005, 'eps': 62.7, 'bookValue': 127, 'div': 13, 'debtToEquity': 0.39, 'currentRatio': 0.69},
				{'year': 2006, 'eps': 63.3, 'bookValue': 176, 'div': 13, 'debtToEquity': 0.26, 'currentRatio': 0.71},
				{'year': 2007, 'eps': 72.7, 'bookValue': 240, 'div': 15.5, 'debtToEquity': 0.69, 'currentRatio': 1.69},
				{'year': 2008, 'eps': 63.8, 'bookValue': 298, 'div': 16, 'debtToEquity': 1.08, 'currentRatio': 3.81},
				{'year': 2009, 'eps': 69.7, 'bookValue': 331, 'div': 16, 'debtToEquity': 1.34, 'currentRatio': 0.91},
				{'year': 2010, 'eps': 56.3, 'bookValue': 418, 'div': 8, 'debtToEquity': 0.68, 'currentRatio': 1.12},
				{'year': 2011, 'eps': 71.5, 'bookValue': 487, 'div': 12, 'debtToEquity': 0.56, 'currentRatio': 1.53},
				{'year': 2012, 'eps': 68.9, 'bookValue': 541, 'div': 12, 'debtToEquity': 0.45, 'currentRatio': 0.93},
				{'year': 2013, 'eps': 52.1, 'bookValue': 568, 'div': 8, 'debtToEquity': 0.47, 'currentRatio': 0.86},
				{'year': 2014, 'eps': 66, 'bookValue': 629, 'div': 10, 'debtToEquity': 0.43, 'currentRatio': 0.57}
			],
			'pros':['Steady growth in book value over the years.', 'Stock is trading at 0.58 of its book value. So stock is undervalued.', 'Steady EPS and dividend payments.', 'Debt-Equity ratio is around 0.5. So good Debt-Equity ratio.'],
			'cons':['Current ratio is very less.', 'Company has a low return on equity of 2.99% for last 3 years.']
    	},
    	{
			'name': 'Canara Bank',
			'nseSymbol': 'CANBK',
			'bseSymbol': 532483,
			'sector': 'BANKS - PUBLIC SECTOR',
			'price': 404.2,
			'faceValue': 10.00,
			'marketCap': 18644.08,
			'bookValue': 642.16,
			'eps': 58.55,
			'dividend': 10,
			'month': 'March 2014',
			'debtToEquity': '-',
			'currentRatio': 0.03,
			'yearData':[
				{'year': 2005, 'eps': 27.1, 'bookValue': 146.2, 'div': 5.5, 'debtToEquity': 0, 'currentRatio': 0.02},
				{'year': 2006, 'eps': 32.7, 'bookValue': 171.2, 'div': 6.6, 'debtToEquity': 0, 'currentRatio': 0.02},
				{'year': 2007, 'eps': 34.6, 'bookValue': 197.8, 'div': 7, 'debtToEquity': 0, 'currentRatio': 0.02},
				{'year': 2008, 'eps': 38.2, 'bookValue': 202.2, 'div': 8, 'debtToEquity': 0, 'currentRatio': 0.02},
				{'year': 2009, 'eps': 50.5, 'bookValue': 244.9, 'div': 8, 'debtToEquity': 0, 'currentRatio': 0.02},
				{'year': 2010, 'eps': 73.7, 'bookValue': 305.8, 'div': 10, 'debtToEquity': 0, 'currentRatio': 0.01},
				{'year': 2011, 'eps': 90.9, 'bookValue': 405, 'div': 11, 'debtToEquity': 0, 'currentRatio': 0.02},
				{'year': 2012, 'eps': 74.1, 'bookValue': 465.6, 'div': 11, 'debtToEquity': 0, 'currentRatio': 0.03},
				{'year': 2013, 'eps': 64.8, 'bookValue': 561.6, 'div': 13, 'debtToEquity': 0, 'currentRatio': 0.03},
				{'year': 2014, 'eps': 53.2, 'bookValue': 642, 'div': 11, 'debtToEquity': 0, 'currentRatio': 0.03}
			],
			'pros':['Stock is trading at 0.63 of its book value. So stock is undervalued.', 'Steady growth in Book Value over the years.', 'Consistent dividend payments.', 'Good credit-deposit ratio (around 70%).'],
			'cons':['EPS has decreased in recent years.', 'Company has a low return on equity of 12.38% for last 3 years.']
    	},
    	{
			'name': 'JK Lakshmi Cement',
			'nseSymbol': 'JKLAKSHMI',
			'bseSymbol': 500380,
			'sector': 'CEMENT - MAJOR',
			'price': 379.95,
			'faceValue': 5.00,
			'marketCap': 4470.87,
			'bookValue': 110.75,
			'eps': 12.11,
			'dividend': '40%',
			'month': 'March 2014',
			'debtToEquity': 1.08,
			'currentRatio': 0.68,
			'yearData':[
				{'year': 2005, 'eps': 4.7, 'bookValue': 22.8, 'div': 0, 'debtToEquity': 5.5, 'currentRatio': 1.44},
				{'year': 2006, 'eps': 11.1, 'bookValue': 36.1, 'div': 0, 'debtToEquity': 3.8, 'currentRatio': 2.01},
				{'year': 2007, 'eps': 31.2, 'bookValue': 68.2, 'div': 1, 'debtToEquity': 1.8, 'currentRatio': 1.93},
				{'year': 2008, 'eps': 36.6, 'bookValue': 103.7, 'div': 2.5, 'debtToEquity': 1.1, 'currentRatio': 2.3},
				{'year': 2009, 'eps': 29.2, 'bookValue': 128.2, 'div': 4, 'debtToEquity': 0.88, 'currentRatio':1.76},
				{'year': 2010, 'eps': 19.7, 'bookValue': 80.9, 'div': 2.5, 'debtToEquity': 0.91, 'currentRatio': 1.35},
				{'year': 2011, 'eps': 4.8, 'bookValue': 84.3, 'div': 1.25, 'debtToEquity': 0.97, 'currentRatio': 1.06},
				{'year': 2012, 'eps': 8.9, 'bookValue': 96.1, 'div': 2, 'debtToEquity': 0.78, 'currentRatio': 1.00},
				{'year': 2013, 'eps': 14.9, 'bookValue': 107.1, 'div': 2.5, 'debtToEquity': 0.90, 'currentRatio': 0.74},
				{'year': 2014, 'eps': 7.9, 'bookValue': 110.8, 'div': 2, 'debtToEquity': 1.08, 'currentRatio': 0.68}
			],
			'pros':['Steady growth in book value in recent years.'],
			'cons':['Debt-Equity ratio is too high.','Stock is trading at 3.4 of its book value.', 'Current ratio is very low in recent years.', 'EPS is not consistent.']
    	},
    	{
			'name': 'Apollo Tyres',
			'nseSymbol': 'APOLLOTYRE',
			'bseSymbol': 500877,
			'sector': 'TYRES',
			'price': 183.6,
			'faceValue': 1.00,
			'marketCap': 9345.69,
			'bookValue': 53.62,
			'eps': 11.64,
			'dividend': '75%',
			'month': 'March 2014',
			'debtToEquity': 0.81,
			'currentRatio': 0.33,
			'yearData':[
				{'year': 2005, 'eps': 17.6, 'bookValue': 149.5, 'div': 4.5, 'debtToEquity': 0.95, 'currentRatio': 0.85},
				{'year': 2006, 'eps': 20.4, 'bookValue': 164.5, 'div': 4.5, 'debtToEquity': 1.2, 'currentRatio': 0.96},
				{'year': 2007, 'eps': 24.5, 'bookValue': 207.7, 'div': 4.5, 'debtToEquity': 0.64, 'currentRatio': 0.83},
				{'year': 2008, 'eps': 4.5, 'bookValue': 25.1, 'div': 0.5, 'debtToEquity': 0.38, 'currentRatio': 0.99},
				{'year': 2009, 'eps': 2.15, 'bookValue': 26.8, 'div': 0.45, 'debtToEquity': 0.51, 'currentRatio': 1.15},
				{'year': 2010, 'eps': 8.23, 'bookValue': 34.2, 'div': 0.75, 'debtToEquity': 0.95, 'currentRatio': 0.66},
				{'year': 2011, 'eps': 3.9, 'bookValue': 37.6, 'div': 0.5, 'debtToEquity': 0.83, 'currentRatio': 1.01},
				{'year': 2012, 'eps': 3.6, 'bookValue': 40.6, 'div': 0.5, 'debtToEquity': 0.81, 'currentRatio': 1.05},
				{'year': 2013, 'eps': 6.2, 'bookValue': 46.2, 'div': 0.5, 'debtToEquity': 0.86, 'currentRatio': 0.81},
				{'year': 2014, 'eps': 8.8, 'bookValue': 54.1, 'div': 0.75, 'debtToEquity': 0.81, 'currentRatio': 0.33}
			],
			'pros':['Steady growth in book value in recent years.', 'Consistent dividend payments in recent years.'],
			'cons':['Current ratio is low.', 'Company is trading 3.4 of book value.', 'Debt-Equity ratio is on the higher side.']
    	}];
    	return new Ember.RSVP.Promise(function(resolve, reject) {
    		Ember.run.later(this, function(){
    			resolve(data);
    		}, 500);
    	});
    },
    afterModel: function(model, transition) {
    	$('body').removeClass('loading_div');
    	Stock.set('data', model);
    },
    setupController: function(controller, model) {
    	var price, eps, bookValue, i,
    		modelLength = model.length;
    	for(i = 0; i < modelLength; i = i + 1) {
    		var obj = model[i];
    		price = obj.price;
    		eps = obj.eps;
    		bookValue = obj.bookValue;
    		Ember.set(obj, 'pTob', (price/bookValue).toFixed(2));
    		Ember.set(obj, 'pToe', (price/eps).toFixed(2));
    	}
    	controller.set('data', model);
    }
});