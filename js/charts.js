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
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'Kepler-22b mission');
    data.addColumn('string', 'Kepler title');
    data.addColumn('string', 'Kepler text');
    data.addColumn('number', 'Gliese 163 mission');
    data.addColumn('string', 'Gliese title');
    data.addColumn('string', 'Gliese text');
    data.addRows([
        [new Date(2314, 2, 15), 12400, undefined, undefined,
            10645, undefined, undefined],
        [new Date(2314, 2, 16), 24045, 'Lalibertines', 'First encounter',
            12374, undefined, undefined],
        [new Date(2314, 2, 17), 35022, 'Lalibertines', 'They are very tall',
            15766, 'Gallantors', 'First Encounter'],
        [new Date(2314, 2, 18), 12284, 'Lalibertines', 'Attack on our crew!',
            34334, 'Gallantors', 'Statement of shared principles'],
        [new Date(2314, 2, 19), 8476, 'Lalibertines', 'Heavy casualties',
            66467, 'Gallantors', 'Mysteries revealed'],
        [new Date(2314, 2, 20), 0, 'Lalibertines', 'All crew lost',
            79463, 'Gallantors', 'Omniscience achieved']
    ]);

    var chart = getChart("AnnotationChart", document.getElementById("chart1"));
    //chart = new google.visualization.AnnotationChart(document.getElementById("chart1"));

    var options = {
        displayAnnotations: true
    };

    chart.draw(data, options);
};