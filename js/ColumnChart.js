// Load the Visualization API and the corechart package.
google.charts.load('current',  {packages:['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// draws it.
function drawChart() {
  var data = new google.visualization.arrayToDataTable([
    ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
     'Western', 'Literature', { role: 'annotation' } ],
    ['2010', 10, 24, 20, 32, 18, 5, ''],
    ['2020', 16, 22, 23, 30, 16, 9, ''],
    ['2030', 28, 19, 29, 30, 12, 13, '']
  ]);

  var chart = new google.visualization.ColumnChart(document.getElementById('ColumnChart'));

  var options = {
    width: 600,
    height: 400,
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' },
    isStacked: true,
  }; 
};
