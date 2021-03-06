import React from 'react'
import { Line, Pie } from 'react-chartjs-2'
import {connect} from 'react-redux'

import moment from 'moment'

import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines} from 'react-vis';

// // gather chartjs data
// const data = {
//     datasets: [
//                 {
//                     // styling for line chart using chartjs api props
//                     label: 'Filtered Expenses',
//                     showLine: true, // draw line relating to the data
//                     fill: false,
//                     pointBorderColor: '#E040FB',
//                     pointBackgroundColor: '#FFF',
//                     pointHoverBackgroundColor: '#9C27B0',
//                     pointBorderWidth: 1,
//                     pointBorderRadius: 4,
//                     borderColor: '#E040FB',
//                     pointHoverBorderColor: '#212121',
//                     pointHoverBorderWidth: 1.5,
//                     pointRadius: 2.5,
//                     pointHitRadius: 8
//                 }
//             ]
// };

// const amountAxis = [{
//     ticks: {
//         // cartesian axis eg. [2,4]
//         // chart.js docs
//         callback: (value, index, values) => {
//             return '€' + value.toFixed(2); // fixed num 2 decimals
//         }
//     }
// }]

// // Used to display the time from date variable
// const dateAxis = [{
//     type: 'time',
//     distribution: 'linear', // data is spread according to it's time
//     time: {
//         displayFormats: {
//             day: 'D MMM' // reading from moment.js -- chartjs 2 is dependent on moment for time
//         },
//         unit: 'day'
//     }
// }]

// const options = {
//     legend: {
//         display: true,
//         position: top,
//         labels: {
//             fontFamily: 'Helvetica',
//             fontSize: 10
//         }
//     },
//     scales: {
//         xAxes: [{
//             ticks: {
//                 autoSkip: false
//             }
//         }],
//         yAxes: amountAxis
//     }
// };

const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];

export class ExpLineChart extends React.Component {
    

    render() {
        return (
            <div className="App">
                <XYPlot height={500} width={900}>
                <VerticalGridLines/>
                <HorizontalGridLines/>
                    <XAxis/>
                    <YAxis/>
                    <LineSeries data={data} color="#f224f2"/>
                </XYPlot>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpLineChart);