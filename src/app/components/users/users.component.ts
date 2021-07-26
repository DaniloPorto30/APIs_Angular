import { PesquisarService } from './../../service/pesquisar.service';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/jsonplaceholder.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   users: any;
   erro: any;

  constructor(private pesquisarService: PesquisarService) {

    this.getterusers();
   }

  ngOnInit() {}
  getterusers(){
    this.pesquisarService.getUsers().subscribe(
      (data: Users[]) =>{
        this.users = data;
      },
      (error: any) =>{
        this.erro = error;
        console.log("ERROR:", error);   
      }
    );
  }
}
