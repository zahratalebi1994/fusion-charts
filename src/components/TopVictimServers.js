import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import FusionMaps from 'fusioncharts/fusioncharts.maps';
import IR from '../fusioncharts/maps/fusioncharts.iran';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, FusionMaps, IR, FusionTheme);


function TopVictimServers (props) {
    // Preparing the chart data
    let startDate = props.startDate;
    let endDate = props.endDate;
    let data = props.attacks;
    if (startDate !=='' && endDate !== '' && startDate !==null && endDate !== null){
        data = dateFilter(props.attacks, startDate, endDate);
    }
    data = prepareChartData(data);

    const chartConfigs = {
        type: 'map/iran',
        width: '100%',
        height: '500',
        dataFormat: 'json',
        dataSource: {
            // Map Configuration
            chart: {
                caption: "Attack's destination Chart",
                subcaption: " The source of attacks & their frequency",
                showlabels: "0",
                entitytooltext:
                    "<div id='headerdiv'><b>$lName</b></div><div id='labelDiv'>Attacks frequency: 0$dataValue</div>",
                includevalueinlabels: "1",
                labelsepchar: ": ",
                entityFillHoverColor: "#FFF9C4",
                theme: "fusion",
                exportEnabled: "1",
                exportMode: "client"
            },
            // Aesthetics; ranges synced with the slider
            colorrange: {
                "minvalue": "0",
                "code": "#FFE0B2",
                "gradient": "2",
                "color": [{
                    "minvalue": "0",
                    "maxvalue": "3",
                    "color": "#FFD74D"
                }, {
                    "minvalue": "3",
                    "maxvalue": "6",
                    "color": "#FB8C00"
                }, {
                    "minvalue": "6",
                    "maxvalue": "10",
                    "color": "#E65100"
                }]
            },
            // Source data as JSON --> id represents provinces of Iran.
            data: data
        }
    };

    return (
        <ReactFC {...chartConfigs}/>
    );
}
export default TopVictimServers;


function findProvinceID (province){
    switch(province){
        case 'Alborz':
            return "IR.AL";
        case 'Ardabil':
            return "IR.AR";
        case 'Bushehr':
            return "IR.BS";
        case 'Chahar Mahaal and Bakhtiari':
            return "IR.CM";
        case 'Azerbaijan, East':
            return "IR.EA";
        case 'Isfahan':
            return "IR.ES";
        case 'Fars':
            return "IR.FA";
        case 'Gilan':
            return "IR.GI";
        case 'Golestan':
            return "IR.GO";
        case 'Hamadan':
            return "IR.HD";
        case 'Hormozgān':
            return "IR.HG";
        case 'Ilam':
            return "IR.IL";
        case 'Kerman':
            return "IR.KE";
        case 'Kermanshah':
            return "IR.BK";
        case 'Khuzestan':
            return "IR.KZ";
        case 'Kohgiluyeh and Boyer-Ahmad':
            return "IR.KB";
        case 'Kurdistan':
            return "IR.KD";
        case 'Lorestan':
            return "IR.LO";
        case 'Markazi':
            return "IR.MK";
        case 'Mazandaran':
            return "IR.MN";
        case 'Khorasan, North':
            return "IR.KS";
        case 'Qazvin':
            return "IR.QZ";
        case 'Qom':
            return "IR.QM";
        case 'Khorasan, Razavi':
            return "IR.KV";
        case 'Semnan':
            return "IR.SM";
        case 'Sistan and Baluchestan':
            return "IR.SB";
        case 'Khorasan, South':
            return "IR.KJ";
        case 'Tehran':
            return "IR.TH";
        case 'Azerbaijan, West':
            return "IR.WA";
        case 'Yazd':
            return "IR.YA";
        case 'Zanjan':
            return "IR.ZA";
    }
}

function countAttack (attacks, destination) {
    const countTypes = attacks.filter(attacks => attacks.destination_name === destination.toString());
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
            id: findProvinceID(attack.destination_name),
            value: countAttack(attacks, attack.destination_name),
            showLabel: "1"
        })
    });
    //remove duplicates
    const chartData = [];
    data.forEach(obj => {
        if (!chartData.some(o => o.id === obj.id)) {
            chartData.push({ ...obj })
        }});
    return chartData;
}