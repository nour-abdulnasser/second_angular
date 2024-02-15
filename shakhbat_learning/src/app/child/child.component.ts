import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() bl7: string = '';

  @Output() sendMsg: EventEmitter<string> = new EventEmitter();
  sayHi(){
    // console.log("Hi");
     this.sendMsg.emit("hello")
  }


}
