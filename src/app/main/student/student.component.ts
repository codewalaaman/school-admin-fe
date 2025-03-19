import { Component } from '@angular/core';
import { ModalComponent } from '../../common/modal/modal.component';
import { NotFoundDataComponent } from '../../common/not-found-data/not-found-data.component';

@Component({
  selector: 'app-student',
  imports: [NotFoundDataComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {

}
