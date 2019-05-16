import {Component} from '@angular/core';
import {Question} from "../../models/question";

@Component({
  selector: 'test',
  templateUrl: 'test.html'
})
export class TestComponent {

  questions: Question[];
  constructor() {
  }

  ngOnInit(){

  }

}
