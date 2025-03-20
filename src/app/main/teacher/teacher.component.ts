import { Component } from '@angular/core';
import { ModalComponent } from "../../common/modal/modal.component";
import { NotFoundDataComponent } from "../../common/not-found-data/not-found-data.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher',
  imports: [ModalComponent, NotFoundDataComponent,CommonModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {
  addStudent:boolean=false;
  isStudent:boolean=true;
  isParent:boolean=false;
  isReview:boolean=false;
}
