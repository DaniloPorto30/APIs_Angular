import { Photos } from './../../jsonplaceholder.model';
import { PesquisarService } from './../../service/pesquisar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
    photos: any;
    erro: any;

  constructor(private pesquisarService: PesquisarService) { 
    
    this.getterphotos();
  }

  ngOnInit(){}
    getterphotos(){
      this.pesquisarService.getPhotos().subscribe(
        (data: Photos[]) =>{
          this.photos = data;
        },
        (error: any) =>{
          this.erro = error;
          console.log("ERROR:", error);
        }
      );
  }
}
