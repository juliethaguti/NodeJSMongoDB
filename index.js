const express = require('express');
const
const calcularPrecio = require('./calcular');

const precio = calcularPrecio(200);


console.log(precio);