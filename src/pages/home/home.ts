import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Member} from "../../models/member";
import {TestRoom} from "../../models/testRoom";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  members: Member[];
  tests: TestRoom[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showRankingTable() {
    document.getElementById("ranking").style.display = 'block';
    document.getElementById("testing").style.display = 'none';
    document.getElementById("rankingBtn").style.color = 'green';
    document.getElementById("testingBtn").style.color = 'black'
  }

  showTestRoomTable() {
    document.getElementById("ranking").style.display = 'none';
    document.getElementById("testing").style.display = 'block';
    document.getElementById("rankingBtn").style.color = 'black';
    document.getElementById("testingBtn").style.color = 'green'
  }

}
