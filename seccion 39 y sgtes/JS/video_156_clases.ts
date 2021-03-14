class Camiseta{

    //propiedades
    private modelo:string;
    private color:string;
    private marca:string;
    private talla:string;
    private precio:string;    

    //metodos
    constructor(modelo, color, marca, talla, precio){
        this.modelo = modelo;
        this.color = color;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color=color;
    }

    public getColor(){
        return this.color;
    }


}

var camiseta = new Camiseta("manga larga","Rojo", "Nike", "L", 14);
//camiseta.setColor("azul");

console.log(camiseta.getColor());
console.log(camiseta);
