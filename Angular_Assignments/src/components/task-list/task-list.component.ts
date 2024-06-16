import { Component } from '@angular/core';
import { TaskComponent} from '../task/task.component';
import { AddtaskComponent } from '../addtask/addtask.component';
import { PipesExampleComponent } from '../pipes-example/pipes-example.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, AddtaskComponent, PipesExampleComponent],
  templateUrl: './task-list.component.html',
  styles: [],
})
export class TaskListComponent {
  tasks: any[] = [
    {
      id: 1,
      desc: 'come to office',
      priority: 2,
      status: 'Completed',
      class:'btn-success'
    },
    {
      id: 2,
      desc: 'study angular',
      priority: 1,
      status: 'In Progress',
      class:'btn-warning'
    },
    {
      id: 3,
      desc: 'go home',
      priority: 3,
      status: 'Pending',
      class:'btn-danger'
    },
  ];
  RemoveByID(tid: number):void{
    console.log("ID removed is :" +tid);
    this.tasks = this.tasks.filter((a) => a.id != tid);
  }
  AddTask(addtask: any):void{
    this.tasks.push(addtask);

  }
}
