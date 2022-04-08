function chart(option, id) {
  // Initialize the echarts instance based on the prepared dom
  var myChart = echarts.init(document.getElementById(id));
  // Display the chart using the configuration items and data just specified.
  myChart.setOption(option);
}
