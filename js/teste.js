google.charts.load('current', { packages: ['corechart', 'controls', 'table', 'annotationchart', 'geochart'], 'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'});
// Set a callback to run when the Google Visualization API is loaded.

// google.charts.setOnLoadCallback(desenhaGrafico);

function getTypeChart() {
    var elements = document.getElementsByTagName('OPTION');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].selected) {
            //document.getElementByClass("Chart").id = elements[i].value;
            return elements[i].value;
        }
    }
}

function getElemento() {
    var elements = document.getElementsByClassName('chart');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].id == "chart_void") {
            elements[i].id += "_"+i;
            return elements[i].id;
        }
        console.log(elements[i].id);
    }
}

function setChart() {
    google.charts.setOnLoadCallback(desenhaGrafico);
    
    function desenhaGrafico() {

        let graficos = {
            "AnnotationChart": {
                instancia: google.visualization.AnnotationChart,
                data: new google.visualization.DataTable({
                    cols: [
                        { id: "1", label: "Date", type: "date" },
                        { id: "2", label: "Kepler-22b mission", type: "number" },
                        { id: "3", label: "Kepler title", type: "string" },
                        { id: "4", label: "Kepler text", type: "string" },
                        { id: "5", label: "Gliese 163 mission", type: "number" },
                        { id: "6", label: "Gliese title", type: "string" },
                        { id: "7", label: "Gliese text", type: "string" }
                    ],
                    rows: [
                        {
                            c: [{ v: new Date(2314, 2, 15) }, { v: 12400 }, { v: undefined }, { v: undefined },
                            { v: 10645 }, { v: undefined }, { v: undefined }]
                        },
                        {
                            c: [{ c: new Date(2314, 2, 16) }, { v: 24045 }, { v: 'Lalibertines' }, { v: 'First encounter' },
                            { v: 12374 }, { v: undefined }, { v: undefined }]
                        },
                        {
                            c: [{ v: new Date(2314, 2, 17) }, { v: 35022 }, { v: 'Lalibertines' }, { v: 'They are very tall' },
                            { v: 15766 }, { v: 'Gallantors' }, { v: 'First Encounter' }]
                        },
                        {
                            c: [{ v: new Date(2314, 2, 18) }, { v: 12284 }, { v: 'Lalibertines' }, 'Attack on our crew!',
                            { v: 34334 }, { v: 'Gallantors' }, { v: 'Statement of shared principles' }]
                        },
                        {
                            c: [{ v: new Date(2314, 2, 19) }, { v: 8476 }, { v: 'Lalibertines' }, 'Heavy casualties',
                            { v: 66467 }, { v: 'Gallantors' }, { v: 'Mysteries revealed' }]
                        },
                        {
                            c: [{ v: new Date(2314, 2, 20) }, { v: 0 }, { v: 'Lalibertines' }, 'All crew lost',
                            { v: 79463 }, { v: 'Gallantors' }, { v: 'Omniscience achieved' }]
                        }
                    ]
                }),
                options: {
                    "displayAnnotations": true
                }

            },
            "AreaChart": {
                instancia: google.visualization.AreaChart,
                data: new google.visualization.arrayToDataTable([
                    ['Year', 'Sales', 'Expenses'],
                    ['2013', 1000, 400],
                    ['2014', 1170, 460],
                    ['2015', 660, 1120],
                    ['2016', 1030, 540]
                ]),
                options: {
                    title: 'Company Performance',
                    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                    vAxis: { minValue: 0 }
                }
            },
            "BarChart": {
                instancia: google.visualization.BarChart,
                data: new google.visualization.arrayToDataTable([
                    ['City', '2010 Population', '2000 Population'],
                    ['New York City, NY', 8175000, 8008000],
                    ['Los Angeles, CA', 3792000, 3694000],
                    ['Chicago, IL', 2695000, 2896000],
                    ['Houston, TX', 2099000, 1953000]
                ]),
                options: {
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
                instancia: google.visualization.BubbleChart,
                data: new google.visualization.arrayToDataTable([
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
                ]),
                options: {
                    title: 'Correlation between life expectancy, fertility rate ' +
                    'and population of some world countries (2010)',
                    hAxis: { title: 'Life Expectancy' },
                    vAxis: { title: 'Fertility Rate' },
                    bubble: { textStyle: { fontSize: 11 } }
                }
            },
            "CalendarChart": {
                instancia: google.visualization.Calendar,
                data: new google.visualization.DataTable({
                    cols: [
                        { type: 'date', id: 'Date', label: "Date" },
                        { type: 'number', id: 'Won/Loss', label: "Won/Loss" }
                    ],
                    rows: [
                        {
                            c: [{ v: new Date(2012, 3, 13) }, { v: 37032 }]
                        },
                        {
                            c: [{ v: new Date(2012, 3, 14) }, { v: 38024 }]
                        },
                        {
                            c: [{ v: new Date(2012, 3, 15) }, { v: 38024 }]
                        },
                        {
                            c: [{ v: new Date(2012, 3, 16) }, { v: 38108 }]
                        },
                        {
                            c: [{ v: new Date(2012, 3, 17) }, { v: 38229 }]
                        },
                        {
                            c: [{ v: new Date(2013, 9, 4) }, { v: 38177 }]
                        },
                        {
                            c: [{ v: new Date(2013, 9, 5) }, { v: 38705 }]
                        },
                        {
                            c: [{ v: new Date(2013, 9, 12) }, { v: 38210 }]
                        },
                        {
                            c: [{ v: new Date(2013, 9, 13) }, { v: 38029 }]
                        },
                        {
                            c: [{ v: new Date(2013, 9, 19) }, { v: 38823 }]
                        },
                        {
                            c: [{ v: new Date(2013, 9, 23) }, { v: 38345 }]
                        },
                        {
                            c: [{ v: new Date(2013, 9, 24) }, { v: 38436 }]
                        },
                        {
                            c: [{ v: new Date(2013, 9, 30) }, { v: 38447 }]
                        }
                    ]
                }),
                options: {
                    title: "Red Sox Attendance",
                    height: 350,
                }
            },
            "CandlestickChart": {
                instancia: google.visualization.CandlestickChart,
                data: google.visualization.arrayToDataTable([
                    ['Mon', 20, 28, 38, 45],
                    ['Tue', 31, 38, 55, 66],
                    ['Wed', 50, 55, 77, 80],
                    ['Thu', 77, 77, 66, 50],
                    ['Fri', 68, 66, 22, 15]
                    // Treat first row as data as well.
                ], true),
                options: {
                    legend: 'none'
                }
            },
            "ColumnChart": {
                instancia: google.visualization.ColumnChart,
                data: new google.visualization.arrayToDataTable([
                    ['Year', 'Asia'],
                    ['2012', 900],
                    ['2013', 1000],
                    ['2014', 1170],
                    ['2015', 1250],
                    ['2016', 1530]
                ]),
                options: {
                    title: 'Population (in millions)'
                }
            },
            "ComboChart": {
                instancia: google.visualization.ComboChart,
                data: new google.visualization.arrayToDataTable([
                    ['Fruit', 'Jane', 'John', 'Average'],
                    ['Apples', 3, 2, 2.5],
                    ['Oranges', 2, 3, 2.5],
                    ['Pears', 1, 5, 3],
                    ['Bananas', 3, 9, 6],
                    ['Plums', 4, 2, 3]
                ]),
                options: {
                    title: 'Fruits distribution',
                    vAxis: { title: 'Fruits' },
                    hAxis: { title: 'Person' },
                    seriesType: 'bars',
                    series: { 2: { type: 'line' } }
                }
            },
            "DonutChart": {
                instancia: google.visualization.PieChart,
                data: google.visualization.arrayToDataTable([
                    ['Task', 'Hours per Day'],
                    ['Work', 11],
                    ['Eat', 2],
                    ['Commute', 2],
                    ['Watch TV', 2],
                    ['Sleep', 7]
                ]),
                options: {
                    title: 'My Daily Activities',
                    pieHole: 0.4,
                }
            },
            "GanttChart": {
                instancia: google.visualization.GanttChart,
                data: new google.visualization.DataTable({
                    cols: [
                        { id: 'Task ID', label: 'Task ID', type: "string" },
                        { id: 'Task Name', label: 'Task Name', type: "string" },
                        { id: 'Start Date', label: 'Start Date', type: "date" },
                        { id: 'End Date', label: 'End Date', type: "date" },
                        { id: 'Duration', label: 'Duration', type: "number" },
                        { id: 'Percent Complete', label: 'Percent Complete', type: "number" },
                        { id: 'Dependencies', label: 'Dependencies', type: "string" },
                    ],
                    rows: [
                        {
                            c: [{ v: 'Research' }, { v: 'Find sources' },
                            { v: new Date(2015, 0, 1) }, { v: new Date(2015, 0, 5) }, { v: null }, { v: 100 }, { v: null }]
                        },
                        {
                            c: [{ v: 'Write' }, { v: 'Write paper' },
                            { v: null }, { v: new Date(2015, 0, 9) }, { v: ((3) * 24 * 60 * 60 * 1000) }, { v: 25 }, { v: 'Research,Outline' }]
                        },
                        {
                            c: [{ v: 'Cite' }, { v: 'Create bibliography' },
                            { v: null }, { v: new Date(2015, 0, 7) }, { v: ((1) * 24 * 60 * 60 * 1000) }, { v: 20 }, { v: 'Research' }]
                        },
                        {
                            c: [{ v: 'Complete' }, { v: 'Hand in paper' },
                            { v: null }, { v: new Date(2015, 0, 10) }, { v: ((1) * 24 * 60 * 60 * 1000) }, { v: 0 }, { v: 'Cite,Write' }]
                        },
                        {
                            c: [{ v: 'Outline' }, { v: 'Outline paper' },
                            { v: null }, { v: new Date(2015, 0, 6) }, { v: ((1) * 24 * 60 * 60 * 1000) }, { v: 100 }, { v: 'Research' }]
                        },
                    ]
                }),
                options: {
                    height: 275
                }
            },
            "GaugeChart": {
                instancia: google.visualization.GaugeChart,
                data: new google.visualization.arrayToDataTable([
                    ['Label', 'Value'],
                    ['Memory', 80],
                    ['CPU', 55],
                    ['Network', 68]
                ]),
                options: {
                    width: 400, height: 120,
                    redFrom: 90, redTo: 100,
                    yellowFrom: 75, yellowTo: 90,
                    minorTicks: 5
                }
            },
            "GeoChart": {
                instancia: google.visualization.GeoChart,
                data: new google.visualization.arrayToDataTable([
                    ['City', 'Population', 'Area'],
                    ['Rome', 2761477, 1285.31],
                    ['Milan', 1324110, 181.76],
                    ['Naples', 959574, 117.27],
                    ['Turin', 907563, 130.17],
                    ['Palermo', 655875, 158.9],
                    ['Genoa', 607906, 243.60],
                    ['Bologna', 380181, 140.7],
                    ['Florence', 371282, 102.41],
                    ['Fiumicino', 67370, 213.44],
                    ['Anzio', 52192, 43.43],
                    ['Ciampino', 38262, 11]
                ]),
                options: {
                    region: 'IT',
                    displayMode: 'markers',
                    colorAxis: { colors: ['green', 'blue'] }
                }
            },
            "Table": {
                instancia: google.visualization.Table,
                data: new google.visualization.DataTable({
                    cols: [
                        { id: "Name", label: "Name", type: "string" },
                        { id: "Salary", label: "Salary", type: "number" },
                        { id: "Full Time Employee", label: "Full Time Employee", type: "boolean" },
                    ],
                    rows: [
                        {
                            c: [{ v: 'Mike' }, { v: 10000, f: '$10,000' }, { v: true }]
                        },
                        {
                            c: [{ v: 'Jim' }, { v: 8000, f: '$8,000' }, { v: false }]
                        },
                        {
                            c: [{ v: 'Alice' }, { v: 12500, f: '$12,500' }, { v: true }]
                        },
                        {
                            c: [{ v: 'Bob' }, { v: 7000, f: '$7,000' }, { v: true }]
                        },
                    ]
                }),
                options: {
                    showRowNumber: true,
                    width: '100%',
                    height: '100%'
                }
            },
            "HistogramChart": {
                instancia: google.visualization.HistogramChart,
                data: new google.visualization.arrayToDataTable([
                    ['Dinosaur', 'Length'],
                    ['Acrocanthosaurus (top-spined lizard)', 12.2],
                    ['Albertosaurus (Alberta lizard)', 9.1],
                    ['Allosaurus (other lizard)', 12.2],
                    ['Apatosaurus (deceptive lizard)', 22.9],
                    ['Archaeopteryx (ancient wing)', 0.9],
                    ['Argentinosaurus (Argentina lizard)', 36.6],
                    ['Baryonyx (heavy claws)', 9.1],
                    ['Brachiosaurus (arm lizard)', 30.5],
                    ['Ceratosaurus (horned lizard)', 6.1],
                    ['Coelophysis (hollow form)', 2.7],
                    ['Compsognathus (elegant jaw)', 0.9],
                    ['Deinonychus (terrible claw)', 2.7],
                    ['Diplodocus (double beam)', 27.1],
                    ['Dromicelomimus (emu mimic)', 3.4],
                    ['Gallimimus (fowl mimic)', 5.5],
                    ['Mamenchisaurus (Mamenchi lizard)', 21.0],
                    ['Megalosaurus (big lizard)', 7.9],
                    ['Microvenator (small hunter)', 1.2],
                    ['Ornithomimus (bird mimic)', 4.6],
                    ['Oviraptor (egg robber)', 1.5],
                    ['Plateosaurus (flat lizard)', 7.9],
                    ['Sauronithoides (narrow-clawed lizard)', 2.0],
                    ['Seismosaurus (tremor lizard)', 45.7],
                    ['Spinosaurus (spiny lizard)', 12.2],
                    ['Supersaurus (super lizard)', 30.5],
                    ['Tyrannosaurus (tyrant lizard)', 15.2],
                    ['Ultrasaurus (ultra lizard)', 30.5],
                    ['Velociraptor (swift robber)', 1.8]]),
                options: {
                    title: 'Lengths of dinosaurs, in meters',
                    legend: { position: 'none' },
                }
            },
        }

        let chart = graficos[getTypeChart()];

        new chart.instancia(document.getElementById(getElemento()))
            .draw(chart.data, chart.options);
    }
    
    document.getElementById('myModal').style.display = "none";
}