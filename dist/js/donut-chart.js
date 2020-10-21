( function ( $ ) {
    "use strict";
    
    var data = [{
		data: [50, 55, 60],
		labels: ["Data1", "Data2", "Data3"],
		backgroundColor: [
			"#FFB74A",
			"#FD3758",
			"#78CA38"
		],
	}];

	var options = {
        legend:{
            display:true
        },
		tooltips: {
			enabled: true
		},
		plugins: {
			datalabels: {
                color:"#ffffff",
				formatter: (value, ctx) => {

					let datasets = ctx.chart.data.datasets;

					if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
						let sum = datasets[0].data.reduce((a, b) => a + b, 0);
						let percentage = Math.round((value / sum) * 100)     + '%';
						return percentage;
					} else {
						return percentage;
					}
				},
            }
		}
	};

	var ctx = document.getElementById("doughnut-chart1").getContext('2d');

	ctx.height = 200;
	var myChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			datasets: data
		},
        // responsive: true,
        // legend: {
        //     display:true
        // },
		// maintainAspectRatio: false,
		options: options
    });

} )( jQuery );