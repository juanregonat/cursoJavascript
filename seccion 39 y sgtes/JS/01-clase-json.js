var bicicleta = {
    color:"Rojo",
    modelo:"BMX",
    frenos:"De disco",
    velocidadMax: "60kmh",
    cambiaColor: function(nuevo_color){
        //bicicleta.color=nuevo_color;
        this.color=nuevo_color;
        
        console.log(bicicleta);

    }
}

console.log(bicicleta);