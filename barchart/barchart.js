Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Emotion Over Time'
  },
  subtitle: {
    text: 'Journal Upload: September 20th, 2021'
  },
  xAxis: {
    categories: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Time Spent in Seconds'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} seconds </b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Happy',
    data: [30, 35, 40, 50, 50, 25, 20, 15, 30, 25, 15, 10]

  }, {
    name: 'Excited',
    data: [25, 30, 35, 40, 50, 10, 10, 5, 5, 25, 10, 5]

  }, {
    name: 'Sad',
    data: [5, 10, 5, 5, 0, 40, 35, 45, 10, 5, 8, 30]

  }, {
    name: 'Angry',
    data: [5, 10, 15, 20, 25, 30, 35, 40, 40, 35, 30, 50]

  }]
});
