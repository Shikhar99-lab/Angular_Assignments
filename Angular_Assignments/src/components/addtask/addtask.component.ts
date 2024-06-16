import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  @Output() add = new EventEmitter;
  arr:any={id:'',desc:'',status:''} 
  AddTask(arr:any):void{
    this.add.emit(arr);
    this.arr={};
  }
}
