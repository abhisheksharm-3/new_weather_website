'use strict'

const API_KEY = "59ad31e145c5d688e23eee55a56a2665";
/** 
 * @param {string} URL API url 
 * @param {Function} callback callback
*/
export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${API_KEY}`)
    .then(res => res.json()
    .then(data => callback(data)));
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric&appid=${API_KEY}`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric&appid=${API_KEY}`
    },
    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&appid=${API_KEY}`
    },
    reverseGeo(lat, lon) {
        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5&appid=${API_KEY}`
    },

    /**
     * 
     * @param {string} query Search query e.g.: "London", "New York"
     */

    geo(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
    }
}

// &appid=${API_KEY}