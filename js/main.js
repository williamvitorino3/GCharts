// Load the Visualization API and the corechart package.
google.charts.load('current');

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

// Annotation
google.visualization.drawChart({
        "containerId": "chart_Geo",
        "dataSourceUrl": "https://spreadsheets.google.com/a/google.com/tq?key=pCQbetd-CptGXxxQIG7VFIQ&pub=1",
        "query":"SELECT A,D WHERE D > 100 ORDER BY D",
        "refreshInterval": 5,
        "chartType": "AnnotationChart",
        "options": {
           "alternatingRowStyle": true,
           "showRowNumber" : true
        }
      });
}
