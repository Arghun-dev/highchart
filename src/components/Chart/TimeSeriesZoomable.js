import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



const BarChartVertical = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json');
      const data = await res.json();
      setData(data)
    }

    getData();
  }, []);

  const options = {
    chart: {
      zoomType: 'x',
      style: {
        fontFamily: 'IRANSans'
      }
  },
  credits: {
    enabled: false
  },
  title: {
      text: 'تست چارت'
  },
  subtitle: {
      text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
  },
  xAxis: {
      type: 'datetime'
  },
  yAxis: {
      title: {
          text: 'نرخ تغییرات'
      }
  },
  legend: {
      enabled: false
  },
  plotOptions: {
      area: {
          fillColor: {
              linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1
              },
              stops: [
                  [0, Highcharts.getOptions().colors[0]],
                  [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
              ]
          },
          marker: {
              radius: 2
          },
          lineWidth: 1,
          states: {
              hover: {
                  lineWidth: 1
              }
          },
          threshold: null
      }
  },
  
  series: [{
      type: 'area',
      name: 'USD to EUR',
      data: data
  }]
  }

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}

export default BarChartVertical;