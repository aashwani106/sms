import { Component } from '@angular/core';
import {MainService} from '../servicess/main.service'

interface DataItem {
  sno : number;
  name: string;
  subject: string;
  marks : number ;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private mainService:MainService){}

  data : DataItem[] = [
    { sno: 1, name: 'John Doe', subject: 'john@example.com' , marks : 20},
    { sno: 2, name: 'Jane Smith', subject: 'jane@example.com' , marks : 20},
    { sno: 3, name: 'Alice Johnson', subject: 'alice@example.com', marks : 20 },
    // Add more demo data items as needed
  ];


  async ngOnInit(){
    let resp = await this.mainService.getAllData()
  }
}
