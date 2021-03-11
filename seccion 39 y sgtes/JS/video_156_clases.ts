class Camiseta{

    //propiedades
    private modelo:string;
    private color:string;
    private marca:string;
    private talla:string;
    private precio:string;

    //metodos

    public setColor(color){
        this.color=color;
    }

    public getColor(){
        return this.color;
    }

}

var camiseta = new Camiseta();
camiseta.setColor("azul");

console.log(camiseta.getColor());
