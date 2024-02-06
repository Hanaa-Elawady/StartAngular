import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  imagesrc:string[] =['./assets/img/poert1.png', './assets/img/port2.png','./assets/img/port3.png','./assets/img/poert1.png', './assets/img/port2.png','./assets/img/port3.png']
  imgmodal:string='';

  modalpop(y:number):void{
    this.imgmodal=this.imagesrc[y]
  }

  Color: string = '#2C3E50';

}
