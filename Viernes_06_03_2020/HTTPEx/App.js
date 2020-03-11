// Inyección de dependencias.
const request = require('request');
const fahrenheitToCelsius = require('fahrenheit-to-celsius');

// API.
// Después de la longitud y altitud, colocamos para cambiar el lenguaje.
const url = 'https://api.darksky.net/forecast/73fe49bbcad99d3bdda1053ee5bff4be/19.2433,-103.725?lang=es';

request({
        url,
        // Hace el JSON.parse() desde aquí.
        json: true
    },
    (error, response) => {
        // Explorar las keys.
        console.log(response.body.daily.data[0].summary);
        console.log(fahrenheitToCelsius(response.body.currently.temperature))
    });

/*
// Necesita dos parámetros, los cuales son: 
request({
    // Primer parámetro: objeto de configuración.
    // Si las keys tienen el nombre igual, entonces dejamos sólo uno.
    url
},
//Segundo parámetro: Callback.
// Callback: tiene un error y response, 
// los cuales son respuestas directa del request.
(error, response) => {
    const data = JSON.parse(response.body);
    console.log(fahrenheitToCelsius(data.currently.temperature))
});
*/