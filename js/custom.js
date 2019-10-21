
// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Sevas'],
  ['Seva1', 8],
  ['Seva2', 2],
  ['Seva3', 4],
  ['Seva4', 2],
  ['Seva5', 8]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':"Seva's", 'width':300, 'height':300};

  var chart = new google.visualization.PieChart(document.getElementById('sevas'));
  chart.draw(data, options);

  var chart = new google.visualization.PieChart(document.getElementById('accomidation'));
  chart.draw(data, options);

  var chart = new google.visualization.PieChart(document.getElementById('donations'));
  chart.draw(data, options);
}
