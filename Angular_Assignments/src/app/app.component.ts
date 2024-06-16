import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { ProductGridComponent } from '../components/product-grid/product-grid.component';
import { ResumeFormComponent } from '../components/resume-form/resume-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskListComponent, ProductGridComponent, ResumeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Assignments';
}
