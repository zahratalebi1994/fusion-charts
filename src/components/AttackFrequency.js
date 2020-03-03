import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
charts(FusionCharts);

function AttackFrequency (props){
    // Preparing the chart data
    let startDate = props.startDate;
    let endDate = props.endDate;
    let data = props.attacks;
    if (startDate !=='' && endDate !== '' && startDate !==null && endDate !== null){
        data = dateFilter(props.attacks, startDate, endDate);
    }
    data = prepareChartData(data);

// Create a JSON object to store the chart configurations
    const columnChartConfigs = {
        type: "column2d", // The chart type
        width: "100%", // Width of the chart
        height: "500", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                caption: "Attacks Frequency Distribution Chart",    //Set the chart caption
                subCaption: "Attacks Types & Frequency",             //Set the chart subcaption
                xAxisName: "Attack Type",           //Set the x-axis name
                yAxisName: "Frequency",  //Set the y-axis name,
                theme: "fusion",
                exportEnabled: "1",
                exportMode: "client"//Set the theme for your chart
            },
            // Chart Data
            data: data
        }
    };
    const pieChartDataSource = {
        chart: {
            caption: "Attacks Frequency Distribution Chart",
            plottooltext: "<b>$percentValue</b> of the attacks are $label impact",
            showlegend: "1",
            showpercentvalues: "1",
            legendposition: "bottom",
            usedataplotcolorforlabels: "1",
            theme: "fusion",
            exportEnabled: "1",
            exportMode: "client"
        },
        data: data
    };
    if(props.chartType === 'pie'){
        return (
            <div>
                <ReactFC
                    type="pie2d"
                    width="100%"
                    height="500"
                    dataFormat="JSON"
                    dataSource={pieChartDataSource}
                />
            </div>
        );
    }
    return (
        <div>
            <ReactFC {...columnChartConfigs} />
        </div>
        );
}
export default AttackFrequency;


function countImpact (attacks, impact) {
    const countTypes = attacks.filter(attacks => attacks.impact_type === impact.toString());
    return countTypes.length.toString();
}

function dateFilter(attacks, startDate, endDate) {
    const data = [];
    attacks.forEach(obj => {
        var d = new Date(obj.date);
        if (d >= startDate && d <= endDate) {
            data.push({ ...obj })
        }});
    return data;
}

function prepareChartData(attacks) {
    const data=[];
    attacks.map( attack => {
        data.push({
            label: attack.impact_type,
            value: countImpact(attacks, attack.impact_type)
        })
    });
    //remove duplicates
    const chartData = [];
    data.forEach(obj => {
        if (!chartData.some(o => o.label === obj.label)) {
            chartData.push({ ...obj })
        }});
    return chartData;
}