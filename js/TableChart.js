// Load the Visualization API and the corechart package.
google.charts.load('current');

// Set a callback to run when the Google Visualization API is loaded.
//google.charts.setOnLoadCallback(drawChart);

// draws it.
function drawChart() {
  // Table Chart
  google.visualization.drawChart({
          "containerId": "chart_Table",
          "dataSourceUrl": "https://spreadsheets.google.com/a/google.com/tq?key=pCQbetd-CptGXxxQIG7VFIQ&pub=1",
          "query":"SELECT A,D WHERE D > 100 ORDER BY D",
          "refreshInterval": 5,
          "chartType": "Table",
          "options": {
             "alternatingRowStyle": true,
             "showRowNumber" : true
          }
        });
};
