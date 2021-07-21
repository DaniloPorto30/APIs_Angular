import { PesquisarService } from './../../service/pesquisar.service';
import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/jsonplaceholder.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  erro: any;
  
  constructor(private pesquisarService: PesquisarService) { 

    this.getterposts();
  }

  ngOnInit() {}
    getterposts(){
      this.pesquisarService.getPosts().subscribe(
        (data: Posts[]) =>{
          this.posts = data;
  
          console.log("o data que recebemos", data);
          console.log("a variavel que preenchemos",this.posts);
        },
        (error: any) =>{
          this.erro = error;    
          console.log("ERROR:", error);
        }
      );
      }
  }
 
  
