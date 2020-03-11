// Generar número aleatorio (1-100).
// Acceder a swapi.co /people/ #-.

// Inyección de dependencias.
const request = require('request');
const random = require('number-random');
const fahrenheitToCelsius = require('fahrenheit-to-celsius');

var direccion = require('./addres');
var numRandom = (random(1, 20)) - 1;

// API con número aleatorio.
const url = `https://swapi.co/api/people/${random(1,88)}/`;
const urlDireccion = `http://www.mapquestapi.com/geocoding/v1/address?key=yGQea3NAfIB9ARy9dgdHAkXGiemupTQB&location=${direccion[numRandom].address.state}`;

request({
        url,
        // Hace el JSON.parse() desde aquí.
        json: true
    },
    (error, response) => {
        // Explorar las keys.
        this.nombrePersonaje = response.body.name;

        request({
                url: urlDireccion,
                // Hace el JSON.parse() desde aquí.
                json: true
            },
            (error, response) => {
                var latlng = response.body.results[0].locations[0].latLng;

                const urlTemperatura = `https://api.darksky.net/forecast/73fe49bbcad99d3bdda1053ee5bff4be/${latlng.lat},${latlng.lng}?lang=es`;

                request({
                        url: urlTemperatura,
                        // Hace el JSON.parse() desde aquí.
                        json: true
                    },
                    (error, response) => {
                        // Sacar temperatura
                        this.temperatura = fahrenheitToCelsius(response.body.currently.temperature);

                        //Imprimir mensaje.
                        console.log(`${this.nombrePersonaje} vive en la calle ${direccion[numRandom].address.street} y hace ${(this.temperatura.toFixed(2))}°`);

                    });

            });
    });

console.log(direccion[numRandom].address.state);