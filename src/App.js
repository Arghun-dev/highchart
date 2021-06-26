import React from 'react'
import BarChartVertical from './components/Chart/BarChartVertical';
import BarChartHorizontal from './components/Chart/BarChartHorizontal';
import BasicLineChart from './components/Chart/BasicLineChart';
import TimeSeriesZoomable from './components/Chart/TimeSeriesZoomable';
import WithAnnotation from './components/Chart/WithAnnotation';
import BasicArea from './components/Chart/BasicArea';
import AreaRange from './components/Chart/AreaRange';
import Synchronize from './components/Chart/Synchronize';

  const App = () => {
    return (
      <div>
        <Synchronize />
      </div>
    )
} 

export default App;