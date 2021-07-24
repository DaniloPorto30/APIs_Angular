import { PesquisarService } from './../../service/pesquisar.service';
import { Component, OnInit } from '@angular/core';
import { Albums } from 'src/app/jsonplaceholder.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any;
  erro: any;

  constructor(private pesquisarService: PesquisarService) { 
    
    this.getteralbums();
  }

  ngOnInit(){}
  getteralbums(){
    this.pesquisarService.getAlbums().subscribe(
      (data: Albums[]) =>{
        this.albums = data;
      },
      (error: any) =>{
        this.erro = error;    
        console.log("ERROR:", error);
      }
    );
  }
}
