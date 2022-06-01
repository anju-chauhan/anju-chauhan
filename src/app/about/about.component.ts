import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   green = true
     red = true




  constructor() { }

  ngOnInit(): void {

  }
   change()
   {
    if(this.green){
    this.red = false
  }
   }
   bright(){
    this.red = true

   }

}
