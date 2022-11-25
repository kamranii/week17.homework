import { Component } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent {
  textUnder:string = "No server was created";
  onClick = () => {
  this.textUnder = 'Server was created';
 }
}
