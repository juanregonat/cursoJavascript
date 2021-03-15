interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo: string){
    return function(target: Function) {
        target.prototype.estampacion = function ():void {
            console.log("camiseta estampada con el logo de:" + logo)
        }
    }
}

@estampar('Gucci')


class Camiseta implements CamisetaBase{

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

//clase hija:
class Sudadera extends Camiseta{
    public capucha: boolean;
    
    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }

}

var camiseta = new Camiseta("asdas", "sdsdf", "dasd", "L", 12);
console.log(camiseta);
camiseta.estampacion();


var sudadera = new Sudadera("Manga larga", "Rojo", "Nike", "L", 12);
sudadera.setCapucha(true);
sudadera.setColor("rojo y negro");
console.log(sudadera);
