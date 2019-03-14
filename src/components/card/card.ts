import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../model/student.model';

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {

  text: string;
  @Input('student') student :any;
  @Output('click-card') card = new EventEmitter<any>();

  constructor() {
    console.log('Hello CardComponent Component');
    this.text = 'Hello World';
  }

  clickCard(){
    this.card.emit(this.student);
  }

}
