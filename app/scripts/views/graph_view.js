Stock.GraphView = Ember.View.extend({
    templateName: 'graph',
    classNames: ['wrapper'],
    xLabel: 'Year',
    graphColor: '#182C36',
    startIndex: 0,
    dataHeader: 'Book Value',
    valueString: 'bookValue',
    didInsertElement: function() {
        this.setInitialData();
    },
    change: function(event) {
        var elem = $(event.target),
        dataheader, value, startIndex, dataHeader;
        if (elem.hasClass('graph_dropdown')) {
        	elem = elem.find(':selected');
            if (elem.hasClass('book_value_option')) {
            	dataHeader = 'Book Value';
            	value = 'bookValue';
            } else if (elem.hasClass('eps_option')) {
            	dataHeader = 'EPS';
            	value = 'eps';
            } else if (elem.hasClass('debt_option')) {
            	dataHeader = 'Debt-Equity Ratio';
            	value = 'debtToEquity';
            } else if (elem.hasClass('dividend_option')) {
            	dataHeader = 'Dividend';
            	value = 'div';
            } else if (elem.hasClass('current_ratio_option')) {
            	dataHeader = 'Cureent Ratio';
            	value = 'currentRatio';
            }
            this.setProperties({
            	'dataHeader': dataHeader,
            	'valueString': value
            });
            this.setInitialData();
        } else if(elem.hasClass('year_dropdown')) {
        	elem = elem.find(':selected');
        	if (elem.hasClass('five_year_option')) {
            	startIndex = 5;
            } else if (elem.hasClass('ten_year_option')) {
            	startIndex = 0;
            }
            this.set('startIndex', startIndex);
            this.setInitialData();
        }
    },
    setInitialData: function() {
        var slectedObj = this.get('controller.selectedObj'),
            yearData = slectedObj.yearData,
            yearDataLength = yearData.length,
            graphData = [],
            tableData = [],
            toolTip = [],
            valueArray = [],
            xaxisTicks = [],
            valueString = this.get('valueString'),
            startIndex = this.get('startIndex'),
            localValue, year, minValue, maxValue, dataObj, i;
        for (i = startIndex; i < yearDataLength; i = i + 1) {
            dataObj = yearData[i];
            localValue = dataObj[valueString];
            year = dataObj.year;
            var obj = {
            	year: year,
            	value: localValue
            };
            graphData.push([i - startIndex, localValue]);
            xaxisTicks.push([i - startIndex, year]);
            toolTip.push(this.get('dataHeader') + ': ' + localValue + '<br>' + 'Year: ' + year);
            valueArray.push(localValue);
            tableData.push(obj);
        }
        minValue = Math.min.apply(null, valueArray);
        maxValue = Math.max.apply(null, valueArray);
        this.setProperties({
            'xaxisTicks': xaxisTicks,
            'xMax': yearDataLength - startIndex - 0.5,
            'yMin':minValue,
            'yMax':maxValue,
            'graphData': graphData,
            'tableData': tableData,
            'toolTip': toolTip
        });
    },
    drawChart: function() {
        var plot = $.plot(this.$('.chart'), [{data: this.get('graphData')}],
         {
            series: {
                bars: {
                    show: false,
                    barWidth: 0.3,
                    align: "center",
                    lineWidth: 2,
                    fill: true
                },
                lines: {
                    show: true,
                    fill: false,
                    lineWidth: 2,
                    fillColor: this.get('graphColor')
                },
                points: {
                    radius: 2,
                    show: true,
                    fill: true,
                    fillColor: this.get('graphColor')
                }
            },
            grid: {
            	show:true,
                hoverable: true,
                clickable: true,
                markings: function (axes) {
				   	var ymin = axes.yaxis.min,
				    	xmin = 0;
				    return [{
				        color: 'black',
				        lineWidth: 0.8,
				        yaxis: {
				            from: ymin,
				            to: ymin
				        }
				    }, {
				        color: 'black',
				        lineWidth: 0.8,
				        xaxis: {
				            from: xmin,
				            to: xmin
				        }
				    }];
				},
                borderWidth: 0,
                mouseActiveRadius: 5
            },
            colors: [this.get('graphColor')],
            xaxis: {
                min: 0,
                max: this.get('xMax'),
                ticks: this.get('xaxisTicks'),
                tickWidth: null,
                tickLength:null,
                axisLabel: this.get('xLabel'),
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Arial',
                axisLabelPadding: 10
            },
            yaxis: {
            	min:0,
                axisLabel: this.get('dataHeader'),
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Arial',
                axisLabelPadding: 10
            },
            contextView: this
        });
		console.log();
        function showBarTooltip(x, y, contents, color) {
                $('<div id="tooltip">' + contents + '</div>').css({
                    position: 'absolute',
                    display: 'none',
                    top: y - 25,
                    left: x,
                    border: '1px solid ' + color,
                    padding: '3px',
                    'font-size': '9px',
                    'border-radius': '2px',
                    'background-color': '#fff',
                    'font-family': 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
                    opacity: 1,
                    'z-index': 16
                }).appendTo("body").fadeIn(0);

            }
            this.$('.chart').on("plothover", {
                self: this
            }, function(event, pos, item) {
                var self = event.data.self;
                var previousPoint;
                var previousLabel;
                self.$("#x").text(pos.x.toFixed(2));
                self.$("#y").text(pos.y.toFixed(2));
                if (item) {
                    if ((previousPoint !== item.dataIndex) || (previousLabel !== item.series.label)) {
                        previousPoint = item.dataIndex;
                        previousLabel = item.series.label;
                        $("#tooltip").remove();
                        showBarTooltip(pos.pageX, pos.pageY, self.get('toolTip')[item.dataIndex], self.get('graphColor'));
                    }
                } else {
                    $("#tooltip").remove();
                    previousPoint = null;
                }
            });
    }.observes('graphData')
});
