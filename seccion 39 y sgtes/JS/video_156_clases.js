var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    //metodos
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.setColor("azul");
console.log(camiseta.getColor());
