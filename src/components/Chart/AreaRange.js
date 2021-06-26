import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



const BarChartVertical = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/range.json');
      const data = await res.json();
      setData(data)
    }

    getData();
  }, []);

  const options = {
    chart: {
      type: 'arearange',
      zoomType: 'x',
      scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1
      }
  },

  title: {
      text: 'Temperature variation by day'
  },

  xAxis: {
      type: 'datetime',
      accessibility: {
          rangeDescription: 'Range: Jan 1st 2017 to Dec 31 2017.'
      }
  },

  yAxis: {
      title: {
          text: null
      }
  },

  tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: '°C',
      xDateFormat: '%A, %b %e'
  },

  legend: {
      enabled: false
  },

  series: [{
      name: 'Temperatures',
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