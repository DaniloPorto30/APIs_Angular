import { Casos } from './../../covid-19.model';
import { Covid19Service } from './../../service/covid-19.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-casos',
  templateUrl: './info-casos.component.html',
  styleUrls: ['./info-casos.component.css']
})
export class InfoCasosComponent implements OnInit {
  Countries: any;
  casos: any;
  erro: any;

  constructor(private covid19Service: Covid19Service) { 
   
    this.getter();
  }

  ngOnInit() {
  }
  getter(){
    this.covid19Service.getInfo().subscribe(
      (data: Casos[]) =>{
        this.casos = data;

        console.log("o data que recebemos", data);
        console.log("a variavel que preenchemos",this.casos);
      },
      (error: any) =>{
        this.erro = error;    
        console.log("ERROR:", error);
      }
    );
  }
}
