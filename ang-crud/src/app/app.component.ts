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
    {name:"carlos", position:"developer",email:"carlos@gmail.com"},
    {name:"nicolas", position:"gerente",email:"nicolas@gmail.com"},
    {name:"martin", position:"jefe",email:"martin@gmail.com"}
  ]

  model:any = {};

  addEmployee(): void{
    // alert(this.model.name);
    this.employees.push(this.model);
    //this.formulario.reset();
  }

  deleteEmployee(i): void {
    console.log("i " + i);
    this.employees.splice(i,1);
  }
  editEmployee():void{

  }

  updateEmployee():void{

  }

  closeAlert(): void{
    this.msg = null;
  }

  limpiaCampos(): void{
    this.model.name = "";
  }
}
