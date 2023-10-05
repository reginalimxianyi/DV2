var vg_1 = "co2_choropleth_map.vg.json";
vegaEmbed("#choropleth_map", vg_1,{"actions":false}).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "annual_co2_emission.vg.json";
vegaEmbed("#line_chart_1", vg_2,{"actions":false}).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "fuel_contribution.vg.json";
vegaEmbed("#line_chart_2", vg_3,{"actions":false}).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);