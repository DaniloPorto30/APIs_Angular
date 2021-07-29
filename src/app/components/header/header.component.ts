import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo1: string = 'assets/image/logo1.png' ;
  logo2: string = 'assets/image/logo2.png' ;

  constructor() { }

  ngOnInit(): void {
  }

}
