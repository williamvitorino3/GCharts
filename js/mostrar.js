function ver() {
  var checkbox = document.getElementsByTagName('INPUT');

  for (var i = 0; i < checkbox.length; i++)
  {
    document.getElementById(checkbox[i].name).style.display = (
      checkbox[i].checked ?
      "block":
      "none"
    );
  }
}

function getElemento() {
  var elements = document.getElementsByTagName('OPTION');
  for (var i = 0; i < elements.length; i++) {
    if(elements[i].selected) {
      //document.getElementByClass("Chart").id = elements[i].value;
      return elements[i].value;
    }
  }
}

function getChart(chart, element) {
  var charts = {
    "Table": google.visualization.Table,
    "BarChart": google.visualization.BarChart,
    "AnnotationChart": google.visualization.AnnotationChart,
    "AreaChart": google.visualization.AreaChart,
    "BubbleChart": google.visualization.BubbleChart,
    "CalendarChart": google.visualization.CalendarChart,
    "ColumnChart": google.visualization.ColumnChart,
    "CandlestickChart": google.visualization.CandlestickChart,
    "ComboChart": google.visualization.ComboChart,
    "DonutChart": google.visualization.DonutChart,
    "GanttChart": google.visualization.GanttChart,
    "GaugeChart": google.visualization.GaugeChart,
    "GeoChart": google.visualization.GeoChart,
    "HistogramChart": google.visualization.HistogramChart,
  }
  console.log(charts[chart]);
  return new charts[chart](element);
}
