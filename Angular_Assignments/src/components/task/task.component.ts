import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-component',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task.component.html',
  styles: []
})
export class TaskComponent {
  @Input() taskItem: any;
  @Output() hatao = new EventEmitter()
  onRemove(tid: number): void {
    this.hatao.emit(tid);
  }
}
