Highcharts.chart('container', {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
    }
  },
  title: {
    text: 'Emotion Over Time Journal Upload: September 20th, 2021'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 35,
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }
  },
  series: [{
    type: 'pie',
    name: 'Emotion',
    data: [
      ['Happy', 45.0],
      ['Excited', 26.8],
      {
        name: 'Joyful',
        y: 12.8,
        sliced: true,
        selected: true
      },
      ['Anxious', 8.5],
      ['Sad', 6.2],
      ['Angry', 0.7]
    ]
  }]
});
