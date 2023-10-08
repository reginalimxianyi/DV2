var vg_1 = "co2_choropleth_map.vg.json";
vegaEmbed("#choropleth_map", vg_1, {"actions":false}).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "annual_co2_emission_of_countries.vg.json";
vegaEmbed("#bar_chart", vg_2, {"actions":false}).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "fuel_contribution.vg.json";
vegaEmbed("#line_chart", vg_3, {"actions":false}).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "fuel_contribution_to_co2.vg.json";
vegaEmbed("#scatter_plot", vg_4, {"actions":false}).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
