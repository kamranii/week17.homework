import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent {
  isLoading:boolean = true;
  constructor(){
    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
  }
}
