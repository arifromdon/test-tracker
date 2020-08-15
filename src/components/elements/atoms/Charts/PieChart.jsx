import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class PieChart extends Component {
  render(){
    const pieChart = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: ''
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
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: `CAPEX 61%`,
          y: 61.41,
        }, {
          name: `OPEX 11%`,
          y: 11.84
        }]
      }]
    }

    return (
      <div className="mixed-chart w-100">
        <HighchartsReact
          highcharts={Highcharts}
          options={pieChart}
        />
      </div>
    )
  }
}

export default PieChart