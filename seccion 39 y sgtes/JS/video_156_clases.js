"use strict";
var Camiseta = /** @class */ (function () {
    //metodos
    function Camiseta(modelo, color, marca, talla, precio) {
        this.modelo = modelo;
        this.color = color;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
