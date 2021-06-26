import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Synchronize.css';

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
      type: 'area',
      zoomType: 'x',
      scrollablePlotArea: {
        minWidth: 600,
        scrollPositionX: 1
      },
      style: {
        fontFamily: 'IRANSans',
      },
      marginLeft: 40, // Keep all charts left aligned
      spacingTop: 20,
      spacingBottom: 20,
      marginRight: 330,
      marginBottom: 25
    },
    rangeSelector: {
      selected: 1
    },
    credits: {
      enabled: false
    },
    accessibility: {
        description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
    },
    title: {
        text: 'تولید انرژی هسته‌ای آمریکا و روسیه',
        align: 'left',
        margin: 0,
        x: 30
    },
    subtitle: {
        text: 'بورسان <a href="https://bourseon.com">'
            // 'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
            // 'armscontrol.org</a>'
    },
    xAxis: {
        // type: 'datetime',
        allowDecimals: true,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        },
        accessibility: {
            rangeDescription: 'Range: 1940 to 2017.'
        },
  
        crosshair: {
          width: 2,
          color: 'gray',
          dashStyle: 'ShortDash',
        }
    },
    yAxis: {
        visible: false,
        title: {
            text: 'انرژی هسته‌ای'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        },
    },
    // tooltip: {
    //     pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}',
    //     // crosshairs: true,
    //     // shared: true,
    //     valueSuffix: '°C',
    //     xDateFormat: '%A, %b %e',
    //     // positioner: function () {
    //     //   return {
    //     //       // right aligned
    //     //       x: this.chart.chartWidth - this.label.width,
    //     //       y: 10 // align to title
    //     //   };
    //     // },
    //     // borderWidth: 0,
    //     // backgroundColor: 'none',
    //     // pointFormat: '{point.y}',
    //     // headerFormat: '',
    //     shadow: true,
    //     style: {
    //       fontSize: '15px',
    //     },
    //     // useHTML:true,
    //     //   formatter: function(point) {
    //     //       return `<div class="tooltip"><span>header</span><span>body <b>${point.x}</b></span></div>`;
    //     //   },
    //     formatter: function (tooltip) {     
    //       const header = `<span style="color: blue;">${this.x}</span><br/>`
        
    //       return header
    //     },
    //     backgroundColor: '#FFFFFF',
    //     borderColor: '#ccc ',
    //     borderRadius: 10,
    //     borderWidth: 1,
    //     distance: 50,
    //     shape: 'rect'
    //     // boxShadow: '2px 4px 6px red'
    //     // valueDecimals: point.x
    // },
    tooltip: {
      backgroundColor: '#fff',
      borderWidth: 0,
      borderRadius: 3,
      borderColor: 'none',
      headerFormat: '<div style="display: flex; flex-direction: column; align-items: center; font-weight: bold;">',
      pointFormat: `<div style="width: 100%; text-align: center; border: none; box-shadow: 6px 7px 8px #ccc;"><span style="background-color: #3B539B; color: white; padding: 4px 48px; border-radius: 4px 4px 0 0;">{point.y} ریال</span><br /><span style="padding-top: 60px;">قیمت ابطال هر واحد</span><br /><span>${new Date().toLocaleString()}</span></div>`,
      // footerFormat: '<div style="width: 100%;">قیمت ابطال هر واحد</div>',
      style: {
        color: '#4a4a4a',
      },
      padding: 0,
      shared: true,
      useHTML: true,
      shape: 'rect',
      distance: 50,
    },
    plotOptions: {
        area: {
            pointStart: 1965,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 4,
                states: {
                  hover: {
                    enabled: true
                  }
                },
            },
        },
        series: {
          fillOpacity: 0.1
        }
    },
    series: [
      {
        // fillOpacity: 1,
        name: 'روسیه',
        data: data,
        lineWidth: 1,
          lineColor: 'rgba(247, 106, 1, 1)',
          marker: {
            lineWidth: 1.5,
            // height: 100,
            // width: 100,
            // enabledThreshold: 15,
            lineColor: 'rgba(247, 106, 1, 1)',
            fillColor: 'white',
            symbol: 'circle',
            radius: 5,
            // threshold: null
          },
          fillColor: {
              linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
              stops: [
                  [0, 'rgba(247, 106, 1, .1)'],
                  // [0.5, 'rgba(120, 56, 1, .3)'],
                  [1, 'rgba(255,255,255,.05)']
              ]
          },
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