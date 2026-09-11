//una veterinaria necesita desarrolar un sistema para la atencion de mascotas
//animal, propietario, atencion

class Animal{
    nombre
    raza
    especie
    edad

    constructor(nombre, raza, especie,edad){
        this.nombre=nombre
        this.raza=raza
        this.especie=especie
        this.edad=edad
    }
     registrarNombre(nuevonombre){
        this.nombre=nuevonombre
    }

    registrarRaza(nuevaraza){
        this.raza=nuevaraza
    }

    registraEspecie(nuevaespecie){
        this.especie=nuevaespecie
    }

    registrarEdad(nuevaedad){
        this.edad=nuevaedad
    }

    mostarInformacion(){
        console.log(this.nombre+this.raza)
    }
   

}
class Propietario{
    nombrePropietario
    Direccion
    Telefono
   
    constructor(nombre,Direccion,Telefono){
        this.nombrePropietario=nombre
        this.Direccion=Direccion
        this.Telefono=Telefono
        this.mascota=[]
    }

    registrarNombre(nuevonombre){
        this.nombrePropietario=nuevonombre  
    }

    registrarDireccion(nuevaDireccion){
        this.Direccion=nuevaDireccion
    }
    registarTelefono(nuevoTelefono){
        this.Telefono=nuevoTelefono
    }

    registrarMascota(nuevamascota){
     //pop, unshift, shift, push
     this.mascota.push(nuevamascota)  
    }
    mostarInformacion(){
        console.log("mascota: "+this.mascota[0].nombre+"Propietario: "+this.nombrePropietario)
    }
}
let colmillo=new Animal(" colmillo "," pitbull "," perro ", 12)
colmillo.mostarInformacion()
let alexa=new Propietario(" Alexa "," 123 "," 123 ")
alexa.registrarMascota(colmillo)
alexa.mostarInformacion()
