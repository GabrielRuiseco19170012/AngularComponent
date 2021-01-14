import {Component, OnInit} from '@angular/core';
import {Persona} from '../../models/persona';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  personasArray: Persona[] = [
    {id: 1, nombre: 'Carlos', apellido: 'Hernandez', sexo: 'Masculino', edad: 21},
    {id: 2, nombre: 'Eduardo', apellido: 'Meraz', sexo: 'Masculino', edad: 24},
    {id: 3, nombre: 'Fernando', apellido: 'Diaz', sexo: 'Masculino', edad: 26},
  ];

  persona4: Persona = {id: 4, nombre: 'Lizbeth', apellido: 'Rodriguez', sexo: 'Femenino', edad: 21};
  selectedpersona: Persona = new Persona();


  constructor() {
  }

  ngOnInit(): void {
  }

  addOrEdit(): void {
    this.selectedpersona.id = this.personasArray.length + 1;
    const ix = this.selectedpersona ? this.personasArray.findIndex(h => h.id === this.selectedpersona.id) : -1;
    if (ix > -1) {
      this.personasArray[ix] = this.selectedpersona;
    } else {
      this.personasArray.push(this.selectedpersona);
    }
    this.selectedpersona = new Persona();
  }

  openForEdit(persona: Persona): void {
    this.selectedpersona = persona;
  }
}
