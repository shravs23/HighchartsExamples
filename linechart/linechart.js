Highcharts.chart('container', {

  title: {
    text: 'Emotion Over Time'
  },

  subtitle: {
    text: 'Journal Upload for John'
  },

  yAxis: {
    title: {
      text: 'Time Spent (seconds)'
    }
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 1 to 8'
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 1
    }
  },

  series: [{
    name: 'Happy',
    data: [55, 30, 30, 25, 0, 40, 35, 50]
  }, {
    name: 'Excited',
    data: [45, 40, 35, 25, 0, 18, 13, 55]
  }, {
    name: 'Sad',
    data: [0, 5, 30, 50, 5, 15, 0, 10]
  }, {
    name: 'Anxious',
    data: [0, 15, 20, 30, 40, 15, 0, 10]
  }, {
    name: 'Angry',
    data: [0, 0, 30, 45, 45, 10, 0, 0]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});
