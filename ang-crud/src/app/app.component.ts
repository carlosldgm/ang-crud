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
  title :string= 'ang-crud';
  employees =[
    {rut:"12463391-5",name:"carlos", position:"developer",email:"carlos@gmail.com"},
    {rut:"1-9",name:"nicolas", position:"gerente",email:"nicolas@gmail.com"},
    {rut:"5576777-7",name:"martin", position:"jefe",email:"martin@gmail.com"}
  ]

  model:any = {};
  model2:any = {};
  addEmployee(): void{
    this.employees.push(this.model);
    this.model = {};
    //this.formulario.reset();
  }

  deleteEmployee(i): void {
    console.log("i " + i);
    this.employees.splice(i,1);
    this.clear();
  }
  editEmployee(i):void{
    this.model = this.employees[i];
  }

  updateEmployee():void{
    
  }

  closeAlert(): void{
    this.msg = null;
  }

  clear(): void{
    this.model = {};
  }
}
