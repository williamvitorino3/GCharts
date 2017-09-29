/**
 * Arquivo com as funções de desenho dos gráficos.
 * 
 * Autor: William Vitorino.
 */

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['table', 'annotationchart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChartAnnotationChart);

// AreaChart
function drawAreaChart(element) {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2013', 1000, 400],
        ['2014', 1170, 460],
        ['2015', 660, 1120],
        ['2016', 1030, 540]
    ]);

    var chart = new google.visualization.AreaChart(element);

    var options = {
        title: 'Company Performance',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 }
    };

    chart.draw(data, options);
};

// AnnotationChart
function drawChartAnnotationChart(element) {
    
    let chart = getChart("AnnotationChart", document.getElementById("chart1"));
    //chart = new google.visualization.AnnotationChart(document.getElementById("chart1"));

    let options = {
        displayAnnotations: true
    };

    let objDataAnnotationChart = {
        "data": getDataAnnotationChart(),
        "options": {
            displayAnnotations: true
        }
    }

    chart.draw(objDataAnnotationChart.data, objDataAnnotationChart.options);
};