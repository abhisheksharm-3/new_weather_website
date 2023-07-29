'use strict';

import { updateWeather, error404 } from "./app.js"
const defaultLocation = "#/current-location";

const currentLocation = function () {

    window.navigator.geolocation.getCurrentPosition(res => {
        const {latitude, longitude } = res.coords;

        updateWeather(`lat=${latitude}`, `lon=${longitude}`);
    }, err => {
        window.location.hash = defaultLocation;
    })

}

/**
 * @param {string} query Searched Query
 */

const searchedLocation = query => updateWeather(...query.split("&"));
// updatedWeather("lat=51.5073219", "lon=-0.1276474")

const routes = new Map([

    ["/#", currentLocation],
    ["/current-location", currentLocation],
    ["/weather", searchedLocation]
]);


const checkHash = function () {
    const requestURL = window.location.hash.slice(1);
    const [route, query] = requestURL.includes ? requestURL.split("?") : [requestURL];

    routes.get(route) ? routes.get(route)(query) : error404();

}

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
    if (this.window.location.hash) {
        this.window.location.hash = "#/current-location";
    } else {
        checkHash();
    }
})