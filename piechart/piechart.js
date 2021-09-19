Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Emotion Over Time for September 20th, 2021 Journal'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Happy',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Excited',
      y: 11.84
    }, {
      name: 'Anxious',
      y: 10.85
    }, {
      name: 'Suprised',
      y: 4.67
    }, {
      name: 'Sad',
      y: 4.18
    }, {
      name: 'Angry',
      y: 1.64
    }, {
      name: 'Disgust',
      y: 1.6
    }, {
      name: 'Confusion',
      y: 1.2
    }, {
      name: 'Boredom',
      y: 2.61
    }]
  }]
});
