import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string= 'ang-crud';
  employes =[
    {name:"carlos", position:"developer"},
    {name:"nicolas", position:"gerente"},
    {name:"martin", position:"jefe"},
  ]

  model:any = {};

  addEmployee():void{

  }

  deleteEmployee():void{

  }
  editEmployee():void{

  }

  updateEmployee():void{

  }
}
