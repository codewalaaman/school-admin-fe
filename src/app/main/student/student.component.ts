import { Component } from '@angular/core';
import { NotFoundDataComponent } from '../../common/not-found-data/not-found-data.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ModalComponent } from '../../common/modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [CommonModule, NotFoundDataComponent, ModalComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
  animations: [
    trigger('accordionAnimation', [
      state('void', style({ height: '0px', opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void <=> *', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class StudentComponent {
  addStudent:boolean=false;
  isStudent:boolean=true;
  isParent:boolean=false;
  isReview:boolean=false;
}
