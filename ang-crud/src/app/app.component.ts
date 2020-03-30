import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  // form: FormGroup;
  msg: string;
  title: string = 'ang-crud';
  employees = [
    { rut: "12463391-5", name: "carlos", position: "developer", email: "carlos@gmail.com" },
    { rut: "1-9", name: "nicolas", position: "gerente", email: "nicolas@gmail.com" },
    { rut: "5576777-7", name: "martin", position: "jefe", email: "martin@gmail.com" }
  ]

  model: any = {};
  addEmployee(): void {
    for (let i = 0; i < this.employees.length; i++) {
      const element = this.employees[i];
      if (this.employees[i].rut == this.model.rut) {
        this.updateEmployee(i);
        this.model = {};
        this.msg = "Usuario Modificado!"
        return;
      }
    }
    this.employees.push(this.model);
    this.model = {};
    this.msg = "Usuario Agregado!"
  }

  deleteEmployee(i): void {
    console.log("i " + i);
    this.employees.splice(i, 1);
    this.clear();
    this.msg = "Usuario Eliminado!"
  }
  editEmployee(i): void {
    this.model = this.employees[i];
  }

  updateEmployee(pos): void {
    this.employees[pos] = this.model;
  }

  closeAlert(): void {
    this.msg = null;
  }

  clear(): void {
    this.model = {};
  }
}
