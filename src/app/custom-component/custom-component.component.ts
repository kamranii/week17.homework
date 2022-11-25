import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent implements OnInit {
  isLoading:boolean = true;
  //first solution

  // constructor(){
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 2000)
  // }

  //seond solution
  //I think this is a better one
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
  }
}