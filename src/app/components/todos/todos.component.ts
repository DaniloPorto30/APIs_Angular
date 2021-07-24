import { PesquisarService } from './../../service/pesquisar.service';
import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/jsonplaceholder.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 todos: any;
 erro: any;

  constructor(private pesquisarService: PesquisarService) { 

  this.gettertodos();

}
  ngOnInit() {}
    gettertodos(){
       this.pesquisarService.getTodos().subscribe(
         (data: Todos[])=>{
           this.todos = data;
         },
         (error: any) =>{
          this.erro = error;    
          console.log("ERROR:", error);
        }
      );
  }
 
}
