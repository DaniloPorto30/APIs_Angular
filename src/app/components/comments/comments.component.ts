import { PesquisarService } from './../../service/pesquisar.service';
import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/jsonplaceholder.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any;
  erro: any;

  constructor(private pesquisarService: PesquisarService) { 

    this.gettercomments();
  }

  ngOnInit(){}

    gettercomments(){
      this.pesquisarService.getComments().subscribe(
        (data: Comments[]) =>{
          this.comments = data;
  
          console.log("o data que recebemos", data);
          console.log("a variavel que preenchemos",this.comments);
        },
        (error: any) =>{
          this.erro = error;    
          console.log("ERROR:", error);
        }
      );
      }
  }

