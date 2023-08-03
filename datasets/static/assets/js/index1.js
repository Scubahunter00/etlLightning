
/* Apexcharts (#bar) */
	
function sales() {
	var options = {
		series: [{
			name: 'Net Profit',
			type: 'column',
			data: [22, 34, 56, 37, 35, 21, 34, 60, 78, 56, 53, 89],
		}, {
			name: 'Sales',
			type: 'column',
			data: [42, 50, 70, 57, 55, 58, 43, 80, 54, 23, 34, 77],
		}],
		chart: {
			height: 380,
			foreColor: 'rgba(142, 156, 173, 0.9)',
		},
		stroke: {
			width: [0, 2, 4],
			curve: "smooth"
		},
		grid: {
		  borderColor: '#f7f9fa',
		},
		colors: [myVarVal ,"#44c4fa",],
		plotOptions: {
			bar: {
				borderRadius: 4,
				horizontal: false,
				columnWidth: '30%',
			},
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: true,
			position: 'bottom',
			labels: {
				color: 'rgba(142, 156, 173, 0.9)'
			},
			fontFamily: 'Hind Siliguri',
		},
		stroke: {
			show: true,
			width: 4,
			colors: ['transparent']
		},
		yaxis: {
			title: {
				style: {
					color: '#e6ebf1',
					fontSize: '14px',
					fontFamily: 'Hind Siliguri',
					fontWeight: 600,
					cssClass: 'apexcharts-yaxis-label',
				},
			},
			labels: {
				rotate: -90,
				style: {
					fontFamily: 'Hind Siliguri',
					cssClass: 'summaryyaxis',
				}
			}
		},
		xaxis: {
			type: 'month',
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			axisBorder: {
				show: true,
				color: '#e6ebf1',
				offsetX: 0,
				offsetY: 0,
			},
			axisTicks: {
				show: true,
				borderType: 'solid',
				color: '#e6ebf1',
				width: 6,
				offsetX: 0,
				offsetY: 0
			},
			labels: {
				rotate: -90,
				style: {
					fontFamily: 'Hind Siliguri',
					cssClass: 'summaryxaxis',
				}
			}
		},
		markers: {
			size: 0
		}
	};
	  document.getElementById("statistics").innerHTML= " ";
	  var chart = new ApexCharts(document.querySelector("#statistics"), options);
	  chart.render();
}
	
	  
  /* Apexcharts (#bar) closed */


$(function(e){
    'use strict'
	  

    var spark1 = {
		chart: {
		  type: 'area',
		  height: 60,
		  width:120,
		  sparkline: {
			enabled: true
		  },
		  dropShadow: {
			  enabled: false,
			  blur: 3,
			  opacity: 0.2,
			  show:false,
		  }
		  },
		  stroke: {
			  show: true,
			  curve: 'smooth',
			  lineCap: 'butt',
			  colors: undefined,
			  width: 2,
			  dashArray: 0,
		  },
		fill: {
		  gradient: {
			enabled: false
		  }
		},
		series: [{

		  name: 'Total Sales',
		  data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
		}],
		yaxis: {
		  min: 0,
		  show: false
		},
		 xaxis: {
			axisBorder: {
				show: false
			},
		},   
		yaxis: {
			axisBorder: {
				show: false
			},
		},  
		colors: ['rgba(255,255,255,0.3)'],
  
	  }
	  var spark1 = new ApexCharts(document.querySelector("#spark1"), spark1);
	  spark1.render();
 
	  var spark2 = {
		chart: {
		  type: 'area',
		  height: 60,
		  width: 120,
		  sparkline: {
			enabled: true
		  },
		  dropShadow: {
			  enabled: false,
			  blur: 3,
			  opacity: 0.2,
		  }
		  },
		  stroke: {
			  show: true,
			  curve: 'smooth',
			  lineCap: 'butt',
			  colors: undefined,
			  width: 2,
			  dashArray: 0,
		  },
		  fill: {
		  gradient: {
			enabled: false
		  }
		},
		series: [{
		  name: 'Total stats',
		  data: [0, 45, 93, 53, 61, 27, 54, 43, 19, 46, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, ]
		}],
		yaxis: {
		  min: 0
		},
		colors: ['rgba(255,255,255,0.4)'],
  
	  }
	  var spark2 = new ApexCharts(document.querySelector("#spark2"), spark2);
	  spark2.render();

	  var spark3 = {
		chart: {
		  type: 'area',
		  height: 60,
		  width: 120,
		  sparkline: {
			enabled: true
		  },
		  dropShadow: {
			  enabled: false,
			  blur: 3,
			  opacity: 0.2,
		  }
		  },
		  stroke: {
			  show: true,
			  curve: 'smooth',
			  lineCap: 'butt',
			  colors: undefined,
			  width: 2,
			  dashArray: 0,
		  },
		  fill: {
		  gradient: {
			enabled: false
		  }
		},
		series: [{
		  name: 'Total Income',
		  data: [0, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46,45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]
		}],
		yaxis: {
		  min: 0
		},
		colors: ['rgba(255,255,255,0.3)'],
  
	  }
	  var spark3 = new ApexCharts(document.querySelector("#spark3"), spark3);
	  spark3.render();
  

	  var spark4 = {
		  chart: {
			type: 'area',
			height: 60,
			width: 120,
			sparkline: {
			  enabled: true
			},
			dropShadow: {
				enabled: false,
				blur: 3,
				opacity: 0.2,	
			}
			},
			stroke: {
				show: true,
				curve: 'smooth',
				lineCap: 'butt',
				colors: undefined,
				width: 2,
				dashArray: 0,
			},
		  fill: {
			gradient: {
			  enabled: false
			}
		  },
		  series: [{
			name: 'Total Tax',
			data: [0, 45, 54, 38, 56, 24, 55, 31, 37, 39, 62, 51, 35, 41, 48, 27, 93, 53, 52, 27, 54, 43, 19, 46]
		  }],
		  yaxis: {
			min: 0
		  },
		  colors: ['rgba(255,255,255,0.3)'],
	
		}
		var spark4 = new ApexCharts(document.querySelector("#spark4"), spark4);
		spark4.render();

	

	$('#datatable').DataTable({
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}
	});

	// SELECT2
		$('.select2').select2({
		minimumResultsForSearch: Infinity
	});

	
	const ps4 = new PerfectScrollbar('.recent-activity', {
		useBothWheelAxes:true,
		suppressScrollX:true,
	  });
	
 });


