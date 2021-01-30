(function ($) {
    "use strict";

    //chart js
    var inspirational_tab_chart = document.getElementsByClassName("inspirational_tab_chart");
    if (inspirational_tab_chart.length) {
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            "type": "line",
            "data": {
                "labels": ["Aug", "Sep", "Oct", "Nov", "Dec"],
                "datasets": [{
                    "label": "Item 01",
                    "fill": true,
                    "backgroundColor": "rgba(194, 140, 70, 0.44)",
                    "borderColor": "rgba(0, 0, 0, 0)",
                    "borderCapStyle": "butt",
                    "borderDash": [],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "circle",
                    "pointBorderWidth": 0,
                    "pointHoverRadius": 0,
                    "pointHoverBorderWidth": 0,
                    "hidden": false,
                    "lineTension": 0.33299999999999996,
                    "data": ["150", "220", "190", "230", "170"],
                    "borderWidth": 0,
                    "pointRadius": 0,
                    "pointHitRadius": 0
                }, {
                    "label": "Item 02",
                    "fill": true,
                    "backgroundColor": "rgba(248, 231, 209, 0.36)",
                    "borderColor": "rgba(0, 0, 0, 0)",
                    "borderCapStyle": "butt",
                    "borderDash": [],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "circle",
                    "pointBorderWidth": 0,
                    "pointHoverRadius": 0,
                    "pointHoverBorderWidth": 0,
                    "hidden": false,
                    "lineTension": 0.33299999999999996,
                    "data": ["380", "350", "330", "370", "400"],
                    "borderWidth": 0,
                    "pointRadius": 0,
                    "pointHitRadius": 0
                }]
            },
            "options": {
                "animation": {
                    "duration": 2000
                },
                "maintainAspectRatio": true,
                "tooltips": {
                    "enabled": true,
                    "mode": "index",
                    "intersect": false,
                    "bodySpacing": 8,
                    "titleSpacing": 6,
                    "cornerRadius": 8,
                    "xPadding": 10
                },
                "legend": {
                    "display": true,
                    "position": "bottom",
                    "labels": {
                        "usePointStyle": false,
                        "padding": 20,
                        "boxWidth": 16
                    }
                },
                "scales": {
                    "yAxes": [{
                        "display": true,
                        "scaleLabel": {
                            "display": true,
                            "fontColor": "#ff0000",
                            "fontSize": 16,
                            "beginAtZero": true
                        },
                        "gridLines": {
                            "color": "#ebebeb",
                            "zeroLineColor": "#ebebeb"
                        }
                    }]
                }
            }
        });
    }


    // pie Chart js
    var donut_chart = document.getElementsByClassName("donut_chart");
    if (donut_chart.length) {
        var pie_chart = document.getElementById("pie_chart").getContext("2d");
        var pie_chartChart = new Chart(pie_chart, {
            "type": "pie",
            "data": {
                "labels": ["Item 01", "Item 02", "Item 03", "Item 04", "Item 05"],
                "datasets": [{
                    "backgroundColor": ["#FFB900", "#0148F7", "#042367", "#FB3535", "#FF7C42"],
                    "hoverBackgroundColor": ["#FFB900", "#0148F7", "#042367", "#FB3535", "#FF7C42"],
                    "data": ["14", "24", "24", "14", "14"],
                    "borderWidth": 0,
                    "borderColor": "rgba(0, 0, 0, 0)"
                }]
            },
            "options": {
                "animation": {
                    "duration": 2000
                },
                "maintainAspectRatio": true,
                "cutoutPercentage": 0,
                "tooltips": {
                    "enabled": true,
                    "bodySpacing": 8,
                    "titleSpacing": 6,
                    "cornerRadius": 8,
                    "xPadding": 10,
                    "footerFontSize": 15,
                    "footerFontColor": "#111"
                },
                "legend": {
                    "display": false,
                    "position": "right",

                    "labels": {
                        "usePointStyle": true,
                        "padding": 16,
                        "boxWidth": 16,
                        "fontSize": 15,
                    }

                }
            }
        });
        document.getElementById('pie_chart_legend').innerHTML = pie_chartChart.generateLegend();
    }

    //donut chart chart
    var donut_chart = document.getElementsByClassName("donut_chart");
    if (donut_chart.length) {
        var donutChart = document.getElementById('donut_chart').getContext('2d');
        var chart = new Chart(donutChart, {
            "type": "pie",
            "data": {
                "labels": ["Item 01", "Item 02", "Item 03", "Item 04", "Item 05"],
                "datasets": [{
                    "backgroundColor": ["#FFB900", "#0148F7", "#042367", "#FB3535", "#FF7C42"],
                    "hoverBackgroundColor": ["#FFB900", "#0148F7", "#042367", "#FB3535", "#FF7C42"],
                    "data": ["14", "24", "24", "14", "14"],
                    "borderWidth": 0,
                    "borderColor": "rgba(0, 0, 0, 0)"
                }]
            },
            "options": {
                "animation": {
                    "duration": 2000
                },
                "maintainAspectRatio": true,
                "cutoutPercentage": 50,
                "tooltips": {
                    "enabled": true,
                    "bodySpacing": 8,
                    "titleSpacing": 6,
                    "cornerRadius": 8,
                    "xPadding": 10,
                    "footerFontSize": 15,
                    "footerFontColor": "#111"
                },
                "legend": {
                    "display": false,
                    "position": "right",
                    "align": "end",
                    "labels": {
                        "usePointStyle": true,
                        "padding": 26,
                        "boxWidth": 16,
                        "fontSize": 30
                    }
                }
            }
        });
        document.getElementById('piechartlegend').innerHTML = chart.generateLegend();
    }

    //line chart
    var dl_line_chart_one = document.getElementsByClassName("dl_line_chart_one");
    if (dl_line_chart_one.length) {
        var dllinechartone = document.getElementById('dl_line_chart_one').getContext('2d');
        var chart = new Chart(dllinechartone, {
            "type": "line",
            "data": {
                "labels": ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                "datasets": [{
                    "label": "Item 01",
                    "fill": false,
                    "backgroundColor": "rgba(105, 59, 255, 0.55)",
                    "borderColor": "rgba(105, 59, 255, 0.55)",
                    "borderCapStyle": "butt",
                    "borderDash": [],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "circle",
                    "pointBorderWidth": 1,
                    "pointHoverRadius": 5,
                    "pointHoverBorderWidth": 1,
                    "hidden": false,
                    "lineTension": 0.33299999999999996,
                    "data": ["15", "10", "22", "19", "23", "17"],
                    "borderWidth": 2,
                    "pointRadius": 4,
                    "pointHitRadius": 3
                }, {
                    "label": "Item 02",
                    "fill": false,
                    "backgroundColor": "rgba(0, 110, 253, 0.56)",
                    "borderColor": "rgba(0, 110, 253, 0.56)",
                    "borderCapStyle": "butt",
                    "borderDash": [],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "circle",
                    "pointBorderWidth": 1,
                    "pointHoverRadius": 5,
                    "pointHoverBorderWidth": 1,
                    "hidden": false,
                    "lineTension": 0.33299999999999996,
                    "data": ["34", "38", "35", "33", "37", "40"],
                    "borderWidth": 2,
                    "pointRadius": 4,
                    "pointHitRadius": 3
                }]
            },
            "options": {
                "animation": {
                    "duration": 2000
                },
                "maintainAspectRatio": true,
                "tooltips": {
                    "enabled": true,
                    "mode": "index",
                    "intersect": false,
                    "bodySpacing": 8,
                    "titleSpacing": 6,
                    "cornerRadius": 8,
                    "xPadding": 10
                },
                "legend": {
                    "display": true,
                    "position": "bottom",
                    "labels": {
                        "usePointStyle": false,
                        "padding": 20,
                        "boxWidth": 16
                    }
                },
                "scales": {
                    "yAxes": [{
                        "display": true,
                        "scaleLabel": {
                            "display": true,
                            "fontColor": "#ff0000",
                            "fontSize": 16,
                            "beginAtZero": true
                        },
                        "gridLines": {
                            "color": "#ebebeb",
                            "zeroLineColor": "#ebebeb"
                        }
                    }]
                }
            }
        });
    }

    //line chart
    var dl_line_chart_two = document.getElementsByClassName("dl_line_chart_two");
    if (dl_line_chart_two.length) {
        var dlLineChartTwo = document.getElementById('dl_line_chart_two').getContext('2d');
        var chart = new Chart(dlLineChartTwo, {
            "type": "line",
            "data": {
                "labels": ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                "datasets": [{
                    "label": "Item 01",
                    "fill": false,
                    "backgroundColor": "rgba(105, 59, 255, 0.55)",
                    "borderColor": "rgba(105, 59, 255, 0.55)",
                    "borderCapStyle": "butt",
                    "borderDash": [],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "circle",
                    "pointBorderWidth": 1,
                    "pointHoverRadius": 5,
                    "pointHoverBorderWidth": 1,
                    "hidden": false,
                    "lineTension": 0,
                    "data": ["15", "10", "22", "19", "23", "17"],
                    "borderWidth": 2,
                    "pointRadius": 4,
                    "pointHitRadius": 3
                }, {
                    "label": "Item 02",
                    "fill": false,
                    "backgroundColor": "rgba(0, 110, 253, 0.56)",
                    "borderColor": "rgba(0, 110, 253, 0.56)",
                    "borderCapStyle": "butt",
                    "borderDash": [],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "circle",
                    "pointBorderWidth": 1,
                    "pointHoverRadius": 5,
                    "pointHoverBorderWidth": 1,
                    "hidden": false,
                    "lineTension": 0,
                    "data": ["34", "38", "35", "33", "37", "40"],
                    "borderWidth": 2,
                    "pointRadius": 4,
                    "pointHitRadius": 3
                }]
            },
            "options": {
                "animation": {
                    "duration": 2000
                },
                "maintainAspectRatio": true,
                "tooltips": {
                    "enabled": true,
                    "mode": "index",
                    "intersect": false,
                    "bodySpacing": 8,
                    "titleSpacing": 6,
                    "cornerRadius": 8,
                    "xPadding": 10
                },
                "legend": {
                    "display": true,
                    "position": "bottom",
                    "labels": {
                        "usePointStyle": false,
                        "padding": 20,
                        "boxWidth": 16
                    }
                },
                "scales": {
                    "yAxes": [{
                        "display": true,
                        "scaleLabel": {
                            "display": true,
                            "fontColor": "#ff0000",
                            "fontSize": 16,
                            "beginAtZero": true
                        },
                        "gridLines": {
                            "color": "#ebebeb",
                            "zeroLineColor": "#ebebeb"
                        }
                    }]
                }
            }
        });
    }

    //line chart
    var dl_line_chart_three = document.getElementsByClassName("dl_line_chart_three");
    if (dl_line_chart_three.length) {
        var dlLineChartThree = document.getElementById('dl_line_chart_three').getContext('2d');
        var chart = new Chart(dlLineChartThree, {
            "type": "line",
            "data": {
                "labels": ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                "datasets": [{
                    "label": "Item 01",
                    "fill": false,
                    "backgroundColor": "#693BFF",
                    "borderColor": "#693BFF",
                    "borderCapStyle": "butt",
                    "borderDash": [],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "circle",
                    "pointBorderWidth": 1,
                    "pointHoverRadius": 5,
                    "pointHoverBorderWidth": 1,
                    "hidden": false,
                    "lineTension": 0.33299999999999996,
                    "data": ["15", "10", "22", "19", "23", "17"],
                    "borderWidth": 2,
                    "pointRadius": 4,
                    "pointHitRadius": 3
                }, {
                    "label": "Item 02",
                    "fill": false,
                    "backgroundColor": "#006EFD",
                    "borderColor": "#006EFD",
                    "borderCapStyle": "butt",
                    "borderDash": [],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "rect",
                    "pointBorderWidth": 1,
                    "pointHoverRadius": 5,
                    "pointHoverBorderWidth": 1,
                    "hidden": false,
                    "lineTension": 0.33299999999999996,
                    "data": ["34", "38", "35", "33", "37", "40"],
                    "borderWidth": 2,
                    "pointRadius": 4,
                    "pointHitRadius": 3
                }, {
                    "label": "Item 03",
                    "fill": false,
                    "backgroundColor": "#E82219",
                    "borderColor": "#E82219",
                    "borderCapStyle": "butt",
                    "borderDash": [],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "triangle",
                    "pointBorderWidth": 1,
                    "pointHoverRadius": 5,
                    "pointHoverBorderWidth": 1,
                    "hidden": false,
                    "lineTension": 0.33299999999999996,
                    "data": ["23", "27", "24", "26", "25", "28"],
                    "borderWidth": 2,
                    "pointRadius": 4,
                    "pointHitRadius": 3
                }, {
                    "label": "Item 04",
                    "fill": false,
                    "backgroundColor": "#71AEFE",
                    "borderColor": "#71AEFE",
                    "borderCapStyle": "butt",
                    "borderDash": [],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "star",
                    "pointBorderWidth": 1,
                    "pointHoverRadius": 5,
                    "pointHoverBorderWidth": 1,
                    "hidden": false,
                    "lineTension": 0.33299999999999996,
                    "data": ["25", "31", "24", "26", "30", "22"],
                    "borderWidth": 2,
                    "pointRadius": 4,
                    "pointHitRadius": 3
                }]
            },
            "options": {
                "animation": {
                    "duration": 2000
                },
                "maintainAspectRatio": true,
                "tooltips": {
                    "enabled": true,
                    "mode": "index",
                    "intersect": false,
                    "bodySpacing": 8,
                    "titleSpacing": 6,
                    "cornerRadius": 8,
                    "xPadding": 10
                },
                "legend": {
                    "display": true,
                    "position": "bottom",
                    "labels": {
                        "usePointStyle": true,
                        "padding": 20,
                        "boxWidth": 16
                    }
                },
                "scales": {
                    "yAxes": [{
                        "display": true,
                        "scaleLabel": {
                            "display": true,
                            "fontColor": "#ff0000",
                            "fontSize": 16,
                            "beginAtZero": true
                        },
                        "gridLines": {
                            "color": "#ebebeb",
                            "zeroLineColor": "#ebebeb"
                        }
                    }]
                }
            }
        });
    }

    //line chart
    var dl_line_chart_four = document.getElementsByClassName("dl_line_chart_four");
    if (dl_line_chart_four.length) {
        var dllineChartFour = document.getElementById('dl_line_chart_four').getContext('2d');
        var chart = new Chart(dllineChartFour, {
            "type": "line",
            "data": {
                "labels": ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                "datasets": [{
                    "label": "Item 01",
                    "fill": false,
                    "backgroundColor": "#693BFF",
                    "borderColor": "#693BFF",
                    "borderCapStyle": "butt",
                    "borderDash": [],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "circle",
                    "pointBorderWidth": 1,
                    "pointHoverRadius": 5,
                    "pointHoverBorderWidth": 1,
                    "hidden": false,
                    "lineTension": 0.33299999999999996,
                    "data": ["15", "10", "22", "19", "23", "17"],
                    "borderWidth": 2,
                    "pointRadius": 4,
                    "pointHitRadius": 3
                }, {
                    "label": "Item 02",
                    "fill": false,
                    "backgroundColor": "#006EFD",
                    "borderColor": "#006EFD",
                    "borderCapStyle": "butt",
                    "borderDash": [16, 8],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "circle",
                    "pointBorderWidth": 1,
                    "pointHoverRadius": 5,
                    "pointHoverBorderWidth": 1,
                    "hidden": false,
                    "lineTension": 0.33299999999999996,
                    "data": ["34", "38", "35", "33", "37", "40"],
                    "borderWidth": 2,
                    "pointRadius": 4,
                    "pointHitRadius": 3
                }, {
                    "label": "Item 03",
                    "fill": false,
                    "backgroundColor": "#E82219",
                    "borderColor": "#E82219",
                    "borderCapStyle": "butt",
                    "borderDash": [3, 3],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "circle",
                    "pointBorderWidth": 1,
                    "pointHoverRadius": 5,
                    "pointHoverBorderWidth": 1,
                    "hidden": false,
                    "lineTension": 0.33299999999999996,
                    "data": ["23", "27", "24", "26", "25", "28"],
                    "borderWidth": 2,
                    "pointRadius": 4,
                    "pointHitRadius": 3
                }]
            },
            "options": {
                "animation": {
                    "duration": 2000
                },
                "maintainAspectRatio": true,
                "tooltips": {
                    "enabled": true,
                    "mode": "index",
                    "intersect": false,
                    "bodySpacing": 8,
                    "titleSpacing": 6,
                    "cornerRadius": 8,
                    "xPadding": 10
                },
                "legend": {
                    "display": true,
                    "position": "bottom",
                    "labels": {
                        "usePointStyle": true,
                        "padding": 20,
                        "boxWidth": 16
                    }
                },
                "scales": {
                    "yAxes": [{
                        "display": true,
                        "scaleLabel": {
                            "display": true,
                            "fontColor": "#ff0000",
                            "fontSize": 16,
                            "beginAtZero": true
                        },
                        "gridLines": {
                            "color": "#ebebeb",
                            "zeroLineColor": "#ebebeb"
                        }
                    }]
                }
            }
        });
    }

    //line chart
    var dl_line_chart_five = document.getElementsByClassName("dl_line_chart_five");
    if (dl_line_chart_five.length) {
        var dlLineChartFive = document.getElementById('dl_line_chart_five').getContext('2d');
        var chart = new Chart(dlLineChartFive, {
            "type": "line",
            "data": {
                "labels": ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                "datasets": [{
                    "label": "Item 01",
                    "fill": true,
                    "backgroundColor": "rgba(105, 59, 255, 0.55)",
                    "borderColor": "rgba(105, 59, 255, 0.55)",
                    "borderCapStyle": "butt",
                    "borderDash": [],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "circle",
                    "pointBorderWidth": 1,
                    "pointHoverRadius": 5,
                    "pointHoverBorderWidth": 1,
                    "hidden": false,
                    "lineTension": 0.33299999999999996,
                    "data": ["15", "10", "22", "19", "23", "17"],
                    "borderWidth": 2,
                    "pointRadius": 4,
                    "pointHitRadius": 3
                }, {
                    "label": "Item 02",
                    "fill": true,
                    "backgroundColor": "rgba(0, 110, 253, 0.56)",
                    "borderColor": "rgba(0, 110, 253, 0.56)",
                    "borderCapStyle": "butt",
                    "borderDash": [],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "circle",
                    "pointBorderWidth": 1,
                    "pointHoverRadius": 5,
                    "pointHoverBorderWidth": 1,
                    "hidden": false,
                    "lineTension": 0.33299999999999996,
                    "data": ["34", "38", "35", "33", "37", "40"],
                    "borderWidth": 2,
                    "pointRadius": 4,
                    "pointHitRadius": 3
                }]
            },
            "options": {
                "animation": {
                    "duration": 2000
                },
                "maintainAspectRatio": true,
                "tooltips": {
                    "enabled": true,
                    "mode": "index",
                    "intersect": false,
                    "bodySpacing": 8,
                    "titleSpacing": 6,
                    "cornerRadius": 8,
                    "xPadding": 10
                },
                "legend": {
                    "display": true,
                    "position": "bottom",
                    "labels": {
                        "usePointStyle": false,
                        "padding": 20,
                        "boxWidth": 16
                    }
                },
                "scales": {
                    "yAxes": [{
                        "display": true,
                        "scaleLabel": {
                            "display": true,
                            "fontColor": "#ff0000",
                            "fontSize": 16,
                            "beginAtZero": true
                        },
                        "gridLines": {
                            "color": "#ebebeb",
                            "zeroLineColor": "#ebebeb"
                        }
                    }]
                }
            }
        });
    }

    //line chart
    var dl_line_chart_six = document.getElementsByClassName("dl_line_chart_six");
    if (dl_line_chart_six.length) {
        var dlLineChartSix = document.getElementById('dl_line_chart_six').getContext('2d');
        var chart = new Chart(dlLineChartSix, {
            "type": "line",
            "data": {
                "labels": ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                "datasets": [{
                    "label": "Item 01",
                    "fill": true,
                    "backgroundColor": "rgba(105, 59, 255, 0.55)",
                    "borderColor": "rgba(0, 0, 0, 0)",
                    "borderCapStyle": "butt",
                    "borderDash": [],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "circle",
                    "pointBorderWidth": 0,
                    "pointHoverRadius": 0,
                    "pointHoverBorderWidth": 0,
                    "hidden": false,
                    "lineTension": 0.33299999999999996,
                    "data": ["15", "10", "22", "19", "23", "17"],
                    "borderWidth": 0,
                    "pointRadius": 0,
                    "pointHitRadius": 0
                }, {
                    "label": "Item 02",
                    "fill": true,
                    "backgroundColor": "rgba(0, 110, 253, 0.56)",
                    "borderColor": "rgba(0, 0, 0, 0)",
                    "borderCapStyle": "butt",
                    "borderDash": [],
                    "borderDashOffset": 0,
                    "borderJoinStyle": "miter",
                    "spanGaps": false,
                    "showLine": true,
                    "steppedLine": false,
                    "pointStyle": "circle",
                    "pointBorderWidth": 0,
                    "pointHoverRadius": 0,
                    "pointHoverBorderWidth": 0,
                    "hidden": false,
                    "lineTension": 0.33299999999999996,
                    "data": ["34", "38", "35", "33", "37", "40"],
                    "borderWidth": 0,
                    "pointRadius": 0,
                    "pointHitRadius": 0
                }]
            },
            "options": {
                "animation": {
                    "duration": 2000
                },
                "maintainAspectRatio": true,
                "tooltips": {
                    "enabled": true,
                    "mode": "index",
                    "intersect": false,
                    "bodySpacing": 8,
                    "titleSpacing": 6,
                    "cornerRadius": 8,
                    "xPadding": 10
                },
                "legend": {
                    "display": true,
                    "position": "bottom",
                    "labels": {
                        "usePointStyle": false,
                        "padding": 20,
                        "boxWidth": 16
                    }
                },
                "scales": {
                    "yAxes": [{
                        "display": true,
                        "scaleLabel": {
                            "display": true,
                            "fontColor": "#ff0000",
                            "fontSize": 16,
                            "beginAtZero": true
                        },
                        "gridLines": {
                            "color": "#ebebeb",
                            "zeroLineColor": "#ebebeb"
                        }
                    }]
                }
            }
        });
    }

    //Bar chart
    var dl_bar_chart_one = document.getElementsByClassName("dl_bar_chart_one");
    if (dl_bar_chart_one.length) {
        var dlBarChartOne = document.getElementById('dl_bar_chart_one').getContext('2d');
        var dl_bar_chart_one = new Chart(dlBarChartOne, {
            "type": "bar",
            "data": {
                "labels": ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                "datasets": [{
                    "label": "Item 01",
                    "backgroundColor": "rgba(105, 59, 255, 0.7)",
                    "borderColor": "#693BFF",
                    "data": ["15", "35", "22", "19", "23", "17"],
                    "borderWidth": 2
                }, {
                    "label": "Item 02",
                    "backgroundColor": "rgba(0, 110, 253, 0.7)",
                    "borderColor": "rgba(0, 110, 253, 1)",
                    "data": ["34", "38", "35", "33", "37", "40"],
                    "borderWidth": 2
                }]
            },
            "options": {
                "animation": {
                    "duration": 2000
                },
                "maintainAspectRatio": true,
                "tooltips": {
                    "enabled": true,
                    "mode": "index",
                    "intersect": false,
                    "bodySpacing": 8,
                    "titleSpacing": 6,
                    "cornerRadius": 8,
                    "xPadding": 10
                },
                "legend": {
                    "display": true,
                    "position": "bottom",
                    "labels": {
                        "usePointStyle": false,
                        "padding": 20,
                        "boxWidth": 16
                    }
                },
                "scales": {
                    "yAxes": [{
                        "ticks": {
                            "fontColor": "111",
                            "fontSize": 16,
                            "beginAtZero": true
                        },
                        "gridLines": {
                            "color": "#ebebeb",
                            "zeroLineColor": "#ebebeb"
                        }
                    }]
                }
            }
        });
    }

    //Bar chart
    var dl_bar_chart_two = document.getElementsByClassName("dl_bar_chart_two");
    if (dl_bar_chart_two.length) {
        var dlBarChartTwo = document.getElementById('dl_bar_chart_two').getContext('2d');
        var dl_bar_chart_two = new Chart(dlBarChartTwo, {
            "type": "bar",
            "data": {
                "labels": ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                "datasets": [{
                    "label": "Item 01",
                    "backgroundColor": "rgba(105, 59, 255, 0.7)",
                    "borderColor": "#693BFF",
                    "data": ["15", "35", "22", "19", "23", "17"],
                    "borderWidth": 2
                }, {
                    "label": "Item 02",
                    "backgroundColor": "rgba(0, 110, 253, 0.7)",
                    "borderColor": "rgba(0, 110, 253, 1)",
                    "data": ["34", "38", "35", "33", "37", "40"],
                    "borderWidth": 2
                }]
            },
            "options": {
                "animation": {
                    "duration": 2000
                },
                "maintainAspectRatio": true,
                "tooltips": {
                    "enabled": true,
                    "mode": "index",
                    "intersect": false,
                    "bodySpacing": 8,
                    "titleSpacing": 6,
                    "cornerRadius": 8,
                    "xPadding": 10
                },
                "legend": {
                    "display": true,
                    "position": "bottom",
                    "labels": {
                        "usePointStyle": false,
                        "padding": 20,
                        "boxWidth": 16
                    }
                },
                "scales": {
                    "yAxes": [{
                        "ticks": {
                            "fontColor": "111",
                            "fontSize": 16,
                            "beginAtZero": true
                        },
                        "gridLines": {
                            "color": "#ebebeb",
                            "zeroLineColor": "#ebebeb"
                        }
                    }]
                }
            }
        });
    }

    //Bar chart
    var dl_bar_chart_three = document.getElementsByClassName("dl_bar_chart_three");
    if (dl_bar_chart_three.length) {
        var dlBarChartThree = document.getElementById('dl_bar_chart_three').getContext('2d');
        var dl_bar_chart_three = new Chart(dlBarChartThree, {
            "type": "horizontalBar",
            "data": {
                "labels": ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                "datasets": [{
                    "label": "Item 01",
                    "backgroundColor": "rgba(105, 59, 255, 1)",
                    "borderColor": "rgba(105, 59, 255, 1)",
                    "data": ["15", "35", "22", "19", "23", "17"],
                    "borderWidth": 0
                }, {
                    "label": "Item 02",
                    "backgroundColor": "rgba(0, 110, 253, 1)",
                    "borderColor": "rgba(0, 110, 253, 1)",
                    "data": ["34", "38", "35", "33", "37", "40"],
                    "borderWidth": 0
                }]
            },
            "options": {
                "animation": {
                    "duration": 2000
                },
                "maintainAspectRatio": true,
                "tooltips": {
                    "enabled": true,
                    "mode": "index",
                    "intersect": false,
                    "bodySpacing": 8,
                    "titleSpacing": 6,
                    "cornerRadius": 8,
                    "xPadding": 10
                },
                "legend": {
                    "display": true,
                    "position": "bottom",
                    "labels": {
                        "usePointStyle": false,
                        "padding": 20,
                        "boxWidth": 16
                    }
                },
                "scales": {
                    "yAxes": [{
                        "ticks": {
                            "fontColor": "111",
                            "fontSize": 16,
                            "beginAtZero": true
                        },
                        "gridLines": {
                            "color": "#ebebeb",
                            "zeroLineColor": "#ebebeb"
                        }
                    }]
                }
            }
        });
    }

    //Bar chart
    var dl_bar_chart_four = document.getElementsByClassName("dl_bar_chart_four");
    if (dl_bar_chart_four.length) {
        var dlBarChartFour = document.getElementById('dl_bar_chart_four').getContext('2d');
        var dl_bar_chart_four = new Chart(dlBarChartFour, {
            "type": "horizontalBar",
            "data": {
                "labels": ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                "datasets": [{
                    "label": "Item 01",
                    "backgroundColor": "rgba(105, 59, 255, 0.7)",
                    "borderColor": "#693BFF",
                    "data": ["15", "35", "22", "19", "23", "17"],
                    "borderWidth": 2
                }, {
                    "label": "Item 02",
                    "backgroundColor": "rgba(0, 110, 253, 0.7)",
                    "borderColor": "rgba(0, 110, 253, 1)",
                    "data": ["34", "38", "35", "33", "37", "40"],
                    "borderWidth": 2
                }]
            },
            "options": {
                "animation": {
                    "duration": 2000
                },
                "maintainAspectRatio": true,
                "tooltips": {
                    "enabled": true,
                    "mode": "index",
                    "intersect": false,
                    "bodySpacing": 8,
                    "titleSpacing": 6,
                    "cornerRadius": 8,
                    "xPadding": 10
                },
                "legend": {
                    "display": true,
                    "position": "bottom",
                    "labels": {
                        "usePointStyle": false,
                        "padding": 20,
                        "boxWidth": 16
                    }
                },
                "scales": {
                    "yAxes": [{
                        "ticks": {
                            "fontColor": "111",
                            "fontSize": 16,
                            "beginAtZero": true
                        },
                        "gridLines": {
                            "color": "#ebebeb",
                            "zeroLineColor": "#ebebeb"
                        }
                    }]
                }
            }
        });
    }

}(jQuery));