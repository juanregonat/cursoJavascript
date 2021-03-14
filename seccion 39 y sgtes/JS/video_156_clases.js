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
var camiseta = new Camiseta("manga larga", "Rojo", "Nike", "L", 14);
//camiseta.setColor("azul");
console.log(camiseta.getColor());
console.log(camiseta);
