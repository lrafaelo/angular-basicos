import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'  // se ocupa tempalteUrl porque es un template que se tiene en otro archivo
})
export class HeroeComponent{

    nombre:string = 'Iron Man';
    edad  :number = 45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`; 
    }

    cambiarNombre():void{
        this.nombre ='Spider man';
    }

    cambiarEdad():void{
         this.edad = 15;
    }



}