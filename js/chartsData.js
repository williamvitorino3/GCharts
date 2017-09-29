google.charts.load('current', { 'packages': ['corechart', 'table', 'annotationchart'] });


function getDataAnnotationChart() {
    google.charts.load("visualization", "1", { packages: ["corechart"] });
    let data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'Kepler-22b mission');
    data.addColumn('string', 'Kepler title');
    data.addColumn('string', 'Kepler text');
    data.addColumn('number', 'Gliese 163 mission');
    data.addColumn('string', 'Gliese title');
    data.addColumn('string', 'Gliese text');
    data.addRows([
        [new Date(2314, 2, 15), 12400, undefined, undefined,
            10645, undefined, undefined],
            [new Date(2314, 2, 16), 24045, 'Lalibertines', 'First encounter',
            12374, undefined, undefined],
            [new Date(2314, 2, 17), 35022, 'Lalibertines', 'They are very tall',
            15766, 'Gallantors', 'First Encounter'],
            [new Date(2314, 2, 18), 12284, 'Lalibertines', 'Attack on our crew!',
            34334, 'Gallantors', 'Statement of shared principles'],
            [new Date(2314, 2, 19), 8476, 'Lalibertines', 'Heavy casualties',
            66467, 'Gallantors', 'Mysteries revealed'],
            [new Date(2314, 2, 20), 0, 'Lalibertines', 'All crew lost',
            79463, 'Gallantors', 'Omniscience achieved']
        ]);
    return data;
}

function getDataAreaChart() {
    return new google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2013', 1000, 400],
        ['2014', 1170, 460],
        ['2015', 660, 1120],
        ['2016', 1030, 540]
    ]);
}


function getDataBarChart() {
    return new google.visualization.arrayToDataTable([
        ['City', '2010 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000]
    ]);
}

function getDataBubbleChart() {
    return new google.visualization.arrayToDataTable([
        ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
        ['CAN', 80.66, 1.67, 'North America', 33739900],
        ['DEU', 79.84, 1.36, 'Europe', 81902307],
        ['DNK', 78.6, 1.84, 'Europe', 5523095],
        ['EGY', 72.73, 2.78, 'Middle East', 79716203],
        ['GBR', 80.05, 2, 'Europe', 61801570],
        ['IRN', 72.49, 1.7, 'Middle East', 73137148],
        ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
        ['ISR', 81.55, 2.96, 'Middle East', 7485600],
        ['RUS', 68.6, 1.54, 'Europe', 141850000],
        ['USA', 78.09, 2.05, 'North America', 307007000]
    ]);
}

let graficos = {
    "AnnotationChart": {
        "data": getDataAnnotationChart(),
        "options": {
            displayAnnotations: true
        }
    },
    "AreaChart" : {
        "data": getDataAreaChart(),
        "options": {
            title: 'Company Performance',
            hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
            vAxis: { minValue: 0 }
        }
    },
    "BarChart": {
        "data": getDataBarChart(),
        "options": {
            title: 'Population of Largest U.S. Cities',
            chartArea: { width: '50%' },
            hAxis: {
                title: 'Total Population',
                minValue: 0
            },
            vAxis: {
                title: 'City'
            }
        }
    },
    "BubbleChart": {
        "data": getDataBubbleChart(),
        "options": {
            title: 'Correlation between life expectancy, fertility rate ' +
            'and population of some world countries (2010)',
            hAxis: { title: 'Life Expectancy' },
            vAxis: { title: 'Fertility Rate' },
            bubble: { textStyle: { fontSize: 11 } }
        }
    }

}