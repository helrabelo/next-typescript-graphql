import { formatPrice } from 'utils/formatPrice'

export const chartColors = [
  ['#C341FF'],
  ['#19AB4F'],
  ['#FFC371'],
  ['#2E8EF7'],
  ['#FF409A'],
  ['#C341FF'],
  ['#19AB4F'],
  ['#FFC371'],
  ['#2E8EF7'],
  ['#FF409A']
]

export const initialPerPsaMock = {
  series: [
    {
      name: 'PSA 10',
      data: [[0, 0]]
    }
  ],
  options: {
    chart: {
      type: 'area',
      stacked: false,
      height: 250,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: 'zoom'
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0
    },
    colors: ['#FF409A'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    },
    yaxis: {
      labels: {
        formatter: function (val: number) {
          return Math.floor(val)
        }
      }
    },
    xaxis: {
      type: 'datetime'
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val: number) {
          return formatPrice(val)
        }
      }
    }
  }
}
