<template>
  <div id="app">
    <h1>{{ options.title }}</h1>
    <div id="chart_div"></div>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  data () {
    return {
      options: {
        title: 'How Much Pizza I Ate Last Night',
        width: 400,
        height: 300
      },
      data_table: '',
      rows_chart: [['Mushrooms', 3], ['Onions', 1], ['Olives', 1], ['Zucchini', 1], ['Pepperoni', 2]]
    }
  },
  created: function() {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(this.drawChart);
  },
  methods: {
    drawChart: function() {
      // Create the data table.
      this.data_table = new google.visualization.DataTable();
      this.data_table.addColumn('string', 'Topping');
      this.data_table.addColumn('number', 'Slices');
      this.data_table.addRows(this.rows_chart);

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(this.data_table, this.options);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
