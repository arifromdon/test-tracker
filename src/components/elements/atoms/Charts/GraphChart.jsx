import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class PieChart extends Component {
  render(){
    const pieChart = {
      chart: {
        type: 'area'
      },
      accessibility: {
        description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        allowDecimals: false,
        labels: {
          formatter: function () {
            return this.value; // clean, unformatted number for year
          }
        },
        accessibility: {
          rangeDescription: 'Range: 2020 to 2020.'
        }
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          formatter: function () {
            return this.value / 100 + 'M';
          }
        }
      },
      tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      plotOptions: {
        area: {
          pointStart: 2020,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [{
        name: 'USA',
        data: [
          null, null, null, null, null, 6, 11, 32, 110, 235,
          369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
          20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
          26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
        ]
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