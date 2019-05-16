import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Test} from "../../models/test";
import {TestProvider} from "../../providers/test/test";
import {Question} from "../../models/question";
import {Mondai} from "../../models/mondai";


@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  level: string;
  tests: Test[];
  mondais: Mondai[];
  questions: Question[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public testService: TestProvider) {
    this.level = navParams.get("level");
  }

  async ionViewDidLoad() {
    try {
      const testData = await this.testService.getTest();
      if (Array.isArray(testData)) {
        this.tests = testData.filter(test => test.level === this.level);

        for (let i=0; i<this.tests.length; i++){
          console.log(this.tests[i].content)
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
}
